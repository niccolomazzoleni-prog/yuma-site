import { Body, Eyebrow, Glass, Lead, Section, Title } from "@/components/v3/glass"
import { clientInterfaceContent } from "@/lib/landing-content"

// Cinque soluzioni grafiche per il blocco "Molti back office commerciali
// condividono gli stessi problemi". Riferimenti 21st: Content With
// Illustration (8462), Stacking Cards (25275), Comparison Section (26826),
// Feature Carousel (10466).

const p = clientInterfaceContent.problem
const items = p.items ?? []

import { InboxArt, ScatterArt, KeyholderArt } from "@/components/v3/problem-art"

const arts = [InboxArt, ScatterArt, KeyholderArt]

function Head() {
  return (
    <div className="mx-auto max-w-[820px] text-center">
      <Eyebrow>{p.label}</Eyebrow>
      <Title className="mx-auto mt-5 max-w-[24ch]">{p.headline}</Title>
    </div>
  )
}

// ── A · Tre colonne, ognuna con la sua illustrazione ────────────────────────
export function ProblemIllustrated() {
  return (
    <Section>
      <Head />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {items.map((it, i) => {
          const Art = arts[i]
          return (
            <Glass key={it.title} className="flex h-full flex-col p-7">
              <div className="rounded-[14px] bg-white/45 p-4">
                <Art />
              </div>
              <h3 className="mt-6 text-[20px] font-medium leading-[1.2] tracking-[-0.02em] text-[#1B1A2E]">
                {it.title}
              </h3>
              <Body className="mt-3 text-[15px]">{it.desc}</Body>
            </Glass>
          )
        })}
      </div>
    </Section>
  )
}

// ── B · Carte staccate, testo e immagine che si alternano ───────────────────
export function ProblemStack() {
  return (
    <Section>
      <Head />
      <div className="mx-auto mt-14 flex max-w-[1000px] flex-col gap-6">
        {items.map((it, i) => {
          const Art = arts[i]
          const imageFirst = i % 2 === 1
          return (
            <Glass
              key={it.title}
              className="grid items-center gap-8 p-8 md:grid-cols-2 md:gap-12 md:p-10"
            >
              <div className={imageFirst ? "md:order-2" : ""}>
                <span className="text-[12px] font-medium tabular-nums text-[#7C5CFA]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 max-w-[22ch] text-[24px] font-medium leading-[1.15] tracking-[-0.025em] text-[#1B1A2E] md:text-[30px]">
                  {it.title}
                </h3>
                <Body className="mt-4 max-w-[52ch]">{it.desc}</Body>
              </div>

              <div className={`rounded-[18px] bg-white/45 p-6 ${imageFirst ? "md:order-1" : ""}`}>
                <Art />
              </div>
            </Glass>
          )
        })}
      </div>
    </Section>
  )
}

// ── C · Uno grande e due piccoli ────────────────────────────────────────────
export function ProblemAsymmetric() {
  const [first, ...rest] = items
  const First = arts[0]
  return (
    <Section>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
        <div>
          <Eyebrow>{p.label}</Eyebrow>
          <Title className="mt-5 max-w-[18ch]">{p.headline}</Title>
        </div>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        <Glass className="flex flex-col p-8 md:p-10">
          <div className="rounded-[16px] bg-white/45 p-6">
            <First />
          </div>
          <h3 className="mt-7 text-[24px] font-medium leading-[1.15] tracking-[-0.025em] text-[#1B1A2E] md:text-[28px]">
            {first.title}
          </h3>
          <Body className="mt-4">{first.desc}</Body>
        </Glass>

        <div className="grid gap-5">
          {rest.map((it, i) => {
            const Art = arts[i + 1]
            return (
              <Glass key={it.title} className="grid gap-5 p-7 md:grid-cols-[minmax(0,1fr)_140px] md:items-center">
                <div>
                  <h3 className="text-[19px] font-medium leading-[1.2] tracking-[-0.02em] text-[#1B1A2E] md:text-[21px]">
                    {it.title}
                  </h3>
                  <Body className="mt-3 text-[15px]">{it.desc}</Body>
                </div>
                <div className="hidden rounded-[12px] bg-white/45 p-2 md:block">
                  <Art />
                </div>
              </Glass>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

// ── D · La giornata tipo del back office ────────────────────────────────────
const day = [
  { time: "09:00", label: "Gli ordini arrivano" },
  { time: "11:30", label: "Coda nelle ore di punta" },
  { time: "17:00", label: "Errori da correggere a valle" },
]

export function ProblemDay() {
  return (
    <Section>
      <Head />
      <Lead className="mx-auto mt-5 max-w-[56ch] text-center">
        Una giornata tipo, vista dal back office.
      </Lead>

      <div className="mt-14 grid gap-0 md:grid-cols-3">
        {items.map((it, i) => (
          <div
            key={it.title}
            className={`relative border-t border-[#1B1A2E]/10 py-8 md:border-t-0 md:px-8 md:first:pl-0 md:last:pr-0 ${
              i > 0 ? "md:border-l md:border-t-0" : ""
            }`}
          >
            <div className="flex items-baseline gap-3">
              <span className="rounded-full bg-[#7C5CFA]/12 px-3 py-1 text-[13px] font-medium tabular-nums text-[#5B3FD9]">
                {day[i].time}
              </span>
              <span className="text-[13px] text-[#8A8A97]">{day[i].label}</span>
            </div>
            <h3 className="mt-5 text-[20px] font-medium leading-[1.2] tracking-[-0.02em] text-[#1B1A2E]">
              {it.title}
            </h3>
            <Body className="mt-3 text-[15px]">{it.desc}</Body>
          </div>
        ))}
      </div>
    </Section>
  )
}

// ── E · Problema a sinistra, conseguenza a destra ───────────────────────────
const consequences = [
  "Persone dedicate a un lavoro che non genera ritorno",
  "Decisioni prese senza il quadro completo",
  "Il patrimonio di relazioni esce dalla porta con la persona",
]

export function ProblemConsequences() {
  return (
    <Section>
      <Head />
      <Glass className="mt-12 overflow-hidden p-2 md:p-3">
        <div className="grid grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] border-b border-[#1B1A2E]/10 px-5 py-4 md:px-7">
          <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#A3A3AD]">
            Cosa succede
          </span>
          <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#E0457B]">
            Cosa costa
          </span>
        </div>
        {items.map((it, i) => (
          <div
            key={it.title}
            className="grid grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start gap-6 border-b border-[#1B1A2E]/8 px-5 py-7 last:border-0 md:px-7"
          >
            <div>
              <h3 className="text-[19px] font-medium leading-[1.2] tracking-[-0.02em] text-[#1B1A2E] md:text-[21px]">
                {it.title}
              </h3>
              <Body className="mt-3 max-w-[52ch] text-[15px]">{it.desc}</Body>
            </div>
            <p className="text-[16px] leading-[1.5] text-[#4A4A58]">
              {consequences[i]}
            </p>
          </div>
        ))}
      </Glass>
    </Section>
  )
}
