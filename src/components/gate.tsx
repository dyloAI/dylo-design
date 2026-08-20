import { Page, PageHeader } from '@/components/docs'
import { unlock } from '@/lib/gate-actions'
import type { GatePath } from '@/lib/gate'
import { Button } from '@/registry/dylo/ui/button'
import { Input } from '@/registry/dylo/ui/input'

/**
 * No client JavaScript: a wrong passphrase redirects back with `?e=1` and the
 * error renders on the server. That keeps `Input` a Server Component, which is
 * what it was designed for.
 */
const COPY = {
  es: {
    eyebrow: 'Documento privado',
    label: 'Clave de acceso',
    hint: 'La recibiste por correo o por teléfono.',
    error: 'Clave incorrecta. Vuelve a intentarlo.',
    submit: 'Entrar',
  },
  en: {
    eyebrow: 'Private',
    label: 'Passphrase',
    hint: 'You received it by a separate channel.',
    error: 'Wrong passphrase. Try again.',
    submit: 'Enter',
  },
} as const

export function Gate({
  error,
  next,
  title,
  lead,
  locale = 'en',
}: {
  error?: boolean
  next: GatePath
  title: string
  lead: string
  locale?: keyof typeof COPY
}) {
  const copy = COPY[locale]

  return (
    <Page>
      <PageHeader eyebrow={copy.eyebrow} title={title} lead={lead} />

      <form action={unlock} className="max-w-[380px] space-y-5">
        <input type="hidden" name="next" value={next} />
        <Input
          type="password"
          name="password"
          label={copy.label}
          autoComplete="current-password"
          required
          autoFocus
          hint={error ? undefined : copy.hint}
        />
        {error && (
          <p aria-live="polite" className="m-0 font-mono text-[11px] tracking-[0.02em] text-oxide">
            {copy.error}
          </p>
        )}
        <Button type="submit">{copy.submit}</Button>
      </form>
    </Page>
  )
}
