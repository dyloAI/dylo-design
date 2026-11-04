import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
import * as React from 'react'

/** The trail above a detail page: Domains > example.com. */
export function Breadcrumb({
  className,
  items,
}: {
  className?: string
  items: { label: React.ReactNode; href?: string }[]
}) {
  return (
    <nav data-slot="breadcrumb" aria-label="Breadcrumb" className={cn('text-sm', className)}>
      <ol className="flex flex-wrap items-center gap-1.5 text-default">
        {items.map((item, i) => {
          const last = i === items.length - 1
          return (
            <li key={i} className="inline-flex items-center gap-1.5">
              {item.href && !last ? (
                <a
                  href={item.href}
                  className="rounded-sm ring-focus transition-colors hover:text-emphasis focus-visible:ring-2 focus-visible:outline-hidden"
                >
                  {item.label}
                </a>
              ) : (
                <span aria-current={last ? 'page' : undefined} className={cn(last && 'text-emphasis')}>
                  {item.label}
                </span>
              )}
              {!last ? <ChevronRight aria-hidden className="size-3.5 text-gray-8" /> : null}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
