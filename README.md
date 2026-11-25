# The Wanderers Blog

A static travel blog for [thewanderersblog.com](https://thewanderersblog.com/), built with plain HTML, CSS, and JavaScript. There is no build step, framework, or dependency install.

## Run locally

Open `index.html` in a browser, or serve this folder with any local static file server. The home page and in-site navigation work without a backend. Photos and web fonts are currently served from Unsplash and Google Fonts, so those assets need an internet connection.

## Deploy to Cloudflare Pages

1. Push this repository to GitHub.
2. In Cloudflare, open **Workers & Pages → Create → Pages → Connect to Git** and select the repository.
3. Use these settings:
   - **Framework preset:** None
   - **Build command:** `exit 0` (no build is needed)
   - **Build output directory:** `.` (the repository root)
4. Deploy. Pages serves `index.html` at the root and uses it as the fallback for paths such as `/about`, `/japan`, and `/japan/article-japan-in-spring`.
5. In the Pages project, add `thewanderersblog.com` as a custom domain and follow Cloudflare’s DNS prompts. Add `www.thewanderersblog.com` too if you want the www address, then choose a canonical redirect in Cloudflare.

The site uses browser history for clean routes. Keep the root `index.html` in place and do not add a top-level `404.html` unless you also configure it to return the app shell for these routes.

## Routes in this starter

- `/` — home
- `/about` — about page
- `/japan` — Japan destination index
- `/japan/article-japan-in-spring` — sample article
- `/japan/article-first-trip-to-japan` — sample article
- `/japan/article-slow-kyoto` — sample article
- `/japan/article-ryokan-stay` — sample article

Starter article copy and the newsletter interaction are placeholders to replace as the site grows. The newsletter form is not connected to an email service yet.
