/** A marketing kit path. */
export const m = (path = '') => `/kits/marketing${path ? `/${path}` : ''}`

export type KitPage = { path: string; title: string; group: string; note?: string }

/** Every full-page dashboard route, under /kits/dashboard/. */
export const dashboardPages: KitPage[] = [
  { path: 'emails', title: 'Emails', group: 'Emails' },
  { path: 'emails/e1', title: 'Email detail', group: 'Emails' },
  { path: 'emails/empty', title: 'Emails, empty', group: 'Emails' },
  { path: 'emails/receiving', title: 'Receiving, empty', group: 'Emails' },
  { path: 'templates', title: 'Templates', group: 'Emails' },
  { path: 'audience', title: 'Audience', group: 'Emails', note: 'Contacts, segments, properties and topics tabs' },
  { path: 'inboxes', title: 'Inboxes', group: 'Messaging' },
  { path: 'inboxes/empty', title: 'Inboxes, empty', group: 'Messaging' },
  { path: 'broadcasts', title: 'Broadcasts', group: 'Messaging' },
  { path: 'broadcasts/b1', title: 'Broadcast editor', group: 'Messaging' },
  { path: 'broadcasts/b3/report', title: 'Broadcast report', group: 'Messaging' },
  { path: 'automations', title: 'Automations', group: 'Messaging' },
  { path: 'automations/a1', title: 'Automation editor', group: 'Messaging' },
  { path: 'metrics', title: 'Metrics', group: 'Platform' },
  { path: 'domains', title: 'Domains', group: 'Platform' },
  { path: 'domains/d3', title: 'Domain detail', group: 'Platform', note: 'DNS records, pending verification' },
  { path: 'logs', title: 'Logs', group: 'Platform', note: 'Click a row for the log sheet' },
  { path: 'api-keys', title: 'API keys', group: 'Platform', note: 'Create and delete dialogs' },
  { path: 'webhooks', title: 'Webhooks', group: 'Platform' },
  { path: 'webhooks/w1', title: 'Webhook detail', group: 'Platform' },
  { path: 'settings', title: 'Settings, usage', group: 'Settings' },
  { path: 'settings/billing', title: 'Settings, billing', group: 'Settings' },
  { path: 'settings/team', title: 'Settings, team', group: 'Settings' },
  { path: 'settings/smtp', title: 'Settings, SMTP', group: 'Settings' },
  { path: 'settings/integrations', title: 'Settings, integrations', group: 'Settings' },
]

/** Every marketing route, under /kits/marketing/. The empty path is the home page. */
export const marketingPages: KitPage[] = [
  { path: '', title: 'Home', group: 'Site' },
  { path: 'pricing', title: 'Pricing', group: 'Site' },
  { path: 'features/configurator', title: 'Configurator', group: 'Products' },
  { path: 'features/data', title: 'Data extraction', group: 'Products' },
  { path: 'features/operations', title: 'Operations platform', group: 'Products' },
  { path: 'customers', title: 'Customers', group: 'Company' },
  { path: 'customers/insulation', title: 'Customer story', group: 'Company' },
  { path: 'about', title: 'About', group: 'Company' },
  { path: 'contact', title: 'Contact', group: 'Company' },
  { path: 'blog', title: 'Blog', group: 'Writing' },
  { path: 'blog/price-first', title: 'Blog post', group: 'Writing' },
  { path: 'changelog', title: 'Changelog', group: 'Writing' },
  { path: 'docs', title: 'Docs', group: 'Writing', note: 'The docs shell with sidebar and table of contents' },
  { path: 'legal', title: 'Legal page', group: 'Writing' },
  {
    path: 'blocks',
    title: 'Block gallery',
    group: 'Reference',
    note: 'Pricing slider, code showcase and other blocks with example data',
  },
]

export const authScreens: KitPage[] = [
  { path: 'login', title: 'Log in', group: 'Auth' },
  { path: 'login-error', title: 'Log in, with an error', group: 'Auth' },
  { path: 'signup', title: 'Sign up', group: 'Auth' },
  { path: 'forgot', title: 'Forgot password', group: 'Auth' },
  { path: 'check-email', title: 'Check your email', group: 'Auth' },
]
