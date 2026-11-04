import { Code, Command, Page, PageHeader, Prose, Section } from '@/components/docs'
import { install, REGISTRY } from '@/lib/registry'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Install',
  description: 'Install the dylo theme, components and kits with the shadcn CLI.',
}

const TAG = 'v2.0.0'

const COMPONENTS_JSON = `{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/styles/tailwind.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}`

const IMPORT_ORDER = `@import 'tailwindcss';
@import './dylo/dylo-theme.css';

/* Catalyst apps only. See below. */
@import './dylo/dylo-catalyst.css';`

const NEXT_FONT = `import { Geist, Inter, Playfair_Display } from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' })
const commitMono = localFont({
  src: [
    { path: '../fonts/commit-mono-latin-400-normal.woff2', weight: '400' },
    { path: '../fonts/commit-mono-latin-700-normal.woff2', weight: '700' },
  ],
  variable: '--font-commit-mono',
  display: 'swap',
})

// Font variables belong on <html>, not <body>.
<html className={[inter.variable, geist.variable, playfair.variable, commitMono.variable].join(' ')}>`

const FONT_OVERRIDE = `:root {
  --dylo-font-sans: var(--font-inter), 'Inter', ui-sans-serif, system-ui, sans-serif;
  --dylo-font-display: var(--font-geist), 'Geist', ui-sans-serif, system-ui, sans-serif;
  --dylo-font-serif: var(--font-playfair), 'Playfair Display', ui-serif, Georgia, serif;
  --dylo-font-mono: var(--font-commit-mono), 'Commit Mono', ui-monospace, monospace;
}`

const THEME_SWITCH = `// Light is the default. Put \`dark\` on <html> for the dark theme.
<html className="dark">
  <body className="bg-background text-emphasis antialiased">

// A section can force one theme regardless of the page:
<div className="light bg-background text-emphasis">...</div>`

const NO_FLASH = `// In <head>, before paint: read the stored choice, fall back to the system.
const script = \`(() => {
  const t = localStorage.getItem('theme') ?? 'system'
  const dark = t === 'dark' || (t === 'system' && matchMedia('(prefers-color-scheme: dark)').matches)
  document.documentElement.classList.toggle('dark', dark)
  document.documentElement.style.colorScheme = dark ? 'dark' : 'light'
})()\`

<html suppressHydrationWarning>
  <head><script dangerouslySetInnerHTML={{ __html: script }} /></head>`

// Sample Catalyst markup, where zinc-* is legal under dyloAdherenceCatalyst.
// eslint-disable-next-line no-restricted-syntax
const CATALYST_BODY = `// Catalyst apps keep their own classes. The compatibility layer maps them:
<body className="bg-white lg:bg-zinc-100 dark:bg-zinc-950 dark:lg:bg-zinc-950">`

export default function InstallPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Start"
        title="Install"
        lead="The repo is a shadcn source registry, so the CLI installs from GitHub directly. Nothing is published to npm and there is no registry server in the path."
      />

      <Section
        title="1. Add a components.json"
        description="The CLI needs it to know where files go. Write it by hand: running `shadcn init` in an existing app rewrites the global stylesheet."
      >
        <Code code={COMPONENTS_JSON} language="components.json" />
      </Section>

      <Section
        title="2. Install the theme"
        description="Tokens for light and dark plus the Tailwind v4 mapping. Start here in every project."
      >
        <Command>{`${install('theme')}#${TAG}`}</Command>
      </Section>

      <Section
        title="3. Import it, in this order"
        description="Tailwind first, then the theme. The Catalyst layer, if you need it, comes last."
      >
        <Code code={IMPORT_ORDER} language="css" />
      </Section>

      <Section
        title="4. Load the four families"
        description="next/font self-hosts Inter, Geist and Playfair Display. Commit Mono is a local file; copy the two woff2 files from src/fonts in this repo."
      >
        <Code code={NEXT_FONT} language="app/layout.tsx" />
        <p className="mt-4 mb-3 text-sm leading-6 text-default">
          Then point the font tokens at those variables, after the theme import:
        </p>
        <Code code={FONT_OVERRIDE} language="css" />
        <Prose className="mt-4">
          <p>
            This works because the theme maps fonts with <code>@theme inline</code>, so <code>font-mono</code> emits{' '}
            <code>var(--dylo-font-mono)</code> rather than a copied value. Projects without a font pipeline can install{' '}
            <code>{REGISTRY}/fonts</code> instead and import it as the very first line of the stylesheet.
          </p>
        </Prose>
      </Section>

      <Section
        title="5. Set the page surface and the theme"
        description="The theme sets no colour on body, so an app's own theme switch keeps working. Set the pair yourself."
      >
        <Code code={THEME_SWITCH} language="app/layout.tsx" />
        <p className="mt-4 mb-3 text-sm leading-6 text-default">
          To follow a stored choice without a flash of the wrong theme, set the class before paint:
        </p>
        <Code code={NO_FLASH} language="app/layout.tsx" />
      </Section>

      <Section
        title="Product apps (Catalyst and templates)"
        description="Internal dylo apps, client apps, and everything under dylo-templates. Install theme and catalyst-theme; keep Catalyst, auth and the app shell from dylo-starter."
      >
        <div className="space-y-3">
          <Command>{`${install('theme')}#${TAG}`}</Command>
          <Command>{`${install('catalyst-theme')}#${TAG}`}</Command>
        </div>
        <Code code={CATALYST_BODY} language="app/layout.tsx" />
        <Prose className="mt-4">
          <p>
            Do not fork Catalyst&apos;s Button, Input or Badge to make them on-brand: the compatibility layer already
            maps <code>zinc</code> and <code>blue</code> onto the dylo grays. The dashboard kit here is the reference
            for how the product should look; dylo-starter is where product code lives. After a release, re-install the
            pinned theme in the starter and each template. Client clones are not updated automatically.
          </p>
        </Prose>
      </Section>

      <Section title="Components, kits and assets">
        <div className="space-y-3">
          <Command>{install('button')}</Command>
          <Command>{install('dashboard-kit')}</Command>
          <Command>{install('marketing-kit')}</Command>
          <Command>{install('brand-assets')}</Command>
          <Command>{install('agent-rules')}</Command>
        </div>
        <Prose className="mt-4">
          <p>
            List everything with <code>pnpm dlx shadcn@latest list {REGISTRY}</code>, inspect one item with{' '}
            <code>view</code>, or preview with <code>--dry-run</code>. Pin published commands to a tag, such as{' '}
            <code>#{TAG}</code>, so a consumer never picks up an unreviewed change.
          </p>
        </Prose>
      </Section>
    </Page>
  )
}
