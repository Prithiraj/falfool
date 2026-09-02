# Falfool website — improved implementation plan

## 1. Evidence baseline

Production-safe core facts used in this prototype:

- FALFOOL RESTAURANT
- Sonnenallee 74, 12045 Berlin
- phone: +49 1577 7771127
- current local rating observed during research: 4.9/5
- current local hours observed during research: Mon–Thu 09:00–23:00, Fri–Sat 09:00–00:00, Sun 09:00–23:00
- falafel is the strongest category signal
- Manakish/stone-oven items are visible in menu/review evidence
- Halloumi, Shish Tawuk, Falafel Dürüm, Falafel Teller, and a vegetarian mix are evidenced on current/recent ordering/menu sources
- Uber Eats and Wolt currently list the restaurant

Launch-time verification remains mandatory for dynamic facts. The prototype intentionally excludes invented founder stories, sourcing claims, awards, reservation policies, permanent prices, certifications, and unsupported services.

## 2. Audience

### Primary
Mobile users already in/near Neukölln deciding where to eat now. They need appetite, trust, open status, directions and ordering in seconds.

### Secondary
Berlin food explorers searching specifically for falafel, manakish, Sonnenallee food, and casual Middle Eastern/Levantine-style food.

### Language behavior
German-first with authentic Arabic identity cues. A complete Arabic or English content layer should only be added if the owner commits to maintaining it.

## 3. Conversion goals

Priority order:

1. Menu discovery / order
2. Directions
3. Call
4. Social engagement

Mobile uses a persistent two-action bar for **Bestellen** and **Route**.

## 4. Creative direction — Neo-Sonnenallee

The earlier warm-editorial direction is upgraded into a more distinctive system:

**warm street food × Berlin night grid × fluorescent ingredient color × technical wayfinding.**

The futuristic layer comes from coordinates, orbital forms, radar-like lines, oversized type and controlled glow—not sci-fi clichés. Food remains the hero.

Design traits:

- futuristic
- kinetic but restrained
- warm
- tactile
- editorial
- urban
- specific to Sonnenallee

Avoid gold/black luxury tropes, generic arches, faux-calligraphy, floating ingredients, scroll hijacking and game UI.

## 5. Color system

- Night Ink `#090D0B`
- Surface `#121A16`
- Warm Cream `#F3EAD8`
- Herb Signal `#C8FF3D`
- Oven Orange `#FF6B38`
- Mint/Cyan Signal `#67F4D4`

The fluorescent green is intentionally a digital translation of herb/freshness rather than a random cyberpunk neon.

## 6. Typography

No dependency-heavy webfont stack is required for v1. Use a strong system sans with extreme scale/weight contrasts. Arabic remains system-rendered with correct language/direction semantics.

If owner-approved brand work later warrants custom fonts, prefer self-hosted variable fonts with explicit commercial licensing.

## 7. Image strategy

Real Falfool photography is the highest-value remaining creative dependency. The prototype uses clearly marked Unsplash demo photography under the Unsplash License. Every demo image carries code/UI markers and a replacement shot list is maintained in `CREDITS.md`.

Final photography should prioritize process over generic beauty shots: oven, frying, dough, assembly, counter, exterior and real service.

## 8. Information architecture

1. Header / fast actions
2. Hero: category + location + rating
3. Evidence strip
4. Signature reasons to choose Falfool
5. Stone-oven/process story
6. Curated menu radar
7. Local rating / social proof
8. Owner-photo gallery
9. Visit / hours / coordinates
10. Ordering CTA
11. Footer

This is intentionally more conversion-oriented than a conventional About/Menu/Gallery sequence.

## 9. Section-by-section layout

### Hero
Oversized stacked type opposite an orbital food image. Product/location clarity is immediate. Rating, daily opening time and postcode establish trust/context without scrolling.

### Signal strip
Four fast evidence points: falafel focus, stone oven/manakish, vegetarian options, daily opening.

### Signatures
Three cards explain why Falfool is memorable among dense nearby competition.

