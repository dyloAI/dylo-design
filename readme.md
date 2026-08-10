# dylo — Design System

**dylo** is an AI-native software factory for SMBs — it also serves startups and enterprise. The name plays on Czech: **_dílo_** — a crafted work, an opus — set against **_robota_**, the word for forced, repetitive drudgery that gave English "robot." The whole brand runs on that one contrast: **we make _dílo_, not robota.** Authored work, never anonymous output.

This project **is** the design system — a folder the compiler reads to ship tokens, fonts, assets, and components to consumers. Link `styles.css` to pick up the whole foundation.

> **Sources.** Brand foundation (tokens, components, guideline specimens, brand book) was authored from scratch in an earlier design pass and imported here from an attached local codebase (`Dylo brand system design-3/`) — no external Figma. A GitHub repo, `dyloAI/dyld-design`, was also provided as a design-system reference; at the time of this build it returned empty (no default-branch tree, no readable files), so nothing could be imported from it. If it's populated later, re-run a sync to pull real product screens from it: https://github.com/dyloAI/dyld-design — exploring it further may reveal actual product UI worth recreating in a dedicated UI kit.

---

## Content fundamentals

**Voice: precise, engineered, bold.** We write like engineers who care about the craft.

- **Plain words about real work.** Say what a thing *does*, not what it "leverages." No buzzwords, no hedging.
- **Numbers over adjectives.** "Ship a working pipeline in six weeks" beats "rapidly deliver best-in-class solutions."
- **Confident, never loud.** Short declaratives. We don't oversell; the work speaks.
- **Casing is a rule, not a style.** The brand is always lowercase — **dylo**. The *work* is capitalised — a Dílo. This mirrors the idea: the company is humble, the craft is honored.
- **First / second person:** "we" (dylo) and "you" (the client). Never faceless third-person corporate.
- **No emoji.** Ever. The technical-mono layer carries any "texture" we need.

**Examples**
- ✅ "We'll ship a working data pipeline in six weeks, then iterate."
- ✅ "Software, made." · "Made, not churned." · "We make dílo — not robota."
- ❌ "We leverage synergies to ideate best-in-class solutions."
- ❌ "🚀 Supercharge your data journey!"

Recurring lines: *We make dílo — not robota.* / *Software, made.* / *Made, not churned.* / *The crafted piece that locks the arch.*

---

## Visual foundations

The system is an **industrial foundry**: monochrome, structural, utilitarian, with a single molten note.

- **Colour.** Warm monochrome does ~95% of the work — **Ink `#1B1714`**, Graphite, Concrete, on **Bone `#ECE6D8`** / Paper surfaces. Exactly one accent: **Oxide `#9A5236`**, a muted rust. Rule: **oxide appears once per view** — the keystone, one link, the single number that matters. Restraint is the brand. Never introduce a second hue.
- **Type.** Two families only. **Space Grotesk** for everything human (display → body → UI), tight tracking on large sizes (`-0.02em` to `-0.05em`). **Space Mono** for the technical layer — eyebrows, labels, data, metadata — usually uppercase with wide tracking (`0.08em`–`0.24em`). The mono layer is what makes it read "engineered."
- **Layout.** Structural grids. A faint 1px grid-paper texture on dark hero surfaces (ink with `rgba(236,230,216,0.05)` lines at 48px). Generous margins; content sits on clear structural lines. Eyebrow label (mono, with a small oxide square) tops most sections.
- **Backgrounds.** Flat colour. No photographic backgrounds, no gradients as decoration. Dark surfaces are Ink; light surfaces are Bone/Paper. The only "pattern" is the engineering grid.
- **Borders & cards.** Hairlines (`#D8CFBC`) on bone; full ink borders (`1px solid #1B1714`) on foundry cards. Cards are barely rounded (`--radius-sm/md`). The **signature card** is a bone panel with an ink border and a hard **block shadow offset** (`6px 6px 0` at 12% ink) — like a stamped plate, not a soft floating card.
- **Corner radii.** Mostly square. Panels `4–8px`. App-icon tiles `~22%`. Pills only for small status chips.
- **Shadows.** Restrained. Soft shadows (`--shadow-md/lg`) only for elevated objects like app icons. The hard block-offset is the brand's real "shadow."
- **Animation.** Minimal and mechanical. Short, linear-to-easeOut transitions (120–180ms). Hover = slight darkening or a 1px shift into the block shadow. Press = shift down/right into the shadow (the plate "seats"). No bounces, no float loops.
- **Hover / press states.** Buttons: ink → graphite on hover; on press, translate `1px,1px` and reduce the block shadow (seats into the page). Links: oxide underline thickens. Never opacity-fade interactive elements to mush.
- **Imagery.** If photography is used, it's warm-neutral, high-contrast, workshop/material in feeling (metal, stone, timber, machined parts) — never glossy stock tech. Prefer real material textures over illustration. No photography is included in this system yet — see caveats.
- **Transparency & blur.** Not part of the vocabulary — surfaces are flat and opaque; the accent focus ring on inputs (`rgba(154,82,54,0.16)`) is the one soft, translucent touch in the system.
- **Fixed elements.** The website nav bar is the only sticky/fixed element in the kit — a plain bone bar with a hairline bottom border, no blur.

