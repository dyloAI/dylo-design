import { cn } from '@/lib/utils'
import { Badge, type BadgeProps } from '@/registry/dylo/ui/badge'
import { Clock, Eye, Mail, MailCheck, MailX, MousePointerClick, Send, TriangleAlert } from 'lucide-react'
import * as React from 'react'
import type { DomainStatus, EmailStatus } from './data'

type Tone = NonNullable<BadgeProps['tone']>

export const emailStatusTone: Record<EmailStatus, Tone> = {
  delivered: 'success',
  bounced: 'error',
  complained: 'warning',
  delayed: 'warning',
  opened: 'info',
  clicked: 'info',
  queued: 'neutral',
  sent: 'neutral',
}

const label = (s: string) => s.charAt(0).toUpperCase() + s.slice(1).replace('_', ' ')

export function EmailStatusBadge({ status, className }: { status: EmailStatus; className?: string }) {
  return (
    <Badge tone={emailStatusTone[status]} className={className}>
      {label(status)}
    </Badge>
  )
}

const tileTone: Record<Tone, string> = {
  success: 'bg-success border-success-subtle text-success',
  error: 'bg-error border-error-subtle text-error',
  warning: 'bg-warning border-warning-subtle text-warning',
  info: 'bg-info border-info-subtle text-info',
  neutral: 'bg-interactive border-gray-a3 text-default',
  violet: 'bg-violet-3 border-violet-4 text-violet-11',
  orange: 'bg-orange-3 border-orange-4 text-orange-11',
  accent: 'bg-accent border-transparent text-on-accent',
}

const tileIcon: Record<EmailStatus, React.ComponentType<{ className?: string }>> = {
  delivered: Mail,
  bounced: MailX,
  complained: TriangleAlert,
  delayed: Clock,
  opened: Eye,
  clicked: MousePointerClick,
  queued: Clock,
  sent: Send,
}

/** The 32px icon tile at the start of an email row, tinted by status. */
export function EmailStatusTile({ status, className }: { status: EmailStatus; className?: string }) {
  const Icon = tileIcon[status] ?? MailCheck
  return (
    <span
      aria-hidden
      className={cn(
        'inline-flex size-8 shrink-0 items-center justify-center rounded-lg border',
        tileTone[emailStatusTone[status]],
        className
      )}
    >
      <Icon className="size-4" />
    </span>
  )
}

export const domainStatusTone: Record<DomainStatus, Tone> = {
  verified: 'success',
  pending: 'warning',
  failed: 'error',
  not_started: 'neutral',
}

export function DomainStatusBadge({ status }: { status: DomainStatus }) {
  return <Badge tone={domainStatusTone[status]}>{status === 'not_started' ? 'Not started' : label(status)}</Badge>
}

/** HTTP status code chip for the logs list: 2xx success, 4xx warning, 5xx error. */
export function HttpStatusBadge({ code }: { code: number }) {
  const tone: Tone = code < 300 ? 'success' : code < 500 ? 'warning' : 'error'
  return (
    <Badge tone={tone} className="font-mono">
      {code}
    </Badge>
  )
}

/** HTTP method in mono, fixed width so endpoints line up. */
export function MethodLabel({ method }: { method: string }) {
  return <span className="inline-block w-14 font-mono text-xs text-emphasis">{method}</span>
}
