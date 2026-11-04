import { cn } from '@/lib/utils'
import * as React from 'react'

/**
 * Joins adjacent Buttons into one control: shared hairline, squared inner
 * corners. Use for a split action or a small set of related toggles.
 */
export function ButtonGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="button-group"
      role="group"
      className={cn(
        'inline-flex items-center',
        '*:data-[slot=button]:rounded-none *:data-[slot=icon-button]:rounded-none',
        '[&>*:first-child]:rounded-l-xl [&>*:last-child]:rounded-r-xl',
        '[&>*:not(:first-child)]:-ml-px',
        className
      )}
      {...props}
    />
  )
}
