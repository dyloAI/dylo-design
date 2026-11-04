'use client'

import {
  ApiKeysPage,
  AppShell,
  AudiencePage,
  AutomationEditor,
  AutomationsPage,
  BroadcastEditor,
  BroadcastReport,
  BroadcastsPage,
  DomainDetail,
  DomainsPage,
  EmailDetail,
  EmailsEmpty,
  EmailsPage,
  InboxesEmpty,
  InboxesPage,
  LogsPage,
  MetricsPage,
  PageHeader,
  ReceivingEmpty,
  SettingsPage,
  TemplatesPage,
  WebhookDetail,
  WebhooksPage,
  type DashboardSection,
} from '@/registry/dylo/blocks/dashboard'
import { domains, emails, webhooks } from '@/registry/dylo/blocks/dashboard/data'
import { KitBar } from './kit-bar'

const base = '/kits/dashboard'
const href = (...parts: string[]) => [base, ...parts].join('/')

const settingsTabs = ['usage', 'billing', 'team', 'smtp', 'integrations'] as const
type SettingsTab = (typeof settingsTabs)[number]

function resolve(slug: string[]): { active: DashboardSection; page: React.ReactNode } {
  const [section = 'emails', id, sub] = slug
  switch (section) {
    case 'emails':
      if (id === 'empty') return { active: 'emails', page: <EmailsEmptyPage /> }
      if (id === 'receiving') return { active: 'emails', page: <ReceivingEmptyPage /> }
      if (id)
        return {
          active: 'emails',
          page: <EmailDetail email={emails.find((e) => e.id === id)} backHref={href('emails')} />,
        }
      return { active: 'emails', page: <EmailsPage detailHref={(e) => href('emails', e)} /> }
    case 'templates':
      return { active: 'templates', page: <TemplatesPage /> }
    case 'audience':
      return { active: 'audience', page: <AudiencePage /> }
    case 'inboxes':
      return { active: 'inboxes', page: id === 'empty' ? <InboxesEmpty /> : <InboxesPage /> }
    case 'broadcasts':
      if (id && sub === 'report') return { active: 'broadcasts', page: <BroadcastReport /> }
      if (id) return { active: 'broadcasts', page: <BroadcastEditor backHref={href('broadcasts')} /> }
      return { active: 'broadcasts', page: <BroadcastsPage editHref={(b) => href('broadcasts', b)} /> }
    case 'automations':
      if (id) return { active: 'automations', page: <AutomationEditor backHref={href('automations')} /> }
      return { active: 'automations', page: <AutomationsPage editHref={(a) => href('automations', a)} /> }
    case 'metrics':
      return { active: 'metrics', page: <MetricsPage /> }
    case 'domains':
      if (id)
        return {
          active: 'domains',
          page: <DomainDetail domain={domains.find((d) => d.id === id)} backHref={href('domains')} />,
        }
      return { active: 'domains', page: <DomainsPage detailHref={(d) => href('domains', d)} /> }
    case 'logs':
      return { active: 'logs', page: <LogsPage /> }
    case 'api-keys':
      return { active: 'api-keys', page: <ApiKeysPage /> }
    case 'webhooks':
      if (id)
        return {
          active: 'webhooks',
          page: <WebhookDetail webhook={webhooks.find((w) => w.id === id)} backHref={href('webhooks')} />,
        }
      return { active: 'webhooks', page: <WebhooksPage detailHref={(w) => href('webhooks', w)} /> }
    case 'settings': {
      const tab = (settingsTabs as readonly string[]).includes(id ?? '') ? (id as SettingsTab) : 'usage'
      return { active: 'settings', page: <SettingsPage key={tab} defaultTab={tab} /> }
    }
    default:
      return { active: 'emails', page: <EmailsPage detailHref={(e) => href('emails', e)} /> }
  }
}

function EmailsEmptyPage() {
  return (
    <>
      <PageHeader title="Emails" />
      <EmailsEmpty />
    </>
  )
}

function ReceivingEmptyPage() {
  return (
    <>
      <PageHeader title="Emails" description="Receiving" />
      <ReceivingEmpty />
    </>
  )
}

export function DashboardKit({ slug }: { slug: string[] }) {
  const { active, page } = resolve(slug)
  return (
    <>
      <AppShell active={active} hrefFor={(id) => href(id)}>
        {page}
      </AppShell>
      <KitBar />
    </>
  )
}