### Oven
High-contrast cream section breaks the dark flow and makes process a visual differentiator.

### Menu Radar
Progressively enhanced category filters. No prices until owner-confirmed canonical menu data exists.

### Social proof
One enormous 4.9 signal rather than fabricated awards or cherry-picked unsupported quotes.

### Gallery
Owner photography becomes the emotional proof layer; demo shots are temporary and visibly labeled.

### Visit
Address, phone, Berlin-time open state, full hours and a CSS map/coordinate treatment with a real Google Maps link.

### Order
A fluorescent full-width closing conversion panel with current third-party delivery routes and phone call action.

## 10. Three.js / animation plan

No Three.js. It does not improve the restaurant story enough to justify WebGL cost.

Motion is limited to:

- IntersectionObserver content reveals
- subtle pointer-position ambient glow on fine-pointer devices
- slow text ticker
- hover micro-interactions

All nonessential motion disappears under `prefers-reduced-motion`.

## 11. Responsive behavior

Mobile is primary. Major changes below ~820px:

- single-column hero
- fullscreen accessible navigation
- two-column evidence strip
- single-column signature/gallery cards
- persistent bottom actions
- large tap targets
- no hover-only meaning

## 12. Accessibility

Target WCAG 2.2 AA:

- semantic landmarks
- one H1 and logical heading order
- skip link
- focus-visible styles
- keyboard navigation
- Escape closes mobile nav
- 44px+ critical touch targets
- no color-only meaning
- meaningful alt text including explicit demo-photo disclosure where relevant
- reduced motion
- RTL/language attributes for Arabic
- progressive enhancement / usable without JS

## 13. Performance

- zero framework
- zero WebGL
- zero animation library
- zero icon library
- zero map SDK
- zero embedded social SDK
- one small JS file
- responsive/lazy-loaded remote demo images
- static map treatment

Production images should be exported to AVIF/WebP and served locally/CDN once owner assets arrive.

## 14. SEO / local discovery

Implemented:

- local-intent title/description
- Open Graph title/description/image
- Restaurant JSON-LD with verified address/phone/geo/hours
- semantic address and phone links
- Google Maps directions link

Before production:

- add canonical production domain
- add real owner-controlled OG image
- reconsider `servesCuisine` with owner wording
- add `sameAs` only after official profiles are confirmed
- re-verify dynamic facts
- add sitemap once final domain exists

## 15. Rights/licensing notes

Green: owner originals, commissioned photography, approved logo/menu data.

Yellow: owner social content only after confirming the account and reuse authority.

Demo only: Unsplash imagery in this prototype; replace to make the site specific to Falfool.

Do not copy review/customer/platform photos without commercial reuse permission.

## 16. Implementation sequence

1. Build framework-free semantic prototype — **done**
2. Implement mobile-first visual system — **done**
3. Add progressive enhancement/reduced motion — **done**
4. Add SEO/JSON-LD — **done**
5. Validate HTML/JS/basic accessibility heuristics — **done in local package**
6. Acquire owner-controlled photography — **pending**
7. Confirm canonical menu/prices/dietary claims — **pending**
8. Add owner legal copy — **pending**
9. Replace demo photography — **pending**
10. Re-verify dynamic business facts — **pending**
11. Add production domain/canonical/sitemap — **pending**
12. Cross-device and screen-reader QA — **pending**

## 17. Acceptance criteria

- User understands “Falafel / Manakish / Sonnenallee” within first viewport.
- Menu/order, directions and phone are obvious on mobile.
- No invented prices, founder story, sourcing, awards, reservation rules or dietary certifications.
- Address, phone, hours and rating are flagged for launch-time re-verification.
- Demo imagery cannot be mistaken internally for production-cleared Falfool photography.
- Core site remains usable without JS.
- Reduced-motion users receive no nonessential movement.
- Keyboard focus is visible and nav/filter controls remain operable.
- No Three.js or unnecessary framework dependency.
- Production build must contain only owner-cleared Falfool photography.
