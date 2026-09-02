# Falfool — Neo-Sonnenallee website

A framework-free, mobile-first restaurant site for **FALFOOL RESTAURANT**, Sonnenallee 74, Berlin-Neukölln.

## Direction

The visual system is intentionally **futuristic without becoming game-like**: dark street-night surfaces, fluorescent herb-lime, editorial typography, orbit/coordinate motifs, restrained motion, and high-contrast food imagery. The site positions Falfool around its strongest evidence-backed differentiators: **falafel + Steinofen/Manakish + a strong local rating + Sonnenallee location**.

## Run locally

No build step is required.

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Files

- `index.html` — semantic content, SEO/OG metadata, Restaurant JSON-LD
- `styles.css` — responsive design system, reduced-motion behavior
- `script.js` — navigation, reveal enhancement, menu filters, Berlin-time open state
- `favicon.svg` — lightweight vector favicon
- `DESIGN.md` — improved implementation plan and acceptance criteria
- `CREDITS.md` — demo photography sources and replacement requirements

## Production blockers

1. Replace **all demo Unsplash photos** with owner-controlled Falfool photography.
2. Re-verify opening hours, phone, rating, delivery links, menu items, Instagram handle, and dietary claims immediately before launch.
3. Add the real production domain as canonical/OG URL once known.
4. Add owner-provided `Impressum` and `Datenschutz` content; do not invent legal entity data.
5. Confirm whether `Halal` should be presented as an explicit first-party claim before adding it to visible content or Schema.org.
6. Confirm the exact canonical menu and any prices directly with Falfool before displaying them.

## Accessibility

- semantic landmarks and heading order
- skip link
- keyboard-operable menu
- visible `:focus-visible` states
- reduced-motion mode
- large mobile touch targets
- progressive enhancement: core content/actions work without JavaScript
- Arabic brand text uses `lang="ar" dir="rtl"`

## Performance approach

There is no framework, animation library, WebGL, icon library, map SDK, or social SDK. Images use responsive URLs and lazy loading outside the hero. The map treatment is a lightweight CSS visualization linking to Google Maps rather than an eager iframe.


## GitHub Pages deployment

The project is configured for GitHub Pages at:

`https://prithiraj.github.io/falfool/`

A workflow is included at `.github/workflows/pages.yml` using GitHub's official Pages actions. The repository Pages source must be set to **GitHub Actions** once. Every later push to `main` deploys automatically.
