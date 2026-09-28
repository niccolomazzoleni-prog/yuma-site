import { useState } from "react"
import { GradientField } from "@/components/v3/glass"
import {
  SolutionsAccordion,
  SolutionsAchievements,
  SolutionsColumns,
  SolutionsRows,
  SolutionsSplit,
} from "@/components/v3/solutions-variants"

const options = [
  { key: "columns", name: "A · Tre colonne", claim: "Solo spunta verde, titolo e testo, su tre colonne senza riquadri. La più leggera. (21st · Feature with advantages)", node: <SolutionsColumns /> },
  { key: "rows", name: "B · Una scheda", claim: "Un'unica scheda di vetro con tre righe separate da un filetto. (21st · Key Value List)", node: <SolutionsRows /> },
  { key: "split", name: "C · Titolo a lato", claim: "Titolo fermo a sinistra, i tre punti scorrono a destra tra due filetti. (21st · Features 9)", node: <SolutionsSplit /> },
  { key: "achievements", name: "D · Traguardi", claim: "Tre pillole con un anello verde completo: ogni problema chiuso. (21st · Achievement List)", node: <SolutionsAchievements /> },
  { key: "accordion", name: "E · Fisarmonica", claim: "Si leggono subito i tre titoli con la spunta; il dettaglio si apre al clic. (21st · Accordion)", node: <SolutionsAccordion /> },
]

export default function SolutionsPage() {
  const [active, setActive] = useState(0)
  return (
    <div className="relative min-h-screen text-[#1B1A2E]">
      <GradientField />
      <header className="sticky top-0 z-50 border-b border-white/50 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center gap-3 px-5 py-4">
          <span className="mr-3 text-[12px] uppercase tracking-[0.14em] text-[#A3A3AD]">Come ti aiuta</span>
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
        <div className="mx-auto max-w-[1180px] px-5 pb-4 text-[14px] text-[#6B6B76]">{options[active].claim}</div>
      </header>
      <main key={options[active].key}>{options[active].node}</main>
    </div>
  )
}
