import { CopyButton } from '@/components/copy-button'
import { cn } from '@/lib/utils'
import { Eyebrow } from '@/registry/dylo/ui/eyebrow'

export function Page({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-[860px] px-6 py-12 lg:px-12 lg:py-16">{children}</div>
}

export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string
  title: string
  lead?: React.ReactNode
}) {
  return (
    <header className="border-line mb-12 border-b pb-8">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="text-h1 mt-4 mb-0 font-bold">{title}</h1>
      {lead && <p className="text-graphite mt-4 mb-0 max-w-[62ch] text-[17px]/[1.6]">{lead}</p>}
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
      <h2 className="text-h3 m-0 font-semibold tracking-tight">{title}</h2>
      {description && <p className="text-graphite mt-2 mb-0 max-w-[62ch] text-[15px]/[1.6]">{description}</p>}
      {children && <div className="mt-5">{children}</div>}
    </section>
  )
}

export function Prose({ children }: { children: React.ReactNode }) {
  return <div className="text-graphite max-w-[62ch] space-y-4 text-[15px]/[1.7]">{children}</div>
}

/** Terminal line with a copy control. The label is the shell, not decoration. */
export function Command({ children }: { children: string }) {
  return (
    <div className="bg-ink flex items-center justify-between gap-4 rounded-sm px-4 py-3">
      <code className="text-bone overflow-x-auto font-mono text-[13px] whitespace-pre">
        <span className="text-concrete select-none">$ </span>
        {children}
      </code>
      <CopyButton value={children} className="border-graphite text-concrete hover:text-bone shrink-0" />
    </div>
  )
}

export function CodeBlock({ code, language = 'tsx' }: { code: string; language?: string }) {
  return (
    <div className="border-ink bg-ink relative rounded-sm border">
      <div className="border-graphite flex items-center justify-between border-b px-4 py-2">
        <span className="text-concrete font-mono text-[10px] tracking-eyebrow uppercase">{language}</span>
        <CopyButton value={code} className="border-graphite text-concrete hover:text-bone" />
      </div>
      <pre className="text-bone m-0 overflow-x-auto p-4 font-mono text-[12.5px]/[1.6]">
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
    <div className="border-line mb-4 rounded-sm border">
      {label && (
        <div className="border-line text-concrete border-b px-4 py-2 font-mono text-[10px] tracking-eyebrow uppercase">
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
    <div className="border-line overflow-x-auto rounded-sm border">
      <table className="w-full border-collapse text-left text-[14px]">
        <thead>
          <tr className="border-line bg-paper border-b">
            {['Prop', 'Type', 'Default'].map((heading) => (
              <th
                key={heading}
                scope="col"
                className="text-concrete px-4 py-2.5 font-mono text-[10px] font-bold tracking-eyebrow uppercase"
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name} className="border-line border-b last:border-b-0 align-top">
              <td className="px-4 py-3">
                <code className="text-ink font-mono text-[13px] font-bold">{row.name}</code>
                <p className="text-graphite mt-1 mb-0 text-[13px]/[1.5]">{row.description}</p>
              </td>
              <td className="px-4 py-3">
                <code className="text-oxide font-mono text-[12px]">{row.type}</code>
              </td>
              <td className="text-concrete px-4 py-3 font-mono text-[12px]">{row.default ?? '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
