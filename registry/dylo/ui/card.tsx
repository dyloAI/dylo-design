import { cn } from '@/lib/utils'
import { Eyebrow } from '@/registry/dylo/ui/eyebrow'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

/**
 * Two panels.
 *
 * `plate` is the stamped plate: an ink border and a hard block-shadow offset.
 * Reserve it for a primary action's container and for a product mock.
 *
 * `editorial` is the quiet panel: a hairline Line border, Paper, no shadow.
 * It is the default surface for marketing copy. The default variant stays
 * `plate`, so existing apps do not change.
 */
const cardVariants = cva('rounded-md border p-8', {
  variants: {
    variant: {
      plate: 'border-ink',
      editorial: 'border-line bg-paper text-ink shadow-none',
    },
    tone: {
      light: 'bg-paper text-ink',
      ink: 'bg-ink text-bone',
    },
    elevated: {
      true: '',
      false: 'shadow-none',
    },
  },
  compoundVariants: [
    { variant: 'plate', elevated: true, class: 'shadow-block' },
    { variant: 'editorial', tone: 'ink', class: 'border-graphite bg-ink text-bone shadow-none' },
  ],
  defaultVariants: {
    variant: 'plate',
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

export function Card({ className, variant, tone, elevated, eyebrow, title, children, ...props }: CardProps) {
  const dark = tone === 'ink'

  return (
    <div data-slot="card" className={cn(cardVariants({ variant, tone, elevated }), className)} {...props}>
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
