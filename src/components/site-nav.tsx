'use client'

import { brandBrief, navigation, type NavItem, type NavSection } from '@/lib/navigation'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export function SiteNav() {
  const pathname = usePathname()

  return (
    <div className="border-line bg-bone lg:sticky lg:top-0 lg:h-dvh lg:overflow-y-auto lg:border-r">
      <div className="flex items-center gap-3 border-b border-line px-6 py-5 lg:border-b-0">
        <Link href="/" className="flex items-center gap-3 no-underline">
          {/* eslint-disable-next-line @next/next/no-img-element -- SVG lockup, nothing to optimise */}
          <img src="/brand/dylo-logo-horizontal.svg" alt="dylo" className="h-[22px]" />
          <span className="font-mono text-[10px] tracking-eyebrow text-concrete uppercase">Design</span>
        </Link>
      </div>

      <nav aria-label="Design system" className="px-6 pt-2 pb-6">
        <div className="mb-7">
          <NavLink item={brandBrief} pathname={pathname} />
        </div>

        {navigation.map((section) => (
          <NavSectionBlock key={section.title} section={section} pathname={pathname} />
        ))}
      </nav>
    </div>
  )
}

function NavLink({ item, pathname }: { item: NavItem; pathname: string }) {
  const active = pathname === item.href

  return (
    <Link
      href={item.href}
      aria-current={active ? 'page' : undefined}
      className={cn(
        '-mx-2 block rounded-sm px-2 py-1.5 text-[14px] no-underline transition-colors duration-150 ease-out',
        active ? 'bg-ink font-medium text-bone' : 'text-graphite hover:bg-ink/6'
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

  const open = override ?? containsCurrent

  const heading = (
    <span className="font-mono text-[10px] font-bold tracking-eyebrow text-concrete uppercase">{section.title}</span>
  )

  const list = (
    <ul className="m-0 list-none space-y-0.5 p-0">
      {section.items.map((item) => (
        <li key={item.href}>
          <NavLink item={item} pathname={pathname} />
        </li>
      ))}
    </ul>
  )

  if (!section.collapsible) {
    return (
      <div className="mb-7">
        <p className="mb-3">{heading}</p>
        {list}
      </div>
    )
  }

  return (
    <div className={open ? 'mb-7' : 'mb-4'}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOverride(!open)}
        className={cn(
          '-mx-2 flex w-[calc(100%+1rem)] items-center justify-between rounded-sm px-2 py-1 text-left hover:bg-ink/6',
          open && 'mb-3'
        )}
      >
        {heading}
        <ChevronDown
          aria-hidden
          strokeWidth={2}
          className={cn('size-3.5 text-concrete transition-transform duration-150 ease-out', open && 'rotate-180')}
        />
      </button>
      {open ? list : null}
    </div>
  )
}
