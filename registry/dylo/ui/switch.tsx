'use client'

import { cn } from '@/lib/utils'
import { Switch as SwitchPrimitive } from 'radix-ui'
import * as React from 'react'

/** An on/off toggle. On fills with the accent; the thumb is the opposite tone. */
export function Switch({ className, ...props }: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        'peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent bg-gray-a4 p-0.5 outline-hidden',
        'ring-focus transition-colors duration-200 ease-in-out focus-visible:ring-2',
        'disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-accent',
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          'pointer-events-none block size-4 rounded-full bg-surface shadow-sm transition-transform duration-200 ease-in-out',
          'data-[state=checked]:translate-x-4 data-[state=checked]:bg-on-accent'
        )}
      />
    </SwitchPrimitive.Root>
  )
}
