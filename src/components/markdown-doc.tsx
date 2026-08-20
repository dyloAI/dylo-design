import { cn } from '@/lib/utils'

/** Renders trusted markdown from `docs/`. Tables scroll sideways rather than wrapping. */
export function MarkdownDoc({ html, className }: { html: string; className?: string }) {
  return (
    <div
      className={cn(
        'overflow-x-auto text-[15px]/[1.7] text-graphite',
        '[&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-h3 [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-ink',
        '[&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-[18px] [&_h3]:font-semibold [&_h3]:text-ink',
        '[&_h4]:mt-6 [&_h4]:mb-2 [&_h4]:text-[15px] [&_h4]:font-semibold [&_h4]:text-ink',
        '[&_p]:my-4',
        '[&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-5',
        '[&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-5',
        '[&_li]:my-1',
        '[&_blockquote]:my-4 [&_blockquote]:border-l-2 [&_blockquote]:border-ink [&_blockquote]:pl-4 [&_blockquote]:text-ink',
        '[&_hr]:my-10 [&_hr]:border-line',
        '[&_code]:font-mono [&_code]:text-[13px] [&_code]:text-ink',
        '[&_pre]:overflow-x-auto [&_pre]:rounded-sm [&_pre]:border [&_pre]:border-line [&_pre]:bg-paper [&_pre]:p-4',
        '[&_table]:my-6 [&_table]:w-full [&_table]:border-collapse [&_table]:text-[13px]',
        '[&_th]:border [&_th]:border-line [&_th]:bg-paper [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:font-semibold [&_th]:text-ink',
        '[&_td]:border [&_td]:border-line [&_td]:px-3 [&_td]:py-2',
        '[&_strong]:font-semibold [&_strong]:text-ink',
        className
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
