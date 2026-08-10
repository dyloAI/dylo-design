import { CodeBlock, Command, Page, PageHeader, Prose, Section } from '@/components/docs'
import { install, REGISTRY, REPO_URL } from '@/lib/registry'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For agents',
  description: 'How a coding agent should consume the dylo design system.',
}

const DECISION = `Is the app built on Catalyst (dylo, pss-platform, AxLabs boilerplate)?
├─ Yes → install "theme" + "catalyst-theme". Use Catalyst primitives.
│        Take only Eyebrow and Card from here — Catalyst has no equivalent.
└─ No  → install "theme" + the components you need.
         Marketing sites, static mocks and one-off artifacts: use them all.`

export default function AgentsPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="For agents"
        title="Working in a dylo repo"
        lead="If you are a coding agent asked to build a dylo interface, this page is the short version. The full contract is AGENTS.md in the repo."
      />

      <Section
        title="Which layer do I use?"
        description="The most common mistake is forking a Catalyst component to make it look on-brand. The theme already did that."
      >
        <CodeBlock code={DECISION} language="decision" />
      </Section>

      <Section
        title="Do not clone the repo"
        description="Install the pieces you need. Every item is pinnable to a tag, and installs are reviewable before they touch the working tree."
      >
        <div className="space-y-3">
          <Command>{`pnpm dlx shadcn@latest list ${REGISTRY}`}</Command>
          <Command>{`pnpm dlx shadcn@latest view ${REGISTRY}/card`}</Command>
          <Command>{`${install('card')} --dry-run`}</Command>
        </div>
      </Section>

      <Section
        title="Inherit the rules"
        description="Installs the brand rule into .cursor/rules and an ESLint config that fails raw hex colours, so drift is caught by the linter rather than in review."
      >
        <Command>{install('agent-rules')}</Command>
      </Section>

      <Section title="The rules you will be judged on">
        <Prose>
          <ul className="m-0 list-disc space-y-2 pl-5">
            <li>The brand name is always lowercase: dylo. The work is capitalised: a Dílo.</li>
            <li>
              Exactly one oxide element per view. An <code>Eyebrow</code> already spends it — its tick is the accent.
            </li>
            <li>No emoji, anywhere. Line icons only, 2px stroke, from Lucide.</li>
            <li>
              Never a raw hex value. Use the utilities the theme provides: <code>bg-ink</code>, <code>text-oxide</code>,{' '}
              <code>border-line</code>, <code>shadow-block</code>.
            </li>
            <li>
              Cards are stamped plates — ink border plus <code>shadow-block</code>, barely rounded. Not soft floating
              cards.
            </li>
            <li>
              Write like an engineer: plain words, numbers instead of adjectives, short declaratives. Never
              &ldquo;leverage synergies&rdquo;.
            </li>
          </ul>
        </Prose>
      </Section>

      <Section title="Machine-readable index">
        <Prose>
          <p className="m-0">
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
