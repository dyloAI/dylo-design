import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from 'radix-ui'
import * as React from 'react'

/**
 * The interface action. `primary` is the solid accent (black in light, white
 * in dark), `secondary` the translucent gray control, `ghost` text only.
 * The default size is the 32px control the dashboard is built from.
 */
const buttonVariants = cva(
  [
    'relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none',
    'border transition duration-200 ease-in-out',
    'focus-visible:ring-2 focus-visible:outline-hidden',
    'disabled:cursor-not-allowed disabled:opacity-70 aria-disabled:cursor-not-allowed aria-disabled:opacity-70',
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ],
  {
    variants: {
      variant: {
        primary: [
          'border-transparent bg-accent font-semibold text-on-accent ring-accent',
          'not-disabled:hover:bg-accent-hover focus-visible:bg-accent-hover',
        ],
        secondary: [
          'border-interactive bg-interactive font-medium text-default ring-focus [&_svg]:text-default',
          'not-disabled:hover:bg-interactive-hover not-disabled:hover:text-emphasis aria-expanded:bg-interactive-hover data-[state=open]:bg-interactive-hover',
        ],
        ghost: [
          'border-transparent bg-transparent font-medium text-default ring-focus [&_svg]:text-default',
          'not-disabled:hover:bg-interactive-hover not-disabled:hover:text-emphasis aria-expanded:bg-interactive-hover data-[state=open]:bg-interactive-hover',
        ],
        destructive: [
          'border-error-subtle bg-error font-semibold text-error ring-error',
          'not-disabled:hover:bg-error-hover',
        ],
      },
      size: {
        xs: 'h-6 gap-1 rounded-lg px-2 text-xs',
        sm: 'h-8 gap-1 rounded-xl px-3 text-sm',
        md: 'h-10 gap-1.5 rounded-xl px-4 text-sm',
        lg: 'h-12 gap-2 rounded-2xl px-5 text-base',
      },
    },
    defaultVariants: {
      variant: 'secondary',
      size: 'sm',
    },
  }
)

/** The three-dot loading indicator Buttons show while `loading`. */
export function LoadingDots({ className }: { className?: string }) {
  return (
    <span data-slot="loading-dots" aria-hidden className={cn('inline-flex items-center gap-1', className)}>
      <span className="size-1 animate-plop rounded-full bg-current" />
      <span className="size-1 animate-plop2 rounded-full bg-current" />
      <span className="size-1 animate-plop3 rounded-full bg-current" />
    </span>
  )
}

export interface ButtonProps extends React.ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  /** Render the child element (a link, usually) with the button's styles. */
  asChild?: boolean
  /** Keeps the width, hides the label and shows the loading dots. */
  loading?: boolean
}

export function Button({
  className,
  variant,
  size,
  asChild = false,
  loading = false,
  disabled,
  type = 'button',
  children,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className)

  if (asChild) {
    return (
      <Slot.Root data-slot="button" className={classes} {...props}>
        {children}
      </Slot.Root>
    )
  }

  return (
    <button
      data-slot="button"
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={classes}
      {...props}
    >
      {loading ? (
        <span className="absolute inset-0 flex items-center justify-center">
          <LoadingDots />
        </span>
      ) : null}
      <span className={cn('inline-flex min-w-0 items-center justify-center gap-[inherit]', loading && 'opacity-0')}>
        {children}
      </span>
    </button>
  )
}

export { buttonVariants }
