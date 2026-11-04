/**
 * Placeholder rows for the dashboard kit. Every address and domain is
 * invented; replace them with your own data.
 */

export type EmailStatus = 'delivered' | 'bounced' | 'delayed' | 'opened' | 'clicked' | 'queued' | 'sent' | 'complained'

export type EmailRow = {
  id: string
  to: string
  extra?: number
  status: EmailStatus
  subject: string
  sent: string
}

export const emails: EmailRow[] = [
  {
    id: 'e1',
    to: 'maria@northwind.dev',
    status: 'delivered',
    subject: 'Your quote from Northwind is ready',
    sent: '14 min ago',
  },
  {
    id: 'e2',
    to: 'noreply@acme.dev',
    status: 'delivered',
    subject: 'New request for a quote',
    sent: '14 min ago',
    extra: 3,
  },
  { id: 'e3', to: 'jordi@lumen.studio', status: 'opened', subject: 'Welcome to Lumen', sent: '2 h ago' },
  { id: 'e4', to: 'ops@acme.dev', status: 'clicked', subject: 'Weekly report: 42 orders', sent: '5 h ago', extra: 2 },
  { id: 'e5', to: 'ana@harbour.co', status: 'delayed', subject: 'Reset your password', sent: '9 h ago' },
  {
    id: 'e6',
    to: 'sam@fieldnotes.app',
    status: 'delivered',
    subject: 'Trip complete: score 7.7 / 10',
    sent: '18 h ago',
  },
  {
    id: 'e7',
    to: 'tom@oldmail.example',
    status: 'bounced',
    subject: 'Trip complete: score 7.7 / 10',
    sent: '18 h ago',
  },
  { id: 'e8', to: 'billing@acme.dev', status: 'queued', subject: 'Invoice INV-0042', sent: '1 d ago' },
  { id: 'e9', to: 'lee@kettle.io', status: 'complained', subject: 'October newsletter', sent: '2 d ago' },
  { id: 'e10', to: 'hello@northwind.dev', status: 'sent', subject: 'Your order has shipped', sent: '3 d ago' },
]

export type EmailEvent = { status: EmailStatus; at: string; detail?: string }

export const emailEvents: EmailEvent[] = [
  { status: 'queued', at: 'Nov 4, 08:12:03' },
  { status: 'sent', at: 'Nov 4, 08:12:04', detail: 'Accepted by the receiving server' },
  { status: 'delivered', at: 'Nov 4, 08:12:06', detail: 'Delivered to inbox' },
  { status: 'opened', at: 'Nov 4, 08:40:51' },
  { status: 'clicked', at: 'Nov 4, 08:41:10', detail: 'https://northwind.dev/quote/q-1042' },
]

export type DomainStatus = 'verified' | 'pending' | 'failed' | 'not_started'

export type DomainRow = { id: string; name: string; status: DomainStatus; region: string; created: string }

export const domains: DomainRow[] = [
  { id: 'd1', name: 'acme.dev', status: 'verified', region: 'eu-west-1', created: 'Sep 12, 2026' },
  { id: 'd2', name: 'mail.northwind.dev', status: 'verified', region: 'us-east-1', created: 'Aug 2, 2026' },
  { id: 'd3', name: 'lumen.studio', status: 'pending', region: 'eu-west-1', created: '2 h ago' },
  { id: 'd4', name: 'old.example', status: 'failed', region: 'sa-east-1', created: 'Jun 30, 2026' },
]

export type DnsRecord = {
  type: 'MX' | 'TXT' | 'CNAME'
  name: string
  value: string
  priority?: number
  ttl: string
  status: DomainStatus
}

export const dnsRecords: { group: string; description: string; records: DnsRecord[] }[] = [
  {
    group: 'DKIM',
    description: 'Signs every message so receivers can check it came from you.',
    records: [
      {
        type: 'TXT',
        name: 'dylo._domainkey',
        value: 'p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC5...',
        ttl: 'Auto',
        status: 'verified',
      },
    ],
  },
  {
    group: 'SPF',
    description: 'Lists the servers allowed to send for this domain.',
    records: [
      {
        type: 'MX',
        name: 'send',
        value: 'feedback-smtp.eu-west-1.example.com',
        priority: 10,
        ttl: 'Auto',
        status: 'verified',
      },
      { type: 'TXT', name: 'send', value: 'v=spf1 include:spf.example.com ~all', ttl: 'Auto', status: 'pending' },
    ],
  },
  {
    group: 'DMARC',
    description: 'Tells receivers what to do with mail that fails the checks.',
    records: [{ type: 'TXT', name: '_dmarc', value: 'v=DMARC1; p=none;', ttl: 'Auto', status: 'not_started' }],
  },
]

export type ApiKeyRow = {
  id: string
  name: string
  token: string
  permission: 'Full access' | 'Sending access'
  lastUsed: string
  created: string
}

export const apiKeys: ApiKeyRow[] = [
  {
    id: 'k1',
    name: 'Production',
    token: 're_aB12...',
    permission: 'Full access',
    lastUsed: '3 min ago',
    created: 'Sep 12, 2026',
  },
  {
    id: 'k2',
    name: 'Staging',
    token: 're_cD34...',
    permission: 'Sending access',
    lastUsed: '2 d ago',
    created: 'Sep 30, 2026',
  },
  {
    id: 'k3',
    name: 'Local development',
    token: 're_eF56...',
    permission: 'Sending access',
    lastUsed: 'Never',
    created: 'Oct 21, 2026',
  },
]

