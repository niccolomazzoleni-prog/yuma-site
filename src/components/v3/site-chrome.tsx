import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { Menu, X } from "lucide-react"
import { links } from "@/lib/links"
import { YumaLogo } from "@/components/v3/logo"

// Pezzi comuni alle tre pagine pubbliche: link "salta al contenuto",
// menu mobile e footer. Stesso comportamento su home e landing.

export type PageKey = "home" | "projects" | "client-interface"

const pages: { key: PageKey; label: string; href: string }[] = [
  { key: "home", label: "Home", href: links.home },
  { key: "projects", label: "YUMA Projects", href: links.projects },
  { key: "client-interface", label: "YUMA Client Interface", href: links.clientInterface },
]

export function SkipLink() {
  return (
    <a
      href="#contenuto"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[2000] focus:rounded-full focus:bg-[#1D1D1F] focus:px-5 focus:py-3 focus:text-[14px] focus:font-medium focus:text-white"
    >
      Salta al contenuto
    </a>
  )
}

// ── menu mobile: pannello da destra sotto i 1024px ──────────────────────────
export function MobileNav({
  anchors,
  current,
  cta,
  tone = "light",
}: {
  anchors: { label: string; href: string }[]
  current: PageKey
  cta: { label: string; href: string; external?: boolean }
  tone?: "light" | "dark"
}) {
  const [open, setOpen] = useState(false)
  const trigger = useRef<HTMLButtonElement>(null)
  const panel = useRef<HTMLDivElement>(null)
  const closeBtn = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const body = document.body
    body.style.overflow = "hidden"
    body.classList.add("nav-open")
    closeBtn.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false)
        return
      }
      if (e.key !== "Tab" || !panel.current) return
      // il focus resta dentro il pannello finché è aperto
      const f = panel.current.querySelectorAll<HTMLElement>("a[href], button")
      const first = f[0]
      const last = f[f.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener("keydown", onKey)
    return () => {
      body.style.overflow = ""
      body.classList.remove("nav-open")
      document.removeEventListener("keydown", onKey)
      trigger.current?.focus()
    }
  }, [open])

  // le ancore chiudono il pannello e poi scorrono, a pagina di nuovo sbloccata
  const goTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return
    e.preventDefault()
    setOpen(false)
    requestAnimationFrame(() => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      document.querySelector(href)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" })
      history.replaceState(null, "", href)
    })
  }

  const row =
    "flex min-h-[48px] items-center rounded-[14px] px-4 text-[17px] font-medium tracking-[-0.01em] transition-colors"

  return (
    <>
      <button
        ref={trigger}
        type="button"
        aria-label="Apri il menu"
        aria-expanded={open}
        aria-controls="menu-mobile"
        onClick={() => setOpen(true)}
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFA] lg:hidden ${
          tone === "dark"
            ? "border-white/30 bg-white/10 text-white hover:bg-white/20"
            : "border-white/70 bg-white/60 text-[#1D1D1F] hover:bg-white/80"
        }`}
      >
        <Menu className="h-5 w-5" aria-hidden />
      </button>

      {open
        ? createPortal(
            <div className="lg:hidden">
              <div
                aria-hidden
                className="yuma-fade-in fixed inset-0 z-[1200] bg-black/30"
                onClick={() => setOpen(false)}
              />
              <div
                ref={panel}
                id="menu-mobile"
                role="dialog"
                aria-modal="true"
                aria-label="Menu"
                className="yuma-slide-in fixed inset-y-0 right-0 z-[1201] flex w-[min(88vw,360px)] flex-col border-l border-white/70 bg-white/90 p-5 text-[#1D1D1F] shadow-[0_30px_80px_-30px_rgba(1,1,16,0.5)] backdrop-blur-2xl"
              >
                <div className="flex items-center justify-between">
                  <span className="pl-4 text-[#1D1D1F]">
                    <YumaLogo className="h-[18px] w-auto" />
                  </span>
                  <button
                    ref={closeBtn}
                    type="button"
                    aria-label="Chiudi il menu"
                    onClick={() => setOpen(false)}
                    className="flex h-11 w-11 items-center justify-center rounded-full hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFA]"
                  >
                    <X className="h-5 w-5" aria-hidden />
                  </button>
                </div>

                <nav aria-label="Menu della pagina" className="mt-6 flex flex-col">
                  {anchors.map((a) => (
                    <a key={a.href} href={a.href} onClick={(e) => goTo(e, a.href)} className={`${row} hover:bg-black/5`}>
                      {a.label}
                    </a>
                  ))}
                </nav>

                <div className="mx-4 my-4 h-px bg-[#1D1D1F]/10" />

                <nav aria-label="Pagine" className="flex flex-col">
                  {pages.map((p) => (
                    <a
                      key={p.key}
                      href={p.href}
                      aria-current={p.key === current ? "page" : undefined}
                      className={`${row} ${p.key === current ? "bg-[#7C5CFA]/10 text-[#5B3FD9]" : "text-[#424245] hover:bg-black/5"}`}
                    >
                      {p.label}
                    </a>
                  ))}
                </nav>

                <a
                  href={cta.href}
                  onClick={(e) => goTo(e, cta.href)}
                  {...(cta.external ? { target: "_blank", rel: "noopener" } : {})}
                  className="mt-auto flex min-h-[52px] items-center justify-center rounded-full bg-[#6D4CF2] px-5 text-[16px] font-medium text-white"
                >
                  {cta.label}
                  {cta.external ? <span className="sr-only"> (si apre in una nuova scheda)</span> : null}
                </a>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  )
}

// ── footer ───────────────────────────────────────────────────────────────────
export function SiteFooter({ current, extra }: { current?: PageKey; extra?: React.ReactNode }) {
  const link = "inline-flex min-h-[40px] items-center hover:text-[#1D1D1F]"
  return (
    <footer className="border-t border-white/60 bg-white/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-6 px-5 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <a href={links.home} className="inline-flex text-[#1D1D1F]">
            <YumaLogo className="h-5 w-auto" />
          </a>
          <div className="mt-3 space-y-1 text-[13px] leading-[1.6] text-[#56565B]">
            <div>YUMA TX S.r.l. · P. IVA 14244440963</div>
            <div>Sede legale: Via Giacomo Leopardi 14, Milano</div>
            <div>
              PEC{" "}
              <a href="mailto:yumatxsrl@pec.it" className="underline-offset-2 hover:text-[#1D1D1F] hover:underline">
                yumatxsrl@pec.it
              </a>{" "}
              · SDI WY7PJ6k
            </div>
            {extra}
          </div>
        </div>
        <nav aria-label="Footer" className="flex flex-col text-[14px] text-[#56565B]">
          {pages.map((p) => (
            <a key={p.key} href={p.href} aria-current={p.key === current ? "page" : undefined} className={link}>
              {p.label}
            </a>
          ))}
          <a href="#" className={link}>Privacy policy</a>
          <a href="#" className={link}>Cookie policy</a>
        </nav>
      </div>
    </footer>
  )
}
