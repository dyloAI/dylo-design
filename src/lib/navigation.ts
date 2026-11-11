export type NavItem = { title: string; href: string }
export type NavSection = {
  title: string
  items: NavItem[]
  /** Closed until the current page is one of the items, or the heading is opened. */
  collapsible?: boolean
}

/** Every registry primitive, grouped as the sidebar and the overview show them. */
export const componentGroups: { title: string; slugs: string[] }[] = [
  { title: 'Actions', slugs: ['button', 'icon-button', 'cta-button', 'button-group', 'link'] },
  {
    title: 'Forms',
    slugs: [
      'input',
      'textarea',
      'field',
      'select',
      'combobox',
      'checkbox',
      'radio-group',
      'switch',
      'slider',
      'search',
      'date-range-picker',
    ],
  },
  {
    title: 'Overlays',
    slugs: ['dialog', 'alert-dialog', 'sheet', 'popover', 'dropdown-menu', 'context-menu', 'tooltip', 'toast'],
  },
  { title: 'Feedback', slugs: ['badge', 'callout', 'progress', 'skeleton', 'empty-state'] },
  { title: 'Data display', slugs: ['table', 'toolbar', 'pagination', 'chart', 'card', 'avatar', 'code-block', 'kbd'] },
  { title: 'Navigation and layout', slugs: ['tabs', 'breadcrumb', 'accordion', 'separator', 'logo'] },
]

export const componentTitles: Record<string, string> = {
  'alert-dialog': 'Alert dialog',
  'button-group': 'Button group',
  'code-block': 'Code block',
  'context-menu': 'Context menu',
  'cta-button': 'CTA button',
  'date-range-picker': 'Date range picker',
  'dropdown-menu': 'Dropdown menu',
  'empty-state': 'Empty state',
  'icon-button': 'Icon button',
  'radio-group': 'Radio group',
  field: 'Field and label',
  link: 'Text link',
}

export function componentTitle(slug: string) {
  return componentTitles[slug] ?? slug.charAt(0).toUpperCase() + slug.slice(1)
}

export const navigation: NavSection[] = [
  {
    title: 'Start',
    items: [
      { title: 'Overview', href: '/' },
      { title: 'Install', href: '/install' },
      { title: 'For agents', href: '/agents' },
      { title: 'All components', href: '/components' },
    ],
  },
  {
    title: 'Foundations',
    items: [
      { title: 'Colour', href: '/foundations/colour' },
      { title: 'Type', href: '/foundations/type' },
      { title: 'Space, shape and motion', href: '/foundations/space' },
      { title: 'Brand marks', href: '/foundations/brand' },
    ],
  },
  ...componentGroups.map((group) => ({
    title: group.title,
    collapsible: true,
    items: group.slugs.map((slug) => ({ title: componentTitle(slug), href: `/components/${slug}` })),
  })),
  {
    title: 'Kits',
    items: [
      { title: 'All kit pages', href: '/kits' },
      { title: 'Dashboard', href: '/kits/dashboard/emails' },
      { title: 'Marketing site', href: '/kits/marketing' },
      { title: 'Auth screens', href: '/kits/auth/login' },
    ],
  },
]
