import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { links } from "@/lib/links"

// Navbar unica del sito: trasparente sopra l'hero scuro, vetro bianco appena
// si scorre. Su schermi stretti apre un pannello a tutta larghezza.
export type NavLink = { label: string; href: string }

export const homeNav: NavLink[] = [
  { label: "Cosa è possibile", href: "#cosa-e-possibile" },
  { label: "Soluzioni", href: "#soluzioni" },
  { label: "Come lavoriamo", href: "#come-lavoriamo" },
  { label: "Team", href: "#team" },
  { label: "Assessment AI", href: "#assessment" },
]

export const landingNav: NavLink[] = [
  { label: "Il problema", href: "#problema" },
  { label: "Moduli", href: "#moduli" },
  { label: "Caso sul campo", href: "#caso" },
  { label: "A chi è rivolto", href: "#a-chi-e-rivolto" },
  { label: "FAQ", href: "#faq" },
]

export function SiteNav({
  sections,
  cta,
  ctaHref,
  current,
}: {
  sections: NavLink[]
  cta: string
  ctaHref: string
  current?: "home" | "projects" | "client-interface"
}) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const pages: { label: string; href: string; key: NonNullable<typeof current> }[] = [
    { label: "Home", href: links.home, key: "home" },
    { label: "YUMA Projects", href: links.projects, key: "projects" },
    { label: "Client Interface", href: links.clientInterface, key: "client-interface" },
  ]

  const solid = scrolled || open
  const linkColor = solid
    ? "text-ref-graphite hover:text-ref-carbon"
    : "text-white/70 hover:text-white"

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-ref-fog bg-white/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="flex w-full items-center justify-between gap-6 px-5 py-4 md:px-12">
        <a
          href={links.home}
          className={`text-lg font-semibold tracking-[0.2em] transition-colors duration-300 ${
            solid ? "text-ref-carbon" : "text-white"
          }`}
        >
          YUMA
        </a>

        <nav className="hidden items-center gap-7 text-sm lg:flex">
          {pages
            .filter((p) => p.key !== current)
            .map((p) => (
              <a
                key={p.key}
                href={p.href}
                className={`font-medium transition-colors duration-300 ${linkColor}`}
              >
                {p.label}
              </a>
            ))}
          <span
            aria-hidden
            className={`h-4 w-px ${solid ? "bg-ref-fog" : "bg-white/25"}`}
          />
          {sections.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className={`transition-colors duration-300 ${linkColor}`}
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={ctaHref}
            className={`hidden rounded-full px-4 py-2 text-sm font-medium transition sm:inline-flex ${
              solid
                ? "bg-ref-lavender text-white shadow-subtle hover:-translate-y-0.5"
                : "border border-white/25 bg-white/5 text-white backdrop-blur-sm hover:bg-white/15"
            }`}
          >
            {cta}
          </a>
          <button
            type="button"
            aria-label={open ? "Chiudi il menu" : "Apri il menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition lg:hidden ${
              solid
                ? "border border-ref-fog text-ref-carbon hover:bg-ref-mist"
                : "border border-white/25 text-white hover:bg-white/10"
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-ref-fog bg-white px-5 pb-8 pt-4 lg:hidden">
          <nav className="flex flex-col">
            {pages.map((p) => (
              <a
                key={p.key}
                href={p.href}
                onClick={() => setOpen(false)}
                className={`border-b border-ref-fog py-4 text-[17px] font-semibold ${
                  p.key === current ? "text-ref-lavender" : "text-ref-carbon"
                }`}
              >
                {p.label}
              </a>
            ))}
            {sections.map((s) => (
              <a
                key={s.href}
                href={s.href}
                onClick={() => setOpen(false)}
                className="border-b border-ref-fog py-4 text-[16px] text-ref-graphite"
              >
                {s.label}
              </a>
            ))}
            <a
              href={ctaHref}
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center rounded-pill bg-ref-lavender px-6 py-3 text-[15px] font-medium text-white shadow-subtle"
            >
              {cta}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
