'use client'

import { cn } from '@/lib/utils'
import { Monitor, Moon, Sun } from 'lucide-react'
import * as React from 'react'

type Theme = 'light' | 'dark' | 'system'

function apply(theme: Theme) {
  const dark = theme === 'dark' || (theme === 'system' && matchMedia('(prefers-color-scheme: dark)').matches)
  document.documentElement.classList.toggle('dark', dark)
  document.documentElement.style.colorScheme = dark ? 'dark' : 'light'
}

function subscribe(onChange: () => void) {
  window.addEventListener('storage', onChange)
  window.addEventListener('dylo-theme', onChange)
  return () => {
    window.removeEventListener('storage', onChange)
    window.removeEventListener('dylo-theme', onChange)
  }
}

const read = (): Theme => (localStorage.getItem('theme') as Theme | null) ?? 'dark'

/** Light, dark or system. The choice is stored and applied before paint by the layout script. */
export function ThemeToggle({ className }: { className?: string }) {
  const theme = React.useSyncExternalStore(subscribe, read, () => 'dark' as Theme)

  React.useEffect(() => {
    if (theme !== 'system') return
    const mq = matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => apply('system')
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [theme])

  const set = (next: Theme) => {
    localStorage.setItem('theme', next)
    apply(next)
    window.dispatchEvent(new Event('dylo-theme'))
  }

  const options: { value: Theme; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'system', label: 'System', icon: Monitor },
  ]

  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      className={cn('inline-flex items-center gap-0.5 rounded-xl border border-gray-a3 p-0.5', className)}
    >
      {options.map(({ value, label, icon: Icon }) => (
        <button
          key={value}
          type="button"
          role="radio"
          aria-checked={theme === value}
          aria-label={label}
          title={label}
          onClick={() => set(value)}
          className={cn(
            'inline-flex size-7 cursor-pointer items-center justify-center rounded-lg text-default ring-focus outline-hidden transition-colors focus-visible:ring-2',
            theme === value ? 'bg-interactive-hover text-emphasis' : 'hover:text-emphasis'
          )}
        >
          <Icon className="size-3.5" />
        </button>
      ))}
    </div>
  )
}
