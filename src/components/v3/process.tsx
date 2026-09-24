import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useSpring, useMotionValueEvent } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"
import { Body, Eyebrow, Glass, Lead, Section, Title } from "@/components/v3/glass"

// Quattro modi di raccontare "Come lavoriamo" come percorso 1 → 2 → 3.
// Riferimenti 21st: How It Works Timeline (19863), Vertical How It Works
// Timeline (26902), Steps (6087), Stepper (769), Timeline (28298).

export const steps = [
  {
    n: "01",
    title: "Definiamo assieme il tuo percorso",
    desc: "Partiamo dai tuoi obiettivi di business. Mettiamo a fuoco insieme dove vuoi arrivare, poi entriamo nei processi per individuare le aree di intervento a maggior valore e disegnare una roadmap di trasformazione AI su misura.",
    short: "Obiettivi e roadmap",
  },
  {
    n: "02",
    title: "Individuiamo gli strumenti migliori",
    desc: "Conosciamo gli strumenti, le loro potenzialità e i loro limiti. Individuiamo le tecnologie adatte al tuo caso e studiamo la loro applicazione per massimizzare l'impatto sulla tua azienda.",
    short: "Tecnologie adatte al tuo caso",
  },
  {
    n: "03",
    title: "Li implementiamo a supporto dei tuoi processi",
    desc: "Costruiamo il sistema dentro il tuo modo di lavorare, con l'obiettivo che tutto risulti facile da capire e da usare. Formiamo il tuo team e gli diamo gli strumenti per moltiplicare la propria produttività.",
    short: "Sistema costruito e squadra formata",
  },
]

function Head() {
  return (
    <div className="mx-auto max-w-[760px] text-center">
      <Eyebrow>Come lavoriamo</Eyebrow>
      <Title className="mt-5">Come lavoriamo</Title>
      <Lead className="mx-auto mt-5 max-w-[54ch]">
        Tre passaggi, sempre nello stesso ordine.
      </Lead>
    </div>
  )
}

