# AGENTS.md

Operating manual for coding agents working in this repository, and for agents in
other repositories that consume the dylo design system.
**Read this in full before making changes.** Humans: see [README.md](README.md).

---

## What this repo is

The dylo **brand and theme** system (v2): light and dark tokens, the Tailwind
mapping, Radix-based React components, a dashboard kit and a marketing kit,
plus the docs site that documents them. Two audiences share one source of truth:

- **The docs site** at `src/app/` imports components straight out of `registry/`.
  There is no copy step, so a preview on the site cannot drift from what a
  consumer installs. Every component page renders its examples in both themes,
  and `/kits` renders every dashboard section and marketing page full-size.
- **The registry** at `registry/` plus [registry.json](registry.json) is a
  shadcn _source registry_. Because the repo is public, the shadcn CLI installs
  from it directly — no npm package, no registry server, no `shadcn build`.

This repo does **not** own product app chrome (Catalyst Button, Sidebar, auth
pages, application shell). Those live in **dylo-starter** and sync into other
templates from there. See [Product apps and templates](#product-apps-and-templates).

Stack: Next.js 16 (App Router) + React 19, Tailwind CSS v4, Radix UI,
TypeScript, pnpm 11, deployed on Vercel. Same stack as the apps that consume it.

---

## If you are consuming the design system

You are in another repo and need dylo-branded UI. **Do not clone this
repository.** Install the pieces you need:

```bash
pnpm dlx shadcn@latest list dyloAI/dylo-design # everything available
pnpm dlx shadcn@latest view dyloAI/dylo-design/dialog # inspect before installing
pnpm dlx shadcn@latest add dyloAI/dylo-design/theme # install
```

Pin published commands to a tag — `...add dyloAI/dylo-design/theme#v2.0.0` — so
a consumer never picks up an unreviewed change.

The CLI needs a `components.json` in the consuming project. Write it by hand.
Running `shadcn init` in an existing app rewrites the global stylesheet, which
you do not want in a Catalyst project.

### Which layer do I use?

This is the decision agents get wrong most often.

```
Is this a product app (internal dylo app, client app, or dylo-templates/*)?
├─ Yes → install "theme" + "catalyst-theme".
│ Keep Catalyst primitives, auth screens and the app shell from the
│ template (dylo-starter lineage).
│ Use "dashboard-kit" as the visual reference and borrow components
│ Catalyst lacks (CodeBlock, Callout, EmptyState, Chart, Toast).
│ Do not install it as a second app shell.
└─ No → marketing site, brand collateral, static mock, proposal surface:
 install "theme" + the components and "marketing-kit" you need.
```

**Do not fork Catalyst's Button, Input or Badge to make them look on-brand.**
The `catalyst-theme` item remaps Tailwind's `zinc` and `blue` scales onto the
dylo grays, so every `zinc-800` in the app already renders a dylo gray and every
focus ring is already neutral. A fork only creates something to keep in sync.

### Product apps and templates

```
dylo-design → theme, brand-assets, agent-rules, components, kits
 ↓ pin shadcn add
dylo-starter → canonical Catalyst + auth + app shell
 ↓ allowlist sync (dylo-starter/scripts/sync-from-starter.mjs)
space / numbers / sales
 ↓ clone once
client apps → diverge freely; no required sync
```

- **Style / brand updates** → bump pinned `theme` + `catalyst-theme` in starter
  and templates.
- **Product UI updates** (Catalyst, auth, shell patterns) → change starter, then
  run the template sync script. Client clones are not updated automatically.

### Import order

```css
@import 'tailwindcss';
@import './dylo/dylo-theme.css';
@import './dylo/dylo-catalyst.css'; /* product / Catalyst apps */
```

### Themes

Light is the default (`:root`). Put `dark` on `<html>` and every token flips;
`dark:` variants follow the same class. A `.light` or `.dark` wrapper forces a
theme for one section, which is how the docs render both panes side by side.
Persist the choice in `localStorage` and apply it with a small inline script
in `<head>` so the page never flashes the wrong theme — the
[Install page](https://design.dylo.dev/install) has the script, and
[src/components/theme-toggle.tsx](src/components/theme-toggle.tsx) is a worked
light / dark / system control.

### Fonts

The theme does **not** load webfonts — CSS requires `@import` to precede every
other rule, so a token file cannot do it. Four families: Inter (interface),
Geist (headings), Playfair Display (the marketing headline) and Commit Mono
(code). Two supported setups:

- **Next.js (preferred).** Load Inter, Geist and Playfair Display with
  `next/font/google` and Commit Mono with `next/font/local`, put the variables
  on `<html>`, then retarget the tokens after the theme import:

  ```css
  :root {
    --dylo-font-sans: var(--font-inter), 'Inter', ui-sans-serif, system-ui, sans-serif;
    --dylo-font-display: var(--font-geist), 'Geist', ui-sans-serif, system-ui, sans-serif;
    --dylo-font-serif: var(--font-playfair), 'Playfair Display', ui-serif, Georgia, serif;
    --dylo-font-mono: var(--font-commit-mono), 'Commit Mono', ui-monospace, monospace;
  }
  ```

  This works because the theme maps fonts with `@theme inline`, so `font-mono`
  emits `var(--dylo-font-mono)` rather than a copied value. See
  [src/styles/tailwind.css](src/styles/tailwind.css) and
  [src/app/layout.tsx](src/app/layout.tsx) for the worked example.

- **Anything else.** Install the `fonts` item and make it the first line of the
  stylesheet, ahead of `@import 'tailwindcss'`.

### Page surface

The theme puts Inter on `body` but sets **no** background or text colour
there — a hard `background-color` on `body` would defeat an app's theme
toggle. Put `bg-background text-emphasis` on `<body>` yourself, or keep
Catalyst's usual `bg-white lg:bg-zinc-100 dark:bg-zinc-950`, which the
compatibility layer resolves to the dylo grays.

### Inherit the rules

```bash
pnpm dlx shadcn@latest add dyloAI/dylo-design/agent-rules
```

Installs the brand rule into `.cursor/rules/` and an ESLint config that fails
raw hex values, Tailwind's default 50 to 950 palette, emoji and off-system font
families — so drift is caught by the linter instead of in review. Catalyst apps
should use the `dyloAdherenceCatalyst` export, which keeps `zinc-*` and
`blue-*` legal.

### Releasing theme changes

When tokens or the Catalyst remap change:

1. Land the change on `main` of this repo.
2. Tag a release (`vX.Y.Z`).
3. In **dylo-starter** and each template, re-install with the pin:
   `pnpm dlx shadcn@latest add dyloAI/dylo-design/theme#vX.Y.Z` (and
   `catalyst-theme` the same way).
4. Open PRs in those template repos. Do **not** chase already-cloned client apps.

After Catalyst / auth / shell changes in **dylo-starter**, run
`node scripts/sync-from-starter.mjs <name>` from **dylo-starter** (see that
repo's TEMPLATE.md).

---

## If you are working _in_ this repo

### Commands

| Command                  | Purpose                                                    |
| ------------------------ | ---------------------------------------------------------- |
| `pnpm dev`               | Docs site on `http://localhost:3000`.                      |
| `pnpm build`             | Production build. Every route is static.                   |
| `pnpm lint`              | ESLint flat config, including the shipped adherence rules. |
| `pnpm typecheck`         | `tsc --noEmit`. Treat as a gate.                           |
| `pnpm registry:validate` | Validate `registry.json`, its includes and its file paths. |
| `pnpm format`            | Prettier.                                                  |

**Run `pnpm typecheck`, `pnpm lint` and `pnpm registry:validate` before
declaring a task done.**

Use `pnpm`. The lockfile is `pnpm-lock.yaml` and the version is pinned in
`packageManager`. Note that `eslint` is held at v9 and `typescript` at v6:
`eslint-config-next` does not yet run on ESLint 10, and `typescript-eslint` does
not yet support TypeScript 7.

### Layout

| Path                              | What it is                                                                               |
| --------------------------------- | ---------------------------------------------------------------------------------------- |
| `registry/dylo/theme/`            | Light and dark tokens, the Tailwind mapping, the Catalyst layer, the CDN font import.    |
| `registry/dylo/ui/`               | One file per component, Radix underneath anything interactive.                           |
| `registry/dylo/blocks/dashboard/` | The dashboard kit: shell, every section page, dialogs, sheets, auth. Data in `data.ts`.  |
| `registry/dylo/blocks/marketing/` | The marketing kit: header, hero, feature panels, pricing, FAQ, blog, footer, docs shell. |
| `registry/dylo/registry.json`     | Item definitions for everything under `registry/dylo/`. Paths are relative to this file. |
| `registry.json`                   | Root catalogue: metadata, `include`, plus the brand-asset and agent-rule items.          |
| `rules/`                          | The Cursor rule and ESLint config shipped by `agent-rules`.                              |
| `src/`                            | The docs site. Not distributed. Component docs live in `src/lib/component-docs/`.        |
| `src/app/(kits)/`                 | Full-page kit routes: `/kits/dashboard/*`, `/kits/marketing/*`, `/kits/auth/*`.          |
| `public/brand/`                   | Brand assets. Served by the site _and_ shipped by `brand-assets`.                        |
| `brand-templates/`                | HTML sources for the rendered brand assets. Capture recipe is in each file.              |
| `design-source/`                  | The raw Claude Design export of v1. See below.                                           |

### Adding or changing a component

1. Edit the `.tsx` in `registry/dylo/ui/`. Tailwind classes only — no inline
   styles, so consumers can override with `className`.
2. Keep it a Server Component unless it needs state or a Radix primitive. Mark
   client files with `'use client'`, and keep functions and icon components on
   the client side of the boundary: they cannot be passed as props from a
   Server Component.
3. Use `cva` for variants, `cn()` for merging, and a `data-slot` attribute. Use
   semantic utilities so the component needs no `dark:` variant.
4. Add the item to `registry/dylo/registry.json`, with `radix-ui` in
   `dependencies` when it uses one. Cross-component imports use
   `@/registry/dylo/ui/<name>` so the CLI can rewrite them to the consumer's
   aliases; `cn` is imported from `@/lib/utils` and declared as the built-in
   `utils` registry dependency. The item `description` is the lead on the docs
   page.
5. Add or update the entry in the matching group file under
   [src/lib/component-docs/](src/lib/component-docs/) and the nav group in
   [src/lib/navigation.ts](src/lib/navigation.ts). The page renders the
   examples in both themes and reads the source from disk.
6. Run the three gates.

### Token changes

`registry/dylo/theme/dylo-tokens.css` holds raw values, light under `:root` and
dark under `.dark`; `dylo-theme.css` maps them onto Tailwind. Change the value
in one place only, and change both themes together. Every token is prefixed
`--dylo-` so it can never collide with a consumer's variables.

Two traps when adding to the Tailwind mapping:

- **Never name a colour after a text size.** A `--color-base` makes
  `text-base` set the colour as well as the size. Surfaces use names such as
  `surface`, `canvas` and `elevated`.
- **Never add a named `--text-*` size.** tailwind-merge reads an unknown
  `text-*` as a colour and drops the colour class beside it. Headlines use
  arbitrary values (`text-[3.5rem]`).

The spacing scale is deliberately **not** remapped — that would quietly change
what `p-5` means. The 12-step scales are mapped as `gray-1` … `gray-12` and
`gray-a1` … `gray-a12`, which never collide with Tailwind's 50 to 950 steps.

### design-source/

The unmodified Claude Design export the v1 system was built from: the original
`.jsx` components, the guideline specimen cards, the brand book and the
`_ds_*` build artifacts. It is **not** maintained, **not** linted and no longer
describes the current visual system. Keep it so the generated origin of the
brand stays legible. The first commit in this repo is that export, untouched.

---

## The brand rules

These bind you whether you are working here or in a consuming repo.

- **The brand is lowercase.** Always `dylo`. The work is capitalised: a Dílo.
- **Both themes, always.** Build with semantic utilities (`bg-background`,
  `text-emphasis`, `text-default`, `border-gray-a3`, `bg-interactive`) so a
  component needs no `dark:` variant, and check every surface in both themes.
- **One neutral.** Gray is the only neutral scale: solid `gray-1` to
  `gray-12`, translucent `gray-a1` to `gray-a12`. It carries no tint in either
  theme. There is no slate scale.
- **The accent is monochrome.** `bg-accent text-on-accent` is black on light
  and white on dark. One primary action per view.
- **Hue carries status, and only status.** Green success, amber warning, red
  error, blue information: `text-success`, `bg-warning`, `border-error`,
  `text-info`, or a 1 to 12 step (`green-9`, `red-a11`). Never Tailwind's
  default 50 to 950 palette, and never hue as decoration. Catalyst apps may
  keep `zinc-*` / `blue-*` when `catalyst-theme` is installed.
- **No raw hex.** Use a utility, or `var(--dylo-*)` outside Tailwind.
- **Four families, each with one job.** Inter for the interface, Geist medium
  for headings, Playfair Display for the one large marketing headline, Commit
  Mono for code, IDs and keys.
- **No emoji. Ever.** Lucide line icons at 16px in the interface. Product
  Catalyst apps use Heroicons as shipped.
- **Shape.** 32px controls with `rounded-xl`; `rounded-2xl` panels with a
  `border-gray-a3` hairline; `rounded-3xl` marketing feature panels with the
  same hairline. Only overlays carry a shadow (`shadow-popover`,
  `shadow-dialog`).
- **Two buttons, two places.** `Button` is the product control. `CtaButton`
  (glass) is for marketing pages and auth screens only.
- **Effects are for marketing.** `glass`, `glow-line`, `spotlight`,
  `fade-edges` and `effect-font-gradient` belong on marketing surfaces. The
  dashboard is flat.
- **Motion.** Interaction is 150 to 200ms with `ease-dylo`. Overlays fade and
  scale in from 98%; sheets slide over 500ms with `ease-drawer`. All of it
  collapses to 1ms under `prefers-reduced-motion`. No bounces, no float loops.
- **Never redraw the mark.** Use `<Logo>` or the files in `public/brand/`. The
  mark is one colour: black on light, the reversed white file on dark.

### Voice

Calm and trustworthy. Plain words. We say what it costs and when it will be
ready. Honest, short, and free of hype.

dylo is a technology provider. We build and look after web apps for companies
with 1 to 500 employees and no tech team. The buyer is an owner or a director.
The name comes from the Czech word _dílo_, a piece of work. dylo has no
tagline. The promise is the one-line pitch.

Call dylo a technology provider. In anything a customer reads, do not call it
an agency, a consultancy, or a software factory, and do not mention AI.

#### How we write

- Plain and reassuring. Short sentences. Say the thing, then stop.
- Honest. If a date is not known yet, say so. Do not imply a promise we cannot
  keep.
- Clear about time. A date belongs in the first explanation. A price belongs
  in the proposal. Public copy states no figure of dylo's: no price, no range
  of what was paid, no maintenance minimum.
- Numbers over adjectives. "A working web app in six weeks" is the form to use.
- First and second person: "we" (dylo) and "you" (the client).
- The brand is lowercase: `dylo`. The work is capitalised: a Dílo.
- No emoji. Ever.
- No buzzwords: leverage, synergy, best-in-class, cutting-edge, seamless,
  unlock, supercharge.

#### No tagline

dylo has no tagline. Do not write "Software, made.", "Software, hecho.", or a
line under the logo. The promise is the one-line pitch. The footer carries the
legal line: dylo is a brand of Ax42 S.L.

#### Customer-facing words

The wording and its rules live in dylo-hq: `content/market/wording.md`, read
at https://hq.dylo.dev/market/wording (behind Vercel sign-in). This design
system holds the visual rules only. If you cannot read dylo-hq, these hold:

- No tagline. No figure of dylo's in public copy.
- One-line pitch: "A dylo engineer builds your web app for a one-off fee, and
  we host it and look after it for a yearly fee." Spanish: "Un ingeniero de
  dylo construye su aplicación web por un pago único, y la alojamos y la
  mantenemos por una cuota anual."
- Do not invent a price, a client, or a competitor. Do not name a client
  without written permission. The customer can take the app elsewhere
  whenever they want. We hand it over.
- dylo is a brand of Ax42 S.L.

#### Tone by channel

**Website.** The one-line pitch, then who it is for, that we build the app and
look after it, and that the price and the date are agreed before we start. No
figure of dylo's. No tagline.

**Proposals and quotes.** Name the app, the price, what is included, and the
date. Say what looking after it costs after launch. Every claim that can be a
number should be a number.

**Email.** Write as you would to a director you have already met. One subject,
one ask. If you are waiting on them, say what you need and by when.

**Social.** One fact: a timeline, a sector, or who it is for. No figure of
dylo's. No emoji.
Do not add a tagline under the logo.

#### English

Do: "We will build the web app in six weeks. The price is in the quote, and we
look after it once it is live."

Don't: "We leverage synergies to deliver best-in-class digital transformation."

Do: "You do not need a tech team. We build the app, then we keep it running."

Don't: "Supercharge your workflow with a seamless AI-native platform."

#### Spanish

Same rules: plain, short, a date, no figure of dylo's in public. Use "usted" with an owner or
director unless they have already used "tú". The brand stays lowercase: dylo.
There is no Spanish tagline. Use the pitch, with usted.

Do: "Le construimos la aplicación web en seis semanas. El precio está en el
presupuesto, y la mantenemos cuando ya está en uso."

Don't: "Potenciamos sinergias para una transformación digital de primer nivel."

Do: "No necesita un equipo técnico. La construimos y la mantenemos."

Don't: "Impulse su negocio con una plataforma innovadora de última generación."

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
