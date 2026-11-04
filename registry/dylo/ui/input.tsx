import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

/**
 * The text field. Translucent gray fill and hairline by default; `glass` is
 * the larger frosted field of the auth screens. Pass `leading` or `trailing`
 * for an icon, a prefix or an IconButton inside the field.
 */
const inputVariants = cva(
  [
    'peer relative w-full min-w-0 appearance-none border text-emphasis outline-hidden',
    'transition duration-200 ease-in-out placeholder:text-placeholder',
    'ring-focus focus-visible:ring-2',
    'disabled:cursor-not-allowed disabled:text-default disabled:opacity-70',
    'data-[state=read-only]:cursor-default data-[state=read-only]:bg-interactive-hover data-[state=read-only]:focus-visible:ring-0',
    'data-[state=invalid]:border-error data-[state=invalid]:bg-error data-[state=invalid]:ring-error',
    'file:mr-3 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-emphasis',
  ],
  {
    variants: {
      variant: {
        default: 'border-interactive bg-interactive',
        glass: 'border-2 glass ring-gray-a4 focus-visible:ring-1',
      },
      size: {
        sm: 'h-8 rounded-xl px-3 text-sm',
        md: 'h-10 rounded-xl px-3 text-sm',
        lg: 'h-12 rounded-2xl px-4 text-sm',
      },
    },
    defaultVariants: { variant: 'default', size: 'sm' },
  }
)

export interface InputProps extends Omit<React.ComponentProps<'input'>, 'size'>, VariantProps<typeof inputVariants> {
  invalid?: boolean
  leading?: React.ReactNode
  trailing?: React.ReactNode
}

export function Input({ className, variant, size, invalid, readOnly, leading, trailing, ...props }: InputProps) {
  const state = invalid ? 'invalid' : readOnly ? 'read-only' : undefined
  const input = (
    <input
      data-slot="input"
      data-state={state}
      aria-invalid={invalid || undefined}
      readOnly={readOnly}
      className={cn(inputVariants({ variant, size }), leading && 'pl-8', trailing && 'pr-9', className)}
      {...props}
    />
  )

  if (!leading && !trailing) return input

  return (
    <div data-slot="input-group" className="relative flex w-full items-center">
      {leading ? (
        <span className="pointer-events-none absolute left-2.5 z-10 flex items-center text-default [&_svg]:size-4">
          {leading}
        </span>
      ) : null}
      {input}
      {trailing ? (
        <span className="absolute right-1 z-10 flex items-center gap-0.5 text-default">{trailing}</span>
      ) : null}
    </div>
  )
}

export { inputVariants }
