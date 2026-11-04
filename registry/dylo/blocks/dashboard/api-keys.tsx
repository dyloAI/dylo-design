'use client'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/registry/dylo/ui/alert-dialog'
import { Badge } from '@/registry/dylo/ui/badge'
import { Button } from '@/registry/dylo/ui/button'
import { Callout } from '@/registry/dylo/ui/callout'
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/registry/dylo/ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/registry/dylo/ui/table'
import { KeyRound, Pencil, Plus, Trash2 } from 'lucide-react'
import * as React from 'react'
import { apiKeys as sampleKeys, type ApiKeyRow } from './data'
import { RowActions } from './parts'
import { PageHeader } from './shell'

/** Create a key. The second step shows the token once, with a copy button. */
export function CreateApiKeyDialog({ trigger }: { trigger?: React.ReactNode }) {
  const [step, setStep] = React.useState<'form' | 'token'>('form')
  const [permission, setPermission] = React.useState('full')
  const token = 're_9fK2xQ7pLm4vT8wZ1nB6cH3jD5sA0eRg'

  return (
    <Dialog onOpenChange={(open) => !open && setStep('form')}>
      <DialogTrigger asChild>
        {trigger ?? (
          <Button variant="primary">
            <Plus />
            Create API key
          </Button>
        )}
      </DialogTrigger>
      <DialogContent>
        {step === 'form' ? (
          <>
            <DialogHeader>
              <DialogTitle>Add API key</DialogTitle>
              <DialogDescription>Give it a name you will recognise in the logs.</DialogDescription>
            </DialogHeader>
            <DialogBody className="flex flex-col gap-5">
              <Field>
                <Label htmlFor="key-name">Name</Label>
                <Input id="key-name" placeholder="Production" autoComplete="off" />
              </Field>
              <Field>
                <Label htmlFor="key-permission">Permission</Label>
                <Select value={permission} onValueChange={setPermission}>
                  <SelectTrigger id="key-permission">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full">Full access</SelectItem>
                    <SelectItem value="sending">Sending access</SelectItem>
                  </SelectContent>
                </Select>
                <FieldHint>
                  {permission === 'full'
                    ? 'Can create, delete, get and update any resource.'
                    : 'Can only send emails, optionally from one domain.'}
                </FieldHint>
              </Field>
              {permission === 'sending' ? (
                <Field>
                  <Label htmlFor="key-domain">Domain</Label>
                  <Select defaultValue="all">
                    <SelectTrigger id="key-domain">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All domains</SelectItem>
                      <SelectItem value="acme">acme.dev</SelectItem>
                      <SelectItem value="northwind">mail.northwind.dev</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
              ) : null}
            </DialogBody>
            <DialogFooter>
              <DialogClose asChild>
                <Button>Cancel</Button>
              </DialogClose>
              <Button variant="primary" onClick={() => setStep('token')}>
                Add
              </Button>
            </DialogFooter>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>View API key</DialogTitle>
              <DialogDescription>Copy it now. For your security, we show it only once.</DialogDescription>
            </DialogHeader>
            <DialogBody className="flex flex-col gap-4">
              <Input
                readOnly
                value={token}
                className="font-mono"
                trailing={<CopyButton value={token} className="size-6" />}
              />
              <Callout tone="warning">
                Store it somewhere safe, such as an environment variable. Do not commit it.
              </Callout>
            </DialogBody>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="primary">Done</Button>
              </DialogClose>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}

/** The confirm step before a key stops working. */
export function DeleteApiKeyDialog({
  name,
  open,
  onOpenChange,
}: {
  name: string
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete API key</AlertDialogTitle>
          <AlertDialogDescription>
            Requests that use <span className="font-medium text-emphasis">{name}</span> fail straight away. This cannot
            be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction destructive>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export function ApiKeysTable({ rows }: { rows: ApiKeyRow[] }) {
  const [deleting, setDeleting] = React.useState<string | null>(null)
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[30%]">Name</TableHead>
            <TableHead>Token</TableHead>
            <TableHead>Permission</TableHead>
            <TableHead>Last used</TableHead>
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
                <span className="flex items-center gap-3 text-emphasis">
                  <span className="inline-flex size-8 items-center justify-center rounded-lg border border-gray-a3 bg-interactive text-default">
                    <KeyRound className="size-4" />
                  </span>
                  {row.name}
                </span>
              </TableCell>
              <TableCell className="font-mono text-xs">{row.token}</TableCell>
              <TableCell>
                <Badge>{row.permission}</Badge>
              </TableCell>
              <TableCell className="text-default">{row.lastUsed}</TableCell>
              <TableCell className="text-right text-default">{row.created}</TableCell>
              <TableCell>
                <RowActions
                  actions={[
                    { label: 'Edit API key', icon: <Pencil /> },
                    'separator',
                    {
                      label: 'Delete API key',
                      icon: <Trash2 />,
                      destructive: true,
                      onSelect: () => setDeleting(row.name),
                    },
                  ]}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <DeleteApiKeyDialog
        name={deleting ?? ''}
        open={deleting !== null}
        onOpenChange={(open) => !open && setDeleting(null)}
      />
    </>
  )
}

export function ApiKeysPage({ rows = sampleKeys }: { rows?: ApiKeyRow[] }) {
  return (
    <>
      <PageHeader title="API keys" actions={<CreateApiKeyDialog />} />
      {rows.length ? (
        <ApiKeysTable rows={rows} />
      ) : (
        <EmptyState
          icon={<KeyRound />}
          title="No API keys yet"
          description="Create a key to authenticate requests from your app."
          action={<CreateApiKeyDialog />}
        />
      )}
    </>
  )
}
