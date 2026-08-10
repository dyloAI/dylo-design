import { Page, PageHeader, Prose, Section } from '@/components/docs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brand book',
  description: 'Fourteen pages: the idea, the name, the logo system, colour, type, voice and applications.',
}

export default function BrandBookPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Kit"
        title="Brand book"
        lead="Fourteen pages covering the idea, the name, the logo system, colour, type, voice and applications. Use it to bring someone new onto the brand, or as the starting point for a client-facing deck."
      />

      <Section title="The document">
        <div className="overflow-hidden rounded-sm border border-line">
          <iframe
            src="/brand-book/index.html"
            title="dylo brand book"
            className="h-[80vh] w-full bg-bone"
            loading="lazy"
          />
        </div>
        <Prose>
          <p className="mt-4">
            Open it{' '}
            <a href="/brand-book/index.html" target="_blank" rel="noreferrer">
              in its own tab
            </a>{' '}
            to page through it full size, or print to PDF — the stylesheet has a landscape print layout, one spread per
            page.
          </p>
        </Prose>
      </Section>
    </Page>
  )
}
