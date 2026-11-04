'use client'

import { cn } from '@/lib/utils'
import { Progress as ProgressPrimitive } from 'radix-ui'
import * as React from 'react'

/**
 * A quota bar: emails sent this month, domains used. The fill turns to the
 * warning tone past 80% and the error tone at the limit unless `tone` is set.
 */
export function Progress({
  className,
  value = 0,
  max = 100,
  tone,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root> & { tone?: 'accent' | 'warning' | 'error' }) {
  const pct = Math.min(100, Math.max(0, ((value ?? 0) / max) * 100))
  const resolved = tone ?? (pct >= 100 ? 'error' : pct >= 80 ? 'warning' : 'accent')
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      value={value}
      max={max}
      className={cn('relative h-1.5 w-full overflow-hidden rounded-full bg-gray-a3', className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn(
          'h-full rounded-full transition-[width] duration-500 ease-dylo',
          resolved === 'accent' && 'bg-accent',
          resolved === 'warning' && 'bg-amber-9',
          resolved === 'error' && 'bg-red-9'
        )}
        style={{ width: `${pct}%` }}
      />
    </ProgressPrimitive.Root>
  )
}
