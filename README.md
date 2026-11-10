# NightGuildBot website

Redesigned static website built with Astro. Astro generates HTML, CSS and JavaScript at build time; no Node.js server is needed in production.

## Development

```bash
npm install
npm run dev
npm run build
npm run preview
```

The static site is generated in `dist/`. GitHub Actions builds and deploys that directory to GitHub Pages. Set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**.

The original `/docs/*.html`, `/terms.html` and `/privacy.html` routes are retained. The existing logo is reused. Before launch, replace the placeholder Discord invite URL and verify command details, privacy and terms against the live service.
