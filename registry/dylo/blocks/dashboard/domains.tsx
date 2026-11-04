'use client'

import { Breadcrumb } from '@/registry/dylo/ui/breadcrumb'
import { Button } from '@/registry/dylo/ui/button'
import { Callout } from '@/registry/dylo/ui/callout'
import { Card } from '@/registry/dylo/ui/card'
import { CopyButton } from '@/registry/dylo/ui/code-block'
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
import { Input } from '@/registry/dylo/ui/input'
import { SearchField } from '@/registry/dylo/ui/search'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/registry/dylo/ui/select'
import { Switch } from '@/registry/dylo/ui/switch'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/registry/dylo/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/registry/dylo/ui/tabs'
import { toast } from '@/registry/dylo/ui/toast'
import { Toolbar, ToolbarItem } from '@/registry/dylo/ui/toolbar'
import { Globe, Plus, RefreshCw, Trash2 } from 'lucide-react'
import * as React from 'react'
import { dnsRecords, domains as sampleDomains, type DomainRow } from './data'
import { DetailGrid, DetailItem, RowActions, SectionHeading } from './parts'
import { PageHeader } from './shell'
import { DomainStatusBadge } from './status'

const regions = [
  { value: 'us-east-1', label: 'North Virginia (us-east-1)' },
  { value: 'eu-west-1', label: 'Ireland (eu-west-1)' },
  { value: 'sa-east-1', label: 'São Paulo (sa-east-1)' },
  { value: 'ap-northeast-1', label: 'Tokyo (ap-northeast-1)' },
]

function RegionFlag({ region }: { region: string }) {
  return (
    <span className="inline-flex h-5 items-center rounded-md bg-interactive px-1.5 font-mono text-xs text-default">
      {region}
    </span>
  )
}

