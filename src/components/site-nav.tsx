'use client'

import { navigation } from '@/lib/navigation'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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

      <nav aria-label="Design system" className="px-6 pt-2 pb-10">
        {navigation.map((section) => (
          <div key={section.title} className="mb-7">
            <p className="mb-3 font-mono text-[10px] font-bold tracking-eyebrow text-concrete uppercase">
              {section.title}
            </p>
            <ul className="m-0 list-none space-y-0.5 p-0">
              {section.items.map((item) => {
                const active = pathname === item.href
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        '-mx-2 block rounded-sm px-2 py-1.5 text-[14px] no-underline transition-colors',
                        active ? 'bg-ink font-medium text-bone' : 'text-graphite hover:bg-ink/6'
                      )}
                    >
                      {item.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  )
}
