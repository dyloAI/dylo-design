import { cn } from '@/lib/utils'
import * as React from 'react'

/**
 * The list table. The header is a rounded, hairlined band; rows are 56px with
 * a bottom hairline and a hover fill. `density="compact"` gives the 44px rows
 * of comparison tables and DNS records.
 */
export function Table({
  className,
  density = 'default',
  ...props
}: React.ComponentProps<'table'> & { density?: 'default' | 'compact' }) {
  return (
    <div data-slot="table-container" className="relative w-full overflow-x-auto">
      <table
        data-slot="table"
        data-density={density}
        className={cn('w-full min-w-max border-separate border-spacing-0 text-left text-sm', className)}
        {...props}
      />
    </div>
  )
}

export function TableHeader({ className, ...props }: React.ComponentProps<'thead'>) {
  return <thead data-slot="table-header" className={className} {...props} />
}

export function TableBody({ className, ...props }: React.ComponentProps<'tbody'>) {
  return <tbody data-slot="table-body" className={className} {...props} />
}

export function TableRow({ className, ...props }: React.ComponentProps<'tr'>) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        'group/row transition-colors data-[state=selected]:bg-gray-a2 [tbody_&]:hover:bg-gray-a2',
        className
      )}
      {...props}
    />
  )
}

export function TableHead({ className, ...props }: React.ComponentProps<'th'>) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        'h-8 border-y border-gray-a3 bg-gray-a2 px-3 text-xs font-medium whitespace-nowrap text-default',
        'first:rounded-l-lg first:border-l last:rounded-r-lg last:border-r',
        className
      )}
      {...props}
    />
  )
}

export function TableCell({ className, ...props }: React.ComponentProps<'td'>) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        'border-b border-gray-a3 px-3 align-middle text-default',
        'h-14 [[data-density=compact]_&]:h-11',
        className
      )}
      {...props}
    />
  )
}

/** The primary cell text: the recipient, the domain name, the key name. */
export function TableCellPrimary({ className, ...props }: React.ComponentProps<'span'>) {
  return <span className={cn('truncate text-emphasis', className)} {...props} />
}

export function TableCaption({ className, ...props }: React.ComponentProps<'caption'>) {
  return <caption className={cn('mt-4 text-sm text-default', className)} {...props} />
}
