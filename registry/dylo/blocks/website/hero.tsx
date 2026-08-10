import { buttonVariants } from '@/registry/dylo/ui/button'
import { Eyebrow } from '@/registry/dylo/ui/eyebrow'

/** Bone hero on the engineering grid. One display line, no gradient, no image. */
export function Hero() {
  return (
    <section className="bg-bone grid-paper px-8 pt-24 pb-[84px]">
      <div className="mx-auto flex max-w-[1180px] flex-col items-start gap-6">
        <Eyebrow>AI-native software factory</Eyebrow>
        <h1 className="m-0 text-display font-bold">Software, made.</h1>
        <p className="m-0 max-w-[620px] text-[20px]/[1.55] text-graphite">
          Apps and data solutions for SMBs that want a dílo — a crafted work — not a robota. We ship production software
          with an AI-native team, fast.
        </p>
        <div className="mt-2 flex flex-wrap gap-3.5">
          <a href="#start" className={buttonVariants({ variant: 'primary', size: 'lg', className: 'no-underline' })}>
            Start a project
          </a>
          <a href="#work" className={buttonVariants({ variant: 'secondary', size: 'lg', className: 'no-underline' })}>
            See the work
          </a>
        </div>
      </div>
    </section>
  )
}
