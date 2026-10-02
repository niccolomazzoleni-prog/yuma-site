import { useEffect, useRef, useState } from "react"

// Barra sticky WhatsApp, replica di quella di abrarobotics.com: verde pieno,
// pill bianca con bordo iridescente che segue il mouse. Se chiusa riappare
// dopo 2 minuti; al reload è sempre visibile.
const WA_NUMBER = "393880547659"
const WA_REOPEN_MS = 2 * 60 * 1000

function WaIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

export function WhatsAppBar() {
  const [open, setOpen] = useState(true)
  // compare dopo l'hero e si toglie di mezzo quando è in vista il modulo
  const [pastHero, setPastHero] = useState(false)
  const [formInView, setFormInView] = useState(false)
  const barRef = useRef<HTMLElement>(null)

  useEffect(() => {
    document.body.classList.toggle("has-wa-bar", open)
    if (open) return
    const t = setTimeout(() => setOpen(true), WA_REOPEN_MS)
    return () => clearTimeout(t)
  }, [open])

  useEffect(() => () => document.body.classList.remove("has-wa-bar"), [])

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    const forms = ["#contatti", "#demo", "#richiedi-demo"]
      .map((id) => document.querySelector(id))
      .filter((el): el is Element => Boolean(el))
    const seen = new Set<Element>()
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? seen.add(e.target) : seen.delete(e.target)))
        setFormInView(seen.size > 0)
      },
      { threshold: 0.15 },
    )
    forms.forEach((f) => io.observe(f))
    return () => {
      window.removeEventListener("scroll", onScroll)
      io.disconnect()
    }
  }, [])

  const hidden = !pastHero || formInView

  // quando è nascosta non deve ricevere il focus da tastiera
  useEffect(() => {
    barRef.current?.toggleAttribute("inert", hidden)
  }, [hidden, open])

  if (!open) return null

  return (
    <aside
      ref={barRef}
      aria-label="Contatto WhatsApp"
      aria-hidden={hidden}
      className={`wa-bar${hidden ? " wa-bar--hidden" : ""}`}
      onMouseMove={(e) => {
        const bar = barRef.current
        if (!bar) return
        const r = bar.getBoundingClientRect()
        const angle =
          Math.atan2(
            e.clientY - (r.top + r.height / 2),
            e.clientX - (r.left + r.width / 2),
          ) *
          (180 / Math.PI)
        bar.style.setProperty("--wa-angle", `${angle}deg`)
      }}
      onMouseLeave={() => barRef.current?.style.setProperty("--wa-angle", "0deg")}
    >
      <p>Vuoi ricevere più informazioni?</p>
      <a
        className="wa-btn"
        href={`https://wa.me/${WA_NUMBER}`}
        target="_blank"
        rel="noopener"
      >
        <WaIcon className="shrink-0" /> Contattaci su WhatsApp
        <span className="sr-only"> (si apre in una nuova scheda)</span>
      </a>
      <button
        type="button"
        aria-label="Chiudi la barra WhatsApp"
        className="wa-bar-close"
        onClick={() => setOpen(false)}
      >
        ×
      </button>
    </aside>
  )
}
