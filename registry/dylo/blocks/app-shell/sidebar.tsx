'use client'

import { cn } from '@/lib/utils'
import * as React from 'react'

export function Sidebar({ className, ...props }: React.ComponentPropsWithoutRef<'nav'>) {
  return <nav data-slot="sidebar" {...props} className={cn('flex h-full min-h-0 flex-col', className)} />
}

export function SidebarHeader({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      data-slot="sidebar-header"
      {...props}
      className={cn('flex flex-col border-b border-line p-4 [&>[data-slot=sidebar-section]+[data-slot=sidebar-section]]:mt-2.5', className)}
    />
  )
}

export function SidebarBody({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      data-slot="sidebar-body"
      {...props}
      className={cn(
        'flex flex-1 flex-col overflow-y-auto p-4 [&>[data-slot=sidebar-section]+[data-slot=sidebar-section]]:mt-8',
        className
      )}
    />
  )
}

export function SidebarFooter({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      data-slot="sidebar-footer"
      {...props}
      className={cn('flex flex-col border-t border-line p-4 [&>[data-slot=sidebar-section]+[data-slot=sidebar-section]]:mt-2.5', className)}
    />
  )
}

export function SidebarSection({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div data-slot="sidebar-section" {...props} className={cn('flex flex-col gap-0.5', className)} />
  )
}

export function SidebarSpacer({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return <div aria-hidden="true" data-slot="sidebar-spacer" {...props} className={cn('mt-8 flex-1', className)} />
}

export function SidebarHeading({ className, ...props }: React.ComponentPropsWithoutRef<'h3'>) {
  return (
    <h3
      data-slot="sidebar-heading"
      {...props}
      className={cn('mb-1 px-2 font-mono text-[11px] font-medium tracking-[0.08em] text-concrete uppercase', className)}
    />
  )
}

export function SidebarLabel({ className, ...props }: React.ComponentPropsWithoutRef<'span'>) {
  return <span data-slot="sidebar-label" {...props} className={cn('truncate', className)} />
}

type SidebarItemProps = {
  current?: boolean
  className?: string
  children: React.ReactNode
} & (
  | ({ href: string } & Omit<React.ComponentPropsWithoutRef<'a'>, 'className' | 'children'>)
  | ({ href?: never } & Omit<React.ComponentPropsWithoutRef<'button'>, 'className' | 'children'>)
)

/**
 * Nav row with an ink current indicator on the left — mechanical, no bounce.
 */
export function SidebarItem({ current, className, children, ...props }: SidebarItemProps) {
  const classes = cn(
    'relative flex w-full items-center gap-3 rounded-sm px-2 py-2.5 text-left text-sm/5 font-medium text-ink',
    'transition-colors duration-[120ms] ease-out',
    '*:data-[slot=icon]:size-5 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:text-concrete',
    '*:last:data-[slot=icon]:ml-auto *:last:data-[slot=icon]:size-4',
    'hover:bg-ink/5 hover:*:data-[slot=icon]:text-ink',
    current && 'bg-ink/5 *:data-[slot=icon]:text-ink',
    className
  )

  return (
    <span className="relative">
      {current ? (
        <span aria-hidden="true" className="absolute inset-y-2 -left-4 w-0.5 rounded-full bg-ink" />
      ) : null}
      {'href' in props && typeof props.href === 'string' ? (
        <a {...props} data-slot="sidebar-item" data-current={current ? 'true' : undefined} className={classes}>
          {children}
        </a>
      ) : (
        <button
          type="button"
          {...(props as React.ComponentPropsWithoutRef<'button'>)}
          data-slot="sidebar-item"
          data-current={current ? 'true' : undefined}
          className={cn(classes, 'cursor-default border-0 bg-transparent')}
        >
          {children}
        </button>
      )}
    </span>
  )
}
