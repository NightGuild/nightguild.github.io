# NightGuildBot website

A small, static website and documentation starter for NightGuildBot. It uses plain HTML, CSS and JavaScript; there is no build step or package install.

## Edit locally

Open `index.html` in a browser, or use a local static server while editing. Shared styling lives in `assets/style.css`, and the small mobile-menu/year script is `assets/app.js`. Documentation pages are in `docs/`.

## Publish with GitHub Pages

1. Put these files in the root of your GitHub repository (so `index.html` is at the root).
2. Open **Settings → Pages** and choose **GitHub Actions** as the deployment source.
3. Push to the `main` branch. The workflow in `.github/workflows/deploy.yml` deploys the static site.
4. Open the **Actions** tab if you need to check the deployment result.

If your default branch is not `main`, update the branch in `.github/workflows/deploy.yml`.

## Before sharing

- Replace the Discord link in `index.html` with your real invite link.
- Add the correct repository link if you want one in the navigation/footer.
- Verify command names, permissions and behaviour against the running bot. The docs are starter notes and intentionally avoid claiming an exact command list that has not been checked.

The site keeps its links relative, so it works as a GitHub Pages project site as well as a root-domain site.
