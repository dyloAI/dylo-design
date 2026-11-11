import { Command, LinkCard, Page, PageHeader, Prose, Section } from '@/components/docs'
import { authScreens, dashboardPages, m, marketingPages, type KitPage } from '@/lib/kits'
import { install } from '@/lib/registry'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kits',
  description: 'Every dashboard section, marketing page and auth screen, assembled from the primitives.',
}

function grouped(pages: KitPage[]) {
  const groups = new Map<string, KitPage[]>()
  for (const page of pages) groups.set(page.group, [...(groups.get(page.group) ?? []), page])
  return [...groups.entries()]
}

function KitSection({
  title,
  description,
  item,
  pages,
  href,
}: {
  title: string
  description: string
  item?: string
  pages: KitPage[]
  href: (path: string) => string
}) {
  return (
    <Section title={title} description={description}>
      {item ? (
        <div className="mb-6">
          <Command>{install(item)}</Command>
        </div>
      ) : null}
      <div className="flex flex-col gap-6">
        {grouped(pages).map(([group, items]) => (
          <div key={group}>
            <h3 className="mb-2 text-xs font-medium text-gray-10">{group}</h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((page) => (
                <LinkCard key={page.path} href={href(page.path)} title={page.title}>
                  {page.note}
                </LinkCard>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default function KitsPage() {
  return (
    <Page wide>
      <PageHeader
        eyebrow="Kits"
        title="Kits"
        lead="Whole screens built only from the registry primitives. Each one opens full-page, with a theme switch at the bottom, so it can be checked in light and dark."
      />
      <Prose className="mb-12">
        <p>
          The kits install into <code>src/components/dashboard</code> and <code>src/components/marketing</code>. Data
          and copy are placeholders: the dashboard reads from <code>data.ts</code>, and the marketing pages use sample
          copy taken from the wording in dylo-hq. They are layouts, not dylo&apos;s copy.
        </p>
      </Prose>
      <KitSection
        title="Dashboard"
        description="The product: sidebar shell, list pages, details, editors, dialogs, sheets and empty states."
        item="dashboard-kit"
        pages={dashboardPages}
        href={(p) => `/kits/dashboard/${p}`}
      />
      <KitSection
        title="Auth"
        description="Log in, sign up and recovery on the frosted grid. Part of the dashboard kit."
        pages={authScreens}
        href={(p) => `/kits/auth/${p}`}
      />
      <KitSection
        title="Marketing site"
        description="Header with menus, serif hero, feature tabs, pricing, FAQ, blog, changelog, docs shell and footer."
        item="marketing-kit"
        pages={marketingPages}
        href={m}
      />
    </Page>
  )
}
