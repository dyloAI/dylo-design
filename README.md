# dylo — design system

The tokens, Tailwind theme, React components and brand assets behind **dylo**,
an AI-native software factory for SMBs.

The name plays on Czech: **_dílo_** — a crafted work, an opus — set against
**_robota_**, the word for forced, repetitive drudgery that gave English
"robot". The whole brand runs on that one contrast: **we make _dílo_, not
robota.** Authored work, never anonymous output.

Docs site: **[design.dylo.dev](https://design.dylo.dev)** · Agent contract:
[AGENTS.md](AGENTS.md)

---

## Using it in a project

This repo is a [shadcn source registry](https://ui.shadcn.com/docs/registry/github).
The CLI installs from GitHub directly — there is no npm package and no registry
server in the path.

```bash
# What is available
pnpm dlx shadcn@latest list dyloAI/dylo-design

# The one item most projects need: tokens + the Tailwind v4 theme
pnpm dlx shadcn@latest add dyloAI/dylo-design/theme

# Inspect anything before it touches your working tree
pnpm dlx shadcn@latest view dyloAI/dylo-design/card
pnpm dlx shadcn@latest add dyloAI/dylo-design/card --dry-run
```

Then, in your stylesheet:

```css
@import 'tailwindcss';
@import './dylo/dylo-theme.css';
```

That gives you `bg-ink`, `text-oxide`, `border-line`, `font-mono`,
`shadow-block`, `rounded-md` and the rest, all resolving to dylo values.

Full instructions, including fonts and the Catalyst compatibility layer, are on
the [Install page](https://design.dylo.dev/install).

### Items

| Item                                      | What it installs                                                          |
| ----------------------------------------- | ------------------------------------------------------------------------- |
| `theme`                                   | Design tokens plus the Tailwind v4 mapping. Start here.                   |
| `catalyst-theme`                          | Remaps Tailwind `zinc`/`blue` onto the dylo palette for Catalyst apps.    |
| `fonts`                                   | Space Grotesk + Space Mono over the CDN, for consumers without next/font. |
| `button` `input` `card` `badge` `eyebrow` | The components, as TypeScript source you own.                             |
| `brand-assets`                            | Keystone mark, logo lockups and app icons into `public/brand/`.           |
| `agent-rules`                             | Cursor brand rule plus the ESLint adherence config.                       |
| `website-kit`                             | The marketing site in six composable sections.                            |

Pin published install commands to a tag so consumers never pick up an
unreviewed change:

```bash
pnpm dlx shadcn@latest add dyloAI/dylo-design/button#v1.0.0
```

### Which layer do I use?

Catalyst-based apps — `dylo`, `pss-platform`, anything from the AxLabs
boilerplate — install `theme` + `catalyst-theme` and **keep using Catalyst
primitives**. The compatibility layer remaps Tailwind's `zinc` and `blue`
scales, so every existing `zinc-800` renders Graphite and every focus ring is
Oxide. Do not fork Catalyst's Button, Input or Badge to make them on-brand; take
only `Eyebrow` and the foundry `Card`, which Catalyst has no equivalent for.

Everything else — marketing sites, static mocks, one-off artifacts — installs
the dylo components and uses them directly.

---

## The system in brief

**Colour.** Warm monochrome does about 95% of the work: Ink `#1B1714`,
Graphite, Concrete, on Bone `#ECE6D8` / Paper surfaces. Exactly one accent —
Oxide `#9A5236`, a muted rust — and it appears **once per view**. Never a second
hue.

**Type.** Two families. Space Grotesk for everything human, tightening tracking
as size grows. Space Mono for the technical layer — eyebrows, labels, data —
uppercase with wide tracking. The mono layer is what makes it read
"engineered".

**Shape.** Mostly square: panels at 4–8px, pills only for small status chips.
Hairlines on bone, full ink borders on foundry cards. The signature is a bone
panel with an ink border and a hard block-shadow offset — a stamped plate, not a
soft floating card.

**Motion.** Minimal and mechanical. 120–180ms, linear to ease-out. Press shifts
the element down and right into its own shadow so the plate seats. No bounces.

**Voice.** Precise, engineered, bold. Plain words about real work, numbers
instead of adjectives, short declaratives. No emoji, ever.

---

## Developing

Next.js 16 + React 19, Tailwind CSS v4, TypeScript, pnpm 11.

```bash
pnpm install
pnpm dev
```

| Command                  | Purpose                                  |
| ------------------------ | ---------------------------------------- |
| `pnpm dev`               | Docs site on `http://localhost:3000`.    |
| `pnpm build`             | Production build. Every route is static. |
| `pnpm lint`              | ESLint.                                  |
| `pnpm typecheck`         | `tsc --noEmit`.                          |
| `pnpm registry:validate` | Validate the registry before publishing. |

The docs site imports components straight out of `registry/`, so a preview on
the site cannot drift from what a consumer installs.

### Layout

```
registry/dylo/theme/    Tokens, the Tailwind mapping, the Catalyst layer
registry/dylo/ui/       The five components — canonical source
registry/dylo/blocks/   The marketing site sections
registry.json           Root catalogue for the shadcn CLI
rules/                  Cursor rule + ESLint config shipped by `agent-rules`
src/                    The docs site
public/brand/           Brand assets, served and shipped
design-source/          The raw Claude Design export. Reference only.
```

`design-source/` holds the unmodified Claude Design output the system was built
from, including the original `.jsx` components and the guideline specimen cards.
It is not maintained — it exists so a future sync has somewhere to land and so
the origin of the brand stays legible. The first commit in this repo is that
export, untouched.
