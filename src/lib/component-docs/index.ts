import registry from '@/registry/dylo/registry.json'
import { actions } from './actions'
import { dataDisplay } from './data-display'
import { feedback } from './feedback'
import { forms } from './forms'
import { layout } from './layout'
import { overlays } from './overlays'
import type { ComponentDoc } from './types'

export type { ComponentDoc } from './types'

export const componentDocs: ComponentDoc[] = [...actions, ...forms, ...overlays, ...feedback, ...dataDisplay, ...layout]

export function getComponentDoc(slug: string) {
  return componentDocs.find((doc) => doc.slug === slug)
}

/** The lead is the registry description, so the CLI and the site say the same thing. */
export function componentLead(slug: string) {
  return registry.items.find((item) => item.name === slug)?.description ?? ''
}
