import { DashboardKit } from '@/components/kits/dashboard-kit'
import { dashboardPages } from '@/lib/kits'
import type { Metadata } from 'next'

type Params = { params: Promise<{ slug?: string[] }> }

export const dynamicParams = false

export function generateStaticParams() {
  return [{ slug: [] }, ...dashboardPages.map((p) => ({ slug: p.path.split('/') }))]
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const path = ((await params).slug ?? []).join('/')
  const page = dashboardPages.find((p) => p.path === path)
  return { title: `${page?.title ?? 'Emails'} · Dashboard kit`, robots: { index: false } }
}

export default async function DashboardKitPage({ params }: Params) {
  return <DashboardKit slug={(await params).slug ?? []} />
}
