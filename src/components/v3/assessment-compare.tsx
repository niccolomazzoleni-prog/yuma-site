import { useState } from "react"
import { GradientField } from "@/components/v3/glass"
import {
  AssessmentBanner,
  AssessmentQa,
  AssessmentReport,
  AssessmentThreeSteps,
  AssessmentTwoColumns,
} from "@/components/v3/assessment"

const options = [
  {
    key: "due-colonne",
    name: "A · Due colonne",
    claim: "A sinistra il percorso, a destra la lista di cosa ti resta in mano.",
    node: <AssessmentTwoColumns />,
  },
  {
    key: "tre-passi",
    name: "B · Tre passi",
    claim: "Veniamo da voi, mappiamo, consegniamo. Tre riquadri e la CTA sotto.",
    node: <AssessmentThreeSteps />,
  },
  {
    key: "documento",
    name: "C · Il documento",
    claim: "Si vede il report che ricevi, con i casi d'uso ordinati per impatto.",
    node: <AssessmentReport />,
  },
  {
    key: "domande",
    name: "D · Domande",
    claim: "Quattro domande e risposte: il testo si apre solo se interessa.",
    node: <AssessmentQa />,
  },
  {
    key: "banda",
    name: "E · Banda compatta",
    claim: "Una riga sola: titolo, tre punti chiave e bottone. La più leggera.",
    node: <AssessmentBanner />,
  },
]

export default function AssessmentCompare() {
  const [active, setActive] = useState(0)
  return (
    <div className="relative min-h-screen text-[#010110]">
      <GradientField />
      <header className="sticky top-0 z-50 border-b border-white/50 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center gap-3 px-5 py-4">
          <span className="mr-3 text-[12px] uppercase tracking-[0.14em] text-[#A3A3AD]">
            Da dove si parte
          </span>
          {options.map((o, i) => (
            <button
              key={o.key}
              type="button"
              onClick={() => setActive(i)}
              className={`rounded-full px-4 py-2 text-[14px] font-medium transition-colors ${
                i === active
                  ? "bg-[#010110] text-white"
                  : "border border-white/70 bg-white/60 text-[#4A4A58] hover:text-[#010110]"
              }`}
            >
              {o.name}
            </button>
          ))}
        </div>
        <div className="mx-auto max-w-[1180px] px-5 pb-4 text-[14px] text-[#6B6B76]">
          {options[active].claim}
        </div>
      </header>
      <main>{options[active].node}</main>
    </div>
  )
}
