import { useEffect } from "react"
import { HeroSilk } from "@/components/home/hero-silk"
import { Credibility } from "@/components/home/credibility"
import { Possibilities } from "@/components/home/possibilities"
import { Solutions } from "@/components/home/solutions"
import { HowWeWork } from "@/components/home/how-we-work"
import { Team } from "@/components/home/team"
import { Clients } from "@/components/home/clients"
import { Assessment } from "@/components/home/assessment"
import { Contact } from "@/components/home/contact"
import { Footer } from "@/components/home/footer"

const PAGE_BG = "#0b1026"

export default function Home() {
  useEffect(() => {
    const prevHtml = document.documentElement.style.background
    const prevBody = document.body.style.background
    const prevScheme = document.documentElement.style.colorScheme
    document.documentElement.style.background = PAGE_BG
    document.body.style.background = PAGE_BG
    document.documentElement.style.colorScheme = "dark"
    return () => {
      document.documentElement.style.background = prevHtml
      document.body.style.background = prevBody
      document.documentElement.style.colorScheme = prevScheme
    }
  }, [])

  return (
    <main>
      <HeroSilk />
      <Credibility />
      <Possibilities />
      <Solutions />
      <HowWeWork />
      <Team />
      <Clients />
      <Assessment />
      <Contact />
      <Footer />
    </main>
  )
}
