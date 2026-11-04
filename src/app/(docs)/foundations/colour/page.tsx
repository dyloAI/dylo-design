import { Page, PageHeader, Prose, Section } from '@/components/docs'
import { borderRoles, scale, statusRoles, surfaceRoles, textRoles, type Role, type Swatch } from '@/lib/tokens'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Colour',
  description: 'A neutral gray scale, translucent status hues, and the semantic utilities, in light and dark.',
}

const scales: { title: string; description: string; swatches: Swatch[] }[] = [
  { title: 'Gray', description: 'Solid. Surfaces, solid borders, text.', swatches: scale('gray', false) },
  {
    title: 'Gray, translucent',
    description: 'gray-a1 to a12. Fills and hairlines that sit on any surface.',
    swatches: scale('gray', true),
  },
  {
    title: 'Slate',
    description: 'Translucent. Code chrome and the marketing hairlines.',
    swatches: scale('slate', true),
  },
  { title: 'Green', description: 'Success only.', swatches: scale('green', true) },
  { title: 'Amber', description: 'Warning only.', swatches: scale('amber', true) },
  { title: 'Red', description: 'Error and destructive only.', swatches: scale('red', true) },
  { title: 'Blue', description: 'Info and scheduled only.', swatches: scale('blue', true) },
  { title: 'Violet', description: 'Opened, in email events.', swatches: scale('violet', true) },
  { title: 'Orange', description: 'Clicked, in email events.', swatches: scale('orange', true) },
]

function ScaleRow({ swatches, theme }: { swatches: Swatch[]; theme: 'light' | 'dark' }) {
  return (
    <div className={cn(theme, 'bg-background p-4')}>
      <div className="grid grid-cols-12 gap-1.5">
        {swatches.map((s, i) => (
          <div key={s.token} className="flex flex-col gap-1.5">
            <div
              className="h-10 rounded-md ring-1 ring-gray-a2 ring-inset"
              style={{ background: `var(${s.token})` }}
              title={`${s.utility}  ${theme === 'light' ? s.light : s.dark}`}
            />
            <span className="text-center font-mono text-2xs text-gray-10">{i + 1}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function RoleTable({ rows, sample }: { rows: Role[]; sample: 'fill' | 'text' | 'border' }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-a3">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-gray-a3 bg-gray-a2 text-xs text-default">
            <th className="h-9 px-4 font-medium">Utility</th>
            <th className="h-9 px-4 font-medium">Role</th>
            <th className="h-9 w-40 px-4 font-medium">Light</th>
            <th className="h-9 w-40 px-4 font-medium">Dark</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.utility} className="border-b border-gray-a3 last:border-b-0">
              <td className="px-4 py-3">
                <code className="font-mono text-[0.8125rem] text-emphasis">{row.utility}</code>
              </td>
              <td className="px-4 py-3 text-[0.8125rem] text-default">{row.role}</td>
              {(['light', 'dark'] as const).map((theme) => (
                <td key={theme} className="px-4 py-3">
                  <span className={cn(theme, 'inline-flex items-center gap-2 rounded-lg bg-background px-2 py-1')}>
                    {sample === 'text' ? (
                      <span className="text-sm font-semibold" style={{ color: `var(${row.token})` }}>
                        Aa
                      </span>
                    ) : (
                      <span
                        className={cn('size-4 rounded', sample === 'border' ? 'border-2' : 'ring-1 ring-gray-a3')}
                        style={
                          sample === 'border'
                            ? { borderColor: `var(${row.token})` }
                            : { background: `var(${row.token})` }
                        }
                      />
                    )}
                    <code className="font-mono text-2xs text-default">{theme === 'light' ? row.light : row.dark}</code>
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function ColourPage() {
  const status = statusRoles()
  return (
    <Page wide>
      <PageHeader
        eyebrow="Foundations"
        title="Colour"
        lead="Almost everything is gray. Black is the accent in light and white is the accent in dark. Hue appears only to carry a status."
      />

      <Section
        title="How to choose"
        description="Reach for a semantic utility first, then a scale step, and never a raw value."
      >
        <Prose>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Semantic first.</strong> <code>bg-background</code>, <code>text-emphasis</code>,{' '}
              <code>text-default</code>, <code>border-gray-a3</code>, <code>bg-interactive</code>. They flip with the
              theme on their own.
            </li>
            <li>
              <strong>Steps 1 to 12 next.</strong> Every scale has twelve: 1-2 backgrounds, 3-5 component fills and
              hover, 6-8 borders, 9-10 solid fills, 11-12 text. Tailwind&apos;s default 50 to 950 palette is not used.
            </li>
            <li>
              <strong>Hue means status.</strong> Green is delivered, amber is delayed, red is bounced or destructive,
              blue is scheduled. Do not use a status hue to decorate.
            </li>
            <li>
              <strong>No raw hex</strong> in a class or a style. Outside Tailwind, use <code>var(--dylo-*)</code>.
            </li>
          </ul>
        </Prose>
      </Section>

      <Section title="Surfaces">
        <RoleTable rows={surfaceRoles()} sample="fill" />
      </Section>
      <Section title="Text">
        <RoleTable rows={textRoles()} sample="text" />
      </Section>
      <Section title="Borders">
        <RoleTable rows={borderRoles()} sample="border" />
      </Section>

      <Section
        title="Status"
        description="Each status has a text, a fill and a border utility. Badge, Callout and Toast are built from them."
      >
        <div className="grid gap-3 md:grid-cols-2">
          {status.map((s) =>
            (['light', 'dark'] as const).map((theme) => (
              <div
                key={`${s.name}-${theme}`}
                className={cn(theme, 'rounded-2xl border border-gray-a3 bg-background p-4')}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="rounded-md border px-2 py-0.5 text-xs font-medium capitalize"
                    style={{
                      color: `var(${s.text.token})`,
                      background: `var(${s.bg.token})`,
                      borderColor: `var(${s.border.token})`,
                    }}
                  >
                    {s.name}
                  </span>
                  <span className="font-mono text-2xs text-gray-9 uppercase">{theme}</span>
                </div>
                <p className="mt-3 text-[0.8125rem] text-default">{s.use}</p>
                <p className="mt-2 font-mono text-2xs text-gray-10">
                  text-{s.name} · bg-{s.name} · border-{s.name}
                </p>
              </div>
            ))
          )}
        </div>
      </Section>

      <Section title="Scales" description="Hover a step for its utility and value. Light on top, dark below.">
        <div className="flex flex-col gap-6">
          {scales.map((s) => (
            <div key={s.title}>
              <div className="mb-2 flex items-baseline justify-between gap-4">
                <h3 className="text-sm font-medium text-emphasis">{s.title}</h3>
                <p className="text-xs text-gray-10">{s.description}</p>
              </div>
              <div className="overflow-hidden rounded-2xl border border-gray-a3">
                <ScaleRow swatches={s.swatches} theme="light" />
                <div className="border-t border-gray-a3">
                  <ScaleRow swatches={s.swatches} theme="dark" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </Page>
  )
}
