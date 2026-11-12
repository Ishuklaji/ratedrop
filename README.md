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

## Features

- Add a product by URL — Firecrawl extracts name, price, currency, and image
- Automatic daily price checks via a scheduled Vercel cron job
- Email alerts the moment a tracked product's price drops
- Per-product price history chart
- Google sign-in via Supabase Auth
- Remove a product from tracking at any time

## Benefits

- Never overpay — get notified the moment a tracked product's price drops
- No manual checking — prices are rechecked automatically every day
- Works across sites — one tracker for Amazon, Zara, Walmart, and more
- See the full price history for any product before deciding to buy

## Roadmap

- Support tracking price targets and only alerting below a threshold
- Support multiple currencies per user with live conversion
- Add a browser extension for one-click tracking from any product page
- Add weekly digest emails summarizing all tracked products
- Add a mobile-friendly PWA view for tracked products
