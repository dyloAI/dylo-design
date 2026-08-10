import { SiteNav } from '@/components/site-nav'
import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { Space_Grotesk, Space_Mono } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'dylo — design system',
    template: '%s · dylo design system',
  },
  description:
    'Tokens, Tailwind theme, React components and brand assets for dylo. Installable with the shadcn CLI straight from GitHub.',
  icons: { icon: '/brand/dylo-app-icon.png' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${spaceMono.variable}`}>
      <body className="min-h-dvh">
        <div className="lg:grid lg:grid-cols-[260px_1fr]">
          <SiteNav />
          <main className="min-w-0">{children}</main>
        </div>
      </body>
    </html>
  )
}
