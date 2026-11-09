# Lola & Lime — Shopify theme

Online Store 2.0 theme port of the Vite marketing site: teal / lime / orange collage energy, ticket nav, hero, finds, featured products, markets, Instagram CTA.

## Quick start (local)

From this `theme/` folder, after you have a Partner development store and Shopify CLI:

```bash
shopify theme dev --store your-store.myshopify.com
```

See the project setup guide: `docs/shopify-setup.md` in the Cursor project store (or ask Dafydd for the copy in chat).

## Structure

- `layout/` — `theme.liquid`, password layout
- `templates/` — JSON templates (OS 2.0) + gift card
- `sections/` — hero, finds, collage, markets, Instagram, vibe, product/collection/cart, header/footer groups
- `snippets/product-card.liquid` — sold-out badge + hover second image when gallery exists
- `assets/` — CSS, JS, logo, collage tiles
