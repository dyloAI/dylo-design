'use client'

import { Badge } from '@/registry/dylo/ui/badge'
import { Breadcrumb } from '@/registry/dylo/ui/breadcrumb'
import { Button } from '@/registry/dylo/ui/button'
import { Card } from '@/registry/dylo/ui/card'
import { CodeBlock } from '@/registry/dylo/ui/code-block'
import { DateRangePicker } from '@/registry/dylo/ui/date-range-picker'
import { EmptyState } from '@/registry/dylo/ui/empty-state'
import { IconButton } from '@/registry/dylo/ui/icon-button'
import { Pagination } from '@/registry/dylo/ui/pagination'
import { SearchField } from '@/registry/dylo/ui/search'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/registry/dylo/ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/registry/dylo/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/registry/dylo/ui/tabs'
import { Toolbar, ToolbarItem } from '@/registry/dylo/ui/toolbar'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/registry/dylo/ui/tooltip'
import { Ban, Braces, Copy, Download, Inbox, Mail, RefreshCw, Send } from 'lucide-react'
import { emailEvents, emails as sampleEmails, type EmailRow, type EmailStatus } from './data'
import { DetailGrid, DetailItem, Recipients, RowActions, SectionHeading } from './parts'
import { PageHeader } from './shell'
import { EmailStatusBadge, EmailStatusTile } from './status'

const statuses: EmailStatus[] = ['delivered', 'bounced', 'complained', 'delayed', 'opened', 'clicked', 'queued', 'sent']

