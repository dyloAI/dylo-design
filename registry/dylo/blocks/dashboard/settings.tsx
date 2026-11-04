'use client'

import { Avatar } from '@/registry/dylo/ui/avatar'
import { Badge } from '@/registry/dylo/ui/badge'
import { Button } from '@/registry/dylo/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/registry/dylo/ui/card'
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
import { Field, Label } from '@/registry/dylo/ui/field'
import { Input } from '@/registry/dylo/ui/input'
import { Progress } from '@/registry/dylo/ui/progress'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/registry/dylo/ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/registry/dylo/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/registry/dylo/ui/tabs'
import { Download, Plus, UserMinus } from 'lucide-react'
import { RowActions, SectionHeading } from './parts'
import { PageHeader } from './shell'

function UsageRow({ label, value, max, unit = '' }: { label: string; value: number; max: number; unit?: string }) {
  const fmt = (n: number) => n.toLocaleString('en-US')
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between text-sm">
        <span className="text-emphasis">{label}</span>
        <span className="font-mono text-xs text-default">
          {fmt(value)}
          {unit} / {fmt(max)}
          {unit}
        </span>
      </div>
      <Progress value={value} max={max} />
    </div>
  )
}

function UsageTab() {
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Transactional</CardTitle>
          <CardDescription>Resets on Dec 1.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <UsageRow label="Monthly limit" value={34812} max={50000} />
          <UsageRow label="Daily limit" value={1720} max={2000} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Marketing</CardTitle>
          <CardDescription>Contacts across all audiences.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <UsageRow label="Contacts" value={9832} max={10000} />
          <UsageRow label="Segments" value={3} max={3} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Team</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <UsageRow label="Domains" value={4} max={10} />
          <UsageRow label="Members" value={3} max={5} />
        </CardContent>
      </Card>
    </div>
  )
}

const invoices = [
  { id: 'INV-0042', date: 'Nov 1, 2026', amount: '€20.00', status: 'Paid' },
  { id: 'INV-0038', date: 'Oct 1, 2026', amount: '€20.00', status: 'Paid' },
  { id: 'INV-0031', date: 'Sep 1, 2026', amount: '€20.00', status: 'Paid' },
]

