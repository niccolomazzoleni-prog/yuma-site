import { useEffect } from "react"
import { SiteNav, landingNav } from "@/components/site/site-nav"
import { LandingHero } from "@/components/landing/landing-hero"
import {
  CaseStudy,
  Credibility,
  FaqBlock,
  ForWhom,
  Modules,
  Problem,
  Roles,
  Systems,
  Together,
} from "@/components/landing/blocks"
import { DemoCta } from "@/components/landing/demo-cta"
import { Footer } from "@/components/home/footer"
import { WhatsAppBar } from "@/components/home/whatsapp-bar"
import type { LandingContent } from "@/lib/landing-content"

const PAGE_BG = "#ffffff"

// Pagina prodotto: 11 blocchi nell'ordine definito nel copy.
export default function LandingPage({ content }: { content: LandingContent }) {
  useEffect(() => {
    document.documentElement.style.background = PAGE_BG
    document.body.style.background = PAGE_BG
    document.documentElement.style.colorScheme = "light"
  }, [])

  return (
    <>
      <SiteNav
        sections={landingNav}
        cta="Richiedi una demo"
        ctaHref="#demo"
        current={content.slug === "projects" ? "projects" : "client-interface"}
      />
      <main>
      <LandingHero
        product={content.product}
        headline={content.hero.headline}
        sub={content.hero.sub}
        cta={content.hero.cta}
      />
      <Credibility data={content.credibility} />
      <Problem data={content.problem} />
      <Modules data={content.modules} />
      <Roles data={content.roles} />
      <CaseStudy data={content.caseStudy} />
      <Systems data={content.systems} />
      <Together data={content.together} />
      <ForWhom data={content.forWhom} />
      <FaqBlock data={content.faq} />
      <DemoCta objection={content.objection} cta={content.cta} />
      <Footer />
      <WhatsAppBar />
      </main>
    </>
  )
}
