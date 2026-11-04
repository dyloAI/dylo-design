import { Badge, StatusDot } from '@/registry/dylo/ui/badge'
import { Button } from '@/registry/dylo/ui/button'
import { Callout } from '@/registry/dylo/ui/callout'
import { EmptyState } from '@/registry/dylo/ui/empty-state'
import { Progress } from '@/registry/dylo/ui/progress'
import { Skeleton } from '@/registry/dylo/ui/skeleton'
import { Mail, Plus } from 'lucide-react'
import type { ComponentDoc } from './types'

export const feedback: ComponentDoc[] = [
  {
    slug: 'badge',
    usage: `import { Badge, StatusDot } from '@/components/ui/badge'

<Badge tone="success">Delivered</Badge>`,
    examples: [
      {
        title: 'Tones',
        description:
          'Status takes a hue: green delivered, amber delayed, red bounced, blue scheduled. Neutral for everything else.',
        render: (
          <>
            <Badge>Draft</Badge>
            <Badge tone="success">Delivered</Badge>
            <Badge tone="warning">Delayed</Badge>
            <Badge tone="error">Bounced</Badge>
            <Badge tone="info">Scheduled</Badge>
            <Badge tone="violet">Opened</Badge>
            <Badge tone="orange">Clicked</Badge>
            <Badge tone="accent">New</Badge>
          </>
        ),
      },
      {
        title: 'Sizes and dots',
        render: (
          <>
            <Badge size="md" tone="success">
              Verified
            </Badge>
            <span className="inline-flex items-center gap-2 text-sm text-default">
              <StatusDot tone="success" pulse /> All systems normal
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-default">
              <StatusDot tone="warning" /> Pending
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-default">
              <StatusDot tone="error" /> Failed
            </span>
          </>
        ),
      },
    ],
    props: [
      {
        name: 'tone',
        type: "'neutral' | 'success' | 'warning' | 'error' | 'info' | 'violet' | 'orange' | 'accent'",
        default: "'neutral'",
        description: 'The hue. Status hues carry meaning; do not use them for decoration.',
      },
      { name: 'size', type: "'sm' | 'md'", default: "'sm'", description: 'Height 20 or 24px.' },
      { name: 'pulse', type: 'boolean', default: 'false', description: 'On StatusDot. A slow ping for a live state.' },
    ],
  },
  {
    slug: 'callout',
    usage: `import { Callout } from '@/components/ui/callout'

<Callout tone="warning" title="DNS records not found">...</Callout>`,
    examples: [
      {
        title: 'Tones',
        layout: 'stack',
        className: 'flex-col items-stretch',
        render: (
          <>
            <Callout title="Records can take up to 72 hours to propagate.">
              Most providers update in a few minutes.
            </Callout>
            <Callout tone="info" title="You are on the free plan">
              3,000 emails a month, 100 a day.
            </Callout>
            <Callout tone="success" title="Domain verified">
              You can send from acme.dev.
            </Callout>
            <Callout
              tone="warning"
              title="DNS records not found"
              action={
                <Button size="xs" variant="secondary">
                  Check again
                </Button>
              }
            >
              Add the records below at your DNS provider.
            </Callout>
            <Callout tone="error" title="Sending is paused">
              The bounce rate went over 4%.
            </Callout>
          </>
        ),
      },
    ],
    props: [
      {
        name: 'tone',
        type: "'neutral' | 'info' | 'success' | 'warning' | 'error'",
        default: "'neutral'",
        description: 'The icon and hue.',
      },
      { name: 'title', type: 'ReactNode', description: 'The first line, in medium weight.' },
      { name: 'action', type: 'ReactNode', description: 'A small control on the right.' },
    ],
  },
  {
    slug: 'progress',
    usage: `import { Progress } from '@/components/ui/progress'

<Progress value={62} />`,
    examples: [
      {
        title: 'Usage',
        description: 'The bar turns amber past 80% and red at the limit, unless a tone is set.',
        className: 'flex-col items-stretch gap-5',
        render: (
          <>
            {[
              { label: 'Transactional', used: '1,860 / 3,000', value: 62 },
              { label: 'Daily limit', used: '86 / 100', value: 86 },
              { label: 'Marketing contacts', used: '1,000 / 1,000', value: 100 },
            ].map((row) => (
              <div key={row.label} className="flex flex-col gap-2">
                <div className="flex justify-between text-sm">
                  <span className="text-emphasis">{row.label}</span>
                  <span className="font-mono text-xs text-default">{row.used}</span>
                </div>
                <Progress value={row.value} aria-label={row.label} />
              </div>
            ))}
          </>
        ),
      },
    ],
    props: [
      {
        name: 'tone',
        type: "'accent' | 'warning' | 'error'",
        description: 'Fix the colour instead of deriving it from the value.',
      },
    ],
  },
  {
    slug: 'skeleton',
    usage: `import { Skeleton } from '@/components/ui/skeleton'

<Skeleton className="h-4 w-48" />`,
    examples: [
      {
        title: 'A loading row',
        className: 'flex-col items-stretch gap-3',
        render: (
          <>
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-center gap-3">
                <Skeleton className="size-8 rounded-full" />
                <div className="flex flex-1 flex-col gap-2">
                  <Skeleton className="h-3 w-2/3" />
                  <Skeleton className="h-3 w-1/3" />
                </div>
              </div>
            ))}
          </>
        ),
      },
    ],
  },
  {
    slug: 'empty-state',
    usage: `import { EmptyState } from '@/components/ui/empty-state'

<EmptyState icon={<Mail />} title="No emails yet" description="..." action={<Button>...</Button>} />`,
    examples: [
      {
        title: 'Empty list',
        layout: 'stack',
        className: 'block',
        render: (
          <EmptyState
            icon={<Mail />}
            title="No sent emails yet"
            description="Send your first email with the API or SMTP and it shows up here."
            action={
              <Button variant="primary">
                <Plus /> Send a test email
              </Button>
            }
          />
        ),
      },
    ],
    props: [
      { name: 'icon', type: 'ReactNode', description: 'A Lucide icon. It sits in a soft tile.' },
      { name: 'title', type: 'ReactNode', description: 'What is missing.' },
      { name: 'description', type: 'ReactNode', description: 'How to fill it.' },
      { name: 'action', type: 'ReactNode', description: 'The one action that fills it.' },
    ],
  },
]
