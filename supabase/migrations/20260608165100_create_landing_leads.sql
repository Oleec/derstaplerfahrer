create extension if not exists "pgcrypto";

create table if not exists public.landing_leads (
  id uuid primary key default gen_random_uuid(),
  company_name text not null,
  contact_name text not null,
  email text,
  phone text,
  location text not null,
  desired_date date,
  service_type text not null check (
    service_type in (
      'kennenlernen',
      'kurz-einsatz',
      'tages-einsatz',
      'express-einsatz',
      'beratung'
    )
  ),
  preferred_contact text not null default 'email' check (
    preferred_contact in ('email', 'telefon', 'whatsapp')
  ),
  message text not null,
  consent_given boolean not null default true,
  status text not null default 'new' check (
    status in ('new', 'contacted', 'quoted', 'closed')
  ),
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table public.landing_leads enable row level security;

drop policy if exists "Allow anonymous lead inserts" on public.landing_leads;

create policy "Allow anonymous lead inserts"
on public.landing_leads
for insert
to anon
with check (consent_given = true);

create index if not exists landing_leads_created_at_idx
on public.landing_leads (created_at desc);

create index if not exists landing_leads_status_idx
on public.landing_leads (status);
