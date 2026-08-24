import 'server-only'

/**
 * The only module in `src/` allowed to read `process.env`, matching the house
 * rule across dylo repos. No required secrets — the site builds without any.
 */
export const env = {
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
