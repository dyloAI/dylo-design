'use client'

import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarHeading,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from '@/registry/dylo/blocks/app-shell/sidebar'
import { SidebarLayout } from '@/registry/dylo/blocks/app-shell/sidebar-layout'
import {
  CircleHelp,
  Cog,
  Home,
  KeyRound,
  LayoutGrid,
  LogOut,
  Sparkles,
  Ticket,
  UserRound,
} from 'lucide-react'
import * as React from 'react'

export {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarHeading,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from '@/registry/dylo/blocks/app-shell/sidebar'
export { SidebarLayout } from '@/registry/dylo/blocks/app-shell/sidebar-layout'

export type AppShellNavItem = {
  href: string
  label: string
  icon?: React.ReactNode
  /** Match against the active path (defaults to exact `href`). */
  match?: 'exact' | 'prefix'
}

export type AppShellUser = {
  name: string | null
  email: string
  image?: string | null
}

const DEFAULT_NAV: AppShellNavItem[] = [
  { href: '/', label: 'Home', icon: <Home data-slot="icon" strokeWidth={2} />, match: 'exact' },
  { href: '/events', label: 'Events', icon: <LayoutGrid data-slot="icon" strokeWidth={2} />, match: 'prefix' },
  { href: '/orders', label: 'Orders', icon: <Ticket data-slot="icon" strokeWidth={2} />, match: 'prefix' },
  { href: '/settings', label: 'Settings', icon: <Cog data-slot="icon" strokeWidth={2} />, match: 'prefix' },
  {
    href: '/account/mcp-keys',
    label: 'MCP keys',
    icon: <KeyRound data-slot="icon" strokeWidth={2} />,
    match: 'exact',
  },
]

function getInitials(name: string | null, email: string) {
  if (name && name.trim().length > 0) {
    const parts = name.trim().split(/\s+/)
    return (parts[0][0] + (parts[1]?.[0] ?? '')).toUpperCase()
  }
  return email.slice(0, 2).toUpperCase()
}

function isCurrent(pathname: string, item: AppShellNavItem) {
  if (item.match === 'prefix') return pathname === item.href || pathname.startsWith(`${item.href}/`)
  return pathname === item.href
}

/**
 * Application shell matching dylo-starter: brand header, primary nav,
 * secondary links, account footer. Pass `pathname` from your router; wire
 * `onSignOut` to your auth client.
 */
export function AppShell({
  children,
  pathname = '/',
  nav = DEFAULT_NAV,
  user = { name: 'Guest', email: 'guest@local' },
  brandName = 'dylo',
  secondary,
  onSignOut,
  className,
}: {
  children: React.ReactNode
  pathname?: string
  nav?: AppShellNavItem[]
  user?: AppShellUser
  brandName?: string
  secondary?: React.ReactNode
  onSignOut?: () => void
  className?: string
}) {
  const initials = getInitials(user.name, user.email)
  const displayName = user.name?.trim() || user.email.split('@')[0]

  const sidebar = (
    <Sidebar className="bg-paper lg:bg-transparent">
      <SidebarHeader>
        <SidebarItem href="/">
          {/* eslint-disable-next-line @next/next/no-img-element -- portable to non-Next consumers */}
          <img src="/brand/dylo-mark.png" alt="" className="size-6 rounded-sm" />
          <SidebarLabel>{brandName}</SidebarLabel>
        </SidebarItem>
      </SidebarHeader>

      <SidebarBody>
        <SidebarSection>
          {nav.map((item) => (
            <SidebarItem key={item.href} href={item.href} current={isCurrent(pathname, item)}>
              {item.icon}
              <SidebarLabel>{item.label}</SidebarLabel>
            </SidebarItem>
          ))}
        </SidebarSection>

        {secondary}

        <SidebarSpacer />

        <SidebarSection>
          <SidebarItem href="#">
            <CircleHelp data-slot="icon" strokeWidth={2} />
            <SidebarLabel>Support</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="#">
            <Sparkles data-slot="icon" strokeWidth={2} />
            <SidebarLabel>Changelog</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
      </SidebarBody>

      <SidebarFooter className="max-lg:hidden">
        <div className="flex items-center gap-3 rounded-sm px-2 py-2">
          {user.image ? (
            // eslint-disable-next-line @next/next/no-img-element -- portable avatar
            <img src={user.image} alt="" className="size-10 rounded-sm object-cover" />
          ) : (
            <span className="flex size-10 items-center justify-center rounded-sm bg-ink font-mono text-xs text-bone">
              {initials}
            </span>
          )}
          <span className="min-w-0 flex-1">
            <span className="block truncate text-sm/5 font-medium text-ink">{displayName}</span>
            <span className="block truncate text-xs/5 text-concrete">{user.email}</span>
          </span>
          {onSignOut ? (
            <button
              type="button"
              onClick={onSignOut}
              aria-label="Sign out"
              className="inline-flex size-8 items-center justify-center rounded-sm text-concrete hover:bg-ink/5 hover:text-ink"
            >
              <LogOut data-slot="icon" strokeWidth={2} className="size-4" />
            </button>
          ) : (
            <UserRound data-slot="icon" strokeWidth={2} className="size-4 text-concrete" />
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  )

  return (
    <SidebarLayout
      className={className}
      navbar={
        <div className="flex items-center justify-end gap-3 py-2">
          <span className="truncate text-sm font-medium text-ink">{displayName}</span>
          <span className="flex size-8 items-center justify-center rounded-sm bg-ink font-mono text-[10px] text-bone">
            {initials}
          </span>
        </div>
      }
      sidebar={sidebar}
    >
      {children}
    </SidebarLayout>
  )
}

/**
 * Docs / dry-run composition with sample nav and a placeholder page.
 */
export function AppShellKit() {
  const [pathname, setPathname] = React.useState('/')

  return (
    <div
      className="h-[640px] overflow-hidden rounded-md border border-ink"
      onClickCapture={(event) => {
        const target = (event.target as HTMLElement).closest('a[href]')
        if (!target) return
        const href = target.getAttribute('href')
        if (!href || href.startsWith('http') || href === '#') return
        event.preventDefault()
        setPathname(href)
      }}
    >
      <AppShell
        className="h-full min-h-full"
        pathname={pathname}
        user={{ name: 'Guest', email: 'guest@local' }}
        secondary={
          <SidebarSection className="max-lg:hidden">
            <SidebarHeading>Upcoming</SidebarHeading>
            <SidebarItem href="#">Design review</SidebarItem>
            <SidebarItem href="#">Sprint planning</SidebarItem>
          </SidebarSection>
        }
        onSignOut={() => undefined}
      >
        <ShellDemoPage pathname={pathname} />
      </AppShell>
    </div>
  )
}

function ShellDemoPage({ pathname }: { pathname: string }) {
  const title =
    pathname === '/'
      ? 'Home'
      : pathname
          .split('/')
          .filter(Boolean)
          .map((part) => part.replace(/-/g, ' '))
          .join(' / ')

  return (
    <div className="space-y-3">
      <p className="m-0 font-mono text-[11px] font-bold tracking-[0.14em] text-oxide uppercase">App shell</p>
      <h1 className="m-0 text-2xl font-bold tracking-tight text-ink capitalize">{title}</h1>
      <p className="m-0 max-w-xl text-[15px]/[1.6] text-graphite">
        Sidebar layout from dylo-starter, rebuilt on dylo tokens and Lucide icons. Click a nav item to preview the
        current state.
      </p>
    </div>
  )
}
