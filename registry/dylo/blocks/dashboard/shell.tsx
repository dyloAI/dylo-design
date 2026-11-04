'use client'

import { cn } from '@/lib/utils'
import { Avatar } from '@/registry/dylo/ui/avatar'
import { Badge } from '@/registry/dylo/ui/badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/registry/dylo/ui/dropdown-menu'
import { IconButton } from '@/registry/dylo/ui/icon-button'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/registry/dylo/ui/sheet'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/registry/dylo/ui/tooltip'
import {
  BookOpen,
  ChartNoAxesColumn,
  ChevronsUpDown,
  CircleHelp,
  Globe,
  Inbox,
  KeyRound,
  LayoutTemplate,
  Lightbulb,
  LogOut,
  Mail,
  Megaphone,
  Menu,
  MessageSquare,
  Plus,
  ScrollText,
  Settings,
  Sparkles,
  Users,
  Webhook,
  Workflow,
  type LucideIcon,
} from 'lucide-react'
import * as React from 'react'

export type DashboardSection =
  | 'emails'
  | 'templates'
  | 'audience'
  | 'inboxes'
  | 'broadcasts'
  | 'automations'
  | 'metrics'
  | 'domains'
  | 'logs'
  | 'api-keys'
  | 'webhooks'
  | 'settings'

type NavItem = { id: DashboardSection; label: string; icon: LucideIcon }

export const dashboardNav: NavItem[][] = [
  [
    { id: 'emails', label: 'Emails', icon: Mail },
    { id: 'templates', label: 'Templates', icon: LayoutTemplate },
    { id: 'audience', label: 'Audience', icon: Users },
  ],
  [
    { id: 'inboxes', label: 'Inboxes', icon: Inbox },
    { id: 'broadcasts', label: 'Broadcasts', icon: Megaphone },
    { id: 'automations', label: 'Automations', icon: Workflow },
  ],
  [
    { id: 'metrics', label: 'Metrics', icon: ChartNoAxesColumn },
    { id: 'domains', label: 'Domains', icon: Globe },
    { id: 'logs', label: 'Logs', icon: ScrollText },
    { id: 'api-keys', label: 'API keys', icon: KeyRound },
    { id: 'webhooks', label: 'Webhooks', icon: Webhook },
    { id: 'settings', label: 'Settings', icon: Settings },
  ],
]

