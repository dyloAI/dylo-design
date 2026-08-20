'use server'

import { env } from '@/env'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { BRIEF_COOKIE, briefToken, isValidPassword } from './auth'

const THIRTY_DAYS = 60 * 60 * 24 * 30

export async function unlock(formData: FormData) {
  const submitted = formData.get('password')

  if (typeof submitted !== 'string' || !isValidPassword(submitted)) {
    redirect('/brief-de-marca?e=1')
  }

  const jar = await cookies()
  jar.set(BRIEF_COOKIE, briefToken(), {
    httpOnly: true,
    secure: env.IS_PRODUCTION,
    sameSite: 'lax',
    path: '/brief-de-marca',
    maxAge: THIRTY_DAYS,
  })

  redirect('/brief-de-marca')
}
