import { Badge } from '@/registry/dylo/ui/badge'
import { Card } from '@/registry/dylo/ui/card'
import { Eyebrow } from '@/registry/dylo/ui/eyebrow'

const PROJECTS = [
  { name: 'Inventory OS', industry: 'Retail', desc: 'Real-time stock and reorder automation across 40 storefronts.' },
  { name: 'Claims Copilot', industry: 'Insurance', desc: 'AI-assisted claims intake that cut review time by 70%.' },
  { name: 'Route Planner', industry: 'Logistics', desc: 'Daily dispatch optimizer for a 120-vehicle delivery fleet.' },
]

/** Three foundry panels on paper. Numbers over adjectives in every blurb. */
export function WorkSection() {
  return (
    <section id="work" className="bg-paper px-8 py-[84px]">
      <div className="mx-auto max-w-[1180px]">
        <Eyebrow>Selected work</Eyebrow>
        <h2 className="text-ink mt-[18px] mb-10 text-[40px] font-bold tracking-tight">Dílo, delivered.</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {PROJECTS.map((project) => (
            <Card key={project.name} className="flex flex-col items-start gap-3.5">
              <Badge variant="muted">{project.industry}</Badge>
              <div className="text-ink text-[22px] font-bold">{project.name}</div>
              <p className="text-graphite m-0 text-[15px]/[1.55]">{project.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
