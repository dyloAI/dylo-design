'use client'

import { cn } from '@/lib/utils'
import * as React from 'react'

export function CopyButton({ value, className }: { value: string; className?: string }) {
  const [copied, setCopied] = React.useState(false)

  React.useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 1600)
    return () => clearTimeout(timer)
  }, [copied])

  return (
    <button
      type="button"
      onClick={() => {
        void navigator.clipboard.writeText(value).then(() => setCopied(true))
      }}
      className={cn(
        'border-line text-concrete hover:text-ink hover:border-concrete rounded-sm border px-2 py-1',
        'font-mono text-[10px] tracking-eyebrow uppercase transition-colors',
        'focus-visible:outline-oxide focus-visible:outline-2 focus-visible:outline-offset-2',
        className
      )}
    >
      {copied ? 'Copied' : 'Copy'}
      <span className="sr-only"> {value}</span>
    </button>
  )
}