export type WebhookRow = { id: string; url: string; events: string[]; status: 'enabled' | 'disabled'; created: string }

export const webhooks: WebhookRow[] = [
  {
    id: 'w1',
    url: 'https://api.acme.dev/webhooks/email',
    events: ['email.delivered', 'email.bounced', 'email.complained'],
    status: 'enabled',
    created: 'Sep 14, 2026',
  },
  {
    id: 'w2',
    url: 'https://hooks.northwind.dev/mail',
    events: ['email.opened', 'email.clicked'],
    status: 'disabled',
    created: 'Oct 2, 2026',
  },
]

export const webhookEvents = [
  'email.sent',
  'email.delivered',
  'email.delivery_delayed',
  'email.bounced',
  'email.complained',
  'email.opened',
  'email.clicked',
  'contact.created',
  'contact.updated',
  'domain.updated',
]

export type LogRow = {
  id: string
  method: 'POST' | 'GET' | 'PATCH' | 'DELETE'
  endpoint: string
  status: number
  userAgent: string
  at: string
}

export const logs: LogRow[] = [
  { id: 'l1', method: 'POST', endpoint: '/emails', status: 200, userAgent: 'dylo-node:4.2.0', at: '14 min ago' },
  { id: 'l2', method: 'POST', endpoint: '/emails/batch', status: 200, userAgent: 'dylo-node:4.2.0', at: '15 min ago' },
  { id: 'l3', method: 'GET', endpoint: '/domains', status: 200, userAgent: 'curl/8.7.1', at: '1 h ago' },
  { id: 'l4', method: 'POST', endpoint: '/emails', status: 422, userAgent: 'dylo-python:2.4.0', at: '3 h ago' },
  { id: 'l5', method: 'PATCH', endpoint: '/contacts/c_19a', status: 200, userAgent: 'dylo-node:4.2.0', at: '5 h ago' },
  { id: 'l6', method: 'DELETE', endpoint: '/api-keys/k_04', status: 404, userAgent: 'curl/8.7.1', at: '1 d ago' },
  { id: 'l7', method: 'POST', endpoint: '/emails', status: 429, userAgent: 'dylo-node:4.2.0', at: '1 d ago' },
]

export type ContactRow = {
  id: string
  email: string
  name: string
  status: 'subscribed' | 'unsubscribed'
  added: string
}

export const contacts: ContactRow[] = [
  { id: 'c1', email: 'maria@northwind.dev', name: 'Maria Puig', status: 'subscribed', added: 'Oct 30, 2026' },
  { id: 'c2', email: 'jordi@lumen.studio', name: 'Jordi Vidal', status: 'subscribed', added: 'Oct 29, 2026' },
  { id: 'c3', email: 'ana@harbour.co', name: 'Ana Ruiz', status: 'unsubscribed', added: 'Oct 12, 2026' },
  { id: 'c4', email: 'sam@fieldnotes.app', name: 'Sam Okafor', status: 'subscribed', added: 'Sep 28, 2026' },
  { id: 'c5', email: 'lee@kettle.io', name: 'Lee Park', status: 'subscribed', added: 'Sep 3, 2026' },
]

export type BroadcastRow = {
  id: string
  name: string
  status: 'draft' | 'scheduled' | 'sent'
  audience: string
  sent?: string
  openRate?: string
}

export const broadcasts: BroadcastRow[] = [
  { id: 'b1', name: 'November product update', status: 'draft', audience: 'All contacts' },
  { id: 'b2', name: 'Black Friday early access', status: 'scheduled', audience: 'Customers', sent: 'Nov 27, 09:00' },
  {
    id: 'b3',
    name: 'October newsletter',
    status: 'sent',
    audience: 'All contacts',
    sent: 'Oct 30, 2026',
    openRate: '48.2%',
  },
  {
    id: 'b4',
    name: 'Webinar reminder',
    status: 'sent',
    audience: 'Registrants',
    sent: 'Oct 14, 2026',
    openRate: '61.0%',
  },
]

export type TemplateRow = { id: string; name: string; updated: string; tag: string }

export const templates: TemplateRow[] = [
  { id: 't1', name: 'Welcome', updated: '2 d ago', tag: 'Onboarding' },
  { id: 't2', name: 'Password reset', updated: '1 w ago', tag: 'Account' },
  { id: 't3', name: 'Order receipt', updated: '3 w ago', tag: 'Billing' },
  { id: 't4', name: 'Quote ready', updated: '1 mo ago', tag: 'Sales' },
  { id: 't5', name: 'Weekly digest', updated: '1 mo ago', tag: 'Product' },
  { id: 't6', name: 'Magic link', updated: '2 mo ago', tag: 'Account' },
]

export const sentSeries = Array.from({ length: 30 }, (_, i) => ({
  label: `Oct ${i + 6 > 31 ? i - 25 : i + 6}`,
  value: Math.round(900 + Math.sin(i / 3) * 260 + i * 22 + (i % 5) * 40),
}))

export const deliverabilitySeries = Array.from({ length: 30 }, (_, i) => ({
  label: `Oct ${i + 6 > 31 ? i - 25 : i + 6}`,
  value: Math.round(96 + Math.cos(i / 4) * 2),
}))
