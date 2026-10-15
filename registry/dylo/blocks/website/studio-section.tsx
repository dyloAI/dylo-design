import { Eyebrow } from '@/registry/dylo/ui/eyebrow'

const STEPS = [
  { n: '01', title: 'Scope', body: 'We agree what the app does, what it costs, and when it will be ready.' },
  {
    n: '02',
    title: 'Build',
    body: 'We build the web app. Most first versions are ready in weeks, on the date we agreed.',
  },
  { n: '03', title: 'Look after', body: 'After it ships, we keep it running. Fixes and small changes stay with us.' },
]

/** Ink surface. Structural rules instead of cards — content sits on hairlines. */
export function StudioSection() {
  return (
    <section id="studio" className="bg-ink px-8 py-[84px]">
      <div className="mx-auto max-w-[1180px]">
        <Eyebrow tone="light">How we work</Eyebrow>
        <h2 className="mt-[18px] mb-11 text-[40px] font-bold tracking-tight text-bone">Scope, build, look after.</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.n} className="border-t border-graphite pt-5">
              <div className="font-mono text-[13px] font-bold tracking-[0.1em] text-oxide">{step.n}</div>
              <div className="mt-2.5 text-[22px] font-semibold text-bone">{step.title}</div>
              <p className="mt-2.5 text-[15px]/[1.6] text-bone/80">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
