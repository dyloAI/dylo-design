'use client'

import { cn } from '@/lib/utils'
import * as React from 'react'
import { FadePanel, FeatureTitle, GlowEdge, Section, SectionLead, SectionTitle, container } from './section'

export type Feature = { icon?: React.ReactNode; title: React.ReactNode; body: React.ReactNode }

function IconTile({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-6 bg-linear-to-bl from-gray-a3 text-slate-12 [&_svg]:size-[18px]',
        className
      )}
    >
      {children}
    </span>
  )
}

/**
 * Three columns of small features under a headline, on a panel with a glowing
 * top edge: "Reach humans, not spam folders".
 */
export function FeatureGrid({
  title,
  lead,
  features,
  className,
}: {
  title: React.ReactNode
  lead?: React.ReactNode
  features: Feature[]
  className?: string
}) {
  return (
    <section
      className={cn(
        container,
        'relative mt-12 overflow-hidden rounded-3xl border-t border-slate-6 py-20 sm:py-24 md:mt-0',
        className
      )}
    >
      <GlowEdge />
      <span
        aria-hidden
        className="pointer-events-none absolute -top-0.5 -left-0.5 h-[calc(100%+4px)] w-[calc(100%+4px)] fade-edges"
      />
      <SectionTitle className="relative z-20 mb-4 max-w-md">{title}</SectionTitle>
      {lead ? <SectionLead className="relative z-20 max-w-xl">{lead}</SectionLead> : null}
      <div className="relative z-20 mt-12 grid w-full grid-cols-1 gap-12 sm:grid-cols-2 md:gap-20 lg:grid-cols-3">
        {features.map((f, i) => (
          <div key={i} className="flex w-full flex-col gap-3 md:gap-2">
            <div className="flex flex-row items-center gap-3 md:flex-col md:items-start md:gap-4">
              {f.icon ? <IconTile>{f.icon}</IconTile> : null}
              <FeatureTitle>{f.title}</FeatureTitle>
            </div>
            <p className="text-sm leading-[1.6] text-gray-11">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/** Two large panels side by side, each with a title, a line and a visual. */
export function FeaturePanels({
  title,
  lead,
  panels,
  className,
}: {
  title: React.ReactNode
  lead?: React.ReactNode
  panels: (Feature & { visual?: React.ReactNode })[]
  className?: string
}) {
  return (
    <Section className={className}>
      <SectionTitle className="mb-3 text-center md:text-left">{title}</SectionTitle>
      {lead ? <SectionLead className="mb-12 text-center md:text-left">{lead}</SectionLead> : null}
      <div className="grid grid-cols-1 gap-12 md:gap-8 lg:grid-cols-2">
        {panels.map((p, i) => (
          <FadePanel key={i} className="min-h-[420px]">
            <div className="flex flex-col gap-2 px-8 pt-8">
              <FeatureTitle>{p.title}</FeatureTitle>
              <p className="max-w-md text-sm leading-[1.6] text-gray-11">{p.body}</p>
            </div>
            {p.visual ? <div className="px-8 pb-8">{p.visual}</div> : null}
          </FadePanel>
        ))}
      </div>
    </Section>
  )
}

/**
 * Three tab cards above a single panel: "Everything in your control". The
 * active card gets a lit border and a tinted icon.
 */
export function FeatureTabs({
  title,
  lead,
  tabs,
  className,
}: {
  title: React.ReactNode
  lead?: React.ReactNode
  tabs: (Feature & { id: string; panel: React.ReactNode })[]
  className?: string
}) {
  const [active, setActive] = React.useState(tabs[0]?.id)
  const current = tabs.find((t) => t.id === active) ?? tabs[0]
  return (
    <Section className={className}>
      <SectionTitle className="mb-2 text-center">{title}</SectionTitle>
      {lead ? <SectionLead className="mb-8 text-center md:mb-16">{lead}</SectionLead> : null}
      <div role="tablist" className="mb-3 grid grid-cols-1 gap-3 md:mb-8 md:gap-8 lg:grid-cols-3">
        {tabs.map((t) => {
          const selected = t.id === current?.id
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={selected}
              data-active={selected || undefined}
              onClick={() => setActive(t.id)}
              className={cn(
                'group relative flex h-[3.75rem] cursor-pointer overflow-hidden rounded-2xl p-px text-left outline-hidden md:h-[5.625rem]',
                'bg-slate-6 ring-focus focus-visible:ring-2 data-[active]:bg-linear-to-br data-[active]:from-slate-11 data-[active]:via-slate-6 data-[active]:to-slate-6'
              )}
            >
              <span className="relative flex h-full w-full flex-wrap items-center gap-2 rounded-[15px] bg-background px-4 py-2 group-data-[active]:bg-linear-to-b group-data-[active]:from-gray-a2 group-data-[active]:to-background md:gap-4 md:p-6">
                <IconTile className="group-data-[active]:from-gray-a4 group-data-[active]:text-green-9 md:border">
                  {t.icon}
                </IconTile>
                <span className="font-display effect-font-styling text-base tracking-tighter text-slate-12">
                  {t.title}
                </span>
              </span>
            </button>
          )
        })}
      </div>
      {current ? (
        <div role="tabpanel" key={current.id} className="animate-fade-in">
          {current.panel}
        </div>
      ) : null}
    </Section>
  )
}

/** Big numbers in a row, separated by hairlines: the about and enterprise pages. */
export function StatsRow({ stats, className }: { stats: { value: string; label: string }[]; className?: string }) {
  return (
    <dl className={cn(container, 'grid grid-cols-2 divide-gray-a3 py-12 md:grid-cols-4 md:divide-x', className)}>
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col gap-1 px-6 py-4 text-center">
          <dt className="order-2 text-sm text-gray-11">{s.label}</dt>
          <dd className="font-display effect-font-styling text-[2.5rem] leading-tight tracking-tighter text-gray-12">
            {s.value}
          </dd>
        </div>
      ))}
    </dl>
  )
}

/** A two-column feature row for feature pages: text on one side, a visual on the other. */
export function FeatureSplit({
  title,
  body,
  points,
  visual,
  reverse = false,
  className,
}: {
  title: React.ReactNode
  body: React.ReactNode
  points?: string[]
  visual: React.ReactNode
  reverse?: boolean
  className?: string
}) {
  return (
    <Section className={cn('grid items-center gap-12 md:grid-cols-2', className)}>
      <div className={cn('flex flex-col gap-4', reverse && 'md:order-2')}>
        <h2 className="effect-font-gradient font-display effect-font-styling text-[2.25rem] leading-[130%] tracking-tighter">
          {title}
        </h2>
        <SectionLead>{body}</SectionLead>
        {points ? (
          <ul className="mt-2 flex flex-col gap-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-gray-11">
                <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-gray-12" />
                {p}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <div className={cn(reverse && 'md:order-1')}>{visual}</div>
    </Section>
  )
}
