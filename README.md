# Letters With God

A polished, mobile-first one-page website for the **Letters With God** guided prayer journal. Built with Next.js App Router and ready for Vercel.

## Local setup

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env.local`.
3. Add the Amazon product URL and, when available, the Meta Pixel ID.
4. Start the site with `npm run dev`.

## Configuration

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_AMAZON_PRODUCT_URL` | Destination for every “Get Your Journal” button. |
| `NEXT_PUBLIC_META_PIXEL_ID` | Enables Meta Pixel and records `PageView` plus custom `AmazonCTAClick` events. |
| `NEXT_PUBLIC_SITE_URL` | Canonical production origin used by SEO metadata and the sitemap. |

Vercel Web Analytics is included and activates when the project is deployed on Vercel. CTA clicks are also pushed into `window.dataLayer`, making the page ready for a future analytics provider or tag manager.

## Attribution limitation

The site can record that someone clicked through to Amazon. It cannot directly record an Amazon purchase with the site's Meta Pixel because checkout happens on Amazon. Amazon Attribution links can be added later for campaign-level conversion reporting if the KDP account is eligible.

## Deploy to Vercel

Import this repository in Vercel, add the three environment variables above, and deploy. The standard Next.js build settings are detected automatically.

The site intentionally contains only the MVP landing page. Future `/stories`, `/journal`, and `/community` routes can be added under the App Router without changing the current structure.
