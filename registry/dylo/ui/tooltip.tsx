'use client'

import { cn } from '@/lib/utils'
import { Tooltip as TooltipPrimitive } from 'radix-ui'
import * as React from 'react'

/**
 * A short label on hover or focus. Wrap the app (or the page) in
 * TooltipProvider once.
 */
export function TooltipProvider({
  delayDuration = 200,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return <TooltipPrimitive.Provider delayDuration={delayDuration} {...props} />
}

export const Tooltip = TooltipPrimitive.Root
export const TooltipTrigger = TooltipPrimitive.Trigger

export function TooltipContent({
  className,
  sideOffset = 6,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          'z-50 max-w-64 rounded-lg bg-overlay px-2 py-1 text-xs text-emphasis shadow-popover backdrop-blur-xl',
          'data-[state=closed]:animate-fade-out data-[state=delayed-open]:animate-fade-in',
          className
        )}
        {...props}
      />
    </TooltipPrimitive.Portal>
  )
}
