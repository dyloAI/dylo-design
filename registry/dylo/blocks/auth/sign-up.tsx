'use client'

import { AuthCard, AuthError } from '@/registry/dylo/blocks/auth/auth-card'
import { Button } from '@/registry/dylo/ui/button'
import { Input } from '@/registry/dylo/ui/input'
import * as React from 'react'

export type SignUpValues = {
  name: string
  email: string
  password: string
}

/**
 * Create-account form matching the dylo-starter layout. Wire `onSubmit` to
 * your auth client before shipping.
 */
export function SignUpForm({
  onSubmit,
  error,
  isPending: isPendingProp,
  signInHref = '/auth/sign-in',
  onSignInClick,
}: {
  onSubmit?: (values: SignUpValues) => void | Promise<void>
  error?: string | null
  isPending?: boolean
  signInHref?: string
  onSignInClick?: () => void
}) {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [localError, setLocalError] = React.useState<string | null>(null)
  const [localPending, setLocalPending] = React.useState(false)

  const isPending = isPendingProp ?? localPending
  const shownError = error ?? localError

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setLocalError(null)
    setLocalPending(true)
    try {
      await onSubmit?.({ name, email, password })
    } catch (err) {
      setLocalError(err instanceof Error ? err.message : 'Could not create your account. Please try again.')
    } finally {
      setLocalPending(false)
    }
  }

  return (
    <AuthCard
      title="Create account"
      description="Enter your details to create a new account."
      footer={
        <>
          Already have an account?{' '}
          {onSignInClick ? (
            <button
              type="button"
              onClick={onSignInClick}
              className="border-0 bg-transparent p-0 font-medium text-ink underline-offset-2 hover:underline"
            >
              Sign in
            </button>
          ) : (
            <a href={signInHref} className="font-medium text-ink no-underline hover:underline">
              Sign in
            </a>
          )}
        </>
      }
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {shownError ? <AuthError>{shownError}</AuthError> : null}
        <Input
          label="Name"
          autoComplete="name"
          disabled={isPending}
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
          type="text"
          value={name}
        />
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
        <Input
          label="Password"
          autoComplete="new-password"
          disabled={isPending}
          minLength={8}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="At least 8 characters"
          required
          type="password"
          value={password}
        />
        <Button type="submit" disabled={isPending} className="w-full">
          {isPending ? 'Creating account…' : 'Create account'}
        </Button>
      </form>
    </AuthCard>
  )
}
