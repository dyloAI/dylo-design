import { cn } from '@/lib/utils'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/registry/dylo/ui/accordion'
import * as React from 'react'

/** Frequently asked questions: filled cards that open one at a time. */
export function Faq({
  title = 'Frequently asked questions',
  items,
  className,
}: {
  title?: React.ReactNode
  items: { question: string; answer: React.ReactNode }[]
  className?: string
}) {
  return (
    <div className={cn('mb-36', className)}>
      <h2 className="mb-8 font-display effect-font-styling text-[2.25rem] leading-[130%] tracking-tighter text-slate-12">
        {title}
      </h2>
      <Accordion type="single" collapsible>
        {items.map((item) => (
          <AccordionItem key={item.question} value={item.question}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
