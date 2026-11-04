'use client'

import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { X } from 'lucide-react'
import { Dialog as SheetPrimitive } from 'radix-ui'
import * as React from 'react'

/**
 * A panel that slides in from an edge: an event's detail beside the log, the
 * mobile navigation. Uses the drawer easing.
 */
export const Sheet = SheetPrimitive.Root
export const SheetTrigger = SheetPrimitive.Trigger
export const SheetClose = SheetPrimitive.Close

const sheetVariants = cva('fixed z-50 flex flex-col gap-4 bg-background text-emphasis shadow-dialog outline-hidden', {
  variants: {
    side: {
      right: 'inset-y-2 right-2 w-[calc(100%-1rem)] max-w-md rounded-2xl data-[state=open]:animate-sheet-right',
      left: 'inset-y-2 left-2 w-[calc(100%-1rem)] max-w-xs rounded-2xl data-[state=open]:animate-sheet-left',
      bottom: 'inset-x-2 bottom-2 max-h-[85dvh] rounded-2xl data-[state=open]:animate-sheet-bottom',
    },
  },
  defaultVariants: { side: 'right' },
})

export function SheetContent({
  className,
  children,
  side,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & VariantProps<typeof sheetVariants>) {
  return (
    <SheetPrimitive.Portal>
      <SheetPrimitive.Overlay className="fixed inset-0 z-50 bg-scrim data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in" />
      <SheetPrimitive.Content data-slot="sheet-content" className={cn(sheetVariants({ side }), className)} {...props}>
        {children}
        <SheetPrimitive.Close
          className="absolute top-4 right-4 inline-flex size-6 cursor-pointer items-center justify-center rounded-lg text-default ring-focus transition-colors hover:bg-interactive-hover hover:text-emphasis focus-visible:ring-2 focus-visible:outline-hidden"
          aria-label="Close"
        >
          <X className="size-4" />
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPrimitive.Portal>
  )
}

export function SheetHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('flex flex-col gap-1 border-b border-gray-a3 px-5 py-4 pr-12', className)} {...props} />
}

export function SheetBody({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('flex-1 overflow-y-auto px-5 pb-5', className)} {...props} />
}

export function SheetTitle({ className, ...props }: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      className={cn('font-display effect-font-styling text-base font-medium', className)}
      {...props}
    />
  )
}

export function SheetDescription({ className, ...props }: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return <SheetPrimitive.Description className={cn('text-sm text-default', className)} {...props} />
}
