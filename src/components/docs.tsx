import { cn } from '@/lib/utils'
import { CodeBlock, CopyButton } from '@/registry/dylo/ui/code-block'
import Link from 'next/link'

/** Render `backtick` spans in plain registry text as inline code. */
export function InlineCode({ text }: { text: string }) {
  return (
    <>
      {text.split(/(`[^`]+`)/g).map((part, i) =>
        part.startsWith('`') && part.endsWith('`') ? (
          <code key={i} className="rounded-md bg-gray-a3 px-1 py-px font-mono text-[0.85em] text-emphasis">
            {part.slice(1, -1)}
          </code>
        ) : (
          part
        )
      )}
    </>
  )
}

export function Page({ children, wide = false }: { children: React.ReactNode; wide?: boolean }) {
  return (
    <div className={cn('mx-auto px-6 py-12 lg:px-12 lg:py-16', wide ? 'max-w-[1180px]' : 'max-w-[920px]')}>
      {children}
    </div>
  )
}

export function PageHeader({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: React.ReactNode }) {
  return (
    <header className="mb-12 border-b border-gray-a3 pb-8">
      <p className="font-mono text-xs tracking-wide text-gray-10 uppercase">{eyebrow}</p>
      <h1 className="mt-3 effect-font-gradient font-display effect-font-styling text-[2.5rem] leading-tight font-medium tracking-tight">
        {title}
      </h1>
      {lead && <p className="mt-4 max-w-[64ch] text-base leading-7 text-default">{lead}</p>}
    </header>
  )
}

export function Section({
  title,
  description,
  children,
  className,
  id,
}: {
  title: string
  description?: React.ReactNode
  children?: React.ReactNode
  className?: string
  id?: string
}) {
  return (
    <section id={id} className={cn('mb-14 scroll-mt-8', className)}>
      <h2 className="font-display effect-font-styling text-xl font-medium tracking-tight text-emphasis">{title}</h2>
      {description && <p className="mt-2 max-w-[64ch] text-sm leading-6 text-default">{description}</p>}
      {children && <div className="mt-5">{children}</div>}
    </section>
  )
}

export function Prose({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'prose-docs max-w-[64ch] space-y-4 text-sm leading-7 text-default',
        '[&_code]:rounded-md [&_code]:bg-gray-a3 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.8125rem] [&_code]:text-emphasis',
        '[&_strong]:font-semibold [&_strong]:text-emphasis',
        className
      )}
    >
      {children}
    </div>
  )
}

/** A terminal line with a copy control. */
export function Command({ children }: { children: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-gray-a3 bg-subtle py-2 pr-2 pl-4">
      <code className="overflow-x-auto font-mono text-[0.8125rem] whitespace-pre text-emphasis">
        <span className="text-gray-9 select-none">$ </span>
        {children}
      </code>
      <CopyButton value={children} className="size-7 shrink-0" />
    </div>
  )
}

export function Code({ code, language = 'tsx' }: { code: string; language?: string }) {
  return <CodeBlock samples={[{ label: language, code }]} />
}

/**
 * The frame around a live example. It renders the example twice, once under
 * `.light` and once under `.dark`, so every page shows both themes. Use
 * `layout="stack"` for wide examples. Portalled overlays (menus, dialogs)
 * follow the site theme, not the pane.
 */
export function Preview({
  children,
  label,
  layout = 'split',
  className,
}: {
  /** A function receives the pane's theme, so ids stay unique across the two panes. */
  children: React.ReactNode | ((theme: 'light' | 'dark') => React.ReactNode)
  label?: string
  layout?: 'split' | 'stack'
  className?: string
}) {
  const pane = (theme: 'light' | 'dark') => (
    <div className={cn(theme, 'relative bg-background text-emphasis')}>
      <span className="absolute top-2 right-3 font-mono text-2xs tracking-wide text-gray-9 uppercase select-none">
        {theme}
      </span>
      <div className={cn('flex flex-wrap items-center gap-4 p-8', className)}>
        {typeof children === 'function' ? children(theme) : children}
      </div>
    </div>
  )
  return (
    <div className="mb-4 overflow-hidden rounded-2xl border border-gray-a3">
      {label && (
        <div className="border-b border-gray-a3 bg-subtle px-4 py-2 text-xs font-medium text-default">{label}</div>
      )}
      <div
        className={cn(
          'grid divide-gray-a3',
          layout === 'split' ? 'divide-y lg:grid-cols-2 lg:divide-x lg:divide-y-0' : 'divide-y'
        )}
      >
        {pane('light')}
        {pane('dark')}
      </div>
    </div>
  )
}

export type PropRow = { name: string; type: string; default?: string; description: string }

export function PropsTable({ rows }: { rows: PropRow[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-a3">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-gray-a3 bg-gray-a2">
            {['Prop', 'Type', 'Default'].map((heading) => (
              <th key={heading} scope="col" className="h-9 px-4 text-xs font-medium text-default">
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name} className="border-b border-gray-a3 align-top last:border-b-0">
              <td className="px-4 py-3">
                <code className="font-mono text-[0.8125rem] font-semibold text-emphasis">{row.name}</code>
                <p className="mt-1 text-[0.8125rem] leading-5 text-default">{row.description}</p>
              </td>
              <td className="px-4 py-3">
                <code className="font-mono text-xs text-info">{row.type}</code>
              </td>
              <td className="px-4 py-3 font-mono text-xs text-gray-10">{row.default ?? '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/** A link card: title, one line, and where it goes. */
export function LinkCard({ href, title, children }: { href: string; title: string; children?: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-1 rounded-2xl border border-gray-a3 p-4 transition-colors hover:border-gray-a5 hover:bg-interactive"
    >
      <span className="text-sm font-medium text-emphasis">{title}</span>
      {children ? <span className="text-[0.8125rem] leading-5 text-default">{children}</span> : null}
    </Link>
  )
}
