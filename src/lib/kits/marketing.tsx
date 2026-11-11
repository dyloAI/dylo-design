import { ExamplePricing, KitMarketingHeader } from '@/components/kits/marketing-chrome'
import { about, legal, objections, pains, pillars, pitch, positioning } from '@/lib/kits/marketing-copy'
import {
  AddOnPanel,
  BlogIndex,
  BlogPost,
  CaseStudyHeader,
  ChangelogTimeline,
  CodeShowcase,
  ComparisonTable,
  ContactForm,
  CtaSection,
  CustomersGrid,
  DocsPager,
  DocsShell,
  DocsToc,
  Faq,
  FeatureGrid,
  FeatureHero,
  FeaturePanels,
  FeatureSplit,
  FeatureTabs,
  Hero,
  LegalPage,
  LogoStrip,
  MarketingFooter,
  PageHero,
  PlanGrid,
  Prose,
  Section,
  SectionLead,
  SectionTitle,
  StatsRow,
  StatusPill,
  SubtleCta,
  TestimonialMarquee,
  type Author,
  type ChangelogEntry,
  type CustomerStory,
  type DocsNavGroup,
  type FooterColumn,
  type Plan,
  type Post,
  type Quote,
} from '@/registry/dylo/blocks/marketing'
import { Badge } from '@/registry/dylo/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/registry/dylo/ui/card'
import { CodeBlock } from '@/registry/dylo/ui/code-block'
import { Progress } from '@/registry/dylo/ui/progress'
import {
  Table,
  TableBody,
  TableCell,
  TableCellPrimary,
  TableHead,
  TableHeader,
  TableRow,
} from '@/registry/dylo/ui/table'
import {
  Calculator,
  CalendarCheck,
  Code,
  FileSpreadsheet,
  Hammer,
  HandCoins,
  LayoutDashboard,
  Mail,
  Palette,
  Rss,
  ShieldCheck,
  UserRound,
  Wrench,
} from 'lucide-react'
import { m } from './index'

/* ---------- Chrome ---------- */

const footerColumns: FooterColumn[] = [
  {
    title: 'Products',
    links: [
      { label: 'Configurator', href: m('features/configurator') },
      { label: 'Data extraction', href: m('features/data') },
      { label: 'Operations platform', href: m('features/operations') },
      { label: 'Pricing', href: m('pricing') },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Docs', href: m('docs') },
      { label: 'Blog', href: m('blog') },
      { label: 'Changelog', href: m('changelog') },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: m('about') },
      { label: 'Customers', href: m('customers') },
      { label: 'Contact', href: m('contact') },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms', href: m('legal') },
      { label: 'Privacy', href: m('legal') },
    ],
  },
]

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-background text-emphasis">
      <KitMarketingHeader />
      <main>{children}</main>
      <MarketingFooter
        address="A technology provider for companies of 1 to 500 people with no tech team."
        socials={[
          { label: 'Email', href: m('contact'), icon: <Mail className="size-4" /> },
          { label: 'Changelog feed', href: m('changelog'), icon: <Rss className="size-4" /> },
        ]}
        columns={footerColumns}
        legal={
          <span className="flex flex-wrap items-center gap-4">
            <span>{legal.en}</span>
            <StatusPill tone="success">All systems normal</StatusPill>
          </span>
        }
      />
    </div>
  )
}

/* ---------- Shared content ---------- */

const team: Author[] = [{ name: 'dylo' }]

const sectors = ['Insulation', 'Publishing', 'Façades', 'Manufacturing', 'Distribution', 'Industrial']

const quotes: Quote[] = pains.map((p) => ({ quote: `“${p.quote}”`, name: 'An owner, before dylo', role: p.gloss }))

const faqItems = objections.map((o) => ({ question: o.question.en, answer: o.answer.en }))

const pillarIcons = [<UserRound key="u" />, <Wrench key="w" />, <CalendarCheck key="c" />, <HandCoins key="h" />]

const stats = [
  { value: '4 days', label: 'From an accepted quote to a first version in production' },
  { value: '4 times', label: 'The same configurator pattern, sold to one industrial group and its partner' },
  { value: '33,000', label: 'Schools reached by a publisher whose book data we extract' },
  { value: 'Dec 2024', label: 'A quote calculator in production since then, and still looked after' },
]

