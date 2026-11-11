'use client'

import { cn } from '@/lib/utils'
import { Slider as SliderPrimitive } from 'radix-ui'
import * as React from 'react'

/**
 * A range input: a 4px rail, a gradient fill and a 20px thumb that grows on
 * hover. Pass `marks` to label the stops underneath, as the pricing slider does.
 */
export function Slider({
  className,
  marks,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root> & { marks?: React.ReactNode[] }) {
  const values = props.value ?? props.defaultValue ?? [props.min ?? 0]
  return (
    <div data-slot="slider" className={cn('flex w-full flex-col gap-4', className)}>
      <SliderPrimitive.Root
        className="relative flex h-5 w-full touch-none items-center select-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50"
        {...props}
      >
        <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-gray-a3">
          <SliderPrimitive.Range className="absolute h-full rounded-full bg-linear-to-r from-gray-11 to-gray-12" />
        </SliderPrimitive.Track>
        {values.map((_, i) => (
          <SliderPrimitive.Thumb
            key={i}
            className={cn(
              'block size-5 cursor-grab rounded-full bg-gray-12 shadow-sm outline-hidden transition-transform active:cursor-grabbing',
              'ring-gray-a4 hover:scale-110 focus-visible:ring-3'
            )}
          />
        ))}
      </SliderPrimitive.Root>
      {marks?.length ? (
        <div className="pointer-events-none flex justify-between px-[0.5625rem]">
          {marks.map((mark, i) => (
            <span
              key={i}
              className="flex w-0 flex-col items-center justify-center text-xs whitespace-nowrap text-gray-11"
            >
              {mark}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  )
}
