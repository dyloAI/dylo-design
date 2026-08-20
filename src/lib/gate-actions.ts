'use server'

import { env } from '@/env'
import { GATE_COOKIE, gateToken, isGatePath, isValidPassword } from '@/lib/gate'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const THIRTY_DAYS = 60 * 60 * 24 * 30

export async function unlock(formData: FormData) {
  const submitted = formData.get('password')
  const rawNext = formData.get('next')
  const next = typeof rawNext === 'string' && isGatePath(rawNext) ? rawNext : '/brief-de-marca'

  if (typeof submitted !== 'string' || !isValidPassword(submitted)) {
    redirect(`${next}?e=1`)
  }

  const jar = await cookies()
  jar.set(GATE_COOKIE, gateToken(), {
    httpOnly: true,
    secure: env.IS_PRODUCTION,
    sameSite: 'lax',
    path: '/',
    maxAge: THIRTY_DAYS,
  })

  redirect(next)
}
