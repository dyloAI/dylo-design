import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

/** A small floating control on kit pages: back to the docs, and the theme switch. */
export function KitBar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'fixed bottom-12 left-1/2 z-40 flex -translate-x-1/2 items-center gap-1 rounded-2xl border border-gray-a3 bg-overlay p-1 shadow-popover backdrop-blur',
        className
      )}
    >
      <Link
        href="/kits"
        className="inline-flex h-7 items-center gap-1.5 rounded-xl px-2.5 text-xs font-medium text-default transition-colors hover:bg-interactive-hover hover:text-emphasis"
      >
        <ArrowLeft className="size-3.5" />
        All kit pages
      </Link>
      <ThemeToggle className="border-0" />
    </div>
  )
}
