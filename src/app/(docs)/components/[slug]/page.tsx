import { Code, Command, InlineCode, Page, PageHeader, Preview, PropsTable, Prose, Section } from '@/components/docs'
import { componentDocs, componentLead, getComponentDoc } from '@/lib/component-docs'
import { componentGroups, componentTitle } from '@/lib/navigation'
import { install } from '@/lib/registry'
import { CodeLines } from '@/registry/dylo/ui/code-block'
import { ChevronRight } from 'lucide-react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { readFile } from 'node:fs/promises'
import path from 'node:path'

type Params = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return componentDocs.map((doc) => ({ slug: doc.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  return getComponentDoc(slug) ? { title: componentTitle(slug), description: componentLead(slug) } : {}
}

export default async function ComponentPage({ params }: Params) {
  const doc = getComponentDoc((await params).slug)
  if (!doc) notFound()

  const file = `dylo/ui/${doc.source ?? `${doc.slug}.tsx`}`
  // Read from the registry so the published source and the documented source
  // can never drift apart. Kept scoped to `registry/` so the build does not
  // trace the whole project into the server bundle.
  const source = await readFile(path.join(process.cwd(), 'registry', file), 'utf8')
  const group = componentGroups.find((g) => g.slugs.includes(doc.slug))?.title ?? 'Component'

  return (
    <Page>
      <PageHeader
        eyebrow={group}
        title={componentTitle(doc.slug)}
        lead={<InlineCode text={componentLead(doc.slug)} />}
      />

      <Section title="Install">
        <Command>{install(doc.slug)}</Command>
      </Section>

      <Section title="Usage">
        <Code code={doc.usage} />
      </Section>

      <Section title="Examples" description="Each example renders in the light theme and the dark theme.">
        {doc.examples.map((example) => (
          <div key={example.title} className="mb-8">
            <h3 className="text-sm font-medium text-emphasis">{example.title}</h3>
            {example.description && (
              <p className="mt-1 mb-3 max-w-[64ch] text-[0.8125rem] leading-5 text-default">{example.description}</p>
            )}
            <div className={example.description ? undefined : 'mt-3'}>
              <Preview layout={example.layout} className={example.className}>
                {example.render}
              </Preview>
            </div>
          </div>
        ))}
      </Section>

      {doc.props && (
        <Section title="Props" description="Every prop of the underlying element or Radix part passes through as well.">
          <PropsTable rows={doc.props} />
        </Section>
      )}

      {doc.notes && (
        <Section title="Notes">
          <Prose>
            <ul className="list-disc space-y-2 pl-5">
              {doc.notes.map((note, i) => (
                <li key={i}>{note}</li>
              ))}
            </ul>
          </Prose>
        </Section>
      )}

      <Section title="Source" description={`registry/${file}`}>
        <details className="group overflow-hidden rounded-2xl border border-gray-a3">
          <summary className="flex cursor-pointer items-center gap-2 px-4 py-3 text-sm font-medium text-default select-none hover:text-emphasis">
            <ChevronRight aria-hidden className="size-4 transition-transform duration-150 group-open:rotate-90" />
            Show source
          </summary>
          <div className="max-h-[640px] overflow-auto border-t border-gray-a3 bg-subtle p-4">
            <CodeLines code={source} />
          </div>
        </details>
      </Section>
    </Page>
  )
}
