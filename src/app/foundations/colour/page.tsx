import { Page, PageHeader, Prose, Section } from '@/components/docs'
import { accents, neutrals, type ColourToken } from '@/lib/tokens'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Colour' }

function Swatch({ token, reversed }: { token: ColourToken; reversed?: boolean }) {
  return (
    <div className="overflow-hidden rounded-sm border border-line">
      <div
        className="h-24 w-full"
        style={{ backgroundColor: `var(${token.token})` }}
        role="img"
        aria-label={`${token.name}, ${token.value}`}
      />
      <div className="border-t border-line p-4">
        <div className="flex items-baseline justify-between gap-3">
          <span className="text-[15px] font-semibold text-ink">{token.name}</span>
          <code className="font-mono text-[11px] text-concrete uppercase">{token.value}</code>
        </div>
        <p className="mt-1.5 mb-2 text-[13px]/[1.5] text-graphite">{token.role}</p>
        <div className="flex flex-wrap gap-2">
          <code className="rounded-sm bg-bone px-1.5 py-0.5 font-mono text-[11px] text-graphite">{token.token}</code>
          <code className="rounded-sm bg-bone px-1.5 py-0.5 font-mono text-[11px] text-graphite">{token.utility}</code>
        </div>
        {reversed && <p className="mt-2 mb-0 text-[12px] text-concrete">Pairs with bone text.</p>}
      </div>
    </div>
  )
}

export default function ColourPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Foundations"
        title="Colour"
        lead="Warm monochrome does about 95% of the work. There is exactly one accent, and it appears once per view."
      />

      <Section
        title="Neutrals"
        description="Ink through Paper. Everything structural is built from these six — text, surfaces, borders, states."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {neutrals.map((token) => (
            <Swatch key={token.token} token={token} reversed={token.name === 'Ink'} />
          ))}
        </div>
      </Section>

      <Section
        title="The accent"
        description="Oxide is a muted rust — molten metal, not a highlight pen. Spend it on the one thing that matters in a view: the keystone, a single link, or the number the page exists to show."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {accents.map((token) => (
            <Swatch key={token.token} token={token} />
          ))}
        </div>
      </Section>

      <Section title="Rules">
        <Prose>
          <ul className="m-0 list-disc space-y-2 pl-5">
            <li>
              <strong className="text-ink">Once per view.</strong> If a screen already has an Eyebrow, its oxide tick
              has spent the budget. Two oxide elements competing is the most common way this system goes wrong.
            </li>
            <li>
              <strong className="text-ink">Never a second hue.</strong> There is no green for success and no red for
              danger. Status is carried by the Badge&rsquo;s mono type and its border weight, not by colour.
            </li>
            <li>
              <strong className="text-ink">Flat and opaque.</strong> No gradients as decoration, no photographic
              backgrounds, no glass. The one translucent touch in the whole system is the oxide focus ring on fields.
            </li>
            <li>
              <strong className="text-ink">Dark means Ink.</strong> Dark surfaces are Ink with Bone text — not black,
              not a neutral grey. The warmth is what makes the monochrome read as material rather than default.
            </li>
          </ul>
        </Prose>
      </Section>
    </Page>
  )
}
