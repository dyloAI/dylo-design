import { Command, Page, PageHeader, Prose, Section } from '@/components/docs'
import { install } from '@/lib/registry'
import { AuthKit } from '@/registry/dylo/blocks/auth'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Auth',
  description: 'Sign-in, sign-up and forgot-password screens from dylo-starter, on dylo Button and Input.',
}

export default function AuthKitPage() {
  return (
    <>
      <Page>
        <PageHeader
          eyebrow="Demo"
          title="Auth (docs / marketing only)"
          lead="A foundry-styled demo of sign-in, sign-up and forgot password. Product apps and templates must keep Catalyst auth from dylo-starter — do not install this kit there."
        />

        <Section title="Product apps">
          <Prose>
            <p className="m-0">
              Canonical auth lives in <code>dylo-starter</code> under <code>src/app/(auth)/auth/</code>. Other templates
              pick it up via the allowlist sync. Install <code>theme</code> + <code>catalyst-theme</code> only.
            </p>
          </Prose>
        </Section>

        <Section title="Install (marketing / mocks only)">
          <Command>{install('auth-kit')}</Command>
          <Prose>
            <p className="mt-4">
              Presentational foundry forms for brand collateral and this docs site. Wire <code>onSubmit</code> if you use
              them outside a product template.
            </p>
          </Prose>
        </Section>

        <Section
          title="Live"
          description="Switch between the three screens. Submits are demo-only and show a mono status line."
        />
      </Page>

      <div className="border-t border-line">
        <AuthKit />
      </div>
    </>
  )
}
