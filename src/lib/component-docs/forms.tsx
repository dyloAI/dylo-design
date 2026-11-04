import { SliderExample } from '@/components/examples'
import { Checkbox } from '@/registry/dylo/ui/checkbox'
import { Combobox } from '@/registry/dylo/ui/combobox'
import { DateRangePicker } from '@/registry/dylo/ui/date-range-picker'
import { Field, FieldError, FieldHint, FieldRow, Label } from '@/registry/dylo/ui/field'
import { IconButton } from '@/registry/dylo/ui/icon-button'
import { Input } from '@/registry/dylo/ui/input'
import { TextLink } from '@/registry/dylo/ui/link'
import { RadioCard, RadioGroup, RadioGroupItem } from '@/registry/dylo/ui/radio-group'
import { SearchField, SearchTrigger } from '@/registry/dylo/ui/search'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/registry/dylo/ui/select'
import { Slider } from '@/registry/dylo/ui/slider'
import { Switch } from '@/registry/dylo/ui/switch'
import { Textarea } from '@/registry/dylo/ui/textarea'
import { Copy, Globe, Mail } from 'lucide-react'
import type { ComponentDoc } from './types'

const domains = [
  { value: 'acme.dev', label: 'acme.dev', hint: 'eu-west-1' },
  { value: 'mail.acme.dev', label: 'mail.acme.dev', hint: 'us-east-1' },
  { value: 'updates.acme.dev', label: 'updates.acme.dev', hint: 'eu-west-1' },
  { value: 'billing.acme.dev', label: 'billing.acme.dev', hint: 'sa-east-1' },
]

