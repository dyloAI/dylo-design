'use client'

/* Live examples that need an event handler. Everything else on the
   component pages renders on the server. */

import { Button } from '@/registry/dylo/ui/button'
import { Pagination } from '@/registry/dylo/ui/pagination'
import { Slider } from '@/registry/dylo/ui/slider'
import { toast } from '@/registry/dylo/ui/toast'
import * as React from 'react'

export function ToastExamples() {
  return (
    <>
      <Button onClick={() => toast('API key copied')}>Neutral</Button>
      <Button onClick={() => toast('Domain verified', { description: 'acme.dev can send now.', tone: 'success' })}>
        Success
      </Button>
      <Button
        onClick={() =>
          toast('Export started', { description: 'We will email you the file when it is ready.', tone: 'info' })
        }
      >
        Info
      </Button>
      <Button
        onClick={() => toast('Could not delete the key', { description: 'Try again in a minute.', tone: 'error' })}
      >
        Error
      </Button>
    </>
  )
}

export function LoadingButtonExample() {
  const [loading, setLoading] = React.useState(false)
  return (
    <Button
      variant="primary"
      loading={loading}
      onClick={() => {
        setLoading(true)
        setTimeout(() => setLoading(false), 1600)
      }}
    >
      Save changes
    </Button>
  )
}

export function PaginationExample() {
  const [page, setPage] = React.useState(0)
  const size = 40
  const total = 1204
  return (
    <Pagination
      className="w-full"
      from={page * size + 1}
      to={Math.min(total, (page + 1) * size)}
      total={total}
      onPrevious={() => setPage((p) => Math.max(0, p - 1))}
      onNext={() => setPage((p) => p + 1)}
    />
  )
}

export function SliderExample() {
  const stops = ['3,000', '50,000', '100,000', '200,000', '500,000']
  const [value, setValue] = React.useState([1])
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <p className="text-sm text-default">
        <span className="font-medium text-emphasis">{stops[value[0] ?? 0]}</span> emails a month
      </p>
      <Slider
        min={0}
        max={stops.length - 1}
        step={1}
        value={value}
        onValueChange={setValue}
        marks={stops}
        aria-label="Emails a month"
      />
    </div>
  )
}
