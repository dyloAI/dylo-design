import { cn } from '@/lib/utils'
import * as React from 'react'

/**
 * What a list shows before it has rows: an icon tile, a title, one sentence
 * and the action that fills it. Sits on the faint canvas grid.
 */
export function EmptyState({
  className,
  icon,
  title,
  description,
  action,
  ...props
}: Omit<React.ComponentProps<'div'>, 'title'> & {
  icon?: React.ReactNode
  title: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode
}) {
  return (
    <div
      data-slot="empty-state"
      className={cn(
        'relative flex flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border border-dashed border-gray-a4 px-6 py-16 text-center',
        className
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 grid-canvas [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      {icon ? (
        <div className="relative flex size-12 items-center justify-center rounded-xl border border-gray-a4 bg-linear-to-b from-gray-a2 to-transparent text-emphasis [&_svg]:size-5">
          {icon}
        </div>
      ) : null}
      <div className="relative flex max-w-sm flex-col gap-1">
        <p className="font-display effect-font-styling text-lg font-medium text-emphasis">{title}</p>
        {description ? <p className="text-sm text-default">{description}</p> : null}
      </div>
      {action ? <div className="relative flex items-center gap-2">{action}</div> : null}
    </div>
  )
}
