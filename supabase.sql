create table if not exists profiles(
  id uuid primary key references auth.users on delete cascade,
  email text unique,
  name text,
  stripe_customer_id text
);
alter table profiles enable row level security;
create policy "profiles owner all" on profiles
  for all using (auth.uid() = id) with check (auth.uid() = id);

create table if not exists subscriptions(
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users on delete cascade,
  stripe_customer_id text,
  stripe_subscription_id text,
  plan text,
  status text,
  current_period_end timestamptz,
  created_at timestamptz default now()
);
alter table subscriptions enable row level security;
create policy "subscriptions owner select" on subscriptions
  for select using (auth.uid() = user_id);

create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email) values (new.id, new.email) on conflict (id) do nothing;
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
