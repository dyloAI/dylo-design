import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

/**
 * Status or technical chip. Mono type, square-ish — part of the engineered
 * layer, not a decorative pill.
 */
const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-sm border px-[9px] py-[5px] font-mono text-[11px] font-bold tracking-[0.1em] uppercase',
  {
    variants: {
      variant: {
        default: 'bg-bone text-ink border-ink',
        solid: 'bg-ink text-bone border-ink',
        accent: 'bg-oxide text-paper border-oxide',
        muted: 'text-concrete border-line bg-transparent',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps extends React.ComponentProps<'span'>, VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { badgeVariants }
