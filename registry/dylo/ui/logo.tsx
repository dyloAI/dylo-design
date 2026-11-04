import { cn } from '@/lib/utils'
import * as React from 'react'

/**
 * The monochrome dylo mark or horizontal lockup from public/brand/: black
 * on light, the reversed white file under `.dark`. Never redraw the mark;
 * install brand-assets.
 */
export function Logo({
  variant = 'mark',
  className,
  ...props
}: { variant?: 'mark' | 'lockup' } & Omit<React.ComponentProps<'span'>, 'children'>) {
  const base = variant === 'mark' ? '/brand/dylo-mark' : '/brand/dylo-logo-horizontal'
  const size = variant === 'mark' ? { width: 64, height: 56 } : { width: 236, height: 96 }
  return (
    <span
      data-slot="logo"
      className={cn('inline-flex shrink-0', variant === 'mark' ? 'h-6' : 'h-8', className)}
      {...props}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- static SVG, consumers may not use next/image */}
      <img src={`${base}-mono.svg`} alt="dylo" {...size} className="h-full w-auto dark:hidden" />
      {/* eslint-disable-next-line @next/next/no-img-element -- static SVG, consumers may not use next/image */}
      <img src={`${base}-mono-reversed.svg`} alt="dylo" {...size} className="hidden h-full w-auto dark:block" />
    </span>
  )
}
