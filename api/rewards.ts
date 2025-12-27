import supabase from "../src/lib/supabase";

export async function getRewardsData(profile: any) {
  const today = new Date();
  const todayStr = today.toISOString().split("T")[0];

  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split("T")[0];

  // 🚫 Already claimed today
  if (profile.last_streak_date === todayStr) {
    throw new Error("You already claimed today’s streak");
  }

  let newStreaks = 1;

  // ✅ Continue streak if yesterday
  if (profile.last_streak_date === yesterdayStr) {
    newStreaks = profile.streaks + 1;
  }

  const { data, error } = await supabase
    .from("profiles")
    .update({
      streaks: newStreaks,
      points: profile.points + 5,
      last_streak_date: todayStr,
      streak_dates: [...profile.streak_dates, todayStr],
    })
    .eq("id", profile.id)
    .select()
    .single();

  if (error) throw error;

  return data;
}

