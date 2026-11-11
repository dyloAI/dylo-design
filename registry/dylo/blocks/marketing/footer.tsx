import { cn } from '@/lib/utils'
import { StatusDot } from '@/registry/dylo/ui/badge'
import * as React from 'react'
import { GlowEdge } from './section'

export type FooterColumn = { title: string; links: { label: string; href: string }[] }

/** "All systems normal" as a pill; it links to the status page. */
export function StatusPill({
  href = '/status',
  tone = 'success',
  children = 'All systems normal',
}: {
  href?: string
  tone?: 'success' | 'warning' | 'error' | 'neutral'
  children?: React.ReactNode
}) {
  return (
    <a
      href={href}
      className="group relative flex w-fit items-center gap-x-2.5 overflow-hidden rounded-full border border-gray-a3 py-2 pr-4 pl-3.5 text-xs text-emphasis ring-focus outline-hidden focus-visible:ring-2"
    >
      <span
        aria-hidden
        className="absolute inset-0 bg-linear-to-t from-gray-a6 to-gray-a12 opacity-10 transition-opacity duration-300 ease-dylo group-hover:opacity-15"
      />
      <StatusDot tone={tone} pulse={tone === 'success'} />
      <span className="relative">{children}</span>
    </a>
  )
}

/**
 * The five-column footer: address, social links and status on the left,
 * link columns on the right, with the legal line underneath.
 */
export function MarketingFooter({
  address,
  socials = [],
  columns,
  legal,
  className,
}: {
  address: React.ReactNode
  socials?: { label: string; href: string; icon: React.ReactNode }[]
  columns: FooterColumn[]
  legal?: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('relative z-20 overflow-hidden border-t border-gray-a3 bg-background', className)}>
      <GlowEdge width="w-[40%]" />
      <footer className="mx-auto flex max-w-5xl flex-col gap-12 px-6 pt-36 pb-16 md:max-w-7xl">
        <div className="flex flex-col gap-12 md:flex-row md:gap-8">
          <div className="flex min-w-48 flex-col justify-start gap-8 md:min-w-[18.75rem]">
            <p className="text-xs text-default">{address}</p>
            {socials.length ? (
              <div className="flex gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="inline-flex size-8 items-center justify-center rounded-full text-default transition duration-150 ease-in-out hover:bg-gray-a2 hover:text-emphasis focus-visible:ring-2 focus-visible:ring-gray-a4 focus-visible:outline-hidden [&_svg]:size-4"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            ) : null}
            <StatusPill />
          </div>
          <div className="grid w-full grid-cols-2 gap-8 lg:grid-cols-5">
            {columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-4">
                <p className="mb-2 ml-1 text-sm text-emphasis">{col.title}</p>
                <ul className="flex flex-col gap-4">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="rounded-md px-1 py-0.5 text-sm text-default outline-hidden transition duration-150 ease-in-out hover:text-emphasis focus-visible:text-emphasis focus-visible:ring-2 focus-visible:ring-gray-a4"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {legal ? <p className="border-t border-gray-a3 pt-6 text-xs text-gray-10">{legal}</p> : null}
      </footer>
    </div>
  )
}
