import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { BRIEF_COOKIE, isValidToken } from './auth'
import { Brief } from './brief'
import { Gate } from './gate'

export const metadata: Metadata = {
  title: 'Brief de marca',
  robots: { index: false, follow: false },
}

export default async function BrandBriefPage({ searchParams }: { searchParams: Promise<{ e?: string }> }) {
  const [jar, { e }] = await Promise.all([cookies(), searchParams])

  if (!isValidToken(jar.get(BRIEF_COOKIE)?.value)) return <Gate error={e === '1'} />

  return <Brief />
}
