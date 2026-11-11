import { cn } from '@/lib/utils'
import { ArrowUpRight } from 'lucide-react'
import * as React from 'react'
import { container } from './section'

export type CustomerStory = { name: string; href: string; logo?: React.ReactNode; summary: string; metric?: string }

/**
 * A tall story card: the logo centred, the summary rising in on hover, and
 * a soft light from the bottom edge.
 */
export function CustomerCard({
  story,
  readLabel = 'Read story',
  className,
}: {
  story: CustomerStory
  readLabel?: string
  className?: string
}) {
  return (
    <a
      href={story.href}
      className={cn(
        'group block w-full rounded-xl outline-hidden focus-visible:ring-2 focus-visible:ring-gray-a4',
        className
      )}
    >
      <div className="relative flex h-96 flex-col items-center justify-center overflow-hidden rounded-xl border border-gray-a3 bg-subtle transition-colors duration-300 group-hover:border-gray-a4">
        <div className="transition-transform duration-500 ease-dylo group-hover:-translate-y-6">
          {story.logo ?? (
            <span className="font-display text-3xl font-semibold tracking-tight text-gray-12">{story.name}</span>
          )}
        </div>
        <div className="absolute inset-x-0 bottom-0 flex translate-y-4 flex-col gap-2 p-6 opacity-0 transition-all duration-500 ease-dylo group-hover:translate-y-0 group-hover:opacity-100">
          {story.metric ? <span className="font-display text-xl text-gray-12">{story.metric}</span> : null}
          <p className="text-sm leading-[1.6] text-gray-11">{story.summary}</p>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-gray-12">
            {readLabel} <ArrowUpRight className="size-3.5" />
          </span>
        </div>
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-40 h-[200px] w-full rounded-full bg-[radial-gradient(301%_301%_at_50%_250%,var(--dylo-gray-a8)_0%,var(--dylo-gray-a2)_75%,transparent_100%)] opacity-50 blur-xs"
        />
      </div>
    </a>
  )
}

/** Featured stories two-up, then the rest in a three-column grid and a logo wall. */
export function CustomersGrid({
  featured,
  stories,
  logos = [],
  readLabel,
  className,
}: {
  featured: CustomerStory[]
  stories: CustomerStory[]
  logos?: React.ReactNode[]
  readLabel?: string
  className?: string
}) {
  return (
    <div className={cn(container, 'flex flex-col gap-6 pb-24', className)}>
      <div className="grid gap-6 md:grid-cols-2">
        {featured.map((s) => (
          <CustomerCard key={s.name} story={s} readLabel={readLabel} />
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stories.map((s) => (
          <CustomerCard key={s.name} story={s} readLabel={readLabel} />
        ))}
      </div>
      {logos.length ? (
        <ul className="mt-12 grid grid-cols-2 border-t border-l border-gray-a3 sm:grid-cols-3 lg:grid-cols-4">
          {logos.map((logo, i) => (
            <li
              key={i}
              className="relative flex h-40 items-center justify-center border-r border-b border-gray-a3 px-4 text-gray-11"
            >
              {typeof logo === 'string' ? (
                <span className="font-display text-xl font-semibold tracking-tight">{logo}</span>
              ) : (
                logo
              )}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

/** The header of a case study: name, headline, and the facts in a row. */
export function CaseStudyHeader({
  name,
  title,
  facts,
  eyebrow = 'Customer story',
  className,
}: {
  name: string
  title: React.ReactNode
  facts: { label: string; value: string }[]
  /** The words before the name in the line above the headline. */
  eyebrow?: string
  className?: string
}) {
  return (
    <header className={cn('mx-auto w-full max-w-3xl px-6 pt-24 md:pt-32', className)}>
      <span className="font-mono text-xs tracking-widest text-gray-10 uppercase">
        {eyebrow} · {name}
      </span>
      <h1 className="mt-4 effect-font-gradient font-display effect-font-styling text-[2.75rem] leading-[115%] tracking-tighter text-balance md:text-[3.5rem]">
        {title}
      </h1>
      <dl className="mt-10 grid grid-cols-2 gap-6 border-y border-gray-a3 py-6 sm:grid-cols-4">
        {facts.map((f) => (
          <div key={f.label} className="flex flex-col gap-1">
            <dt className="text-xs text-gray-10">{f.label}</dt>
            <dd className="text-sm text-gray-12">{f.value}</dd>
          </div>
        ))}
      </dl>
    </header>
  )
}
