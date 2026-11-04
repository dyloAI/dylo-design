'use client'

import { cn } from '@/lib/utils'
import { Separator as SeparatorPrimitive } from 'radix-ui'
import * as React from 'react'

/** A 1px hairline. Pass children for the centred "or" divider of the auth screens. */
export function Separator({
  className,
  orientation = 'horizontal',
  decorative = true,
  children,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  if (children) {
    return (
      <div data-slot="separator-label" className={cn('flex items-center gap-4', className)}>
        <SeparatorPrimitive.Root decorative className="h-px flex-1 bg-gray-3" />
        <span className="text-sm text-default">{children}</span>
        <SeparatorPrimitive.Root decorative className="h-px flex-1 bg-gray-3" />
      </div>
    )
  }
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn('shrink-0 bg-gray-a3', orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px', className)}
      {...props}
    />
  )
}
