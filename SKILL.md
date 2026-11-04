---
name: dylo-design
description: Use this skill to design and build well-branded interfaces and assets for dylo — production code, prototypes, mocks, slides or static artifacts. Contains the brand rules, colour, type, brand assets, the React component set and the dashboard and marketing kits.
user-invocable: true
---

Read [AGENTS.md](AGENTS.md) for the full contract, then explore the files below.

For production code, install what you need with the shadcn CLI rather than
copying files by hand — every item is versioned and pinnable:

```bash
pnpm dlx shadcn@latest add dyloAI/dylo-design/theme
pnpm dlx shadcn@latest list dyloAI/dylo-design
```

For throwaway artifacts (slides, mocks, static HTML), copy `public/brand/`
assets out and link `registry/dylo/theme/dylo-fonts.css` followed by
`registry/dylo/theme/dylo-tokens.css` — the tokens are plain CSS custom
properties with no Tailwind dependency, so they work in a bare HTML file. Add
`class="dark"` to `<html>` for the dark theme.

If invoked with no other guidance, ask what the user wants to build, ask a few
questions, and act as an expert designer who outputs either HTML artifacts or
production code depending on the need.

## dylo in one line

dylo is a technology provider. We build and look after web apps for companies
with 1 to 500 people and no tech team. There is no tagline. The promise is a
one-off fee, then from €30 a month. Quiet monochrome in a light and a dark
theme, Inter for the interface, the dylo mark.

## Non-negotiables

- The brand name is always lowercase: **dylo**. The work is capitalised: a Dílo.
- Both themes, always. Use semantic utilities (`bg-background`,
  `text-emphasis`, `text-default`, `border-gray-a3`) so nothing needs a
  `dark:` variant, and check every surface in both.
- The accent is black in light and white in dark (`bg-accent
text-on-accent`). One primary action per view.
- Hue carries status only: `text-success`, `bg-warning`, `border-error`,
  `text-info`, or a 1 to 12 step such as `green-9`. Never Tailwind's 50 to 950
  palette.
- Four fonts, one job each: Inter (interface), Geist medium (headings),
  Playfair Display (the one marketing headline), Commit Mono (code and IDs).
- No emoji. Lucide line icons at 16px (Heroicons in Catalyst product apps).
- Never a raw hex value in code. Use a utility, or `var(--dylo-*)` outside
  Tailwind. Catalyst apps may use `zinc-*` / `blue-*` when `catalyst-theme` is
  installed.
- `Button` is the product control; the glass `CtaButton` is for marketing and
  auth screens only. Marketing effects (glass, glow line, spotlight, gradient
  headline) stay off the dashboard.
- The mark is fixed — never recolour, rotate, restack or add effects. Use
  `<Logo>` or the files in `public/brand/`.
- Motion: 150 to 200ms for interaction, overlays scale in from 98%, sheets
  slide over 500ms. Everything collapses under `prefers-reduced-motion`. No
  bounces.

## Where things live

- `registry/dylo/theme/` — light and dark tokens, the Tailwind v4 theme, the
  Catalyst compatibility layer, and the CDN font import. Start here.
- `registry/dylo/ui/` — 42 components, Radix underneath anything interactive.
- `registry/dylo/blocks/dashboard/` — the dashboard kit: shell, every section
  page, dialogs, sheets, empty states and auth screens.
- `registry/dylo/blocks/marketing/` — the marketing kit: header, hero,
  features, pricing, FAQ, blog, changelog, footer and docs shell.
- `public/brand/` — the mark and logo lockups, monochrome and colour, SVG and
  PNG.
- `src/lib/messaging.ts` — the messaging framework, in English and Spanish.
  The docs page is `/foundations/messaging`.
- `rules/` — the Cursor brand rule and the ESLint adherence config.
- `design-source/` — the raw Claude Design export of v1. Reference only; not
  maintained.

## Choosing a layer

**Product apps** (dylo, client apps, anything from `dylo-templates/*`):

- Install `theme` + `catalyst-theme`.
- Keep Catalyst primitives, auth pages, and app shell from **dylo-starter**.
- Use `dashboard-kit` as the visual reference and borrow the components
  Catalyst lacks; do not install it as a second app shell.

**Marketing / brand collateral** (sites, mocks, proposals, docs):

- Install `theme` plus the components and `marketing-kit` as needed.

Do **not** fork Catalyst Button, Input or Badge to make them on-brand — the
theme already did that.
