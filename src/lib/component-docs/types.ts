import type { PropRow } from '@/components/docs'

export type ComponentExample = {
  title: string
  description?: string
  /** `stack` puts the light and dark panes on top of each other, for wide examples. */
  layout?: 'split' | 'stack'
  className?: string
  render: React.ReactNode | ((theme: 'light' | 'dark') => React.ReactNode)
}

export type ComponentDoc = {
  slug: string
  /** The registry file under registry/dylo/ui/, when it is not `<slug>.tsx`. */
  source?: string
  usage: string
  examples: ComponentExample[]
  props?: PropRow[]
  notes?: React.ReactNode[]
}
