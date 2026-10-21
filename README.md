# NightGuildBot Website

A static HTML/CSS/JS website and documentation starter for GitHub Pages. No build step is required.

## Publish
1. Create a GitHub repository for the website, or use the repository you want to publish.
2. Upload the **contents** of this folder to the repository root so `index.html` is at the root.
3. Push to the `main` branch. If your default branch has another name, update `.github/workflows/deploy.yml`.
4. In GitHub, open **Settings → Pages** and choose **GitHub Actions** as the source.
5. Open **Actions** and wait for the Pages deployment workflow to finish. Your URL will appear under Settings → Pages.

## Customize
- Replace the `https://discord.com/` link in `index.html` with your real Discord invite.
- Add links to your bot repository and support server if you want them.
- Verify commands, cooldowns, requirements, and provider support against the actual running bot before publishing.
- `docs/` includes initial guides; the `docs/_template.html` file can be copied for new pages.

## Preview locally
Run `python -m http.server 8000` in this folder and open `http://localhost:8000`.

Note: feature guides are starter content. Confirm exact commands and availability against your current code before presenting them as definitive.
