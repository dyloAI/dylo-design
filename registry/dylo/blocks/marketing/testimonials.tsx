import { cn } from '@/lib/utils'
import { Avatar } from '@/registry/dylo/ui/avatar'
import * as React from 'react'
import { GlowEdge, Section, SectionLead, SectionTitle } from './section'

export type Quote = { quote: string; name: string; role: string; avatar?: string; logo?: React.ReactNode }

function Byline({ name, role, avatar }: Pick<Quote, 'name' | 'role' | 'avatar'>) {
  return (
    <div className="flex items-center gap-4">
      <Avatar
        size="lg"
        src={avatar}
        fallback={name
          .split(' ')
          .map((n) => n[0])
          .join('')}
      />
      <div className="text-left">
        <p className="text-base text-gray-12 md:text-[1.125rem] md:leading-[1.5]">{name}</p>
        <p className="text-sm leading-[1.6] text-gray-11">{role}</p>
      </div>
    </div>
  )
}

/** One large quote: a logo in a soft halo, the quote, and who said it. */
export function Testimonial({ quote, name, role, avatar, logo, className }: Quote & { className?: string }) {
  return (
    <figure className={cn('relative flex flex-col items-center justify-center gap-12 pt-24 md:pb-24', className)}>
      <GlowEdge />
      {logo ? (
        <div className="flex size-[100px] items-center justify-center rounded-full bg-[radial-gradient(var(--dylo-gray-a4)_0%,var(--dylo-background)_90%)] text-emphasis">
          {logo}
        </div>
      ) : null}
      <blockquote className="mx-auto max-w-[520px] text-center text-balance">
        <p className="text-[1.5rem] leading-[1.5] font-medium text-gray-12">{quote}</p>
      </blockquote>
      <figcaption>
        <Byline name={name} role={role} avatar={avatar} />
      </figcaption>
    </figure>
  )
}

function QuoteCard({ quote, name, role, avatar }: Quote) {
  return (
    <li className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-gray-a3 bg-linear-to-b from-gray-a3 to-transparent to-70% px-8 py-6 md:w-[450px]">
      <span
        aria-hidden
        className="pointer-events-none absolute -top-0.5 -left-0.5 h-[calc(100%+4px)] w-[calc(100%+4px)] bg-linear-to-b from-transparent from-60% to-background"
      />
      <blockquote className="relative flex flex-col gap-6">
        <p className="text-base leading-7 text-gray-12">{quote}</p>
        <Byline name={name} role={role} avatar={avatar} />
      </blockquote>
    </li>
  )
}

/** "Beyond expectations": a headline over a row of quote cards that scrolls on its own. */
export function TestimonialMarquee({
  title,
  lead,
  quotes,
  className,
}: {
  title: React.ReactNode
  lead?: React.ReactNode
  quotes: Quote[]
  className?: string
}) {
  return (
    <Section className={cn('px-0 md:max-w-none', className)}>
      <SectionTitle className="mb-2 text-center">{title}</SectionTitle>
      {lead ? <SectionLead className="mb-24 text-center">{lead}</SectionLead> : null}
      <div className="group flex w-full items-start overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-8">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1 || undefined}
              className="flex shrink-0 animate-marquee items-start justify-around gap-8 group-hover:[animation-play-state:paused]"
            >
              {quotes.map((q, i) => (
                <QuoteCard key={`${copy}-${i}`} {...q} />
              ))}
            </ul>
          ))}
        </div>
      </div>
    </Section>
  )
}
