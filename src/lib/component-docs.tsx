import { Preview, type PropRow } from '@/components/docs'
import { Badge } from '@/registry/dylo/ui/badge'
import { Button } from '@/registry/dylo/ui/button'
import { Card } from '@/registry/dylo/ui/card'
import { Eyebrow } from '@/registry/dylo/ui/eyebrow'
import { Input } from '@/registry/dylo/ui/input'

export type ComponentDoc = {
  slug: string
  name: string
  lead: string
  /** Path relative to registry/, used to read the source at build time. */
  source: string
  usage: string
  examples: React.ReactNode
  props: PropRow[]
  notes?: React.ReactNode
}

const CLASS_NAME_PROP: PropRow = {
  name: 'className',
  type: 'string',
  description: 'Merged with the variant classes through cn(), so anything you pass wins.',
}

export const componentDocs: ComponentDoc[] = [
  {
    slug: 'button',
    name: 'Button',
    lead: 'Foundry-stamped action. The primary is an ink plate with a hard block shadow that seats on press — the button shifts into its own shadow, like a stamp meeting the page.',
    source: 'dylo/ui/button.tsx',
    usage: `import { Button } from '@/components/ui/button'

<Button variant="primary" size="lg">Start a project</Button>`,
    examples: (
      <>
        <Preview label="Variant">
          <Button variant="primary">Start a project</Button>
          <Button variant="secondary">View work</Button>
          <Button variant="ghost">Cancel</Button>
        </Preview>
        <Preview label="Size">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </Preview>
        <Preview label="Disabled">
          <Button disabled>Unavailable</Button>
          <Button variant="secondary" disabled>
            Unavailable
          </Button>
        </Preview>
      </>
    ),
    props: [
      { name: 'variant', type: "'primary' | 'secondary' | 'ghost'", default: "'primary'", description: 'Visual weight. Ghost has no plate, so it darkens instead of seating.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Control size.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Drops the shadow and the press transform along with the interaction.' },
      { name: 'type', type: "'button' | 'submit' | 'reset'", default: "'button'", description: 'Defaults to button so a stray control never submits a form by accident.' },
      CLASS_NAME_PROP,
    ],
    notes: (
      <p className="m-0">
        For a link that looks like a button, put <code>buttonVariants()</code> on the anchor rather than nesting a{' '}
        <code>&lt;button&gt;</code> inside an <code>&lt;a&gt;</code>, which is invalid and unreachable by keyboard.
      </p>
    ),
  },
  {
    slug: 'input',
    name: 'Input',
    lead: 'Text field with a mono uppercase label and the oxide focus ring — the one translucent touch in an otherwise flat, opaque system.',
    source: 'dylo/ui/input.tsx',
    usage: `import { Input } from '@/components/ui/input'

<Input label="Email" type="email" placeholder="you@company.com" hint="We reply within one business day." />`,
    examples: (
      <>
        <Preview label="With label" className="block max-w-[380px]">
          <Input label="Email" type="email" placeholder="you@company.com" />
        </Preview>
        <Preview label="With hint" className="block max-w-[380px]">
          <Input label="What are you building?" placeholder="A claims-review tool" hint="One sentence is plenty." />
        </Preview>
        <Preview label="Disabled" className="block max-w-[380px]">
          <Input label="Account" defaultValue="dylo" disabled />
        </Preview>
      </>
    ),
    props: [
      { name: 'label', type: 'ReactNode', description: 'Mono uppercase label above the field.' },
      { name: 'hint', type: 'ReactNode', description: 'Muted mono note below the field.' },
      { name: 'containerClassName', type: 'string', description: 'Classes for the wrapping label element.' },
      CLASS_NAME_PROP,
    ],
    notes: (
      <p className="m-0">
        The field is wrapped in its <code>&lt;label&gt;</code> rather than linked by id, so it needs no generated ids
        and stays a Server Component. Every native input attribute passes straight through.
      </p>
    ),
  },
  {
    slug: 'card',
    name: 'Card',
    lead: 'The signature foundry panel: a paper or ink surface with a full ink border and a hard block-shadow offset. A stamped plate, never a soft floating card.',
    source: 'dylo/ui/card.tsx',
    usage: `import { Card } from '@/components/ui/card'

<Card eyebrow="Selected work" title="Inventory OS">
  Real-time stock and reorder automation across 40 storefronts.
</Card>`,
    examples: (
      <>
        <Preview label="Light" className="block">
          <Card eyebrow="Selected work" title="Inventory OS">
            Real-time stock and reorder automation across 40 storefronts.
          </Card>
        </Preview>
        <Preview label="Ink" tone="ink" className="block">
          <Card tone="ink" eyebrow="How we work" title="Precise. Engineered. Bold.">
            An AI-native team ships a working product in weeks, not quarters.
          </Card>
        </Preview>
        <Preview label="Flat" className="block">
          <Card elevated={false} title="No block shadow">
            Use the flat panel when cards sit inside another bordered surface and the offsets would collide.
          </Card>
        </Preview>
      </>
    ),
    props: [
      { name: 'tone', type: "'light' | 'ink'", default: "'light'", description: 'Paper panel with ink text, or the reverse.' },
      { name: 'elevated', type: 'boolean', default: 'true', description: 'The hard block-shadow offset.' },
      { name: 'eyebrow', type: 'ReactNode', description: 'Mono section label above the title. Tone follows the panel.' },
      { name: 'title', type: 'ReactNode', description: 'Panel heading. Shadows the native title attribute, which a card has no use for.' },
      CLASS_NAME_PROP,
    ],
  },
  {
    slug: 'badge',
    name: 'Badge',
    lead: 'Status or technical chip. Mono type, square-ish — part of the engineered layer, not a decorative pill.',
    source: 'dylo/ui/badge.tsx',
    usage: `import { Badge } from '@/components/ui/badge'

<Badge variant="muted">Retail</Badge>`,
    examples: (
      <Preview label="Variant">
        <Badge>Default</Badge>
        <Badge variant="solid">Solid</Badge>
        <Badge variant="accent">Accent</Badge>
        <Badge variant="muted">Muted</Badge>
      </Preview>
    ),
    props: [
      { name: 'variant', type: "'default' | 'solid' | 'accent' | 'muted'", default: "'default'", description: 'Weight of the chip. Accent spends the view\u2019s one oxide note.' },
      CLASS_NAME_PROP,
    ],
    notes: (
      <p className="m-0">
        There is no success or danger variant on purpose — the system has one accent and no second hue. Status is
        carried by the label text and the border weight.
      </p>
    ),
  },
  {
    slug: 'eyebrow',
    name: 'Eyebrow',
    lead: 'The mono section label with an oxide tick. It sits above almost every headline and is the brand\u2019s most recognizable device.',
    source: 'dylo/ui/eyebrow.tsx',
    usage: `import { Eyebrow } from '@/components/ui/eyebrow'

<Eyebrow>Selected work</Eyebrow>`,
    examples: (
      <>
        <Preview label="Tone">
          <Eyebrow>On bone</Eyebrow>
        </Preview>
        <Preview label="Tone" tone="ink">
          <Eyebrow tone="light">On ink</Eyebrow>
        </Preview>
        <Preview label="Without the tick">
          <Eyebrow tick={false}>No tick</Eyebrow>
        </Preview>
      </>
    ),
    props: [
      { name: 'tone', type: "'dark' | 'light'", default: "'dark'", description: 'Dark for bone surfaces, light for ink.' },
      { name: 'tick', type: 'boolean', default: 'true', description: 'The oxide square.' },
      CLASS_NAME_PROP,
    ],
    notes: (
      <p className="m-0">
        The tick is oxide, so a view with an Eyebrow has already spent its one accent. Drop the tick, or drop the
        other oxide element — do not run both.
      </p>
    ),
  },
]

export function getComponentDoc(slug: string) {
  return componentDocs.find((doc) => doc.slug === slug)
}
