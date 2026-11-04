'use client'

import { Badge } from '@/registry/dylo/ui/badge'
import { Button } from '@/registry/dylo/ui/button'
import { Card } from '@/registry/dylo/ui/card'
import { EmptyState } from '@/registry/dylo/ui/empty-state'
import { SearchField } from '@/registry/dylo/ui/search'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/registry/dylo/ui/tabs'
import { Toolbar } from '@/registry/dylo/ui/toolbar'
import { Copy, LayoutTemplate, Pencil, Plus, Trash2 } from 'lucide-react'
import { templates as sampleTemplates, type TemplateRow } from './data'
import { RowActions } from './parts'
import { PageHeader } from './shell'

/** A thumbnail of an email: header bar, heading, lines and a button. */
function TemplateThumbnail() {
  return (
    <div className="flex aspect-[4/3] flex-col items-center justify-center bg-subtle p-6">
      <div className="flex w-full max-w-40 flex-col gap-2 rounded-lg border border-gray-a3 bg-background p-3 shadow-popover">
        <span className="h-2 w-8 rounded-sm bg-gray-a6" />
        <span className="mt-1 h-2.5 w-3/4 rounded-sm bg-gray-a8" />
        <span className="h-1.5 w-full rounded-sm bg-gray-a4" />
        <span className="h-1.5 w-full rounded-sm bg-gray-a4" />
        <span className="h-1.5 w-2/3 rounded-sm bg-gray-a4" />
        <span className="mt-1 h-3 w-12 rounded-sm bg-accent" />
      </div>
    </div>
  )
}

export function TemplateCard({ template, href = '#' }: { template: TemplateRow; href?: string }) {
  return (
    <Card className="group overflow-hidden transition-colors hover:border-gray-a5">
      <a href={href} className="ring-focus outline-hidden focus-visible:ring-2">
        <TemplateThumbnail />
      </a>
      <div className="flex items-center justify-between gap-2 border-t border-gray-a3 px-4 py-3">
        <div className="flex min-w-0 flex-col">
          <span className="truncate text-sm font-medium text-emphasis">{template.name}</span>
          <span className="text-xs text-default">Edited {template.updated}</span>
        </div>
        <div className="flex items-center gap-1">
          <Badge>{template.tag}</Badge>
          <RowActions
            actions={[
              { label: 'Edit', icon: <Pencil /> },
              { label: 'Duplicate', icon: <Copy /> },
              'separator',
              { label: 'Delete', icon: <Trash2 />, destructive: true },
            ]}
          />
        </div>
      </div>
    </Card>
  )
}

/** Templates: your saved emails, and a gallery to start from. */
export function TemplatesPage({ rows = sampleTemplates }: { rows?: TemplateRow[] }) {
  return (
    <Tabs defaultValue="yours">
      <PageHeader
        title="Templates"
        actions={
          <Button variant="primary">
            <Plus />
            Create template
          </Button>
        }
      />
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <TabsList>
          <TabsTrigger value="yours">Your templates</TabsTrigger>
          <TabsTrigger value="gallery">Gallery</TabsTrigger>
        </TabsList>
        <Toolbar className="w-full sm:w-72">
          <SearchField placeholder="Search templates..." />
        </Toolbar>
      </div>
      <TabsContent value="yours">
        {rows.length ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rows.map((t) => (
              <TemplateCard key={t.id} template={t} />
            ))}
          </div>
        ) : (
          <EmptyState
            icon={<LayoutTemplate />}
            title="No templates yet"
            description="Save an email as a template to reuse it from the API or in a broadcast."
            action={<Button variant="primary">Create template</Button>}
          />
        )}
      </TabsContent>
      <TabsContent value="gallery">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {['Receipt', 'Magic link', 'Invite', 'Weekly digest', 'Welcome', 'Feedback request'].map((name, i) => (
            <TemplateCard key={name} template={{ id: `g${i}`, name, updated: 'by dylo', tag: 'Starter' }} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}
