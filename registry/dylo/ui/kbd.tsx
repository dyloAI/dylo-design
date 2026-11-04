import { cn } from '@/lib/utils'
import * as React from 'react'

/** A keyboard key: 20px square-ish chip, hidden on touch devices. */
export function Kbd({ className, ...props }: React.ComponentProps<'kbd'>) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        'inline-flex h-5 min-w-5 items-center justify-center rounded-md bg-interactive-hover px-1 font-sans text-xs font-normal text-default uppercase select-none pointer-coarse:hidden',
        className
      )}
      {...props}
    />
  )
}
