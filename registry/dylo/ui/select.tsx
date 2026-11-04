'use client'

import { cn } from '@/lib/utils'
import { Check, ChevronDown } from 'lucide-react'
import { Select as SelectPrimitive } from 'radix-ui'
import * as React from 'react'

/**
 * A single-choice dropdown. The trigger matches Input; the menu is the shared
 * popover surface. Filter bars use it for date range, status and API key.
 */
export const Select = SelectPrimitive.Root
export const SelectGroup = SelectPrimitive.Group
export const SelectValue = SelectPrimitive.Value

export function SelectTrigger({
  className,
  children,
  size = 'sm',
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & { size?: 'sm' | 'md' }) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cn(
        'flex w-full min-w-0 cursor-pointer items-center justify-between gap-2 rounded-xl border border-interactive bg-interactive px-3 text-sm text-emphasis outline-hidden',
        'ring-focus transition duration-200 ease-in-out hover:bg-interactive-hover focus-visible:ring-2',
        'disabled:cursor-not-allowed disabled:opacity-70 data-[placeholder]:text-placeholder',
        'data-[state=open]:bg-interactive-hover [&>span]:truncate',
        size === 'sm' ? 'h-8' : 'h-10',
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDown className="size-4 shrink-0 text-default" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

export function SelectContent({
  className,
  children,
  position = 'popper',
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        position={position}
        sideOffset={6}
        className={cn(
          'relative z-50 max-h-(--radix-select-content-available-height) min-w-36 overflow-hidden rounded-xl bg-overlay p-1 text-emphasis shadow-popover backdrop-blur-xl',
          'data-[state=open]:animate-slide-down-fade',
          position === 'popper' && 'w-full min-w-(--radix-select-trigger-width)',
          className
        )}
        {...props}
      >
        <SelectPrimitive.Viewport className="scroll-py-1">{children}</SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

export function SelectLabel({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn('px-2 pt-2 pb-1 text-xs font-medium text-gray-10', className)}
      {...props}
    />
  )
}

export function SelectItem({ className, children, ...props }: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        'relative flex h-8 w-full cursor-pointer items-center gap-2 rounded-lg pr-8 pl-2 text-sm text-default outline-hidden select-none',
        'data-[highlighted]:bg-interactive-hover data-[highlighted]:text-emphasis data-[state=checked]:text-emphasis',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:size-4',
        className
      )}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <span className="absolute right-2 flex items-center">
        <SelectPrimitive.ItemIndicator>
          <Check className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
    </SelectPrimitive.Item>
  )
}

export function SelectSeparator({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return <SelectPrimitive.Separator className={cn('-mx-1 my-1 h-px bg-gray-a3', className)} {...props} />
}
