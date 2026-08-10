import { Eyebrow } from '@/registry/dylo/ui/eyebrow'

const STEPS = [
  { n: '01', title: 'Scope', body: 'A two-day sprint to define the one problem worth solving first.' },
  { n: '02', title: 'Build', body: 'An AI-native team ships a working product in weeks, not quarters.' },
  { n: '03', title: 'Iterate', body: 'We stay on as the work runs, tightening what matters.' },
]

/** Ink surface. Structural rules instead of cards — content sits on hairlines. */
export function StudioSection() {
  return (
    <section id="studio" className="bg-ink px-8 py-[84px]">
      <div className="mx-auto max-w-[1180px]">
        <Eyebrow tone="light">How we work</Eyebrow>
        <h2 className="text-bone mt-[18px] mb-11 text-[40px] font-bold tracking-tight">Precise. Engineered. Bold.</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.n} className="border-graphite border-t pt-5">
              <div className="text-oxide font-mono text-[13px] font-bold tracking-[0.1em]">{step.n}</div>
              <div className="text-bone mt-2.5 text-[22px] font-semibold">{step.title}</div>
              <p className="text-bone/80 mt-2.5 text-[15px]/[1.6]">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
