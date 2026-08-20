import { Page, PageHeader } from '@/components/docs'
import { Button } from '@/registry/dylo/ui/button'
import { Input } from '@/registry/dylo/ui/input'
import { unlock } from './actions'

/**
 * No client JavaScript: a wrong passphrase redirects back with `?e=1` and the
 * error renders on the server. That keeps `Input` a Server Component, which is
 * what it was designed for.
 */
export function Gate({ error }: { error?: boolean }) {
  return (
    <Page>
      <PageHeader
        eyebrow="Documento privado"
        title="Brief de marca"
        lead="Este documento se comparte por invitación. Introduce la clave que has recibido para acceder."
      />

      <form action={unlock} className="max-w-[380px] space-y-5">
        <Input
          type="password"
          name="password"
          label="Clave de acceso"
          autoComplete="current-password"
          required
          autoFocus
          hint={error ? undefined : 'La recibiste por correo o por teléfono.'}
        />
        {error && (
          <p aria-live="polite" className="m-0 font-mono text-[11px] tracking-[0.02em] text-oxide">
            Clave incorrecta. Vuelve a intentarlo.
          </p>
        )}
        <Button type="submit">Entrar</Button>
      </form>
    </Page>
  )
}
