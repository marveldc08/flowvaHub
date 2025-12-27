# Recreation of the Rewards page from:
https://www.flowvahub.com

The rewards hub page impliments a **daily streak and points system** using **React (Vite)** and **Supabase**.  
Each user can claim **one streak per calendar day**, earning **5 points per streak**, with automatic streak continuation or reset logic.

---

## Data Model

All reward-related data is stored in the `profiles` table.

### `profiles` table fields used

| Column             | Type    | Purpose                          |
|--------------------|---------|----------------------------------|
| `id`               | uuid    | Matches `auth.users.id`          |
| `points`           | integer | Total points earned              |
| `streaks`          | integer | Current consecutive streak count |
| `last_streak_date` | date    | Prevents multiple claims per day |
| `streak_dates`     | date[]  | History of all streak dates      |

---

## Database Setup

### 1. Create / Update the `profiles` table

```sql
alter table public.profiles
add column if not exists points integer default 0,
add column if not exists streaks integer default 0,
add column if not exists last_streak_date date,
add column if not exists streak_dates date[] default '{}';
```

---

### 2. Auto-create profile on signup

```sql
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
as $$
begin
  insert into public.profiles (id)
  values (new.id);
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
after insert on auth.users
for each row
execute procedure public.handle_new_user();
```

---

### 3. Enable Row Level Security (RLS)

```sql
alter table public.profiles enable row level security;
```

### Policies

```sql
create policy "Users can read own profile"
on public.profiles
for select
using (auth.uid() = id);

create policy "Users can update own profile"
on public.profiles
for update
using (auth.uid() = id);
```

---

## Frontend Setup (React + Vite)

### Supabase client

```ts
import { createClient } from "@supabase/supabase-js";

export default createClient(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY!
);
```

---

##  Streak Rules

 Condition and  Result 

| If it is first streak ever then streak = 1 
| Same day claim is blocked 
| If reward was claimed yesterday then streak continues 
| Missed ≥1 day  equals streak resets 
| Each streak gives +5 points 

---

# Assumptions & Trade-offs

## Assumptions
- A calendar day is defined using the client’s local date
- One active streak per user

### Trade-offs
- Client-side streak logic for speed
- Streak history stored as an array for easy display


