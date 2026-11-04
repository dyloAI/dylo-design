import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import * as React from 'react'

/**
 * The footer of a list: "1-40 of 1,204" on the left, previous and next on the
 * right. Pass hrefs for links, or onPrevious / onNext for buttons.
 */
export function Pagination({
  className,
  from,
  to,
  total,
  previousHref,
  nextHref,
  onPrevious,
  onNext,
}: {
  className?: string
  from: number
  to: number
  total: number
  previousHref?: string
  nextHref?: string
  onPrevious?: () => void
  onNext?: () => void
}) {
  const fmt = (n: number) => n.toLocaleString('en-US')
  const hasPrev = from > 1
  const hasNext = to < total
  const control =
    'inline-flex size-8 items-center justify-center rounded-lg border border-gray-a3 text-default transition-colors hover:bg-interactive-hover hover:text-emphasis focus-visible:ring-2 ring-focus focus-visible:outline-hidden aria-disabled:pointer-events-none aria-disabled:opacity-40'

  const item = (
    href: string | undefined,
    onClick: (() => void) | undefined,
    enabled: boolean,
    label: string,
    children: React.ReactNode
  ) =>
    href ? (
      <a href={enabled ? href : undefined} aria-label={label} aria-disabled={!enabled} className={control}>
        {children}
      </a>
    ) : (
      <button
        type="button"
        onClick={onClick}
        aria-label={label}
        aria-disabled={!enabled}
        disabled={!enabled}
        className={cn(control, 'cursor-pointer')}
      >
        {children}
      </button>
    )

  return (
    <nav
      data-slot="pagination"
      aria-label="Pagination"
      className={cn('flex items-center justify-between gap-4 py-3', className)}
    >
      <p className="text-sm text-default">
        <span className="text-emphasis">
          {fmt(from)}-{fmt(to)}
        </span>{' '}
        of {fmt(total)}
      </p>
      <div className="flex items-center gap-1.5">
        {item(previousHref, onPrevious, hasPrev, 'Previous page', <ChevronLeft className="size-4" />)}
        {item(nextHref, onNext, hasNext, 'Next page', <ChevronRight className="size-4" />)}
      </div>
    </nav>
  )
}
