# Yes Queue — Institutional Website

A static, dependency-free marketing site for the institutional/company site (separate from the
running product itself, which lives in `apps/web`). Plain HTML/CSS/JS — no build step, no
framework, no CDN — so it can be deployed to any static host (Nginx, S3 + CloudFront, Netlify,
Vercel, GitHub Pages, etc.) by copying this folder as-is.

## Before going live

1. **Set the real app URL.** Every "Log In" / "Get Started" / "Register" button on the site
   points at `APP_BASE_URL` in [`js/main.js`](js/main.js). It currently defaults to a placeholder
   (`https://app.yesqueue.com`) — change that one constant to wherever the actual Yes Queue
   application is deployed.
2. **Replace the canonical/OG domain.** `index.html` and `terms.html` reference
   `https://www.yesqueue.com/...` in `<link rel="canonical">`, Open Graph, and Twitter Card tags,
   and `sitemap.xml`/`robots.txt` do the same — update all of these to your real domain once
   it's registered.
3. **Finish the Terms and Conditions.** `terms.html` mirrors the draft at
   `../legal/terms-en.md` (see the visible draft notice on the page itself) — it has not been
   reviewed by a lawyer. Fill in the company legal name, jurisdiction, and contact email
   placeholders, and get it reviewed before publishing.
4. **Add a Privacy Policy.** The Terms page links to a Privacy Policy that doesn't exist yet
   (`[link to be added]`) — this needs to be drafted separately; it wasn't in scope for this pass.
5. **Refresh the screenshots periodically.** `images/screenshots/*.png` are real captures of the
   running application (kiosk, display board, agent view, admin panel, reports), taken from a
   demo Space seeded specifically for this purpose. They'll go stale as the UI evolves — re-take
   them with a headless browser (Playwright or similar) pointed at a real running instance
   whenever the screens change enough to look outdated.

## Structure

```
public_html/
  index.html          Main landing page (hero, benefits, how it works, screenshots,
                       integrations, security, CTA)
  terms.html           Terms and Conditions (draft — see notice above)
  css/style.css         Full design system, no external dependencies
  js/main.js            App-link URL injection + mobile nav toggle (no framework)
  images/
    favicon.svg          Brand mark, used as the site favicon
    screenshots/          Real product screenshots used throughout the page
  robots.txt
  sitemap.xml
```

## Content notes

- No emojis anywhere on the site, by explicit request — icons are hand-written inline SVG.
- The "Integrations" section names Painel de Chamada (paineldechamada.com.br) specifically, since
  Yes Queue has a real, working webhook-based integration with it (see `apps/api/src/call-integrations`
  in the main project).
- The "Security & reliability" section only makes claims that are actually true of the running
  product (Postgres Row-Level Security for tenant isolation, Argon2 password hashing, an
  append-only audit log, role-based permissions) — nothing was invented for marketing effect.
- No fabricated customer testimonials, logos, or usage statistics are included, since none of
  that exists yet for a pre-launch product — the trust bar deliberately describes the target
  market ("clinics, banks, government offices...") rather than naming specific unverified clients.
