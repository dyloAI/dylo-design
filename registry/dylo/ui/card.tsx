import { cn } from '@/lib/utils'
import { Eyebrow } from '@/registry/dylo/ui/eyebrow'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

/**
 * The signature foundry panel: a paper or ink surface with a full ink border
 * and a hard block-shadow offset, like a stamped plate. Barely rounded, never
 * soft-floating.
 */
const cardVariants = cva('rounded-md border border-ink p-8', {
  variants: {
    tone: {
      light: 'bg-paper text-ink',
      ink: 'bg-ink text-bone',
    },
    elevated: {
      true: 'shadow-block',
      false: 'shadow-none',
    },
  },
  defaultVariants: {
    tone: 'light',
    elevated: true,
  },
})

export interface CardProps extends Omit<React.ComponentProps<'div'>, 'title'>, VariantProps<typeof cardVariants> {
  /** Mono section label rendered above the title. */
  eyebrow?: React.ReactNode
  /** Panel heading. Shadows the native `title` attribute, which a card has no use for. */
  title?: React.ReactNode
}

export function Card({ className, tone, elevated, eyebrow, title, children, ...props }: CardProps) {
  const dark = tone === 'ink'

  return (
    <div data-slot="card" className={cn(cardVariants({ tone, elevated }), className)} {...props}>
      {eyebrow && (
        <div className="mb-3.5">
          <Eyebrow tone={dark ? 'light' : 'dark'}>{eyebrow}</Eyebrow>
        </div>
      )}
      {title && <h3 className="m-0 text-[24px]/[1.1] font-bold tracking-tight">{title}</h3>}
      {children && (
        <div className={cn('text-[16px]/[1.6]', dark ? 'text-bone/80' : 'text-graphite', title && 'mt-3')}>
          {children}
        </div>
      )}
    </div>
  )
}

export { cardVariants }
