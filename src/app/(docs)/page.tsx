import { Command, LinkCard, Page, Preview, Section } from '@/components/docs'
import { install } from '@/lib/registry'
import { Badge, StatusDot } from '@/registry/dylo/ui/badge'
import { Button } from '@/registry/dylo/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/registry/dylo/ui/card'
import { AreaChart, Stat } from '@/registry/dylo/ui/chart'
import { CtaArrow, CtaButton } from '@/registry/dylo/ui/cta-button'
import { SearchField } from '@/registry/dylo/ui/search'
import { Plus } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'dylo design system' },
  description: 'Tokens, components and kits for dylo, in light and dark.',
}

const series = [40, 64, 52, 90, 76, 120, 104, 132, 118, 150, 141, 170].map((value, i) => ({
  label: `Day ${i + 1}`,
  value,
}))

const parts = [
  { href: '/install', title: 'Install', body: 'components.json, the theme, the fonts, and the order of imports.' },
  {
    href: '/foundations/colour',
    title: 'Foundations',
    body: 'Gray scales, status hues, type, radius, shadow and motion.',
  },
  { href: '/components', title: 'Components', body: '42 Radix primitives, each with live examples in both themes.' },
  { href: '/kits', title: 'Kits', body: 'Every dashboard section and marketing page, assembled from the primitives.' },
  { href: '/agents', title: 'For agents', body: 'The short contract for a coding agent working in a dylo repo.' },
  {
    href: '/foundations/messaging',
    title: 'Messaging',
    body: 'The pitch, the pillars and the answers, in English and Spanish.',
  },
]

export default function HomePage() {
  return (
    <Page wide>
      <header className="mb-14 border-b border-gray-a3 pb-12">
        <p className="font-mono text-xs tracking-wide text-gray-10 uppercase">Design system · v2</p>
        <h1 className="mt-4 max-w-[18ch] effect-font-gradient font-display effect-font-styling text-[3rem] leading-[1.05] font-medium tracking-tight md:text-[3.5rem]">
          The interface dylo builds with
        </h1>
        <p className="mt-5 max-w-[60ch] text-lg leading-7 text-default">
          Quiet grays, one black or white accent, and hue only where it means a status. Light and dark from the same
          tokens. Installed with the shadcn CLI, straight from this repo.
        </p>
        <div className="mt-8 max-w-xl">
          <Command>{install('theme')}</Command>
        </div>
      </header>

      <Section
        title="Both themes, one set of tokens"
        description="The same markup, rendered under .light and under .dark."
      >
        <Preview className="block">
          <Card className="w-full">
            <CardHeader className="flex-row items-center justify-between">
              <CardTitle>Emails</CardTitle>
              <Button variant="primary" size="xs">
                <Plus /> Send
              </Button>
            </CardHeader>
            <CardContent className="flex flex-col gap-5">
              <SearchField shortcut={['/']} aria-label="Search" />
              <div className="flex items-end justify-between gap-4">
                <Stat label="Sent this week" value="1,162" delta="+8%" trend="up" />
                <div className="flex flex-col items-end gap-2">
                  <Badge tone="success">Delivered</Badge>
                  <span className="inline-flex items-center gap-1.5 text-xs text-default">
                    <StatusDot tone="success" pulse /> Sending normally
                  </span>
                </div>
              </div>
              <AreaChart data={series} height={80} className="text-gray-12" />
              <div className="flex justify-end">
                <CtaButton size="md">
                  Get started <CtaArrow />
                </CtaButton>
              </div>
            </CardContent>
          </Card>
        </Preview>
      </Section>

      <Section title="Where to go">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {parts.map((part) => (
            <LinkCard key={part.href} href={part.href} title={part.title}>
              {part.body}
            </LinkCard>
          ))}
        </div>
      </Section>
    </Page>
  )
}