function BillingTab() {
  return (
    <div className="flex flex-col gap-8">
      <Card>
        <CardHeader className="flex-row items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <CardTitle className="flex items-center gap-2">
              Pro <Badge tone="accent">Current plan</Badge>
            </CardTitle>
            <CardDescription>50,000 emails a month, 10 domains. Renews on Dec 1, 2026.</CardDescription>
          </div>
          <span className="font-display text-2xl font-medium text-emphasis">
            €20<span className="text-sm text-default"> /mo</span>
          </span>
        </CardHeader>
        <CardFooter className="justify-end gap-2">
          <Button>Cancel plan</Button>
          <Button variant="primary">Upgrade</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Payment method</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between gap-4">
          <span className="flex items-center gap-3 text-sm text-emphasis">
            <span className="inline-flex h-7 w-10 items-center justify-center rounded-md border border-gray-a4 font-mono text-2xs">
              VISA
            </span>
            Visa ending 4242, expires 08/28
          </span>
          <Button size="xs">Update</Button>
        </CardContent>
      </Card>
      <section className="flex flex-col gap-4">
        <SectionHeading title="Invoices" />
        <Table density="compact">
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-10">
                <span className="sr-only">Download</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((inv) => (
              <TableRow key={inv.id}>
                <TableCell className="font-mono text-xs text-emphasis">{inv.id}</TableCell>
                <TableCell>{inv.date}</TableCell>
                <TableCell className="font-mono text-xs">{inv.amount}</TableCell>
                <TableCell>
                  <Badge tone="success">{inv.status}</Badge>
                </TableCell>
                <TableCell>
                  <Button size="xs" variant="ghost" aria-label={`Download ${inv.id}`}>
                    <Download />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </div>
  )
}

const members = [
  { name: 'Niki Mirabets', email: 'niki@acme.dev', role: 'Owner' },
  { name: 'Maria Puig', email: 'maria@acme.dev', role: 'Admin' },
  { name: 'Jordi Vidal', email: 'jordi@acme.dev', role: 'Member' },
]

export function InviteMemberDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary">
          <Plus />
          Invite
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Invite a team member</DialogTitle>
          <DialogDescription>They get an email with a link that is valid for 7 days.</DialogDescription>
        </DialogHeader>
        <DialogBody className="flex flex-col gap-5">
          <Field>
            <Label htmlFor="invite-email">Email</Label>
            <Input id="invite-email" type="email" placeholder="name@acme.dev" />
          </Field>
          <Field>
            <Label htmlFor="invite-role">Role</Label>
            <Select defaultValue="member">
              <SelectTrigger id="invite-role">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="member">Member</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </DialogBody>
        <DialogFooter>
          <DialogClose asChild>
            <Button>Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="primary">Send invite</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function TeamTab() {
  return (
    <div className="flex flex-col gap-8">
      <Card>
        <CardHeader>
          <CardTitle>Team name</CardTitle>
          <CardDescription>Shown on invoices and in the team switcher.</CardDescription>
        </CardHeader>
        <CardContent>
          <Input defaultValue="acme" className="max-w-sm" />
        </CardContent>
        <CardFooter className="justify-end">
          <Button variant="primary">Save</Button>
        </CardFooter>
      </Card>
      <section className="flex flex-col gap-4">
        <SectionHeading title="Members" action={<InviteMemberDialog />} />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/2">Member</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="w-10">
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {members.map((m) => (
              <TableRow key={m.email}>
                <TableCell>
                  <span className="flex items-center gap-3">
                    <Avatar
                      size="md"
                      fallback={m.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    />
                    <span className="flex flex-col">
                      <span className="text-emphasis">{m.name}</span>
                      <span className="text-xs">{m.email}</span>
                    </span>
                  </span>
                </TableCell>
                <TableCell>
                  <Badge>{m.role}</Badge>
                </TableCell>
                <TableCell>
                  {m.role !== 'Owner' ? (
                    <RowActions actions={[{ label: 'Remove member', icon: <UserMinus />, destructive: true }]} />
                  ) : null}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </div>
  )
}

function SmtpTab() {
  const rows = [
    ['Host', 'smtp.example.dev'],
    ['Port', '465'],
    ['Username', 'dylo'],
    ['Password', 'YOUR_API_KEY'],
  ]
  return (
    <Card>
      <CardHeader>
        <CardTitle>SMTP</CardTitle>
        <CardDescription>Send from any app that speaks SMTP. Use an API key as the password.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {rows.map(([label, value]) => (
          <div key={label} className="grid grid-cols-[7rem_1fr] items-center gap-3">
            <Label>{label}</Label>
            <Input
              readOnly
              value={value}
              className="font-mono"
              trailing={<CopyButton value={value} className="size-6" />}
            />
          </div>
        ))}
        <p className="pt-2 text-xs text-default">For encrypted connections use port 465 (SMTPS) or 587 (STARTTLS).</p>
      </CardContent>
    </Card>
  )
}

const integrations = [
  { name: 'Vercel', body: 'Add an API key to your project environment.', connected: true },
  { name: 'Supabase', body: 'Send auth emails from your own domain.', connected: false },
  { name: 'Zapier', body: 'Send an email from any trigger.', connected: false },
]

function IntegrationsTab() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {integrations.map((i) => (
        <Card key={i.name} className="gap-4 p-5">
          <div className="flex items-center justify-between">
            <Avatar shape="square" size="lg" fallback={i.name[0]} />
            {i.connected ? <Badge tone="success">Connected</Badge> : null}
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-emphasis">{i.name}</span>
            <span className="text-sm text-default">{i.body}</span>
          </div>
          <Button className="w-fit">{i.connected ? 'Manage' : 'Connect'}</Button>
        </Card>
      ))}
    </div>
  )
}

/** Settings: usage, billing, team, SMTP and integrations under one set of tabs. */
export function SettingsPage({
  defaultTab = 'usage',
}: {
  defaultTab?: 'usage' | 'billing' | 'team' | 'smtp' | 'integrations'
}) {
  return (
    <Tabs defaultValue={defaultTab}>
      <PageHeader title="Settings" />
      <TabsList variant="underline" className="mb-8">
        <TabsTrigger value="usage">Usage</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
        <TabsTrigger value="team">Team</TabsTrigger>
        <TabsTrigger value="smtp">SMTP</TabsTrigger>
        <TabsTrigger value="integrations">Integrations</TabsTrigger>
      </TabsList>
      <TabsContent value="usage">
        <UsageTab />
      </TabsContent>
      <TabsContent value="billing">
        <BillingTab />
      </TabsContent>
      <TabsContent value="team">
        <TeamTab />
      </TabsContent>
      <TabsContent value="smtp">
        <SmtpTab />
      </TabsContent>
      <TabsContent value="integrations">
        <IntegrationsTab />
      </TabsContent>
    </Tabs>
  )
}
