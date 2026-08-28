# FAMS — Financial & Attendance Management System

Marketing / landing website for FAMS. Built with **Next.js 15 (App Router)**, **TypeScript**,
**Tailwind CSS 3**, **Framer Motion** and **Lucide** icons, and configured for **static export**
so it can be dropped onto any host (cPanel, Nginx, Vercel, Netlify).

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site -> ./out
npm run serve    # preview the exported ./out folder
```

`npm run build` writes a self-contained `out/` folder. There is no Node server to run in
production — it is plain HTML, CSS and JS.

---

## Deploying to a subdomain (cPanel / shared hosting)

1. Run `npm run build`.
2. Upload **the contents of `out/`** (not the folder itself) into the subdomain's document root,
   e.g. `public_html/fams-site/`.
3. Point the subdomain at that directory in cPanel.

The site is completely independent of the existing FAMS application. Nothing here touches
`https://fams.empowersacademy.com/dashboard/`.

`next.config.mjs` sets `trailingSlash: true`, so `/privacy` and `/terms` resolve as
`/privacy/index.html` and `/terms/index.html` — the layout Apache and Nginx expect.

If the site is ever served from a **sub-path** rather than a subdomain root, add
`basePath: '/your-path'` to `next.config.mjs` and rebuild.

---

## Authentication flow — important

Every "Sign In", "Log In" and "Get Started" call to action links to:

```
https://fams.empowersacademy.com
```

They deliberately **do not** deep-link to `/dashboard/`. The application decides whether to show
the login screen or the dashboard based on the visitor's session. This site contains no login
form and duplicates no part of the FAMS authentication system.

The URL lives in one place — `lib/site.ts` (`APP_URL`). Change it there and every button follows.

---

## Things to review before going live

| What | Where | Why |
| --- | --- | --- |
| Contact email | `lib/site.ts` → `SITE.email` | Currently `support@empowersacademy.com`. Every mailto link and the pricing enquiry buttons use it. |
| Pricing figures | `components/Pricing.tsx` → `PLANS[].price` | All three plans read **"On request"**. Replace with real numbers when they are set. |
| Privacy Policy | `app/privacy/page.tsx` | Written as an accurate but generic starting point. Have it reviewed before publishing. |
| Terms of Service | `app/terms/page.tsx` | Same. |
| Open Graph image | `app/layout.tsx` | No social share image yet. Add one to `public/` and reference it in `metadata.openGraph.images`. |

---

## Brand assets

The supplied Fortivex.AI artwork is split into three files in `public/`:

| File | Used by | Notes |
| --- | --- | --- |
| `fortivex-mark.png` | Navbar, legal-page header, dashboard mock | The FX symbol on its own. Original colours — the gradient reads perfectly on the dark background. |
| `fortivex-logo-light.png` | Footer | Full lockup with the navy letterforms recoloured to white. The FX mark, the gradient `X` and `.AI` are untouched. |
| `fortivex-logo.png` | — | The original artwork, trimmed. Kept for light backgrounds, print and email signatures. |

The navy wordmark in the original is close to invisible on `#050816`, which is why the footer uses
the light variant. Swap the import in `components/Footer.tsx` if you ever put the footer on a light
surface.

`favicon.png` is the FX mark on a dark rounded square, referenced from `app/layout.tsx`.

---

## Project structure

```
app/
  layout.tsx        Root layout, SEO metadata, JSON-LD, self-hosted fonts
  page.tsx          Section order for the landing page
  globals.css       Design tokens, component classes, motion utilities
  fonts/            Inter + Plus Jakarta Sans (variable woff2, self-hosted)
  privacy/, terms/  Legal pages
  robots.ts,
  sitemap.ts        Generated at build time
components/
  Navbar, Hero, Stats, Features, Modules, ProductShowcase, HowItWorks,
  Benefits, Security, UseCases, WhyFams, Pricing, CTA, Footer
  DashboardUI.tsx   The application mock — pure markup + SVG, no screenshots
  BrowserFrame.tsx  Browser chrome around the mock
  LegalShell.tsx    Shared shell for the legal pages
  ui/
    Reveal.tsx      Scroll-triggered fade + slide
    Counter.tsx     Count-up on first view
    Stage.tsx       Scales the fixed-size mock to fit any viewport
    Ambient.tsx     Drifting gradient orbs
    SectionHeading.tsx
lib/
  site.ts           APP_URL, site metadata, navigation
  utils.ts
```

### The dashboard mock

`components/DashboardUI.tsx` renders at a fixed **1160 × 700** and is scaled down by
`ui/Stage.tsx` using a CSS custom property (`--s`) that changes per breakpoint. That keeps the
interface proportions identical from a 375px phone to a 1440px desktop — and is why the page has
no horizontal overflow at any width. If you replace the mock with a real screenshot, keep it
inside `Stage` so that behaviour survives.

### Fonts

Inter and Plus Jakarta Sans are **self-hosted** (`app/fonts/*.woff2`, latin subset, ~75 KB total),
loaded through `next/font/local`. No request ever leaves the visitor's browser for a font, and the
build does not depend on Google Fonts being reachable.

---

## Accessibility & SEO

- One `<h1>`, then a clean `h2` → `h3` outline; the dashboard mock uses no headings.
- Skip-to-content link, `aria-expanded`/`aria-controls` on the mobile menu, visible focus rings.
- `prefers-reduced-motion` disables every animation and smooth scrolling.
- Metadata, Open Graph, Twitter card, JSON-LD `SoftwareApplication`, `robots.txt`, `sitemap.xml`.

---

## Verified

Checked in a headless Chromium against the production export at 1440, 1280, 1024, 768, 480 and
375px: no horizontal overflow at any width, no console errors, every in-page anchor resolves, and
every application link points at `https://fams.empowersacademy.com`.
