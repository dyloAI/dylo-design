'use client'

import { cn } from '@/lib/utils'
import { Button } from '@/registry/dylo/ui/button'
import { Input } from '@/registry/dylo/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/registry/dylo/ui/popover'
import { Calendar, Check, ChevronDown } from 'lucide-react'
import * as React from 'react'

export type DateRange = { preset?: string; from?: string; to?: string }

const DEFAULT_PRESETS = [
  { value: 'today', label: 'Today' },
  { value: 'yesterday', label: 'Yesterday' },
  { value: '3d', label: 'Last 3 days' },
  { value: '7d', label: 'Last 7 days' },
  { value: '15d', label: 'Last 15 days' },
  { value: '30d', label: 'Last 30 days' },
]

/**
 * The list filter for time: a preset ("Last 15 days") or a custom from / to
 * pair. Dates are ISO strings (yyyy-mm-dd).
 */
export function DateRangePicker({
  value,
  onValueChange,
  presets = DEFAULT_PRESETS,
  className,
}: {
  value?: DateRange
  onValueChange?: (value: DateRange) => void
  presets?: { value: string; label: string }[]
  className?: string
}) {
  const [open, setOpen] = React.useState(false)
  const [internal, setInternal] = React.useState<DateRange>(value ?? { preset: '15d' })
  const range = value ?? internal
  const [from, setFrom] = React.useState(range.from ?? '')
  const [to, setTo] = React.useState(range.to ?? '')

  const commit = (next: DateRange) => {
    setInternal(next)
    onValueChange?.(next)
    setOpen(false)
  }

  const label = range.preset
    ? (presets.find((p) => p.value === range.preset)?.label ?? range.preset)
    : range.from && range.to
      ? `${range.from} - ${range.to}`
      : 'Custom range'

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        className={cn(
          'flex h-8 w-full min-w-0 cursor-pointer items-center justify-between gap-2 rounded-xl border border-interactive bg-interactive px-3 text-sm text-emphasis outline-hidden',
          'ring-focus transition duration-200 ease-in-out hover:bg-interactive-hover focus-visible:ring-2 data-[state=open]:bg-interactive-hover',
          className
        )}
      >
        <span className="flex min-w-0 items-center gap-2">
          <Calendar className="size-4 shrink-0 text-default" />
          <span className="truncate">{label}</span>
        </span>
        <ChevronDown className="size-4 shrink-0 text-default" />
      </PopoverTrigger>
      <PopoverContent className="w-64 p-1">
        <ul className="flex flex-col">
          {presets.map((p) => (
            <li key={p.value}>
              <button
                type="button"
                onClick={() => commit({ preset: p.value })}
                className="flex h-8 w-full cursor-pointer items-center justify-between rounded-lg px-2 text-sm text-default outline-hidden hover:bg-interactive-hover hover:text-emphasis focus-visible:bg-interactive-hover"
              >
                {p.label}
                {range.preset === p.value ? <Check className="size-4" /> : null}
              </button>
            </li>
          ))}
        </ul>
        <div className="-mx-1 my-1 h-px bg-gray-a3" />
        <div className="flex flex-col gap-2 p-2">
          <span className="text-xs font-medium text-gray-10">Custom range</span>
          <div className="grid grid-cols-2 gap-2">
            <Input type="date" aria-label="From" value={from} onChange={(e) => setFrom(e.target.value)} />
            <Input type="date" aria-label="To" value={to} onChange={(e) => setTo(e.target.value)} />
          </div>
          <Button variant="primary" disabled={!from || !to} onClick={() => commit({ from, to })}>
            Apply
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
