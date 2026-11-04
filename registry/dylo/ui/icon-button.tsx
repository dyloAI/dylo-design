import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from 'radix-ui'
import * as React from 'react'

/**
 * A square action that holds one icon: row menus, copy, close, toolbar
 * export. Always give it an `aria-label`.
 */
const iconButtonVariants = cva(
  [
    'inline-flex shrink-0 cursor-pointer items-center justify-center select-none',
    'border text-default transition-colors duration-200 ease-in-out',
    'not-disabled:hover:bg-interactive-hover not-disabled:hover:text-emphasis',
    'aria-expanded:bg-interactive-hover data-[state=open]:bg-interactive-hover',
    'ring-focus focus-visible:ring-2 focus-visible:outline-hidden',
    'disabled:cursor-not-allowed disabled:opacity-70',
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ],
  {
    variants: {
      variant: {
        ghost: 'border-transparent bg-transparent',
        outline: 'border-slate-6 bg-transparent',
        secondary: 'border-interactive bg-interactive',
      },
      size: {
        xs: 'size-6 rounded-lg',
        sm: 'size-8 rounded-lg',
        md: 'size-10 rounded-xl',
      },
    },
    defaultVariants: {
      variant: 'ghost',
      size: 'sm',
    },
  }
)

export interface IconButtonProps extends React.ComponentProps<'button'>, VariantProps<typeof iconButtonVariants> {
  asChild?: boolean
}

export function IconButton({ className, variant, size, asChild = false, type = 'button', ...props }: IconButtonProps) {
  const Comp = asChild ? Slot.Root : 'button'
  return (
    <Comp
      data-slot="icon-button"
      type={asChild ? undefined : type}
      className={cn(iconButtonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { iconButtonVariants }
