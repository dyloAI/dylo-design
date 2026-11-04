'use client'

import { CodeBlock } from '@/registry/dylo/ui/code-block'
import { DateRangePicker } from '@/registry/dylo/ui/date-range-picker'
import { Pagination } from '@/registry/dylo/ui/pagination'
import { SearchField } from '@/registry/dylo/ui/search'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/registry/dylo/ui/select'
import { Sheet, SheetBody, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/registry/dylo/ui/sheet'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/registry/dylo/ui/table'
import { Toolbar, ToolbarItem } from '@/registry/dylo/ui/toolbar'
import * as React from 'react'
import { logs as sampleLogs, type LogRow } from './data'
import { DetailGrid, DetailItem } from './parts'
import { PageHeader } from './shell'
import { HttpStatusBadge, MethodLabel } from './status'

/** One request, opened from the logs list in a right-hand sheet. */
export function LogSheet({
  log,
  open,
  onOpenChange,
}: {
  log: LogRow | null
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="sm:max-w-xl">
        {log ? (
          <>
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2">
                <MethodLabel method={log.method} />
                <span className="font-mono text-sm">{log.endpoint}</span>
              </SheetTitle>
              <SheetDescription>{log.at}</SheetDescription>
            </SheetHeader>
            <SheetBody className="flex flex-col gap-8 pt-5">
              <DetailGrid className="sm:grid-cols-2">
                <DetailItem label="Status">
                  <HttpStatusBadge code={log.status} />
                </DetailItem>
                <DetailItem label="User agent" mono>
                  {log.userAgent}
                </DetailItem>
                <DetailItem label="ID" mono copy={`log_${log.id}_3f9a2c`}>
                  log_{log.id}_3f9a2c
                </DetailItem>
                <DetailItem label="API key">Production</DetailItem>
              </DetailGrid>
              <CodeBlock
                samples={[
                  {
                    label: 'Request body',
                    code: `{
  "from": "Acme <hello@acme.dev>",
  "to": ["maria@northwind.dev"],
  "subject": "Your quote is ready"
}`,
                  },
                ]}
              />
              <CodeBlock
                samples={[
                  {
                    label: 'Response body',
                    code:
                      log.status < 300
                        ? `{\n  "id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c"\n}`
                        : `{\n  "statusCode": ${log.status},\n  "name": "validation_error",\n  "message": "The \`to\` field is required."\n}`,
                  },
                ]}
              />
            </SheetBody>
          </>
        ) : null}
      </SheetContent>
    </Sheet>
  )
}

/** Logs: every API request, filterable by status, method and key. */
export function LogsPage({ rows = sampleLogs }: { rows?: LogRow[] }) {
  const [open, setOpen] = React.useState<LogRow | null>(null)
  return (
    <>
      <PageHeader title="Logs" />
      <Toolbar className="mb-4">
        <SearchField placeholder="Search endpoint..." />
        <ToolbarItem>
          <DateRangePicker />
        </ToolbarItem>
        <ToolbarItem className="sm:w-36">
          <Select defaultValue="all">
            <SelectTrigger aria-label="Status">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All statuses</SelectItem>
              <SelectItem value="2xx">2xx</SelectItem>
              <SelectItem value="4xx">4xx</SelectItem>
              <SelectItem value="5xx">5xx</SelectItem>
            </SelectContent>
          </Select>
        </ToolbarItem>
        <ToolbarItem className="sm:w-36">
          <Select defaultValue="all">
            <SelectTrigger aria-label="Method">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All methods</SelectItem>
              {['GET', 'POST', 'PATCH', 'DELETE'].map((m) => (
                <SelectItem key={m} value={m}>
                  {m}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </ToolbarItem>
      </Toolbar>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[45%]">Endpoint</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>User agent</TableHead>
            <TableHead className="text-right">Created</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <button
                  type="button"
                  onClick={() => setOpen(row)}
                  className="flex cursor-pointer items-center rounded-lg text-left ring-focus outline-hidden focus-visible:ring-2"
                >
                  <MethodLabel method={row.method} />
                  <span className="font-mono text-xs text-emphasis">{row.endpoint}</span>
                </button>
              </TableCell>
              <TableCell>
                <HttpStatusBadge code={row.status} />
              </TableCell>
              <TableCell className="font-mono text-xs">{row.userAgent}</TableCell>
              <TableCell className="text-right text-default">{row.at}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination className="mt-4" from={1} to={rows.length} total={8312} onPrevious={() => {}} onNext={() => {}} />
      <LogSheet log={open} open={open !== null} onOpenChange={(o) => !o && setOpen(null)} />
    </>
  )
}
