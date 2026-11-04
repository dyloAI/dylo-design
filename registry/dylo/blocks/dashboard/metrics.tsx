'use client'

import { Card } from '@/registry/dylo/ui/card'
import { AreaChart, BarChart, Stat } from '@/registry/dylo/ui/chart'
import { DateRangePicker } from '@/registry/dylo/ui/date-range-picker'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/registry/dylo/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/registry/dylo/ui/tabs'
import { Toolbar, ToolbarItem } from '@/registry/dylo/ui/toolbar'
import * as React from 'react'
import { deliverabilitySeries, sentSeries } from './data'
import { PageHeader } from './shell'

function MetricCard({
  label,
  value,
  delta,
  trend,
  children,
}: {
  label: string
  value: string
  delta?: string
  trend?: 'up' | 'down' | 'flat'
  children: React.ReactNode
}) {
  return (
    <Card className="gap-6 p-5">
      <Stat label={label} value={value} delta={delta} trend={trend} />
      {children}
    </Card>
  )
}

/** Metrics: volume, deliverability and engagement over a chosen range. */
export function MetricsPage() {
  const bounces = sentSeries.map((p, i) => ({ label: p.label, value: Math.round((i % 7) * 3 + 4) }))
  const opens = sentSeries.map((p) => ({ label: p.label, value: Math.round(p.value * 0.46) }))
  return (
    <Tabs defaultValue="sending">
      <PageHeader title="Metrics" />
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <TabsList>
          <TabsTrigger value="sending">Sending</TabsTrigger>
          <TabsTrigger value="receiving">Receiving</TabsTrigger>
        </TabsList>
        <Toolbar>
          <ToolbarItem>
            <DateRangePicker />
          </ToolbarItem>
          <ToolbarItem className="sm:w-40">
            <Select defaultValue="all">
              <SelectTrigger aria-label="Domain">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All domains</SelectItem>
                <SelectItem value="acme">acme.dev</SelectItem>
                <SelectItem value="northwind">mail.northwind.dev</SelectItem>
              </SelectContent>
            </Select>
          </ToolbarItem>
        </Toolbar>
      </div>
      <TabsContent value="sending" className="flex flex-col gap-4">
        <MetricCard label="Emails sent" value="34,812" delta="+12.4% on the previous 30 days" trend="up">
          <AreaChart data={sentSeries} height={200} />
        </MetricCard>
        <div className="grid gap-4 md:grid-cols-2">
          <MetricCard label="Deliverability rate" value="97.8%" delta="+0.6 points" trend="up">
            <AreaChart data={deliverabilitySeries} className="text-green-9" height={120} showAxis={false} />
          </MetricCard>
          <MetricCard label="Bounce rate" value="1.2%" delta="-0.3 points" trend="up">
            <BarChart data={bounces} className="text-red-9" height={120} />
          </MetricCard>
          <MetricCard label="Open rate" value="46.1%" delta="No change" trend="flat">
            <BarChart data={opens} height={120} />
          </MetricCard>
          <MetricCard label="Complaint rate" value="0.02%" delta="+0.01 points" trend="down">
            <AreaChart data={bounces} className="text-amber-9" height={120} showAxis={false} />
          </MetricCard>
        </div>
      </TabsContent>
      <TabsContent value="receiving" className="flex flex-col gap-4">
        <MetricCard label="Emails received" value="1,284" delta="+4.1% on the previous 30 days" trend="up">
          <AreaChart data={opens} height={200} />
        </MetricCard>
      </TabsContent>
    </Tabs>
  )
}
