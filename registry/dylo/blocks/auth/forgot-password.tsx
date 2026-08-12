'use client'

import { AuthCard, AuthError } from '@/registry/dylo/blocks/auth/auth-card'
import { Button } from '@/registry/dylo/ui/button'
import { Input } from '@/registry/dylo/ui/input'
import * as React from 'react'

export type ForgotPasswordValues = {
  email: string
}

/**
 * Forgot-password form matching the dylo-starter layout. Wire `onSubmit` to
 * send a reset code, then route to your reset screen.
 */
export function ForgotPasswordForm({
  onSubmit,
  error,
  isPending: isPendingProp,
  signInHref = '/auth/sign-in',
  onSignInClick,
}: {
  onSubmit?: (values: ForgotPasswordValues) => void | Promise<void>
  error?: string | null
  isPending?: boolean
  signInHref?: string
  onSignInClick?: () => void
}) {
  const [email, setEmail] = React.useState('')
  const [localError, setLocalError] = React.useState<string | null>(null)
  const [localPending, setLocalPending] = React.useState(false)

  const isPending = isPendingProp ?? localPending
  const shownError = error ?? localError

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setLocalError(null)
    setLocalPending(true)
    try {
      await onSubmit?.({ email })
    } catch (err) {
      setLocalError(err instanceof Error ? err.message : 'Could not send the reset code. Please try again.')
    } finally {
      setLocalPending(false)
    }
  }

  return (
    <AuthCard
      title="Forgot your password?"
      description="Enter your email and we'll send you a code to reset it."
      footer={
        onSignInClick ? (
          <button
            type="button"
            onClick={onSignInClick}
            className="border-0 bg-transparent p-0 font-medium text-ink underline-offset-2 hover:underline"
          >
            Back to sign in
          </button>
        ) : (
          <a href={signInHref} className="font-medium text-ink no-underline hover:underline">
            Back to sign in
          </a>
        )
      }
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {shownError ? <AuthError>{shownError}</AuthError> : null}
        <Input
          label="Email"
          autoComplete="email"
          disabled={isPending}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="m@example.com"
          required
          type="email"
          value={email}
        />
        <Button type="submit" disabled={isPending} className="w-full">
          {isPending ? 'Sending…' : 'Send reset code'}
        </Button>
      </form>
    </AuthCard>
  )
}
