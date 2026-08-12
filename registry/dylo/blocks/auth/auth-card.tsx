import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

/**
 * Layout primitive for auth screens (sign-in, sign-up, forgot password).
 * Foundry plate: ink border, hard block shadow, barely rounded — same stamp
 * language as Card, sized for a narrow form.
 */
export function AuthCard({
  title,
  description,
  children,
  footer,
  className,
}: {
  title: string
  description?: string
  children: ReactNode
  footer?: ReactNode
  className?: string
}) {
  return (
    <div
      data-slot="auth-card"
      className={cn('w-full max-w-sm rounded-md border border-ink bg-paper p-6 shadow-block', className)}
    >
      <div className="mb-6 space-y-1">
        <h1 className="m-0 text-xl/7 font-semibold tracking-tight text-ink">{title}</h1>
        {description ? <p className="m-0 text-sm/6 text-graphite">{description}</p> : null}
      </div>
      {children}
      {footer ? <div className="mt-6 text-center text-sm/6 text-graphite">{footer}</div> : null}
    </div>
  )
}

/** Inline error — mono status with a heavy border. No second hue. */
export function AuthError({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      role="alert"
      data-slot="auth-error"
      className={cn(
        'rounded-sm border-2 border-ink bg-bone px-3 py-2 text-center font-mono text-xs tracking-wide text-ink uppercase',
        className
      )}
    >
      {children}
    </p>
  )
}

/** Inline success / transient confirmation. */
export function AuthSuccess({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      role="status"
      data-slot="auth-success"
      className={cn(
        'rounded-sm border border-ink bg-bone px-3 py-2 text-center font-mono text-xs tracking-wide text-ink uppercase',
        className
      )}
    >
      {children}
    </p>
  )
}
