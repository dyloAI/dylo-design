/**
 * dylo brand adherence — ESLint 9 flat config (v2).
 *
 * Catches the drift that code review keeps having to catch by hand: a raw hex
 * value that will not flip with the theme, a step from Tailwind's default
 * 50-950 palette instead of the dylo 1-12 scales, an emoji, a third font.
 *
 * Hue itself is legal: the green, red, amber, blue, orange and violet scales
 * carry status (`text-success`, `bg-warning`, `border-error`, `green-9`). What
 * is banned is the default palette, because `green-500` has no dark-theme
 * counterpart and `green-9` does.
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
 * remaps Tailwind's zinc and blue scales onto the dylo grays, so `zinc-800`
 * in a Catalyst app really does render a dylo gray and must stay legal.
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

// Tailwind's default steps. The dylo scales use 1-12 and a1-a12, which never
// collide with these.
const TAILWIND_STEPS = '50|[1-9]00|950'

// The steps of a dylo scale that no longer exists. `slate-6` now resolves to
// nothing, so the class would fail silently rather than at build time.
const RETIRED_STEPS = '[1-9]|1[0-2]'

const COLOUR_PREFIXES =
  'bg|text|border|border-[xytrbl]|ring|ring-offset|outline|fill|stroke|from|via|to|decoration|divide|shadow|inset-shadow|inset-ring|accent|caret|placeholder'

// 3, 4, 6 or 8 hex digits. Five- and seven-digit runs are left alone so an
// anchor such as `#faded1x` is not flagged.
const HEX = '#(?:[0-9a-fA-F]{8}|[0-9a-fA-F]{6}|[0-9a-fA-F]{3,4})\\b'

// Lead surrogates cover the emoji planes without needing the `u` flag, which
// esquery selectors do not reliably support.
const EMOJI = '[\\uD83C-\\uD83E][\\uDC00-\\uDFFF]|[\\u2600-\\u27BF]|\\uFE0F'

const FAMILIES = 'Inter|Geist|Playfair Display|Commit Mono|var\\(--dylo-font'

function rules({ allowCatalystScales }) {
  const palette = allowCatalystScales
    ? TAILWIND_PALETTE.filter((colour) => colour !== 'zinc' && colour !== 'blue')
    : TAILWIND_PALETTE

  return [
    {
      selector: `Literal[value=/${HEX}/]`,
      message:
        'Raw hex colour. It will not flip with the theme. Use a dylo utility (bg-background, text-emphasis, border-gray-a3, text-success) or var(--dylo-*) outside Tailwind.',
    },
    {
      selector: `TemplateElement[value.raw=/${HEX}/]`,
      message:
        'Raw hex colour. It will not flip with the theme. Use a dylo utility (bg-background, text-emphasis, border-gray-a3, text-success) or var(--dylo-*) outside Tailwind.',
    },
    {
      selector: `Literal[value=/\\b(${COLOUR_PREFIXES})-(${palette.join('|')})-(${TAILWIND_STEPS})\\b/]`,
      message:
        "Tailwind's default palette. Use a dylo step instead (gray-11, gray-a3, green-9, red-a11) or a semantic utility (text-default, bg-error).",
    },
    {
      selector: `TemplateElement[value.raw=/\\b(${COLOUR_PREFIXES})-(${palette.join('|')})-(${TAILWIND_STEPS})\\b/]`,
      message:
        "Tailwind's default palette. Use a dylo step instead (gray-11, gray-a3, green-9, red-a11) or a semantic utility (text-default, bg-error).",
    },
    {
      selector: `Literal[value=/\\b(${COLOUR_PREFIXES})-slate-(${RETIRED_STEPS})\\b/]`,
      message:
        'The slate scale was folded into gray. Use border-gray-a3 for a hairline, bg-gray-a2 or bg-gray-a3 for a fill, and text-default or text-emphasis for text.',
    },
    {
      selector: `TemplateElement[value.raw=/\\b(${COLOUR_PREFIXES})-slate-(${RETIRED_STEPS})\\b/]`,
      message:
        'The slate scale was folded into gray. Use border-gray-a3 for a hairline, bg-gray-a2 or bg-gray-a3 for a fill, and text-default or text-emphasis for text.',
    },
    {
      selector: `Literal[value=/${EMOJI}/]`,
      message: 'No emoji. Use a Lucide icon at 16px, or plain words.',
    },
    {
      selector: `JSXText[value=/${EMOJI}/]`,
      message: 'No emoji. Use a Lucide icon at 16px, or plain words.',
    },
    {
      selector: `Literal[value=/font-family\\s*:(?!\\s*['"]?(?:${FAMILIES}))/i]`,
      message:
        'Four families exist: Inter (interface), Geist (headings), Playfair Display (one marketing headline) and Commit Mono (code). Use font-sans, font-display, font-serif or font-mono.',
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
