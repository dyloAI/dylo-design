import { cn } from '@/lib/utils'
import * as React from 'react'

/**
 * The filter bar above a list: a search that takes the free width, then
 * fixed-width filters and an action at the end. Wraps on narrow screens.
 */
export function Toolbar({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="toolbar"
      role="toolbar"
      className={cn(
        'flex flex-wrap items-center gap-2 [&>[data-slot=input-group]]:min-w-56 [&>[data-slot=input-group]]:flex-1',
        className
      )}
      {...props}
    />
  )
}

/** Holds one filter at a fixed width so the bar does not jump. */
export function ToolbarItem({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="toolbar-item" className={cn('w-full sm:w-44', className)} {...props} />
}
