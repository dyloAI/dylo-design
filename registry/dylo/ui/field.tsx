'use client'

import { cn } from '@/lib/utils'
import { Label as LabelPrimitive } from 'radix-ui'
import * as React from 'react'

/** The label above a control: 14px, secondary text, no uppercase. */
export function Label({ className, ...props }: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        'text-sm text-default select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        className
      )}
      {...props}
    />
  )
}

/** Stacks a Label, a control and an optional hint or error, 8px apart. */
export function Field({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="field" className={cn('flex flex-col gap-2', className)} {...props} />
}

/** Row above a control when the label shares the line with a link. */
export function FieldRow({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="field-row" className={cn('flex items-center justify-between gap-2', className)} {...props} />
}

export function FieldHint({ className, ...props }: React.ComponentProps<'p'>) {
  return <p data-slot="field-hint" className={cn('text-xs text-gray-10', className)} {...props} />
}

export function FieldError({ className, ...props }: React.ComponentProps<'p'>) {
  return <p data-slot="field-error" role="alert" className={cn('text-xs text-error', className)} {...props} />
}
