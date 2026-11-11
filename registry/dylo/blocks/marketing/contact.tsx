'use client'

import { cn } from '@/lib/utils'
import { CtaButton } from '@/registry/dylo/ui/cta-button'
import { Field, Label } from '@/registry/dylo/ui/field'
import { Input } from '@/registry/dylo/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/registry/dylo/ui/select'
import { Textarea } from '@/registry/dylo/ui/textarea'
import { CircleCheck } from 'lucide-react'
import * as React from 'react'

/** "Talk to us": the glass form of the enterprise page, with a sent state. */
export function ContactForm({
  title = 'Talk to us',
  sizes = ['1-10', '11-50', '51-200', '201-500'],
  className,
}: {
  title?: React.ReactNode
  sizes?: string[]
  className?: string
}) {
  const [sent, setSent] = React.useState(false)
  return (
    <div className={cn('relative rounded-3xl border border-gray-a3 bg-subtle p-6 sm:p-8', className)}>
      <span aria-hidden className="pointer-events-none absolute top-0 left-1/2 glow-line w-[200px] -translate-x-1/2" />
      {sent ? (
        <div role="status" className="flex min-h-80 flex-col items-center justify-center gap-3 text-center">
          <CircleCheck className="size-6 text-success" />
          <p className="font-display text-xl text-gray-12">Thank you. We will reply within one working day.</p>
        </div>
      ) : (
        <form
          className="flex flex-col gap-5"
          onSubmit={(e) => {
            e.preventDefault()
            setSent(true)
          }}
        >
          <h2 className="font-display effect-font-styling text-2xl tracking-tight text-gray-12">{title}</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field>
              <Label htmlFor="contact-name">Name</Label>
              <Input id="contact-name" variant="glass" size="lg" required autoComplete="name" />
            </Field>
            <Field>
              <Label htmlFor="contact-email">Work email</Label>
              <Input id="contact-email" variant="glass" size="lg" type="email" required autoComplete="email" />
            </Field>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field>
              <Label htmlFor="contact-company">Company</Label>
              <Input id="contact-company" variant="glass" size="lg" autoComplete="organization" />
            </Field>
            <Field>
              <Label htmlFor="contact-size">Company size</Label>
              <Select>
                <SelectTrigger id="contact-size" size="md" className="h-12 rounded-2xl">
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  {sizes.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s} employees
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
          </div>
          <Field>
            <Label htmlFor="contact-message">What do you need?</Label>
            <Textarea id="contact-message" rows={4} className="rounded-2xl" />
          </Field>
          <CtaButton type="submit" className="w-full sm:w-fit">
            Send
          </CtaButton>
        </form>
      )}
    </div>
  )
}
