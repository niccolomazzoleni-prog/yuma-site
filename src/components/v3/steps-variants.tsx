import { useRef, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { ArrowRight, Check, CornerDownRight } from "lucide-react"
import { Body, Eyebrow, Glass, Section, Title } from "@/components/v3/glass"
import { clientInterfaceContent } from "@/lib/landing-content"

// Sei modi di mostrare che i quattro passi sono conseguenziali, diversi dalla
// timeline verticale usata in home. Riferimenti 21st: How It Works (19861),
// Wizard Steps (23576), Steps (6087), Timeline (28298), Stepper (769).

const t = clientInterfaceContent.together
const steps = t.steps

function Head() {
  return (
    <div className="mx-auto max-w-[820px] text-center">
      <Eyebrow>{t.label}</Eyebrow>
      <Title className="mx-auto mt-5 max-w-[24ch]">{t.headline}</Title>
    </div>
  )
}

// ── A · Percorso orizzontale con frecce ─────────────────────────────────────
export function StepsTrack() {
  return (
    <Section>
      <Head />
      <div className="relative mt-14">
        <div
          aria-hidden
          className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-[#7C5CFA]/10 via-[#7C5CFA]/45 to-[#7C5CFA]/10 lg:block"
        />
        <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((s, i) => (
            <li key={s.n} className="relative">
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-white text-[15px] font-medium tabular-nums text-[#7C5CFA] shadow-[0_10px_30px_-18px_rgba(1,1,16,0.5)]">
                {s.n}
              </span>
              {i < steps.length - 1 ? (
                <ArrowRight aria-hidden className="absolute right-[-14px] top-4 hidden h-4 w-4 text-[#7C5CFA]/50 lg:block" />
              ) : null}
              <h3 className="mt-5 text-[18px] font-medium leading-[1.2] tracking-[-0.02em] text-[#010110] md:text-[20px]">
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

// ── B · Gradini: ogni passo scende di un livello ────────────────────────────
export function StepsLadder() {
  return (
    <Section>
      <Head />
      <div className="mt-14 flex flex-col gap-4">
        {steps.map((s, i) => (
          <div
            key={s.n}
            className="lg:pl-[var(--indent)]"
            style={{ ["--indent" as string]: `${i * 72}px` }}
          >
            <Glass className="flex items-start gap-5 p-6 md:p-7">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#7C5CFA] text-[14px] font-medium tabular-nums text-white">
                {s.n}
              </span>
              <div>
                <h3 className="text-[19px] font-medium tracking-[-0.02em] text-[#010110] md:text-[21px]">
                  {s.title}
                </h3>
                <Body className="mt-2 max-w-[60ch] text-[15px]">{s.desc}</Body>
              </div>
            </Glass>
            {i < steps.length - 1 ? (
              <CornerDownRight
                aria-hidden
                className="ml-8 mt-2 hidden h-5 w-5 text-[#7C5CFA]/45 lg:block"
              />
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  )
}

// ── C · Serpentina: due righe che si rincorrono ─────────────────────────────
export function StepsSerpentine() {
  return (
    <Section>
      <Head />
      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {steps.map((s, i) => (
          <Glass key={s.n} className={`p-7 md:p-8 ${i % 2 === 1 ? "sm:mt-12" : ""}`}>
            <div className="flex items-center gap-3">
              <span className="text-[34px] font-medium leading-none tabular-nums text-[#7C5CFA]/30">
                {s.n}
              </span>
              {i < steps.length - 1 ? (
                <span aria-hidden className="h-px flex-1 bg-[#7C5CFA]/25" />
              ) : null}
            </div>
            <h3 className="mt-5 text-[20px] font-medium tracking-[-0.02em] text-[#010110] md:text-[22px]">
              {s.title}
            </h3>
            <Body className="mt-3 text-[15px]">{s.desc}</Body>
          </Glass>
        ))}
      </div>
    </Section>
  )
}

// ── D · Barra che avanza allo scroll, orizzontale ───────────────────────────
export function StepsProgressBar() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 70%"] })
  const width = useSpring(scrollYProgress, { stiffness: 120, damping: 24 })

  return (
    <Section>
      <Head />
      <div ref={ref} className="mt-14">
        <div aria-hidden className="relative h-1 w-full rounded-full bg-[#010110]/8">
          <motion.div
            style={{ scaleX: width, originX: 0 }}
            className="absolute inset-0 rounded-full bg-[#7C5CFA]"
          />
        </div>
        <ol className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n}>
              <span className="text-[13px] font-medium tabular-nums text-[#7C5CFA]">{s.n}</span>
              <h3 className="mt-3 text-[18px] font-medium leading-[1.2] tracking-[-0.02em] text-[#010110] md:text-[20px]">
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

// ── E · Stepper cliccabile: un passo alla volta ─────────────────────────────
export function StepsWizard() {
  const [active, setActive] = useState(0)
  return (
    <Section>
      <Head />
      <div className="mt-12">
        <ol className="flex flex-wrap items-center gap-2">
          {steps.map((s, i) => (
            <li key={s.n} className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-current={i === active}
                className={`flex items-center gap-2 rounded-full border px-4 py-2 text-[14px] font-medium transition-colors ${
                  i === active
                    ? "border-[#7C5CFA] bg-[#7C5CFA] text-white"
                    : i < active
                      ? "border-[#7C5CFA]/35 bg-white/70 text-[#5B3FD9]"
                      : "border-white/70 bg-white/50 text-[#8A8A97]"
                }`}
              >
                <span className="tabular-nums">{i < active ? <Check className="h-4 w-4" /> : s.n}</span>
                <span className="hidden sm:inline">{s.title.split(" ").slice(0, 2).join(" ")}</span>
              </button>
              {i < steps.length - 1 ? (
                <span aria-hidden className="hidden h-px w-6 bg-[#7C5CFA]/25 sm:block" />
              ) : null}
            </li>
          ))}
        </ol>

        <Glass className="mt-6 p-8 md:p-10">
          <span className="text-[13px] font-medium tabular-nums text-[#7C5CFA]">
            {steps[active].n}
          </span>
          <h3 className="mt-3 text-[24px] font-medium tracking-[-0.025em] text-[#010110] md:text-[30px]">
            {steps[active].title}
          </h3>
          <Body className="mt-4 max-w-[62ch]">{steps[active].desc}</Body>
        </Glass>
      </div>
    </Section>
  )
}

// ── F · Catena di etichette, compatta ───────────────────────────────────────
export function StepsChain() {
  return (
    <Section>
      <Head />
      <Glass className="mt-12 p-8 md:p-10">
        <ol className="flex flex-wrap items-center gap-x-3 gap-y-4">
          {steps.map((s, i) => (
            <li key={s.n} className="flex items-center gap-3">
              <span className="rounded-full bg-[#7C5CFA]/12 px-4 py-2 text-[15px] font-medium text-[#5B3FD9]">
                <span className="mr-2 tabular-nums text-[#7C5CFA]/70">{s.n}</span>
                {s.title}
              </span>
              {i < steps.length - 1 ? (
                <ArrowRight aria-hidden className="h-4 w-4 text-[#7C5CFA]/45" />
              ) : null}
            </li>
          ))}
        </ol>

        <div className="mt-8 grid gap-6 border-t border-[#010110]/8 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n}>
              <h3 className="text-[16px] font-medium text-[#010110]">{s.title}</h3>
              <Body className="mt-2 text-[15px]">{s.desc}</Body>
            </div>
          ))}
        </div>
      </Glass>
    </Section>
  )
}
