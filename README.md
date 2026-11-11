# dylo — design system

The tokens, Tailwind theme, React components and brand assets behind **dylo**,
a technology provider. We build and look after web apps for companies with
1 to 500 employees and no tech team.

The name comes from the Czech word **_dílo_**, a piece of work. dylo has no
tagline. The promise is a one-off fee, then from €30 a month.

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

# The one item most projects need: light and dark tokens + the Tailwind v4 theme
pnpm dlx shadcn@latest add dyloAI/dylo-design/theme

# Inspect anything before it touches your working tree
pnpm dlx shadcn@latest view dyloAI/dylo-design/dialog
pnpm dlx shadcn@latest add dyloAI/dylo-design/dialog --dry-run
```

Then, in your stylesheet:

```css
@import 'tailwindcss';
@import './dylo/dylo-theme.css';
```

That gives you `bg-background`, `text-emphasis`, `text-default`,
`border-gray-a3`, `bg-interactive`, the 1 to 12 gray and status scales, the
four font families and the marketing effects, all resolving to dylo values in
light and dark. Put `dark` on `<html>` to switch.

Full instructions, including fonts, the theme switch and the Catalyst
compatibility layer, are on the [Install page](https://design.dylo.dev/install).

### Items

| Item                                  | What it installs                                                                           |
| ------------------------------------- | ------------------------------------------------------------------------------------------ |
| `theme`                               | Light and dark tokens plus the Tailwind v4 mapping. Start here.                            |
| `catalyst-theme`                      | Remaps Tailwind `zinc`/`blue` onto the dylo grays for Catalyst apps.                       |
| `fonts`                               | Inter, Geist, Playfair Display and Commit Mono over CDNs, for consumers without next/font. |
| `button` `dialog` `table` `toast` ... | 42 components, as TypeScript source you own, Radix underneath.                             |
| `dashboard-kit`                       | Every product section as a page: shell, lists, details, dialogs, metrics, settings, auth.  |
| `marketing-kit`                       | The marketing site: header, hero, features, pricing, FAQ, blog, changelog, docs shell.     |
| `brand-assets`                        | The mark and logo lockups (black, and white for dark), app icons, call backgrounds.        |
| `agent-rules`                         | Cursor brand rule plus the ESLint adherence config.                                        |

Pin published install commands to a tag so consumers never pick up an
unreviewed change:

```bash
pnpm dlx shadcn@latest add dyloAI/dylo-design/button#v2.0.0
```

### Which layer do I use?

**Product apps** (internal dylo, client apps, `dylo-templates/*`) install
`theme` + `catalyst-theme` and keep Catalyst from **dylo-starter** (including
auth pages and app shell). The `dashboard-kit` is the visual reference for
product screens, not a second app shell; borrow the components Catalyst lacks.

**Marketing / brand collateral** installs the components and `marketing-kit`.

Pin theme installs to a tag. After a design-system release, bump starter and
templates — not already-cloned client apps. Product UI changes sync
starter → templates via `dylo-starter/scripts/sync-from-starter.mjs`.

---

## The system in brief

**Colour.** Monochrome in two themes: near-black text on a near-white page, or
white on black. Neutrals run on one 12-step gray scale, untinted, with a translucent twin,
so a hairline (`border-gray-a3`) sits on any surface. The accent is black in
light and white in dark. Hue carries status only: green, amber, red and blue.

**Type.** Inter for the interface. Geist medium for headings. Playfair Display
for the one large marketing headline. Commit Mono for code, IDs and keys.

**Shape.** 32px controls with 12px corners, 16px panel corners with a hairline,
24px marketing feature panels. Only overlays cast a shadow.

**Effects.** Marketing surfaces get glass calls to action, a fading highlight
line, a soft spotlight and a gradient headline. The dashboard stays flat.

**Motion.** 150 to 200ms for interaction, overlays that fade and scale in from
98%, sheets that slide over 500ms. All of it collapses under reduced motion.

**Voice.** Calm and trustworthy. Plain words, a price and a date, numbers
instead of adjectives, short sentences. We and you. Lowercase dylo. No emoji.
The full guide, in English and Spanish, is in
[rules/dylo-brand.mdc](rules/dylo-brand.mdc).

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

### Environment

No required secrets. Optional for local/preview feedback:

| Variable            | Purpose                                                                                  |
| ------------------- | ---------------------------------------------------------------------------------------- |
| `DYLO_FEEDBACK_KEY` | Project feedback key (`dylo_fb_…`). Unset in production so the ingest route stays inert. |

Copy [.env.example](.env.example) to `.env.local` when you need the widget locally.

The docs site imports components straight out of `registry/`, so a preview on
the site cannot drift from what a consumer installs.

### Layout

```
registry/dylo/theme/              Light and dark tokens, Tailwind mapping, Catalyst remap
registry/dylo/ui/                 Components, Radix underneath anything interactive
registry/dylo/blocks/dashboard/   dashboard-kit
registry/dylo/blocks/marketing/   marketing-kit
registry.json                     Root catalogue for the shadcn CLI
rules/                            Cursor rule + ESLint config shipped by `agent-rules`
src/                              The docs site, including full-page kit routes at /kits
public/brand/                     Brand assets, served and shipped
design-source/                    The raw Claude Design export of v1. Reference only.
```

`design-source/` holds the unmodified Claude Design output the first version of
the system was built from. It is not maintained and no longer describes the
current visual system — it exists so the origin of the brand stays legible. The
first commit in this repo is that export, untouched.
