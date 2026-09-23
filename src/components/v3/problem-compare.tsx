import { useState } from "react"
import { GradientField } from "@/components/v3/glass"
import {
  ProblemAsymmetric,
  ProblemConsequences,
  ProblemDay,
  ProblemIllustrated,
  ProblemStack,
} from "@/components/v3/problem-variants"

const options = [
  {
    key: "illustrato",
    name: "A · Illustrazioni",
    claim: "Tre colonne, ognuna con la sua illustrazione disegnata a codice.",
    node: <ProblemIllustrated />,
  },
  {
    key: "pila",
    name: "B · Carte impilate",
    claim: "Le tre carte si sovrappongono e si sollevano al passaggio del mouse.",
    node: <ProblemStack />,
  },
  {
    key: "asimmetrico",
    name: "C · Uno grande, due piccoli",
    claim: "Il problema principale occupa metà sezione, gli altri due stanno a lato.",
    node: <ProblemAsymmetric />,
  },
  {
    key: "giornata",
    name: "D · La giornata tipo",
    claim: "I tre problemi raccontati come momenti della giornata: 09:00, 11:30, 17:00.",
    node: <ProblemDay />,
  },
  {
    key: "costo",
    name: "E · Cosa succede / cosa costa",
    claim: "Tabella a due colonne: il problema a sinistra, il prezzo che pagate a destra.",
    node: <ProblemConsequences />,
  },
]

export default function ProblemCompare() {
  const [active, setActive] = useState(0)
  return (
    <div className="relative min-h-screen text-[#010110]">
      <GradientField />
      <header className="sticky top-0 z-50 border-b border-white/50 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center gap-3 px-5 py-4">
          <span className="mr-3 text-[12px] uppercase tracking-[0.14em] text-[#A3A3AD]">
            Il problema
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
