import { Page, PageHeader, Preview, Prose, Section } from '@/components/docs'
import { typeScale } from '@/lib/tokens'
import { Eyebrow } from '@/registry/dylo/ui/eyebrow'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Type' }

export default function TypePage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Foundations"
        title="Type"
        lead="Two families, and the discipline is in the split. Space Grotesk carries everything a person reads; Space Mono carries everything a machine produced."
      />

      <Section
        title="Space Grotesk"
        description="Display through body and UI. Tighten tracking as size grows — -0.02em on headlines, -0.03em on display."
      >
        <Preview className="block">
          <p className="m-0 text-display font-bold">Software, made.</p>
          <p className="mt-4 mb-0 max-w-[52ch] text-[16px]/[1.6] text-graphite">
            We write like engineers who care about the craft. Plain words about real work, numbers instead of
            adjectives, short declaratives. The work speaks; we do not oversell it.
          </p>
        </Preview>
      </Section>

      <Section
        title="Space Mono"
        description="The technical layer — eyebrows, labels, data, metadata, timestamps. Uppercase with wide tracking. This is what makes the system read as engineered rather than merely minimal."
      >
        <Preview className="block">
          <Eyebrow>AI-native software factory</Eyebrow>
          <div className="mt-5 flex flex-wrap gap-6">
            {[
              ['Shipped', '6 weeks'],
              ['Review time', '−70%'],
              ['Fleet', '120 vehicles'],
            ].map(([label, value]) => (
              <div key={label}>
                <div className="font-mono text-[11px] font-bold tracking-eyebrow text-concrete uppercase">{label}</div>
                <div className="mt-1 text-[22px] font-bold tracking-tight text-ink">{value}</div>
              </div>
            ))}
          </div>
        </Preview>
      </Section>

      <Section title="Scale">
        <div className="overflow-hidden rounded-sm border border-line">
          {typeScale.map((step) => (
            <div
              key={step.name}
              className="grid gap-3 border-b border-line p-5 last:border-b-0 sm:grid-cols-[180px_1fr]"
            >
              <div>
                <div className="text-[14px] font-semibold text-ink">{step.name}</div>
                <code className="font-mono text-[11px] text-concrete">{step.utility}</code>
                <p className="m-0 mt-1 font-mono text-[11px] text-concrete">{step.value}</p>
              </div>
              <div>
                <p className="m-0 text-[13px]/[1.5] text-graphite">{step.note}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Rules">
        <Prose>
          <ul className="m-0 list-disc space-y-2 pl-5">
            <li>
              <strong className="text-ink">Never a third family.</strong> If something needs to feel different, change
              case and tracking, not the typeface.
            </li>
            <li>
              <strong className="text-ink">Mono is a signal, not a texture.</strong> Use it where the content really is
              technical. Mono body copy is a misuse.
            </li>
            <li>
              <strong className="text-ink">One display line per page.</strong> Two competing display sizes flattens the
              hierarchy the scale exists to create.
            </li>
            <li>
              <strong className="text-ink">Unstyled text is already correct.</strong> The theme sets Space Grotesk on{' '}
              <code>body</code>, so <code>font-sans</code> is rarely needed in markup.
            </li>
          </ul>
        </Prose>
      </Section>
    </Page>
  )
}
