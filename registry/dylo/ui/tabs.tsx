'use client'

import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { Tabs as TabsPrimitive } from 'radix-ui'
import * as React from 'react'

/**
 * Switches between views of one page. `segmented` is the dashboard's
 * Sending / Receiving control, `pill` the larger marketing toggle,
 * `underline` the settings sub-navigation.
 */
export const Tabs = TabsPrimitive.Root
export const TabsContent = TabsPrimitive.Content

const VariantContext = React.createContext<'segmented' | 'pill' | 'underline'>('segmented')

const listVariants = cva('inline-flex items-center', {
  variants: {
    variant: {
      segmented: 'gap-1',
      pill: 'flex-nowrap gap-2',
      underline: 'w-full gap-5 border-b border-gray-a3',
    },
  },
  defaultVariants: { variant: 'segmented' },
})

const triggerVariants = cva(
  [
    'inline-flex shrink-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap outline-hidden select-none',
    'ring-focus transition-colors duration-200 ease-in-out focus-visible:ring-2',
    'disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4',
  ],
  {
    variants: {
      variant: {
        segmented:
          'h-8 rounded-lg px-3 text-sm font-medium text-default hover:text-emphasis data-[state=active]:bg-interactive-hover data-[state=active]:text-emphasis',
        pill: 'h-10 rounded-2xl px-4 text-sm font-semibold text-default hover:bg-interactive-hover data-[state=active]:bg-interactive data-[state=active]:text-emphasis data-[state=active]:hover:bg-interactive-hover',
        underline:
          '-mb-px h-10 border-b-2 border-transparent text-sm font-medium text-default hover:text-emphasis data-[state=active]:border-gray-12 data-[state=active]:text-emphasis',
      },
    },
    defaultVariants: { variant: 'segmented' },
  }
)

export function TabsList({
  className,
  variant = 'segmented',
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> & VariantProps<typeof listVariants>) {
  const v = variant ?? 'segmented'
  return (
    <VariantContext.Provider value={v}>
      <TabsPrimitive.List data-slot="tabs-list" className={cn(listVariants({ variant: v }), className)} {...props} />
    </VariantContext.Provider>
  )
}

export function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  const variant = React.useContext(VariantContext)
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(triggerVariants({ variant }), className)}
      {...props}
    />
  )
}
