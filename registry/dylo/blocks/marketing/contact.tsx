'use client'

import { cn } from '@/lib/utils'
import { CtaButton } from '@/registry/dylo/ui/cta-button'
import { Field, Label } from '@/registry/dylo/ui/field'
import { Input } from '@/registry/dylo/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/registry/dylo/ui/select'
import { Textarea } from '@/registry/dylo/ui/textarea'
import { CircleCheck } from 'lucide-react'
import * as React from 'react'

/** What the visitor typed, handed to `onSubmit`. */
export type ContactFormValues = { name: string; email: string; company: string; size: string; message: string }

/** The words the form supplies itself. Pass any of them to translate the form. */
export type ContactFormLabels = {
  name: string
  email: string
  company: string
  size: string
  sizePlaceholder: string
  /** Follows each size in the list: "11 to 50 employees". */
  sizeUnit: string
  message: string
  send: string
  sent: string
}

const defaultLabels: ContactFormLabels = {
  name: 'Name',
  email: 'Work email',
  company: 'Company',
  size: 'Company size',
  sizePlaceholder: 'Select...',
  sizeUnit: 'employees',
  message: 'What do you need?',
  send: 'Send',
  sent: 'Thank you. We will reply within one working day.',
}

/**
 * "Talk to us": the glass form of the enterprise page, with a sent state.
 * The form does not deliver anything itself: pass `onSubmit` to send the
 * values, and the sent state shows once it resolves. Without it the form
 * only switches to the sent state, which is right for a mock and wrong for
 * a live page.
 */
export function ContactForm({
  title = 'Talk to us',
  sizes = ['1-10', '11-50', '51-200', '201-500'],
  labels,
  onSubmit,
  className,
}: {
  title?: React.ReactNode
  sizes?: string[]
  labels?: Partial<ContactFormLabels>
  onSubmit?: (values: ContactFormValues) => void | Promise<void>
  className?: string
}) {
  const t = { ...defaultLabels, ...labels }
  const [sent, setSent] = React.useState(false)
  const [sending, setSending] = React.useState(false)
  const [size, setSize] = React.useState('')
  return (
    <div className={cn('relative rounded-3xl border border-gray-a3 bg-subtle p-6 sm:p-8', className)}>
      <span aria-hidden className="pointer-events-none absolute top-0 left-1/2 glow-line w-[200px] -translate-x-1/2" />
      {sent ? (
        <div role="status" className="flex min-h-80 flex-col items-center justify-center gap-3 text-center">
          <CircleCheck className="size-6 text-success" />
          <p className="font-display text-xl text-gray-12">{t.sent}</p>
        </div>
      ) : (
        <form
          className="flex flex-col gap-5"
          onSubmit={async (e) => {
            e.preventDefault()
            const data = new FormData(e.currentTarget)
            const field = (key: string) => String(data.get(key) ?? '').trim()
            setSending(true)
            try {
              await onSubmit?.({
                name: field('name'),
                email: field('email'),
                company: field('company'),
                size,
                message: field('message'),
              })
              setSent(true)
            } finally {
              setSending(false)
            }
          }}
        >
          <h2 className="font-display effect-font-styling text-2xl tracking-tight text-gray-12">{title}</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field>
              <Label htmlFor="contact-name">{t.name}</Label>
              <Input id="contact-name" name="name" variant="glass" size="lg" required autoComplete="name" />
            </Field>
            <Field>
              <Label htmlFor="contact-email">{t.email}</Label>
              <Input
                id="contact-email"
                name="email"
                variant="glass"
                size="lg"
                type="email"
                required
                autoComplete="email"
              />
            </Field>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field>
              <Label htmlFor="contact-company">{t.company}</Label>
              <Input id="contact-company" name="company" variant="glass" size="lg" autoComplete="organization" />
            </Field>
            <Field>
              <Label htmlFor="contact-size">{t.size}</Label>
              <Select value={size} onValueChange={setSize}>
                <SelectTrigger id="contact-size" size="md" className="h-12 rounded-2xl">
                  <SelectValue placeholder={t.sizePlaceholder} />
                </SelectTrigger>
                <SelectContent>
                  {sizes.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s} {t.sizeUnit}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
          </div>
          <Field>
            <Label htmlFor="contact-message">{t.message}</Label>
            <Textarea id="contact-message" name="message" rows={4} className="rounded-2xl" />
          </Field>
          <CtaButton type="submit" disabled={sending} className="w-full sm:w-fit">
            {t.send}
          </CtaButton>
        </form>
      )}
    </div>
  )
}
