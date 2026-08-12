import { Command, Page, PageHeader, Prose, Section } from '@/components/docs'
import { install } from '@/lib/registry'
import { AppShellKit } from '@/registry/dylo/blocks/app-shell'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'App shell',
  description: 'Sidebar application chrome from dylo-starter: nav, mobile drawer, content plate, account footer.',
}

export default function AppShellKitPage() {
  return (
    <>
      <Page>
        <PageHeader
          eyebrow="Demo"
          title="App shell (docs / marketing only)"
          lead="A foundry-styled sidebar demo. Product apps and templates must keep Catalyst SidebarLayout from dylo-starter — do not install this kit there."
        />

        <Section title="Product apps">
          <Prose>
            <p className="m-0">
              Canonical shell lives in <code>dylo-starter</code> (
              <code>application-layout.tsx</code> + Catalyst <code>sidebar*</code>). Other templates sync shared pieces
              from starter; domain nav stays in each template.
            </p>
          </Prose>
        </Section>

        <Section title="Install (marketing / mocks only)">
          <Command>{install('app-shell')}</Command>
          <Prose>
            <p className="mt-4">
              Foundry composition for brand collateral and this docs site only.
            </p>
          </Prose>
        </Section>

        <Section
          title="Live"
          description="Framed preview. Click a nav item to see the current indicator move; the page stays put."
        />
      </Page>

      <div className="border-t border-line p-6 md:p-10">
        <AppShellKit />
      </div>
    </>
  )
}