// ── A · Percorso orizzontale: i numeri sulla linea ──────────────────────────
export function ProcessTrack() {
  return (
    <Section id="come-lavoriamo">
      <Head />

      <div className="relative mt-16">
        {/* la linea che collega le tappe */}
        <div
          aria-hidden
          className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-[#7C5CFA]/10 via-[#7C5CFA]/45 to-[#7C5CFA]/10 md:block"
        />
        <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((s, i) => (
            <li key={s.n} className="relative">
              <div className="flex items-center gap-3 md:block">
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-white text-[15px] font-medium tabular-nums text-[#7C5CFA] shadow-[0_10px_30px_-18px_rgba(1,1,16,0.5)]">
                  {s.n}
                </span>
                {i < steps.length - 1 ? (
                  <ArrowRight
                    aria-hidden
                    className="hidden h-4 w-4 text-[#7C5CFA]/50 md:absolute md:right-[-18px] md:top-4 md:block"
                  />
                ) : null}
              </div>
              <h3 className="mt-6 text-[20px] font-medium leading-[1.2] tracking-[-0.02em] text-[#1B1A2E] md:text-[22px]">
                {s.title}
              </h3>
              <Body className="mt-3 text-[15px]">{s.desc}</Body>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}

// ── B · Linea verticale che si riempie allo scroll ──────────────────────────
export function ProcessVerticalLine() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  })
  const height = useSpring(scrollYProgress, { stiffness: 120, damping: 24 })
  const [active, setActive] = useState(0)

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(steps.length - 1, Math.floor(v * steps.length)))
  })

  return (
    <Section id="come-lavoriamo">
      <Head />

      <div ref={ref} className="relative mx-auto mt-16 max-w-[820px] pl-12 md:pl-16">
        {/* binario e riempimento */}
        <div aria-hidden className="absolute bottom-0 left-[22px] top-2 w-px bg-[#1B1A2E]/10 md:left-[30px]" />
        <motion.div
          aria-hidden
          style={{ scaleY: height, originY: 0 }}
          className="absolute bottom-0 left-[22px] top-2 w-px bg-[#7C5CFA] md:left-[30px]"
        />

        <ol className="space-y-12">
          {steps.map((s, i) => (
            <li key={s.n} className="relative">
              <span
                aria-hidden
                className={`absolute -left-12 top-0 flex h-11 w-11 items-center justify-center rounded-full border text-[14px] font-medium tabular-nums transition-colors duration-500 md:-left-16 ${
                  i <= active
                    ? "border-[#7C5CFA] bg-[#7C5CFA] text-white"
                    : "border-[#1B1A2E]/15 bg-white text-[#A3A3AD]"
                }`}
              >
                {i < active ? <Check className="h-5 w-5" /> : s.n}
              </span>
              <Glass className="p-7 md:p-8">
                <h3 className="text-[20px] font-medium leading-[1.2] tracking-[-0.02em] text-[#1B1A2E] md:text-[24px]">
                  {s.title}
                </h3>
                <Body className="mt-3">{s.desc}</Body>
              </Glass>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}

// ── C · Numero gigante che resta fermo ──────────────────────────────────────
export function ProcessBigNumber() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  })

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.max(0, Math.min(steps.length - 1, Math.floor(v * steps.length))))
  })

  return (
    <Section id="come-lavoriamo">
      <Head />

      <div ref={ref} className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <div className="hidden lg:block">
          <div className="sticky top-32">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="text-[140px] font-medium leading-none tracking-[-0.06em] text-[#7C5CFA]"
            >
              {steps[active].n}
            </motion.div>
            <p className="mt-4 max-w-[22ch] text-[18px] text-[#4A4A58]">
              {steps[active].short}
            </p>
            <div className="mt-8 flex gap-2">
              {steps.map((s, i) => (
                <span
                  key={s.n}
                  aria-hidden
                  className={`h-1 w-12 rounded-full transition-colors duration-300 ${
                    i <= active ? "bg-[#7C5CFA]" : "bg-[#1B1A2E]/12"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <ol className="flex flex-col gap-6 lg:gap-16">
          {steps.map((s, i) => (
            <li key={s.n}>
              <Glass className="p-7 md:p-9">
                <span className="text-[13px] font-medium tabular-nums text-[#7C5CFA] lg:hidden">
                  {s.n}
                </span>
                <h3 className="mt-2 text-[22px] font-medium leading-[1.15] tracking-[-0.025em] text-[#1B1A2E] md:text-[28px] lg:mt-0">
                  {s.title}
                </h3>
                <Body className="mt-4">{s.desc}</Body>
              </Glass>
              {i < steps.length - 1 ? (
                <div aria-hidden className="mx-auto mt-6 hidden h-8 w-px bg-[#7C5CFA]/30 lg:block" />
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}

// ── D · Stepper: tappe numerate con connettore, stile prodotto ──────────────
export function ProcessStepper() {
  const [seen, setSeen] = useState<number[]>([0])
  const items = useRef<(HTMLLIElement | null)[]>([])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = Number((e.target as HTMLElement).dataset.i)
            setSeen((s) => (s.includes(i) ? s : [...s, i]))
          }
        }),
      { threshold: 0.5 },
    )
    items.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <Section id="come-lavoriamo">
      <Head />

      <Glass className="mx-auto mt-16 max-w-[900px] p-8 md:p-12">
        <ol>
          {steps.map((s, i) => {
            const done = seen.includes(i)
            return (
              <li
                key={s.n}
                data-i={i}
                ref={(el) => {
                  items.current[i] = el
                }}
                className="grid grid-cols-[44px_minmax(0,1fr)] gap-x-5 md:grid-cols-[56px_minmax(0,1fr)]"
              >
                <div className="flex flex-col items-center">
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-[14px] font-medium tabular-nums transition-colors duration-500 ${
                      done
                        ? "border-[#7C5CFA] bg-[#7C5CFA] text-white"
                        : "border-[#1B1A2E]/15 bg-white/70 text-[#A3A3AD]"
                    }`}
                  >
                    {s.n}
                  </span>
                  {i < steps.length - 1 ? (
                    <span
                      aria-hidden
                      className={`my-2 w-px flex-1 transition-colors duration-500 ${
                        seen.includes(i + 1) ? "bg-[#7C5CFA]" : "bg-[#1B1A2E]/12"
                      }`}
                    />
                  ) : null}
                </div>

                <div className={i < steps.length - 1 ? "pb-10" : ""}>
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <h3 className="text-[20px] font-medium leading-[1.2] tracking-[-0.02em] text-[#1B1A2E] md:text-[24px]">
                      {s.title}
                    </h3>
                    <span className="text-[13px] text-[#8A8A97]">{s.short}</span>
                  </div>
                  <Body className="mt-3">{s.desc}</Body>
                </div>
              </li>
            )
          })}
        </ol>
      </Glass>
    </Section>
  )
}
