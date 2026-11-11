import { cn } from '@/lib/utils'
import { CtaArrow, CtaButton } from '@/registry/dylo/ui/cta-button'
import * as React from 'react'
import { DisplayTitle, SectionLead, container } from './section'

/** The closing call to action: a two-line serif headline and the glass button. */
export function CtaSection({
  title,
  lead,
  primary = { label: 'Get started', href: '/signup' },
  secondary,
  className,
}: {
  title: React.ReactNode
  lead?: React.ReactNode
  primary?: { label: string; href: string }
  secondary?: { label: string; href: string }
  className?: string
}) {
  return (
    <section className={cn(container, 'relative py-12 text-center sm:py-24', className)}>
      <DisplayTitle as="h2" className="mb-4 text-center md:text-[4.8rem]">
        {title}
      </DisplayTitle>
      {lead ? <SectionLead className="mx-auto max-w-lg">{lead}</SectionLead> : null}
      <div className="my-8 flex flex-col justify-center gap-4 sm:flex-row">
        <CtaButton asChild className="gap-2">
          <a href={primary.href}>
            {primary.label}
            <CtaArrow />
          </a>
        </CtaButton>
        {secondary ? (
          <CtaButton asChild variant="ghost">
            <a href={secondary.href}>{secondary.label}</a>
          </CtaButton>
        ) : null}
      </div>
    </section>
  )
}

/** The small pill link under a quote: "Send with Next.js ›". */
export function SubtleCta({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <a
      href={href}
      className={cn(
        'group relative mx-auto flex w-fit items-center gap-1 overflow-hidden rounded-full border border-gray-a3 bg-gray-a2 py-2 pr-1.5 pl-3 font-display text-sm font-medium tracking-wide text-gray-11',
        'ring-focus transition-all duration-500 ease-dylo hover:text-gray-12 focus-visible:ring-2 focus-visible:outline-hidden',
        className
      )}
    >
      <span aria-hidden className="pointer-events-none absolute inset-0 bg-linear-to-b from-gray-a3 opacity-60" />
      <span className="relative">{children}</span>
      <CtaArrow className="relative mr-0" />
    </a>
  )
}
