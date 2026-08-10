import { Command, Page, PageHeader, Prose, Section } from '@/components/docs'
import { install } from '@/lib/registry'
import { WebsiteKit } from '@/registry/dylo/blocks/website'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketing site',
  description: 'The dylo homepage as composable sections: sticky nav, hero, work grid, studio, contact form, footer.',
}

export default function WebsiteKitPage() {
  return (
    <>
      <Page>
        <PageHeader
          eyebrow="Kit"
          title="Marketing site"
          lead="The dylo homepage, in six sections you can take apart. Built entirely from the components on this site, so it doubles as a worked example of the rules."
        />

        <Section title="Install">
          <Command>{install('website-kit')}</Command>
          <Prose>
            <p className="mt-4">
              Installs the six sections plus the components they depend on. The contact form carries a local submit
              state for the demo — wire <code>onSubmit</code> to a Server Action before shipping it.
            </p>
          </Prose>
        </Section>

        <Section
          title="Live"
          description="Rendered below at full width. Its nav is sticky within the page, so it will follow you as you scroll."
        />
      </Page>

      <div className="border-t border-line">
        <WebsiteKit />
      </div>
    </>
  )
}
