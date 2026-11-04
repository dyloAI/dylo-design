'use client'

import { Avatar } from '@/registry/dylo/ui/avatar'
import { Badge } from '@/registry/dylo/ui/badge'
import { Button } from '@/registry/dylo/ui/button'
import { Card } from '@/registry/dylo/ui/card'
import { Checkbox } from '@/registry/dylo/ui/checkbox'
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
import { Field, FieldHint, Label } from '@/registry/dylo/ui/field'
import { Pagination } from '@/registry/dylo/ui/pagination'
import { SearchField } from '@/registry/dylo/ui/search'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/registry/dylo/ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/registry/dylo/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/registry/dylo/ui/tabs'
import { Textarea } from '@/registry/dylo/ui/textarea'
import { Toolbar, ToolbarItem } from '@/registry/dylo/ui/toolbar'
import { Ban, Download, FileText, Layers, Pencil, Plus, Trash2, Upload, Users } from 'lucide-react'
import * as React from 'react'
import { contacts as sampleContacts, type ContactRow } from './data'
import { RowActions } from './parts'
import { PageHeader } from './shell'

/** Add contacts by hand, or import a CSV. */
export function AddContactsDialog({ trigger }: { trigger?: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger ?? (
          <Button variant="primary">
            <Plus />
            Add contacts
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Add contacts</DialogTitle>
          <DialogDescription>Paste addresses, one per line or separated by commas.</DialogDescription>
        </DialogHeader>
        <DialogBody className="flex flex-col gap-5">
          <Field>
            <Label htmlFor="contacts-emails">Email addresses</Label>
            <Textarea id="contacts-emails" rows={5} placeholder={'maria@northwind.dev\njordi@lumen.studio'} />
          </Field>
          <Field>
            <Label htmlFor="contacts-segment">Segment</Label>
            <Select defaultValue="none">
              <SelectTrigger id="contacts-segment">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">No segment</SelectItem>
                <SelectItem value="customers">Customers</SelectItem>
                <SelectItem value="newsletter">Newsletter</SelectItem>
              </SelectContent>
            </Select>
            <FieldHint>Contacts in a segment can be sent a broadcast together.</FieldHint>
          </Field>
          <button
            type="button"
            className="flex cursor-pointer flex-col items-center gap-2 rounded-xl border border-dashed border-gray-a5 px-6 py-8 text-sm text-default transition-colors hover:bg-interactive"
          >
            <Upload className="size-5 text-emphasis" />
            <span>
              <span className="font-medium text-emphasis">Import a CSV</span> or drag it here
            </span>
          </button>
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

export function ContactsTable({ rows }: { rows: ContactRow[] }) {
  const [selected, setSelected] = React.useState<string[]>([])
  const all = selected.length === rows.length && rows.length > 0
  return (
    <>
      {selected.length ? (
        <div className="mb-3 flex h-10 items-center justify-between rounded-xl border border-gray-a3 bg-elevated px-3 text-sm">
          <span className="text-emphasis">{selected.length} selected</span>
          <div className="flex items-center gap-2">
            <Button size="xs">
              <Layers />
              Add to segment
            </Button>
            <Button size="xs" variant="destructive">
              <Trash2 />
              Delete
            </Button>
          </div>
        </div>
      ) : null}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-10">
              <Checkbox
                aria-label="Select all"
                checked={all ? true : selected.length ? 'indeterminate' : false}
                onCheckedChange={(v) => setSelected(v === true ? rows.map((r) => r.id) : [])}
              />
            </TableHead>
            <TableHead className="w-[40%]">Email</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Added</TableHead>
            <TableHead className="w-10">
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} data-state={selected.includes(row.id) ? 'selected' : undefined}>
              <TableCell>
                <Checkbox
                  aria-label={`Select ${row.email}`}
                  checked={selected.includes(row.id)}
                  onCheckedChange={(v) =>
                    setSelected((prev) => (v === true ? [...prev, row.id] : prev.filter((id) => id !== row.id)))
                  }
                />
              </TableCell>
              <TableCell>
                <span className="flex items-center gap-3 text-emphasis">
                  <Avatar
                    size="md"
                    fallback={row.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  />
                  {row.email}
                </span>
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>
                <Badge tone={row.status === 'subscribed' ? 'success' : 'neutral'}>
                  {row.status === 'subscribed' ? 'Subscribed' : 'Unsubscribed'}
                </Badge>
              </TableCell>
              <TableCell className="text-right text-default">{row.added}</TableCell>
              <TableCell>
                <RowActions
                  actions={[
                    { label: 'Edit contact', icon: <Pencil /> },
                    { label: 'Unsubscribe', icon: <Ban /> },
                    'separator',
                    { label: 'Delete contact', icon: <Trash2 />, destructive: true },
                  ]}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

const segments = [
  { name: 'Customers', count: 1204, updated: '2 d ago' },
  { name: 'Newsletter', count: 8312, updated: '1 w ago' },
  { name: 'Webinar registrants', count: 316, updated: '3 w ago' },
]

const properties = [
  { key: 'first_name', type: 'string', fallback: 'there' },
  { key: 'company', type: 'string', fallback: '' },
  { key: 'plan', type: 'string', fallback: 'free' },
  { key: 'orders', type: 'number', fallback: '0' },
]

/** Audience: contacts, segments and the properties a broadcast can use. */
export function AudiencePage({ rows = sampleContacts }: { rows?: ContactRow[] }) {
  return (
    <Tabs defaultValue="contacts">
      <PageHeader
        title="Audience"
        actions={
          <>
            <Button>
              <Download />
              Export
            </Button>
            <AddContactsDialog />
          </>
        }
      />
      <TabsList variant="underline" className="mb-6">
        <TabsTrigger value="contacts">Contacts</TabsTrigger>
        <TabsTrigger value="segments">Segments</TabsTrigger>
        <TabsTrigger value="properties">Properties</TabsTrigger>
        <TabsTrigger value="topics">Topics</TabsTrigger>
      </TabsList>
      <TabsContent value="contacts">
        <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            ['All contacts', '9,832'],
            ['Subscribed', '9,410'],
            ['Unsubscribed', '388'],
            ['Bounced', '34'],
          ].map(([label, value]) => (
            <Card key={label} variant="subtle" className="gap-1 p-4">
              <span className="text-xs text-default">{label}</span>
              <span className="font-display text-xl font-medium text-emphasis">{value}</span>
            </Card>
          ))}
        </div>
        <Toolbar className="mb-4">
          <SearchField placeholder="Search contacts..." />
          <ToolbarItem className="sm:w-40">
            <Select defaultValue="all">
              <SelectTrigger aria-label="Subscription">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All contacts</SelectItem>
                <SelectItem value="subscribed">Subscribed</SelectItem>
                <SelectItem value="unsubscribed">Unsubscribed</SelectItem>
              </SelectContent>
            </Select>
          </ToolbarItem>
        </Toolbar>
        {rows.length ? (
          <>
            <ContactsTable rows={rows} />
            <Pagination
              className="mt-4"
              from={1}
              to={rows.length}
              total={9832}
              onPrevious={() => {}}
              onNext={() => {}}
            />
          </>
        ) : (
          <EmptyState
            icon={<Users />}
            title="No contacts yet"
            description="Add contacts or import a CSV to send your first broadcast."
            action={<AddContactsDialog />}
          />
        )}
      </TabsContent>
      <TabsContent value="segments">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/2">Segment</TableHead>
              <TableHead>Contacts</TableHead>
              <TableHead className="text-right">Updated</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {segments.map((s) => (
              <TableRow key={s.name}>
                <TableCell>
                  <span className="flex items-center gap-3 text-emphasis">
                    <span className="inline-flex size-8 items-center justify-center rounded-lg border border-gray-a3 bg-interactive text-default">
                      <Layers className="size-4" />
                    </span>
                    {s.name}
                  </span>
                </TableCell>
                <TableCell>{s.count.toLocaleString('en-US')}</TableCell>
                <TableCell className="text-right text-default">{s.updated}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TabsContent>
      <TabsContent value="properties">
        <Table density="compact">
          <TableHeader>
            <TableRow>
              <TableHead>Key</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Fallback</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {properties.map((p) => (
              <TableRow key={p.key}>
                <TableCell className="font-mono text-xs text-emphasis">{p.key}</TableCell>
                <TableCell>
                  <Badge className="font-mono">{p.type}</Badge>
                </TableCell>
                <TableCell className="font-mono text-xs">{p.fallback || '-'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TabsContent>
      <TabsContent value="topics">
        <EmptyState
          icon={<FileText />}
          title="No topics yet"
          description="Topics let a contact choose which of your emails they get, without unsubscribing from all of them."
          action={<Button variant="primary">Create topic</Button>}
        />
      </TabsContent>
    </Tabs>
  )
}
