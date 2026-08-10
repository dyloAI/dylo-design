import { Page, PageHeader, Preview, Prose, Section } from '@/components/docs'
import { radii, shadows, spaceScale } from '@/lib/tokens'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Space & shape' }

export default function SpacePage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Foundations"
        title="Space & shape"
        lead="A 4px base, corners that stay close to square, and one shadow that does the brand's real work."
      />

      <Section
        title="Space"
        description="The named scale is for CSS and static artifacts. In Tailwind, keep using the numeric utilities — they share the same 4px rhythm, and remapping them would quietly change what p-5 means."
      >
        <div className="rounded-sm border border-line p-6">
          <ul className="m-0 list-none space-y-2 p-0">
            {spaceScale.map((step) => (
              <li key={step.token} className="flex items-center gap-4">
                <code className="w-[130px] shrink-0 font-mono text-[11px] text-concrete">{step.token}</code>
                <span className="w-[46px] shrink-0 font-mono text-[11px] text-concrete">{step.value}</span>
                <span className="h-3 rounded-[1px] bg-ink" style={{ width: step.value }} />
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section
        title="Radius"
        description="Mostly square. Panels are barely rounded; pills are reserved for small status chips and nothing else."
      >
        <Preview>
          {radii.map((radius) => (
            <div key={radius.name} className="text-center">
              <div className="size-20 border border-ink bg-bone" style={{ borderRadius: radius.value }} />
              <div className="mt-2 text-[13px] font-medium text-ink">{radius.name}</div>
              <code className="font-mono text-[11px] text-concrete">{radius.value}</code>
            </div>
          ))}
        </Preview>
        <div className="overflow-hidden rounded-sm border border-line">
          {radii.map((radius) => (
            <div key={radius.name} className="flex gap-4 border-b border-line p-4 text-[13px] last:border-b-0">
              <code className="w-[120px] shrink-0 font-mono text-[12px] text-oxide">{radius.utility}</code>
              <span className="text-graphite">{radius.use}</span>
            </div>
          ))}
        </div>
        <Prose>
          <p className="mt-4">
            The theme deliberately overrides Tailwind&rsquo;s defaults here: in dylo, <code>rounded-md</code> is the 8px
            panel corner, not Tailwind&rsquo;s 6px.
          </p>
        </Prose>
      </Section>

      <Section
        title="Shadow"
        description="The hard block offset is the signature — a stamped plate, not a floating card. Soft shadows exist but are reserved for genuinely elevated objects like app icons."
      >
        <Preview className="gap-8">
          <div className="flex size-28 items-center justify-center rounded-md border border-ink bg-paper shadow-block">
            <span className="font-mono text-[10px] tracking-eyebrow text-concrete uppercase">Block</span>
          </div>
          <div className="flex size-28 items-center justify-center rounded-md bg-paper shadow-md">
            <span className="font-mono text-[10px] tracking-eyebrow text-concrete uppercase">Soft</span>
          </div>
        </Preview>
        <div className="overflow-hidden rounded-sm border border-line">
          {shadows.map((shadow) => (
            <div key={shadow.name} className="border-b border-line p-4 last:border-b-0">
              <div className="flex flex-wrap items-baseline gap-3">
                <code className="font-mono text-[12px] text-oxide">{shadow.utility}</code>
                <code className="font-mono text-[11px] text-concrete">{shadow.value}</code>
              </div>
              <p className="m-0 mt-1 text-[13px] text-graphite">{shadow.use}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="The engineering grid"
        description="The only pattern in the system: 1px lines at 48px, at 5% ink on light surfaces and 5% bone on dark ones. Use it on hero surfaces, never behind dense content."
      >
        <div className="flex h-40 items-center justify-center rounded-sm border border-line bg-bone grid-paper">
          <code className="font-mono text-[11px] tracking-eyebrow text-concrete uppercase">grid-paper</code>
        </div>
        <div className="mt-4 flex h-40 items-center justify-center rounded-sm border border-line bg-ink grid-paper-reversed">
          <code className="font-mono text-[11px] tracking-eyebrow text-concrete uppercase">grid-paper-reversed</code>
        </div>
      </Section>

      <Section title="Motion">
        <Prose>
          <p className="m-0">
            Minimal and mechanical: 120–180ms, linear to ease-out. Hover darkens slightly. Press shifts the element down
            and right into its own shadow, so the plate seats against the page. No bounces, no float loops, and never
            fade an interactive element to mush.
          </p>
        </Prose>
      </Section>
    </Page>
  )
}
