'use client'

import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import * as React from 'react'

function MobileSidebar({
  open,
  onClose,
  children,
}: {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}) {
  React.useEffect(() => {
    if (!open) return
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="lg:hidden" role="dialog" aria-modal="true" aria-label="Navigation">
      <button
        type="button"
        aria-label="Close navigation"
        className="absolute inset-0 z-40 border-0 bg-ink/30"
        onClick={onClose}
      />
      <div className="absolute inset-y-0 left-0 z-50 w-full max-w-80 p-2">
        <div className="flex h-full flex-col rounded-md border border-ink bg-paper shadow-block">
          <div className="-mb-3 px-4 pt-3">
            <button
              type="button"
              aria-label="Close navigation"
              onClick={onClose}
              className="inline-flex size-9 items-center justify-center rounded-sm text-ink hover:bg-ink/5"
            >
              <X data-slot="icon" strokeWidth={2} className="size-5" />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

/**
 * App chrome from dylo-starter: 256px sidebar on desktop, drawer on mobile,
 * content plate inset on large screens. Uses flex (not viewport-fixed) so the
 * shell also previews cleanly inside a framed docs surface.
 */
export function SidebarLayout({
  navbar,
  sidebar,
  children,
  className,
}: {
  navbar: React.ReactNode
  sidebar: React.ReactNode
  children: React.ReactNode
  className?: string
}) {
  const [showSidebar, setShowSidebar] = React.useState(false)

  return (
    <div
      data-slot="sidebar-layout"
      className={cn(
        'relative isolate flex min-h-svh w-full bg-paper max-lg:flex-col lg:bg-bone',
        className
      )}
    >
      <aside className="hidden w-64 shrink-0 lg:flex lg:flex-col">{sidebar}</aside>

      <MobileSidebar open={showSidebar} onClose={() => setShowSidebar(false)}>
        {sidebar}
      </MobileSidebar>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center border-b border-line px-4 lg:hidden">
          <div className="py-2.5">
            <button
              type="button"
              aria-label="Open navigation"
              onClick={() => setShowSidebar(true)}
              className="inline-flex size-9 items-center justify-center rounded-sm text-ink hover:bg-ink/5"
            >
              <Menu data-slot="icon" strokeWidth={2} className="size-5" />
            </button>
          </div>
          <div className="min-w-0 flex-1">{navbar}</div>
        </header>

        <main className="flex flex-1 flex-col pb-2 lg:pt-2 lg:pr-2 lg:pb-2">
          <div className="grow p-6 lg:rounded-md lg:border lg:border-ink lg:bg-paper lg:p-10 lg:shadow-block">
            <div className="mx-auto max-w-6xl">{children}</div>
          </div>
        </main>
      </div>
    </div>
  )
}
