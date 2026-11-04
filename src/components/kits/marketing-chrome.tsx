'use client'

/* Kit pieces that take component references or callbacks, which cannot be
   passed from a server page. */

import { m } from '@/lib/kits'
import { MarketingHeader, Pricing, type NavEntry, type Plan } from '@/registry/dylo/blocks/marketing'
import { BookOpen, Calculator, FileSpreadsheet, LayoutDashboard, Newspaper, ScrollText, Users } from 'lucide-react'

const nav: NavEntry[] = [
  {
    label: 'Products',
    items: [
      {
        label: 'Configurator',
        href: m('features/configurator'),
        description: 'Quotes and products, priced while the customer waits.',
        icon: Calculator,
      },
      {
        label: 'Data extraction',
        href: m('features/data'),
        description: 'The data out of the files you already have.',
        icon: FileSpreadsheet,
      },
      {
        label: 'Operations platform',
        href: m('features/operations'),
        description: 'The work your team repeats, in one place.',
        icon: LayoutDashboard,
      },
    ],
  },
  {
    label: 'Resources',
    items: [
      { label: 'Docs', href: m('docs'), description: 'How a build runs, step by step.', icon: BookOpen },
      { label: 'Blog', href: m('blog'), description: 'Notes on pricing, delivery and care.', icon: Newspaper },
      { label: 'Changelog', href: m('changelog'), description: 'What changed, and when.', icon: ScrollText },
    ],
  },
  { label: 'Customers', href: m('customers'), icon: Users },
  { label: 'Pricing', href: m('pricing') },
]

export function KitMarketingHeader() {
  return (
    <MarketingHeader
      nav={nav}
      homeHref={m()}
      loginHref="/kits/auth/login"
      signupHref={m('contact')}
      signupLabel="Book a call"
    />
  )
}

/* The usage-priced plan picker, with example plans for a metered product.
   dylo itself does not price this way; this is for the block gallery only. */
const stops = [
  { short: '3k', long: '3,000' },
  { short: '50k', long: '50,000' },
  { short: '100k', long: '100,000' },
  { short: '200k', long: '200,000' },
  { short: '500k', long: '500,000' },
]

const tiers = [20, 35, 90, 160, 350]

function examplePlans(product: string, stop: number): Plan[] {
  const volume = stops[stop]?.long ?? stops[0]!.long
  return [
    {
      name: 'Free',
      price: '€0',
      period: '/ month',
      description: `For trying the ${product} out.`,
      cta: { label: 'Start free', href: '#' },
      features: ['3,000 units a month', '100 a day', '1 project'],
    },
    {
      name: 'Pro',
      price: `€${tiers[stop]}`,
      period: '/ month',
      description: `${volume} units a month.`,
      cta: { label: 'Choose Pro', href: '#' },
      features: [`${volume} units a month`, 'No daily limit', '10 projects', 'Email support'],
      recommended: true,
    },
    {
      name: 'Scale',
      price: `€${(tiers[stop] ?? 20) * 4}`,
      period: '/ month',
      description: 'For teams with more than one product.',
      cta: { label: 'Choose Scale', href: '#' },
      features: [`${volume} units a month`, 'Unlimited projects', 'Dedicated address', 'Priority support'],
    },
  ]
}

export function ExamplePricing() {
  return (
    <Pricing
      stops={stops}
      products={[
        { id: 'transactional', label: 'Transactional', plans: (stop) => examplePlans('transactional product', stop) },
        { id: 'marketing', label: 'Marketing', plans: (stop) => examplePlans('marketing product', stop) },
      ]}
    />
  )
}
