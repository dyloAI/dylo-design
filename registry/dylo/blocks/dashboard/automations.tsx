'use client'

import { cn } from '@/lib/utils'
import { Badge, StatusDot } from '@/registry/dylo/ui/badge'
import { Breadcrumb } from '@/registry/dylo/ui/breadcrumb'
import { Button } from '@/registry/dylo/ui/button'
import { Card } from '@/registry/dylo/ui/card'
import { EmptyState } from '@/registry/dylo/ui/empty-state'
import { Switch } from '@/registry/dylo/ui/switch'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/registry/dylo/ui/table'
import { Clock, GitBranch, Mail, Plus, UserPlus, Workflow, Zap } from 'lucide-react'
import { PageHeader } from './shell'

const automations = [
  { id: 'a1', name: 'Welcome series', trigger: 'Contact created', status: true, runs: '1,204' },
  { id: 'a2', name: 'Abandoned quote', trigger: 'Event: quote.viewed', status: true, runs: '318' },
  { id: 'a3', name: 'Win back', trigger: 'No open in 60 days', status: false, runs: '0' },
]

export function AutomationsPage({ editHref }: { editHref?: (id: string) => string }) {
  return (
    <>
      <PageHeader
        title="Automations"
        actions={
          <Button variant="primary">
            <Plus />
            Create automation
          </Button>
        }
      />
      {automations.length ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40%]">Name</TableHead>
              <TableHead>Trigger</TableHead>
              <TableHead>Runs</TableHead>
              <TableHead className="text-right">Active</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {automations.map((a) => (
              <TableRow key={a.id}>
                <TableCell>
                  <a
                    href={editHref?.(a.id) ?? '#'}
                    className="flex items-center gap-3 rounded-lg text-emphasis ring-focus outline-hidden focus-visible:ring-2"
                  >
                    <span className="inline-flex size-8 items-center justify-center rounded-lg border border-gray-a3 bg-interactive text-default">
                      <Workflow className="size-4" />
                    </span>
                    {a.name}
                  </a>
                </TableCell>
                <TableCell>
                  <Badge className="font-mono">{a.trigger}</Badge>
                </TableCell>
                <TableCell className="font-mono text-xs">{a.runs}</TableCell>
                <TableCell className="text-right">
                  <Switch defaultChecked={a.status} aria-label={`${a.name} active`} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <EmptyState
          icon={<Workflow />}
          title="No automations yet"
          description="Send an email when something happens: a sign-up, a viewed quote, a quiet month."
        />
      )}
    </>
  )
}

type Step = { kind: 'trigger' | 'delay' | 'email' | 'branch'; title: string; detail: string }

const steps: Step[] = [
  { kind: 'trigger', title: 'Contact created', detail: 'In segment Customers' },
  { kind: 'email', title: 'Send email', detail: 'Template: Welcome' },
  { kind: 'delay', title: 'Wait', detail: '3 days' },
  { kind: 'branch', title: 'If opened', detail: 'Welcome email' },
  { kind: 'email', title: 'Send email', detail: 'Template: Weekly digest' },
]

const stepIcon = { trigger: Zap, delay: Clock, email: Mail, branch: GitBranch }

function FlowNode({ step }: { step: Step }) {
  const Icon = step.kind === 'trigger' && step.title.includes('Contact') ? UserPlus : stepIcon[step.kind]
  return (
    <Card
      className={cn('w-72 flex-row items-center gap-3 bg-background p-3', step.kind === 'trigger' && 'border-gray-a6')}
    >
      <span
        className={cn(
          'inline-flex size-8 shrink-0 items-center justify-center rounded-lg border',
          step.kind === 'trigger'
            ? 'border-transparent bg-accent text-on-accent'
            : 'border-gray-a3 bg-interactive text-default'
        )}
      >
        <Icon className="size-4" />
      </span>
      <div className="flex min-w-0 flex-col">
        <span className="text-xs text-gray-10 uppercase">{step.kind}</span>
        <span className="truncate text-sm font-medium text-emphasis">{step.title}</span>
        <span className="truncate text-xs text-default">{step.detail}</span>
      </div>
    </Card>
  )
}

/** The automation canvas: a vertical flow of steps on the dotted grid. */
export function AutomationEditor({ backHref = '#' }: { backHref?: string }) {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        breadcrumb={<Breadcrumb items={[{ label: 'Automations', href: backHref }, { label: 'Welcome series' }]} />}
        title="Welcome series"
        actions={
          <>
            <span className="inline-flex items-center gap-2 text-sm text-default">
              <StatusDot tone="success" pulse />
              Active
            </span>
            <Button variant="primary">Save</Button>
          </>
        }
      />
      <div className="relative overflow-hidden rounded-2xl border border-gray-a3 bg-subtle px-6 py-12">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-canvas" />
        <ol className="relative flex flex-col items-center">
          {steps.map((step, i) => (
            <li key={i} className="flex flex-col items-center">
              <FlowNode step={step} />
              {i < steps.length - 1 ? <span aria-hidden className="h-8 w-px bg-gray-a5" /> : null}
            </li>
          ))}
          <li className="mt-0 flex flex-col items-center">
            <span aria-hidden className="h-6 w-px bg-gray-a5" />
            <Button size="xs" aria-label="Add step">
              <Plus />
              Add step
            </Button>
          </li>
        </ol>
      </div>
    </div>
  )
}
