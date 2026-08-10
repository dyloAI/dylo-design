import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

/**
 * The mono section label with an oxide tick. It sits above almost every
 * headline and is the brand's most recognizable device.
 *
 * The tick is the accent, so a view with an Eyebrow has already spent its one
 * oxide note — don't add a second.
 */
const eyebrowVariants = cva(
  'inline-flex items-center gap-[11px] font-mono text-[12px] font-bold tracking-eyebrow uppercase',
  {
    variants: {
      tone: {
        dark: 'text-concrete',
        light: 'text-bone',
      },
    },
    defaultVariants: {
      tone: 'dark',
    },
  }
)

export interface EyebrowProps extends React.ComponentProps<'span'>, VariantProps<typeof eyebrowVariants> {
  /** Show the oxide square. Default true. */
  tick?: boolean
}

export function Eyebrow({ className, tone, tick = true, children, ...props }: EyebrowProps) {
  return (
    <span data-slot="eyebrow" className={cn(eyebrowVariants({ tone }), className)} {...props}>
      {tick && <span aria-hidden="true" className="inline-block size-[10px] flex-none bg-oxide" />}
      {children}
    </span>
  )
}

export { eyebrowVariants }
