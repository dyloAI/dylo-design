'use client'

import { cn } from '@/lib/utils'
import { CircleAlert, CircleCheck, Info, X } from 'lucide-react'
import { Toast as ToastPrimitive } from 'radix-ui'
import * as React from 'react'

/**
 * Transient confirmation at the bottom right: "API key copied", "Domain
 * added". Mount <Toaster /> once, then call `toast()` from anywhere.
 */
type Tone = 'neutral' | 'success' | 'error' | 'info'
type ToastItem = { id: number; title: React.ReactNode; description?: React.ReactNode; tone: Tone }

let items: ToastItem[] = []
let nextId = 1
const listeners = new Set<() => void>()
const emit = () => listeners.forEach((l) => l())

export function toast(title: React.ReactNode, options: { description?: React.ReactNode; tone?: Tone } = {}) {
  items = [...items, { id: nextId++, title, description: options.description, tone: options.tone ?? 'neutral' }]
  emit()
}

function dismiss(id: number) {
  items = items.filter((t) => t.id !== id)
  emit()
}

const subscribe = (l: () => void) => {
  listeners.add(l)
  return () => listeners.delete(l)
}

const icons: Record<Tone, React.ReactNode> = {
  neutral: null,
  success: <CircleCheck className="size-4 text-success" />,
  error: <CircleAlert className="size-4 text-error" />,
  info: <Info className="size-4 text-info" />,
}

export function Toaster({ duration = 4000 }: { duration?: number }) {
  const list = React.useSyncExternalStore(
    subscribe,
    () => items,
    () => items
  )

  return (
    <ToastPrimitive.Provider duration={duration} swipeDirection="right">
      {list.map((t) => (
        <ToastPrimitive.Root
          key={t.id}
          onOpenChange={(open) => !open && dismiss(t.id)}
          className={cn(
            'group relative flex w-full items-start gap-2.5 rounded-xl bg-overlay p-3 pr-9 text-emphasis shadow-popover backdrop-blur-xl',
            'data-[state=closed]:animate-fade-out data-[state=open]:animate-slide-up-fade',
            'data-[swipe=end]:animate-fade-out data-[swipe=move]:translate-x-(--radix-toast-swipe-move-x)'
          )}
        >
          {icons[t.tone] ? <span className="mt-0.5">{icons[t.tone]}</span> : null}
          <div className="flex flex-col gap-0.5">
            <ToastPrimitive.Title className="text-sm font-medium">{t.title}</ToastPrimitive.Title>
            {t.description ? (
              <ToastPrimitive.Description className="text-sm text-default">{t.description}</ToastPrimitive.Description>
            ) : null}
          </div>
          <ToastPrimitive.Close
            aria-label="Dismiss"
            className="absolute top-2.5 right-2.5 inline-flex size-5 cursor-pointer items-center justify-center rounded-md text-default hover:bg-interactive-hover hover:text-emphasis"
          >
            <X className="size-3.5" />
          </ToastPrimitive.Close>
        </ToastPrimitive.Root>
      ))}
      <ToastPrimitive.Viewport
        aria-label="Notifications"
        className="fixed right-0 bottom-0 z-[100] flex w-full max-w-sm flex-col gap-2 p-4 outline-hidden"
      />
    </ToastPrimitive.Provider>
  )
}
