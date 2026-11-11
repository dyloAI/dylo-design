import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/registry/dylo/ui/accordion'
import { Breadcrumb } from '@/registry/dylo/ui/breadcrumb'
import { Logo } from '@/registry/dylo/ui/logo'
import { Separator } from '@/registry/dylo/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/registry/dylo/ui/tabs'
import type { ComponentDoc } from './types'

const tabs = ['Overview', 'Events', 'Insights']

export const layout: ComponentDoc[] = [
  {
    slug: 'tabs',
    usage: `import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

<Tabs defaultValue="overview">
  <TabsList variant="underline">
    <TabsTrigger value="overview">Overview</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">...</TabsContent>
</Tabs>`,
    examples: (['segmented', 'pill', 'underline'] as const).map((variant) => ({
      title: variant.charAt(0).toUpperCase() + variant.slice(1),
      description: {
        segmented: 'A small toggle: a period, a view.',
        pill: 'Marketing tabs and the feature switcher.',
        underline: 'Sub-pages of a detail view.',
      }[variant],
      className: 'block',
      render: (
        <Tabs defaultValue="Overview">
          <TabsList variant={variant}>
            {tabs.map((tab) => (
              <TabsTrigger key={tab} value={tab}>
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((tab) => (
            <TabsContent key={tab} value={tab} className="pt-4 text-sm text-default">
              The {tab.toLowerCase()} panel.
            </TabsContent>
          ))}
        </Tabs>
      ),
    })),
    props: [
      {
        name: 'variant',
        type: "'segmented' | 'pill' | 'underline'",
        default: "'segmented'",
        description: 'On TabsList.',
      },
    ],
  },
  {
    slug: 'breadcrumb',
    usage: `import { Breadcrumb } from '@/components/ui/breadcrumb'

<Breadcrumb items={[{ label: 'Domains', href: '/domains' }, { label: 'acme.dev' }]} />`,
    examples: [
      {
        title: 'Trail',
        render: <Breadcrumb items={[{ label: 'Domains', href: '#' }, { label: 'acme.dev' }]} />,
      },
    ],
    props: [
      { name: 'items', type: '{ label, href? }[]', description: 'The last item is the current page and has no link.' },
    ],
  },
  {
    slug: 'accordion',
    usage: `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'`,
    examples: [
      {
        title: 'FAQ',
        layout: 'stack',
        className: 'block',
        render: (
          <Accordion type="single" collapsible defaultValue="cost">
            <AccordionItem value="cost">
              <AccordionTrigger>What does it cost?</AccordionTrigger>
              <AccordionContent>
                The build price is in the quote. Looking after it starts at €30 a month.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="time">
              <AccordionTrigger>How long does it take?</AccordionTrigger>
              <AccordionContent>The date is in the quote, next to the price.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="leave">
              <AccordionTrigger>Can we take the app elsewhere?</AccordionTrigger>
              <AccordionContent>Whenever you want. We hand it over.</AccordionContent>
            </AccordionItem>
          </Accordion>
        ),
      },
    ],
  },
  {
    slug: 'separator',
    usage: `import { Separator } from '@/components/ui/separator'

<Separator />`,
    examples: [
      {
        title: 'Horizontal and vertical',
        className: 'flex-col items-stretch gap-4',
        render: (
          <>
            <p className="text-sm text-default">Above</p>
            <Separator />
            <div className="flex h-5 items-center gap-3 text-sm text-default">
              Docs <Separator orientation="vertical" /> API <Separator orientation="vertical" /> Status
            </div>
          </>
        ),
      },
    ],
  },
  {
    slug: 'logo',
    usage: `import { Logo } from '@/components/ui/logo'

<Logo variant="lockup" className="h-7" />`,
    examples: [
      {
        title: 'Mark and lockup',
        description: 'The reversed file is used automatically in dark.',
        render: (
          <>
            <Logo className="h-8" />
            <Logo variant="lockup" className="h-8" />
          </>
        ),
      },
    ],
    props: [
      {
        name: 'variant',
        type: "'mark' | 'lockup'",
        default: "'mark'",
        description: 'The mark alone, or with the wordmark.',
      },
    ],
    notes: ['Install `brand-assets` too: the component points at the SVGs in `public/brand/`.'],
  },
]