function QuoteMock() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle>Quote 2026-0412</CardTitle>
        <Badge tone="success">Sent</Badge>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 text-sm">
        {[
          ['Wall insulation, 120 m²', '€4,320'],
          ['Scaffolding, 2 weeks', '€860'],
          ['Waste removal', '€240'],
        ].map(([item, price]) => (
          <div key={item} className="flex justify-between border-b border-gray-a3 pb-2 text-default">
            <span>{item}</span>
            <span className="font-mono text-emphasis">{price}</span>
          </div>
        ))}
        <div className="flex justify-between pt-1 font-medium">
          <span>Total</span>
          <span className="font-mono">€5,420</span>
        </div>
      </CardContent>
    </Card>
  )
}

function DataMock() {
  return (
    <div className="w-full max-w-lg">
      <Table density="compact">
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>ISBN</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            ['Mathematics 3', '978-0-00-000001-1', 'success', 'Extracted'],
            ['Reading 2', '978-0-00-000002-8', 'success', 'Extracted'],
            ['Science 4', 'Not found', 'warning', 'Review'],
          ].map(([title, isbn, tone, status]) => (
            <TableRow key={title}>
              <TableCell>
                <TableCellPrimary>{title}</TableCellPrimary>
              </TableCell>
              <TableCell className="font-mono text-xs">{isbn}</TableCell>
              <TableCell>
                <Badge tone={tone as 'success' | 'warning'}>{status}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

function OperationsMock() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>This week</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 text-sm">
        {[
          ['Inspection reports', 18, 24],
          ['Site visits', 9, 10],
          ['Invoices sent', 31, 40],
        ].map(([label, done, total]) => (
          <div key={label as string} className="flex flex-col gap-2">
            <div className="flex justify-between">
              <span className="text-emphasis">{label}</span>
              <span className="font-mono text-xs text-default">
                {done} / {total}
              </span>
            </div>
            <Progress value={((done as number) / (total as number)) * 100} tone="accent" aria-label={label as string} />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

const doors = [
  {
    id: 'configurator',
    icon: <Calculator />,
    title: 'Configurator',
    body: 'Quotes and products, priced while the customer waits. The same pattern has been sold four times.',
    panel: <QuoteMock />,
  },
  {
    id: 'data',
    icon: <FileSpreadsheet />,
    title: 'Data extraction and analysis',
    body: 'The data out of the files you already have, checked and filled in.',
    panel: <DataMock />,
  },
  {
    id: 'operations',
    icon: <LayoutDashboard />,
    title: 'Operations platform',
    body: 'The daily work your team repeats, in one place. It is not an ERP.',
    panel: <OperationsMock />,
  },
]

/* ---------- Pages ---------- */

function HomePage() {
  return (
    <SiteChrome>
      <Hero
        announcement={{ label: 'The price and the date come first', href: m('pricing') }}
        title="A piece of work, built and looked after"
        lead={pitch.oneLine.en}
        primary={{ label: 'Book a call', href: m('contact') }}
        secondary={{ label: 'See pricing', href: m('pricing') }}
      />
      <LogoStrip lead="For companies of 1 to 500 people with no tech team, in sectors like these." logos={sectors} />
      <FeatureTabs
        title="Three products we already know"
        lead="We start from a narrow product we already build, so the price and the date can come first."
        tabs={doors}
      />
      <FeatureGrid
        title="How it works"
        lead={pitch.thirtySeconds.en.split('. ').slice(2, 4).join('. ') + '.'}
        features={pillars
          .map((p, i) => ({ icon: pillarIcons[i], title: p.title.en, body: p.body.en }))
          .filter((_, i) => i !== 1)}
      />
      <StatsRow stats={stats} />
      <TestimonialMarquee
        title="What owners tell us"
        lead="The words are theirs, in Spanish. The line underneath is our translation."
        quotes={quotes}
      />
      <Section>
        <Faq title="Questions owners ask" items={faqItems} />
      </Section>
      <CtaSection
        title="Start with a call"
        lead="Tell us what the app should do. The proposal comes back with the scope, the price and the date."
        primary={{ label: 'Book a call', href: m('contact') }}
        secondary={{ label: 'See pricing', href: m('pricing') }}
      />
    </SiteChrome>
  )
}

const dyloPlans: Plan[] = [
  {
    name: 'Build',
    price: 'In the proposal',
    description: 'A one-off fee for building the app, set for your project.',
    cta: { label: 'Ask for a proposal', href: m('contact') },
    features: ['A written scope', 'The price and the date before we start', 'A dylo engineer on the platform'],
    recommended: true,
  },
  {
    name: 'Looking after it',
    price: 'In the proposal',
    period: '/ year',
    description: 'Hosting, updates, security updates and monitoring once it is live. Set for each app.',
    cta: { label: 'Talk to us', href: m('contact') },
    features: ['Hosting', 'Updates and security updates', 'Monitoring', 'Take the app elsewhere whenever you want'],
  },
  {
    name: 'Changes',
    price: 'Quoted',
    period: 'each',
    description: 'A change after delivery is quoted at a fixed price, like the build.',
    cta: { label: 'Ask about a change', href: m('contact') },
    features: ['A fixed price', 'A date', 'No hourly rate'],
  },
]

function PricingPage() {
  return (
    <SiteChrome>
      <PageHero
        eyebrow="Pricing"
        title="A price and a date, first"
        lead="A one-off fee pays for the build. One yearly fee covers hosting and looking after it."
      />
      <Section>
        <PlanGrid plans={dyloPlans} />
      </Section>
      <Section>
        <ComparisonTable
          title="What each part includes"
          columns={['Build', 'Looking after it', 'Changes']}
          rows={[
            { label: 'Price agreed before we start', values: [true, true, true] },
            { label: 'A dylo engineer', values: [true, true, true] },
            { label: 'Written scope', values: [true, false, true] },
            { label: 'Hosting', values: [false, true, false] },
            { label: 'Updates and security updates', values: [false, true, false] },
            { label: 'Monitoring', hint: 'Errors and uptime.', values: [false, true, false] },
          ]}
        />
      </Section>
      <Section>
        <AddOnPanel
          title="When the app is more complex"
          items={[
            {
              name: 'A complex app',
              price: 'Set in the proposal',
              body: 'A 3D configurator, for example, costs more to host and look after. The yearly fee is set for each app.',
              cta: { label: 'Ask about yours', href: m('contact') },
            },
          ]}
        />
      </Section>
      <Section>
        <Faq title="Questions about price" items={faqItems.slice(1, 4)} />
      </Section>
      <CtaSection
        title="Ask for a quote"
        lead="Tell us what the app should do. The price and the date come back first."
        primary={{ label: 'Book a call', href: m('contact') }}
      />
    </SiteChrome>
  )
}

const featureCopy: Record<
  string,
  {
    name: string
    icon: React.ReactNode
    title: string
    lead: string
    split: string
    points: string[]
    visual: React.ReactNode
  }
> = {
  configurator: {
    name: 'Configurator',
    icon: <Calculator />,
    title: 'Quotes priced while the customer waits',
    lead: 'A quote or product configurator, built from a pattern we have already sold four times.',
    split:
      'Distributors stop calling to ask for prices. A quote that took two days is ready while they are still on the page.',
    points: [
      'Your prices and your rules',
      'A branded PDF, sent by email',
      'White-label it for a distributor: the same code, its own address',
    ],
    visual: <QuoteMock />,
  },
  data: {
    name: 'Data extraction',
    icon: <FileSpreadsheet />,
    title: 'The data out of the files you already have',
    lead: 'Extraction and analysis for the documents and spreadsheets the work already runs on.',
    split: 'A 150-year-old publisher that reaches 33,000 schools has its book data extracted and the ISBNs added.',
    points: ['Read from the files you have', 'Checked and filled in', 'Out as a table you can use'],
    visual: <DataMock />,
  },
  operations: {
    name: 'Operations platform',
    icon: <LayoutDashboard />,
    title: 'The work your team repeats, in one place',
    lead: 'An operations platform runs the daily work. It is not an ERP.',
    split:
      'A façades team replaced a no-code form tool with inspection reports: a branded PDF, sent by email and filed.',
    points: [
      'Forms, reports and lists for the work you do every day',
      'Sent and filed on its own',
      'Next to your ERP, not instead of it',
    ],
    visual: <OperationsMock />,
  },
}

function FeaturePage({ id }: { id: string }) {
  const f = featureCopy[id] ?? featureCopy.configurator!
  return (
    <SiteChrome>
      <FeatureHero icon={f.icon} name={f.name} title={f.title} lead={f.lead} />
      <FeatureSplit title="What changes" body={f.split} points={f.points} visual={f.visual} />
      <FeaturePanels
        title="How a build runs"
        panels={[
          {
            icon: <Hammer />,
            title: 'Agree',
            body: 'The scope, the price and the date are written into the proposal before we start.',
          },
          {
            icon: <CalendarCheck />,
            title: 'Build',
            body: 'A dylo engineer builds it on the platform, to the date in the proposal.',
          },
          {
            icon: <ShieldCheck />,
            title: 'Look after',
            body: 'We host it and look after it for a yearly fee. You can take it elsewhere.',
          },
        ]}
      />
      <CtaSection title={`Start your ${f.name.toLowerCase()}`} primary={{ label: 'Book a call', href: m('contact') }} />
    </SiteChrome>
  )
}

const stories: CustomerStory[] = [
  {
    name: 'Insulation contractor',
    href: m('customers/insulation'),
    summary:
      'About 50 people, no technology team. A first version was in production four days after the quote was accepted.',
    metric: '4 days',
  },
  {
    name: 'Publisher',
    href: m('customers'),
    summary: 'A 150-year-old publisher that reaches 33,000 schools, with its book data extracted and the ISBNs added.',
    metric: '33,000 schools',
  },
  {
    name: 'Façades team',
    href: m('customers'),
    summary: 'Inspection reports replaced a no-code form tool: a branded PDF, sent by email and filed.',
  },
  {
    name: 'Manufacturer',
    href: m('customers'),
    summary:
      'White-labels the configurator for its own distributor: the same codebase, its own address and its own database.',
  },
]

function CustomersPage() {
  return (
    <SiteChrome>
      <PageHero
        eyebrow="Customers"
        title="The work, by sector"
        lead="We describe the work by sector until a customer says we can use their name."
      />
      <CustomersGrid featured={stories.slice(0, 2)} stories={stories.slice(2)} logos={sectors} />
      <CtaSection title="Yours could be next" primary={{ label: 'Book a call', href: m('contact') }} />
    </SiteChrome>
  )
}

function StoryPage() {
  return (
    <SiteChrome>
      <CaseStudyHeader
        name="Insulation contractor"
        title="From a quote to production in four days"
        facts={[
          { label: 'Company', value: 'About 50 people' },
          { label: 'Tech team', value: 'None' },
          { label: 'Quote', value: '12 April 2026' },
          { label: 'In production', value: '17 April 2026' },
        ]}
      />
      <Section>
        <Prose className="mx-auto max-w-2xl">
          <h2>Before</h2>
          <p>The company had no technology team. A quote took two days, and it was all in Excel.</p>
          <h2>The work</h2>
          <p>
            The quote went out on 12 April 2026. They accepted on 13 April. A first version was in production on 17
            April.
          </p>
          <h2>After</h2>
          <p>We host it and look after it. They can take the app elsewhere whenever they want.</p>
        </Prose>
      </Section>
      <CtaSection title="Talk to us about yours" primary={{ label: 'Book a call', href: m('contact') }} />
    </SiteChrome>
  )
}

function AboutPage() {
  return (
    <SiteChrome>
      <PageHero eyebrow="About" title="dílo: a piece of work" lead={about.en} />
      <FeatureSplit title="Who we work for" body={positioning.en} visual={<OperationsMock />} />
      <CtaSection title="Meet a dylo engineer" primary={{ label: 'Book a call', href: m('contact') }} />
    </SiteChrome>
  )
}

function ContactPage() {
  return (
    <SiteChrome>
      <PageHero
        eyebrow="Contact"
        title="Tell us about the app"
        lead="We reply with what it costs and when it can be ready. If we do not know yet, we say so."
      />
      <Section>
        <ContactForm className="mx-auto max-w-xl" sizes={['1 to 10', '11 to 50', '51 to 200', '201 to 500']} />
      </Section>
    </SiteChrome>
  )
}

const posts: Post[] = [
  {
    title: 'Why the price comes first',
    href: m('blog/price-first'),
    date: 'October 2026',
    category: 'Pricing',
    authors: team,
    excerpt: 'A price and a date belong in the first conversation, not the last.',
  },
  {
    title: 'Four days from a quote to production',
    href: m('customers/insulation'),
    date: 'September 2026',
    category: 'Customers',
    authors: team,
    excerpt: 'How an insulation contractor with no tech team got a first version live.',
  },
  {
    title: 'Taking your app elsewhere',
    href: m('blog'),
    date: 'August 2026',
    category: 'Care',
    authors: team,
    excerpt: 'You can, whenever you want. We hand it over.',
  },
  {
    title: 'Why the price comes in the proposal',
    href: m('blog'),
    date: 'July 2026',
    category: 'Pricing',
    authors: team,
  },
  {
    title: 'An operations platform is not an ERP',
    href: m('blog'),
    date: 'June 2026',
    category: 'Products',
    authors: team,
  },
]

function BlogPage() {
  return (
    <SiteChrome>
      <BlogIndex
        title="Blog"
        categories={['All', 'Pricing', 'Products', 'Customers', 'Care']}
        featured={posts.slice(0, 2)}
        posts={posts.slice(2)}
      />
    </SiteChrome>
  )
}

function PostPage() {
  return (
    <SiteChrome>
      <BlogPost post={posts[0]!}>
        <p>
          An owner with no tech team has one question before any other: what will it cost, and when will it be ready.
        </p>
        <h2>The answer comes first</h2>
        <p>
          Before we start, you get a proposal with the scope, the price and the date. Both are set for your project, and
          nothing is built until you have them.
        </p>
        <h2>Then we keep it running</h2>
        <p>
          One yearly fee covers hosting, updates, security updates and monitoring. A change after delivery is quoted at
          a fixed price, like the build.
        </p>
        <SubtleCta href={m('pricing')}>See pricing</SubtleCta>
      </BlogPost>
    </SiteChrome>
  )
}

const changelog: ChangelogEntry[] = [
  {
    date: 'November 4, 2026',
    title: 'Design system v2: light and dark',
    authors: team,
    body: (
      <p>
        New tokens with a twelve-step gray scale and status hues, both themes from one set of variables, 42 Radix
        primitives, and full dashboard and marketing kits.
      </p>
    ),
  },
  {
    date: 'August 12, 2026',
    title: 'Brand-only contract and template sync',
    authors: team,
    body: (
      <p>Product chrome moved to dylo-starter. This repository keeps the brand, the theme and the marketing pieces.</p>
    ),
  },
  {
    date: 'August 10, 2026',
    title: 'Design system v1',
    authors: team,
    body: <p>The first tokens, the Tailwind mapping, the Catalyst layer and the docs site.</p>,
  },
]

function ChangelogPage() {
  return (
    <SiteChrome>
      <ChangelogTimeline title="Changelog" lead="What changed, and when." entries={changelog} />
    </SiteChrome>
  )
}

function LegalKitPage() {
  return (
    <SiteChrome>
      <LegalPage title="Terms" updated="November 4, 2026">
        <p>
          <strong>Placeholder.</strong> This page shows the legal layout. It is not dylo&apos;s terms.
        </p>
        <h2>Who we are</h2>
        <p>{legal.en}</p>
        <h2>What we provide</h2>
        <p>A web app built for a one-off fee, then hosted and looked after for a yearly fee.</p>
        <h2>Your app</h2>
        <p>You can take the app elsewhere whenever you want. We hand it over.</p>
      </LegalPage>
    </SiteChrome>
  )
}

const docsGroups: DocsNavGroup[] = [
  {
    title: 'Getting started',
    items: [
      { label: 'Introduction', href: `${m('docs')}#introduction` },
      { label: 'The proposal', href: `${m('docs')}#proposal` },
      { label: 'Quotes and dates', href: `${m('docs')}#quotes` },
    ],
  },
  {
    title: 'Working with us',
    items: [
      { label: 'The dylo platform', href: `${m('docs')}#platform`, badge: 'New' },
      { label: 'Access and accounts', href: `${m('docs')}#access` },
      { label: 'Hand-over', href: `${m('docs')}#hand-over` },
    ],
  },
]

function DocsPage() {
  return (
    <DocsShell
      groups={docsGroups}
      homeHref={m()}
      active={`${m('docs')}#introduction`}
      topLinks={[
        { label: 'Pricing', href: m('pricing') },
        { label: 'Contact', href: m('contact') },
      ]}
      toc={
        <DocsToc
          active="#how"
          items={[
            { label: 'How a build runs', href: '#how' },
            { label: 'What you need', href: '#need', depth: 3 },
            { label: 'After launch', href: '#after' },
          ]}
        />
      }
    >
      <p className="font-mono text-xs text-gray-10">Getting started</p>
      <h1 className="mt-2 font-display effect-font-styling text-[2.25rem] font-medium tracking-tight">Introduction</h1>
      <Prose className="mt-6">
        <p>{pitch.thirtySeconds.en}</p>
        <h2 id="how">How a build runs</h2>
        <p>A proposal with the scope, the price and the date, the build, and then we look after it.</p>
        <h3 id="need">What you need</h3>
        <p>Nothing technical. A person who owns the result, and an hour a week.</p>
        <h2 id="after">After launch</h2>
        <p>We host the app and look after it for a yearly fee.</p>
      </Prose>
      <div className="mt-8">
        <CodeBlock
          samples={[
            {
              label: 'Hand-over checklist',
              code: '- Source code\n- Database export\n- Domain and DNS\n- Accounts and keys',
            },
          ]}
        />
      </div>
      <DocsPager next={{ label: 'The proposal', href: `${m('docs')}#proposal` }} />
    </DocsShell>
  )
}

const showcase = `import { Button } from '@/components/ui/button'

export function Save() {
  return <Button variant="primary">Save changes</Button>
}`

function BlocksPage() {
  return (
    <SiteChrome>
      <PageHero
        eyebrow="Block gallery"
        title="Blocks with example data"
        lead="Sections the dylo site does not use as they stand, shown here with clearly made-up content so they can be reviewed."
      />
      <Section>
        <SectionTitle className="mb-2 text-center">Usage-priced plans</SectionTitle>
        <SectionLead className="mx-auto mb-12 max-w-2xl text-center">
          Example plans for a metered product. These are not dylo prices.
        </SectionLead>
        <ExamplePricing />
      </Section>
      <CodeShowcase
        title="Code showcase"
        lead="Framework tabs over a framed sample."
        languages={[
          {
            id: 'react',
            label: 'React',
            icon: <Code className="size-4" />,
            samples: [{ label: 'save.tsx', code: showcase }],
          },
          {
            id: 'css',
            label: 'CSS',
            icon: <Palette className="size-4" />,
            samples: [{ label: 'tailwind.css', code: "@import 'tailwindcss';\n@import './dylo/dylo-theme.css';" }],
          },
        ]}
      />
      <FeaturePanels
        title="Feature panels"
        lead="Three panels with a glow line, for a short list of what a product does."
        panels={doors.map((d) => ({ icon: d.icon, title: d.title, body: d.body, visual: d.panel }))}
      />
    </SiteChrome>
  )
}

export function renderMarketingPage(path: string): React.ReactNode {
  if (path === '') return <HomePage />
  if (path === 'pricing') return <PricingPage />
  if (path.startsWith('features/')) return <FeaturePage id={path.split('/')[1]!} />
  if (path === 'customers') return <CustomersPage />
  if (path.startsWith('customers/')) return <StoryPage />
  if (path === 'about') return <AboutPage />
  if (path === 'contact') return <ContactPage />
  if (path === 'blog') return <BlogPage />
  if (path.startsWith('blog/')) return <PostPage />
  if (path === 'changelog') return <ChangelogPage />
  if (path === 'legal') return <LegalKitPage />
  if (path === 'docs') return <DocsPage />
  if (path === 'blocks') return <BlocksPage />
  return null
}
