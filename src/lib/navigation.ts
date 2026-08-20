export type NavItem = { title: string; href: string }
export type NavSection = {
  title: string
  items: NavItem[]
  /** Closed until the current page is one of the items, or the heading is opened. */
  collapsible?: boolean
}

export const brandBrief: NavItem = { title: 'Brand brief', href: '/brief-de-marca' }

export const navigation: NavSection[] = [
  {
    title: 'Plans',
    collapsible: true,
    items: [
      { title: 'Working brief', href: '/plans/brand-brief' },
      { title: 'Scale-up plan', href: '/plans/scale-up' },
      { title: 'Action list', href: '/plans/actions' },
    ],
  },
  {
    title: 'Start',
    items: [
      { title: 'Overview', href: '/' },
      { title: 'Install', href: '/install' },
      { title: 'For agents', href: '/agents' },
    ],
  },
  {
    title: 'Foundations',
    items: [
      { title: 'Colour', href: '/foundations/colour' },
      { title: 'Type', href: '/foundations/type' },
      { title: 'Space & shape', href: '/foundations/space' },
      { title: 'Brand marks', href: '/foundations/brand' },
    ],
  },
  {
    title: 'Components',
    collapsible: true,
    items: [
      { title: 'Button', href: '/components/button' },
      { title: 'Input', href: '/components/input' },
      { title: 'Card', href: '/components/card' },
      { title: 'Badge', href: '/components/badge' },
      { title: 'Eyebrow', href: '/components/eyebrow' },
    ],
  },
  {
    title: 'Kits',
    collapsible: true,
    items: [
      { title: 'Marketing site', href: '/kits/website' },
      { title: 'Brand book', href: '/brand-book' },
      { title: 'Auth (demo)', href: '/kits/auth' },
      { title: 'App shell (demo)', href: '/kits/app-shell' },
    ],
  },
]
