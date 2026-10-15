/** Ink footer with the reversed lockup and the legal line. No tagline. */
export function Footer() {
  return (
    <footer className="border-t border-graphite bg-ink px-8 py-10">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-4">
        {/* eslint-disable-next-line @next/next/no-img-element -- portable to non-Next consumers */}
        <img src="/brand/dylo-logo-horizontal-reversed.svg" alt="dylo" className="h-5" />
        <span className="font-mono text-[12px] tracking-mono text-bone">
          dylo is a brand of Ax42 S.L. · © {new Date().getFullYear()} dylo
        </span>
      </div>
    </footer>
  )
}
