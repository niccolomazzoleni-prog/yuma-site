import { useEffect, useRef, useState } from "react"
import { Check } from "lucide-react"
import { Body, Eyebrow, Glass, Section } from "@/components/v3/glass"
import { clientInterfaceContent } from "@/lib/landing-content"

// Quattro strutture meno convenzionali per "fa per te se". Riferimenti 21st:
// Onboarding Checklist (5587), Radial Orbital Timeline (1820), Tilt Card
// (4832), Spotlight Card (2220), Marquee (10277).

const f = clientInterfaceContent.forWhom
const bullets = f.bullets
const short = [
  "Ordini ricorrenti da clienti abituali",
  "Più canali e formati diversi",
  "Back office che inserisce a mano",
  "ERP o CRM che non volete sostituire",
]
const TITLE = `${clientInterfaceContent.product} fa per te se:`

function Head({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <div className="mx-auto max-w-[820px] text-center">
      <Eyebrow>{f.label}</Eyebrow>
      <h2
        className={`mx-auto mt-5 max-w-[22ch] text-balance text-[30px] font-medium leading-[1.05] tracking-[-0.035em] md:text-[44px] ${
          tone === "dark" ? "text-white" : "text-[#010110]"
        }`}
      >
        {TITLE}
      </h2>
    </div>
  )
}

function NotFor({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <p
      className={`mx-auto mt-10 max-w-[760px] text-center text-[15px] leading-[1.6] ${
        tone === "dark" ? "text-white/45" : "text-[#8A8A97]"
      }`}
    >
      {f.notFor}
    </p>
  )
}

