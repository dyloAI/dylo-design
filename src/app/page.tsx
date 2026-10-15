import { Command, Page, PageHeader, Prose, Section } from '@/components/docs'
import { install, REPO_URL } from '@/lib/registry'
import { Card } from '@/registry/dylo/ui/card'
import Link from 'next/link'

const NON_NEGOTIABLES = [
  ['Lowercase brand', 'The company is always dylo. The work is capitalised — a Dílo.'],
  ['One accent', 'Oxide appears once per view. Never introduce a second hue.'],
  ['Two families', 'Space Grotesk for anything human, Space Mono for the technical layer.'],
  ['No emoji', 'Ever. The mono layer carries whatever texture is needed.'],
  ['Plate, or editorial', 'The block shadow is for the primary action and a product mock. Copy sits on a hairline.'],
  ['Motion', '150ms for interaction. A reveal rises 8px, and it stops if reduced motion is on.'],
]

export default function OverviewPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="dylo design system"
        title="From €30 a month."
        lead={
          <>
            The tokens, Tailwind theme, components and brand assets behind dylo. Install any piece straight from GitHub
            with the shadcn CLI — no package to publish, no registry server to run.
          </>
        }
      />

      <Section
        title="Install the theme"
        description="One item covers most cases: the tokens plus the Tailwind v4 theme that maps them onto utilities."
      >
        <Command>{install('theme')}</Command>
        <p className="mt-3 mb-0 text-[14px] text-graphite">
          Then read <Link href="/install">Install</Link> for the two lines of CSS that follow, or{' '}
          <Link href="/agents">For agents</Link> if you are a coding agent working in a dylo repo.
        </p>
      </Section>

      <Section title="The non-negotiables" description="Break any of these and the work stops looking like dylo.">
        <dl className="grid gap-0 rounded-sm border border-line sm:grid-cols-2">
          {NON_NEGOTIABLES.map(([term, detail]) => (
            <div key={term} className="border-b border-line p-5 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0">
              <dt className="text-[15px] font-semibold text-ink">{term}</dt>
              <dd className="m-0 mt-1.5 text-[14px]/[1.6] text-graphite">{detail}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="The idea">
        <Card variant="editorial" eyebrow="Why dylo" title="From €30 a month.">
          <Prose>
            <p className="m-0">
              dylo is a technology provider. We build web apps for companies with 1 to 500 people and no tech team, and
              we look after them once they are in use. The buyer is usually an owner or a director.
            </p>
            <p className="m-0">
              A small app costs less than most owners expect. We say the price and the date before any work starts. The
              visual system stays quiet around that: warm monochrome, a strong grid, hairlines, with a single note of
              oxide.
            </p>
          </Prose>
        </Card>
      </Section>

      <Section title="What is in here">
        <ul className="m-0 list-none space-y-2 p-0 text-[15px] text-graphite">
          {[
            ['Foundations', '/foundations/colour', 'Colour, type, space, shape and the brand marks.'],
            ['Components', '/components/button', 'Button, Input, Card, Badge, Eyebrow — live, with source.'],
            ['Marketing site kit', '/kits/website', 'The dylo homepage, in composable sections.'],
            [
              'Messaging',
              '/foundations/messaging',
              'Positioning, pitch, pillars, and objections, in English and Spanish.',
            ],
            ['Brand book', '/brand-book', 'Fifteen pages: idea, name, logo, colour, type, voice, messaging.'],
            ['Product apps', '/agents', 'Use Catalyst + theme from dylo-starter — not foundry auth/shell kits.'],
          ].map(([title, href, detail]) => (
            <li key={href} className="border-b border-line pb-2 last:border-b-0">
              <Link href={href} className="font-medium text-ink">
                {title}
              </Link>
              <span className="text-graphite"> — {detail}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 mb-0 text-[14px] text-graphite">
          Source lives at{' '}
          <a href={REPO_URL} rel="noreferrer">
            {REPO_URL.replace('https://', '')}
          </a>
          .
        </p>
      </Section>
    </Page>
  )
}
