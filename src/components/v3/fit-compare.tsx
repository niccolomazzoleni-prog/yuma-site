import { useState } from "react"
import { GradientField } from "@/components/v3/glass"
import { FitColumns, FitGrid, FitRows } from "@/components/v3/fit-variants"
import {
  FitChecklist,
  FitOrbit,
  FitSpotlight,
  FitStickers,
} from "@/components/v3/fit-exotic"

const options = [
  { key: "grid", name: "A · Due per due", claim: "Quattro riquadri con spunta, titolo breve e frase completa sotto.", node: <FitGrid /> },
  { key: "rows", name: "B · Righe numerate", claim: "Quattro righe su filetti, numero grande a sinistra. Nessun riquadro.", node: <FitRows /> },
  { key: "cols", name: "C · Quattro colonne", claim: "Quattro colonne con icona, titolo breve e frase sotto.", node: <FitColumns /> },
  { key: "check", name: "D · Checklist che si spunta", claim: "Le condizioni si spuntano mentre scorri, con il contatore quante te ne riconosci.", node: <FitChecklist /> },
  { key: "orbit", name: "E · Orbita", claim: "Le quattro condizioni attorno a un nucleo, su un cerchio tratteggiato.", node: <FitOrbit /> },
  { key: "sticker", name: "F · Adesivi inclinati", claim: "Card ruotate come adesivi, si raddrizzano al passaggio del mouse.", node: <FitStickers /> },
  { key: "spot", name: "G · Banda scura col faro", claim: "Fondo nero, griglia a filetti e un alone viola che segue il cursore.", node: <FitSpotlight /> },
]

export default function FitCompare() {
  const [active, setActive] = useState(0)
  return (
    <div className="relative min-h-screen text-[#1B1A2E]">
      <GradientField />
      <header className="sticky top-0 z-50 border-b border-white/50 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center gap-3 px-5 py-4">
          <span className="mr-3 text-[12px] uppercase tracking-[0.14em] text-[#A3A3AD]">
            Fa per te se
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
