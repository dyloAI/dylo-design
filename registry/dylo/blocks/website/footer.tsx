/** Ink footer with the reversed lockup and the line the brand runs on. */
export function Footer() {
  return (
    <footer className="bg-ink border-graphite border-t px-8 py-10">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-4">
        {/* eslint-disable-next-line @next/next/no-img-element -- portable to non-Next consumers */}
        <img src="/brand/dylo-logo-horizontal-reversed.svg" alt="dylo" className="h-5" />
        <span className="text-concrete font-mono text-[12px] tracking-mono">
          We make dílo — not robota. · © {new Date().getFullYear()} dylo
        </span>
      </div>
    </footer>
  )
}
