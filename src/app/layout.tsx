import { env } from '@/env'
import { Toaster } from '@/registry/dylo/ui/toast'
import { TooltipProvider } from '@/registry/dylo/ui/tooltip'
import '@/styles/tailwind.css'
import type { Metadata, Viewport } from 'next'
import { Geist, Inter, Playfair_Display } from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' })
const commitMono = localFont({
  src: [
    { path: '../fonts/commit-mono-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/commit-mono-latin-700-normal.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-commit-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://design.dylo.dev'),
  title: {
    default: 'dylo — design system',
    template: '%s · dylo design system',
  },
  description:
    'Tokens, a light and dark Tailwind theme, Radix-based React components, dashboard and marketing kits for dylo. Installable with the shadcn CLI straight from GitHub.',
  icons: { icon: '/brand/dylo-app-icon.png' },
}

export const viewport: Viewport = {
  // Browser chrome reads a literal colour, not a custom property.
  /* eslint-disable no-restricted-syntax */
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fdfdfd' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  /* eslint-enable no-restricted-syntax */
}

/* Runs before paint so the page never flashes the wrong theme. The stored
   choice wins; with none stored, the site opens dark. */
const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark'||(t==='system'&&matchMedia('(prefers-color-scheme: dark)').matches):true;document.documentElement.classList.toggle('dark',d);document.documentElement.style.colorScheme=d?'dark':'light'}catch(e){document.documentElement.classList.add('dark')}})()`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark ${inter.variable} ${geist.variable} ${playfair.variable} ${commitMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className="min-h-dvh bg-background text-emphasis">
        <TooltipProvider>{children}</TooltipProvider>
        <Toaster />
        {/* dylo feedback widget — point at a preview, mark what's wrong, it lands
            as a thread in dylo. Never production. https://app.dylo.dev/widget/install.md */}
        {env.FEEDBACK_WIDGET_ENABLED ? <script defer src="https://app.dylo.dev/widget/v1.js" /> : null}
      </body>
    </html>
  )
}
