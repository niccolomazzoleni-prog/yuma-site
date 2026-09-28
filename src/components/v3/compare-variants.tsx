import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion"
import { ArrowRight, Check, Minus, RotateCw, X } from "lucide-react"
import { Eyebrow, Glass, Section } from "@/components/v3/glass"

import { projectsContent } from "@/lib/landing-content"

// Sei modi di raccontare il confronto "Oggi / Con YUMA Projects".
// Riferimenti 21st: Comparison Section (26826), Comparison Slider with
// Highlights (19262), Us vs Them Comparison (21217), Feature Comparison Table
// (21218), Problem Cards Scroll Section (29426).

const p = projectsContent.problem
const rows = p.table ?? []
const PRODUCT = projectsContent.product
const BEFORE = "Oggi"
const AFTER = `Con ${PRODUCT}`

function Head() {
  return (
    <div className="text-center">
      <Eyebrow>{p.tableTitle}</Eyebrow>
    </div>
  )
}

const label = "text-[12px] font-medium uppercase tracking-[0.14em]"

// ── A · Barrato e spuntato ──────────────────────────────────────────────────
export function CompareStrike() {
  return (
    <Section>
      <Head />
      <div className="mx-auto mt-10 grid max-w-[1000px] gap-px overflow-hidden rounded-[28px] border border-white/65 bg-white/50 shadow-[0_40px_90px_-45px_rgba(1,1,16,0.35)] backdrop-blur-2xl md:grid-cols-2">
        <div className="bg-white/25 p-8 md:p-10">
          <p className={`${label} text-[#A1A1A6]`}>{BEFORE}</p>
          <ul className="mt-7 flex flex-col gap-5">
            {rows.map((r) => (
              <li key={r.before} className="flex gap-3 text-[16px] leading-[1.5] text-[#86868B]">
                <Minus aria-hidden className="mt-1 h-4 w-4 shrink-0 text-[#A1A1A6]/70" />
                <span className="line-through decoration-[#86868B]/35">{r.before}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white/70 p-8 md:p-10">
          <p className={`${label} text-[#7C5CFA]`}>{AFTER}</p>
          <ul className="mt-7 flex flex-col gap-5">
            {rows.map((r) => (
              <li key={r.after} className="flex gap-3 text-[16px] font-medium leading-[1.5] text-[#1D1D1F]">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7C5CFA] text-white">
                  <Check aria-hidden className="h-3 w-3" strokeWidth={3} />
                </span>
                {r.after}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

// ── B · Cursore da trascinare ───────────────────────────────────────────────
export function CompareSlider() {
  const [pos, setPos] = useState(50)
  const box = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const move = (clientX: number) => {
    const r = box.current?.getBoundingClientRect()
    if (!r) return
    setPos(Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100)))
  }

  // "oggi" allineato a sinistra, YUMA a destra: a metà corsa si leggono tutte e
  // due; trascinando si cancella l'una o l'altra.
  const layer = (after: boolean) => (
    <ul className="flex flex-col">
      {rows.map((r) => (
        <li
          key={r.before}
          className={`flex min-h-[88px] items-center border-b px-7 last:border-0 md:px-9 ${
            after ? "justify-end border-[#7C5CFA]/15" : "justify-start border-[#1D1D1F]/8"
          }`}
        >
          <span
            className={`flex max-w-[44%] items-center gap-3 text-[16px] leading-[1.4] md:text-[18px] ${
              after ? "flex-row-reverse text-right font-medium text-[#1D1D1F]" : "text-[#86868B]"
            }`}
          >
            {after ? (
              <Check aria-hidden className="h-5 w-5 shrink-0 text-[#7C5CFA]" />
            ) : (
              <X aria-hidden className="h-5 w-5 shrink-0 text-[#A1A1A6]" />
            )}
            {after ? r.after : r.before}
          </span>
        </li>
      ))}
    </ul>
  )

  return (
    <Section>
      <Head />
      <p className="mt-3 text-center text-[14px] text-[#86868B]">Trascina il cursore: a sinistra resta solo YUMA, a destra solo oggi</p>
      <Glass className="mx-auto mt-8 max-w-[900px] overflow-hidden p-0">
        <div className="flex justify-between border-b border-[#1D1D1F]/8 px-7 py-4">
          <span className={`${label} text-[#A1A1A6]`}>{BEFORE}</span>
          <span className={`${label} text-[#7C5CFA]`}>{AFTER}</span>
        </div>
        <div
          ref={box}
          className="relative cursor-ew-resize select-none touch-none"
          onPointerDown={(e) => {
            dragging.current = true
            ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
            move(e.clientX)
          }}
          onPointerMove={(e) => dragging.current && move(e.clientX)}
          onPointerUp={() => (dragging.current = false)}
        >
          {/* sotto: con YUMA */}
          <div className="bg-[#7C5CFA]/[0.07]">{layer(true)}</div>
          {/* sopra: oggi, tagliato dal cursore */}
          <div
            aria-hidden
            className="absolute inset-0 bg-[#F4F3F8]"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            {layer(false)}
          </div>
          {/* maniglia */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 w-[2px] bg-[#7C5CFA]"
            style={{ left: `${pos}%` }}
          >
            <span className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-[#7C5CFA] text-white shadow-[0_10px_30px_-10px_rgba(124,92,250,0.8)]">
              <ArrowRight className="h-4 w-4 -scale-x-100" />
              <ArrowRight className="-ml-1 h-4 w-4" />
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={pos}
            onChange={(e) => setPos(Number(e.target.value))}
            aria-label={`Confronto tra ${BEFORE} e ${AFTER}`}
            className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          />
        </div>
      </Glass>
    </Section>
  )
}

// ── C · Due schede, una in evidenza ─────────────────────────────────────────
// La griglia è esportata a parte: è quella montata nella landing Projects.
export function CompareCardsBlock({ className = "mt-10" }: { className?: string }) {
  return (
    <div className={`mx-auto grid ${className} max-w-[1000px] items-start gap-5 md:grid-cols-2`}>
        <div className="rounded-[28px] border border-white/50 bg-white/25 p-8 backdrop-blur-xl md:mt-8 md:p-9">
          <p className={`${label} text-[#A1A1A6]`}>{BEFORE}</p>
          <ul className="mt-7 flex flex-col gap-4 border-t border-[#1D1D1F]/8 pt-6">
            {rows.map((r) => (
              <li key={r.before} className="flex items-start gap-3 text-[16px] leading-[1.5] text-[#6E6E73]">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[6px] bg-[#1D1D1F]/8">
                  <X aria-hidden className="h-3 w-3 text-[#86868B]" strokeWidth={2.5} />
                </span>
                {r.before}
              </li>
            ))}
          </ul>
        </div>

        <Glass className="relative bg-white/75 p-8 ring-2 ring-[#7C5CFA]/35 md:p-9">
          <span className="absolute -top-3 left-8 rounded-full bg-[#7C5CFA] px-3 py-1 text-[12px] font-medium text-white">
            {AFTER}
          </span>
          <ul className="mt-3 flex flex-col gap-4 pt-2">
            {rows.map((r) => (
              <li key={r.after} className="flex items-start gap-3 text-[16px] font-medium leading-[1.5] text-[#1D1D1F]">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[6px] bg-[#7C5CFA]">
                  <Check aria-hidden className="h-3 w-3 text-white" strokeWidth={3} />
                </span>
                {r.after}
              </li>
            ))}
          </ul>
          <a
            href="#demo"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#7C5CFA] px-5 py-3 text-[15px] font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
          >
            Richiedi una demo <ArrowRight className="h-4 w-4" />
          </a>
        </Glass>
      </div>
  )
}

export function CompareCards() {
  return (
    <Section>
      <Head />
      <CompareCardsBlock />
    </Section>
  )
}

// ── D · Interruttore che gira tutte le righe ────────────────────────────────
export function CompareToggle() {
  const [after, setAfter] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduce = useReducedMotion()

  // quando la sezione entra in vista, gira da sola una volta
  useEffect(() => {
    if (!inView || reduce) return
    const t = setTimeout(() => setAfter(true), 1400)
    return () => clearTimeout(t)
  }, [inView, reduce])

  return (
    <Section>
      <Head />
      <div ref={ref} className="mx-auto mt-8 max-w-[820px]">
        <div className="mx-auto flex w-fit rounded-full border border-white/70 bg-white/45 p-1 backdrop-blur-xl">
          {[BEFORE, AFTER].map((t, i) => {
            const on = after === (i === 1)
            return (
              <button
                key={t}
                type="button"
                aria-pressed={on}
                onClick={() => setAfter(i === 1)}
                className={`relative rounded-full px-5 py-2.5 text-[14px] font-medium transition-colors ${
                  on ? (i === 1 ? "text-white" : "text-[#1D1D1F]") : "text-[#6E6E73]"
                }`}
              >
                {on ? (
                  <motion.span
                    layoutId="compare-pill"
                    className={`absolute inset-0 rounded-full ${i === 1 ? "bg-[#7C5CFA]" : "bg-white"}`}
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                ) : null}
                <span className="relative">{t}</span>
              </button>
            )
          })}
        </div>

        <Glass className="mt-6 p-3 md:p-4">
          <ul>
            {rows.map((r, i) => (
              <li
                key={r.before}
                className="flex min-h-[76px] items-center gap-4 border-b border-[#1D1D1F]/8 px-4 last:border-0 md:px-5"
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-500 ${
                    after ? "bg-[#7C5CFA] text-white" : "bg-[#1D1D1F]/8 text-[#86868B]"
                  }`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {after ? <Check className="h-4 w-4" strokeWidth={2.5} /> : <X className="h-4 w-4" />}
                </span>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={after ? r.after : r.before}
                    initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                    transition={{ duration: 0.28, delay: i * 0.06 }}
                    className={`text-[17px] leading-[1.45] md:text-[19px] ${
                      after ? "font-medium text-[#1D1D1F]" : "text-[#6E6E73]"
                    }`}
                  >
                    {after ? r.after : r.before}
                  </motion.span>
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </Glass>
      </div>
    </Section>
  )
}

// ── E · Righe con la freccia di trasformazione ──────────────────────────────
export function CompareArrows() {
  return (
    <Section>
      <Head />
      <div className="mx-auto mt-10 hidden max-w-[1000px] grid-cols-[minmax(0,1fr)_56px_minmax(0,1fr)] px-7 md:grid">
        <span className={`${label} text-[#A1A1A6]`}>{BEFORE}</span>
        <span />
        <span className={`${label} text-[#7C5CFA]`}>{AFTER}</span>
      </div>
      <ol className="mx-auto mt-4 flex max-w-[1000px] flex-col gap-3">
        {rows.map((r, i) => (
          <motion.li
            key={r.before}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
          >
            <Glass className="grid items-center gap-3 rounded-[20px] px-7 py-5 md:grid-cols-[minmax(0,1fr)_56px_minmax(0,1fr)] md:gap-0">
              <span className="text-[16px] leading-[1.45] text-[#86868B]">{r.before}</span>
              <span className="flex md:justify-center">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7C5CFA]/12 text-[#7C5CFA]">
                  <ArrowRight className="h-4 w-4 rotate-90 md:rotate-0" />
                </span>
              </span>
              <span className="text-[17px] font-medium leading-[1.45] text-[#1D1D1F]">{r.after}</span>
            </Glass>
          </motion.li>
        ))}
      </ol>
    </Section>
  )
}

// ── F · Carte che si girano ─────────────────────────────────────────────────
function FlipCard({ before, after, i }: { before: string; after: string; i: number }) {
  const [flipped, setFlipped] = useState(false)
  const face =
    "absolute inset-0 flex flex-col justify-between rounded-[24px] border p-7 [backface-visibility:hidden] md:p-8"
  return (
    <button
      type="button"
      aria-pressed={flipped}
      aria-label={flipped ? `${AFTER}: ${after}` : `${BEFORE}: ${before}`}
      onClick={() => setFlipped((f) => !f)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      className="group h-[210px] w-full text-left [perspective:1200px] focus-visible:outline-none"
    >
      <span
        className="relative block h-full w-full transition-transform duration-700 [transform-style:preserve-3d] motion-reduce:transition-none"
        style={{ transform: flipped ? "rotateY(180deg)" : "none" }}
      >
        <span className={`${face} border-white/60 bg-white/40 backdrop-blur-xl group-focus-visible:ring-2 group-focus-visible:ring-[#7C5CFA]`}>
          <span className="flex items-center justify-between">
            <span className={`${label} text-[#A1A1A6]`}>{BEFORE}</span>
            <span className="text-[13px] tabular-nums text-[#A1A1A6]">{String(i + 1).padStart(2, "0")}</span>
          </span>
          <span className="text-[20px] leading-[1.3] tracking-[-0.015em] text-[#424245] md:text-[22px]">{before}</span>
          <span className="flex items-center gap-1.5 text-[13px] text-[#86868B]">
            <RotateCw className="h-3.5 w-3.5" /> Girala
          </span>
        </span>
        <span
          className={`${face} border-[#7C5CFA]/30 bg-gradient-to-br from-[#7C5CFA] to-[#5B3FD9] text-white [transform:rotateY(180deg)]`}
        >
          <span className="flex items-center justify-between">
            <span className={`${label} text-white/75`}>{AFTER}</span>
            <Check className="h-5 w-5" />
          </span>
          <span className="text-[20px] font-medium leading-[1.3] tracking-[-0.015em] md:text-[22px]">{after}</span>
          <span />
        </span>
      </span>
    </button>
  )
}

export function CompareFlip() {
  return (
    <Section>
      <Head />
      <p className="mt-3 text-center text-[14px] text-[#86868B]">Passa sopra o tocca una carta</p>
      <div className="mx-auto mt-10 grid max-w-[1000px] gap-5 md:grid-cols-2">
        {rows.map((r, i) => (
          <FlipCard key={r.before} before={r.before} after={r.after} i={i} />
        ))}
      </div>
    </Section>
  )
}

