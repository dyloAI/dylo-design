'use client'

import { cn } from '@/lib/utils'
import { Button } from '@/registry/dylo/ui/button'
import { Checkbox } from '@/registry/dylo/ui/checkbox'
import { CtaButton } from '@/registry/dylo/ui/cta-button'
import { Field, FieldError, Label } from '@/registry/dylo/ui/field'
import { Input } from '@/registry/dylo/ui/input'
import { TextLink } from '@/registry/dylo/ui/link'
import { Logo } from '@/registry/dylo/ui/logo'
import { Separator } from '@/registry/dylo/ui/separator'
import { Eye, EyeOff, Mail } from 'lucide-react'
import * as React from 'react'

/** The auth backdrop: the canvas grid fading out from the centre, the form on top. */
export function AuthLayout({
  children,
  footer,
  homeHref = '/',
  className,
}: {
  children: React.ReactNode
  footer?: React.ReactNode
  homeHref?: string
  className?: string
}) {
  return (
    <div
      className={cn(
        'relative flex min-h-dvh flex-col items-center justify-center bg-background px-4 py-16 text-emphasis',
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-canvas [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_65%)]"
      />
      <a href={homeHref} aria-label="Home" className="absolute top-6 left-6">
        <Logo />
      </a>
      <div className="relative flex w-full max-w-sm flex-col gap-8">{children}</div>
      {footer ? <div className="relative mt-10 text-center text-xs text-default">{footer}</div> : null}
    </div>
  )
}

function ProviderButtons() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <CtaButton variant="glass" size="md" className="w-full">
        <span aria-hidden className="font-display text-base font-semibold">
          G
        </span>
        Google
      </CtaButton>
      <CtaButton variant="glass" size="md" className="w-full">
        <span aria-hidden className="font-mono text-sm font-bold">
          {'</>'}
        </span>
        GitHub
      </CtaButton>
    </div>
  )
}

function PasswordInput({ id, invalid }: { id: string; invalid?: boolean }) {
  const [visible, setVisible] = React.useState(false)
  return (
    <Input
      id={id}
      variant="glass"
      size="lg"
      type={visible ? 'text' : 'password'}
      autoComplete="current-password"
      invalid={invalid}
      trailing={
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? 'Hide password' : 'Show password'}
          className="mr-2 inline-flex size-7 cursor-pointer items-center justify-center rounded-lg text-default transition-colors hover:text-emphasis"
        >
          {visible ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
        </button>
      }
    />
  )
}

function AuthHeading({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 text-center">
      <h1 className="font-display effect-font-styling text-[1.75rem] leading-tight font-medium tracking-tight">
        {title}
      </h1>
      {children ? <p className="text-sm text-default">{children}</p> : null}
    </div>
  )
}

export function LoginForm({
  signupHref = '#',
  forgotHref = '#',
  error,
}: {
  signupHref?: string
  forgotHref?: string
  error?: string
}) {
  return (
    <>
      <AuthHeading title="Log in to dylo">
        Don&apos;t have an account? <TextLink href={signupHref}>Sign up</TextLink>.
      </AuthHeading>
      <ProviderButtons />
      <Separator>or</Separator>
      <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
        <Field>
          <Label htmlFor="login-email">Email</Label>
          <Input
            id="login-email"
            variant="glass"
            size="lg"
            type="email"
            autoComplete="email"
            placeholder="you@acme.dev"
          />
        </Field>
        <Field>
          <div className="flex items-center justify-between">
            <Label htmlFor="login-password">Password</Label>
            <TextLink href={forgotHref} variant="muted" className="text-xs">
              Forgot your password?
            </TextLink>
          </div>
          <PasswordInput id="login-password" invalid={!!error} />
          {error ? <FieldError>{error}</FieldError> : null}
        </Field>
        <Button type="submit" variant="primary" size="lg" className="w-full">
          Log in
        </Button>
      </form>
    </>
  )
}

export function SignupForm({ loginHref = '#' }: { loginHref?: string }) {
  return (
    <>
      <AuthHeading title="Create an account">
        Already have an account? <TextLink href={loginHref}>Log in</TextLink>.
      </AuthHeading>
      <ProviderButtons />
      <Separator>or</Separator>
      <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
        <Field>
          <Label htmlFor="signup-email">Email</Label>
          <Input
            id="signup-email"
            variant="glass"
            size="lg"
            type="email"
            autoComplete="email"
            placeholder="you@acme.dev"
          />
        </Field>
        <Field>
          <Label htmlFor="signup-password">Password</Label>
          <PasswordInput id="signup-password" />
        </Field>
        <label className="flex items-start gap-2 text-xs text-default">
          <Checkbox className="mt-0.5" />
          Send me product updates. One email a month at most.
        </label>
        <Button type="submit" variant="primary" size="lg" className="w-full">
          Create account
        </Button>
      </form>
    </>
  )
}

export function ForgotPasswordForm({ loginHref = '#' }: { loginHref?: string }) {
  return (
    <>
      <AuthHeading title="Reset your password">We will email you a link to choose a new one.</AuthHeading>
      <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
        <Field>
          <Label htmlFor="forgot-email">Email</Label>
          <Input id="forgot-email" variant="glass" size="lg" type="email" placeholder="you@acme.dev" />
        </Field>
        <Button type="submit" variant="primary" size="lg" className="w-full">
          Send reset link
        </Button>
      </form>
      <p className="text-center text-sm text-default">
        <TextLink href={loginHref}>Back to log in</TextLink>
      </p>
    </>
  )
}

export function CheckEmail({ email = 'you@acme.dev' }: { email?: string }) {
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <span className="inline-flex size-12 items-center justify-center rounded-xl border border-gray-a4 bg-interactive">
        <Mail className="size-5" />
      </span>
      <AuthHeading title="Check your email">
        We sent a link to <span className="text-emphasis">{email}</span>. It expires in 15 minutes.
      </AuthHeading>
      <Button variant="ghost">Resend email</Button>
    </div>
  )
}

export function AuthTerms() {
  return (
    <>
      By continuing you agree to the{' '}
      <TextLink href="#" variant="underline">
        Terms
      </TextLink>{' '}
      and{' '}
      <TextLink href="#" variant="underline">
        Privacy Policy
      </TextLink>
      .
    </>
  )
}
