'use client'

import { cn } from '@/lib/utils'
import { Avatar } from '@/registry/dylo/ui/avatar'
import { Badge } from '@/registry/dylo/ui/badge'
import { Button } from '@/registry/dylo/ui/button'
import { EmptyState } from '@/registry/dylo/ui/empty-state'
import { IconButton } from '@/registry/dylo/ui/icon-button'
import { SearchField } from '@/registry/dylo/ui/search'
import { Textarea } from '@/registry/dylo/ui/textarea'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/registry/dylo/ui/tooltip'
import { Archive, Inbox, Paperclip, Plus, Reply, Trash2 } from 'lucide-react'
import * as React from 'react'
import { PageHeader } from './shell'

const threads = [
  {
    id: 'm1',
    from: 'Maria Puig',
    address: 'maria@northwind.dev',
    subject: 'Re: Your quote is ready',
    preview: 'Thanks. Can we move the start date to the 18th?',
    at: '09:41',
    unread: true,
  },
  {
    id: 'm2',
    from: 'Jordi Vidal',
    address: 'jordi@lumen.studio',
    subject: 'Invoice question',
    preview: 'Is VAT included in the monthly fee?',
    at: 'Yesterday',
    unread: true,
  },
  {
    id: 'm3',
    from: 'Sam Okafor',
    address: 'sam@fieldnotes.app',
    subject: 'Re: Trip complete',
    preview: 'Looks right to me, thank you.',
    at: 'Mon',
    unread: false,
  },
  {
    id: 'm4',
    from: 'Lee Park',
    address: 'lee@kettle.io',
    subject: 'Unsubscribe',
    preview: 'Please remove me from the newsletter.',
    at: 'Oct 30',
    unread: false,
  },
]

/** Inboxes: received mail on the left, the open thread and a reply box on the right. */
export function InboxesPage() {
  const [active, setActive] = React.useState(threads[0].id)
  const thread = threads.find((t) => t.id === active) ?? threads[0]
  return (
    <>
      <PageHeader
        title="Inboxes"
        actions={
          <Button variant="primary">
            <Plus />
            Create inbox
          </Button>
        }
      />
      <div className="grid min-h-[540px] overflow-hidden rounded-2xl border border-gray-a3 md:grid-cols-[320px_1fr]">
        <div className="flex flex-col border-b border-gray-a3 md:border-r md:border-b-0">
          <div className="flex items-center gap-2 border-b border-gray-a3 p-3">
            <SearchField placeholder="Search mail..." />
          </div>
          <ul className="flex-1 overflow-y-auto p-1.5">
            {threads.map((t) => (
              <li key={t.id}>
                <button
                  type="button"
                  onClick={() => setActive(t.id)}
                  aria-current={t.id === active ? 'true' : undefined}
                  className={cn(
                    'flex w-full cursor-pointer flex-col gap-0.5 rounded-xl px-3 py-2.5 text-left ring-focus outline-hidden transition-colors focus-visible:ring-2',
                    t.id === active ? 'bg-interactive-hover' : 'hover:bg-interactive'
                  )}
                >
                  <span className="flex items-center justify-between gap-2">
                    <span className={cn('truncate text-sm', t.unread ? 'font-semibold text-emphasis' : 'text-default')}>
                      {t.from}
                    </span>
                    <span className="shrink-0 text-xs text-gray-10">{t.at}</span>
                  </span>
                  <span className="truncate text-sm text-emphasis">{t.subject}</span>
                  <span className="truncate text-xs text-default">{t.preview}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex min-w-0 flex-col">
          <div className="flex items-center justify-between gap-3 border-b border-gray-a3 px-5 py-3">
            <div className="flex min-w-0 items-center gap-2">
              <span className="truncate text-sm font-medium text-emphasis">{thread.subject}</span>
              <Badge>support@acme.dev</Badge>
            </div>
            <div className="flex items-center gap-1">
              {[
                { label: 'Archive', icon: Archive },
                { label: 'Delete', icon: Trash2 },
              ].map(({ label, icon: Icon }) => (
                <Tooltip key={label}>
                  <TooltipTrigger asChild>
                    <IconButton aria-label={label}>
                      <Icon />
                    </IconButton>
                  </TooltipTrigger>
                  <TooltipContent>{label}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
          <article className="flex flex-1 flex-col gap-4 p-5">
            <header className="flex items-center gap-3">
              <Avatar
                size="md"
                fallback={thread.from
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              />
              <div className="flex min-w-0 flex-col">
                <span className="text-sm font-medium text-emphasis">{thread.from}</span>
                <span className="truncate text-xs text-default">{thread.address}</span>
              </div>
              <span className="ml-auto text-xs text-gray-10">{thread.at}</span>
            </header>
            <p className="text-sm leading-6 text-emphasis">{thread.preview}</p>
            <p className="text-sm leading-6 text-default">Best, {thread.from.split(' ')[0]}</p>
          </article>
          <div className="border-t border-gray-a3 p-3">
            <div className="rounded-xl border border-gray-a3 bg-interactive ring-focus focus-within:ring-2">
              <Textarea
                rows={3}
                placeholder={`Reply to ${thread.from}...`}
                className="resize-none border-0 bg-transparent focus-visible:ring-0"
              />
              <div className="flex items-center justify-between px-2 pb-2">
                <IconButton size="xs" aria-label="Attach file">
                  <Paperclip />
                </IconButton>
                <Button size="xs" variant="primary">
                  <Reply />
                  Reply
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export function InboxesEmpty() {
  return (
    <EmptyState
      icon={<Inbox />}
      title="No inboxes yet"
      description="Create an address like support@acme.dev and read the replies here."
      action={<Button variant="primary">Create inbox</Button>}
    />
  )
}
