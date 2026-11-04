import { KitBar } from '@/components/kits/kit-bar'
import { marketingPages } from '@/lib/kits'
import { renderMarketingPage } from '@/lib/kits/marketing'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Params = { params: Promise<{ slug?: string[] }> }

export const dynamicParams = false

export function generateStaticParams() {
  return marketingPages.map((p) => ({ slug: p.path ? p.path.split('/') : [] }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const path = ((await params).slug ?? []).join('/')
  const page = marketingPages.find((p) => p.path === path)
  return { title: `${page?.title ?? 'Home'} · Marketing kit`, robots: { index: false } }
}

export default async function MarketingKitPage({ params }: Params) {
  const page = renderMarketingPage(((await params).slug ?? []).join('/'))
  if (!page) notFound()
  return (
    <>
      {page}
      <KitBar />
    </>
  )
}
