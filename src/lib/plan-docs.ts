export const planDocs = {
  'scale-up': {
    file: 'scale-up-plan.md',
    title: 'Scale-up plan',
    lead: 'Strategy, targets and the SKU catalog for Nov 2026 → Oct 2027.',
  },
  actions: {
    file: 'scale-up-actions.md',
    title: 'Scale-up actions',
    lead: 'Every dated action from the plan, in chronological order.',
  },
  'brand-brief': {
    file: 'brand-brief.md',
    title: 'Working brief',
    lead: 'The procurement document for the brand partner. The studio-facing page is Brief de marca.',
  },
} as const

export type PlanSlug = keyof typeof planDocs
