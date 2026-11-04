import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { ChevronRight } from 'lucide-react'
import { Slot } from 'radix-ui'
import * as React from 'react'

/**
 * The marketing call to action. `glass` is a translucent pane with a 2px
 * hairline that fills solid and gains a soft glow on hover; `ghost` is the
 * quiet secondary beside it. Use it on marketing pages and auth screens, not
 * inside the product, where Button is the control.
 */
const ctaButtonVariants = cva(
  [
    'group relative inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap select-none',
    'font-semibold transition-all duration-200 ease-in-out',
    'focus-visible:ring-4 focus-visible:outline-hidden',
    'disabled:cursor-not-allowed disabled:opacity-30',
  ],
  {
    variants: {
      variant: {
        glass: [
          'glass shadow-sm ring-gray-a4',
          'not-disabled:hover:bg-(--dylo-glass-hover-fill) not-disabled:hover:text-(--dylo-glass-hover-text) not-disabled:hover:shadow-glow',
          'focus-visible:bg-(--dylo-glass-hover-fill) focus-visible:text-(--dylo-glass-hover-text)',
        ],
        ghost: 'border border-transparent bg-transparent text-gray-11 ring-gray-a2 hover:text-gray-12',
      },
      size: {
        md: 'h-10 gap-1 rounded-2xl px-4 text-sm',
        lg: 'h-12 gap-1 rounded-2xl px-5 text-base',
      },
    },
    defaultVariants: {
      variant: 'glass',
      size: 'lg',
    },
  }
)

export interface CtaButtonProps extends React.ComponentProps<'button'>, VariantProps<typeof ctaButtonVariants> {
  asChild?: boolean
}

export function CtaButton({ className, variant, size, asChild = false, type = 'button', ...props }: CtaButtonProps) {
  const Comp = asChild ? Slot.Root : 'button'
  return (
    <Comp
      data-slot="cta-button"
      type={asChild ? undefined : type}
      className={cn(ctaButtonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

/** The small trailing chevron a CTA carries; it inverts with the hover fill. */
export function CtaArrow({ className }: { className?: string }) {
  return (
    <ChevronRight
      aria-hidden
      strokeWidth={2.25}
      className={cn('-mr-1.5 size-3.5 text-gray-9 transition-colors group-hover:text-current', className)}
    />
  )
}

export { ctaButtonVariants }