---

## Iconography

- **No emoji, ever.** The mono type layer and structural rules carry visual texture instead.
- **Line icons, 2px stroke, square-cut.** When UI icons are needed, use a **utilitarian line set** — [Lucide](https://lucide.dev) is the sanctioned CDN match (consistent 2px stroke, square feel). Keep stroke weight uniform with the mark's line weight. *Flagged substitution:* Lucide is a stand-in chosen to match the brand's stroke; swap for a bespoke set later if desired. None of the built components currently need an icon, so Lucide isn't loaded by default — add it via CDN (`https://unpkg.com/lucide@latest`) the moment a screen needs one.
- **The brand mark is the keystone**, not an icon-family member — it's built from three "stones" (two voussoirs in Ink, the keystone in Oxide). Provided as SVGs/PNGs in `assets/`. Never redraw it; never rotate, recolour, restack, or add effects.
- **Unicode as micro-icons** is acceptable in the mono layer (→, ×, ·, ⁄) — sparingly, matching the label tone.

---

## Components

- **Button** (`components/Button`) — primary / secondary / ghost, three sizes, block-shadow press.
- **Input** (`components/Input`) — text field with a mono uppercase label and oxide focus ring.
- **Card** (`components/Card`) — the signature foundry panel: ink border + hard block-shadow offset.
- **Badge** (`components/Badge`) — status/technical chip in mono type: default / solid / accent / muted.
- **Eyebrow** (`components/Eyebrow`) — the mono section label with an oxide tick; the brand's most recognizable device.

This is the full component inventory carried over from the source brand system — no additional primitives were invented.

---

## Index / manifest

**Foundations**
- `styles.css` — entry point (link this). `@import`s everything below.
- `fonts.css` — Space Grotesk + Space Mono (Google Fonts CDN).
- `tokens/colors.css` — palette + semantic aliases.
- `tokens/typography.css` — families, weights, scale, tracking.
- `tokens/spacing.css` — spacing, radii, borders, shadows.

**Assets** (`assets/`)
- `dylo-mark.svg` / `dylo-mark.png` — keystone mark, monochrome ink.
- `dylo-mark-accent.svg` — keystone with oxide keystone piece.
- `dylo-mark-reversed.svg` / `.png` — bone-on-ink version.
- `dylo-logo-horizontal.svg` / `.png` — primary lockup (mark + wordmark).
- `dylo-logo-horizontal-reversed.svg` / `.png` — lockup for dark surfaces.
- `dylo-logo-stacked.svg` — stacked lockup.
- `dylo-app-icon.svg`/`.png`, `dylo-app-icon-oxide.png` — app-icon tile variants.

**Components** (`components/`) — each has `.jsx`, `.d.ts`, `.prompt.md`, and a `@dsCard` preview: Badge, Button, Card, Eyebrow, Input (see above).

**Specimen cards** (`guidelines/`) — populate the Design System tab (groups: Brand, Colors, Type, Spacing).

**Templates** (`templates/`)
- `templates/brand-book/` — the 14-page dylo Brand Book (idea, name, logo system, colour, type, voice, applications) as a starting-point template.

**UI kits** (`ui_kits/`)
- `ui_kits/website/` — the dylo marketing site: sticky nav, hero, work grid, studio/process section, contact form with live submit state. The one product surface this factory needs for itself; no other product screens exist in the source material (see caveats).

**Skill**
- `SKILL.md` — how an agent (including Claude Code) should use this system.
