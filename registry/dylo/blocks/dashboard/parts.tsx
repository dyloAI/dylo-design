'use client'

import { cn } from '@/lib/utils'
import { CopyButton } from '@/registry/dylo/ui/code-block'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/registry/dylo/ui/dropdown-menu'
import { IconButton } from '@/registry/dylo/ui/icon-button'
import { Ellipsis } from 'lucide-react'
import * as React from 'react'

export type RowAction =
  { label: string; icon?: React.ReactNode; destructive?: boolean; onSelect?: () => void } | 'separator'

/** The "..." menu at the end of a table row. */
export function RowActions({ actions, label = 'More actions' }: { actions: RowAction[]; label?: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <IconButton aria-label={label} className="text-gray-10">
          <Ellipsis />
        </IconButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {actions.map((action, i) =>
          action === 'separator' ? (
            <DropdownMenuSeparator key={i} />
          ) : (
            <DropdownMenuItem
              key={action.label}
              variant={action.destructive ? 'destructive' : undefined}
              onSelect={action.onSelect}
            >
              {action.icon}
              {action.label}
            </DropdownMenuItem>
          )
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

/** A label above a value, used in the metadata grid of a detail page. */
export function DetailItem({
  label,
  children,
  copy,
  mono,
  className,
}: {
  label: React.ReactNode
  children: React.ReactNode
  copy?: string
  mono?: boolean
  className?: string
}) {
  return (
    <div data-slot="detail-item" className={cn('flex min-w-0 flex-col gap-1.5', className)}>
      <dt className="text-xs font-medium tracking-wide text-gray-10 uppercase">{label}</dt>
      <dd className={cn('flex min-w-0 items-center gap-1 text-sm text-emphasis', mono && 'font-mono text-[0.8125rem]')}>
        <span className="truncate">{children}</span>
        {copy ? <CopyButton value={copy} className="size-6" /> : null}
      </dd>
    </div>
  )
}

export function DetailGrid({ className, ...props }: React.ComponentProps<'dl'>) {
  return <dl className={cn('grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4', className)} {...props} />
}

/** A heading inside a page: title, one line, and an action on the right. */
export function SectionHeading({
  title,
  description,
  action,
  className,
}: {
  title: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('flex flex-wrap items-end justify-between gap-3', className)}>
      <div className="flex flex-col gap-0.5">
        <h2 className="font-display effect-font-styling text-lg font-medium text-emphasis">{title}</h2>
        {description ? <p className="text-sm text-default">{description}</p> : null}
      </div>
      {action}
    </div>
  )
}

/** A recipient cell: the address, then a "+3" chip for the rest. */
export function Recipients({ to, extra }: { to: string; extra?: number }) {
  return (
    <span className="flex min-w-0 items-center gap-1.5">
      <span className="truncate text-emphasis">{to}</span>
      {extra ? (
        <span className="inline-flex h-5 shrink-0 items-center rounded-md border border-gray-a3 bg-interactive px-1.5 text-xs text-default">
          +{extra}
        </span>
      ) : null}
    </span>
  )
}
