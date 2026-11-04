import { cn } from '@/lib/utils'
import * as React from 'react'

/** A loading placeholder in the interactive fill, gently pulsing. */
export function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="skeleton" className={cn('animate-pulse rounded-lg bg-gray-a3', className)} {...props} />
}
