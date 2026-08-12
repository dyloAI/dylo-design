'use client'

import { cn } from '@/lib/utils'
import { AuthSuccess } from '@/registry/dylo/blocks/auth/auth-card'
import { AuthLayout } from '@/registry/dylo/blocks/auth/auth-layout'
import { ForgotPasswordForm } from '@/registry/dylo/blocks/auth/forgot-password'
import { SignInForm } from '@/registry/dylo/blocks/auth/sign-in'
import { SignUpForm } from '@/registry/dylo/blocks/auth/sign-up'
import * as React from 'react'

export { AuthCard, AuthError, AuthSuccess } from '@/registry/dylo/blocks/auth/auth-card'
export { AuthLayout } from '@/registry/dylo/blocks/auth/auth-layout'
export { ForgotPasswordForm, type ForgotPasswordValues } from '@/registry/dylo/blocks/auth/forgot-password'
export { SignInForm, type SignInValues } from '@/registry/dylo/blocks/auth/sign-in'
export { SignUpForm, type SignUpValues } from '@/registry/dylo/blocks/auth/sign-up'

type AuthView = 'sign-in' | 'sign-up' | 'forgot-password'

/**
 * Composed auth kit for docs and dry runs. Switch between the three screens;
 * each form is a no-op until you wire `onSubmit` in your app.
 */
export function AuthKit({ productLabel = 'demo' }: { productLabel?: string }) {
  const [view, setView] = React.useState<AuthView>('sign-in')
  const [done, setDone] = React.useState<string | null>(null)

  function show(next: AuthView) {
    setDone(null)
    setView(next)
  }

  return (
    <AuthLayout productLabel={productLabel}>
      <div className="flex w-full flex-col items-center gap-4">
        <div className="flex gap-1 font-mono text-[10px] tracking-widest uppercase">
          {(
            [
              ['sign-in', 'Sign in'],
              ['sign-up', 'Sign up'],
              ['forgot-password', 'Forgot'],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => show(id)}
              className={cn(
                'rounded-sm border px-2.5 py-1 transition-colors duration-[120ms] ease-out',
                view === id ? 'border-ink bg-ink text-bone' : 'border-line bg-paper text-graphite hover:border-ink'
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {done ? <AuthSuccess>{done}</AuthSuccess> : null}

        {view === 'sign-in' ? (
          <SignInForm
            onSignUpClick={() => show('sign-up')}
            onForgotPasswordClick={() => show('forgot-password')}
            onSubmit={async () => {
              setDone('Signed in (demo)')
            }}
          />
        ) : null}
        {view === 'sign-up' ? (
          <SignUpForm
            onSignInClick={() => show('sign-in')}
            onSubmit={async () => {
              setDone('Account created (demo)')
            }}
          />
        ) : null}
        {view === 'forgot-password' ? (
          <ForgotPasswordForm
            onSignInClick={() => show('sign-in')}
            onSubmit={async () => {
              setDone('Reset code sent (demo)')
            }}
          />
        ) : null}
      </div>
    </AuthLayout>
  )
}
