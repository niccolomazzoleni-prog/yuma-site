import { useState } from "react"
import { GradientField } from "@/components/v3/glass"
import {
  ProcessBigNumber,
  ProcessStepper,
  ProcessTrack,
  ProcessVerticalLine,
} from "@/components/v3/process"

const options = [
  {
    key: "track",
    name: "A · Percorso",
    claim: "Tre tappe in riga, collegate da una linea con le frecce.",
    node: <ProcessTrack />,
  },
  {
    key: "line",
    name: "B · Linea che si riempie",
    claim: "Timeline verticale: la linea viola avanza mentre scorri, i passi fatti diventano spuntati.",
    node: <ProcessVerticalLine />,
  },
  {
    key: "big",
    name: "C · Numero gigante",
    claim: "A sinistra il numero resta fermo e cambia, a destra scorrono i passaggi.",
    node: <ProcessBigNumber />,
  },
  {
    key: "stepper",
    name: "D · Stepper",
    claim: "Tappe incolonnate dentro un'unica lastra, connettore tra un passo e l'altro.",
    node: <ProcessStepper />,
  },
]

export default function ProcessCompare() {
  const [active, setActive] = useState(0)
  return (
    <div className="relative min-h-screen text-[#1B1A2E]">
      <GradientField />
      <header className="sticky top-0 z-50 border-b border-white/50 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center gap-3 px-5 py-4">
          <span className="mr-3 text-[12px] uppercase tracking-[0.14em] text-[#A3A3AD]">
            Come lavoriamo
          </span>
          {options.map((o, i) => (
            <button
              key={o.key}
              type="button"
              onClick={() => setActive(i)}
              className={`rounded-full px-4 py-2 text-[14px] font-medium transition-colors ${
                i === active
                  ? "bg-[#1B1A2E] text-white"
                  : "border border-white/70 bg-white/60 text-[#4A4A58] hover:text-[#1B1A2E]"
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
