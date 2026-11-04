'use client'

import { cn } from '@/lib/utils'
import { Check, Minus } from 'lucide-react'
import { Checkbox as CheckboxPrimitive } from 'radix-ui'
import * as React from 'react'

/** A 16px square check. Checked and indeterminate fill with the accent. */
export function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        'peer group inline-flex size-4 shrink-0 cursor-pointer items-center justify-center rounded-[5px] border border-gray-a5 bg-interactive outline-hidden',
        'ring-focus transition-colors duration-150 ease-in-out hover:border-gray-a7 focus-visible:ring-2',
        'data-[state=checked]:border-accent data-[state=checked]:bg-accent data-[state=checked]:text-on-accent',
        'data-[state=indeterminate]:border-accent data-[state=indeterminate]:bg-accent data-[state=indeterminate]:text-on-accent',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="flex items-center justify-center">
        <Check strokeWidth={3} className="size-3 group-data-[state=indeterminate]:hidden" />
        <Minus strokeWidth={3} className="hidden size-3 group-data-[state=indeterminate]:block" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}
