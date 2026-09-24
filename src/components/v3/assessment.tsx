import { useState } from "react"
import { ArrowRight, Check, FileText, MapPin, Plus, Minus } from "lucide-react"
import { Body, Eyebrow, Glass, Lead, Section, Title } from "@/components/v3/glass"
import { Info } from "@/components/v3/infographic"

// Cinque modi di dire "Da dove si parte" (blocco 8 del copy) senza un unico
// muro di testo. Riferimenti 21st: Cta 4 (2205), cta section with gallery
// (1960), Download Options Section (4571), Accordion Multiple (29251).

const CTA_LABEL = "Richiedi il tuo assessment"
const NOTE = "Ti rispondiamo entro un giorno lavorativo."

const deliverables = [
  "Un documento con i casi d'uso individuati",
  "Ordinati per impatto e ritorno economico",
  "Con una stima di cosa serve per realizzarli",
]

function Cta({ variant = "dark" }: { variant?: "dark" | "violet" }) {
  return (
    <a
      href="#contatti"
      className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 text-[15px] font-medium text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
        variant === "violet"
          ? "bg-[#7C5CFA] focus-visible:ring-[#1B1A2E]"
          : "bg-[#1B1A2E] focus-visible:ring-[#7C5CFA]"
      }`}
    >
      {CTA_LABEL}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </a>
  )
}

function Head({ sub }: { sub?: string }) {
  return (
    <div className="mx-auto max-w-[760px] text-center">
      <Eyebrow>Da dove si parte</Eyebrow>
      <Title className="mx-auto mt-5 max-w-[20ch]">
        Ogni percorso inizia con un assessment AI
      </Title>
      {sub ? <Lead className="mx-auto mt-5 max-w-[56ch]">{sub}</Lead> : null}
    </div>
  )
}

// ── A · Due colonne: il percorso a sinistra, cosa ti resta a destra ──────────
export function AssessmentTwoColumns() {
  return (
    <Section id="assessment">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <Eyebrow>Da dove si parte</Eyebrow>
          <Title className="mt-5 max-w-[16ch]">
            Ogni percorso inizia con un assessment AI
          </Title>
          <Body className="mt-5 max-w-[50ch]">
            Un modo semplice per conoscersi e pensare in grande assieme. Veniamo
            nella tua azienda, mappiamo i processi con le persone che li vivono
            ogni giorno e individuiamo dove l'AI può avere l'impatto maggiore.
          </Body>
          <div className="mt-8">
            <Cta />
          </div>
          <p className="mt-4 text-[13px] text-[#6B6B76]">{NOTE}</p>
        </div>

        <Glass className="p-8 md:p-10">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#A3A3AD]">
            Cosa ti resta in mano
          </p>
          <ul className="mt-6 space-y-4">
            {deliverables.map((d) => (
              <li key={d} className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#7C5CFA]" />
                <span className="text-[16px] leading-[1.5] text-[#2A2A38]">{d}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-[#1B1A2E]/8 pt-5 text-[15px] text-[#4A4A58]">
            Il risultato è tuo, anche se decidi di fermarti lì.
          </p>
        </Glass>
      </div>
    </Section>
  )
}

// ── B · Tre passi dell'assessment ───────────────────────────────────────────
const visitSteps = [
  {
    icon: MapPin,
    title: "Veniamo da voi",
    desc: "Un giorno in azienda, con le persone che i processi li vivono davvero.",
  },
  {
    icon: Check,
    title: "Mappiamo i processi",
    desc: "Individuiamo dove l'intelligenza artificiale può avere l'impatto maggiore.",
  },
  {
    icon: FileText,
    title: "Ti consegniamo il documento",
    desc: "Casi d'uso ordinati per impatto e ritorno economico, con la stima di cosa serve.",
  },
]

export function AssessmentThreeSteps() {
  return (
    <Section id="assessment">
      <Head sub="Un modo semplice per conoscersi e pensare in grande assieme." />

      <ol className="mt-12 grid gap-5 md:grid-cols-3">
        {visitSteps.map((s, i) => (
          <li key={s.title}>
            <Glass className="h-full p-7 md:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7C5CFA]/12 text-[#7C5CFA]">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="text-[13px] font-medium tabular-nums text-[#A3A3AD]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 text-[20px] font-medium tracking-[-0.02em] text-[#1B1A2E]">
                {s.title}
              </h3>
              <Body className="mt-3 text-[15px]">{s.desc}</Body>
            </Glass>
          </li>
        ))}
      </ol>

      <div className="mt-10 text-center">
        <Cta variant="violet" />
        <p className="mt-4 text-[13px] text-[#6B6B76]">
          Il risultato è tuo, anche se decidi di fermarti lì.
        </p>
      </div>
    </Section>
  )
}

// ── C · Il documento che ricevi, mostrato ───────────────────────────────────
// Copy invariato: le tre frasi del blocco 8, solo distribuite nel layout.
export function AssessmentReport() {
  return (
    <Section id="assessment">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div>
          <Eyebrow>Da dove si parte</Eyebrow>
          <Title className="mt-5 max-w-[18ch]">
            Ogni percorso di consulenza inizia con un assessment AI
          </Title>
          <Lead className="mt-5 max-w-[46ch]">
            Un modo semplice per conoscersi e pensare in grande assieme.
          </Lead>
          <Body className="mt-5 max-w-[50ch]">
            Veniamo nella tua azienda, mappiamo i processi insieme alle persone
            che li vivono ogni giorno e individuiamo dove l'intelligenza
            artificiale può avere l'impatto maggiore.
          </Body>
          <Body className="mt-4 max-w-[50ch]">
            Alla fine del percorso ti consegniamo un documento con i casi d'uso
            individuati, ordinati per impatto e ritorno economico, con una stima
            di cosa serve per realizzarli. Il risultato è tuo, anche se decidi di
            fermarti lì.
          </Body>
          <div className="mt-8">
            <Cta />
          </div>
          <p className="mt-4 text-[13px] text-[#6B6B76]">{NOTE}</p>
        </div>
        <Glass className="p-6 md:p-8">
          <Info n={8} />
        </Glass>
      </div>
    </Section>
  )
}

// ── D · Domande e risposte ──────────────────────────────────────────────────
const qa = [
  {
    q: "Cos'è l'assessment AI?",
    a: "Il punto di partenza di ogni percorso di consulenza: un modo semplice per conoscersi e pensare in grande assieme.",
  },
  {
    q: "Come si svolge?",
    a: "Veniamo nella tua azienda e mappiamo i processi insieme alle persone che li vivono ogni giorno, per individuare dove l'intelligenza artificiale può avere l'impatto maggiore.",
  },
  {
    q: "Cosa ricevo alla fine?",
    a: "Un documento con i casi d'uso individuati, ordinati per impatto e ritorno economico, con una stima di cosa serve per realizzarli.",
  },
  {
    q: "E se poi decido di non proseguire?",
    a: "Il risultato è tuo, anche se decidi di fermarti lì.",
  },
]

export function AssessmentQa() {
  const [open, setOpen] = useState(0)
  return (
    <Section id="assessment">
      <Head />

      <Glass className="mx-auto mt-12 max-w-[880px] p-6 md:p-10">
        {qa.map((item, i) => {
          const isOpen = open === i
          return (
            <div key={item.q} className="border-b border-[#1B1A2E]/8 last:border-0">
              <h3 className="m-0">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 py-5 text-left"
                >
                  <span
                    className={`flex-1 text-[18px] font-medium tracking-[-0.015em] md:text-[20px] ${
                      isOpen ? "text-[#1B1A2E]" : "text-[#4A4A58]"
                    }`}
                  >
                    {item.q}
                  </span>
                  <span className="text-[#7C5CFA]">
                    {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </span>
                </button>
              </h3>
              <div
                className={`grid transition-[grid-template-rows] duration-200 ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <Body className="max-w-[62ch] pb-5">{item.a}</Body>
                </div>
              </div>
            </div>
          )
        })}
      </Glass>

      <div className="mt-10 text-center">
        <Cta variant="violet" />
        <p className="mt-4 text-[13px] text-[#6B6B76]">{NOTE}</p>
      </div>
    </Section>
  )
}

// ── E · Banda compatta ──────────────────────────────────────────────────────
export function AssessmentBanner() {
  return (
    <Section id="assessment">
      <Glass className="p-8 md:p-10">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-[46ch]">
            <Eyebrow>Da dove si parte</Eyebrow>
            <Title className="mt-4 text-[26px] md:text-[32px]">
              Ogni percorso inizia con un assessment AI
            </Title>
          </div>

          <ul className="flex flex-wrap gap-2">
            {["Un giorno in azienda", "Processi mappati", "Casi d'uso per impatto"].map((c) => (
              <li
                key={c}
                className="rounded-full border border-white/70 bg-white/60 px-4 py-2 text-[14px] text-[#4A4A58]"
              >
                {c}
              </li>
            ))}
          </ul>

          <div className="shrink-0">
            <Cta variant="violet" />
            <p className="mt-3 text-[13px] text-[#6B6B76]">{NOTE}</p>
          </div>
        </div>
      </Glass>
    </Section>
  )
}
