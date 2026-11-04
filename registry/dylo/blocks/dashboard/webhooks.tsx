'use client'

import { Badge, StatusDot } from '@/registry/dylo/ui/badge'
import { Breadcrumb } from '@/registry/dylo/ui/breadcrumb'
import { Button } from '@/registry/dylo/ui/button'
import { Checkbox } from '@/registry/dylo/ui/checkbox'
import { CodeBlock } from '@/registry/dylo/ui/code-block'
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/registry/dylo/ui/dialog'
import { EmptyState } from '@/registry/dylo/ui/empty-state'
import { Field, Label } from '@/registry/dylo/ui/field'
import { Input } from '@/registry/dylo/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/registry/dylo/ui/table'
import { Pause, Pencil, Plus, Send, Trash2, Webhook } from 'lucide-react'
import * as React from 'react'
import { webhooks as sampleWebhooks, webhookEvents, type WebhookRow } from './data'
import { DetailGrid, DetailItem, RowActions, SectionHeading } from './parts'
import { PageHeader } from './shell'
import { HttpStatusBadge } from './status'

/** Add an endpoint: its URL, and the events it should receive. */
export function AddWebhookDialog({ trigger }: { trigger?: React.ReactNode }) {
  const [selected, setSelected] = React.useState<string[]>(['email.delivered', 'email.bounced'])
  const toggle = (event: string, on: boolean) =>
    setSelected((prev) => (on ? [...prev, event] : prev.filter((e) => e !== event)))
  const all = selected.length === webhookEvents.length

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger ?? (
          <Button variant="primary">
            <Plus />
            Add webhook
          </Button>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add webhook</DialogTitle>
          <DialogDescription>We send a POST request to this URL each time one of the events happens.</DialogDescription>
        </DialogHeader>
        <DialogBody className="flex flex-col gap-5">
          <Field>
            <Label htmlFor="webhook-url">Endpoint URL</Label>
            <Input id="webhook-url" type="url" placeholder="https://api.acme.dev/webhooks" />
          </Field>
          <fieldset className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <legend className="text-sm font-medium text-emphasis">Event types</legend>
              <button
                type="button"
                onClick={() => setSelected(all ? [] : [...webhookEvents])}
                className="cursor-pointer text-xs text-default transition-colors hover:text-emphasis"
              >
                {all ? 'Clear all' : 'Select all'}
              </button>
            </div>
            <div className="grid grid-cols-1 gap-2 rounded-xl border border-gray-a3 p-3 sm:grid-cols-2">
              {webhookEvents.map((event) => (
                <label key={event} className="flex cursor-pointer items-center gap-2 font-mono text-xs text-emphasis">
                  <Checkbox checked={selected.includes(event)} onCheckedChange={(v) => toggle(event, v === true)} />
                  {event}
                </label>
              ))}
            </div>
          </fieldset>
        </DialogBody>
        <DialogFooter>
          <DialogClose asChild>
            <Button>Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="primary">Add</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function WebhookState({ status }: { status: WebhookRow['status'] }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm text-default">
      <StatusDot tone={status === 'enabled' ? 'success' : 'neutral'} />
      {status === 'enabled' ? 'Enabled' : 'Disabled'}
    </span>
  )
}

export function WebhooksTable({ rows, detailHref }: { rows: WebhookRow[]; detailHref?: (id: string) => string }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[45%]">Endpoint</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Events</TableHead>
          <TableHead className="text-right">Created</TableHead>
          <TableHead className="w-10">
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell className="max-w-0">
              <a
                href={detailHref?.(row.id) ?? '#'}
                className="flex items-center gap-3 rounded-lg text-emphasis ring-focus outline-hidden focus-visible:ring-2"
              >
                <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg border border-gray-a3 bg-interactive text-default">
                  <Webhook className="size-4" />
                </span>
                <span className="truncate font-mono text-xs">{row.url}</span>
              </a>
            </TableCell>
            <TableCell>
              <WebhookState status={row.status} />
            </TableCell>
            <TableCell>
              <Badge>{row.events.length} events</Badge>
            </TableCell>
            <TableCell className="text-right text-default">{row.created}</TableCell>
            <TableCell>
              <RowActions
                actions={[
                  { label: 'Edit webhook', icon: <Pencil /> },
                  { label: 'Send test event', icon: <Send /> },
                  { label: row.status === 'enabled' ? 'Disable' : 'Enable', icon: <Pause /> },
                  'separator',
                  { label: 'Delete webhook', icon: <Trash2 />, destructive: true },
                ]}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export function WebhooksPage({
  rows = sampleWebhooks,
  detailHref,
}: {
  rows?: WebhookRow[]
  detailHref?: (id: string) => string
}) {
  return (
    <>
      <PageHeader title="Webhooks" actions={<AddWebhookDialog />} />
      {rows.length ? (
        <WebhooksTable rows={rows} detailHref={detailHref} />
      ) : (
        <EmptyState
          icon={<Webhook />}
          title="No webhooks yet"
          description="Get a request each time an email is delivered, bounced, opened or clicked."
          action={<AddWebhookDialog />}
        />
      )}
    </>
  )
}

const attempts = [
  { id: 'a1', event: 'email.delivered', status: 200, at: '14 min ago' },
  { id: 'a2', event: 'email.bounced', status: 200, at: '18 h ago' },
  { id: 'a3', event: 'email.delivered', status: 500, at: '1 d ago' },
  { id: 'a4', event: 'email.complained', status: 200, at: '2 d ago' },
]

/** One endpoint: its signing secret, events, and the recent deliveries. */
export function WebhookDetail({
  webhook = sampleWebhooks[0],
  backHref = '#',
}: {
  webhook?: WebhookRow
  backHref?: string
}) {
  return (
    <div className="flex flex-col gap-10">
      <PageHeader
        breadcrumb={<Breadcrumb items={[{ label: 'Webhooks', href: backHref }, { label: 'Endpoint' }]} />}
        title={<span className="font-mono text-xl break-all">{webhook.url}</span>}
        actions={
          <>
            <Button>
              <Send />
              Send test
            </Button>
            <RowActions actions={[{ label: 'Delete webhook', icon: <Trash2 />, destructive: true }]} />
          </>
        }
      />
      <DetailGrid>
        <DetailItem label="Created">{webhook.created}</DetailItem>
        <DetailItem label="Status">
          <WebhookState status={webhook.status} />
        </DetailItem>
        <DetailItem label="Events">{webhook.events.length}</DetailItem>
        <DetailItem label="Signing secret" mono copy="whsec_8fJ2kL9mQ4">
          whsec_••••••••
        </DetailItem>
      </DetailGrid>

      <section className="flex flex-col gap-4">
        <SectionHeading title="Webhook events" />
        <Table density="compact">
          <TableHeader>
            <TableRow>
              <TableHead>Event</TableHead>
              <TableHead>Response</TableHead>
              <TableHead className="text-right">Sent</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {attempts.map((a) => (
              <TableRow key={a.id}>
                <TableCell className="font-mono text-xs text-emphasis">{a.event}</TableCell>
                <TableCell>
                  <HttpStatusBadge code={a.status} />
                </TableCell>
                <TableCell className="text-right text-default">{a.at}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      <section className="flex flex-col gap-4">
        <SectionHeading title="Payload" description="The body of the last request." />
        <CodeBlock
          samples={[
            {
              label: 'email.delivered',
              code: `{
  "type": "email.delivered",
  "created_at": "2026-11-04T08:12:06.000Z",
  "data": {
    "email_id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
    "from": "Acme <hello@acme.dev>",
    "to": ["maria@northwind.dev"],
    "subject": "Your quote is ready"
  }
}`,
            },
          ]}
        />
      </section>
    </div>
  )
}
