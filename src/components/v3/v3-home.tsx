import { GradientField } from "@/components/v3/glass"
import {
  Assessment,
  Clients,
  Contact,
  Footer,
  Possibilities,
  Solutions,
  Team,
} from "@/components/v3/sections"
import { StoryAlternating } from "@/components/v3/story"
import { ProcessVerticalLine } from "@/components/v3/process"
import { HeroSilk } from "@/components/home/hero-silk"
import { WhatsAppBar } from "@/components/home/whatsapp-bar"
import { links } from "@/lib/links"

// Versione 3 — vetro su gradiente viola, hero con shader invariata.
// I blocchi seguono uno a uno il copy definitivo (10 blocchi della home).
function PillNav() {
  const items = [
    { label: "Cosa è possibile", href: "#cosa-e-possibile" },
    { label: "Soluzioni", href: "#soluzioni" },
    { label: "Come lavoriamo", href: "#come-lavoriamo" },
    { label: "Assessment", href: "#assessment" },
  ]
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-5 pt-5">
      <div className="mx-auto flex w-full max-w-[1180px] items-center justify-between gap-6 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-white backdrop-blur-xl md:px-6">
        <a href="#top" className="text-[15px] font-semibold tracking-[0.18em]">
          YUMA
        </a>
        <nav className="hidden items-center gap-7 text-[14px] text-white/70 lg:flex">
          {items.map((i) => (
            <a key={i.href} href={i.href} className="transition-colors hover:text-white">
              {i.label}
            </a>
          ))}
          <a href={links.projects} className="transition-colors hover:text-white">
            YUMA Projects
          </a>
          <a href={links.clientInterface} className="transition-colors hover:text-white">
            Client Interface
          </a>
        </nav>
        <a
          href="#contatti"
          className="rounded-full bg-white px-4 py-2 text-[14px] font-medium text-[#010110] transition-transform hover:-translate-y-0.5"
        >
          Prenota una call
        </a>
      </div>
    </header>
  )
}

export default function V3Home() {
  return (
    <div className="relative min-h-screen text-[#010110]">
      <GradientField />
      <PillNav />

      <main id="top">
        <HeroSilk />
        <StoryAlternating />
        <Possibilities />
        <Solutions />
        <ProcessVerticalLine />
        <Team />
        <Clients />
        <Assessment />
        <Contact />
      </main>

      <Footer />
      <WhatsAppBar />
    </div>
  )
}
