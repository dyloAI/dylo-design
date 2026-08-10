import { CodeBlock, Command, Page, PageHeader, PropsTable, Prose, Section } from '@/components/docs'
import { componentDocs, getComponentDoc } from '@/lib/component-docs'
import { install } from '@/lib/registry'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { readFile } from 'node:fs/promises'
import path from 'node:path'

type Params = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return componentDocs.map((doc) => ({ slug: doc.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const doc = getComponentDoc((await params).slug)
  return doc ? { title: doc.name, description: doc.lead } : {}
}

export default async function ComponentPage({ params }: Params) {
  const doc = getComponentDoc((await params).slug)
  if (!doc) notFound()

  // Read from the registry so the published source and the documented source
  // can never drift apart. Kept scoped to `registry/` so the build does not
  // trace the whole project into the server bundle.
  const source = await readFile(path.join(process.cwd(), 'registry', doc.source), 'utf8')

  return (
    <Page>
      <PageHeader eyebrow="Component" title={doc.name} lead={doc.lead} />

      <Section title="Install">
        <Command>{install(doc.slug)}</Command>
      </Section>

      <Section title="Usage">
        <CodeBlock code={doc.usage} />
      </Section>

      <Section title="Examples">{doc.examples}</Section>

      <Section title="Props" description="Every prop of the underlying element passes through as well.">
        <PropsTable rows={doc.props} />
      </Section>

      {doc.notes && (
        <Section title="Notes">
          <Prose>{doc.notes}</Prose>
        </Section>
      )}

      <Section title="Source" description={`registry/${doc.source}`}>
        <details className="rounded-sm border border-line">
          <summary className="cursor-pointer px-4 py-3 font-mono text-[11px] tracking-eyebrow text-graphite uppercase hover:text-ink">
            Show source
          </summary>
          <div className="p-4 pt-0">
            <CodeBlock code={source} />
          </div>
        </details>
      </Section>
    </Page>
  )
}
