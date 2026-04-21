# Instrumental Morphology

Next.js website deployed to Cloudflare Pages.

## Local Development

```bash
npm install
npm run dev
```

## Cloudflare Pages Setup

- Framework preset: Next.js (Static HTML Export)
- Build command: npm run build
- Build output directory: out
- Node.js version: 22

The project uses static export in next.config.ts, so npm run build produces a fully static site in out/.
No Wrangler or Miniflare required.
