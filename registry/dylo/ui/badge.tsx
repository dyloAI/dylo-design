import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

/**
 * A status or label chip. The tone carries meaning, so use each one for its
 * status only: success (delivered, verified), warning (delayed, pending),
 * error (bounced, failed), info (opened, clicked), neutral (queued, sent).
 */
const badgeVariants = cva(
  [
    'inline-flex w-fit shrink-0 items-center gap-1 truncate border font-medium whitespace-nowrap',
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-3",
  ],
  {
    variants: {
      tone: {
        neutral: 'border-gray-a3 bg-interactive text-default',
        success: 'border-success-subtle bg-success text-success',
        warning: 'border-warning-subtle bg-warning text-warning',
        error: 'border-error-subtle bg-error text-error',
        info: 'border-info-subtle bg-info text-info',
        violet: 'border-violet-4 bg-violet-3 text-violet-11',
        orange: 'border-orange-4 bg-orange-3 text-orange-11',
        accent: 'border-transparent bg-accent text-on-accent',
      },
      size: {
        sm: 'h-5 rounded-md px-1.5 text-xs',
        md: 'h-6 rounded-lg px-2 text-xs font-semibold tracking-wide',
      },
    },
    defaultVariants: { tone: 'neutral', size: 'sm' },
  }
)

export interface BadgeProps extends React.ComponentProps<'span'>, VariantProps<typeof badgeVariants> {}

export function Badge({ className, tone, size, ...props }: BadgeProps) {
  return <span data-slot="badge" className={cn(badgeVariants({ tone, size }), className)} {...props} />
}

/** A 8px status dot with an optional live ping. */
export function StatusDot({
  className,
  tone = 'neutral',
  pulse = false,
}: {
  className?: string
  tone?: 'neutral' | 'success' | 'warning' | 'error' | 'info'
  pulse?: boolean
}) {
  const fill = {
    neutral: 'bg-gray-9',
    success: 'bg-green-9',
    warning: 'bg-amber-9',
    error: 'bg-red-9',
    info: 'bg-blue-9',
  }[tone]
  return (
    <span data-slot="status-dot" className={cn('relative inline-flex size-2 shrink-0', className)}>
      {pulse ? <span className={cn('absolute inset-0 animate-ping rounded-full opacity-60', fill)} /> : null}
      <span className={cn('relative size-2 rounded-full', fill)} />
    </span>
  )
}

export { badgeVariants }
