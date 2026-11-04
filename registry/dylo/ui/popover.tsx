'use client'

import { cn } from '@/lib/utils'
import { Popover as PopoverPrimitive } from 'radix-ui'
import * as React from 'react'

export const Popover = PopoverPrimitive.Root
export const PopoverTrigger = PopoverPrimitive.Trigger
export const PopoverAnchor = PopoverPrimitive.Anchor
export const PopoverClose = PopoverPrimitive.Close

/** The floating surface: near-opaque overlay fill, blur, a hairline ring. */
export const popoverSurface =
  'z-50 rounded-xl bg-overlay text-emphasis shadow-popover backdrop-blur-xl outline-hidden data-[state=open]:data-[side=bottom]:animate-slide-down-fade data-[state=open]:data-[side=top]:animate-slide-up-fade data-[state=open]:data-[side=left]:animate-fade-in data-[state=open]:data-[side=right]:animate-fade-in data-[state=closed]:animate-fade-out'

export function PopoverContent({
  className,
  align = 'start',
  sideOffset = 6,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(popoverSurface, 'w-72 p-3', className)}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
}
