import { env } from '@/env'
import { createHash, timingSafeEqual } from 'node:crypto'
import 'server-only'

export const GATE_COOKIE = 'dylo_brief'

export const GATE_PATHS = [
  '/brief-de-marca',
  '/plans/scale-up',
  '/plans/actions',
  '/plans/brand-brief',
] as const

export type GatePath = (typeof GATE_PATHS)[number]

export function isGatePath(value: string): value is GatePath {
  return (GATE_PATHS as readonly string[]).includes(value)
}

function sha256(value: string) {
  return createHash('sha256').update(value, 'utf8').digest()
}

/**
 * What the cookie carries: the hash of the passphrase, never the passphrase.
 * A visitor cannot forge it without knowing the passphrase, and a leaked cookie
 * does not hand over the passphrase itself.
 */
export function gateToken(): string {
  return sha256(env.BRAND_BRIEF_PASSWORD).toString('hex')
}

/** Hashing both sides first is what makes the compared buffers equal-length. */
function equals(a: string, b: string): boolean {
  return timingSafeEqual(sha256(a), sha256(b))
}

export function isValidPassword(submitted: string): boolean {
  return equals(submitted, env.BRAND_BRIEF_PASSWORD)
}

export function isValidToken(cookieValue: string | undefined): boolean {
  return cookieValue !== undefined && equals(cookieValue, gateToken())
}
