export type ColourToken = {
  name: string
  token: string
  value: string
  utility: string
  role: string
}

export const neutrals: ColourToken[] = [
  { name: 'Ink', token: '--dylo-ink', value: '#1B1714', utility: 'bg-ink', role: 'Primary text, the mark, dark surfaces' },
  { name: 'Graphite', token: '--dylo-graphite', value: '#3A352F', utility: 'bg-graphite', role: 'Body copy, secondary ink' },
  { name: 'Concrete', token: '--dylo-concrete', value: '#8E857A', utility: 'bg-concrete', role: 'Captions, metadata, mono labels' },
  { name: 'Line', token: '--dylo-line', value: '#D8CFBC', utility: 'border-line', role: 'Hairlines on bone' },
  { name: 'Bone', token: '--dylo-bone', value: '#ECE6D8', utility: 'bg-bone', role: 'Primary page surface' },
  { name: 'Paper', token: '--dylo-paper', value: '#F6F3EC', utility: 'bg-paper', role: 'Raised surface, cards, fields' },
]

export const accents: ColourToken[] = [
  { name: 'Oxide', token: '--dylo-oxide', value: '#9A5236', utility: 'bg-oxide', role: 'The one accent — once per view' },
  { name: 'Oxide deep', token: '--dylo-oxide-deep', value: '#7E4029', utility: 'bg-oxide-deep', role: 'Pressed and hover states of the accent' },
]

export const typeScale = [
  { name: 'Display', utility: 'text-display', value: 'clamp(44px, 6vw, 80px)', note: 'One per page. Tracking -0.03em.' },
  { name: 'H1', utility: 'text-h1', value: 'clamp(30px, 4vw, 48px)', note: 'Section opener.' },
  { name: 'H2', utility: 'text-h2', value: '28px', note: 'Subsection.' },
  { name: 'H3', utility: 'text-h3', value: '20px', note: 'Card and panel headings.' },
  { name: 'Body', utility: 'text-[16px]', value: '16px', note: 'Default. Leading 1.6.' },
  { name: 'Small', utility: 'text-[13px]', value: '13px', note: 'Secondary copy.' },
  { name: 'Mono', utility: 'font-mono text-[12px]', value: '12px', note: 'Eyebrows, labels, data. Uppercase, wide tracking.' },
]

export const spaceScale = [
  { token: '--dylo-space-1', value: '4px' },
  { token: '--dylo-space-2', value: '8px' },
  { token: '--dylo-space-3', value: '12px' },
  { token: '--dylo-space-4', value: '16px' },
  { token: '--dylo-space-5', value: '24px' },
  { token: '--dylo-space-6', value: '32px' },
  { token: '--dylo-space-7', value: '48px' },
  { token: '--dylo-space-8', value: '64px' },
  { token: '--dylo-space-9', value: '96px' },
]

export const radii = [
  { name: 'None', utility: 'rounded-none', value: '0px', use: 'Structural blocks, the oxide tick' },
  { name: 'Small', utility: 'rounded-sm', value: '4px', use: 'Buttons, fields, chips' },
  { name: 'Medium', utility: 'rounded-md', value: '8px', use: 'Panels and cards' },
  { name: 'Large', utility: 'rounded-lg', value: '14px', use: 'Rare — large surfaces only' },
  { name: 'Pill', utility: 'rounded-full', value: '999px', use: 'Small status chips only' },
]

export const shadows = [
  { name: 'Block', utility: 'shadow-block', value: '6px 6px 0 rgb(27 23 20 / 0.12)', use: 'The signature. Cards and panels.' },
  { name: 'Block small', utility: 'shadow-block-sm', value: '4px 4px 0 rgb(27 23 20 / 0.18)', use: 'Buttons at rest.' },
  { name: 'Block seated', utility: 'shadow-block-seated', value: '1px 1px 0 rgb(27 23 20 / 0.20)', use: 'Buttons on press.' },
  { name: 'Small', utility: 'shadow-sm', value: '0 1px 2px rgb(27 23 20 / 0.08)', use: 'Barely-raised surfaces.' },
  { name: 'Medium', utility: 'shadow-md', value: '0 6px 18px rgb(27 23 20 / 0.12)', use: 'App icons.' },
  { name: 'Large', utility: 'shadow-lg', value: '0 18px 40px rgb(27 23 20 / 0.20)', use: 'Elevated objects. Rare.' },
]
