import { KitBar } from '@/components/kits/kit-bar'
import { authScreens } from '@/lib/kits'
import {
  AuthLayout,
  AuthTerms,
  CheckEmail,
  ForgotPasswordForm,
  LoginForm,
  SignupForm,
} from '@/registry/dylo/blocks/dashboard'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Params = { params: Promise<{ screen: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return authScreens.map((s) => ({ screen: s.path }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { screen } = await params
  return {
    title: `${authScreens.find((s) => s.path === screen)?.title ?? 'Auth'} · Auth kit`,
    robots: { index: false },
  }
}

const a = (screen: string) => `/kits/auth/${screen}`

export default async function AuthKitPage({ params }: Params) {
  const { screen } = await params
  const form = {
    login: <LoginForm signupHref={a('signup')} forgotHref={a('forgot')} />,
    'login-error': (
      <LoginForm signupHref={a('signup')} forgotHref={a('forgot')} error="That email and password do not match." />
    ),
    signup: <SignupForm loginHref={a('login')} />,
    forgot: <ForgotPasswordForm loginHref={a('login')} />,
    'check-email': <CheckEmail />,
  }[screen]
  if (!form) notFound()

  return (
    <>
      <AuthLayout homeHref="/kits" footer={screen === 'signup' ? <AuthTerms /> : undefined}>
        {form}
      </AuthLayout>
      <KitBar className="bottom-6" />
    </>
  )
}