/** The workspace menu at the top of the sidebar. */
export function TeamSwitcher({ team = 'acme', plan = 'Pro' }: { team?: string; plan?: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="group flex h-10 w-full cursor-pointer items-center gap-2 rounded-lg px-2 text-left ring-focus outline-hidden transition-colors hover:bg-interactive-hover focus-visible:ring-2 data-[state=open]:bg-interactive-hover">
        <Avatar shape="square" size="xs" tone="blue" fallback={team.slice(0, 1)} />
        <span className="truncate text-sm font-medium text-emphasis">{team}</span>
        <Badge size="sm" className="h-4 rounded px-1 text-2xs">
          {plan}
        </Badge>
        <ChevronsUpDown className="ml-auto size-4 text-default" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-60">
        <DropdownMenuLabel>Teams</DropdownMenuLabel>
        <DropdownMenuItem>
          <Avatar shape="square" size="xs" tone="blue" fallback={team.slice(0, 1)} />
          {team}
          <DropdownMenuShortcut>{plan}</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Plus />
          New team
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Settings />
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LogOut />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function SidebarNav({ active, hrefFor }: { active?: DashboardSection; hrefFor: (id: DashboardSection) => string }) {
  return (
    <nav aria-label="Main" className="flex flex-col gap-4">
      {dashboardNav.map((group, i) => (
        <React.Fragment key={i}>
          {i > 0 ? <div aria-hidden className="mx-2 h-px bg-gray-a3" /> : null}
          <ul className="flex flex-col gap-0.5">
            {group.map(({ id, label, icon: Icon }) => {
              const current = id === active
              return (
                <li key={id}>
                  <a
                    href={hrefFor(id)}
                    aria-current={current ? 'page' : undefined}
                    className={cn(
                      'flex h-8 items-center gap-2 rounded-lg px-2 text-sm outline-hidden transition-colors duration-150',
                      'ring-focus focus-visible:ring-2',
                      current
                        ? 'bg-interactive-hover text-emphasis'
                        : 'text-default hover:bg-interactive hover:text-emphasis'
                    )}
                  >
                    <Icon className={cn('size-4 shrink-0', current ? 'text-emphasis' : 'text-default')} />
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
        </React.Fragment>
      ))}
    </nav>
  )
}

function SidebarFooter() {
  const items = [
    { label: 'Feedback', icon: MessageSquare },
    { label: 'Changelog', icon: Lightbulb },
    { label: 'Help', icon: CircleHelp },
  ]
  return (
    <div className="flex items-center justify-between px-1">
      <Tooltip>
        <TooltipTrigger asChild>
          <IconButton size="xs" aria-label={items[0].label}>
            <MessageSquare />
          </IconButton>
        </TooltipTrigger>
        <TooltipContent side="top">{items[0].label}</TooltipContent>
      </Tooltip>
      <div className="flex items-center gap-1">
        {items.slice(1).map(({ label, icon: Icon }) => (
          <Tooltip key={label}>
            <TooltipTrigger asChild>
              <IconButton size="xs" aria-label={label}>
                <Icon />
              </IconButton>
            </TooltipTrigger>
            <TooltipContent side="top">{label}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  )
}

/** The product sidebar: team switcher, three nav groups, footer controls. */
export function AppSidebar({
  active,
  hrefFor = (id) => `/${id}`,
  team,
  plan,
  className,
}: {
  active?: DashboardSection
  hrefFor?: (id: DashboardSection) => string
  team?: string
  plan?: string
  className?: string
}) {
  return (
    <aside
      data-slot="app-sidebar"
      className={cn('flex h-full w-(--dylo-sidebar-width) flex-col gap-6 px-3 py-4', className)}
    >
      <TeamSwitcher team={team} plan={plan} />
      <div className="flex-1 overflow-y-auto">
        <SidebarNav active={active} hrefFor={hrefFor} />
      </div>
      <SidebarFooter />
    </aside>
  )
}

/** The 32px bar under the app: docs on the left, the help prompt on the right. */
export function StatusBar({ docsHref = '/docs' }: { docsHref?: string }) {
  return (
    <div
      data-slot="status-bar"
      className="flex h-8 shrink-0 items-center justify-between border-t border-gray-a3 bg-background px-3 text-xs text-default"
    >
      <a
        href={docsHref}
        className="inline-flex items-center gap-1.5 rounded-md px-1 py-0.5 font-mono transition-colors hover:text-emphasis"
      >
        <BookOpen className="size-3.5" />
        /docs
      </a>
      <button
        type="button"
        className="inline-flex cursor-pointer items-center gap-1.5 rounded-md px-1 py-0.5 transition-colors hover:text-emphasis"
      >
        <Sparkles className="size-3.5" />
        Ask anything
      </button>
    </div>
  )
}

/**
 * The product chrome: fixed sidebar on desktop, a sheet on mobile, a
 * centred content column and the status bar along the bottom.
 */
export function AppShell({
  active,
  hrefFor,
  team,
  plan,
  children,
  className,
}: {
  active?: DashboardSection
  hrefFor?: (id: DashboardSection) => string
  team?: string
  plan?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <TooltipProvider>
      <div data-slot="app-shell" className={cn('flex h-dvh flex-col bg-background text-emphasis', className)}>
        <div className="flex min-h-0 flex-1">
          <div className="hidden border-r border-gray-a3 lg:block">
            <AppSidebar active={active} hrefFor={hrefFor} team={team} plan={plan} />
          </div>
          <div className="flex min-w-0 flex-1 flex-col">
            <div className="flex h-12 items-center gap-2 border-b border-gray-a3 px-3 lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <IconButton aria-label="Open navigation">
                    <Menu />
                  </IconButton>
                </SheetTrigger>
                <SheetContent side="left" className="p-0">
                  <SheetTitle className="sr-only">Navigation</SheetTitle>
                  <AppSidebar active={active} hrefFor={hrefFor} team={team} plan={plan} className="w-full" />
                </SheetContent>
              </Sheet>
              <span className="text-sm font-medium">{team ?? 'acme'}</span>
            </div>
            <main className="min-h-0 flex-1 overflow-y-auto">
              <div className="mx-auto w-full max-w-[1104px] px-6 pt-10 pb-16 lg:px-10">{children}</div>
            </main>
          </div>
        </div>
        <StatusBar />
      </div>
    </TooltipProvider>
  )
}

/** Title row of a dashboard page, with the page's actions on the right. */
export function PageHeader({
  title,
  description,
  actions,
  breadcrumb,
  className,
}: {
  title: React.ReactNode
  description?: React.ReactNode
  actions?: React.ReactNode
  breadcrumb?: React.ReactNode
  className?: string
}) {
  return (
    <header data-slot="page-header" className={cn('mb-8 flex flex-col gap-3', className)}>
      {breadcrumb}
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex min-w-0 flex-col gap-1">
          <h1 className="font-display effect-font-styling text-[1.75rem] leading-tight font-medium tracking-tight text-emphasis">
            {title}
          </h1>
          {description ? <p className="text-sm text-default">{description}</p> : null}
        </div>
        {actions ? <div className="flex shrink-0 items-center gap-2">{actions}</div> : null}
      </div>
    </header>
  )
}