export const forms: ComponentDoc[] = [
  {
    slug: 'input',
    usage: `import { Input } from '@/components/ui/input'

<Input placeholder="Search..." leading={<Search />} />`,
    examples: [
      {
        title: 'Default',
        description: 'The 32px dashboard field. Leading and trailing slots take an icon or a small control.',
        className: 'flex-col items-stretch',
        render: (
          <>
            <Input placeholder="you@company.com" />
            <Input placeholder="acme.dev" leading={<Globe />} />
            <Input
              readOnly
              value="re_123456789"
              trailing={
                <IconButton size="xs" aria-label="Copy">
                  <Copy />
                </IconButton>
              }
            />
          </>
        ),
      },
      {
        title: 'States',
        className: 'flex-col items-stretch',
        render: (
          <>
            <Input invalid defaultValue="not-an-email" aria-label="Invalid email" />
            <Input disabled placeholder="Disabled" aria-label="Disabled" />
          </>
        ),
      },
      {
        title: 'Glass',
        description: 'The larger frosted field of the auth screens.',
        className: 'flex-col items-stretch',
        render: <Input variant="glass" size="lg" placeholder="you@company.com" leading={<Mail />} aria-label="Email" />,
      },
    ],
    props: [
      {
        name: 'variant',
        type: "'default' | 'glass'",
        default: "'default'",
        description: 'Dashboard field, or the frosted auth field.',
      },
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'sm'", description: 'Height 32, 40 or 48px.' },
      { name: 'invalid', type: 'boolean', default: 'false', description: 'Error tone and `aria-invalid`.' },
      { name: 'leading', type: 'ReactNode', description: 'An icon inside the field, on the left.' },
      { name: 'trailing', type: 'ReactNode', description: 'A control inside the field, on the right.' },
    ],
  },
  {
    slug: 'textarea',
    usage: `import { Textarea } from '@/components/ui/textarea'

<Textarea placeholder="What should we know?" />`,
    examples: [
      {
        title: 'Default and invalid',
        className: 'flex-col items-stretch',
        render: (
          <>
            <Textarea placeholder="What should we know?" aria-label="Message" />
            <Textarea invalid defaultValue="Too short" aria-label="Invalid message" />
          </>
        ),
      },
    ],
    props: [{ name: 'invalid', type: 'boolean', default: 'false', description: 'Error tone and `aria-invalid`.' }],
  },
  {
    slug: 'field',
    usage: `import { Field, FieldHint, Label } from '@/components/ui/field'

<Field>
  <Label htmlFor="name">Name</Label>
  <Input id="name" />
  <FieldHint>Shown in the sidebar.</FieldHint>
</Field>`,
    examples: [
      {
        title: 'Label, hint and error',
        className: 'flex-col items-stretch gap-6',
        render: (theme) => (
          <>
            <Field>
              <Label htmlFor={`${theme}-team`}>Team name</Label>
              <Input id={`${theme}-team`} defaultValue="Acme" />
              <FieldHint>Shown in the sidebar and on invoices.</FieldHint>
            </Field>
            <Field>
              <FieldRow>
                <Label htmlFor={`${theme}-password`}>Password</Label>
                <TextLink variant="muted" href="#" className="text-sm">
                  Forgot your password?
                </TextLink>
              </FieldRow>
              <Input id={`${theme}-password`} type="password" invalid defaultValue="short" />
              <FieldError>Use at least 12 characters.</FieldError>
            </Field>
          </>
        ),
      },
    ],
  },
  {
    slug: 'select',
    usage: `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

<Select defaultValue="all">
  <SelectTrigger><SelectValue /></SelectTrigger>
  <SelectContent>
    <SelectItem value="all">All statuses</SelectItem>
    <SelectItem value="delivered">Delivered</SelectItem>
  </SelectContent>
</Select>`,
    examples: [
      {
        title: 'Filter',
        render: (
          <>
            <Select defaultValue="all">
              <SelectTrigger className="w-44" aria-label="Status">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All statuses</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="bounced">Bounced</SelectItem>
                <SelectItem value="complained">Complained</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="eu-west-1">
              <SelectTrigger size="md" className="w-56" aria-label="Region">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Europe</SelectLabel>
                  <SelectItem value="eu-west-1">Ireland (eu-west-1)</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Americas</SelectLabel>
                  <SelectItem value="us-east-1">North Virginia (us-east-1)</SelectItem>
                  <SelectItem value="sa-east-1">São Paulo (sa-east-1)</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </>
        ),
      },
    ],
    props: [
      { name: 'size', type: "'sm' | 'md'", default: "'sm'", description: 'On SelectTrigger. Height 32 or 40px.' },
    ],
    notes: ['The list opens in a portal, so it follows the site theme rather than the preview pane.'],
  },
  {
    slug: 'combobox',
    usage: `import { Combobox } from '@/components/ui/combobox'

<Combobox options={domains} placeholder="Select a domain" />`,
    examples: [
      {
        title: 'Searchable choice',
        render: (
          <Combobox
            options={domains}
            placeholder="Select a domain"
            searchPlaceholder="Search domains..."
            className="w-64"
          />
        ),
      },
    ],
    props: [
      {
        name: 'options',
        type: '{ value, label, hint? }[]',
        description: 'The list. `hint` renders in mono on the right.',
      },
      { name: 'value', type: 'string', description: 'Controlled value. Leave it out to let the component hold it.' },
      { name: 'onValueChange', type: '(value: string) => void', description: 'Called with the picked value.' },
      {
        name: 'empty',
        type: 'ReactNode',
        default: "'No results.'",
        description: 'Shown when the search matches nothing.',
      },
    ],
  },
  {
    slug: 'checkbox',
    usage: `import { Checkbox } from '@/components/ui/checkbox'

<Checkbox id="opened" />`,
    examples: [
      {
        title: 'States',
        className: 'flex-col items-start gap-3',
        render: (theme) => (
          <>
            {[
              { id: 'delivered', label: 'email.delivered', checked: true },
              { id: 'opened', label: 'email.opened', checked: false },
              { id: 'all', label: 'Some events', checked: 'indeterminate' as const },
            ].map((item) => (
              <div key={item.id} className="flex items-center gap-2">
                <Checkbox id={`${theme}-${item.id}`} defaultChecked={item.checked} />
                <Label htmlFor={`${theme}-${item.id}`} className="font-mono text-[0.8125rem]">
                  {item.label}
                </Label>
              </div>
            ))}
            <div className="flex items-center gap-2">
              <Checkbox id={`${theme}-disabled`} disabled />
              <Label htmlFor={`${theme}-disabled`}>Disabled</Label>
            </div>
          </>
        ),
      },
    ],
  },
  {
    slug: 'radio-group',
    usage: `import { RadioCard, RadioGroup } from '@/components/ui/radio-group'

<RadioGroup defaultValue="full">
  <RadioCard value="full" title="Full access" description="Send, read and manage." />
  <RadioCard value="sending" title="Sending access" description="Send only." />
</RadioGroup>`,
    examples: [
      {
        title: 'Radio cards',
        description: 'The permission picker in the API key dialog.',
        className: 'flex-col items-stretch',
        render: (
          <RadioGroup defaultValue="full" aria-label="Permission">
            <RadioCard value="full" title="Full access" description="Create, read, update and delete everything." />
            <RadioCard
              value="sending"
              title="Sending access"
              description="Send emails only, optionally from one domain."
            />
          </RadioGroup>
        ),
      },
      {
        title: 'Plain items',
        className: 'flex-col items-start',
        render: (theme) => (
          <RadioGroup defaultValue="weekly" aria-label="Report">
            {['daily', 'weekly', 'monthly'].map((v) => (
              <div key={v} className="flex items-center gap-2">
                <RadioGroupItem value={v} id={`${theme}-${v}`} />
                <Label htmlFor={`${theme}-${v}`} className="capitalize">
                  {v}
                </Label>
              </div>
            ))}
          </RadioGroup>
        ),
      },
    ],
  },
  {
    slug: 'switch',
    usage: `import { Switch } from '@/components/ui/switch'

<Switch id="tracking" defaultChecked />`,
    examples: [
      {
        title: 'On, off and disabled',
        className: 'flex-col items-start gap-3',
        render: (theme) => (
          <>
            <div className="flex items-center gap-3">
              <Switch id={`${theme}-open`} defaultChecked />
              <Label htmlFor={`${theme}-open`}>Open tracking</Label>
            </div>
            <div className="flex items-center gap-3">
              <Switch id={`${theme}-click`} />
              <Label htmlFor={`${theme}-click`}>Click tracking</Label>
            </div>
            <div className="flex items-center gap-3">
              <Switch id={`${theme}-tls`} disabled defaultChecked />
              <Label htmlFor={`${theme}-tls`}>Enforce TLS</Label>
            </div>
          </>
        ),
      },
    ],
  },
  {
    slug: 'slider',
    usage: `import { Slider } from '@/components/ui/slider'

<Slider defaultValue={[50]} max={100} />`,
    examples: [
      {
        title: 'Pricing stops',
        description: 'With `marks`, the slider labels its stops, as the pricing page does. Drag it.',
        render: <SliderExample />,
      },
      {
        title: 'Plain',
        render: <Slider defaultValue={[40]} max={100} className="max-w-md" aria-label="Volume" />,
      },
    ],
    props: [{ name: 'marks', type: 'ReactNode[]', description: 'One label per stop, laid out under the track.' }],
  },
  {
    slug: 'search',
    usage: `import { SearchField, SearchTrigger } from '@/components/ui/search'

<SearchField shortcut={['/']} />`,
    examples: [
      {
        title: 'Field and trigger',
        description: 'The field filters a list. The trigger opens a command palette.',
        className: 'flex-col items-stretch',
        render: (
          <>
            <SearchField shortcut={['/']} aria-label="Search emails" />
            <SearchTrigger />
          </>
        ),
      },
    ],
    props: [
      { name: 'shortcut', type: 'string[]', description: 'On SearchField. Keys shown as Kbd chips on the right.' },
    ],
  },
  {
    slug: 'date-range-picker',
    usage: `import { DateRangePicker } from '@/components/ui/date-range-picker'

<DateRangePicker />`,
    examples: [{ title: 'Presets and custom range', render: <DateRangePicker /> }],
    props: [
      {
        name: 'value',
        type: '{ preset?, from?, to? }',
        description: 'Controlled range. Leave it out to let the component hold it.',
      },
      {
        name: 'onValueChange',
        type: '(range) => void',
        description: 'Called when a preset or custom range is applied.',
      },
      {
        name: 'presets',
        type: '{ value, label }[]',
        default: 'Today to last 30 days',
        description: 'The quick picks.',
      },
    ],
  },
]
