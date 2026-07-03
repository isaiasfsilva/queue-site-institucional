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
   running application, taken from a demo Space seeded specifically for this purpose. They'll go
   stale as the UI evolves — re-take them with a headless browser (Playwright or similar) pointed
   at a real running instance whenever the screens change enough to look outdated. Only 4 of the
   7 captured screenshots are currently used on the page (`kiosk-terminal.png`, `display-board.png`,
   `agent-view.png`, `admin-reports.png`) — `admin-overview.png`, `admin-queues.png`, and
   `admin-branding.png` are left in the folder unused, available if a future revision adds them
   back (e.g. a "how it's configured" section), but can also be deleted if not needed.

## Structure

```
public_html/
  index.html          Main landing page — hero, 3 value blocks (visitor/staff/manager),
                       integrations, closing CTA. Deliberately short and outcome-focused
                       rather than a full feature list — see "Content notes" below.
  terms.html           Terms and Conditions (draft — see notice above)
  css/style.css         Full design system, no external dependencies
  js/main.js            App-link URL injection + mobile nav toggle (no framework)
  images/
    favicon.svg          Brand mark, used as the site favicon
    screenshots/          Real product screenshots (4 used, 3 spare — see above)
  robots.txt
  sitemap.xml
```

## Content notes

- No emojis anywhere on the site, by explicit request — icons are hand-written inline SVG.
- The page is deliberately short and sales-oriented, not a documentation page: 3 outcome-focused
  value blocks (what changes for your visitors, your staff, and you) instead of an exhaustive
  feature grid, and no separate technical "security architecture" section — a landing page's job
  is to sell the outcome, not explain the implementation. If a more detailed features/security
  page is wanted later, it belongs on a separate page linked from here, not bolted onto the
  homepage.
- The "Integrations" section names Painel de Chamada (paineldechamada.com.br) specifically, since
  Yes Queue has a real, working webhook-based integration with it (see `apps/api/src/call-integrations`
  in the main project).
- No fabricated customer testimonials, logos, or usage statistics are included, since none of
  that exists yet for a pre-launch product — the trust bar deliberately describes the target
  market ("clinics, banks, government offices...") rather than naming specific unverified clients.
