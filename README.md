# NightGuildBot website

A small, static website for NightGuildBot. It uses plain HTML, CSS and JavaScript; there is no build step or package install.

## Edit locally

Open `index.html` in a browser, or use a local static server while editing. Shared styling lives in `assets/style.css`, the logo is in `assets/`, and the small mobile-menu/year script is `assets/app.js`. Documentation pages are in `docs/`.

## Publish with GitHub Pages

This repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

1. Push the files to the `main` branch.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Open the **Actions** tab and wait for **Deploy NightGuild website** to finish.
5. Visit https://nightguild.github.io/.

The website uses relative links so it works at the root `nightguild.github.io` domain.

## Before sharing

- Replace the placeholder Discord link in `index.html` with your real invite link.
- Verify command names, permissions, and behaviour against the running bot before treating the docs as authoritative.
