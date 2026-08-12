'use client'

import { AuthCard, AuthError } from '@/registry/dylo/blocks/auth/auth-card'
import { Button } from '@/registry/dylo/ui/button'
import { Input } from '@/registry/dylo/ui/input'
import * as React from 'react'

export type SignInValues = {
  email: string
  password: string
}

/**
 * Sign-in form matching the dylo-starter layout. Wire `onSubmit` to your
 * auth client — the demo kit only prevents default.
 */
export function SignInForm({
  onSubmit,
  error,
  isPending: isPendingProp,
  signUpHref = '/auth/sign-up',
  forgotPasswordHref = '/auth/forgot-password',
  onSignUpClick,
  onForgotPasswordClick,
}: {
  onSubmit?: (values: SignInValues) => void | Promise<void>
  error?: string | null
  isPending?: boolean
  signUpHref?: string
  forgotPasswordHref?: string
  onSignUpClick?: () => void
  onForgotPasswordClick?: () => void
}) {
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
      await onSubmit?.({ email, password })
    } catch (err) {
      setLocalError(err instanceof Error ? err.message : 'Could not sign in. Please try again.')
    } finally {
      setLocalPending(false)
    }
  }

  return (
    <AuthCard
      title="Sign in"
      description="Enter your email below to log in to your account."
      footer={
        <>
          Don&apos;t have an account?{' '}
          {onSignUpClick ? (
            <button
              type="button"
              onClick={onSignUpClick}
              className="border-0 bg-transparent p-0 font-medium text-ink underline-offset-2 hover:underline"
            >
              Sign up
            </button>
          ) : (
            <a href={signUpHref} className="font-medium text-ink no-underline hover:underline">
              Sign up
            </a>
          )}
        </>
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
        <div className="flex flex-col gap-[7px]">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] font-bold tracking-[0.14em] text-concrete uppercase">Password</span>
            {onForgotPasswordClick ? (
              <button
                type="button"
                onClick={onForgotPasswordClick}
                className="border-0 bg-transparent p-0 font-mono text-[11px] tracking-wide text-concrete uppercase hover:text-ink"
              >
                Forgot?
              </button>
            ) : (
              <a
                href={forgotPasswordHref}
                className="font-mono text-[11px] tracking-wide text-concrete no-underline uppercase hover:text-ink"
              >
                Forgot?
              </a>
            )}
          </div>
          <Input
            autoComplete="current-password"
            disabled={isPending}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            value={password}
          />
        </div>
        <Button type="submit" disabled={isPending} className="w-full">
          {isPending ? 'Signing in…' : 'Login'}
        </Button>
      </form>
    </AuthCard>
  )
}
