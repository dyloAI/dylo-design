import { Page, PageHeader, Prose, Section } from '@/components/docs'
import {
  about,
  alternatives,
  legal,
  objections,
  pains,
  pillars,
  pitch,
  positioning,
  todos,
  type Localized,
} from '@/lib/messaging'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Messaging',
  description: 'Positioning, pitch, pillars, and objection answers for dylo, in English and Spanish.',
}

function LanguagePair({ copy }: { copy: Localized }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div>
        <div className="font-mono text-[11px] font-bold tracking-eyebrow text-graphite uppercase">English</div>
        <p className="mt-2 mb-0 text-[15px]/[1.65] text-graphite">{copy.en}</p>
      </div>
      <div>
        <div className="font-mono text-[11px] font-bold tracking-eyebrow text-graphite uppercase">Español</div>
        <p className="mt-2 mb-0 text-[15px]/[1.65] text-graphite">{copy.es}</p>
      </div>
    </div>
  )
}

export default function MessagingPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Foundations"
        title="Messaging"
        lead="The words we use with an owner or a director. English and Spanish. dylo has no tagline. The one-line pitch is the promise."
      />

      <Section title="Positioning" description={legal.en}>
        <LanguagePair copy={positioning} />
        <p className="mt-4 mb-0 text-[14px] text-graphite">{legal.es}</p>
      </Section>

      <Section title="Pitch">
        <h3 className="m-0 text-[15px] font-semibold text-ink">One line</h3>
        <div className="mt-3">
          <LanguagePair copy={pitch.oneLine} />
        </div>
        <h3 className="mt-8 mb-0 text-[15px] font-semibold text-ink">Thirty seconds</h3>
        <div className="mt-3">
          <LanguagePair copy={pitch.thirtySeconds} />
        </div>
      </Section>

      <Section
        title="Pillars"
        description="Four claims. Each proof is a fact from the record. A gap is marked TODO, and it stays empty until the fact exists."
      >
        <div className="grid gap-0 border-t border-line">
          {pillars.map((pillar, index) => (
            <article key={pillar.title.en} className="border-b border-line py-6">
              <div className="font-mono text-[12px] font-bold tracking-[0.1em] text-graphite">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="mt-2 mb-0 text-[20px] font-semibold tracking-tight text-ink">{pillar.title.en}</h3>
              <p className="mt-1 mb-4 text-[15px] text-graphite">{pillar.title.es}</p>
              <LanguagePair copy={pillar.body} />
              <div className="mt-4 border-t border-line pt-4">
                <div className="font-mono text-[11px] font-bold tracking-eyebrow text-graphite uppercase">Proof</div>
                <div className="mt-3">
                  <LanguagePair copy={pillar.proof} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        title="Objections"
        description="The question is what a buyer asks, written with usted. The answer is ours, and it uses usted too."
      >
        <div className="grid gap-0 border-t border-line">
          {objections.map((item) => (
            <article key={item.question.en} className="border-b border-line py-6">
              <h3 className="m-0 text-[18px] font-semibold text-ink">{item.question.en}</h3>
              <p className="mt-1 mb-4 text-[15px] text-graphite">{item.question.es}</p>
              <LanguagePair copy={item.answer} />
            </article>
          ))}
        </div>
      </Section>

      <Section title="What they already compare">
        <LanguagePair copy={alternatives} />
      </Section>

      <Section
        title="In their words"
        description="Five lines owners have used. The Spanish is theirs. The English is our gloss, so an English reader can follow. It is not a second quote."
      >
        <ul className="m-0 list-none space-y-4 p-0">
          {pains.map((pain) => (
            <li key={pain.quote} className="border-b border-line pb-4 last:border-b-0">
              <p className="m-0 text-[16px] text-ink">&ldquo;{pain.quote}&rdquo;</p>
              <p className="mt-1 mb-0 text-[14px] text-graphite">{pain.gloss}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="About dylo">
        <LanguagePair copy={about} />
      </Section>

      <Section title="Still open" description="Do not invent a fact to close one of these.">
        <Prose>
          <ul className="m-0 list-disc space-y-2 pl-5">
            {todos.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Prose>
      </Section>
    </Page>
  )
}
