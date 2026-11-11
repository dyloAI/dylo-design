import { readFileSync } from 'node:fs'
import path from 'node:path'

/*
 * The foundations pages read their values out of the theme files at build
 * time, so a documented value can never drift from a shipped one. Only call
 * these from server components.
 */

const themeDir = path.join(process.cwd(), 'registry', 'dylo', 'theme')

type Block = Record<string, string>

function declarations(body: string): Block {
  const out: Block = {}
  const clean = body.replace(/\/\*[\s\S]*?\*\//g, '')
  for (const match of clean.matchAll(/(--dylo-[\w-]+)\s*:\s*([^;]+);/g)) {
    out[match[1]!] = match[2]!.replace(/\s+/g, ' ').trim()
  }
  return out
}

let cache: { light: Block; dark: Block; shared: Block } | null = null

/** The three blocks of dylo-tokens.css: light (`:root, .light`), dark (`.dark`) and the theme-independent `:root`. */
export function readTokens() {
  if (cache) return cache
  const css = readFileSync(path.join(themeDir, 'dylo-tokens.css'), 'utf8')
  const blocks = [...css.matchAll(/(^|\n)([^{}\n][^{}]*?)\{([^}]*)\}/g)].map((m) => ({
    selector: m[2]!.replace(/\/\*[\s\S]*?\*\//g, '').trim(),
    body: m[3]!,
  }))
  const pick = (test: (selector: string) => boolean) =>
    Object.assign({}, ...blocks.filter((b) => test(b.selector)).map((b) => declarations(b.body))) as Block
  cache = {
    light: pick((s) => s.includes('.light')),
    dark: pick((s) => s === '.dark'),
    shared: pick((s) => s === ':root'),
  }
  return cache
}

/** Resolve one `var(--dylo-x)` hop, for values that alias another token. */
function resolve(value: string | undefined, block: Block): string {
  if (!value) return ''
  const alias = value.match(/^var\((--dylo-[\w-]+)\)$/)
  return alias ? resolve(block[alias[1]!], block) : value
}

export type Swatch = { token: string; utility: string; light: string; dark: string }

export function scale(name: string, alpha: boolean, utilityPrefix = name): Swatch[] {
  const { light, dark } = readTokens()
  return Array.from({ length: 12 }, (_, i) => {
    const token = `--dylo-${name}-${alpha ? 'a' : ''}${i + 1}`
    return {
      token,
      utility: `${utilityPrefix}-${alpha && name === 'gray' ? 'a' : ''}${i + 1}`,
      light: resolve(light[token], light),
      dark: resolve(dark[token], dark),
    }
  })
}

export type Role = { utility: string; token: string; role: string; light: string; dark: string }

function role(utility: string, token: string, description: string): Role {
  const { light, dark } = readTokens()
  return { utility, token, role: description, light: resolve(light[token], light), dark: resolve(dark[token], dark) }
}

/** The surfaces and text roles. Reach for these before a scale step. */
export function surfaceRoles(): Role[] {
  return [
    role('bg-background', '--dylo-background', 'The page.'),
    role('bg-surface', '--dylo-base', 'Code blocks and the email preview.'),
    role('bg-canvas', '--dylo-canvas', 'The grid behind marketing panels.'),
    role('bg-subtle', '--dylo-gray-1', 'A recessed band: table headers, code chrome.'),
    role('bg-elevated', '--dylo-gray-2', 'A raised panel.'),
    role('bg-overlay', '--dylo-overlay', 'Menus, popovers and dialogs.'),
    role('bg-scrim', '--dylo-scrim', 'Behind a dialog or sheet.'),
    role('bg-interactive', '--dylo-gray-a2', 'The resting fill of a control.'),
    role('bg-interactive-hover', '--dylo-gray-a3', 'The hovered or open fill of a control.'),
    role('bg-accent', '--dylo-accent', 'The primary action. Black in light, white in dark.'),
  ]
}

export function textRoles(): Role[] {
  return [
    role('text-emphasis', '--dylo-gray-12', 'Headings, primary cell text, values.'),
    role('text-default', '--dylo-gray-11', 'Body copy and labels.'),
    role('text-gray-10', '--dylo-gray-10', 'Hints and timestamps.'),
    role('text-placeholder', '--dylo-placeholder', 'Placeholder text only.'),
    role('text-on-accent', '--dylo-on-accent', 'Text on the accent fill.'),
  ]
}

export function borderRoles(): Role[] {
  return [
    role('border-gray-a3', '--dylo-gray-a3', 'The hairline: tables, cards, dividers.'),
    role('border-interactive', '--dylo-gray-a3', 'The edge of a control.'),
    role('border-default', '--dylo-gray-3', 'A solid border where a translucent one would stack.'),
    role('border-gray-a4', '--dylo-gray-a4', 'A lit edge: the hovered card, the recommended plan.'),
  ]
}

export type StatusRole = { name: string; hue: string; use: string; text: Role; bg: Role; border: Role }

export function statusRoles(): StatusRole[] {
  const rows = [
    { name: 'success', hue: 'green', use: 'Delivered, verified, healthy.' },
    { name: 'warning', hue: 'amber', use: 'Delayed, pending, close to a limit.' },
    { name: 'error', hue: 'red', use: 'Bounced, failed, over a limit, destructive actions.' },
    { name: 'info', hue: 'blue', use: 'Scheduled, queued, a neutral notice.' },
  ]
  return rows.map((r) => ({
    ...r,
    text: role(`text-${r.name}`, `--dylo-${r.hue}-a11`, 'Text'),
    bg: role(`bg-${r.name}`, `--dylo-${r.hue}-a3`, 'Fill'),
    border: role(`border-${r.name}`, `--dylo-${r.hue}-a6`, 'Border'),
  }))
}

export function shared(token: string) {
  return readTokens().shared[token] ?? ''
}

/** Families: role, utility and the token's stack. */
export function fontFamilies() {
  return [
    { utility: 'font-sans', token: '--dylo-font-sans', name: 'Inter', role: 'The interface and body copy.' },
    { utility: 'font-display', token: '--dylo-font-display', name: 'Geist', role: 'Section titles and page headings.' },
    {
      utility: 'font-serif',
      token: '--dylo-font-serif',
      name: 'Playfair Display',
      role: 'The single largest marketing headline.',
    },
    { utility: 'font-mono', token: '--dylo-font-mono', name: 'Commit Mono', role: 'Code, IDs, keys, DNS values.' },
  ].map((f) => ({ ...f, stack: shared(f.token) }))
}

export function motionTokens() {
  return [
    { token: '--dylo-duration-fast', role: 'Hover and colour changes.' },
    { token: '--dylo-duration-base', role: 'Menus, dialogs, popovers opening.' },
    { token: '--dylo-duration-slow', role: 'Sheets sliding in.' },
    { token: '--dylo-ease-standard', role: 'Colour and opacity.' },
    { token: '--dylo-ease-out', role: 'Movement that settles (ease-dylo).' },
    { token: '--dylo-ease-drawer', role: 'Sheets (ease-drawer).' },
  ].map((m) => ({ ...m, value: shared(m.token) }))
}

export function layoutTokens() {
  return [
    { token: '--dylo-header-height', role: 'The marketing header.' },
    { token: '--dylo-sidebar-width', role: 'The dashboard sidebar.' },
  ].map((m) => ({ ...m, value: shared(m.token) }))
}

/** Shadows are defined in dylo-theme.css, so read them from there. */
export function shadows() {
  const css = readFileSync(path.join(themeDir, 'dylo-theme.css'), 'utf8')
  const { light, dark } = readTokens()
  const roles: Record<string, string> = {
    glow: 'The halo under a hovered call to action.',
    popover: 'Menus, popovers, the combobox list.',
    dialog: 'Dialogs and sheets.',
  }
  return Object.entries(roles).map(([name, use]) => {
    const raw = css.match(new RegExp(`--shadow-${name}:\\s*([^;]+);`))?.[1]?.trim() ?? ''
    const value =
      raw === 'var(--dylo-shadow-glow)'
        ? `light: ${light['--dylo-shadow-glow']} / dark: ${dark['--dylo-shadow-glow']}`
        : raw
    return { utility: `shadow-${name}`, value, role: use }
  })
}
