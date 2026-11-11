import { cn } from '@/lib/utils'
import * as React from 'react'
import { Authors, PostCover, Prose, type Author } from './blog'
import { DisplayTitle, SectionLead, container } from './section'

export type ChangelogEntry = {
  date: string
  title: string
  href?: string
  authors: Author[]
  body: React.ReactNode
  cover?: React.ReactNode
}

/**
 * The changelog: a sticky date column, a dot on a rail, and each release
 * with its cover, title, author and notes.
 */
export function ChangelogTimeline({
  title = 'Changelog',
  lead,
  entries,
  actions,
  className,
}: {
  title?: React.ReactNode
  lead?: React.ReactNode
  entries: ChangelogEntry[]
  actions?: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn(container, 'pt-24 pb-24 md:pt-32', className)}>
      <div className="mb-16 flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
        <div>
          <DisplayTitle className="md:text-[4.8rem]">{title}</DisplayTitle>
          {lead ? <SectionLead>{lead}</SectionLead> : null}
        </div>
        {actions}
      </div>
      <ol>
        {entries.map((e) => (
          <li key={e.title} className="relative flex w-full flex-col sm:flex-row">
            <div className="w-56 shrink-0 pb-4 text-sm text-default sm:pb-0">
              <time className="sticky top-24">{e.date}</time>
            </div>
            <div className="relative hidden w-8 shrink-0 sm:block">
              <span aria-hidden className="absolute top-0 bottom-0 left-[2px] w-px bg-gray-a3" />
              <span aria-hidden className="sticky top-[102px] left-0 mt-1.5 block size-1.5 rounded-full bg-gray-11" />
            </div>
            <article className="flex min-w-0 flex-1 flex-col gap-6 pb-24">
              <div className="relative aspect-[811/457] w-full overflow-hidden rounded-xl border border-gray-a3">
                {e.cover ?? <PostCover label={e.date} />}
              </div>
              <a href={e.href ?? '#'}>
                <h2 className="line-clamp-5 font-display effect-font-styling text-[2.25rem] leading-normal tracking-tighter text-emphasis">
                  {e.title}
                </h2>
              </a>
              <div className="text-default">
                <Authors authors={e.authors} />
              </div>
              <Prose>{e.body}</Prose>
            </article>
          </li>
        ))}
      </ol>
    </div>
  )
}
