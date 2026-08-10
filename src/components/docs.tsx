import { CopyButton } from '@/components/copy-button'
import { cn } from '@/lib/utils'
import { Eyebrow } from '@/registry/dylo/ui/eyebrow'

export function Page({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-[860px] px-6 py-12 lg:px-12 lg:py-16">{children}</div>
}

export function PageHeader({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: React.ReactNode }) {
  return (
    <header className="mb-12 border-b border-line pb-8">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="mt-4 mb-0 text-h1 font-bold">{title}</h1>
      {lead && <p className="mt-4 mb-0 max-w-[62ch] text-[17px]/[1.6] text-graphite">{lead}</p>}
    </header>
  )
}

export function Section({
  title,
  description,
  children,
  className,
}: {
  title: string
  description?: React.ReactNode
  children?: React.ReactNode
  className?: string
}) {
  return (
    <section className={cn('mb-14', className)}>
      <h2 className="m-0 text-h3 font-semibold tracking-tight">{title}</h2>
      {description && <p className="mt-2 mb-0 max-w-[62ch] text-[15px]/[1.6] text-graphite">{description}</p>}
      {children && <div className="mt-5">{children}</div>}
    </section>
  )
}

export function Prose({ children }: { children: React.ReactNode }) {
  return <div className="max-w-[62ch] space-y-4 text-[15px]/[1.7] text-graphite">{children}</div>
}

/** Terminal line with a copy control. The label is the shell, not decoration. */
export function Command({ children }: { children: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-sm bg-ink px-4 py-3">
      <code className="overflow-x-auto font-mono text-[13px] whitespace-pre text-bone">
        <span className="text-concrete select-none">$ </span>
        {children}
      </code>
      <CopyButton value={children} className="shrink-0 border-graphite text-concrete hover:text-bone" />
    </div>
  )
}

export function CodeBlock({ code, language = 'tsx' }: { code: string; language?: string }) {
  return (
    <div className="relative rounded-sm border border-ink bg-ink">
      <div className="flex items-center justify-between border-b border-graphite px-4 py-2">
        <span className="font-mono text-[10px] tracking-eyebrow text-concrete uppercase">{language}</span>
        <CopyButton value={code} className="border-graphite text-concrete hover:text-bone" />
      </div>
      <pre className="m-0 overflow-x-auto p-4 font-mono text-[12.5px]/[1.6] text-bone">
        <code>{code}</code>
      </pre>
    </div>
  )
}

/** Frame for a live example: paper surface, ink hairline, generous padding. */
export function Preview({
  children,
  label,
  tone = 'light',
  className,
}: {
  children: React.ReactNode
  label?: string
  tone?: 'light' | 'ink'
  className?: string
}) {
  return (
    <div className="mb-4 rounded-sm border border-line">
      {label && (
        <div className="border-b border-line px-4 py-2 font-mono text-[10px] tracking-eyebrow text-concrete uppercase">
          {label}
        </div>
      )}
      <div className={cn('flex flex-wrap items-center gap-4 p-8', tone === 'ink' ? 'bg-ink' : 'bg-paper', className)}>
        {children}
      </div>
    </div>
  )
}

export type PropRow = { name: string; type: string; default?: string; description: string }

export function PropsTable({ rows }: { rows: PropRow[] }) {
  return (
    <div className="overflow-x-auto rounded-sm border border-line">
      <table className="w-full border-collapse text-left text-[14px]">
        <thead>
          <tr className="border-b border-line bg-paper">
            {['Prop', 'Type', 'Default'].map((heading) => (
              <th
                key={heading}
                scope="col"
                className="px-4 py-2.5 font-mono text-[10px] font-bold tracking-eyebrow text-concrete uppercase"
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name} className="border-b border-line align-top last:border-b-0">
              <td className="px-4 py-3">
                <code className="font-mono text-[13px] font-bold text-ink">{row.name}</code>
                <p className="mt-1 mb-0 text-[13px]/[1.5] text-graphite">{row.description}</p>
              </td>
              <td className="px-4 py-3">
                <code className="font-mono text-[12px] text-oxide">{row.type}</code>
              </td>
              <td className="px-4 py-3 font-mono text-[12px] text-concrete">{row.default ?? '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
