import 'server-only'

/**
 * The only module in `src/` allowed to read `process.env`, matching the house
 * rule across dylo repos. One variable does not justify a validation library,
 * so the check is a throw at import: a missing password would otherwise leave
 * the brief either open or permanently unopenable, and both fail silently.
 */
function required(name: string): string {
  const value = process.env[name]
  if (!value) throw new Error(`Missing required environment variable: ${name}`)
  return value
}

export const env = {
  /** Passphrase for the gated brand brief at /brief-de-marca. */
  BRAND_BRIEF_PASSWORD: required('BRAND_BRIEF_PASSWORD'),
  /** `pnpm dev` serves plain HTTP, so a `Secure` cookie could not be set locally. */
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
}
