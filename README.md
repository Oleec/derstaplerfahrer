# Der Staplerfahrer Landing

React, Vite, TypeScript, Tailwind and Supabase landing page for a B2B forklift support service in Austria.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Copy `.env.example` to `.env` and set the real values.

3. Run the dev server:

```bash
npm run dev
```

## Supabase

Apply the migration in `supabase/migrations/20260608165100_create_landing_leads.sql`.

The `landing_leads` table accepts anonymous inserts through RLS and does not expose anonymous read, update or delete access.

## Checks

```bash
npm run lint
npm run build
```
