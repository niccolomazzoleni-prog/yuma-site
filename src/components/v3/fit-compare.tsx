import { useState } from "react"
import { GradientField } from "@/components/v3/glass"
import { FitColumns, FitGrid, FitRows } from "@/components/v3/fit-variants"

const options = [
  { key: "grid", name: "A · Due per due", claim: "Quattro riquadri con spunta, titolo breve e frase completa sotto.", node: <FitGrid /> },
  { key: "rows", name: "B · Righe numerate", claim: "Quattro righe su filetti, numero grande a sinistra. Nessun riquadro.", node: <FitRows /> },
  { key: "cols", name: "C · Quattro colonne", claim: "Quattro colonne con icona, titolo breve e frase sotto.", node: <FitColumns /> },
]

export default function FitCompare() {
  const [active, setActive] = useState(0)
  return (
    <div className="relative min-h-screen text-[#010110]">
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
