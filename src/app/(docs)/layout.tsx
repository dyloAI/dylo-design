import { SiteNav } from '@/components/site-nav'

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="lg:grid lg:grid-cols-[264px_1fr]">
      <SiteNav />
      <main className="min-w-0">{children}</main>
    </div>
  )
}
