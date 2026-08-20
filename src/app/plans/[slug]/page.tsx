import { Gate } from '@/components/gate'
import { MarkdownDoc } from '@/components/markdown-doc'
import { Page, PageHeader } from '@/components/docs'
import { GATE_COOKIE, isGatePath, isValidToken } from '@/lib/gate'
import { planDocs, type PlanSlug } from '@/lib/plan-docs'
import { marked } from 'marked'
import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { notFound } from 'next/navigation'
import { readFile } from 'node:fs/promises'
import path from 'node:path'

type Params = { params: Promise<{ slug: string }>; searchParams: Promise<{ e?: string }> }

function isPlanSlug(value: string): value is PlanSlug {
  return value in planDocs
}

export function generateStaticParams() {
  return Object.keys(planDocs).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const slug = (await params).slug
  const doc = isPlanSlug(slug) ? planDocs[slug] : undefined
  return doc ? { title: doc.title, robots: { index: false, follow: false } } : {}
}

export default async function PlanPage({ params, searchParams }: Params) {
  const [{ slug }, { e }] = await Promise.all([params, searchParams])
  if (!isPlanSlug(slug)) notFound()

  const doc = planDocs[slug]
  const next = `/plans/${slug}`
  if (!isGatePath(next)) notFound()

  const jar = await cookies()
  if (!isValidToken(jar.get(GATE_COOKIE)?.value)) {
    return <Gate error={e === '1'} next={next} title={doc.title} lead={doc.lead} />
  }

  const source = await readFile(path.join(process.cwd(), 'docs', doc.file), 'utf8')
  const html = await marked.parse(stripFirstHeading(source), { gfm: true })

  return (
    <Page>
      <PageHeader eyebrow="Plan" title={doc.title} lead={doc.lead} />
      <MarkdownDoc html={html} />
    </Page>
  )
}

function stripFirstHeading(markdown: string) {
  return markdown.replace(/^# .+\n+/, '')
}
