'use client'

import { cn } from '@/lib/utils'
import { CodeBlock, type CodeSample } from '@/registry/dylo/ui/code-block'
import * as React from 'react'
import { Section, SectionLead, SectionTitle } from './section'

export type ShowcaseLanguage = { id: string; label: string; icon: React.ReactNode; samples: CodeSample[] }

/**
 * "Integrate": a row of language tiles above a framed code sample. Each tile
 * swaps the framework tabs inside the frame.
 */
export function CodeShowcase({
  title,
  lead,
  languages,
  footer,
  className,
}: {
  title: React.ReactNode
  lead?: React.ReactNode
  languages: ShowcaseLanguage[]
  footer?: React.ReactNode
  className?: string
}) {
  const [active, setActive] = React.useState(languages[0]?.id)
  const current = languages.find((l) => l.id === active) ?? languages[0]

  return (
    <Section className={className}>
      <SectionTitle className="mb-2 text-center">{title}</SectionTitle>
      {lead ? <SectionLead className="mx-auto mb-12 max-w-5xl text-center">{lead}</SectionLead> : null}
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <div className="relative flex">
          <div
            role="tablist"
            aria-label="Language"
            className="-mx-6 flex items-center justify-between gap-4 overflow-x-auto px-6 pb-4 md:mx-auto md:px-0 md:pb-0"
          >
            {languages.map((lang) => {
              const selected = lang.id === current?.id
              return (
                <button
                  key={lang.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  data-active={selected || undefined}
                  onClick={() => setActive(lang.id)}
                  className="group flex cursor-pointer flex-col items-center justify-center gap-4 text-default outline-hidden hover:text-emphasis"
                >
                  <span
                    className={cn(
                      'flex h-14 w-[3.75rem] items-center justify-center rounded-2xl border border-gray-a3 transition duration-200 ease-in-out [&_svg]:size-6',
                      'ring-focus group-focus-visible:ring-2 group-data-[active]:border-gray-a4 group-data-[active]:bg-linear-to-b group-data-[active]:from-gray-a3'
                    )}
                  >
                    {lang.icon}
                  </span>
                  <span className="text-sm leading-[1.6] text-gray-11 transition duration-200 ease-in-out group-hover:text-emphasis group-data-[active]:text-emphasis">
                    {lang.label}
                  </span>
                </button>
              )
            })}
          </div>
          <span
            aria-hidden
            className="pointer-events-none absolute top-0 right-0 h-14 w-20 bg-linear-to-l from-background md:hidden"
          />
        </div>
        {current ? (
          <div className="relative">
            <span aria-hidden className="pointer-events-none absolute top-0 right-6 z-10 glow-line w-[300px]" />
            <span aria-hidden className="pointer-events-none absolute bottom-0 left-6 z-10 glow-line w-[300px]" />
            <CodeBlock
              key={current.id}
              samples={current.samples}
              height="h-[500px]"
              footer={footer}
              className="rounded-3xl"
            />
          </div>
        ) : null}
      </div>
    </Section>
  )
}
