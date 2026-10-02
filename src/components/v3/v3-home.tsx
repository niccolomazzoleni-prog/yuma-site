import { GradientField } from "@/components/v3/glass"
import {
  Clients,
  Contact,
  Possibilities,
  Solutions,
  Team,
} from "@/components/v3/sections"
import { StoryAlternating } from "@/components/v3/story"
import { ProcessVerticalLine } from "@/components/v3/process"
import { AssessmentReport } from "@/components/v3/assessment"
import { HeroSilk } from "@/components/home/hero-silk"
import { WhatsAppBar } from "@/components/home/whatsapp-bar"
import { links } from "@/lib/links"
import { useEffect, useState } from "react"
import { MobileNav, SiteFooter, SkipLink } from "@/components/v3/site-chrome"
import { YumaLogo } from "@/components/v3/logo"

// Versione 3 — vetro su gradiente viola, hero con shader invariata.
// I blocchi seguono uno a uno il copy definitivo (10 blocchi della home).
function PillNav() {
  const items = [
    { label: "Cosa è possibile", href: "#cosa-e-possibile" },
    { label: "Soluzioni", href: "#soluzioni" },
    { label: "Come lavoriamo", href: "#come-lavoriamo" },
    { label: "Assessment", href: "#assessment" },
  ]
  // sopra l'hero scuro la barra è trasparente; dopo, diventa vetro chiaro
  const [light, setLight] = useState(false)
  useEffect(() => {
    const onScroll = () => setLight(window.scrollY > window.innerHeight - 120)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const linkClass = light
    ? "transition-colors hover:text-[#1D1D1F]"
    : "transition-colors hover:text-white"

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 md:pt-5">
      <div
        className={`mx-auto flex w-full max-w-[1180px] items-center justify-between gap-4 rounded-full border px-5 py-2 backdrop-blur-xl transition-colors duration-300 md:px-6 ${
          light
            ? "border-white/70 bg-white/55 text-[#1D1D1F]"
            : "border-white/25 bg-white/10 text-white"
        }`}
      >
        <a href="#top" className="inline-flex items-center py-1">
          <YumaLogo className="h-[18px] w-auto md:h-5" />
        </a>
        <nav
          aria-label="Principale"
          className={`hidden items-center gap-5 text-[14px] lg:flex xl:gap-7 ${light ? "text-[#424245]" : "text-white/80"}`}
        >
          {items.map((i) => (
            <a key={i.href} href={i.href} className={linkClass}>
              {i.label}
            </a>
          ))}
          <a href={links.projects} className={linkClass}>
            YUMA Projects
          </a>
          <a href={links.clientInterface} className={linkClass}>
            Client Interface
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={links.calendly}
            target="_blank"
            rel="noopener"
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-full px-3.5 py-2 text-center text-[13px] font-medium sm:px-4 sm:py-2.5 sm:text-[14px] transition-transform hover:-translate-y-0.5 ${
              light ? "bg-[#6D4CF2] text-white" : "bg-white text-[#1D1D1F]"
            }`}
          >
            Prenota una call
            <span className="sr-only"> (si apre in una nuova scheda)</span>
          </a>
          <MobileNav
            anchors={items}
            current="home"
            cta={{ label: "Prenota una call", href: links.calendly, external: true }}
            tone={light ? "light" : "dark"}
          />
        </div>
      </div>
    </header>
  )
}

export default function V3Home() {
  return (
    <div className="relative min-h-screen text-[#1D1D1F]">
      <SkipLink />
      <GradientField />
      <PillNav />

      <main id="contenuto">
        <span id="top" />
        <HeroSilk />
        <StoryAlternating />
        <Possibilities />
        <Solutions />
        <ProcessVerticalLine />
        <Team />
        <Clients />
        <AssessmentReport />
        <Contact />
      </main>

      <SiteFooter current="home" extra={<div>Email pubblica da confermare</div>} />
      <WhatsAppBar />
    </div>
  )
}
