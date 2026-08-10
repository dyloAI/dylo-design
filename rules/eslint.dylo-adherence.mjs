/**
 * dylo brand adherence — ESLint 9 flat config.
 *
 * Catches the drift that code review keeps having to catch by hand: a raw hex
 * value, a colour from Tailwind's default palette sneaking a second hue into
 * the system, an emoji.
 *
 * Component prop and variant validation is deliberately absent — the
 * components are TypeScript, so `<Button variant="danger">` is already a
 * compile error and a lint rule saying so again would only rot.
 *
 * Usage in eslint.config.mjs:
 *
 *   import { dyloAdherence } from './eslint.dylo-adherence.mjs'
 *   export default defineConfig([...nextVitals, ...dyloAdherence])
 *
 * Catalyst apps use `dyloAdherenceCatalyst` instead: the compatibility layer
 * remaps Tailwind's zinc and blue scales onto the dylo palette, so `zinc-800`
 * in a Catalyst app really does render Graphite and must stay legal.
 */

const TAILWIND_PALETTE = [
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
]

const COLOUR_PREFIXES = 'bg|text|border|ring|outline|fill|stroke|from|via|to|decoration|divide|shadow|accent|caret'

// Lead surrogates cover the emoji planes without needing the `u` flag, which
// esquery selectors do not reliably support.
const EMOJI = '[\\uD83C-\\uD83E][\\uDC00-\\uDFFF]|[\\u2600-\\u27BF]|\\uFE0F'

function rules({ allowCatalystScales }) {
  const palette = allowCatalystScales
    ? TAILWIND_PALETTE.filter((colour) => colour !== 'zinc' && colour !== 'blue')
    : TAILWIND_PALETTE

  return [
    {
      selector: 'Literal[value=/#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?\\b/]',
      message:
        'Raw hex colour. Use a dylo token: bg-ink, text-oxide, border-line, or var(--dylo-*) outside Tailwind.',
    },
    {
      selector: `Literal[value=/\\b(${COLOUR_PREFIXES})-(${palette.join('|')})-\\d{2,3}\\b/]`,
      message:
        "Tailwind's default palette. dylo is warm monochrome with one accent — use ink, graphite, concrete, line, bone, paper or oxide.",
    },
    {
      selector: `Literal[value=/${EMOJI}/]`,
      message: 'No emoji. The mono type layer carries whatever texture is needed.',
    },
    {
      selector: `JSXText[value=/${EMOJI}/]`,
      message: 'No emoji. The mono type layer carries whatever texture is needed.',
    },
    {
      selector: "Literal[value=/font-family\\s*:\\s*(?!['\"]?(?:Space Grotesk|Space Mono|var\\(--dylo-font))/i]",
      message: 'Only two families exist: Space Grotesk (human) and Space Mono (technical).',
    },
  ]
}

/** @type {import('eslint').Linter.Config[]} */
export const dyloAdherence = [
  {
    name: 'dylo/adherence',
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      'no-restricted-syntax': ['error', ...rules({ allowCatalystScales: false })],
    },
  },
]

/** @type {import('eslint').Linter.Config[]} */
export const dyloAdherenceCatalyst = [
  {
    name: 'dylo/adherence-catalyst',
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      'no-restricted-syntax': ['error', ...rules({ allowCatalystScales: true })],
    },
  },
]

export default dyloAdherence
