import { Gate } from '@/components/gate'
import { GATE_COOKIE, isValidToken } from '@/lib/gate'
import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { Brief } from './brief'

export const metadata: Metadata = {
  title: 'Brief de marca',
  robots: { index: false, follow: false },
}

export default async function BrandBriefPage({ searchParams }: { searchParams: Promise<{ e?: string }> }) {
  const [jar, { e }] = await Promise.all([cookies(), searchParams])

  if (!isValidToken(jar.get(GATE_COOKIE)?.value)) {
    return (
      <Gate
        error={e === '1'}
        next="/brief-de-marca"
        locale="es"
        title="Brief de marca"
        lead="Este documento se comparte por invitación. Introduce la clave que has recibido para acceder."
      />
    )
  }

  return <Brief />
}
