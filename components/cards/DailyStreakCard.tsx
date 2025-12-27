import { Modal } from "antd"
import { useState, useEffect } from "react"
  import supabase from "../../src/lib/supabase";
import { getRewardsData } from "../../api/rewards";

export default function DailyStreakCard() {
  const [loading, setLoading] = useState(false);
  const day = new Date().getDay()
 
  const [showStreaksModal, setShowStreaksModal] = useState(false);

  type Profile = {
  id: string;
  points: number;
  streaks: number;
  streak_days: number[];
};

const [profile, setProfile] = useState<Profile | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);

      // 1️⃣ Get authenticated user
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        setError("Not authenticated");
        setLoading(false);
        return;
      }

      // 2️⃣ Fetch profile
      const { data, error } = await supabase
        .from("profiles")
        .select("id, points, streaks, streak_days")
        .eq("id", user.id)
        .single();

      if (error) {
        setError(error.message);
      } else {
        setProfile(data);
      }

      setLoading(false);
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <div className="p-8">Loading rewards...</div>;
  }

  if (error) {
    return <div className="p-8 text-red-500">{error}</div>;
  }

  if (!profile) {
    return <div className="p-8">No profile found</div>;
  }


// =============================================

const handleClaimStreak = async () => {
  try {
    setLoading(true);
    const updatedProfile = await getRewardsData(profile);
    setProfile(updatedProfile);
  } catch (err: any) {
    console.log(err.message)
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="shadow-[0_5px_15px_rgba(0,0,0,0.05)] rounded-[16px] hover:translate-y-[-5px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] border border-[#f3f4f6] overflow-hidden transition-shadow duration-200">
      <div className="p-[1rem] relative border border-b-[#f3f4f6] bg-[#eef2ff] border-t-0 border-r-0 border-l-0">
        <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-700">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="calendar"
            className="svg-inline--fa fa-calendar  text-[#70D6FF] h-5 w-5 "
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256z"
            ></path>
          </svg>
          Daily Streak
        </h3>
      </div>
      <div className="p-4">
        <div className="font-extrabold text-[36px] text-[#9013fe] mb-2">{profile.streaks} {profile.streaks > 1 ? "Days" : "Day"}</div>

        <div className="flex mt-4 space-x-2 justify-center">
          <div className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 bg-gray-200 text-gray-500 ${day === 1 && "ring-2 ring-[#9013fe] ring-offset-2"} ${profile.streak_days.includes(1) && "bg-gray-300"}`}>
            M
          </div>
          <div className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 bg-gray-200 text-gray-500 ${day === 2 && "ring-2 ring-[#9013fe] ring-offset-2"} ${profile.streak_days.includes(2) && "bg-gray-300"}`}>
            T
          </div>
          <div className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 bg-gray-200 text-gray-500 ${day === 3 && "ring-2 ring-[#9013fe] ring-offset-2"} ${profile.streak_days.includes(3) && "bg-gray-300"}`}>
            W
          </div>
          <div className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 bg-gray-200 text-gray-500 ${day === 4 && "ring-2 ring-[#9013fe] ring-offset-2"} ${profile.streak_days.includes(4) && "bg-gray-300"}`}>
            T
          </div>
          <div className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 bg-gray-200 text-gray-500 ${day === 5 && "ring-2 ring-[#9013fe] ring-offset-2"} ${profile.streak_days.includes(5) && "bg-gray-300"}`}>
            F
          </div>
          <div className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 bg-gray-200 text-gray-500 ${day === 6 && "ring-2 ring-[#9013fe] ring-offset-2"} ${profile.streak_days.includes(6) && "bg-gray-300"}`}>
            S
          </div>
          <div className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 bg-gray-200 text-gray-500 ${day === 7 && "ring-2 ring-[#9013fe] ring-offset-2"} ${profile.streak_days.includes(7) && "bg-gray-300"}`}>
            S
          </div>
        </div>
        <p className="text-[0.875rem] text-gray-600 text-center mt-3">
          Check in daily to to earn +5 points
        </p>
        <button disabled={profile.streak_days.includes(day)} className={`mt-3 w-full py-3 px-6 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-200   ${profile.streak_days.includes(day) ? "disabled bg-gray-200 text-gray-500 cursor-not-allowed" : "bg-[#9013fe] text-white cursor-pointer"} hover:shadow-[0_4px_12px_rgba(144,19,254,0.2)] hover:translate-y-[-2px]`} 
        onClick={() => (setShowStreaksModal(true), handleClaimStreak())}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-zap h-5 w-5"
          >
            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
          </svg>
          Claim Today's Points
        </button>


      </div>

      <Modal title="Daily Streak" open={showStreaksModal} onOk={() => setShowStreaksModal(false)} onCancel={() => setShowStreaksModal(false)} cancelButtonProps={{style : {display: "none"}}}>
         <div className="ant-modal-content ">
                  <button type="button" aria-label="Close"  onClick={() => setShowStreaksModal(false)} className="ant-modal-close">
                    <span className="ant-modal-close-x">
                      <span
                        role="img"
                        aria-label="close"
                        className="anticon anticon-close ant-modal-close-icon"
                      >
                        <svg
                          fillRule="evenodd"
                          viewBox="64 64 896 896"
                          focusable="false"
                          data-icon="close"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"></path>
                        </svg>
                      </span>
                    </span>
                  </button>
                  <div className="ant-modal-body">
                    <div className="relative overflow-hidden">
                      <div className="absolute inset-0 pointer-events-none z-10">
                        <canvas
                          width="322"
                          height="319"
                          style={{zIndex: 2, position: "absolute", pointerEvents: "none", inset: "0px"}}
                        ></canvas>
                      </div>
                      <div className="flex justify-center z-20 relative mb-2">
                        <div className="w-[98px] h-[98px] text-green-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                      </div>
                      <h2 className="text-[24px] font-bold text-center text-[#9013fe] mb-[10px]">
                        {" "}
                        Level Up! 🎉
                      </h2>
                      <div className="text-[36px] font-extrabold my-[10px] bg-linear-to-br from-[#9013fe] to-[#FF9FF5] text-center  bg-clip-text text-transparent [text-shadow:1px_1px_3px_rgba(0,0,0,0.1)]">
                        +5 Points
                      </div>
                      <div className="flex justify-center space-x-1 mb-1">
                        <span className="animate-bounce">✨</span>
                        <span className="animate-bounce">💎</span>
                        <span className="animate-bounce">🎯</span>
                      </div>
                      <p className="text-gray-600 text-[15px] text-center leading-[1.6] mb-[25px]">
                        You've claimed your daily points! Come back tomorrow for
                        more!
                      </p>
                    </div>
                  </div>
                </div>
      </Modal>
    </div>
  );
}
