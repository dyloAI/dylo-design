import { InlineCode, LinkCard, Page, PageHeader, Section } from '@/components/docs'
import { componentLead } from '@/lib/component-docs'
import { componentGroups, componentTitle } from '@/lib/navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Components',
  description: 'Every primitive in the registry, grouped by job.',
}

export default function ComponentsPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Components"
        title="Components"
        lead="Radix primitives styled with the dylo tokens. Each one installs on its own and renders in both themes."
      />
      {componentGroups.map((group) => (
        <Section key={group.title} title={group.title}>
          <div className="grid gap-3 sm:grid-cols-2">
            {group.slugs.map((slug) => (
              <LinkCard key={slug} href={`/components/${slug}`} title={componentTitle(slug)}>
                <InlineCode text={componentLead(slug)} />
              </LinkCard>
            ))}
          </div>
        </Section>
      ))}
    </Page>
  )
}
