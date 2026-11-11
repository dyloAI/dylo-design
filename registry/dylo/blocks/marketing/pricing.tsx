'use client'

import { cn } from '@/lib/utils'
import { Badge } from '@/registry/dylo/ui/badge'
import { CtaButton } from '@/registry/dylo/ui/cta-button'
import { Slider } from '@/registry/dylo/ui/slider'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/registry/dylo/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/registry/dylo/ui/tooltip'
import { Check, Minus } from 'lucide-react'
import * as React from 'react'
import { GlowEdge } from './section'

export type Plan = {
  name: string
  price: string
  period?: string
  description: string
  cta: { label: string; href: string }
  features: string[]
  recommended?: boolean
}

/** One plan: name, price, a line, the call to action and what it includes. */
export function PlanCard({ plan, className }: { plan: Plan; className?: string }) {
  return (
    <div
      data-slot="plan-card"
      className={cn(
        'relative flex flex-col rounded-2xl border p-6 text-center transition-all duration-150 ease-dylo *:z-10',
        plan.recommended ? 'border-gray-a4' : 'border-gray-a3',
        className
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -top-0.5 -left-0.5 z-0! h-[calc(100%+4px)] w-[calc(100%+4px)] bg-linear-to-b from-transparent to-background"
      />
      {plan.recommended ? (
        <span
          aria-hidden
          className="pointer-events-none absolute top-0 left-1/2 glow-line w-[150px] -translate-x-1/2"
        />
      ) : null}
      <div className="relative flex items-center justify-center gap-2">
        <h3 className="font-display effect-font-styling text-xl text-emphasis">{plan.name}</h3>
        {plan.recommended ? (
          <Badge tone="success" size="md">
            Recommended
          </Badge>
        ) : null}
      </div>
      <p className="relative mt-4 font-display effect-font-styling text-[2.25rem] leading-tight tracking-tighter text-emphasis">
        {plan.price}
        {plan.period ? (
          <span className="ml-1 font-sans text-sm tracking-normal text-gray-11">{plan.period}</span>
        ) : null}
      </p>
      <p className="relative mt-2 min-h-12 text-sm leading-[1.6] text-gray-11">{plan.description}</p>
      <CtaButton
        asChild
        size="md"
        variant={plan.recommended ? 'glass' : 'ghost'}
        className={cn('relative mt-6 w-full', !plan.recommended && 'border-gray-a4')}
      >
        <a href={plan.cta.href}>{plan.cta.label}</a>
      </CtaButton>
      <ul className="relative mt-8 flex flex-col gap-3 text-left">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-gray-11">
            <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-gray-12" />
            {f}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function PlanGrid({ plans, className }: { plans: Plan[]; className?: string }) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 justify-center gap-3',
        plans.length >= 4 ? 'lg:grid-cols-4' : 'md:grid-cols-3',
        className
      )}
    >
      {plans.map((p) => (
        <PlanCard key={p.name} plan={p} />
      ))}
    </div>
  )
}

/** The volume slider above the plans, with labelled stops underneath. */
export function UsageSlider({
  stops,
  value,
  onValueChange,
  className,
}: {
  stops: { short: string; long: string }[]
  value: number
  onValueChange: (index: number) => void
  className?: string
}) {
  return (
    <div className={cn('mx-auto mb-12 flex w-full max-w-2xl flex-col', className)}>
      <Slider
        aria-label="Emails a month"
        min={0}
        max={stops.length - 1}
        step={1}
        value={[value]}
        onValueChange={(v) => onValueChange(v[0] ?? 0)}
        marks={stops.map((s) => (
          <>
            <span className="text-[.625rem] whitespace-nowrap text-gray-11 md:hidden">{s.short}</span>
            <span className="hidden text-xs whitespace-nowrap text-gray-11 md:block">{s.long}</span>
          </>
        ))}
      />
    </div>
  )
}

/**
 * The pricing block: pill tabs between products, the usage slider, and the
 * plan grid for the chosen volume.
 */
