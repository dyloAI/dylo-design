import 'server-only'

/**
 * The only module in `src/` allowed to read `process.env`, matching the house
 * rule across dylo repos. One or two variables do not justify a validation
 * library, so a missing required value is a throw.
 */
function required(name: string): string {
  const value = process.env[name]
  if (!value) throw new Error(`Missing required environment variable: ${name}`)
  return value
}

export const env = {
  /**
   * Passphrase for the gated brief and plan pages. A getter rather than an
   * eager `required(...)`: the root layout imports this module for the feedback
   * flag, so throwing at import time would take the whole site down over a
   * variable only the gate needs. Read it and it still throws.
   */
  get BRAND_BRIEF_PASSWORD(): string {
    return required('BRAND_BRIEF_PASSWORD')
  },
  /** `pnpm dev` serves plain HTTP, so a `Secure` cookie could not be set locally. */
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
  /**
   * dylo feedback widget — testers report straight into a dylo thread. Preview
   * and development only; production visitors must never see it.
   * See https://app.dylo.dev/widget/install.md
   */
  FEEDBACK_WIDGET_ENABLED: process.env.VERCEL_ENV !== 'production',
  /**
   * Project feedback key (`dylo_fb_…`). Deliberately optional: it is unset in
   * production, which makes the ingest route inert rather than broken.
   */
  DYLO_FEEDBACK_KEY: process.env.DYLO_FEEDBACK_KEY ?? null,
}
