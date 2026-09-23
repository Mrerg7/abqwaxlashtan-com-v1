# ABQWaxLashTan.com

Domain-sale landing site for an Albuquerque wax, lash, and tan salon concept.

**Domain available for acquisition at $43,000** → [sales@desertrich.com](mailto:sales@desertrich.com)

## Stack

- **Astro 5** — pure static output (`output: 'static'`)
- **Tailwind CSS 3**
- **TypeScript** (strict)
- **@astrojs/sitemap**
- **Cloudflare Workers Static Assets** + edge Worker (`src/worker.ts`)
- Hero video via Cloudflare Stream; OG image via Cloudflare Images

## SEO / indexing

- Edge Worker 301s `www.`, `http`, `/index.html`, and trailing-slash variants to the
  single apex canonical, and emits a matching `Link: rel="canonical"` header on HTML 200s.
  This clears Search Console's **"Alternate page with proper canonical tag"**.
- `run_worker_first = true` is required — without it asset matching short-circuits the
  Worker and `www.abqwaxlashtan.com` keeps returning 200.
- `workers_dev = false` so the preview host cannot be crawled as a duplicate.
- `dist/404.html` is `noindex` and served by `not_found_handling = "404-page"`.
- Canonical, sitemap, JSON-LD (Organization / WebSite / WebPage / Product+Offer / FAQPage /
  Breadcrumb / Article) all render from `src/config/site.ts`.

## Development

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
npm run build && npx wrangler deploy
```

Cloudflare project settings:
- **Build command:** `npm run build`
- **Deploy command:** `npx wrangler deploy`

## Disclaimer

This website is for demonstration and informational purposes only. It does not constitute an offer of services, a commitment to deploy, or a guarantee of outcomes.
