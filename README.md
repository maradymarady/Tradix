# Tradix

Master Your Discipline. Master Your Edge.

A trading journal SaaS built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Prisma, and Supabase.

## What's in this scaffold

This is a **full-app scaffold**: every page from the product spec exists as a real route with real
components and realistic sample data, built on a shared design system (`tailwind.config.ts`) and
shared UI primitives (`components/ui`). Data is currently mocked inline in each page — the schema,
auth, and data-fetching wiring points are all in place so you can swap mock arrays for real Prisma/
Supabase queries page by page.

```
app/
  page.tsx                 Landing page
  login/page.tsx           Auth (email + Google + Apple via Supabase)
  onboarding/page.tsx       5-step onboarding flow
  (app)/                   Authenticated app shell (sidebar + topbar layout)
    dashboard/              Overview — all core metrics, AI coach summary, chart
    journal/                Trade list + journal/[id] trade detail
    plan/                   Trading plan & rules
    guardrails/             Loss limits, cooldowns, violations
    notebook/                Markdown notes, ideas, strategies
    sanctuary/              Mood tracker, breathing, gratitude journal
    ai-coach/                Chat interface (wire to /api/coach + Anthropic API)
    academy/                 Lessons with progress tracking
    news/                    Economic calendar + watchlist
    analytics/               Heatmap, setup analysis, mistake breakdown
    profile/, settings/      Account, security, connected brokers

components/
  ui/                       Card, Button, StatCard, Badge, PageHeader
  layout/                   Sidebar, Topbar

lib/
  supabase/                 client.ts (browser), server.ts (RSC/route handlers), middleware.ts
  utils.ts                  cn(), formatCurrency(), formatPercent()

prisma/
  schema.prisma             Full data model: User, Trade, TradingPlan, Guardrail,
                             RuleViolation, NotebookEntry, SanctuaryLog, DailyChecklist,
                             CoachMessage, AcademyProgress, ConnectedBroker

middleware.ts                Protects authenticated routes, refreshes Supabase session
```

## Design system

All brand tokens (colors, radius, shadows, fonts) live in `tailwind.config.ts` and match the
Tradix brand spec exactly — white-dominant background, purple (`#625DF5`/`#7A82F7`) as accent only,
20px radius, Inter + Inter Tight + JetBrains Mono for numeric data.

## Local setup

```bash
npm install
cp .env.example .env.local   # fill in Supabase + database values, see below
npm run db:generate
npm run db:push              # push the Prisma schema to your Supabase Postgres
npm run dev
```

## Deploying to Vercel + Supabase

### 1. Create the Supabase project
1. Go to supabase.com → New Project. Note the project URL and anon/service-role keys under
   **Project Settings → API**.
2. Under **Project Settings → Database**, copy the connection string (use the **pooled** connection
   for `DATABASE_URL` and the **direct** connection for `DIRECT_URL` — Prisma needs both for
   migrations to work reliably against Supabase's pooler).
3. Enable the auth providers you want under **Authentication → Providers** (Email, Google, Apple).
   Add your production URL and `http://localhost:3000` to the redirect allow-list.

### 2. Push the schema
```bash
npm run db:push
```
This creates all tables (`User`, `Trade`, `TradingPlan`, `Guardrail`, etc.) in your Supabase Postgres
instance. For production-grade migrations later, switch to `prisma migrate deploy`.

### 3. Deploy to Vercel
1. Push this repo to GitHub.
2. In Vercel: **New Project → Import** your repo.
3. Add environment variables (from `.env.example`) in **Project Settings → Environment Variables**:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` (server-only, never exposed to the client)
   - `DATABASE_URL`, `DIRECT_URL`
   - `ANTHROPIC_API_KEY` (for the AI Coach — call it from a server route, never from the client)
   - `CLOUDINARY_URL` (for trade screenshot uploads)
   - `NEXT_PUBLIC_APP_URL` (your production URL)
4. Deploy. Vercel auto-detects Next.js — no build config needed.
5. In Supabase **Authentication → URL Configuration**, add your production Vercel URL as a
   redirect URL.

### 4. Wire the AI Coach
Create `app/api/coach/route.ts` as a server route that reads the user's recent `Trade` and
`RuleViolation` rows via Prisma, builds a system prompt from that context, and calls the Anthropic
API with `ANTHROPIC_API_KEY`. Never call the Anthropic API from the client — always proxy through
a server route so the key stays server-side.

### 5. Connect real broker data (optional, later)
The `ConnectedBroker` model and Settings page are scaffolded but unwired — broker API integration
is broker-specific (e.g. MetaTrader bridge, Interactive Brokers API) and should be built as its own
server-side sync job per broker.

## Next steps to take this from scaffold to production
- Replace mock arrays in each page with Prisma queries (Server Components can query Prisma directly)
- Add `app/api/trades/route.ts` etc. for client-side mutations (React Hook Form + Zod validation
  are already in `package.json`)
- Add row-level security policies in Supabase so users can only read/write their own rows
- Wire the TradingView widget into the trade-entry flow
- Add real-time guardrail checks (Supabase Realtime or a cron job) that write to `RuleViolation`
