'use client'

import { Badge } from '@/registry/dylo/ui/badge'
import { Button } from '@/registry/dylo/ui/button'
import { Eyebrow } from '@/registry/dylo/ui/eyebrow'
import { Input } from '@/registry/dylo/ui/input'
import * as React from 'react'

/**
 * Contact form with a local submit state. Demo only — wire `onSubmit` to a
 * Server Action or API route before shipping.
 */
export function ContactSection() {
  const [sent, setSent] = React.useState(false)

  return (
    <section id="start" className="bg-bone px-8 py-[84px]">
      <div className="mx-auto max-w-[640px]">
        <Eyebrow>Start a project</Eyebrow>
        <h2 className="mt-[18px] mb-[30px] text-[36px] font-bold tracking-tight text-ink">
          Tell us what you&rsquo;re building.
        </h2>
        {sent ? (
          <Badge variant="accent" role="status">
            Message sent — we&rsquo;ll reply within one business day.
          </Badge>
        ) : (
          <form
            className="flex flex-col gap-[18px]"
            onSubmit={(event) => {
              event.preventDefault()
              setSent(true)
            }}
          >
            <Input label="Name" name="name" placeholder="Jan Novák" required />
            <Input label="Email" name="email" type="email" placeholder="you@company.com" required />
            <Input
              label="What are you building?"
              name="brief"
              placeholder="A claims-review tool for our team"
              required
            />
            <div>
              <Button type="submit">Send</Button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