// ── A · Checklist che si spunta mentre scorri ───────────────────────────────
export function FitChecklist() {
  const [done, setDone] = useState<number[]>([])
  const refs = useRef<(HTMLLIElement | null)[]>([])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = Number((e.target as HTMLElement).dataset.i)
            setDone((d) => (d.includes(i) ? d : [...d, i]))
          }
        }),
      { threshold: 0.6 },
    )
    refs.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <Section>
      <Head />
      <Glass className="mx-auto mt-12 max-w-[880px] p-8 md:p-10">
        <div className="flex items-baseline justify-between gap-4 border-b border-[#010110]/10 pb-5">
          <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#A3A3AD]">
            Quante te ne riconosci?
          </span>
          <span className="text-[15px] font-medium tabular-nums text-[#7C5CFA]">
            {done.length} / {bullets.length}
          </span>
        </div>

        <ul className="mt-2">
          {bullets.map((b, i) => {
            const isDone = done.includes(i)
            return (
              <li
                key={b}
                data-i={i}
                ref={(el) => {
                  refs.current[i] = el
                }}
                className="flex items-start gap-4 border-b border-[#010110]/8 py-6 last:border-0"
              >
                <span
                  className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-[8px] border transition-all duration-500 ${
                    isDone
                      ? "border-[#7C5CFA] bg-[#7C5CFA] text-white"
                      : "border-[#010110]/20 bg-white/60 text-transparent"
                  }`}
                >
                  <Check className="h-4 w-4" />
                </span>
                <span
                  className={`text-[17px] leading-[1.5] transition-colors duration-500 ${
                    isDone ? "text-[#010110]" : "text-[#A3A3AD]"
                  }`}
                >
                  {b}
                </span>
              </li>
            )
          })}
        </ul>
      </Glass>
      <NotFor />
    </Section>
  )
}

// ── B · Orbita: le condizioni attorno al nucleo ─────────────────────────────
export function FitOrbit() {
  const [active, setActive] = useState(0)
  const positions = [
    { top: "2%", left: "50%", x: "-50%", y: "0" },
    { top: "50%", left: "98%", x: "-100%", y: "-50%" },
    { top: "98%", left: "50%", x: "-50%", y: "-100%" },
    { top: "50%", left: "2%", x: "0", y: "-50%" },
  ]

  return (
    <Section>
      <Head />

      {/* desktop: disposizione in cerchio */}
      <div className="relative mx-auto mt-16 hidden aspect-square max-w-[620px] lg:block">
        <div
          aria-hidden
          className="absolute inset-[12%] rounded-full border border-dashed border-[#7C5CFA]/30"
        />
        <div className="absolute left-1/2 top-1/2 flex h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/70 bg-white/70 p-6 text-center backdrop-blur-xl">
          <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#7C5CFA]">
            {String(active + 1).padStart(2, "0")}
          </span>
          <p className="mt-3 text-[14px] leading-[1.45] text-[#2A2A38]">
            {short[active]}
          </p>
        </div>

        {positions.map((pos, i) => (
          <button
            key={i}
            type="button"
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            style={{
              top: pos.top,
              left: pos.left,
              transform: `translate(${pos.x}, ${pos.y})`,
            }}
            className={`absolute w-[230px] rounded-[18px] border p-5 text-left transition-all duration-300 ${
              i === active
                ? "border-[#7C5CFA]/45 bg-white/80 shadow-[0_20px_50px_-30px_rgba(1,1,16,0.5)]"
                : "border-white/60 bg-white/45 hover:bg-white/60"
            }`}
          >
            <span className="text-[12px] font-medium tabular-nums text-[#7C5CFA]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="mt-2 text-[14px] leading-[1.45] text-[#2A2A38]">{bullets[i]}</p>
          </button>
        ))}
      </div>

      {/* mobile: elenco semplice */}
      <ul className="mt-12 grid gap-4 lg:hidden">
        {bullets.map((b, i) => (
          <Glass key={b} className="p-6">
            <span className="text-[12px] font-medium tabular-nums text-[#7C5CFA]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <Body className="mt-2 text-[15px]">{b}</Body>
          </Glass>
        ))}
      </ul>

      <NotFor />
    </Section>
  )
}

// ── C · Adesivi inclinati che si raddrizzano ────────────────────────────────
export function FitStickers() {
  const rotations = ["-2.2deg", "1.6deg", "2deg", "-1.4deg"]
  return (
    <Section>
      <Head />
      <div className="mx-auto mt-14 grid max-w-[1000px] gap-6 md:grid-cols-2">
        {bullets.map((b, i) => (
          <div
            key={b}
            style={{ ["--rot" as string]: rotations[i] }}
            className="group [transform:rotate(var(--rot))] transition-transform duration-500 hover:[transform:rotate(0deg)_translateY(-6px)]"
          >
            <Glass className="relative h-full p-8 md:p-9">
              <span
                aria-hidden
                className="absolute -top-3 left-8 h-6 w-16 rounded-[4px] bg-[#7C5CFA]/25 backdrop-blur-sm"
              />
              <span className="text-[13px] font-medium tabular-nums text-[#7C5CFA]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-[19px] font-medium leading-[1.2] tracking-[-0.02em] text-[#010110] md:text-[21px]">
                {short[i]}
              </h3>
              <Body className="mt-3 text-[15px]">{b}</Body>
            </Glass>
          </div>
        ))}
      </div>
      <NotFor />
    </Section>
  )
}

// ── D · Banda scura con il faro che segue il mouse ──────────────────────────
export function FitSpotlight() {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <section className="relative overflow-hidden bg-[#0A0A0F] py-20 md:py-28">
      <div
        ref={ref}
        onMouseMove={(e) => {
          const el = ref.current
          if (!el) return
          const r = el.getBoundingClientRect()
          el.style.setProperty("--mx", `${e.clientX - r.left}px`)
          el.style.setProperty("--my", `${e.clientY - r.top}px`)
        }}
        className="group/spot relative mx-auto max-w-[1180px] px-5"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
          style={{
            background:
              "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(124,92,250,0.22), transparent 70%)",
          }}
        />

        <Head tone="dark" />

        <div className="relative mt-14 grid gap-px overflow-hidden rounded-[24px] border border-white/10 bg-white/10 md:grid-cols-2">
          {bullets.map((b, i) => (
            <div key={b} className="bg-[#0A0A0F] p-8 transition-colors duration-300 hover:bg-[#12121A] md:p-10">
              <span className="text-[12px] font-medium tabular-nums text-[#A794FF]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-[19px] font-medium leading-[1.2] tracking-[-0.02em] text-white md:text-[21px]">
                {short[i]}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.55] text-white/55">{b}</p>
            </div>
          ))}
        </div>

        <NotFor tone="dark" />
      </div>
    </section>
  )
}
