'use client'

import { cn } from '@/lib/utils'
import { Button } from '@/registry/dylo/ui/button'
import { IconButton } from '@/registry/dylo/ui/icon-button'
import { Logo } from '@/registry/dylo/ui/logo'
import { SearchTrigger } from '@/registry/dylo/ui/search'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/registry/dylo/ui/sheet'
import { ChevronLeft, ChevronRight, Menu, ThumbsDown, ThumbsUp } from 'lucide-react'
import * as React from 'react'

export type DocsNavGroup = { title: string; items: { label: string; href: string; badge?: string }[] }

function DocsNav({ groups, active, label }: { groups: DocsNavGroup[]; active?: string; label: string }) {
  return (
    <nav aria-label={label} className="flex flex-col gap-6">
      {groups.map((g) => (
        <div key={g.title} className="flex flex-col gap-1">
          <p className="px-2 pb-1 text-xs font-medium text-gray-12">{g.title}</p>
          <ul className="flex flex-col gap-0.5">
            {g.items.map((item) => {
              const current = item.href === active
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    aria-current={current ? 'page' : undefined}
                    className={cn(
                      'flex h-8 items-center justify-between gap-2 rounded-lg px-2 text-sm ring-focus outline-hidden transition-colors focus-visible:ring-2',
                      current
                        ? 'bg-interactive-hover font-medium text-emphasis'
                        : 'text-default hover:bg-interactive hover:text-emphasis'
                    )}
                  >
                    {item.label}
                    {item.badge ? (
                      <span className="rounded-md border border-gray-a4 px-1.5 font-mono text-2xs tracking-wide text-gray-11 uppercase">
                        {item.badge}
                      </span>
                    ) : null}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </nav>
  )
}

/** "On this page": the headings of the current page, with the one in view marked. */
export function DocsToc({
  items,
  active,
  title = 'On this page',
}: {
  items: { label: string; href: string; depth?: 2 | 3 }[]
  active?: string
  title?: string
}) {
  return (
    <nav aria-label={title} className="flex flex-col gap-2 text-sm">
      <p className="text-xs font-medium text-gray-12">{title}</p>
      <ul className="flex flex-col gap-2 border-l border-gray-a3">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className={cn(
                '-ml-px block border-l py-0.5 transition-colors',
                item.depth === 3 ? 'pl-6' : 'pl-3',
                item.href === active
                  ? 'border-gray-12 text-emphasis'
                  : 'border-transparent text-default hover:text-emphasis'
              )}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

/** The words the pager supplies itself. Pass any of them to translate it. */
export type DocsPagerLabels = { helpful: string; yes: string; no: string; previous: string; next: string }

const docsPagerLabels: DocsPagerLabels = {
  helpful: 'Was this page helpful?',
  yes: 'Yes',
  no: 'No',
  previous: 'Previous',
  next: 'Next',
}

/**
 * Previous and next page, and the "was this helpful" row at the end of a
 * page. Set `feedback` to false when nothing records the answer.
 */
export function DocsPager({
  previous,
  next,
  feedback = true,
  labels,
}: {
  previous?: { label: string; href: string }
  next?: { label: string; href: string }
  feedback?: boolean
  labels?: Partial<DocsPagerLabels>
}) {
  const t = { ...docsPagerLabels, ...labels }
  return (
    <div className="mt-16 flex flex-col gap-8 border-t border-gray-a3 pt-8">
      {feedback ? (
        <div className="flex items-center gap-3 text-sm text-default">
          {t.helpful}
          <Button size="xs" aria-label={t.yes}>
            <ThumbsUp />
            {t.yes}
          </Button>
          <Button size="xs" aria-label={t.no}>
            <ThumbsDown />
            {t.no}
          </Button>
        </div>
      ) : null}
      <div className="grid gap-4 sm:grid-cols-2">
        {previous ? (
          <a
            href={previous.href}
            className="group flex flex-col gap-1 rounded-xl border border-gray-a3 p-4 transition-colors hover:bg-interactive"
          >
            <span className="flex items-center gap-1 text-xs text-default">
              <ChevronLeft className="size-3.5" /> {t.previous}
            </span>
            <span className="text-sm font-medium text-emphasis">{previous.label}</span>
          </a>
        ) : (
          <span />
        )}
        {next ? (
          <a
            href={next.href}
            className="group flex flex-col items-end gap-1 rounded-xl border border-gray-a3 p-4 text-right transition-colors hover:bg-interactive"
          >
            <span className="flex items-center gap-1 text-xs text-default">
              {t.next} <ChevronRight className="size-3.5" />
            </span>
            <span className="text-sm font-medium text-emphasis">{next.label}</span>
          </a>
        ) : null}
      </div>
    </div>
  )
}

/** The words the docs shell supplies itself. Pass any of them to translate it. */
export type DocsShellLabels = { navigation: string; openNavigation: string; badge: string }

const docsShellLabels: DocsShellLabels = {
  navigation: 'Documentation',
  openNavigation: 'Open navigation',
  badge: 'Docs',
}

/**
 * The documentation layout: a top bar with search, a left nav, the page,
 * and the table of contents on the right from xl. `search` defaults to the
 * search trigger; pass `null` when the docs have no search.
 */
export function DocsShell({
  groups,
  active,
  toc,
  homeHref = '/',
  topLinks = [],
  search = <SearchTrigger className="ml-auto hidden w-64 md:flex lg:ml-8" />,
  labels,
  children,
  className,
}: {
  groups: DocsNavGroup[]
  active?: string
  homeHref?: string
  toc?: React.ReactNode
  topLinks?: { label: string; href: string }[]
  search?: React.ReactNode
  labels?: Partial<DocsShellLabels>
  children: React.ReactNode
  className?: string
}) {
  const t = { ...docsShellLabels, ...labels }
  return (
    <div className={cn('min-h-dvh bg-background text-emphasis', className)}>
      <header className="sticky top-0 z-30 border-b border-gray-a3 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-[1440px] items-center gap-4 px-4 lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <IconButton aria-label={t.openNavigation} className="lg:hidden">
                <Menu />
              </IconButton>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 overflow-y-auto p-5 pt-14">
              <SheetTitle className="sr-only">{t.navigation}</SheetTitle>
              <DocsNav groups={groups} active={active} label={t.navigation} />
            </SheetContent>
          </Sheet>
          <a href={homeHref} className="flex items-center gap-2">
            <Logo />
            <span className="rounded-md border border-gray-a4 px-1.5 py-0.5 font-mono text-2xs tracking-wide text-gray-11 uppercase">
              {t.badge}
            </span>
          </a>
          {search}
          <nav className="ml-auto hidden items-center gap-1 md:flex">
            {topLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="rounded-lg px-2.5 py-1.5 text-sm text-default transition-colors hover:text-emphasis"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
      <div className="mx-auto flex max-w-[1440px] gap-10 px-4 lg:px-6">
        <aside className="sticky top-14 hidden h-[calc(100dvh-3.5rem)] w-60 shrink-0 overflow-y-auto py-8 lg:block">
          <DocsNav groups={groups} active={active} label={t.navigation} />
        </aside>
        <main className="min-w-0 flex-1 py-10">
          <div className="mx-auto max-w-3xl">{children}</div>
        </main>
        {toc ? (
          <aside className="sticky top-14 hidden h-[calc(100dvh-3.5rem)] w-56 shrink-0 py-10 xl:block">{toc}</aside>
        ) : null}
      </div>
    </div>
  )
}
