'use client'

import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
import { Accordion as AccordionPrimitive } from 'radix-ui'
import * as React from 'react'

/**
 * Stacked questions that open in place: the pricing FAQ. Each item is its own
 * filled card; the chevron turns a quarter on open.
 */
export function Accordion({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" className={cn('flex flex-col gap-4', className)} {...props} />
}

export function AccordionItem({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn('rounded-2xl border border-gray-3 bg-gray-1 transition ease-in-out hover:bg-gray-2', className)}
      {...props}
    />
  )
}

export function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          'group flex w-full cursor-pointer items-center rounded-2xl p-4 text-left text-base text-emphasis ring-gray-4 outline-hidden focus-visible:ring-2',
          className
        )}
        {...props}
      >
        <ChevronRight
          aria-hidden
          className="mr-2 size-3.5 shrink-0 text-emphasis transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-90"
        />
        {children}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

export function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn('pr-4 pb-4 pl-10 text-base text-default', className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}
