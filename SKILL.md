---
name: dylo-design
description: Use this skill to design and build well-branded interfaces and assets for dylo — production code, prototypes, mocks, slides or static artifacts. Contains the brand rules, colour, type, brand assets and the React component set.
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
properties with no Tailwind dependency, so they work in a bare HTML file.

If invoked with no other guidance, ask what the user wants to build, ask a few
questions, and act as an expert designer who outputs either HTML artifacts or
production code depending on the need.

## dylo in one line

dylo is a technology provider. We build and look after web apps for companies
with 1 to 500 people and no tech team. There is no tagline. The promise is a
one-off fee, then from €30 a month. Warm monochrome, one oxide accent, Space
Grotesk and Space Mono, the keystone mark.

## Non-negotiables

- The brand name is always lowercase: **dylo**. The work is capitalised: a Dílo.
- Exactly one accent — Oxide `#9A5236` — used **once per view**. An `Eyebrow`
  already spends it: its tick is the accent. Never a second hue.
- Two fonts only: Space Grotesk (human) and Space Mono (technical labels,
  uppercase, wide tracking).
- No emoji. Line icons only, 2px stroke (Lucide on foundry surfaces; Heroicons
  in Catalyst product apps).
- Never a raw hex value in code. Use `bg-ink` / `text-oxide` / `border-line`, or
  `var(--dylo-*)` outside Tailwind. Catalyst apps may use `zinc-*` / `blue-*`
  when `catalyst-theme` is installed.
- Two panels. `plate` is the stamped plate (ink border, `shadow-block`) for the
  primary action and product mocks. `editorial` is a hairline, Paper, no
  shadow, for marketing copy. The default stays `plate`.
- Concrete (`#8E857A`) is not text on Bone or Paper. It fails WCAG AA there.
  Secondary text is Graphite.
- The keystone mark is fixed — never recolour, rotate, restack or add effects.
  Use the files in `public/brand/`.
- Motion: 150ms for interaction (`--dylo-duration-fast`). The `reveal` utility
  is opacity plus an 8px rise over 400ms, off under `prefers-reduced-motion`.
  No bounces.

## Where things live

- `registry/dylo/theme/` — tokens, the Tailwind v4 theme, the Catalyst
  compatibility layer, and the CDN font import. **Primary product of this repo.**
- `registry/dylo/ui/` — foundry marketing components (Button, Input, Card, Badge,
  Eyebrow).
- `registry/dylo/blocks/website/` — the marketing site in six sections.
- `registry/dylo/blocks/auth/` and `app-shell/` — **docs / marketing demos only**.
  Product apps use Catalyst auth + shell from **dylo-starter**.
- `public/brand/` — the keystone mark and logo lockups, SVG and PNG.
- `public/brand-book/` — the 15-page brand book, ready to open or print.
- `src/lib/messaging.ts` — the messaging framework, in English and Spanish.
  The docs page is `/foundations/messaging`.
- `rules/` — the Cursor brand rule and the ESLint adherence config.
- `design-source/` — the raw Claude Design export this was built from. Reference
  only; not maintained.

## Choosing a layer

**Product apps** (dylo, client apps, anything from `dylo-templates/*`):

- Install `theme` + `catalyst-theme`.
- Keep Catalyst primitives, auth pages, and app shell from **dylo-starter**.
- Do not install foundry `auth-kit` / `app-shell` into those apps.
- Optional: `Eyebrow` and foundry `Card` when Catalyst has no equivalent.

**Marketing / brand collateral** (sites, mocks, proposals, docs):

- Install `theme` plus foundry components / `website-kit` as needed.

Do **not** fork Catalyst Button, Input or Badge to make them on-brand — the
theme already did that.
