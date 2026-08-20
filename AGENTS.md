# AGENTS.md

Operating manual for coding agents working in this repository, and for agents in
other repositories that consume the dylo design system.
**Read this in full before making changes.** Humans: see [README.md](README.md).

---

## What this repo is

The dylo **brand and theme** system, plus marketing/foundry UI, and the docs site
that documents it. Two audiences share one source of truth:

- **The docs site** at `src/app/` imports components straight out of `registry/`.
  There is no copy step, so a preview on the site cannot drift from what a
  consumer installs.
- **The registry** at `registry/` plus [registry.json](registry.json) is a
  shadcn _source registry_. Because the repo is public, the shadcn CLI installs
  from it directly — no npm package, no registry server, no `shadcn build`.

This repo does **not** own product app chrome (Catalyst Button, Sidebar, auth
pages, application shell). Those live in **dylo-starter** and sync into other
templates from there. See [Product apps and templates](#product-apps-and-templates).

Stack: Next.js 16 (App Router) + React 19, Tailwind CSS v4, TypeScript, pnpm 11,
deployed on Vercel. Same stack as the apps that consume it.

---

## If you are consuming the design system

You are in another repo and need dylo-branded UI. **Do not clone this
repository.** Install the pieces you need:

```bash
pnpm dlx shadcn@latest list dyloAI/dylo-design          # everything available
pnpm dlx shadcn@latest view dyloAI/dylo-design/card     # inspect before installing
pnpm dlx shadcn@latest add dyloAI/dylo-design/theme     # install
```

Pin published commands to a tag — `...add dyloAI/dylo-design/theme#v1.0.0` — so
a consumer never picks up an unreviewed change.

The CLI needs a `components.json` in the consuming project. Write it by hand.
Running `shadcn init` in an existing app rewrites the global stylesheet and pulls
in Radix, which you do not want in a Catalyst project.

### Which layer do I use?

This is the decision agents get wrong most often.

```
Is this a product app (internal dylo app, client app, or dylo-templates/*)?
├─ Yes → install "theme" + "catalyst-theme".
│        Keep Catalyst primitives from the template (dylo-starter lineage).
│        Auth screens and app shell live in the template — do not replace them
│        with foundry auth-kit / app-shell from this registry.
│        Optional from here: Eyebrow, foundry Card (Catalyst has no equivalent).
└─ No  → marketing site, brand collateral, static mock, proposal surface:
         install "theme" + the foundry components / website-kit you need.
```

**Do not fork Catalyst's Button, Input or Badge to make them look on-brand.**
The `catalyst-theme` item remaps Tailwind's `zinc` and `blue` scales onto the
dylo palette, so every `zinc-800` in the app already renders Graphite and every
focus ring is already Oxide. A fork only creates something to keep in sync.

### Product apps and templates

```
dylo-design          → theme, brand-assets, agent-rules, marketing UI
         ↓ pin shadcn add
dylo-starter         → canonical Catalyst + auth + app shell
         ↓ allowlist sync (dylo-starter/scripts/sync-from-starter.mjs)
space / numbers / sales
         ↓ clone once
client apps          → diverge freely; no required sync
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

### Fonts

The theme does **not** load webfonts — CSS requires `@import` to precede every
other rule, so a token file cannot do it. Two supported setups:

- **Next.js (preferred).** Load Space Grotesk and Space Mono with `next/font`,
  put the variables on `<html>`, then retarget the two tokens after the theme
  import:

  ```css
  :root {
    --dylo-font-display: var(--font-space-grotesk), 'Space Grotesk', system-ui, sans-serif;
    --dylo-font-mono: var(--font-space-mono), 'Space Mono', ui-monospace, monospace;
  }
  ```

  This works because the theme maps fonts with `@theme inline`, so `font-mono`
  emits `var(--dylo-font-mono)` rather than a copied value. See
  [src/styles/tailwind.css](src/styles/tailwind.css) for the worked example.

- **Anything else.** Install the `fonts` item and make it the first line of the
  stylesheet, ahead of `@import 'tailwindcss'`.

### Page surface

The theme puts Space Grotesk on `body` but sets **no** background or text
colour there — a hard `background-color` on `body` would defeat an app's
dark-mode toggle. Set the pair yourself: `bg-bone text-ink` on a light-only
site, or Catalyst's usual `bg-zinc-100 dark:bg-zinc-950`, which the
compatibility layer already resolves to Bone and Ink.

### Inherit the rules

```bash
pnpm dlx shadcn@latest add dyloAI/dylo-design/agent-rules
```

Installs the brand rule into `.cursor/rules/` and an ESLint config that fails
raw hex values, Tailwind's default palette and emoji — so drift is caught by the
linter instead of in review. Catalyst apps should use the
`dyloAdherenceCatalyst` export, which keeps `zinc-*` and `blue-*` legal.

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
| `pnpm lint`              | ESLint flat config.                                        |
| `pnpm typecheck`         | `tsc --noEmit`. Treat as a gate.                           |
| `pnpm registry:validate` | Validate `registry.json`, its includes and its file paths. |
| `pnpm format`            | Prettier.                                                  |

**Run `pnpm typecheck`, `pnpm lint` and `pnpm registry:validate` before
declaring a task done.**

### Internal plans

Working documents for the brand and the Nov 2026 → Oct 2027 scale-up. Read
them when the work is about positioning, the catalog, the brand partner, or
what gets quoted next. The markdown in `docs/` is the source; the site serves
them behind the same passphrase as `/brief-de-marca`.

- [docs/scale-up-plan.md](docs/scale-up-plan.md) — `/plans/scale-up`
- [docs/scale-up-actions.md](docs/scale-up-actions.md) — `/plans/actions`
- [docs/brand-brief.md](docs/brand-brief.md) — `/plans/brand-brief`
  The studio-facing page is `/brief-de-marca`.

Use `pnpm`. The lockfile is `pnpm-lock.yaml` and the version is pinned in
`packageManager`. Note that `eslint` is held at v9 and `typescript` at v6:
`eslint-config-next` does not yet run on ESLint 10, and `typescript-eslint` does
not yet support TypeScript 7.

### Layout

| Path                          | What it is                                                                               |
| ----------------------------- | ---------------------------------------------------------------------------------------- |
| `registry/dylo/theme/`        | Tokens, the Tailwind mapping, the Catalyst layer, the CDN font import.                   |
| `registry/dylo/ui/`           | Foundry marketing components (Button, Input, Card, Badge, Eyebrow).                      |
| `registry/dylo/blocks/`       | Marketing kits (`website-kit`). Foundry auth/app-shell demos are docs-only.              |
| `registry/dylo/registry.json` | Item definitions for everything under `registry/dylo/`. Paths are relative to this file. |
| `registry.json`               | Root catalogue: metadata, `include`, plus the brand-asset and agent-rule items.          |
| `rules/`                      | The Cursor rule and ESLint config shipped by `agent-rules`.                              |
| `src/`                        | The docs site. Not distributed.                                                          |
| `public/brand/`               | Brand assets. Served by the site _and_ shipped by `brand-assets`.                        |
| `brand-templates/`            | HTML sources for the rendered brand assets. Capture recipe is in each file.              |
| `docs/`                       | Working plans. Source for the gated `/plans/*` pages. Not shipped by the registry.       |
| `design-source/`              | The raw Claude Design export. See below.                                                 |

### Adding or changing a component

1. Edit the `.tsx` in `registry/dylo/ui/`. Tailwind classes only — no inline
   styles, so consumers can override with `className`.
2. Keep it a Server Component unless it genuinely needs state. Client blocks
   today: contact form and the docs-only auth / app-shell demos.
3. Use `cva` for variants, `cn()` for merging, and a `data-slot` attribute.
4. Add the item to `registry/dylo/registry.json`. Cross-component imports use
   `@/registry/dylo/ui/<name>` so the CLI can rewrite them to the consumer's
   aliases; `cn` is imported from `@/lib/utils` and declared as the built-in
   `utils` registry dependency.
5. Add or update the entry in [src/lib/component-docs.tsx](src/lib/component-docs.tsx).
   The page renders live examples and reads the source from disk, so nothing else
   needs touching.
6. Run the three gates.

Foundry `ui/` and `website-kit` are for **marketing / brand collateral**. Do not
grow a parallel product component set here — product apps use Catalyst in
dylo-starter.

### Token changes

`registry/dylo/theme/dylo-tokens.css` holds raw values; `dylo-theme.css` maps
them onto Tailwind. Change the value in one place only. Every token is prefixed
`--dylo-` so it can never collide with a consumer's variables.

The spacing scale is deliberately **not** mapped into Tailwind — remapping the
numeric utilities would quietly change what `p-5` means. Radii and shadows _are_
overridden on purpose: in dylo, `rounded-md` is the 8px panel corner.

### design-source/

The unmodified Claude Design export the system was built from: the original
`.jsx` components, the guideline specimen cards, the brand book and the
`_ds_*` build artifacts. It is **not** maintained and **not** linted. Keep it so
a future Claude Design sync has somewhere to land, and so the generated origin
of the brand stays legible. The first commit in this repo is that export,
untouched.

The one exception is the brand book, which is copied to `public/brand-book/` so
the docs site can embed it. Its `ds-base.js` there is a deliberate no-op — see
the comment in the file.

---

## The brand rules

These bind you whether you are working here or in a consuming repo.

- **The brand is lowercase.** Always `dylo`. The work is capitalised: a Dílo.
- **One accent per view.** Oxide appears exactly once. An `<Eyebrow>` already
  spends it — its tick is the accent.
- **Never a second hue.** No green for success, no red for danger. Status is
  carried by the Badge's mono type and border weight.
- **Two families only.** Space Grotesk for anything human, Space Mono for the
  technical layer, uppercase with wide tracking.
- **No emoji. Ever.** Line icons only, 2px square-cut stroke, from Lucide
  (foundry / marketing). Product Catalyst apps use Heroicons as shipped.
- **No raw hex.** Use `bg-ink`, `text-oxide`, `border-line`, `shadow-block`, or
  `var(--dylo-*)` outside Tailwind. Catalyst apps may keep `zinc-*` / `blue-*`
  when `catalyst-theme` is installed.
- **Cards are stamped plates.** Ink border plus `shadow-block`, barely rounded
  (foundry marketing Card).
- **Flat and opaque.** No gradients as decoration, no photographic backgrounds,
  no glass. The only pattern is the 48px engineering grid (`grid-paper`).
- **Mechanical motion.** 120–180ms, linear to ease-out. Press shifts the element
  into its own shadow. No bounces, no float loops.
- **Never redraw the keystone mark.** Use the files in `public/brand/`.

### Voice

Precise, engineered, bold. Plain words about real work — never "leverages".
Numbers over adjectives. Short declaratives. First and second person: "we"
(dylo) and "you" (the client).

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