function EmailsToolbar() {
  return (
    <Toolbar className="mb-4">
      <SearchField placeholder="Search..." />
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
            {statuses.map((s) => (
              <SelectItem key={s} value={s}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </ToolbarItem>
      <ToolbarItem className="sm:w-36">
        <Select defaultValue="all">
          <SelectTrigger aria-label="API key">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All API keys</SelectItem>
            <SelectItem value="production">Production</SelectItem>
            <SelectItem value="staging">Staging</SelectItem>
          </SelectContent>
        </Select>
      </ToolbarItem>
      <Tooltip>
        <TooltipTrigger asChild>
          <IconButton variant="secondary" aria-label="Export">
            <Download />
          </IconButton>
        </TooltipTrigger>
        <TooltipContent>Export as CSV</TooltipContent>
      </Tooltip>
    </Toolbar>
  )
}

/** The email list: status tile, recipients, status, subject, time and a row menu. */
export function EmailsTable({ rows, detailHref }: { rows: EmailRow[]; detailHref?: (id: string) => string }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[38%]">To</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="w-[34%]">Subject</TableHead>
          <TableHead className="text-right">Sent</TableHead>
          <TableHead className="w-10">
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell>
              <a
                href={detailHref?.(row.id) ?? '#'}
                className="flex min-w-0 items-center gap-3 rounded-lg ring-focus outline-hidden focus-visible:ring-2"
              >
                <EmailStatusTile status={row.status} />
                <Recipients to={row.to} extra={row.extra} />
              </a>
            </TableCell>
            <TableCell>
              <EmailStatusBadge status={row.status} />
            </TableCell>
            <TableCell className="max-w-0">
              <span className="block truncate">{row.subject}</span>
            </TableCell>
            <TableCell className="text-right whitespace-nowrap text-default">{row.sent}</TableCell>
            <TableCell>
              <RowActions
                actions={[
                  { label: 'Copy email ID', icon: <Copy /> },
                  { label: 'Resend', icon: <RefreshCw /> },
                  'separator',
                  { label: 'Add to suppressions', icon: <Ban />, destructive: true },
                ]}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

/** Emails: Sending and Receiving, the filter bar, the list and pagination. */
export function EmailsPage({
  rows = sampleEmails,
  detailHref,
}: {
  rows?: EmailRow[]
  detailHref?: (id: string) => string
}) {
  return (
    <Tabs defaultValue="sending">
      <PageHeader
        title="Emails"
        actions={
          <>
            <Button>
              <Ban />
              Suppressions
            </Button>
            <Tooltip>
              <TooltipTrigger asChild>
                <IconButton variant="secondary" aria-label="API reference">
                  <Braces />
                </IconButton>
              </TooltipTrigger>
              <TooltipContent>API reference</TooltipContent>
            </Tooltip>
          </>
        }
      />
      <TabsList className="mb-6">
        <TabsTrigger value="sending">Sending</TabsTrigger>
        <TabsTrigger value="receiving">Receiving</TabsTrigger>
      </TabsList>
      <TabsContent value="sending">
        <EmailsToolbar />
        {rows.length ? (
          <>
            <EmailsTable rows={rows} detailHref={detailHref} />
            <Pagination
              className="mt-4"
              from={1}
              to={rows.length}
              total={1204}
              onPrevious={() => {}}
              onNext={() => {}}
            />
          </>
        ) : (
          <EmailsEmpty />
        )}
      </TabsContent>
      <TabsContent value="receiving">
        <ReceivingEmpty />
      </TabsContent>
    </Tabs>
  )
}

const quickstart = [
  {
    label: 'Node.js',
    code: `import { Dylo } from 'dylo';

const dylo = new Dylo('re_123456789');

await dylo.emails.send({
  from: 'Acme <hello@acme.dev>',
  to: ['maria@northwind.dev'],
  subject: 'Your quote is ready',
  html: '<p>The price and the date are inside.</p>',
});`,
  },
  {
    label: 'cURL',
    code: `curl -X POST 'https://api.example.dev/emails' \\
  -H 'Authorization: Bearer re_123456789' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "from": "Acme <hello@acme.dev>",
    "to": ["maria@northwind.dev"],
    "subject": "Your quote is ready",
    "html": "<p>The price and the date are inside.</p>"
  }'`,
  },
]

/** Before the first send: an empty state and the quickstart snippet. */
export function EmailsEmpty() {
  return (
    <div className="flex flex-col gap-6">
      <EmptyState
        icon={<Mail />}
        title="No sent emails yet"
        description="Send your first email with the API. It shows up here a few seconds later."
        action={
          <Button variant="primary">
            <Send />
            Send a test email
          </Button>
        }
      />
      <CodeBlock samples={quickstart} />
    </div>
  )
}

export function ReceivingEmpty() {
  return (
    <EmptyState
      icon={<Inbox />}
      title="No received emails"
      description="Point an MX record at us and every reply lands here and on your webhook."
      action={<Button>Set up receiving</Button>}
    />
  )
}

/** One email: the header, its metadata, the event timeline and the preview. */
export function EmailDetail({ email = sampleEmails[0], backHref = '#' }: { email?: EmailRow; backHref?: string }) {
  return (
    <div className="flex flex-col gap-10">
      <PageHeader
        breadcrumb={<Breadcrumb items={[{ label: 'Emails', href: backHref }, { label: email.to }]} />}
        title={
          <span className="flex items-center gap-3">
            <EmailStatusTile status={email.status} className="size-10 rounded-xl [&_svg]:size-5" />
            {email.to}
          </span>
        }
        actions={
          <>
            <Button>
              <RefreshCw />
              Resend
            </Button>
            <RowActions
              actions={[
                { label: 'Copy email ID', icon: <Copy /> },
                { label: 'Add to suppressions', icon: <Ban />, destructive: true },
              ]}
            />
          </>
        }
      />
      <DetailGrid>
        <DetailItem label="From">Acme &lt;hello@acme.dev&gt;</DetailItem>
        <DetailItem label="Subject">{email.subject}</DetailItem>
        <DetailItem label="To">{email.to}</DetailItem>
        <DetailItem label="ID" mono copy="4ef9a417-02e9-4d39-ad75-9611e0fcc33c">
          4ef9a417-02e9...
        </DetailItem>
      </DetailGrid>

      <section className="flex flex-col gap-4">
        <SectionHeading title="Email events" />
        <EmailTimeline />
      </section>

      <section className="flex flex-col gap-4">
        <Tabs defaultValue="preview">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="html">HTML</TabsTrigger>
              <TabsTrigger value="text">Plain text</TabsTrigger>
            </TabsList>
            <Badge>
              <Download />
              12.4 KB
            </Badge>
          </div>
          <TabsContent value="preview" className="mt-4">
            <EmailPreview subject={email.subject} />
          </TabsContent>
          <TabsContent value="html" className="mt-4">
            <CodeBlock
              samples={[
                {
                  label: 'index.html',
                  code: `<!DOCTYPE html>
<html lang="en">
  <body style="font-family: Inter, sans-serif">
    <h1>${email.subject}</h1>
    <p>The price and the date are inside.</p>
    <a href="https://northwind.dev/quote/q-1042">Open the quote</a>
  </body>
</html>`,
                },
              ]}
            />
          </TabsContent>
          <TabsContent value="text" className="mt-4">
            <Card className="p-5 font-mono text-[0.8125rem] whitespace-pre-wrap text-default">
              {`${email.subject}\n\nThe price and the date are inside.\n\nOpen the quote: https://northwind.dev/quote/q-1042`}
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}

/** The horizontal run of events: a tile per status joined by a hairline. */
export function EmailTimeline({ events = emailEvents }: { events?: typeof emailEvents }) {
  return (
    <ol className="flex flex-wrap items-start gap-y-6">
      {events.map((event, i) => (
        <li key={event.status} className="flex min-w-36 flex-1 flex-col gap-3">
          <div className="flex items-center">
            <EmailStatusTile status={event.status} />
            {i < events.length - 1 ? (
              <span aria-hidden className="mx-2 h-px flex-1 border-t border-dashed border-gray-a5" />
            ) : null}
          </div>
          <div className="flex flex-col gap-0.5 pr-4">
            <EmailStatusBadge status={event.status} />
            <span className="mt-1 text-xs text-default">{event.at}</span>
            {event.detail ? <span className="truncate text-xs text-gray-10">{event.detail}</span> : null}
          </div>
        </li>
      ))}
    </ol>
  )
}

/** A rendered message on a white sheet inside the app frame. */
export function EmailPreview({ subject }: { subject: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-a3 bg-gray-2 p-6 sm:p-10">
      <div className="light mx-auto flex max-w-xl flex-col gap-4 rounded-xl bg-background p-8 text-gray-12">
        <p className="text-xl font-semibold">{subject}</p>
        <p className="text-sm leading-6">Hello Maria,</p>
        <p className="text-sm leading-6">
          Your quote for the order portal is ready. The price and the date are inside, and we look after the app once it
          is live.
        </p>
        <span className="inline-flex h-9 w-fit items-center rounded-lg bg-accent px-4 text-sm font-semibold text-on-accent">
          Open the quote
        </span>
        <p className="text-xs text-gray-11">Acme, 1 Example Street, Barcelona</p>
      </div>
    </div>
  )
}
