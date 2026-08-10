import { Command, Page, PageHeader, Prose, Section } from '@/components/docs'
import { install } from '@/lib/registry'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Brand marks' }

const LOCKUPS = [
  { file: 'dylo-logo-horizontal.svg', name: 'Horizontal lockup', use: 'The primary. Use it unless something prevents you.', tone: 'light' },
  { file: 'dylo-logo-horizontal-reversed.svg', name: 'Horizontal reversed', use: 'The same lockup on ink surfaces.', tone: 'ink' },
  { file: 'dylo-logo-stacked.svg', name: 'Stacked lockup', use: 'Narrow spaces where the horizontal will not fit.', tone: 'light' },
] as const

const MARKS = [
  { file: 'dylo-mark.svg', name: 'Keystone mark', use: 'Monochrome ink.', tone: 'light' },
  { file: 'dylo-mark-accent.svg', name: 'Keystone, accented', use: 'The keystone stone in oxide.', tone: 'light' },
  { file: 'dylo-mark-reversed.svg', name: 'Keystone reversed', use: 'Bone on ink.', tone: 'ink' },
] as const

function AssetTile({
  file,
  name,
  use,
  tone,
  height = 40,
}: {
  file: string
  name: string
  use: string
  tone: 'light' | 'ink'
  height?: number
}) {
  return (
    <figure className="border-line m-0 overflow-hidden rounded-sm border">
      <div className={`flex h-32 items-center justify-center p-6 ${tone === 'ink' ? 'bg-ink' : 'bg-paper'}`}>
        {/* eslint-disable-next-line @next/next/no-img-element -- SVG lockups, nothing to optimise */}
        <img src={`/brand/${file}`} alt={name} style={{ height }} />
      </div>
      <figcaption className="border-line border-t p-4">
        <div className="text-ink text-[14px] font-semibold">{name}</div>
        <p className="text-graphite mt-1 mb-2 text-[13px]/[1.5]">{use}</p>
        <code className="bg-bone text-graphite rounded-sm px-1.5 py-0.5 font-mono text-[11px]">/brand/{file}</code>
      </figcaption>
    </figure>
  )
}

export default function BrandPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Foundations"
        title="Brand marks"
        lead="The mark is a keystone: two voussoirs in ink and the keystone itself in oxide — the crafted piece that locks the arch."
      />

      <Section title="Install the assets" description="Drops every SVG and PNG into public/brand/.">
        <Command>{install('brand-assets')}</Command>
      </Section>

      <Section title="Lockups">
        <div className="grid gap-4 sm:grid-cols-2">
          {LOCKUPS.map((asset) => (
            <AssetTile key={asset.file} {...asset} height={asset.file.includes('stacked') ? 56 : 30} />
          ))}
        </div>
      </Section>

      <Section title="The mark alone" description="For app icons, favicons and anywhere the wordmark would be illegible.">
        <div className="grid gap-4 sm:grid-cols-3">
          {MARKS.map((asset) => (
            <AssetTile key={asset.file} {...asset} height={48} />
          ))}
        </div>
      </Section>

      <Section title="App icon" description="The tile radius is roughly 22% of its width — the platform convention, not the panel radius.">
        <div className="border-line flex flex-wrap items-end gap-6 rounded-sm border p-8">
          {[96, 64, 40, 24].map((size) => (
            <div key={size} className="text-center">
              {/* eslint-disable-next-line @next/next/no-img-element -- raster app icon, fixed sizes */}
              <img
                src="/brand/dylo-app-icon.png"
                alt={`dylo app icon at ${size} pixels`}
                className="shadow-md"
                style={{ width: size, height: size, borderRadius: size * 0.22 }}
              />
              <code className="text-concrete mt-2 block font-mono text-[11px]">{size}px</code>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Rules">
        <Prose>
          <ul className="m-0 list-disc space-y-2 pl-5">
            <li>
              <strong className="text-ink">Never redraw it.</strong> Use the files. Do not rotate, recolour, restack
              the stones, outline it, or add any effect.
            </li>
            <li>
              <strong className="text-ink">It is not an icon.</strong> The keystone does not belong to an icon family
              and should not be set alongside UI icons at the same size.
            </li>
            <li>
              <strong className="text-ink">Give it air.</strong> Clear space of at least the height of one voussoir on
              every side.
            </li>
            <li>
              <strong className="text-ink">Reversed on ink only.</strong> Never place the ink mark on a dark surface
              and hope; there is a reversed file for that.
            </li>
          </ul>
        </Prose>
      </Section>

      <Section title="Icons" description="No emoji, ever.">
        <Prose>
          <p className="m-0">
            When UI icons are needed, use a utilitarian line set at a 2px square-cut stroke —{' '}
            <a href="https://lucide.dev" rel="noreferrer">
              Lucide
            </a>{' '}
            is the sanctioned match for the mark&rsquo;s line weight, and is a stand-in until a bespoke set exists.
            None of the components here need one, so nothing is bundled. In the mono layer, Unicode micro-icons
            (→, ×, ·) are fine used sparingly.
          </p>
        </Prose>
      </Section>
    </Page>
  )
}
