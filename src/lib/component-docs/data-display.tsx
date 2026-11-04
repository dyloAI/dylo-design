import { PaginationExample } from '@/components/examples'
import { Avatar, AvatarGroup } from '@/registry/dylo/ui/avatar'
import { Badge } from '@/registry/dylo/ui/badge'
import { Button } from '@/registry/dylo/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/registry/dylo/ui/card'
import { AreaChart, BarChart, Stat } from '@/registry/dylo/ui/chart'
import { Code, CodeBlock, CodeLines, CopyButton } from '@/registry/dylo/ui/code-block'
import { Kbd } from '@/registry/dylo/ui/kbd'
import { SearchField } from '@/registry/dylo/ui/search'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/registry/dylo/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableCellPrimary,
  TableHead,
  TableHeader,
  TableRow,
} from '@/registry/dylo/ui/table'
import { Toolbar, ToolbarItem } from '@/registry/dylo/ui/toolbar'
import { Download } from 'lucide-react'
import type { ComponentDoc } from './types'

const rows = [
  {
    to: 'ana@acme.dev',
    status: 'Delivered',
    tone: 'success' as const,
    subject: 'Your invoice for May',
    sent: '2 minutes ago',
  },
  {
    to: 'luis@acme.dev',
    status: 'Bounced',
    tone: 'error' as const,
    subject: 'Reset your password',
    sent: '18 minutes ago',
  },
  { to: 'marta@acme.dev', status: 'Delayed', tone: 'warning' as const, subject: 'Welcome to Acme', sent: '1 hour ago' },
]

const series = [120, 180, 150, 260, 220, 310, 290, 360, 330, 420, 390, 460, 440, 510].map((value, i) => ({
  label: `May ${i + 1}`,
  value,
}))

const sendSnippet = `import { Mail } from '@acme/mail'

const client = new Mail(process.env.API_KEY)

await client.emails.send({
  from: 'Acme <hello@acme.dev>',
  to: ['ana@acme.dev'],
  subject: 'Your invoice for May',
  html: '<p>Thanks for your order.</p>',
})`

