import { Page, PageHeader, Preview, Prose, Section } from '@/components/docs'
import { layoutTokens, motionTokens, shadows } from '@/lib/tokens'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Space, shape and motion',
  description: 'Radii, shadows, layout widths and motion for the dylo system.',
}

const radii = [
  { utility: 'rounded-md', px: 6, use: 'Badges, kbd, small chips.' },
  { utility: 'rounded-lg', px: 8, use: 'Menu items, table header ends, xs buttons.' },
  { utility: 'rounded-xl', px: 12, use: 'Buttons, inputs, menus.' },
  { utility: 'rounded-2xl', px: 16, use: 'Cards, dialogs, sheets, code blocks, CTAs.' },
  { utility: 'rounded-3xl', px: 24, use: 'Marketing feature panels.' },
  { utility: 'rounded-full', px: 999, use: 'Avatars, status dots, the announcement pill.' },
]

const radiusClass: Record<string, string> = {
  'rounded-md': 'rounded-md',
  'rounded-lg': 'rounded-lg',
  'rounded-xl': 'rounded-xl',
  'rounded-2xl': 'rounded-2xl',
  'rounded-3xl': 'rounded-3xl',
  'rounded-full': 'rounded-full',
}

const shadowClass: Record<string, string> = {
  'shadow-glow': 'shadow-glow',
  'shadow-popover': 'shadow-popover',
  'shadow-dialog': 'shadow-dialog',
}

const spacing = [
  { name: 'Control height', value: '32px (h-8)', use: 'The default button, input and select in the app.' },
  { name: 'Table row', value: '56px (h-14), 44px compact', use: 'List tables and DNS records.' },
  { name: 'Dashboard column', value: 'max 1104px, 40px side padding', use: 'Every dashboard page.' },
  { name: 'Marketing container', value: 'max 1280px, 24px side padding', use: 'Every marketing section.' },
  { name: 'Section rhythm', value: '96 to 128px', use: 'Between marketing sections.' },
]

export default function SpacePage() {
  return (
    <Page wide>
      <PageHeader
        eyebrow="Foundations"
        title="Space, shape and motion"
        lead="Tailwind's spacing and radius scales as they ship, so p-4 and rounded-xl mean what you expect. The system adds three shadows, a few layout sizes and a short list of motions."
      />

      <Section title="Radius">
        <Preview layout="stack" className="grid grid-cols-2 gap-6 md:grid-cols-6">
          {radii.map((r) => (
            <div key={r.utility} className="flex flex-col gap-2">
              <div className={cn('h-16 border border-gray-a4 bg-gray-a2', radiusClass[r.utility])} />
              <code className="font-mono text-2xs text-emphasis">{r.utility}</code>
              <p className="text-2xs leading-4 text-gray-10">{r.use}</p>
            </div>
          ))}
        </Preview>
      </Section>

      <Section title="Shadow" description="Surfaces are flat. Shadows only lift what floats above the page.">
        <Preview className="grid gap-8 md:grid-cols-3">
          {shadows().map((s) => (
            <div key={s.utility} className="flex flex-col gap-3">
              <div className={cn('h-20 rounded-2xl bg-overlay', shadowClass[s.utility])} />
              <code className="font-mono text-2xs text-emphasis">{s.utility}</code>
              <p className="text-2xs text-gray-10">{s.role}</p>
            </div>
          ))}
        </Preview>
      </Section>

      <Section title="Layout">
        <div className="overflow-hidden rounded-2xl border border-gray-a3">
          {[
            ...spacing.map((s) => ({ key: s.name, a: s.name, b: s.value, c: s.use })),
            ...layoutTokens().map((t) => ({ key: t.token, a: t.token, b: t.value, c: t.role })),
          ].map((row) => (
            <div
              key={row.key}
              className="grid gap-1 border-b border-gray-a3 px-4 py-3 last:border-b-0 md:grid-cols-[240px_220px_1fr]"
            >
              <span className="text-sm text-emphasis">{row.a}</span>
              <code className="font-mono text-xs text-default">{row.b}</code>
              <span className="text-[0.8125rem] text-default">{row.c}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Motion">
        <div className="mb-5 overflow-hidden rounded-2xl border border-gray-a3">
          {motionTokens().map((m) => (
            <div
              key={m.token}
              className="grid gap-1 border-b border-gray-a3 px-4 py-3 last:border-b-0 md:grid-cols-[240px_220px_1fr]"
            >
              <code className="font-mono text-xs text-emphasis">{m.token}</code>
              <code className="font-mono text-xs text-default">{m.value}</code>
              <span className="text-[0.8125rem] text-default">{m.role}</span>
            </div>
          ))}
        </div>
        <Prose>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Overlays</strong> scale up from 96% and fade in over 200ms (<code>animate-scale-up-fade</code>).
              Menus slide 4px (<code>animate-slide-down-fade</code>).
            </li>
            <li>
              <strong>Sheets</strong> slide in from their edge over 500ms on the drawer curve.
            </li>
            <li>
              <strong>Marketing</strong> headlines rise and fade in once (<code>animate-hero</code>). The quote strip
              scrolls slowly (<code>animate-marquee</code>).
            </li>
            <li>
              <strong>Everything stops under reduced motion.</strong> No bounces, no float loops.
            </li>
          </ul>
        </Prose>
      </Section>
    </Page>
  )
}
