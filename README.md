# ABQWaxLashTan.com

Informational static site for an Albuquerque wax, lash, and tan salon concept.

**Domain available for acquisition** → [sales@desertrich.com](mailto:sales@desertrich.com)

## Stack

- **Astro 5** — pure static output (`output: 'static'`)
- **Tailwind CSS 3**
- **TypeScript** (strict)
- **@astrojs/sitemap**
- **Cloudflare Workers Static Assets** (no adapter)
- Hero image via Cloudflare Images CDN

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
