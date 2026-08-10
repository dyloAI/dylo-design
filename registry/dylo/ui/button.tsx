import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

/**
 * Foundry-stamped action. The primary is an ink plate with a hard block shadow
 * that seats on press — the button shifts down and right into its own shadow,
 * like a stamp meeting the page. No bounce, no fade.
 */
const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap',
    'rounded-sm border leading-none font-semibold tracking-[-0.01em]',
    'transition-[transform,box-shadow,background-color] duration-[120ms] ease-out',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oxide',
    'disabled:border-concrete disabled:bg-concrete disabled:text-bone',
    'disabled:cursor-not-allowed disabled:opacity-60 disabled:shadow-none',
    'disabled:translate-x-0 disabled:translate-y-0',
  ],
  {
    variants: {
      variant: {
        primary: [
          'border-ink bg-ink text-bone hover:bg-graphite',
          'shadow-block-sm active:translate-x-[3px] active:translate-y-[3px] active:shadow-block-seated',
        ],
        secondary: [
          'border-ink bg-bone text-ink hover:bg-paper',
          'shadow-block-sm active:translate-x-[3px] active:translate-y-[3px] active:shadow-block-seated',
        ],
        // No plate, so nothing to seat: ghost darkens instead of shifting.
        ghost: 'border-transparent bg-transparent text-ink hover:bg-ink/6',
      },
      size: {
        sm: 'px-[13px] py-[7px] text-[13px]',
        md: 'px-5 py-[11px] text-[15px]',
        lg: 'px-7 py-[15px] text-[17px]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps extends React.ComponentProps<'button'>, VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, type = 'button', ...props }: ButtonProps) {
  return (
    <button data-slot="button" type={type} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  )
}

export { buttonVariants }