export function Pricing({
  products,
  stops,
  className,
}: {
  products: { id: string; label: string; plans: (stop: number) => Plan[] }[]
  stops: { short: string; long: string }[]
  className?: string
}) {
  const [stop, setStop] = React.useState(1)
  return (
    <Tabs defaultValue={products[0]?.id} className={className}>
      <TabsList variant="pill" className="mb-6 justify-center">
        {products.map((p) => (
          <TabsTrigger key={p.id} value={p.id}>
            {p.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {products.map((p) => (
        <TabsContent key={p.id} value={p.id}>
          <UsageSlider stops={stops} value={stop} onValueChange={setStop} />
          <PlanGrid plans={p.plans(stop)} />
        </TabsContent>
      ))}
    </Tabs>
  )
}

export type ComparisonRow = { label: string; hint?: string; values: (string | boolean)[] }

/** A plan comparison table: a tinted header band, 44px rows, ticks and dashes. */
export function ComparisonTable({
  title,
  columns,
  rows,
  className,
}: {
  title: React.ReactNode
  columns: string[]
  rows: ComparisonRow[]
  className?: string
}) {
  const th =
    'h-9 border-y border-gray-a3 px-3 text-xs font-semibold text-default first:rounded-l-md first:border-l last:rounded-r-md last:border-r'
  const td = 'h-11 truncate border-b border-gray-a3 px-3 text-sm text-gray-12'
  return (
    <TooltipProvider>
      <div className={cn('my-24 flex scroll-mt-32 flex-col gap-3', className)}>
        <h2 className="font-display effect-font-styling text-[2.25rem] leading-[130%] tracking-tighter text-emphasis">
          {title}
        </h2>
        <div className="relative my-2 w-full overflow-auto">
          <table className="w-max min-w-full border-separate border-spacing-0 text-left">
            <thead className="h-9 bg-gray-a2">
              <tr>
                <th className={th}>
                  <span className="sr-only">Feature</span>
                </th>
                {columns.map((c) => (
                  <th key={c} className={th}>
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label}>
                  <td className={cn(td, 'w-2/6')}>
                    {row.hint ? (
                      <Tooltip>
                        <TooltipTrigger className="cursor-help underline decoration-dotted underline-offset-2">
                          {row.label}
                        </TooltipTrigger>
                        <TooltipContent>{row.hint}</TooltipContent>
                      </Tooltip>
                    ) : (
                      row.label
                    )}
                  </td>
                  {row.values.map((v, i) => (
                    <td key={i} className={cn(td, 'w-1/6')}>
                      {v === true ? (
                        <Check aria-label="Included" className="size-[18px] text-green-10" />
                      ) : v === false ? (
                        <Minus aria-label="Not included" className="size-[18px] text-gray-8" />
                      ) : (
                        <span className="ml-1">{v}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </TooltipProvider>
  )
}

/** Add-ons: a rounded panel listing extras with a price and an action each. */
export function AddOnPanel({
  title,
  items,
  className,
}: {
  title: React.ReactNode
  items: { name: string; price: string; body: React.ReactNode; cta: { label: string; href: string } }[]
  className?: string
}) {
  return (
    <div className={cn('my-24', className)}>
      <h2 className="relative z-20 mb-8 font-display effect-font-styling text-[2.25rem] leading-[130%] tracking-tighter text-emphasis">
        {title}
      </h2>
      <div className="relative flex rounded-3xl border border-gray-3">
        <GlowEdge className="sm:right-1 sm:left-auto sm:translate-x-0" />
        <div className="relative z-10 flex w-full flex-col gap-10 p-8 py-10">
          {items.map((item) => (
            <div key={item.name} className="flex flex-col">
              <h3 className="flex flex-auto font-display effect-font-styling text-xl leading-[130%] text-emphasis">
                {item.name} · {item.price}
              </h3>
              <p className="mt-4 mb-4 max-w-2xl text-sm leading-[1.6] text-gray-11">{item.body}</p>
              <div>
                <CtaButton asChild size="md">
                  <a href={item.cta.href}>{item.cta.label}</a>
                </CtaButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
