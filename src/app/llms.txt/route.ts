import { componentGroups, componentTitle } from '@/lib/navigation'
import { REGISTRY, REPO_URL } from '@/lib/registry'
import {
  borderRoles,
  fontFamilies,
  motionTokens,
  shadows,
  statusRoles,
  surfaceRoles,
  textRoles,
  type Role,
} from '@/lib/tokens'
import registry from '@/registry/dylo/registry.json'
import catalogue from '../../../registry.json'

export const dynamic = 'force-static'

const describe = (name: string) =>
  [...registry.items, ...catalogue.items].find((item) => item.name === name)?.description ?? ''

const role = (r: Role) => `- ${r.utility} (${r.token}): light ${r.light}, dark ${r.dark} — ${r.role}`

export function GET() {
  const body = [
    '# dylo design system (v2)',
    '',
    'Tokens, a Tailwind v4 theme in light and dark, Radix-based React components, product and marketing kits, and brand assets for dylo, a technology provider.',
    "dylo has no tagline. The promise is the one-line pitch: a dylo engineer builds your web app for a one-off fee, and we host it and look after it for a yearly fee. Voice is calm and plain, with no hype. Public copy does not mention AI and states no figure of dylo's: no price, no range, no maintenance minimum.",
    'Customer-facing wording: dylo-hq, content/market/wording.md (https://hq.dylo.dev/market/wording). This design system holds the visual rules only. dylo is a brand of Ax42 S.L.',
    `Source registry: ${REGISTRY} (${REPO_URL}). Install with the shadcn CLI: pnpm dlx shadcn@latest add ${REGISTRY}/<item>#v2.0.0`,
    '',
    '## Non-negotiables',
    '',
    '- The brand name is always lowercase: dylo. The work is capitalised: a Dílo.',
    '- Light and dark are both first-class. Light on :root and .light, dark under .dark. Use the semantic utilities so components need no dark: variants.',
    '- The accent is black in light and white in dark (bg-accent text-on-accent). One primary action per view.',
    '- Hue carries status only: success green, warning amber, error red, info blue. Violet and orange are the opened and clicked email events.',
    "- Colour utilities use steps 1 to 12 (gray-a3, green-9) or a semantic name. Never Tailwind's 50 to 950 palette, never raw hex.",
    '- No emoji, ever. Lucide icons at 16px.',
    '- Inter for the interface, Geist medium for headings, Playfair Display for one marketing headline, Commit Mono for code and IDs.',
    '- Motion: 150 to 200ms for interaction, 500ms for sheets. Off under prefers-reduced-motion.',
    '',
    '## Registry items',
    '',
    ...['theme', 'catalyst-theme', 'fonts', 'brand-assets', 'agent-rules', 'dashboard-kit', 'marketing-kit'].map(
      (name) => `- ${name} — ${describe(name)}`
    ),
    '',
    '## Components',
    '',
    ...componentGroups.flatMap((group) => [
      `### ${group.title}`,
      ...group.slugs.map((slug) => `- ${slug} (${componentTitle(slug)}) — ${describe(slug)} Docs: /components/${slug}`),
      '',
    ]),
    '## Surfaces',
    '',
    ...surfaceRoles().map(role),
    '',
    '## Text',
    '',
    ...textRoles().map(role),
    '',
    '## Borders',
    '',
    ...borderRoles().map(role),
    '',
    '## Status',
    '',
    ...statusRoles().map((s) => `- ${s.name} (${s.hue}): text-${s.name}, bg-${s.name}, border-${s.name} — ${s.use}`),
    '',
    '## Type',
    '',
    ...fontFamilies().map((f) => `- ${f.utility}: ${f.name} (${f.token}) — ${f.role}`),
    '',
    '## Shape and motion',
    '',
    '- Radius: Tailwind defaults. rounded-xl for controls, rounded-2xl for cards, dialogs and code blocks.',
    ...shadows().map((s) => `- ${s.utility} — ${s.role}`),
    ...motionTokens().map((m) => `- ${m.token}: ${m.value} — ${m.role}`),
    '',
    '## Choosing a layer',
    '',
    'Product apps (dylo, client apps, dylo-templates/*): install theme + catalyst-theme. Keep Catalyst, auth and the shell',
    'from dylo-starter. The dashboard kit is the visual reference for product screens.',
    '',
    'Marketing and brand collateral: install theme plus the components and the marketing-kit sections you need.',
    '',
    'Theme releases: tag dylo-design, then re-install the pinned theme in starter and templates. Product UI changes:',
    'edit dylo-starter, run scripts/sync-from-starter.mjs. Client clones are not auto-updated.',
    '',
  ].join('\n')

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  })
}
