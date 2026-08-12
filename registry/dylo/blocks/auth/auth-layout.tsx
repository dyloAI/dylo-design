import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

/**
 * Centered auth chrome: wordmark, optional mono product label, then the form.
 * Matches the dylo-starter auth route layout.
 */
export function AuthLayout({
  children,
  productLabel = 'app',
  className,
}: {
  children: ReactNode
  /** Mono uppercase label under the wordmark (e.g. "starter"). */
  productLabel?: string
  className?: string
}) {
  return (
    <main data-slot="auth-layout" className={cn('flex min-h-dvh items-center justify-center bg-bone p-6', className)}>
      <div className="flex w-full max-w-sm flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element -- portable to non-Next consumers */}
          <img src="/brand/dylo-logo-horizontal.svg" alt="dylo" className="h-10 w-auto" />
          {productLabel ? (
            <p className="m-0 font-mono text-[10px] tracking-widest text-concrete uppercase">{productLabel}</p>
          ) : null}
        </div>
        {children}
      </div>
    </main>
  )
}
