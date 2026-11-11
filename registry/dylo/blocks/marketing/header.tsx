'use client'

import { cn } from '@/lib/utils'
import { CtaButton } from '@/registry/dylo/ui/cta-button'
import { IconButton } from '@/registry/dylo/ui/icon-button'
import { Logo } from '@/registry/dylo/ui/logo'
import { ChevronDown, Menu, X, type LucideIcon } from 'lucide-react'
import { NavigationMenu as NavigationMenuPrimitive } from 'radix-ui'
import * as React from 'react'

export type NavLink = { label: string; href: string; description?: string; icon?: LucideIcon }
export type NavEntry = NavLink | { label: string; items: NavLink[] }

const navTrigger = [
  'group flex h-[58px] cursor-pointer items-center gap-1.5 px-1 py-1 text-sm font-medium text-default select-none lg:px-3',
  'outline-hidden transition duration-150 ease-in-out hover:text-emphasis focus-visible:ring-2 focus-visible:ring-gray-a4',
  'data-[state=open]:text-emphasis',
].join(' ')

function MenuPanel({ items }: { items: NavLink[] }) {
  return (
    <ul className="grid w-[560px] grid-cols-2 gap-1 p-2">
      {items.map(({ label, href, description, icon: Icon }) => (
        <li key={label}>
          <NavigationMenuPrimitive.Link asChild>
            <a
              href={href}
              className="flex items-start gap-3 rounded-xl p-3 outline-hidden transition-colors hover:bg-interactive-hover focus-visible:bg-interactive-hover"
            >
              {Icon ? (
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-gray-a3 bg-linear-to-bl from-gray-a3 text-emphasis">
                  <Icon className="size-4" />
                </span>
              ) : null}
              <span className="flex flex-col gap-0.5">
                <span className="text-sm font-medium text-emphasis">{label}</span>
                {description ? <span className="text-xs leading-5 text-default">{description}</span> : null}
              </span>
            </a>
          </NavigationMenuPrimitive.Link>
        </li>
      ))}
    </ul>
  )
}

/**
 * The sticky marketing header: logo, menus with panels, and the two calls to
 * action. It blurs the page behind it once you scroll.
 */
export function MarketingHeader({
  nav,
  homeHref = '/',
  loginHref = '/login',
  signupHref = '/signup',
  signupLabel = 'Get started',
  className,
}: {
  nav: NavEntry[]
  homeHref?: string
  loginHref?: string
  signupHref?: string
  signupLabel?: string
  className?: string
}) {
  const [scrolled, setScrolled] = React.useState(false)
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      data-slot="marketing-header"
      className={cn(
        'sticky top-0 z-40 transition duration-200 ease-in-out',
        'after:pointer-events-none after:absolute after:inset-0 after:bg-background/60 after:opacity-0 after:backdrop-blur-md after:transition-opacity',
        scrolled && 'after:opacity-100',
        className
      )}
    >
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 md:max-w-7xl">
        <div className="flex h-[58px] items-center md:hidden">
          <a href={homeHref} aria-label="Home" className="flex-auto">
            <Logo />
          </a>
          <IconButton
            size="md"
            aria-label={open ? 'Close menu' : 'Open main menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="-mr-2"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </IconButton>
        </div>

        <div className="hidden h-[58px] w-full items-center md:flex">
          <div className="flex flex-1 lg:w-[225px]">
            <a
              href={homeHref}
              aria-label="Home"
              className="rounded-md py-1 outline-hidden focus-visible:ring-2 focus-visible:ring-gray-a4"
            >
              <Logo />
            </a>
          </div>
          <NavigationMenuPrimitive.Root className="relative">
            <NavigationMenuPrimitive.List className="flex items-center">
              {nav.map((entry) =>
                'items' in entry ? (
                  <NavigationMenuPrimitive.Item key={entry.label}>
                    <NavigationMenuPrimitive.Trigger className={navTrigger}>
                      {entry.label}
                      <ChevronDown
                        aria-hidden
                        className="-ml-0.5 size-3.5 opacity-70 transition-transform duration-200 ease-in group-data-[state=open]:translate-y-0.5"
                      />
                    </NavigationMenuPrimitive.Trigger>
                    <NavigationMenuPrimitive.Content className="data-[motion^=from-]:animate-fade-in data-[motion^=to-]:animate-fade-out">
                      <MenuPanel items={entry.items} />
                    </NavigationMenuPrimitive.Content>
                  </NavigationMenuPrimitive.Item>
                ) : (
                  <NavigationMenuPrimitive.Item key={entry.label}>
                    <NavigationMenuPrimitive.Link asChild>
                      <a href={entry.href} className={navTrigger}>
                        {entry.label}
                      </a>
                    </NavigationMenuPrimitive.Link>
                  </NavigationMenuPrimitive.Item>
                )
              )}
            </NavigationMenuPrimitive.List>
            <div className="absolute top-full left-1/2 flex -translate-x-1/2 justify-center perspective-[2000px]">
              <NavigationMenuPrimitive.Viewport className="relative mt-1 h-(--radix-navigation-menu-viewport-height) w-(--radix-navigation-menu-viewport-width) origin-top overflow-hidden rounded-2xl border border-gray-a4 bg-elevated/95 shadow-popover backdrop-blur-xl transition-[width,height] duration-300 ease-dylo data-[state=closed]:animate-fade-out data-[state=open]:animate-scale-up-fade" />
            </div>
          </NavigationMenuPrimitive.Root>
          <div className="flex flex-1 justify-end gap-4">
            <CtaButton asChild variant="ghost" size="md" className="hidden lg:flex">
              <a href={loginHref}>Log in</a>
            </CtaButton>
            <CtaButton asChild size="md">
              <a href={signupHref}>{signupLabel}</a>
            </CtaButton>
          </div>
        </div>
      </div>

      {open ? (
        <nav
          aria-label="Main"
          className="absolute inset-x-0 top-[58px] z-20 h-[calc(100dvh-58px)] overflow-y-auto bg-background px-6 pb-10 md:hidden"
        >
          <ul className="flex flex-col divide-y divide-gray-a3">
            {nav.map((entry) =>
              'items' in entry ? (
                <li key={entry.label} className="flex flex-col gap-1 py-4">
                  <span className="pb-1 text-xs font-medium text-gray-10 uppercase">{entry.label}</span>
                  {entry.items.map((item) => (
                    <a key={item.label} href={item.href} className="py-1.5 text-base text-emphasis">
                      {item.label}
                    </a>
                  ))}
                </li>
              ) : (
                <li key={entry.label} className="py-4">
                  <a href={entry.href} className="text-base text-emphasis">
                    {entry.label}
                  </a>
                </li>
              )
            )}
          </ul>
          <div className="mt-6 flex flex-col gap-3">
            <CtaButton asChild size="lg" className="w-full">
              <a href={signupHref}>{signupLabel}</a>
            </CtaButton>
            <CtaButton asChild variant="ghost" size="lg" className="w-full">
              <a href={loginHref}>Log in</a>
            </CtaButton>
          </div>
        </nav>
      ) : null}
    </header>
  )
}
