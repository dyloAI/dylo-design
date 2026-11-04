import { cn } from '@/lib/utils'
import { CtaArrow, CtaButton } from '@/registry/dylo/ui/cta-button'
import * as React from 'react'
import { Section, SectionLead } from './section'

/**
 * The trust row: a sentence, then client wordmarks six to a row. Pass your
 * own SVG logos as `logos`; the placeholders are set in the display face.
 */
export function LogoStrip({
  lead,
  logos = ['Northwind', 'Lumen', 'Harbour', 'Fieldnotes', 'Kettle', 'Acme'],
  action,
  className,
}: {
  lead: React.ReactNode
  logos?: React.ReactNode[]
  action?: { label: string; href: string }
  className?: string
}) {
  return (
    <Section bordered className={cn('mt-20 flex flex-col items-center', className)}>
      <SectionLead className="mb-10 max-w-lg text-center">{lead}</SectionLead>
      <ul className="grid w-5/6 grid-cols-2 items-center gap-x-4 sm:grid-cols-3 lg:grid-cols-6">
        {logos.map((logo, i) => (
          <li
            key={i}
            className="flex h-24 items-center justify-center text-gray-11 transition-colors hover:text-gray-12"
          >
            {typeof logo === 'string' ? (
              <span className="font-display text-xl font-semibold tracking-tight">{logo}</span>
            ) : (
              logo
            )}
          </li>
        ))}
      </ul>
      {action ? (
        <CtaButton asChild variant="ghost" className="mt-10 gap-2">
          <a href={action.href}>
            {action.label}
            <CtaArrow />
          </a>
        </CtaButton>
      ) : null}
    </Section>
  )
}
