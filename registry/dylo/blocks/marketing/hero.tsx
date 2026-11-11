import { cn } from '@/lib/utils'
import { CtaArrow, CtaButton } from '@/registry/dylo/ui/cta-button'
import { Logo } from '@/registry/dylo/ui/logo'
import { ChevronRight } from 'lucide-react'
import * as React from 'react'
import { DisplayTitle, SectionLead } from './section'

/** The pill above a hero headline that points at the latest news. */
export function AnnouncementPill({
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
        'group relative inline-flex items-center justify-center rounded-full bg-linear-to-r from-gray-a6 via-gray-a3 to-gray-a6 p-px text-sm leading-none',
        'ring-focus outline-hidden transition-colors focus-visible:ring-2',
        className
      )}
    >
      <span className="inline-flex items-center gap-1 rounded-full bg-background px-3 py-1.5 whitespace-nowrap text-emphasis transition-colors group-hover:bg-elevated">
        {children}
        <ChevronRight aria-hidden className="size-3 text-default transition-transform group-hover:translate-x-0.5" />
      </span>
    </a>
  )
}

/** The default hero visual: the mark on a glass tile over the canvas grid. */
export function HeroVisual({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        'relative flex size-[min(340px,85vw)] items-center justify-center md:size-[36vw] md:max-h-[520px] md:max-w-[520px]',
        className
      )}
    >
      <div className="absolute inset-0 grid-canvas [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]" />
      <div className="absolute inset-[18%] rounded-full bg-[radial-gradient(var(--dylo-gray-a4),transparent_70%)] blur-2xl" />
      <div className="relative flex size-40 items-center justify-center rounded-[2.5rem] glass shadow-glow xl:size-56">
        <Logo className="h-16 xl:h-24" />
      </div>
    </div>
  )
}

/**
 * The landing hero: announcement, serif headline, lead, two calls to action,
 * and a visual on the right from md.
 *
 * From md the two columns and the headline scale with the viewport, so the
 * row fits a tablet and a small laptop and reaches its full size at 1440.
 */
export function Hero({
  announcement,
  title,
  lead,
  primary = { label: 'Get started', href: '/signup' },
  secondary,
  visual = <HeroVisual />,
  className,
}: {
  announcement?: { label: string; href: string }
  title: React.ReactNode
  lead: React.ReactNode
  primary?: { label: string; href: string }
  secondary?: { label: string; href: string }
  visual?: React.ReactNode
  className?: string
}) {
  return (
    <section
      data-slot="hero"
      className={cn('relative z-20 overflow-x-clip pt-[60px] md:h-screen md:max-h-[950px] md:pt-0', className)}
    >
      <div className="mx-auto max-w-5xl px-6 pb-8 md:h-full md:max-w-7xl">
        <div className="flex h-full flex-col items-center justify-between gap-10 md:flex-row md:pb-12">
          <div className="order-2 w-full max-w-3xl animate-hero md:order-1 md:w-[52vw] md:shrink-0 lg:pl-16">
            {announcement ? (
              <div className="mb-8 flex justify-center md:inline-flex">
                <AnnouncementPill href={announcement.href}>{announcement.label}</AnnouncementPill>
              </div>
            ) : null}
            <DisplayTitle className="text-center md:text-left md:text-[clamp(3rem,6.67vw,6rem)]">{title}</DisplayTitle>
            <SectionLead className="mt-2 mb-8 max-w-[30rem] text-center md:text-left">{lead}</SectionLead>
            <div className="flex flex-col justify-center gap-4 md:flex-row md:justify-start">
              <CtaButton asChild>
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
          </div>
          <div className="order-1 flex shrink-0 justify-center md:order-2">{visual}</div>
        </div>
      </div>
    </section>
  )
}

/** The hero of an inner page: a short serif headline and a lead, centred. */
export function PageHero({
  eyebrow,
  title,
  lead,
  actions,
  className,
}: {
  eyebrow?: React.ReactNode
  title: React.ReactNode
  lead?: React.ReactNode
  actions?: React.ReactNode
  className?: string
}) {
  return (
    <section
      className={cn(
        'mx-auto flex max-w-5xl flex-col items-center px-6 pt-24 pb-12 text-center md:max-w-7xl md:pt-32',
        className
      )}
    >
      {eyebrow ? <div className="mb-6">{eyebrow}</div> : null}
      <DisplayTitle className="animate-hero md:text-[4.8rem]">{title}</DisplayTitle>
      {lead ? <SectionLead className="mt-2 max-w-xl">{lead}</SectionLead> : null}
      {actions ? <div className="mt-8 flex flex-col gap-4 sm:flex-row">{actions}</div> : null}
    </section>
  )
}

/** A feature page hero: an icon tile, the feature name, headline and lead. */
export function FeatureHero({
  icon,
  name,
  title,
  lead,
  actions,
  className,
}: {
  icon: React.ReactNode
  name: string
  title: React.ReactNode
  lead: React.ReactNode
  actions?: React.ReactNode
  className?: string
}) {
  return (
    <PageHero
      className={className}
      eyebrow={
        <span className="inline-flex items-center gap-2 text-sm text-default">
          <span className="inline-flex size-8 items-center justify-center rounded-lg border border-gray-a3 bg-linear-to-bl from-gray-a3 text-emphasis [&_svg]:size-4">
            {icon}
          </span>
          {name}
        </span>
      }
      title={title}
      lead={lead}
      actions={actions}
    />
  )
}
