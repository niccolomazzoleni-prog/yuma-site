import { useState } from "react"
import {
  DirectionEditorial,
  DirectionGlass,
  DirectionProduct,
} from "@/components/explore/directions"

// Pagina di confronto: tre direzioni per la home, stesso copy e stessi token.
const tabs = [
  {
    key: "editoriale",
    name: "A · Editoriale sobrio",
    claim: "Il sito si legge. Gerarchia tipografica e filetti, niente card.",
    node: <DirectionEditorial />,
  },
  {
    key: "prodotto",
    name: "B · Prodotto in vetrina",
    claim: "Il software si vede subito. Hero divisa, bento, numeri, densità alta.",
    node: <DirectionProduct />,
  },
  {
    key: "vetro",
    name: "C · Vetro su gradiente",
    claim: "La qualità percepita convince prima. Lastre di vetro su viola vivo.",
    node: <DirectionGlass />,
  },
]

export default function ExplorePage() {
  const [active, setActive] = useState(0)
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 border-b border-[#E6E6EA] bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-3 px-6 py-4">
          <span className="mr-4 text-[13px] uppercase tracking-[0.14em] text-[#A3A3AD]">
            YUMA · direzioni
          </span>
          {tabs.map((t, i) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setActive(i)}
              className={`rounded-full px-4 py-2 text-[14px] font-medium transition-colors ${
                i === active
                  ? "bg-[#1B1A2E] text-white"
                  : "border border-[#E6E6EA] text-[#4A4A58] hover:border-[#1B1A2E]"
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>
        <div className="mx-auto max-w-[1280px] px-6 pb-4 text-[14px] text-[#6B6B76]">
          {tabs[active].claim}
        </div>
      </header>
      <main>{tabs[active].node}</main>
    </div>
  )
}