/** Add a sending domain: name and region. */
export function AddDomainDialog({ trigger }: { trigger?: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger ?? (
          <Button variant="primary">
            <Plus />
            Add domain
          </Button>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add domain</DialogTitle>
          <DialogDescription>
            Use a subdomain like updates.acme.dev to keep your sending reputation separate.
          </DialogDescription>
        </DialogHeader>
        <DialogBody className="flex flex-col gap-5">
          <Field>
            <Label htmlFor="domain-name">Name</Label>
            <Input id="domain-name" placeholder="updates.acme.dev" autoComplete="off" />
          </Field>
          <Field>
            <Label htmlFor="domain-region">Region</Label>
            <Select defaultValue="eu-west-1">
              <SelectTrigger id="domain-region">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {regions.map((r) => (
                  <SelectItem key={r.value} value={r.value}>
                    {r.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FieldHint>Send from the region closest to your users.</FieldHint>
          </Field>
        </DialogBody>
        <DialogFooter>
          <DialogClose asChild>
            <Button>Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              variant="primary"
              onClick={() => toast('Domain added', { description: 'Add the DNS records to verify it.' })}
            >
              Add domain
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export function DomainsTable({ rows, detailHref }: { rows: DomainRow[]; detailHref?: (id: string) => string }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[45%]">Domain</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Region</TableHead>
          <TableHead className="text-right">Created</TableHead>
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
                className="flex items-center gap-3 rounded-lg text-emphasis ring-focus outline-hidden focus-visible:ring-2"
              >
                <span className="inline-flex size-8 items-center justify-center rounded-lg border border-gray-a3 bg-interactive text-default">
                  <Globe className="size-4" />
                </span>
                {row.name}
              </a>
            </TableCell>
            <TableCell>
              <DomainStatusBadge status={row.status} />
            </TableCell>
            <TableCell>
              <RegionFlag region={row.region} />
            </TableCell>
            <TableCell className="text-right text-default">{row.created}</TableCell>
            <TableCell>
              <RowActions
                actions={[
                  { label: 'Verify DNS records', icon: <RefreshCw /> },
                  'separator',
                  { label: 'Delete domain', icon: <Trash2 />, destructive: true },
                ]}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export function DomainsPage({
  rows = sampleDomains,
  detailHref,
}: {
  rows?: DomainRow[]
  detailHref?: (id: string) => string
}) {
  return (
    <>
      <PageHeader title="Domains" actions={<AddDomainDialog />} />
      {rows.length ? (
        <>
          <Toolbar className="mb-4">
            <SearchField />
            <ToolbarItem className="sm:w-40">
              <Select defaultValue="all">
                <SelectTrigger aria-label="Status">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All statuses</SelectItem>
                  <SelectItem value="verified">Verified</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                </SelectContent>
              </Select>
            </ToolbarItem>
            <ToolbarItem className="sm:w-40">
              <Select defaultValue="all">
                <SelectTrigger aria-label="Region">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All regions</SelectItem>
                  {regions.map((r) => (
                    <SelectItem key={r.value} value={r.value}>
                      {r.value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </ToolbarItem>
          </Toolbar>
          <DomainsTable rows={rows} detailHref={detailHref} />
        </>
      ) : (
        <EmptyState
          icon={<Globe />}
          title="No domains yet"
          description="Add a domain and set its DNS records to send from your own address."
          action={<AddDomainDialog />}
        />
      )}
    </>
  )
}

/** The DNS records a domain needs, grouped by DKIM, SPF and DMARC. */
export function DnsRecordsTable({ records }: { records: (typeof dnsRecords)[number]['records'] }) {
  return (
    <Table density="compact">
      <TableHeader>
        <TableRow>
          <TableHead className="w-20">Type</TableHead>
          <TableHead>Name</TableHead>
          <TableHead className="w-[40%]">Content</TableHead>
          <TableHead>TTL</TableHead>
          <TableHead>Priority</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {records.map((r) => (
          <TableRow key={`${r.type}-${r.name}-${r.value}`}>
            <TableCell className="font-mono text-xs text-emphasis">{r.type}</TableCell>
            <TableCell>
              <span className="flex items-center gap-1 font-mono text-xs">
                <span className="truncate">{r.name}</span>
                <CopyButton value={r.name} className="size-6" />
              </span>
            </TableCell>
            <TableCell className="max-w-0">
              <span className="flex items-center gap-1 font-mono text-xs">
                <span className="truncate">{r.value}</span>
                <CopyButton value={r.value} className="size-6" />
              </span>
            </TableCell>
            <TableCell className="font-mono text-xs">{r.ttl}</TableCell>
            <TableCell className="font-mono text-xs">{r.priority ?? ''}</TableCell>
            <TableCell className="text-right">
              <DomainStatusBadge status={r.status} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

/** One domain: metadata, the DNS records to add, and its sending settings. */
export function DomainDetail({ domain = sampleDomains[2], backHref = '#' }: { domain?: DomainRow; backHref?: string }) {
  return (
    <div className="flex flex-col gap-10">
      <PageHeader
        breadcrumb={<Breadcrumb items={[{ label: 'Domains', href: backHref }, { label: domain.name }]} />}
        title={domain.name}
        actions={
          <>
            <Button>
              <RefreshCw />
              Verify DNS records
            </Button>
            <RowActions actions={[{ label: 'Delete domain', icon: <Trash2 />, destructive: true }]} />
          </>
        }
      />
      <DetailGrid>
        <DetailItem label="Created">{domain.created}</DetailItem>
        <DetailItem label="Status">
          <DomainStatusBadge status={domain.status} />
        </DetailItem>
        <DetailItem label="Region">
          <RegionFlag region={domain.region} />
        </DetailItem>
        <DetailItem label="Provider">Cloudflare</DetailItem>
      </DetailGrid>

      {domain.status === 'pending' ? (
        <Callout tone="warning" title="DNS records are not verified yet">
          Add the records below at your DNS provider. Checks run every few minutes for 72 hours.
        </Callout>
      ) : null}

      <Tabs defaultValue="records">
        <TabsList variant="underline" className="mb-6">
          <TabsTrigger value="records">DNS records</TabsTrigger>
          <TabsTrigger value="configuration">Configuration</TabsTrigger>
        </TabsList>
        <TabsContent value="records" className="flex flex-col gap-10">
          {dnsRecords.map((group) => (
            <section key={group.group} className="flex flex-col gap-4">
              <SectionHeading title={group.group} description={group.description} />
              <DnsRecordsTable records={group.records} />
            </section>
          ))}
        </TabsContent>
        <TabsContent value="configuration" className="flex flex-col gap-4">
          {[
            { title: 'Click tracking', body: 'Rewrite links so each click is recorded.' },
            { title: 'Open tracking', body: 'Add a 1px image to record opens. Some clients block it.' },
            { title: 'TLS', body: 'Require an encrypted connection. Mail to servers without TLS is not sent.' },
          ].map((setting, i) => (
            <Card key={setting.title} className="flex-row items-center justify-between gap-6 p-5">
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-medium text-emphasis">{setting.title}</span>
                <span className="text-sm text-default">{setting.body}</span>
              </div>
              <Switch defaultChecked={i === 0} aria-label={setting.title} />
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
