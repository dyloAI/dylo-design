'use client'

import { ThemeToggle } from '@/components/theme-toggle'
import { navigation, type NavItem, type NavSection } from '@/lib/navigation'
import { cn } from '@/lib/utils'
import { Logo } from '@/registry/dylo/ui/logo'
import { ChevronRight, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export function SiteNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [syncedPath, setSyncedPath] = useState(pathname)
  if (syncedPath !== pathname) {
    setSyncedPath(pathname)
    setOpen(false)
  }

  return (
    <div className="border-gray-a3 bg-background lg:sticky lg:top-0 lg:flex lg:h-dvh lg:flex-col lg:border-r">
      <div className="flex shrink-0 items-center justify-between gap-3 border-b border-gray-a3 px-5 py-4 lg:border-b-0">
        <Link href="/" className="flex items-center gap-2.5">
          <Logo variant="lockup" className="h-7" />
          <span className="rounded-md border border-gray-a4 px-1.5 py-0.5 font-mono text-2xs tracking-wide text-gray-11 uppercase">
            Design
          </span>
        </Link>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          className="inline-flex size-8 cursor-pointer items-center justify-center rounded-lg text-default hover:bg-interactive-hover lg:hidden"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      <div className={cn('flex-col lg:flex lg:min-h-0 lg:flex-1', open ? 'flex' : 'hidden')}>
        <nav aria-label="Design system" className="px-3 pt-1 pb-8 lg:min-h-0 lg:flex-1 lg:overflow-y-auto">
          {navigation.map((section, i) => {
            const previous = navigation[i - 1]
            return (
              <div key={section.title} className={cn(!section.collapsible && previous?.collapsible && 'mt-6')}>
                {section.collapsible && !previous?.collapsible ? (
                  <p className="mb-1 px-2 text-xs font-medium text-gray-10">Components</p>
                ) : null}
                <NavSectionBlock section={section} pathname={pathname} />
              </div>
            )
          })}
        </nav>
        <div className="flex shrink-0 items-center justify-between gap-3 border-t border-gray-a3 px-5 py-3">
          <span className="text-xs font-medium text-gray-10">Theme</span>
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}

function NavLink({ item, pathname }: { item: NavItem; pathname: string }) {
  const active =
    pathname === item.href || (item.href !== '/' && item.href !== '/kits' && pathname.startsWith(`${item.href}/`))

  return (
    <Link
      href={item.href}
      aria-current={active ? 'page' : undefined}
      className={cn(
        'flex h-8 items-center rounded-lg px-2 text-sm transition-colors duration-150',
        active
          ? 'bg-interactive-hover font-medium text-emphasis'
          : 'text-default hover:bg-interactive hover:text-emphasis'
      )}
    >
      {item.title}
    </Link>
  )
}

function NavSectionBlock({ section, pathname }: { section: NavSection; pathname: string }) {
  const containsCurrent = section.items.some((item) => pathname === item.href)
  const [override, setOverride] = useState<boolean | null>(null)
  const [syncedPath, setSyncedPath] = useState(pathname)

  if (syncedPath !== pathname) {
    setSyncedPath(pathname)
    setOverride(null)
  }

  const open = !section.collapsible || (override ?? containsCurrent)

  const list = (
    <ul className={cn('flex flex-col gap-0.5', section.collapsible && 'ml-2 border-l border-gray-a3 pl-2')}>
      {section.items.map((item) => (
        <li key={item.href}>
          <NavLink item={item} pathname={pathname} />
        </li>
      ))}
    </ul>
  )

  if (!section.collapsible) {
    return (
      <div className="mb-6">
        <p className="mb-1 px-2 text-xs font-medium text-gray-10">{section.title}</p>
        {list}
      </div>
    )
  }

  return (
    <div className={open ? 'mb-2' : 'mb-0.5'}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOverride(!open)}
        className={cn(
          'flex h-8 w-full cursor-pointer items-center justify-between rounded-lg px-2 text-left text-sm text-default hover:bg-interactive hover:text-emphasis',
          open && 'mb-1'
        )}
      >
        {section.title}
        <ChevronRight aria-hidden className={cn('size-3.5 transition-transform duration-150', open && 'rotate-90')} />
      </button>
      {open ? list : null}
    </div>
  )
}
