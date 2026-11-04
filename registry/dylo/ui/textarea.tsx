import { cn } from '@/lib/utils'
import * as React from 'react'

/** A multi-line text field with the same fill, hairline and states as Input. */
export function Textarea({ className, invalid, ...props }: React.ComponentProps<'textarea'> & { invalid?: boolean }) {
  return (
    <textarea
      data-slot="textarea"
      data-state={invalid ? 'invalid' : undefined}
      aria-invalid={invalid || undefined}
      className={cn(
        'min-h-24 w-full resize-y rounded-xl border border-interactive bg-interactive px-3 py-2 text-sm text-emphasis outline-hidden',
        'ring-focus transition duration-200 ease-in-out placeholder:text-placeholder focus-visible:ring-2',
        'disabled:cursor-not-allowed disabled:opacity-70',
        'data-[state=invalid]:border-error data-[state=invalid]:bg-error data-[state=invalid]:ring-error',
        className
      )}
      {...props}
    />
  )
}
