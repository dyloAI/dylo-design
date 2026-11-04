import { cn } from '@/lib/utils'
import * as React from 'react'

/**
 * Lightweight SVG charts for metrics: no chart library, server-rendered.
 * Series colour comes from `currentColor`, so set it with a text utility
 * (text-gray-12 for the main series, text-green-9 for deliverability).
 */

type Point = { label: string; value: number }

function scale(points: Point[], height: number) {
  const max = Math.max(1, ...points.map((p) => p.value))
  return (v: number) => height - (v / max) * height
}

/** A smooth area chart with a faint fill and dashed gridlines. */
export function AreaChart({
  data,
  className,
  height = 160,
  showAxis = true,
}: {
  data: Point[]
  className?: string
  height?: number
  showAxis?: boolean
}) {
  const width = 600
  const y = scale(data, height - 8)
  const step = data.length > 1 ? width / (data.length - 1) : width
  const pts = data.map((p, i) => [i * step, y(p.value) + 4] as const)
  const line = pts.map(([px, py], i) => `${i === 0 ? 'M' : 'L'}${px.toFixed(1)},${py.toFixed(1)}`).join(' ')
  const area = `${line} L${width},${height} L0,${height} Z`
  const id = React.useId()

  return (
    <div data-slot="area-chart" className={cn('flex w-full flex-col gap-2 text-gray-12', className)}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        className="h-auto w-full overflow-visible"
        style={{ height }}
      >
        <defs>
          <linearGradient id={id} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.18" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75].map((f) => (
          <line
            key={f}
            x1="0"
            x2={width}
            y1={height * f}
            y2={height * f}
            className="stroke-gray-a3"
            strokeDasharray="3 4"
            vectorEffect="non-scaling-stroke"
          />
        ))}
        <path d={area} fill={`url(#${id})`} />
        <path d={line} fill="none" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      </svg>
      {showAxis ? (
        <div className="flex justify-between text-2xs text-gray-10">
          <span>{data[0]?.label}</span>
          <span>{data[Math.floor(data.length / 2)]?.label}</span>
          <span>{data[data.length - 1]?.label}</span>
        </div>
      ) : null}
    </div>
  )
}

/** Vertical bars, 2px rounded, with the label of the first and last bar. */
export function BarChart({ data, className, height = 160 }: { data: Point[]; className?: string; height?: number }) {
  const max = Math.max(1, ...data.map((p) => p.value))
  return (
    <div data-slot="bar-chart" className={cn('flex w-full flex-col gap-2 text-gray-12', className)}>
      <div className="flex items-end gap-1 border-b border-gray-a3" style={{ height }}>
        {data.map((p) => (
          <div
            key={p.label}
            title={`${p.label}: ${p.value.toLocaleString('en-US')}`}
            className="min-w-0 flex-1 rounded-t-[2px] bg-current opacity-80 transition-opacity hover:opacity-100"
            style={{ height: `${Math.max(2, (p.value / max) * 100)}%` }}
          />
        ))}
      </div>
      <div className="flex justify-between text-2xs text-gray-10">
        <span>{data[0]?.label}</span>
        <span>{data[data.length - 1]?.label}</span>
      </div>
    </div>
  )
}

/** A single metric: label, large value, and the change against the last period. */
export function Stat({
  label,
  value,
  delta,
  trend,
  className,
}: {
  label: React.ReactNode
  value: React.ReactNode
  delta?: React.ReactNode
  trend?: 'up' | 'down' | 'flat'
  className?: string
}) {
  return (
    <div data-slot="stat" className={cn('flex flex-col gap-1', className)}>
      <span className="text-sm text-default">{label}</span>
      <span className="font-display effect-font-styling text-[1.75rem] leading-tight font-medium tracking-tight text-emphasis">
        {value}
      </span>
      {delta ? (
        <span
          className={cn(
            'text-xs',
            trend === 'up' && 'text-success',
            trend === 'down' && 'text-error',
            (!trend || trend === 'flat') && 'text-gray-10'
          )}
        >
          {delta}
        </span>
      ) : null}
    </div>
  )
}
