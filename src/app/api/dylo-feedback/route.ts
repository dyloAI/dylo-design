import { env } from '@/env'

/**
 * Same-origin proxy for the dylo feedback widget. The widget POSTs here and this
 * forwards to dylo with the project's feedback key attached, so the key stays on
 * the server and never ships in the page, and the browser request is same-origin
 * with no CORS involved.
 *
 * The key is set on Preview and Development only, so this route is inert in
 * production. There is no session to gate on here — the site is public and the
 * gate only covers the brief — so dylo's per-project rate limit (10 reports an
 * hour) plus the key's origin allowlist are what bound abuse.
 *
 * Full instructions: https://app.dylo.dev/widget/install.md
 */

const DYLO_INGEST = 'https://app.dylo.dev/api/feedback'

export async function POST(request: Request): Promise<Response> {
  const key = env.DYLO_FEEDBACK_KEY
  if (!key) {
    // This environment does not report feedback. 404 rather than 500 so a
    // production deploy of this route is simply absent, not broken.
    return Response.json({ ok: false, error: 'not_found' }, { status: 404 })
  }

  const origin = new URL(request.url).origin

  const upstream = await fetch(DYLO_INGEST, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${key}`,
      // dylo matches this against the key's origin allowlist. Sent twice
      // because `origin` is a restricted header in some runtimes and dylo falls
      // back to `referer`.
      origin,
      referer: `${origin}/`,
    },
    body: await request.text(),
  })

  // Pass the envelope straight through: the widget renders dylo's message.
  return new Response(await upstream.text(), {
    status: upstream.status,
    headers: { 'content-type': 'application/json' },
  })
}
