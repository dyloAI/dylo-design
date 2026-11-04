'use client'

import { cn } from '@/lib/utils'
import { Popover, PopoverContent, PopoverTrigger } from '@/registry/dylo/ui/popover'
import { Check, ChevronsUpDown, Search } from 'lucide-react'
import * as React from 'react'

export type ComboboxOption = { value: string; label: string; hint?: string }

/**
 * A searchable single choice for long lists: sending domain, audience,
 * template. Arrow keys move, Enter picks, Escape closes.
 */
export function Combobox({
  options,
  value,
  onValueChange,
  placeholder = 'Select...',
  searchPlaceholder = 'Search...',
  empty = 'No results.',
  className,
}: {
  options: ComboboxOption[]
  value?: string
  onValueChange?: (value: string) => void
  placeholder?: string
  searchPlaceholder?: string
  empty?: React.ReactNode
  className?: string
}) {
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState('')
  const [active, setActive] = React.useState(0)
  const [internal, setInternal] = React.useState(value)
  const selected = value ?? internal
  const listId = React.useId()

  const filtered = options.filter((o) => (o.label + ' ' + (o.hint ?? '')).toLowerCase().includes(query.toLowerCase()))
  const current = options.find((o) => o.value === selected)

  const pick = (v: string) => {
    setInternal(v)
    onValueChange?.(v)
    setOpen(false)
    setQuery('')
  }

  return (
    <Popover
      open={open}
      onOpenChange={(o) => {
        setOpen(o)
        if (o) setActive(0)
      }}
    >
      <PopoverTrigger
        role="combobox"
        aria-expanded={open}
        aria-controls={listId}
        className={cn(
          'flex h-8 w-full min-w-0 cursor-pointer items-center justify-between gap-2 rounded-xl border border-interactive bg-interactive px-3 text-sm outline-hidden',
          'ring-focus transition duration-200 ease-in-out hover:bg-interactive-hover focus-visible:ring-2 data-[state=open]:bg-interactive-hover',
          current ? 'text-emphasis' : 'text-placeholder',
          className
        )}
      >
        <span className="truncate">{current?.label ?? placeholder}</span>
        <ChevronsUpDown className="size-4 shrink-0 text-default" />
      </PopoverTrigger>
      <PopoverContent className="w-(--radix-popover-trigger-width) min-w-56 p-0">
        <div className="flex items-center gap-2 border-b border-gray-a3 px-3">
          <Search className="size-4 text-default" />
          <input
            autoFocus
            value={query}
            placeholder={searchPlaceholder}
            onChange={(e) => {
              setQuery(e.target.value)
              setActive(0)
            }}
            onKeyDown={(e) => {
              if (e.key === 'ArrowDown') {
                e.preventDefault()
                setActive((a) => Math.min(a + 1, filtered.length - 1))
              } else if (e.key === 'ArrowUp') {
                e.preventDefault()
                setActive((a) => Math.max(a - 1, 0))
              } else if (e.key === 'Enter' && filtered[active]) {
                e.preventDefault()
                pick(filtered[active].value)
              }
            }}
            className="h-10 w-full bg-transparent text-sm text-emphasis outline-hidden placeholder:text-placeholder"
          />
        </div>
        <ul id={listId} role="listbox" className="max-h-64 overflow-y-auto p-1">
          {filtered.length === 0 ? <li className="px-2 py-6 text-center text-sm text-default">{empty}</li> : null}
          {filtered.map((o, i) => (
            <li
              key={o.value}
              role="option"
              aria-selected={o.value === selected}
              data-highlighted={i === active || undefined}
              onMouseEnter={() => setActive(i)}
              onClick={() => pick(o.value)}
              className="flex h-8 cursor-pointer items-center gap-2 rounded-lg px-2 text-sm text-default data-[highlighted]:bg-interactive-hover data-[highlighted]:text-emphasis"
            >
              <span className="truncate">{o.label}</span>
              {o.hint ? <span className="truncate text-xs text-gray-10">{o.hint}</span> : null}
              {o.value === selected ? <Check className="ml-auto size-4" /> : null}
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  )
}
