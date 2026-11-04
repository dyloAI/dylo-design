'use client'

import { cn } from '@/lib/utils'
import { menuItemClass } from '@/registry/dylo/ui/dropdown-menu'
import { popoverSurface } from '@/registry/dylo/ui/popover'
import { ContextMenu as ContextMenuPrimitive } from 'radix-ui'
import * as React from 'react'

/** The right-click menu. Same surface and items as DropdownMenu. */
export const ContextMenu = ContextMenuPrimitive.Root
export const ContextMenuTrigger = ContextMenuPrimitive.Trigger
export const ContextMenuGroup = ContextMenuPrimitive.Group

export function ContextMenuContent({ className, ...props }: React.ComponentProps<typeof ContextMenuPrimitive.Content>) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        data-slot="context-menu-content"
        className={cn(popoverSurface, 'min-w-44 overflow-hidden p-1', className)}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  )
}

export function ContextMenuItem({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Item> & { variant?: 'destructive' }) {
  return <ContextMenuPrimitive.Item data-variant={variant} className={cn(menuItemClass, className)} {...props} />
}

export function ContextMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Separator>) {
  return <ContextMenuPrimitive.Separator className={cn('-mx-1 my-1 h-px bg-gray-a3', className)} {...props} />
}

export function ContextMenuLabel({ className, ...props }: React.ComponentProps<typeof ContextMenuPrimitive.Label>) {
  return (
    <ContextMenuPrimitive.Label
      className={cn('px-2 pt-2 pb-1 text-xs font-medium text-gray-10', className)}
      {...props}
    />
  )
}
