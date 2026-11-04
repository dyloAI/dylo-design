import { Code, Command, Page, PageHeader, Prose, Section } from '@/components/docs'
import { install, REGISTRY, REPO_URL } from '@/lib/registry'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For agents',
  description: 'How a coding agent should consume the dylo design system.',
}

const DECISION = `Is this a product app (dylo, client app, dylo-templates/*)?
├─ Yes → install "theme" + "catalyst-theme".
│        Keep Catalyst, auth and the app shell from dylo-starter.
│        Use the dashboard kit as the visual reference, not as a second app shell.
└─ No  → marketing site, brand collateral, static mock, proposal:
         install "theme" + the components and the marketing-kit you need.`

export default function AgentsPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Start"
        title="For agents"
        lead="If you are a coding agent asked to build a dylo interface, this page is the short version. The full contract is AGENTS.md in the repo."
      />

      <Section
        title="Which layer do I use?"
        description="The most common mistake is forking a Catalyst component to make it look on-brand. The compatibility layer already did that."
      >
        <Code code={DECISION} language="decision" />
      </Section>

      <Section
        title="Do not clone the repo"
        description="Install the pieces you need. Every item can be pinned to a tag and previewed before it touches the tree."
      >
        <div className="space-y-3">
          <Command>{`pnpm dlx shadcn@latest list ${REGISTRY}`}</Command>
          <Command>{`pnpm dlx shadcn@latest view ${REGISTRY}/dialog`}</Command>
          <Command>{`${install('dialog')} --dry-run`}</Command>
        </div>
      </Section>

      <Section
        title="Inherit the rules"
        description="Installs the brand rule into .cursor/rules and an ESLint config that fails raw hex, Tailwind's default palette and emoji."
      >
        <Command>{install('agent-rules')}</Command>
      </Section>

      <Section title="The rules you will be judged on">
        <Prose>
          <ul className="list-disc space-y-2 pl-5">
            <li>The brand name is always lowercase: dylo. The work is capitalised: a Dílo.</li>
            <li>
              Both themes, always. Light on <code>:root</code>, dark under <code>.dark</code>. Use semantic utilities (
              <code>bg-background</code>, <code>text-emphasis</code>, <code>text-default</code>,{' '}
              <code>border-gray-a3</code>) so a component never needs a <code>dark:</code> variant.
            </li>
            <li>
              The accent is black in light and white in dark: <code>bg-accent text-on-accent</code>. One primary action
              per view.
            </li>
            <li>
              Hue carries status only: <code>text-success</code>, <code>bg-warning</code>, <code>border-error</code>,{' '}
              <code>text-info</code>, or a 1 to 12 step such as <code>green-9</code>. Never Tailwind&apos;s 50 to 950
              palette. Never raw hex.
            </li>
            <li>No emoji, anywhere. Lucide icons at 16px in the interface.</li>
            <li>
              Inter for the interface, Geist medium for headings, Playfair Display for one marketing headline, Commit
              Mono for code and IDs.
            </li>
            <li>
              Write calm and plain: a price, a date, numbers instead of adjectives, short sentences. We and you. The
              full voice guide is in the brand rule.
            </li>
          </ul>
        </Prose>
      </Section>

      <Section title="Machine-readable index">
        <Prose>
          <p>
            <a href="/llms.txt">/llms.txt</a> lists every token, component and registry item in one plain-text file. The
            registry catalogue itself is{' '}
            <a href={`${REPO_URL}/blob/main/registry.json`} rel="noreferrer">
              registry.json
            </a>{' '}
            at the repo root.
          </p>
        </Prose>
      </Section>
    </Page>
  )
}
