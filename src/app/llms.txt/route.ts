import { componentDocs } from '@/lib/component-docs'
import { REGISTRY, REPO_URL } from '@/lib/registry'
import { accents, neutrals, radii, shadows, typeScale } from '@/lib/tokens'

export const dynamic = 'force-static'

function list(lines: string[]) {
  return lines.join('\n')
}

export function GET() {
  const body = list([
    '# dylo design system',
    '',
    'Tokens, Tailwind v4 theme, React components and brand assets for dylo — an AI-native software factory.',
    `Source registry: ${REGISTRY} (${REPO_URL}). Install with the shadcn CLI: pnpm dlx shadcn@latest add ${REGISTRY}/<item>`,
    '',
    '## Non-negotiables',
    '',
    '- The brand name is always lowercase: dylo. The work is capitalised: a Dílo.',
    '- Exactly one oxide accent per view. Never introduce a second hue.',
    '- Two type families only: Space Grotesk (human) and Space Mono (technical, uppercase, wide tracking).',
    '- No emoji, ever. Line icons only, 2px stroke (Lucide).',
    '- Cards are stamped plates: ink border plus a hard block-shadow offset, barely rounded.',
    '- Motion is mechanical: 120-180ms, linear to ease-out. No bounces, no float loops.',
    '- Never write a raw hex value. Use the theme utilities.',
    '',
    '## Registry items',
    '',
    '- theme — design tokens plus the Tailwind v4 mapping. Start here in every project.',
    '- catalyst-theme — remaps Tailwind zinc/blue onto the dylo palette for Catalyst apps.',
    '- fonts — Google Fonts CDN import, for consumers without a font pipeline.',
    '- brand-assets — logo lockups, keystone mark and app icons into public/brand/.',
    '- agent-rules — brand rule for .cursor/rules plus the adherence ESLint config.',
    '- website-kit — the marketing site in six composable sections.',
    '- auth-kit / app-shell — docs/marketing demos only. Product apps use Catalyst auth+shell from dylo-starter.',
    ...componentDocs.map((doc) => `- ${doc.slug} — ${doc.lead.split('.')[0]}.`),
    '',
    '## Colour tokens',
    '',
    ...[...neutrals, ...accents].map(
      (token) => `- ${token.name}: ${token.value} · ${token.token} · ${token.utility} — ${token.role}`
    ),
    '',
    '## Type',
    '',
    '- Sans: Space Grotesk, via --dylo-font-display / font-sans. Set on body, so unstyled text is already correct.',
    '- Mono: Space Mono, via --dylo-font-mono / font-mono. Uppercase, tracking 0.08em (0.24em for eyebrows).',
    ...typeScale.map((step) => `- ${step.name}: ${step.value} · ${step.utility} — ${step.note}`),
    '',
    '## Shape',
    '',
    ...radii.map((radius) => `- ${radius.utility}: ${radius.value} — ${radius.use}`),
    ...shadows.map((shadow) => `- ${shadow.utility}: ${shadow.value} — ${shadow.use}`),
    '- grid-paper / grid-paper-reversed: the 48px engineering grid, the only pattern in the system.',
    '',
    '## Components',
    '',
    ...componentDocs.flatMap((doc) => [
      `### ${doc.name} (${doc.source})`,
      doc.lead,
      ...doc.props.map(
        (prop) => `- ${prop.name}: ${prop.type}${prop.default ? ` = ${prop.default}` : ''} — ${prop.description}`
      ),
      '',
    ]),
    '## Choosing a layer',
    '',
    'Product apps (dylo, client apps, dylo-templates/*): install theme + catalyst-theme. Keep Catalyst auth and shell',
    'from dylo-starter. Do not install foundry auth-kit / app-shell. Optional: Eyebrow and foundry Card.',
    '',
    'Marketing / brand collateral: install theme plus foundry components / website-kit.',
    '',
    'Theme releases: tag dylo-design, then re-install the pinned theme in starter and templates. Product UI changes:',
    'edit dylo-starter, run scripts/sync-from-starter.mjs. Client clones are not auto-updated.',
    '',
  ])

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  })
}
