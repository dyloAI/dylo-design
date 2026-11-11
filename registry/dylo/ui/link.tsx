import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from 'radix-ui'
import * as React from 'react'

/**
 * An inline text link. `emphasis` is the bold link inside secondary copy
 * ("Don't have an account? Sign up"), `underline` the legal-line link,
 * `muted` the footer and navigation link.
 */
const textLinkVariants = cva(
  'rounded-sm ring-focus outline-hidden transition-colors duration-150 ease-in-out focus-visible:ring-2',
  {
    variants: {
      variant: {
        emphasis: 'font-semibold text-gray-12 hover:text-gray-11',
        underline: 'text-gray-11 underline underline-offset-2 hover:no-underline',
        muted: 'text-default hover:text-emphasis focus-visible:text-emphasis',
        dotted: 'cursor-help text-emphasis underline decoration-dotted underline-offset-2',
      },
    },
    defaultVariants: { variant: 'emphasis' },
  }
)

export interface TextLinkProps extends React.ComponentProps<'a'>, VariantProps<typeof textLinkVariants> {
  asChild?: boolean
}

export function TextLink({ className, variant, asChild = false, ...props }: TextLinkProps) {
  const Comp = asChild ? Slot.Root : 'a'
  return <Comp data-slot="text-link" className={cn(textLinkVariants({ variant }), className)} {...props} />
}

export { textLinkVariants }