export const dataDisplay: ComponentDoc[] = [
  {
    slug: 'table',
    usage: `import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'`,
    examples: [
      {
        title: 'List table',
        description: 'A rounded header band, 56px rows and a hover fill.',
        layout: 'stack',
        className: 'block',
        render: (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>To</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead className="text-right">Sent</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.to}>
                  <TableCell>
                    <TableCellPrimary>{row.to}</TableCellPrimary>
                  </TableCell>
                  <TableCell>
                    <Badge tone={row.tone}>{row.status}</Badge>
                  </TableCell>
                  <TableCell>{row.subject}</TableCell>
                  <TableCell className="text-right">{row.sent}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ),
      },
      {
        title: 'Compact',
        description: 'The 44px rows of DNS records and comparison tables.',
        layout: 'stack',
        className: 'block',
        render: (
          <Table density="compact">
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>TTL</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono text-xs">MX</TableCell>
                <TableCell className="font-mono text-xs">send</TableCell>
                <TableCell className="font-mono text-xs">feedback-smtp.eu-west-1.example.com</TableCell>
                <TableCell>Auto</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">TXT</TableCell>
                <TableCell className="font-mono text-xs">send</TableCell>
                <TableCell className="font-mono text-xs">v=spf1 include:example.com ~all</TableCell>
                <TableCell>Auto</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        ),
      },
    ],
    props: [
      {
        name: 'density',
        type: "'default' | 'compact'",
        default: "'default'",
        description: 'On Table. Row height 56 or 44px.',
      },
    ],
  },
  {
    slug: 'toolbar',
    usage: `import { Toolbar, ToolbarItem } from '@/components/ui/toolbar'

<Toolbar>
  <SearchField />
  <ToolbarItem><Select>...</Select></ToolbarItem>
</Toolbar>`,
    examples: [
      {
        title: 'Filter bar',
        layout: 'stack',
        className: 'block',
        render: (
          <Toolbar>
            <SearchField placeholder="Search by recipient or subject" aria-label="Search" />
            <ToolbarItem>
              <Select defaultValue="all">
                <SelectTrigger className="w-full" aria-label="Status">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All statuses</SelectItem>
                  <SelectItem value="delivered">Delivered</SelectItem>
                </SelectContent>
              </Select>
            </ToolbarItem>
            <ToolbarItem>
              <Select defaultValue="all">
                <SelectTrigger className="w-full" aria-label="Domain">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All domains</SelectItem>
                  <SelectItem value="acme">acme.dev</SelectItem>
                </SelectContent>
              </Select>
            </ToolbarItem>
            <Button>
              <Download /> Export
            </Button>
          </Toolbar>
        ),
      },
    ],
  },
  {
    slug: 'pagination',
    usage: `import { Pagination } from '@/components/ui/pagination'

<Pagination from={1} to={40} total={1204} nextHref="?page=2" />`,
    examples: [{ title: 'Range and arrows', layout: 'stack', className: 'block', render: <PaginationExample /> }],
    props: [
      { name: 'from, to, total', type: 'number', description: 'The visible range and the total, shown on the left.' },
      { name: 'previousHref, nextHref', type: 'string', description: 'Render the arrows as links.' },
      { name: 'onPrevious, onNext', type: '() => void', description: 'Or render them as buttons.' },
    ],
  },
  {
    slug: 'chart',
    usage: `import { AreaChart, BarChart, Stat } from '@/components/ui/chart'

<AreaChart data={points} className="text-gray-12" />`,
    examples: [
      {
        title: 'Area and stats',
        description: 'The series takes `currentColor`, so set it with a text utility.',
        layout: 'stack',
        className: 'flex-col items-stretch gap-6',
        render: (
          <>
            <div className="flex flex-wrap gap-10">
              <Stat label="Emails sent" value="4,260" delta="+12% on last week" trend="up" />
              <Stat label="Bounce rate" value="0.8%" delta="+0.2 points" trend="down" />
              <Stat label="Open rate" value="41%" delta="No change" trend="flat" />
            </div>
            <AreaChart data={series} className="text-gray-12" showAxis />
          </>
        ),
      },
      {
        title: 'Bars',
        layout: 'stack',
        className: 'block',
        render: <BarChart data={series} className="text-green-9" height={120} />,
      },
    ],
    props: [
      { name: 'data', type: '{ label, value }[]', description: 'The series.' },
      { name: 'height', type: 'number', default: '160', description: 'In pixels.' },
      {
        name: 'showAxis',
        type: 'boolean',
        default: 'false',
        description: 'On AreaChart. First, middle and last label.',
      },
      { name: 'trend', type: "'up' | 'down' | 'flat'", description: 'On Stat. Colours the delta.' },
    ],
  },
  {
    slug: 'card',
    usage: `import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

<Card variant="outline">...</Card>`,
    examples: [
      {
        title: 'Variants',
        description:
          'Outline is the panel in the app. Subtle fills it. Feature is the marketing card with a glow line on top.',
        layout: 'stack',
        className: 'grid gap-4 md:grid-cols-3',
        render: (
          <>
            {(['outline', 'subtle', 'feature'] as const).map((variant) => (
              <Card key={variant} variant={variant}>
                <CardHeader>
                  <CardTitle className="capitalize">{variant}</CardTitle>
                  <CardDescription>A short line about what the card holds.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-default">Content sits here with 20px of padding.</p>
                </CardContent>
                <CardFooter>
                  <Button size="xs">Manage</Button>
                </CardFooter>
              </Card>
            ))}
          </>
        ),
      },
    ],
    props: [
      {
        name: 'variant',
        type: "'outline' | 'subtle' | 'feature'",
        default: "'outline'",
        description: 'Hairline, filled, or the marketing glow.',
      },
    ],
  },
  {
    slug: 'avatar',
    usage: `import { Avatar, AvatarGroup } from '@/components/ui/avatar'

<Avatar fallback="AM" />`,
    examples: [
      {
        title: 'People and teams',
        render: (
          <>
            <Avatar size="lg" fallback="AM" />
            <Avatar size="md" fallback="LR" tone="blue" />
            <Avatar size="sm" fallback="MS" tone="violet" />
            <Avatar shape="square" size="md" fallback="A" tone="orange" />
            <AvatarGroup>
              <Avatar fallback="AM" tone="green" />
              <Avatar fallback="LR" tone="blue" />
              <Avatar fallback="MS" tone="violet" />
            </AvatarGroup>
          </>
        ),
      },
    ],
    props: [
      { name: 'shape', type: "'circle' | 'square'", default: "'circle'", description: 'A person, or a team.' },
      { name: 'size', type: "'xs' | 'sm' | 'md' | 'lg'", default: "'sm'", description: '20, 24, 32 or 40px.' },
      {
        name: 'tone',
        type: "'gray' | 'blue' | 'green' | 'violet' | 'orange'",
        default: "'gray'",
        description: 'The fallback tile.',
      },
      {
        name: 'src, fallback',
        type: 'string, ReactNode',
        description: 'The image, and the initials shown until it loads.',
      },
    ],
  },
  {
    slug: 'code-block',
    usage: `import { CodeBlock } from '@/components/ui/code-block'

<CodeBlock samples={[{ label: 'Node.js', code }]} />`,
    examples: [
      {
        title: 'Framed sample with tabs',
        layout: 'stack',
        className: 'block',
        render: (
          <CodeBlock
            samples={[
              { label: 'Node.js', code: sendSnippet },
              {
                label: 'cURL',
                code: `curl -X POST https://api.example.com/emails \\\n  -H 'Authorization: Bearer re_123456789' \\\n  -d '{ "to": "ana@acme.dev" }'`,
              },
            ]}
          />
        ),
      },
      {
        title: 'Inline, lines and copy',
        className: 'flex-col items-stretch gap-4',
        render: (
          <>
            <p className="text-sm text-default">
              Set <Code>API_KEY</Code> in your environment.
            </p>
            <div className="rounded-xl border border-gray-a3 bg-subtle p-3">
              <CodeLines code={`API_KEY=re_123456789\nFROM=hello@acme.dev`} />
            </div>
            <CopyButton value="re_123456789" />
          </>
        ),
      },
    ],
    props: [
      { name: 'samples', type: '{ label, code, icon? }[]', description: 'One tab per sample.' },
      { name: 'height', type: 'string', description: "A fixed body height class, such as 'h-[500px]'." },
      { name: 'footer', type: 'ReactNode', description: 'A strip under the code.' },
    ],
    notes: ['Syntax colours come from the theme tokens, so a sample reads the same in both themes.'],
  },
  {
    slug: 'kbd',
    usage: `import { Kbd } from '@/components/ui/kbd'

<Kbd>⌘</Kbd><Kbd>K</Kbd>`,
    examples: [
      {
        title: 'Shortcuts',
        render: (
          <>
            <span className="inline-flex gap-1">
              <Kbd>⌘</Kbd>
              <Kbd>K</Kbd>
            </span>
            <Kbd>/</Kbd>
            <Kbd>Esc</Kbd>
          </>
        ),
      },
    ],
    notes: ['Hidden on touch devices, where there is no keyboard to press.'],
  },
]
