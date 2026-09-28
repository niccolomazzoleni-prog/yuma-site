import { useState } from "react"
import { GradientField } from "@/components/v3/glass"
import {
  CompareArrows,
  CompareCards,
  CompareFlip,
  CompareSlider,
  CompareStrike,
  CompareToggle,
} from "@/components/v3/compare-variants"

const options = [
  { key: "strike", name: "A · Barrato e spuntato", claim: "Due metà: a sinistra le abitudini di oggi barrate, a destra la versione YUMA con la spunta. (21st · Comparison Section)", node: <CompareStrike /> },
  { key: "slider", name: "B · Cursore", claim: "Un cursore da trascinare scopre, riga per riga, come cambia il lavoro. (21st · Comparison Slider)", node: <CompareSlider /> },
  { key: "cards", name: "C · Due schede", claim: "Oggi in una scheda spenta, YUMA in una scheda in evidenza con la chiamata alla demo. (21st · Us vs Them)", node: <CompareCards /> },
  { key: "toggle", name: "D · Interruttore", claim: "Un interruttore gira tutte le righe insieme; entrando in vista si gira da solo una volta. (21st · Feature Comparison Table)", node: <CompareToggle /> },
  { key: "arrows", name: "E · Freccia", claim: "Ogni riga è una pillola: problema, freccia, soluzione. Entrano una dopo l'altra. (21st · Problem Cards Scroll)", node: <CompareArrows /> },
  { key: "flip", name: "F · Carte da girare", claim: "Quattro carte: davanti il problema, dietro la soluzione in viola pieno. Si girano al passaggio o al tocco.", node: <CompareFlip /> },
]

export default function ComparePage() {
  const [active, setActive] = useState(0)
  return (
    <div className="relative min-h-screen text-[#1D1D1F]">
      <GradientField />
      <header className="sticky top-0 z-50 border-b border-white/50 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center gap-3 px-5 py-4">
          <span className="mr-3 text-[12px] uppercase tracking-[0.14em] text-[#A1A1A6]">Oggi / Con YUMA</span>
          {options.map((o, i) => (
            <button
              key={o.key}
              type="button"
              onClick={() => setActive(i)}
              className={`rounded-full px-4 py-2 text-[14px] font-medium transition-colors ${
                i === active
                  ? "bg-[#1D1D1F] text-white"
                  : "border border-white/70 bg-white/60 text-[#424245] hover:text-[#1D1D1F]"
              }`}
            >
              {o.name}
            </button>
          ))}
        </div>
        <div className="mx-auto max-w-[1180px] px-5 pb-4 text-[14px] text-[#6E6E73]">{options[active].claim}</div>
      </header>
      <main key={options[active].key}>{options[active].node}</main>
    </div>
  )
}
