import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { CircleAlert, CircleCheck, Info, TriangleAlert } from 'lucide-react'
import * as React from 'react'

/**
 * An inline notice: a domain still verifying, a quota nearly reached, an
 * action that cannot be undone. Icon, a sentence, an optional action.
 */
const calloutVariants = cva('flex w-full items-start gap-3 rounded-xl border p-3 text-sm', {
  variants: {
    tone: {
      neutral: 'border-gray-a3 bg-interactive text-default [&>svg]:text-default',
      info: 'border-info-subtle bg-info text-info',
      success: 'border-success-subtle bg-success text-success',
      warning: 'border-warning-subtle bg-warning text-warning',
      error: 'border-error-subtle bg-error text-error',
    },
  },
  defaultVariants: { tone: 'neutral' },
})

const icons = {
  neutral: Info,
  info: Info,
  success: CircleCheck,
  warning: TriangleAlert,
  error: CircleAlert,
}

export interface CalloutProps extends Omit<React.ComponentProps<'div'>, 'title'>, VariantProps<typeof calloutVariants> {
  title?: React.ReactNode
  action?: React.ReactNode
}

export function Callout({ className, tone = 'neutral', title, action, children, ...props }: CalloutProps) {
  const Icon = icons[tone ?? 'neutral']
  return (
    <div data-slot="callout" role="status" className={cn(calloutVariants({ tone }), className)} {...props}>
      <Icon className="mt-0.5 size-4 shrink-0" />
      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        {title ? <p className="font-medium">{title}</p> : null}
        {children ? <div className={cn(title && 'opacity-90')}>{children}</div> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  )
}

export { calloutVariants }
