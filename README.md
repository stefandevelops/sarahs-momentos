# Sarah's Momentos — website prototype

Luxury flower delivery across Belfast and the surrounding area.

Live prototype: https://stefandevelops.github.io/sarahs-momentos/ (deployed by `.github/workflows/deploy.yml` on every push to `main`).
Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · static-friendly (all routes prerendered).

> **PROTOTYPE — PLACEHOLDER DATA.** All product names, descriptions, stems and prices in
> `lib/products.ts` are illustrative placeholders (range £55–£250), not the client's real range.
> Product/hero photography in `public/images/` is AI-generated placeholder imagery.
> Forms (newsletter, enquiry, contact) are not connected. Checkout is a stub — **no payments are integrated.**

### Placeholder data (replace with John's real data)

Everything below lives in **`lib/placeholders.ts`** (marked PLACEHOLDER at the top of the file) and is **not** real:

| Placeholder | Constant | Used by |
|---|---|---|
| Next-day cut-off (1pm) | `NEXT_DAY_CUTOFF_HOUR` / `NEXT_DAY_CUTOFF_LABEL` | Trust strip, delivery checker, `DeliveryInfo`, FAQ |
| No-delivery days (Sunday) | `NO_DELIVERY_WEEKDAYS` | Earliest-delivery calculation |
| Free delivery threshold (£75, NI) | `FREE_DELIVERY_THRESHOLD` | Trust strip, zone cards |
| Delivery zones, BT districts & prices (Belfast BT1–17 £5.95, Greater Belfast BT18–28 & BT36–38 £7.95) | `DELIVERY_ZONES` | `/` "Do we deliver to you?" |
| Overall rating (4.9/5 from 120+) | `RATING` | Trust strip, Reviews |
| Subscription plans & prices (weekly £45 / fortnightly £50 / monthly £55) | `SUBSCRIPTION_PLANS` | Subscriptions section |
| Wedding price guide ("from" prices) | `WEDDING_PRICE_GUIDE` | Weddings section |
| Three example reviews (generic initials, visibly captioned "Example review, placeholder") | `REVIEWS` | Reviews section |
| FAQ answers (delivery, nobody home, substitutions, vase life, hospitals, Valentine's/Mother's Day) | `FAQS` | `/#faq` and `/faq` |

Postcode logic (pure, no React) is in `lib/delivery.ts`; quick unit check: `node scripts/check-delivery.mts` (Node 22.6+).

## Run

```bash
npm install
npm run build
npm run start -- -p 3100   # http://localhost:3100
# or: npm run dev
```

## Where things live

| What | File |
|---|---|
| Logo (single swap point) | `lib/site.ts` → `LOGO` (set `imageSrc` to e.g. `/brand/logo.svg`); rendered by `components/Logo.tsx` |
| Brand details, nav, services | `lib/site.ts` |
| Products, collections, occasions, sizes, prices | `lib/products.ts` |
| Colours & fonts | `app/globals.css` (`@theme`) and `app/layout.tsx` (Jost + Cormorant Garamond italic) |
| Basket (localStorage) + drawer | `components/BasketProvider.tsx`, `components/BasketDrawer.tsx` |
| Homepage sections (trust strip, delivery checker, subscriptions, reviews, FAQ) | `components/TrustStrip.tsx`, `DeliveryZones.tsx` + `PostcodeChecker.tsx`, `Subscription.tsx`, `Reviews.tsx`, `FAQ.tsx` |
| Placeholder prices, zones, cut-offs, rating, reviews, FAQ | `lib/placeholders.ts` |
| Screenshot script (Playwright, Python) | `scripts/screenshots.py` → `screenshots/` |

## Brand palette

- Ink `#0a0a0a`, paper `#ffffff`, stone `#f6f4f0`
- Gold accent `#e0a848` (sampled from the brand artwork) — rules, icons, hover only
- Deep gold `#8b6419` for any gold **text** on white (5.3:1, WCAG AA)
- Blush `#f3d9d1` — sparing accent

## Pages

`/` · `/shop` (filters: collection, occasion, price, sort; supports `?collection=` and `?occasion=`) ·
`/products/[slug]` (Classic/Deluxe/Luxe, delivery date, gift message, add to basket, delivery info) ·
`/weddings-events` (enquiry form) · `/sympathy` · `/about` · `/faq` · `/contact` · `/checkout` (stub)
