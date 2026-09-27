# ABQWaxLashTan.com

Domain-sale landing site for **ABQWaxLashTan.com** — the exact-match Albuquerque wax, lash, and tan `.com`.

**Domain available for acquisition at $43,000** → [sales@desertrich.com](mailto:sales@desertrich.com)

Live: [https://abqwaxlashtan.com/](https://abqwaxlashtan.com/)

## Stack

- **Astro 5** — pure static output (`output: 'static'`)
- **Tailwind CSS 3**
- **TypeScript** (strict)
- **@astrojs/sitemap** (priority + lastmod)
- **Cloudflare Workers Static Assets** + edge Worker (`src/worker.ts`)
- Hero video via Cloudflare Stream; OG image via Cloudflare Images

## SEO / indexing / DA signals

- Edge Worker 301s `www.`, `http`, `/index.html`, and trailing-slash variants to the
  single apex canonical, and emits a matching `Link: rel="canonical"` header on HTML 200s.
- `run_worker_first = true` so redirects are not short-circuited by static assets.
- `workers_dev = false` so the preview host cannot be crawled as a duplicate.
- JSON-LD: Organization, WebSite, WebPage, Product+Offer, FAQPage, HowTo, VideoObject,
  BreadcrumbList, Article.
- Insights blog for topical authority + internal links; `llms.txt` for AI crawlers.
- Mobile: readable 12px+ type, safe-area sticky inquire bar, body padding so footer CTAs stay tappable.

## Conversion

Homepage `#acquisition` includes an inquiry form (opens the buyer's mail client with a
pre-filled offer) plus **Copy email** for mobile users without a mail app.

## Development

```bash
npm install
npm run dev
```

Default local URL: [http://127.0.0.1:4321](http://127.0.0.1:4321) (or the port printed by Astro).

## Build & Deploy

```bash
npm run build && npx wrangler deploy
```

Cloudflare Workers Builds (GitHub → `main`):
- **Build command:** `npm run build`
- **Deploy command:** `npx wrangler deploy`

## Disclaimer

ABQWaxLashTan.com is offered for sale by Desert Rich. Acquisitions settle through Escrow.com.
Market copy on this site is informational and does not constitute an offer of salon services.
