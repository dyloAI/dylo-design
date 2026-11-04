import { cn } from '@/lib/utils'
import { Input, type InputProps } from '@/registry/dylo/ui/input'
import { Kbd } from '@/registry/dylo/ui/kbd'
import { Search as SearchIcon } from 'lucide-react'
import * as React from 'react'

/** The filter-bar search: leading magnifier, optional shortcut hint. */
export function SearchField({
  className,
  shortcut,
  placeholder = 'Search...',
  ...props
}: Omit<InputProps, 'leading' | 'trailing'> & { shortcut?: string[] }) {
  return (
    <Input
      type="search"
      placeholder={placeholder}
      leading={<SearchIcon />}
      trailing={
        shortcut ? (
          <span className="mr-1.5 flex items-center gap-1">
            {shortcut.map((key) => (
              <Kbd key={key}>{key}</Kbd>
            ))}
          </span>
        ) : undefined
      }
      className={cn('[&::-webkit-search-cancel-button]:hidden', className)}
      {...props}
    />
  )
}

/**
 * The button-shaped search that opens a command palette: the marketing
 * header's "Search... cmd K".
 */
export function SearchTrigger({ className, children = 'Search...', ...props }: React.ComponentProps<'button'>) {
  return (
    <button
      type="button"
      data-slot="search-trigger"
      className={cn(
        'flex h-8 w-full min-w-48 cursor-pointer items-center justify-between gap-2 rounded-xl border border-interactive bg-interactive pr-1.5 pl-2.5 text-sm text-placeholder',
        'ring-focus transition duration-200 ease-in-out hover:bg-interactive-hover focus-visible:ring-2 focus-visible:outline-hidden',
        className
      )}
      {...props}
    >
      <span className="flex items-center gap-2">
        <SearchIcon className="size-4 text-default" />
        {children}
      </span>
      <span className="flex items-center gap-1">
        <Kbd>&#8984;</Kbd>
        <Kbd>K</Kbd>
      </span>
    </button>
  )
}
