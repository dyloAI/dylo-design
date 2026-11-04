import { Page, PageHeader, Preview, Prose, Section } from '@/components/docs'
import { fontFamilies } from '@/lib/tokens'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Type',
  description:
    'Inter for the interface, Geist for headings, Playfair Display for the largest headline, Commit Mono for code.',
}

const scaleRows = [
  {
    name: 'Display serif',
    classes: 'font-serif text-[4rem] leading-none md:text-[6rem]',
    sample: 'A piece of work',
    spec: 'Playfair 64 / 96px, 1.0',
  },
  {
    name: 'Section title',
    classes:
      'font-display text-[3rem] leading-[1.1] font-medium tracking-tight effect-font-styling effect-font-gradient md:text-[3.5rem]',
    sample: 'Built for owners',
    spec: 'Geist 48 / 56px, medium, gradient',
  },
  {
    name: 'Page heading',
    classes: 'font-display text-[2.5rem] leading-tight font-medium tracking-tight effect-font-styling',
    sample: 'Emails',
    spec: 'Geist 40px, medium',
  },
  {
    name: 'Dashboard title',
    classes: 'font-display text-[1.75rem] leading-tight font-medium tracking-tight',
    sample: 'API keys',
    spec: 'Geist 28px, medium',
  },
  {
    name: 'Lead',
    classes: 'text-lg leading-7 text-default',
    sample: 'We build the app, then we keep it running.',
    spec: 'Inter 18 / 28px',
  },
  {
    name: 'Body',
    classes: 'text-base leading-7 text-default',
    sample: 'The price and the date are in the quote.',
    spec: 'Inter 16 / 28px',
  },
  {
    name: 'Interface',
    classes: 'text-sm text-default',
    sample: 'Last 15 days · All statuses',
    spec: 'Inter 14px. The default in the app.',
  },
  { name: 'Small', classes: 'text-xs text-gray-10', sample: 'Updated 2 minutes ago', spec: 'Inter 12px' },
  {
    name: 'Mono',
    classes: 'font-mono text-[0.8125rem] text-emphasis',
    sample: 're_123456789 · eu-west-1',
    spec: 'Commit Mono 13px',
  },
]

export default function TypePage() {
  return (
    <Page wide>
      <PageHeader
        eyebrow="Foundations"
        title="Type"
        lead="Four families, each with one job. Inter carries the interface. Geist sets headings with its stylistic sets on. Playfair Display appears once per page at most. Commit Mono is for anything a machine produced."
      />

      <Section title="Families">
        <div className="grid gap-3 md:grid-cols-2">
          {fontFamilies().map((f) => (
            <div key={f.utility} className="rounded-2xl border border-gray-a3 p-5">
              <p
                className={cn(
                  f.utility,
                  'text-[2rem] leading-tight text-emphasis',
                  f.utility === 'font-display' && 'effect-font-styling'
                )}
              >
                {f.name}
              </p>
              <p className="mt-2 text-[0.8125rem] text-default">{f.role}</p>
              <p className="mt-3 font-mono text-2xs break-all text-gray-10">
                {f.utility} · {f.stack}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Scale"
        description="Sizes are arbitrary values on purpose, so tailwind-merge resolves overrides correctly."
      >
        <Preview layout="stack" className="flex-col items-stretch gap-8">
          {scaleRows.map((row) => (
            <div key={row.name} className="grid gap-2 md:grid-cols-[160px_1fr] md:items-baseline">
              <div>
                <p className="text-xs font-medium text-emphasis">{row.name}</p>
                <p className="text-2xs text-gray-10">{row.spec}</p>
              </div>
              <p className={cn(row.classes, 'min-w-0 truncate')}>{row.sample}</p>
            </div>
          ))}
        </Preview>
      </Section>

      <Section title="Rules">
        <Prose>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Headings are Geist medium</strong>, tracked tight, with <code>effect-font-styling</code>.
              Marketing section titles add <code>effect-font-gradient</code>, which fades the line from full strength to
              half.
            </li>
            <li>
              <strong>The serif is for one headline.</strong> The home hero and the large page heroes. Never in the
              product.
            </li>
            <li>
              <strong>Mono is for machine output:</strong> IDs, keys, DNS values, HTTP methods, code. Not for labels or
              eyebrows.
            </li>
            <li>
              <strong>Sentence case everywhere.</strong> The brand stays lowercase: dylo.
            </li>
            <li>
              <strong>The fonts are open-licence substitutes</strong> loaded with next/font. Install the{' '}
              <code>fonts</code> item outside Next.js.
            </li>
          </ul>
        </Prose>
      </Section>
    </Page>
  )
}
