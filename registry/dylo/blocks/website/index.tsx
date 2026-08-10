import { ContactSection } from '@/registry/dylo/blocks/website/contact-section'
import { Footer } from '@/registry/dylo/blocks/website/footer'
import { Header } from '@/registry/dylo/blocks/website/header'
import { Hero } from '@/registry/dylo/blocks/website/hero'
import { StudioSection } from '@/registry/dylo/blocks/website/studio-section'
import { WorkSection } from '@/registry/dylo/blocks/website/work-section'

export { ContactSection, Footer, Header, Hero, StudioSection, WorkSection }

/** The dylo marketing site, composed. Drop into a route or take the sections apart. */
export function WebsiteKit() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WorkSection />
        <StudioSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
