'use client'

import { cn } from '@/lib/utils'
import { RadioGroup as RadioGroupPrimitive } from 'radix-ui'
import * as React from 'react'

export function RadioGroup({ className, ...props }: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return <RadioGroupPrimitive.Root data-slot="radio-group" className={cn('grid gap-3', className)} {...props} />
}

/** A 16px ring; the checked dot is the accent. */
export function RadioGroupItem({ className, ...props }: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        'peer inline-flex size-4 shrink-0 cursor-pointer items-center justify-center rounded-full border border-gray-a5 bg-interactive outline-hidden',
        'ring-focus transition-colors duration-150 ease-in-out hover:border-gray-a7 focus-visible:ring-2',
        'disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-accent',
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="size-2 rounded-full bg-accent" />
    </RadioGroupPrimitive.Item>
  )
}

/**
 * A selectable card for choices that need a sentence: plan, region, sending
 * type. The whole card is the radio.
 */
export function RadioCard({
  className,
  title,
  description,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item> & { title: React.ReactNode; description?: React.ReactNode }) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-card"
      className={cn(
        'group flex w-full cursor-pointer items-start gap-3 rounded-xl border border-gray-a3 bg-transparent p-3 text-left outline-hidden',
        'ring-focus transition-colors duration-150 ease-in-out hover:bg-interactive focus-visible:ring-2',
        'disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-gray-a6 data-[state=checked]:bg-interactive',
        className
      )}
      {...props}
    >
      <span className="mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-full border border-gray-a5 group-data-[state=checked]:border-accent">
        <RadioGroupPrimitive.Indicator className="size-2 rounded-full bg-accent" />
      </span>
      <span className="flex flex-col gap-0.5">
        <span className="text-sm font-medium text-emphasis">{title}</span>
        {description ? <span className="text-sm text-default">{description}</span> : null}
      </span>
    </RadioGroupPrimitive.Item>
  )
}
