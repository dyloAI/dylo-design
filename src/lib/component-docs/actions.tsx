import { LoadingButtonExample } from '@/components/examples'
import { Button } from '@/registry/dylo/ui/button'
import { ButtonGroup } from '@/registry/dylo/ui/button-group'
import { CtaArrow, CtaButton } from '@/registry/dylo/ui/cta-button'
import { IconButton } from '@/registry/dylo/ui/icon-button'
import { TextLink } from '@/registry/dylo/ui/link'
import { ChevronDown, Copy, Ellipsis, Plus, RefreshCw, Settings, Trash2 } from 'lucide-react'
import type { ComponentDoc } from './types'

export const actions: ComponentDoc[] = [
  {
    slug: 'button',
    usage: `import { Button } from '@/components/ui/button'

<Button variant="primary">
  <Plus /> Add domain
</Button>`,
    examples: [
      {
        title: 'Variants',
        description:
          'Primary is the solid accent: black in light, white in dark. Use one per view. Secondary is the everyday control; ghost sits in toolbars and row actions.',
        render: (
          <>
            <Button variant="primary">
              <Plus /> Add domain
            </Button>
            <Button>Docs</Button>
            <Button variant="ghost">Cancel</Button>
            <Button variant="destructive">
              <Trash2 /> Delete
            </Button>
          </>
        ),
      },
      {
        title: 'Sizes',
        description: 'The 32px `sm` is the default in the product. `md` and `lg` are for forms and auth screens.',
        render: (
          <>
            <Button size="xs">Extra small</Button>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </>
        ),
      },
      {
        title: 'Loading and disabled',
        description: 'Loading keeps the width and swaps the label for three dots. Press the button to see it.',
        render: (
          <>
            <LoadingButtonExample />
            <Button disabled>Disabled</Button>
            <Button loading>Saving</Button>
          </>
        ),
      },
    ],
    props: [
      {
        name: 'variant',
        type: "'primary' | 'secondary' | 'ghost' | 'destructive'",
        default: "'secondary'",
        description: 'The visual weight.',
      },
      { name: 'size', type: "'xs' | 'sm' | 'md' | 'lg'", default: "'sm'", description: 'Height 24, 32, 40 or 48px.' },
      {
        name: 'loading',
        type: 'boolean',
        default: 'false',
        description: 'Disables the button and shows the loading dots.',
      },
      {
        name: 'asChild',
        type: 'boolean',
        default: 'false',
        description: 'Render the child element, for links styled as buttons.',
      },
    ],
    notes: [
      'One primary action per view. Everything else is secondary or ghost.',
      'Icons are Lucide at 16px. Put them before the label, never after, except for a chevron that opens a menu.',
    ],
  },
  {
    slug: 'icon-button',
    usage: `import { IconButton } from '@/components/ui/icon-button'

<IconButton aria-label="More actions">
  <Ellipsis />
</IconButton>`,
    examples: [
      {
        title: 'Variants',
        description: 'Ghost for row actions, outline beside inputs, secondary when it stands alone.',
        render: (
          <>
            <IconButton aria-label="More actions">
              <Ellipsis />
            </IconButton>
            <IconButton variant="outline" aria-label="Copy">
              <Copy />
            </IconButton>
            <IconButton variant="secondary" aria-label="Settings">
              <Settings />
            </IconButton>
          </>
        ),
      },
      {
        title: 'Sizes',
        render: (
          <>
            <IconButton size="xs" variant="secondary" aria-label="Refresh">
              <RefreshCw />
            </IconButton>
            <IconButton size="sm" variant="secondary" aria-label="Refresh">
              <RefreshCw />
            </IconButton>
            <IconButton size="md" variant="secondary" aria-label="Refresh">
              <RefreshCw />
            </IconButton>
          </>
        ),
      },
    ],
    props: [
      {
        name: 'variant',
        type: "'ghost' | 'outline' | 'secondary'",
        default: "'ghost'",
        description: 'The visual weight.',
      },
      { name: 'size', type: "'xs' | 'sm' | 'md'", default: "'sm'", description: 'Square 24, 32 or 40px.' },
      { name: 'aria-label', type: 'string', description: 'Required. The button has no visible text.' },
    ],
  },
  {
    slug: 'cta-button',
    usage: `import { CtaArrow, CtaButton } from '@/components/ui/cta-button'

<CtaButton asChild>
  <a href="/signup">
    Get started <CtaArrow />
  </a>
</CtaButton>`,
    examples: [
      {
        title: 'Glass and ghost',
        description: 'The glass pane fills solid and glows on hover. Ghost is the quiet action beside it.',
        render: (
          <>
            <CtaButton>
              Get started <CtaArrow />
            </CtaButton>
            <CtaButton variant="ghost">
              Book a call <CtaArrow />
            </CtaButton>
          </>
        ),
      },
      {
        title: 'Medium',
        description: 'The size the header uses.',
        render: (
          <>
            <CtaButton size="md">Get started</CtaButton>
            <CtaButton size="md" variant="ghost">
              Log in
            </CtaButton>
          </>
        ),
      },
    ],
    props: [
      {
        name: 'variant',
        type: "'glass' | 'ghost'",
        default: "'glass'",
        description: 'Translucent pane, or text only.',
      },
      { name: 'size', type: "'md' | 'lg'", default: "'lg'", description: 'Height 40 or 48px.' },
      { name: 'asChild', type: 'boolean', default: 'false', description: 'Render a link instead of a button.' },
    ],
    notes: ['Marketing pages and auth screens only. Inside the product, the control is Button.'],
  },
  {
    slug: 'button-group',
    usage: `import { ButtonGroup } from '@/components/ui/button-group'

<ButtonGroup>
  <Button>Send test</Button>
  <IconButton variant="secondary" aria-label="More"><ChevronDown /></IconButton>
</ButtonGroup>`,
    examples: [
      {
        title: 'Split action',
        render: (
          <>
            <ButtonGroup>
              <Button>Send test</Button>
              <IconButton variant="secondary" aria-label="More send options">
                <ChevronDown />
              </IconButton>
            </ButtonGroup>
            <ButtonGroup>
              <Button>Day</Button>
              <Button>Week</Button>
              <Button>Month</Button>
            </ButtonGroup>
          </>
        ),
      },
    ],
  },
  {
    slug: 'link',
    usage: `import { TextLink } from '@/components/ui/link'

<p>Don't have an account? <TextLink href="/signup">Sign up</TextLink></p>`,
    examples: [
      {
        title: 'Variants',
        className: 'flex-col items-start gap-3 text-sm text-default',
        render: (
          <>
            <p>
              Don&apos;t have an account? <TextLink href="#">Sign up</TextLink>
            </p>
            <p>
              By signing up you agree to the <TextLink variant="underline">terms of service</TextLink>.
            </p>
            <p>
              <TextLink variant="muted" href="#">
                Changelog
              </TextLink>
            </p>
            <p>
              Billed per <TextLink variant="dotted">active contact</TextLink>.
            </p>
          </>
        ),
      },
    ],
    props: [
      {
        name: 'variant',
        type: "'emphasis' | 'underline' | 'muted' | 'dotted'",
        default: "'emphasis'",
        description: 'Bold in secondary copy, underlined legal link, footer link, or a term with a tooltip.',
      },
      { name: 'asChild', type: 'boolean', default: 'false', description: 'Wrap a framework link such as next/link.' },
    ],
  },
]
