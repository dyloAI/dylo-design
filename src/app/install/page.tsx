import { CodeBlock, Command, Page, PageHeader, Prose, Section } from '@/components/docs'
import { install, REGISTRY } from '@/lib/registry'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Install' }

const COMPONENTS_JSON = `{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/styles/tailwind.css",
    "baseColor": "stone",
    "cssVariables": true
  },
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

/* Catalyst apps only — see below. */
@import './dylo/dylo-catalyst.css';`

const NEXT_FONT = `import { Space_Grotesk, Space_Mono } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

// Font variables belong on <html>, not <body>.
<html lang="en" className={\`\${spaceGrotesk.variable} \${spaceMono.variable}\`}>`

const FONT_OVERRIDE = `:root {
  --dylo-font-display: var(--font-space-grotesk), 'Space Grotesk', system-ui, sans-serif;
  --dylo-font-mono: var(--font-space-mono), 'Space Mono', ui-monospace, monospace;
}`

const BODY_CLASSES = `// Light-only site:
<body className="bg-bone text-ink">

// App with dark mode — the Catalyst layer already maps these to Bone and Ink:
<body className="bg-zinc-100 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-100">`

export default function InstallPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Install"
        title="Getting the system into a project"
        lead={
          <>
            The repo is a shadcn source registry, so the CLI installs from GitHub directly. Nothing is published to
            npm and there is no registry server in the path.
          </>
        }
      />

      <Section
        title="1. Add a components.json"
        description="The CLI needs it to know where files go. Write it by hand — running `shadcn init` in an existing app rewrites your global stylesheet and pulls in Radix, which you do not want in a Catalyst project."
      >
        <CodeBlock code={COMPONENTS_JSON} language="components.json" />
      </Section>

      <Section title="2. Install the theme" description="Tokens plus the Tailwind v4 mapping. Start here in every project.">
        <Command>{install('theme')}</Command>
      </Section>

      <Section
        title="3. Import it, in this order"
        description="Tailwind first, then the theme. The Catalyst layer, if you need it, comes last."
      >
        <CodeBlock code={IMPORT_ORDER} language="css" />
      </Section>

      <Section
        title="4. Load the two families"
        description="next/font self-hosts Space Grotesk and Space Mono, which beats a render-blocking request to Google Fonts."
      >
        <CodeBlock code={NEXT_FONT} language="app/layout.tsx" />
        <p className="text-graphite mt-4 mb-3 text-[15px]/[1.6]">
          Then point the two font tokens at those variables, after the theme import:
        </p>
        <CodeBlock code={FONT_OVERRIDE} language="css" />
        <Prose>
          <p className="mt-4">
            This works because the theme maps fonts with <code>@theme inline</code>, so <code>font-mono</code> emits{' '}
            <code>var(--dylo-font-mono)</code> rather than a copied value — redefining the token retargets every
            utility at runtime. Projects without a font pipeline can install{' '}
            <code>{REGISTRY}/fonts</code> instead and import it as the very first line of the stylesheet.
          </p>
        </Prose>
      </Section>

      <Section
        title="5. Set the page surface"
        description="The theme puts Space Grotesk on body but deliberately leaves the surface colours to you — a hard background on body would defeat an app's dark-mode toggle."
      >
        <CodeBlock code={BODY_CLASSES} language="app/layout.tsx" />
      </Section>

      <Section
        title="Catalyst projects"
        description="dylo, pss-platform and anything from the AxLabs boilerplate. Catalyst hard-codes Tailwind's zinc and blue scales, so the compatibility layer remaps those two onto the dylo palette and every existing zinc-* utility in the app comes out warm."
      >
        <Command>{install('catalyst-theme')}</Command>
        <Prose>
          <p className="mt-4">
            Do not fork Catalyst&rsquo;s Button, Input or Badge to make them on-brand — the theme already does it.
            Reach into this system only for what Catalyst lacks: the <code>Eyebrow</code> and the foundry{' '}
            <code>Card</code>.
          </p>
        </Prose>
      </Section>

      <Section title="Components, assets and the rest">
        <div className="space-y-3">
          <Command>{install('button')}</Command>
          <Command>{install('brand-assets')}</Command>
          <Command>{install('agent-rules')}</Command>
          <Command>{install('website-kit')}</Command>
        </div>
        <Prose>
          <p className="mt-4">
            List everything with <code>pnpm dlx shadcn@latest list {REGISTRY}</code>, inspect one item before
            installing with <code>view</code>, or preview with <code>--dry-run</code>. Pin published commands to a tag
            — <code>{install('button')}#v1.0.0</code> — so a consumer never picks up an unreviewed change.
          </p>
        </Prose>
      </Section>
    </Page>
  )
}
