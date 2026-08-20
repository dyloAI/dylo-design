export type NavItem = { title: string; href: string }
export type NavSection = { title: string; items: NavItem[] }

export const navigation: NavSection[] = [
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
    items: [
      { title: 'Marketing site', href: '/kits/website' },
      { title: 'Brand book', href: '/brand-book' },
      { title: 'Auth (demo)', href: '/kits/auth' },
      { title: 'App shell (demo)', href: '/kits/app-shell' },
    ],
  },
  {
    title: 'Brand brief',
    items: [{ title: 'Brief de marca', href: '/brief-de-marca' }],
  },
]
