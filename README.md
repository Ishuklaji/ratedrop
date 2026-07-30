# Rate Drop

Track prices from any e-commerce site and get emailed the moment they drop.

Paste a product URL (Amazon, Zara, Walmart, etc.), and Rate Drop scrapes the
current price with [Firecrawl](https://firecrawl.dev), stores it in Supabase,
and re-checks it daily via a Vercel cron job. If the price falls, you get an
email alert with the old price, new price, and how much you saved.

## Stack

- [Next.js](https://nextjs.org) (App Router)
- [Supabase](https://supabase.com) — auth (Google OAuth) + Postgres
- [Firecrawl](https://firecrawl.dev) — structured product scraping
- [Resend](https://resend.com) — price-drop email alerts
- Vercel Cron — daily price checks (`/api/cron/check-prices`)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

You'll need a `.env` with:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
NEXT_PUBLIC_SUPABASE_ANON_DEFAULT_KEY=
SUPABASE_SERVICE_ROLE_KEY=
FIRECRAWL_API_KEY=
RESEND_API_KEY=
RESEND_FROM_EMAIL=
NEXT_PUBLIC_APP_URL=
CRON_SECRET=
```
