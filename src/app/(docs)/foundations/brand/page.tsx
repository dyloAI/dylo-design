import { Command, Page, PageHeader, Prose, Section } from '@/components/docs'
import { install } from '@/lib/registry'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Brand marks' }

const LOCKUPS = [
  {
    file: 'dylo-logo-horizontal-mono.svg',
    name: 'Horizontal, monochrome',
    use: 'The interface lockup on light. The Logo component uses it.',
    tone: 'light',
  },
  {
    file: 'dylo-logo-horizontal-mono-reversed.svg',
    name: 'Horizontal, monochrome reversed',
    use: 'The interface lockup on dark. The Logo component swaps to it under .dark.',
    tone: 'ink',
  },
  {
    file: 'dylo-logo-horizontal.svg',
    name: 'Horizontal, colour',
    use: 'The original lockup with the oxide keystone, for print and collateral.',
    tone: 'light',
  },
  {
    file: 'dylo-logo-horizontal-reversed.svg',
    name: 'Horizontal, colour reversed',
    use: 'The original lockup on dark collateral.',
    tone: 'ink',
  },
  {
    file: 'dylo-logo-stacked.svg',
    name: 'Stacked lockup',
    use: 'Narrow spaces where the horizontal will not fit.',
    tone: 'light',
  },
] as const

const MEET_BACKGROUNDS = [
  { file: 'dylo-meet-background-bone.png', name: 'Bone' },
  { file: 'dylo-meet-background-ink.png', name: 'Ink' },
  { file: 'dylo-meet-background-bone-mirrored.png', name: 'Bone, mirrored' },
  { file: 'dylo-meet-background-ink-mirrored.png', name: 'Ink, mirrored' },
] as const

const MARKS = [
  { file: 'dylo-mark-mono.svg', name: 'Keystone, monochrome', use: 'The interface mark on light.', tone: 'light' },
  {
    file: 'dylo-mark-mono-reversed.svg',
    name: 'Keystone, monochrome reversed',
    use: 'The interface mark on dark.',
    tone: 'ink',
  },
  {
    file: 'dylo-mark-accent.svg',
    name: 'Keystone, accented',
    use: 'The centre stone in the original oxide. For the app icon and print.',
    tone: 'light',
  },
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
    <figure className="m-0 overflow-hidden rounded-2xl border border-gray-a3">
      <div className={`flex h-32 items-center justify-center p-6 ${tone === 'ink' ? 'dark' : 'light'} bg-background`}>
        {/* eslint-disable-next-line @next/next/no-img-element -- SVG lockups, nothing to optimise */}
        <img src={`/brand/${file}`} alt={name} style={{ height }} />
      </div>
      <figcaption className="border-t border-gray-a3 p-4">
        <div className="text-sm font-medium text-emphasis">{name}</div>
        <p className="mt-1 mb-2 text-[0.8125rem] leading-5 text-default">{use}</p>
        <code className="rounded-md bg-gray-a3 px-1.5 py-0.5 font-mono text-2xs text-default">/brand/{file}</code>
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
        lead="The mark is a keystone of three stones. It is monochrome in the interface: black on light, white on dark."
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

      <Section
        title="The mark alone"
        description="For app icons, favicons and anywhere the wordmark would be illegible."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {MARKS.map((asset) => (
            <AssetTile key={asset.file} {...asset} height={48} />
          ))}
        </div>
      </Section>

      <Section
        title="App icon"
        description="The tile radius is roughly 22% of its width — the platform convention, not the panel radius."
      >
        <div className="flex flex-wrap items-end gap-6 rounded-2xl border border-gray-a3 p-8">
          {[96, 64, 40, 24].map((size) => (
            <div key={size} className="text-center">
              {/* eslint-disable-next-line @next/next/no-img-element -- raster app icon, fixed sizes */}
              <img
                src="/brand/dylo-app-icon.png"
                alt={`dylo app icon at ${size} pixels`}
                className="shadow-md"
                style={{ width: size, height: size, borderRadius: size * 0.22 }}
              />
              <code className="mt-2 block font-mono text-2xs text-gray-10">{size}px</code>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Video call background"
        description="1920×1080, for Google Meet, Zoom or Teams. The lockup sits in the top-left: the person takes the centre and the lower third, and Meet puts the participant name chip in the bottom-left."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {MEET_BACKGROUNDS.map((background) => (
            <figure key={background.file} className="m-0 overflow-hidden rounded-2xl border border-gray-a3">
              <a href={`/brand/${background.file}`} download>
                {/* eslint-disable-next-line @next/next/no-img-element -- fixed specimen of the asset itself */}
                <img
                  src={`/brand/${background.file}`}
                  alt={`dylo ${background.name} video call background`}
                  className="block w-full"
                />
              </a>
              <figcaption className="flex items-baseline justify-between gap-3 border-t border-gray-a3 p-4">
                <span className="text-sm font-medium text-emphasis">{background.name}</span>
                <a
                  href={`/brand/${background.file}`}
                  download
                  className="text-xs font-medium text-default hover:text-emphasis"
                >
                  Download
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
        <Prose>
          <p className="mt-4">
            <strong>Use the plain pair unless you have checked otherwise.</strong> Meet composites the background into
            your outgoing stream and then mirrors only your own self-view, so a wordmark that reads backwards to you
            reads correctly to everyone else. The mirrored pair is pre-flipped for the setups that mirror the outgoing
            stream as well — some virtual cameras, and Zoom with <em>Mirror my video</em> left on. Picking it when you
            did not need it reverses the mark for the whole call.
          </p>
          <p>
            The lockup is deliberately much larger than a page equivalent — a call tile is commonly rendered around
            480px wide, so the image is seen at roughly quarter scale. Regenerate them from{' '}
            <code>brand-templates/meet-background.html</code>; the capture recipe is in the comment at the top, and{' '}
            <code>?mirror</code> produces the flipped pair from the same frames.
          </p>
        </Prose>
      </Section>

      <Section title="Rules">
        <Prose>
          <ul className="m-0 list-disc space-y-2 pl-5">
            <li>
              <strong>Never redraw it.</strong> Use the files. Do not rotate, recolour, restack the stones, outline it,
              or add any effect.
            </li>
            <li>
              <strong>It is not an icon.</strong> The keystone does not belong to an icon family and should not be set
              alongside UI icons at the same size.
            </li>
            <li>
              <strong>Give it air.</strong> Clear space of at least the height of one voussoir on every side.
            </li>
            <li>
              <strong>Reversed on dark only.</strong> Never place the dark mark on a dark surface and hope; there is a
              reversed file for that, and the Logo component picks it for you.
            </li>
          </ul>
        </Prose>
      </Section>

      <Section title="Icons" description="No emoji, ever.">
        <Prose>
          <p className="m-0">
            Interface icons are{' '}
            <a href="https://lucide.dev" rel="noreferrer">
              Lucide
            </a>
            , at 16px in controls and 14px in dense rows, in the text colour of the control they sit in. Status icons
            take the status hue. Product apps built on Catalyst keep Heroicons as shipped.
          </p>
        </Prose>
      </Section>
    </Page>
  )
}
