# dylo — Design System

**dylo** is a technology provider. We build and look after web apps for companies with 1 to 500 employees and no tech team. The buyer is an owner or a director. The name comes from the Czech word **_dílo_**, a piece of work. The brand line is **Software, made.**

This project **is** the design system — a folder the compiler reads to ship tokens, fonts, assets, and components to consumers. Link `styles.css` to pick up the whole foundation.

> **Sources.** Brand foundation (tokens, components, guideline specimens, brand book) was authored from scratch in an earlier design pass and imported here from an attached local codebase (`Dylo brand system design-3/`) — no external Figma. A GitHub repo, `dyloAI/dylo-design`, was also provided as a design-system reference; at the time of this build it returned empty (no default-branch tree, no readable files), so nothing could be imported from it. If it's populated later, re-run a sync to pull real product screens from it: https://github.com/dyloAI/dylo-design — exploring it further may reveal actual product UI worth recreating in a dedicated UI kit.

---

## Content fundamentals

**Voice: calm and trustworthy.** Plain words. We say what it costs and when it will be ready. Honest, short, and free of hype. Call dylo a technology provider. In anything a customer reads, do not call it an agency, a consultancy, or a software factory, and do not mention AI.

- **Plain and reassuring.** Short sentences. Say the thing, then stop.
- **Clear about cost and time.** A price and a date belong in the first explanation. If a date is not known yet, say so.
- **Numbers over adjectives.** "A working web app in six weeks" is the form to use.
- **Casing is a rule, not a style.** The brand is always lowercase — **dylo**. The *work* is capitalised — a Dílo.
- **First / second person:** "we" (dylo) and "you" (the client).
- **No emoji.** Ever. The technical-mono layer carries any texture we need.
- **No buzzwords:** leverage, synergy, best-in-class, cutting-edge, seamless, unlock, supercharge.

**Taglines.** Use one. The primary is **Software, made.** Spanish: **Software, hecho.**

1. Software, made. / Software, hecho. *(primary)*
2. Web apps, built and looked after. / Aplicaciones web, hechas y mantenidas.
3. A clear price. A date you can plan around. / Un precio claro. Una fecha para planificar.
4. For companies without a tech team. / Para empresas sin equipo técnico.
5. We build it. We look after it. / Lo construimos. Lo mantenemos.

**Tone by channel**

- **Website.** The primary tagline, then who it is for, that we build the app and look after it, and that the price and the date come first.
- **Proposals and quotes.** Name the app, the price, what is included, and the date. Say what looking after it costs after launch.
- **Email.** One subject, one ask, written to a director you have already met. If you are waiting, say what you need and by when.
- **Social.** One fact: a price range, a timeline, or who it is for. No emoji.

**Examples**
- ✅ "We will build the web app in six weeks. The price is in the quote, and we look after it once it is live."
- ✅ "Le construimos la aplicación web en seis semanas. El precio está en el presupuesto, y la mantenemos cuando ya está en uso."
- ✅ "Software, made."
- ❌ "We leverage synergies to ideate best-in-class solutions."
- ❌ "Potenciamos sinergias para una transformación digital de primer nivel."
- ❌ "Supercharge your data journey!"

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
- `ui_kits/website/` — the dylo marketing site: sticky nav, hero, work grid, process section, contact form with live submit state. The one product surface this system needs for itself; no other product screens exist in the source material (see caveats).

**Skill**
- `SKILL.md` — how an agent (including Claude Code) should use this system.
