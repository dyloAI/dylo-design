'use client'

import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { Avatar as AvatarPrimitive } from 'radix-ui'
import * as React from 'react'

/**
 * A person (round) or a team (rounded square). The fallback shows initials
 * on a tinted tile.
 */
const avatarVariants = cva('relative inline-flex shrink-0 overflow-hidden select-none', {
  variants: {
    shape: { circle: 'rounded-full', square: 'rounded-md' },
    size: { xs: 'size-5 text-2xs', sm: 'size-6 text-xs', md: 'size-8 text-sm', lg: 'size-10 text-base' },
  },
  defaultVariants: { shape: 'circle', size: 'sm' },
})

export interface AvatarProps
  extends React.ComponentProps<typeof AvatarPrimitive.Root>, VariantProps<typeof avatarVariants> {
  src?: string
  alt?: string
  fallback?: React.ReactNode
  tone?: 'gray' | 'blue' | 'green' | 'violet' | 'orange'
}

const tones = {
  gray: 'bg-gray-a4 text-emphasis',
  blue: 'bg-blue-9 text-white',
  green: 'bg-green-9 text-white',
  violet: 'bg-violet-9 text-white',
  orange: 'bg-orange-9 text-white',
}

export function Avatar({ className, shape, size, src, alt = '', fallback, tone = 'gray', ...props }: AvatarProps) {
  return (
    <AvatarPrimitive.Root data-slot="avatar" className={cn(avatarVariants({ shape, size }), className)} {...props}>
      {src ? <AvatarPrimitive.Image src={src} alt={alt} className="size-full object-cover" /> : null}
      <AvatarPrimitive.Fallback
        className={cn('flex size-full items-center justify-center font-medium uppercase', tones[tone])}
      >
        {fallback}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  )
}

/** Overlapping avatars, each ringed in the page colour. */
export function AvatarGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="avatar-group"
      className={cn(
        'flex items-center -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background',
        className
      )}
      {...props}
    />
  )
}
