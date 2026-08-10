import { cn } from '@/lib/utils'
import * as React from 'react'

export interface InputProps extends React.ComponentProps<'input'> {
  /** Mono uppercase label above the field. */
  label?: React.ReactNode
  /** Muted mono note below the field. */
  hint?: React.ReactNode
  /** Classes for the wrapping label element. */
  containerClassName?: string
}

/**
 * Text field with a mono uppercase label and the oxide focus ring — the one
 * translucent touch in an otherwise flat, opaque system.
 *
 * The field is wrapped in its <label> rather than linked by id, so it needs no
 * generated ids and stays a Server Component.
 */
export function Input({ className, containerClassName, label, hint, ...props }: InputProps) {
  return (
    <label data-slot="input-field" className={cn('flex flex-col gap-[7px]', containerClassName)}>
      {label && (
        <span className="font-mono text-[11px] font-bold tracking-[0.14em] text-concrete uppercase">{label}</span>
      )}
      <input
        data-slot="input"
        className={cn(
          'rounded-sm border border-ink bg-paper px-[13px] py-[11px] text-[15px] text-ink',
          'placeholder:text-concrete',
          'transition-[border-color,box-shadow] duration-[120ms] ease-out',
          'focus:border-oxide focus:ring-[3px] focus:ring-oxide/16 focus:outline-none',
          'disabled:cursor-not-allowed disabled:bg-bone disabled:opacity-60',
          className
        )}
        {...props}
      />
      {hint && <span className="font-mono text-[11px] tracking-[0.02em] text-concrete">{hint}</span>}
    </label>
  )
}
