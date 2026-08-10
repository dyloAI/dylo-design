---
name: dylo-design
description: Use this skill to generate well-branded interfaces and assets for dylo, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## dylo in one line
We make **dílo** (a crafted work) — not **robota** (drudgery). Monochrome foundry aesthetic, one oxide accent, Space Grotesk + Space Mono, keystone mark.

## Non-negotiables
- Brand name always lowercase: **dylo**.
- Exactly one accent (Oxide `#9A5236`), used **once per view**. Never a second hue.
- Two fonts only: Space Grotesk (human) + Space Mono (technical labels, uppercase, wide tracking).
- No emoji. Line icons only (Lucide), 2px stroke.
- The keystone mark is fixed — never recolour, rotate, restack, or add effects. Use the files in `assets/`.
- Cards = ink border + hard block-shadow offset, barely rounded. Not soft floating cards.

## Where things live
- `styles.css`, `tokens/`, `fonts.css` — link `styles.css` to get every token and font.
- `components/` — Button, Input, Card, Badge, Eyebrow (React, styled with the CSS custom properties).
- `assets/` — the keystone mark and logo lockups, in SVG and PNG.
- `templates/brand-book/` — the full brand book, if you need to show or print it.
- `ui_kits/website/` — a working recreation of the dylo marketing site.
