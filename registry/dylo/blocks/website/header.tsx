import { buttonVariants } from '@/registry/dylo/ui/button'

/**
 * Sticky bone bar with a hairline bottom border. The only fixed element in the
 * system — flat colour, never blurred or translucent.
 *
 * The call to action is an anchor wearing `buttonVariants` rather than a
 * <button> inside an <a>, which would be invalid and unreachable by keyboard.
 */
export function Header() {
  return (
    <header className="bg-bone border-line sticky top-0 z-10 border-b">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-8 py-[18px]">
        {/* eslint-disable-next-line @next/next/no-img-element -- portable to non-Next consumers */}
        <img src="/brand/dylo-logo-horizontal.svg" alt="dylo" className="h-[26px]" />
        <nav className="flex items-center gap-8">
          <a href="#work" className="text-graphite hover:text-ink text-[15px] font-medium no-underline">
            Work
          </a>
          <a href="#studio" className="text-graphite hover:text-ink text-[15px] font-medium no-underline">
            Studio
          </a>
          <a href="#start" className={buttonVariants({ variant: 'primary', size: 'sm', className: 'no-underline' })}>
            Start a project
          </a>
        </nav>
      </div>
    </header>
  )
}
