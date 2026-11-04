'use client'

import { Badge } from '@/registry/dylo/ui/badge'
import { Breadcrumb } from '@/registry/dylo/ui/breadcrumb'
import { Button } from '@/registry/dylo/ui/button'
import { Card } from '@/registry/dylo/ui/card'
import { Combobox } from '@/registry/dylo/ui/combobox'
import { EmptyState } from '@/registry/dylo/ui/empty-state'
import { IconButton } from '@/registry/dylo/ui/icon-button'
import { Input } from '@/registry/dylo/ui/input'
import { SearchField } from '@/registry/dylo/ui/search'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/registry/dylo/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/registry/dylo/ui/tabs'
import { Toolbar } from '@/registry/dylo/ui/toolbar'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/registry/dylo/ui/tooltip'
import {
  Bold,
  Clock,
  Copy,
  Eye,
  Image as ImageIcon,
  Italic,
  Link2,
  List,
  Megaphone,
  Pencil,
  Plus,
  Send,
  Trash2,
  Type,
} from 'lucide-react'
import * as React from 'react'
import { broadcasts as sampleBroadcasts, type BroadcastRow } from './data'
import { RowActions } from './parts'
import { PageHeader } from './shell'

const broadcastTone = { draft: 'neutral', scheduled: 'info', sent: 'success' } as const

export function BroadcastsTable({ rows, editHref }: { rows: BroadcastRow[]; editHref?: (id: string) => string }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[40%]">Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Audience</TableHead>
          <TableHead>Open rate</TableHead>
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
                href={editHref?.(row.id) ?? '#'}
                className="flex items-center gap-3 rounded-lg text-emphasis ring-focus outline-hidden focus-visible:ring-2"
              >
                <span className="inline-flex size-8 items-center justify-center rounded-lg border border-gray-a3 bg-interactive text-default">
                  <Megaphone className="size-4" />
                </span>
                {row.name}
              </a>
            </TableCell>
            <TableCell>
              <Badge tone={broadcastTone[row.status]}>{row.status.charAt(0).toUpperCase() + row.status.slice(1)}</Badge>
            </TableCell>
            <TableCell>{row.audience}</TableCell>
            <TableCell className="font-mono text-xs">{row.openRate ?? '-'}</TableCell>
            <TableCell className="text-right whitespace-nowrap text-default">{row.sent ?? '-'}</TableCell>
            <TableCell>
              <RowActions
                actions={[
                  { label: 'Edit', icon: <Pencil /> },
                  { label: 'Duplicate', icon: <Copy /> },
                  'separator',
                  { label: 'Delete', icon: <Trash2 />, destructive: true },
                ]}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export function BroadcastsPage({
  rows = sampleBroadcasts,
  editHref,
}: {
  rows?: BroadcastRow[]
  editHref?: (id: string) => string
}) {
  return (
    <>
      <PageHeader
        title="Broadcasts"
        actions={
          <Button variant="primary">
            <Plus />
            Create broadcast
          </Button>
        }
      />
      {rows.length ? (
        <>
          <Toolbar className="mb-4">
            <SearchField />
          </Toolbar>
          <BroadcastsTable rows={rows} editHref={editHref} />
        </>
      ) : (
        <EmptyState
          icon={<Megaphone />}
          title="No broadcasts yet"
          description="Write one email and send it to a segment of your audience."
          action={<Button variant="primary">Create broadcast</Button>}
        />
      )}
    </>
  )
}

function EditorToolbar() {
  const tools = [
    { label: 'Text', icon: Type },
    { label: 'Bold', icon: Bold },
    { label: 'Italic', icon: Italic },
    { label: 'Link', icon: Link2 },
    { label: 'List', icon: List },
    { label: 'Image', icon: ImageIcon },
  ]
  return (
    <div className="flex items-center gap-0.5 rounded-xl border border-gray-a3 bg-elevated p-1 shadow-popover">
      {tools.map(({ label, icon: Icon }) => (
        <Tooltip key={label}>
          <TooltipTrigger asChild>
            <IconButton size="xs" aria-label={label}>
              <Icon />
            </IconButton>
          </TooltipTrigger>
          <TooltipContent>{label}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  )
}

/** The broadcast composer: envelope fields, then the email body on a canvas. */
export function BroadcastEditor({ backHref = '#' }: { backHref?: string }) {
  const [audience, setAudience] = React.useState('all')
  const envelope = 'grid grid-cols-[5rem_1fr] items-center gap-3 border-b border-gray-a3 px-5 py-2 text-sm'
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        breadcrumb={
          <Breadcrumb items={[{ label: 'Broadcasts', href: backHref }, { label: 'November product update' }]} />
        }
        title="November product update"
        actions={
          <>
            <Badge>Draft</Badge>
            <Button>
              <Eye />
              Preview
            </Button>
            <Button>
              <Clock />
              Schedule
            </Button>
            <Button variant="primary">
              <Send />
              Send
            </Button>
          </>
        }
      />
      <Card className="overflow-hidden">
        <div className={envelope}>
          <span className="text-default">From</span>
          <Input
            defaultValue="Acme <news@acme.dev>"
            className="border-transparent bg-transparent px-0 focus-visible:ring-0"
          />
        </div>
        <div className={envelope}>
          <span className="text-default">To</span>
          <Combobox
            value={audience}
            onValueChange={setAudience}
            options={[
              { value: 'all', label: 'All contacts', hint: '9,832' },
              { value: 'customers', label: 'Customers', hint: '1,204' },
              { value: 'newsletter', label: 'Newsletter', hint: '8,312' },
            ]}
            className="w-64"
          />
        </div>
        <div className={envelope}>
          <span className="text-default">Subject</span>
          <Input
            defaultValue="What we shipped in November"
            className="border-transparent bg-transparent px-0 focus-visible:ring-0"
          />
        </div>
        <div className="relative flex flex-col items-center gap-6 bg-subtle px-6 py-10">
          <EditorToolbar />
          <div className="flex w-full max-w-xl flex-col gap-4 text-emphasis">
            <p className="font-display text-2xl font-medium">What we shipped in November</p>
            <p className="text-sm leading-6 text-default">
              Hello {'{{{first_name|there}}}'}, here is what changed this month and what it costs.
            </p>
            <div className="h-40 rounded-xl border border-dashed border-gray-a5 bg-interactive" />
            <p className="text-sm leading-6 text-default">
              Reply to this email if you have a question. A person reads every reply.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}

/** Sent broadcast results: delivery and engagement at a glance. */
export function BroadcastReport() {
  return (
    <Tabs defaultValue="overview">
      <TabsList variant="underline" className="mb-6">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="recipients">Recipients</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          ['Delivered', '9,388', '99.8%'],
          ['Opened', '4,527', '48.2%'],
          ['Clicked', '1,031', '11.0%'],
          ['Unsubscribed', '12', '0.1%'],
        ].map(([label, value, rate]) => (
          <Card key={label} variant="subtle" className="gap-1 p-4">
            <span className="text-xs text-default">{label}</span>
            <span className="font-display text-xl font-medium text-emphasis">{value}</span>
            <span className="font-mono text-xs text-gray-10">{rate}</span>
          </Card>
        ))}
      </TabsContent>
      <TabsContent value="recipients">
        <EmptyState title="Recipients appear once the broadcast is sent" />
      </TabsContent>
    </Tabs>
  )
}
