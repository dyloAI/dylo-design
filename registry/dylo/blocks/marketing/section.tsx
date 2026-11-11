import { cn } from '@/lib/utils'
import * as React from 'react'

/** The marketing content column: 1024px, widening to 1280px from md. */
export const container = 'mx-auto w-full max-w-5xl px-6 md:max-w-7xl'

export function Section({
  className,
  bordered = false,
  children,
  ...props
}: React.ComponentProps<'section'> & {
  /** A top hairline with a glow, for sections that start a new chapter. */
  bordered?: boolean
}) {
  return (
    <section
      data-slot="marketing-section"
      className={cn(container, 'relative py-12 sm:py-24', bordered && 'rounded-3xl border-t border-gray-a3', className)}
      {...props}
    >
      {bordered ? <GlowEdge /> : null}
      {children}
    </section>
  )
}

/** The highlight across the top edge of a panel, and the light it casts. */
export function GlowEdge({ className, width = 'w-[300px]' }: { className?: string; width?: string }) {
  return (
    <>
      <span
        aria-hidden
        className={cn(
          'pointer-events-none absolute top-0 left-1/2 glow-line max-w-full -translate-x-1/2 -translate-y-1/2',
          width,
          className
        )}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -top-1 left-1/2 h-[200px] w-full max-w-[200px] -translate-x-1/2 -translate-y-1/2 spotlight md:max-w-[400px]"
      />
    </>
  )
}

/** Section headline: display face, 48px rising to 56px, with the soft fade. */
export function SectionTitle({ className, ...props }: React.ComponentProps<'h2'>) {
  return (
    <h2
      className={cn(
        'effect-font-gradient font-display effect-font-styling text-[3rem] leading-[120%] tracking-tighter text-balance md:text-[3.5rem]',
        className
      )}
      {...props}
    />
  )
}

/** The serif headline of a hero or a closing call to action. */
export function DisplayTitle({
  className,
  as: Comp = 'h1',
  ...props
}: React.ComponentProps<'h1'> & { as?: 'h1' | 'h2' }) {
  return (
    <Comp
      className={cn(
        'effect-font-gradient pb-3 font-serif effect-font-styling text-[4rem] leading-[100%] tracking-[-0.01em] md:text-[6rem]',
        className
      )}
      {...props}
    />
  )
}

export function SectionLead({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn('text-base leading-7 text-balance text-gray-11 md:text-[1.125rem] md:leading-[1.5]', className)}
      {...props}
    />
  )
}

/** A small display-face heading for cards and grid items. */
export function FeatureTitle({ className, ...props }: React.ComponentProps<'h3'>) {
  return (
    <h3
      className={cn('font-display effect-font-styling text-xl leading-8 text-emphasis md:leading-none', className)}
      {...props}
    />
  )
}

/**
 * The bordered marketing panel whose sides dissolve into the page. Use it for
 * the two-up feature cards and the testimonial cards.
 */
export function FadePanel({
  className,
  children,
  glow = true,
  ...props
}: React.ComponentProps<'div'> & { glow?: boolean }) {
  return (
    <div
      data-slot="fade-panel"
      className={cn('relative flex flex-col gap-4 rounded-3xl border border-b-0 border-gray-a3', className)}
      {...props}
    >
      {glow ? (
        <span
          aria-hidden
          className="pointer-events-none absolute top-0 left-1/2 glow-line w-[150px] max-w-full -translate-x-1/2 -translate-y-1/2"
        />
      ) : null}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-0.5 -left-0.5 h-[calc(100%+4px)] w-[calc(100%+4px)] fade-edges"
      />
      <div className="relative flex flex-col gap-4">{children}</div>
    </div>
  )
}
