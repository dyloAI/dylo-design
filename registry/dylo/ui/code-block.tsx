'use client'

import { cn } from '@/lib/utils'
import { Check, Copy } from 'lucide-react'
import * as React from 'react'

/** Inline code in running text. */
export function Code({ className, ...props }: React.ComponentProps<'code'>) {
  return (
    <code
      data-slot="code"
      className={cn(
        'rounded-md border border-gray-a3 bg-interactive px-1 py-px font-mono text-[0.85em] text-emphasis',
        className
      )}
      {...props}
    />
  )
}

/** Copies `value` and swaps the icon to a check for two seconds. */
export function CopyButton({
  value,
  className,
  label = 'Copy to clipboard',
}: {
  value: string
  className?: string
  label?: string
}) {
  const [copied, setCopied] = React.useState(false)
  React.useEffect(() => {
    if (!copied) return
    const t = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(t)
  }, [copied])

  return (
    <button
      type="button"
      aria-label={copied ? 'Copied' : label}
      onClick={() => navigator.clipboard?.writeText(value).then(() => setCopied(true))}
      className={cn(
        'inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-gray-a3 text-default',
        'ring-focus transition-colors duration-200 ease-in-out hover:bg-interactive-hover hover:text-emphasis focus-visible:ring-2 focus-visible:outline-hidden',
        className
      )}
    >
      {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
    </button>
  )
}

const KEYWORDS = new Set(
  'import from export default const let var function async await return new if else for while class extends type interface of in true false null undefined def end do package fn pub use struct impl func'.split(
    ' '
  )
)

type Token = { kind: 'plain' | 'keyword' | 'string' | 'punct' | 'comment' | 'number' | 'fn'; text: string }

/* Lossless: whatever the pattern does not recognise (an "@", a stray quote)
   is kept as plain text, so the block always shows exactly what it was given.
   Identifiers are any letters, not just ASCII, so "Código" stays one word. */
function tokenize(line: string): Token[] {
  const out: Token[] = []
  const re =
    /(\/\/.*$|#.*$)|('[^']*'|"[^"]*"|`[^`]*`)|(\b\d+(?:\.\d+)?\b)|([\p{L}_$][\p{L}\p{N}_$]*)(?=\s*\()|([\p{L}_$][\p{L}\p{N}_$]*)|([{}()[\];:.,=<>+\-*/!?&|]+)|(\s+)/gu
  let last = 0
  let m: RegExpExecArray | null
  while ((m = re.exec(line))) {
    if (m.index > last) out.push({ kind: 'plain', text: line.slice(last, m.index) })
    last = re.lastIndex
    if (m[1]) out.push({ kind: 'comment', text: m[1] })
    else if (m[2]) out.push({ kind: 'string', text: m[2] })
    else if (m[3]) out.push({ kind: 'number', text: m[3] })
    else if (m[4]) out.push({ kind: KEYWORDS.has(m[4]) ? 'keyword' : 'fn', text: m[4] })
    else if (m[5]) out.push({ kind: KEYWORDS.has(m[5]) ? 'keyword' : 'plain', text: m[5] })
    else if (m[6]) out.push({ kind: 'punct', text: m[6] })
    else out.push({ kind: 'plain', text: m[0] })
  }
  if (last < line.length) out.push({ kind: 'plain', text: line.slice(last) })
  return out
}

const tokenClass: Record<Token['kind'], string> = {
  plain: 'text-gray-12',
  fn: 'text-gray-12',
  keyword: 'text-gray-9',
  string: 'text-gray-11',
  number: 'text-gray-11',
  punct: 'text-gray-10',
  comment: 'text-gray-8 italic',
}

/** Line-numbered code in the grayscale palette. No colour, no highlighter. */
export function CodeLines({
  code,
  lineNumbers = true,
  className,
}: {
  code: string
  lineNumbers?: boolean
  className?: string
}) {
  const lines = code.replace(/\n$/, '').split('\n')
  return (
    <pre data-slot="code-lines" className={cn('overflow-auto py-4 pr-3 font-mono text-sm leading-6', className)}>
      {lines.map((line, i) => (
        <div key={i} className="relative flex pl-3.5">
          {lineNumbers ? (
            <span className="inline-block w-8 shrink-0 pr-4 text-right text-gray-7 select-none">{i + 1}</span>
          ) : null}
          <span className="whitespace-pre">
            {tokenize(line).map((t, j) => (
              <span key={j} className={tokenClass[t.kind]}>
                {t.text}
              </span>
            ))}
            {line.length === 0 ? ' ' : null}
          </span>
        </div>
      ))}
    </pre>
  )
}

export type CodeSample = { label: string; code: string; icon?: React.ReactNode }

/**
 * A framed code sample with framework tabs and a copy button: the
 * "Integrate" panel of the marketing page, and the snippets in the app.
 */
export function CodeBlock({
  samples,
  className,
  height,
  footer,
}: {
  samples: CodeSample[]
  className?: string
  /** Fixed body height, e.g. 'h-[500px]'. */
  height?: string
  footer?: React.ReactNode
}) {
  const [active, setActive] = React.useState(0)
  const sample = samples[active] ?? samples[0]

  return (
    <div
      data-slot="code-block"
      className={cn('relative w-full overflow-hidden rounded-2xl border border-gray-a3 bg-surface', className)}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 z-10 hidden glow-line w-[300px] dark:block"
      />
      <header className="flex h-14 items-center justify-between gap-2 border-b border-gray-a3 px-3">
        <div role="tablist" className="flex min-w-0 items-center gap-1.5 overflow-x-auto">
          {samples.map((s, i) => {
            const selected = i === active
            return (
              <button
                key={s.label}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(i)}
                className={cn(
                  'relative h-8 shrink-0 cursor-pointer rounded-lg p-px text-sm ring-gray-a4 outline-hidden transition duration-200 ease-in-out focus-visible:ring-2',
                  selected ? 'bg-linear-to-b from-gray-a3 to-gray-a2 text-emphasis' : 'text-default hover:text-emphasis'
                )}
              >
                <span
                  className={cn(
                    'flex h-full items-center gap-1.5 rounded-[7px] px-2',
                    selected && 'bg-linear-to-b from-gray-2 to-surface'
                  )}
                >
                  {s.icon}
                  {s.label}
                </span>
              </button>
            )
          })}
        </div>
        <CopyButton value={sample.code} />
      </header>
      <div className={cn('overflow-auto', height)}>
        <CodeLines code={sample.code} />
      </div>
      {footer ? (
        <footer className="flex items-center gap-4 border-t border-gray-a3 px-4 py-3 text-xs text-default">
          {footer}
        </footer>
      ) : null}
    </div>
  )
}
