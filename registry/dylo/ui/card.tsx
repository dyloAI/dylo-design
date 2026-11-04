import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

/**
 * A grouped surface. `outline` is the hairline panel of the dashboard,
 * `subtle` the filled one (FAQ items, stat tiles), `feature` the large
 * marketing panel with a highlight across its top edge.
 */
const cardVariants = cva('relative flex flex-col text-emphasis', {
  variants: {
    variant: {
      outline: 'rounded-2xl border border-gray-a3 bg-transparent',
      subtle: 'rounded-2xl border border-gray-3 bg-gray-1',
      feature: 'overflow-hidden rounded-3xl border border-slate-6 bg-transparent',
    },
  },
  defaultVariants: { variant: 'outline' },
})

export interface CardProps extends React.ComponentProps<'div'>, VariantProps<typeof cardVariants> {}

export function Card({ className, variant, children, ...props }: CardProps) {
  return (
    <div data-slot="card" className={cn(cardVariants({ variant }), className)} {...props}>
      {variant === 'feature' ? (
        <span
          aria-hidden
          className="pointer-events-none absolute top-0 left-1/2 glow-line w-[300px] max-w-full -translate-x-1/2"
        />
      ) : null}
      {children}
    </div>
  )
}

export function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="card-header" className={cn('flex flex-col gap-1 p-5 pb-0', className)} {...props} />
}

export function CardTitle({ className, ...props }: React.ComponentProps<'h3'>) {
  return (
    <h3
      data-slot="card-title"
      className={cn('font-display effect-font-styling text-base font-medium tracking-tight text-emphasis', className)}
      {...props}
    />
  )
}

export function CardDescription({ className, ...props }: React.ComponentProps<'p'>) {
  return <p data-slot="card-description" className={cn('text-sm leading-[1.6] text-default', className)} {...props} />
}

export function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="card-content" className={cn('p-5', className)} {...props} />
}

export function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-footer"
      className={cn('flex items-center gap-2 border-t border-gray-a3 px-5 py-3', className)}
      {...props}
    />
  )
}

export { cardVariants }
