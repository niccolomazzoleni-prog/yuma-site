import { useState } from "react"
import { GradientField } from "@/components/v3/glass"
import {
  SystemsDiagram,
  SystemsNumbered,
  SystemsRows,
  SystemsSplit,
  SystemsTrustBand,
} from "@/components/v3/systems-variants"

const options = [
  {
    key: "schema",
    name: "A · Schema al centro",
    claim: "Il disegno di come i canali entrano, YUMA interpreta e ERP e CRM restano dove sono.",
    node: <SystemsDiagram />,
  },
  {
    key: "split",
    name: "B · Schema e elenco",
    claim: "Schema a sinistra, i tre punti in colonna a destra.",
    node: <SystemsSplit />,
  },
  {
    key: "numeri",
    name: "C · Tre riquadri",
    claim: "Tre lastre con il numero grande, semplice e ordinata.",
    node: <SystemsNumbered />,
  },
  {
    key: "garanzie",
    name: "D · Banda di garanzie",
    claim: "Una lastra sola: titolo a sinistra, le garanzie come etichette a destra.",
    node: <SystemsTrustBand />,
  },
  {
    key: "righe",
    name: "E · Righe editoriali",
    claim: "Solo filetti e testo, senza riquadri. La più leggera.",
    node: <SystemsRows />,
  },
]

export default function SystemsCompare() {
  const [active, setActive] = useState(0)
  return (
    <div className="relative min-h-screen text-[#010110]">
      <GradientField />
      <header className="sticky top-0 z-50 border-b border-white/50 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center gap-3 px-5 py-4">
          <span className="mr-3 text-[12px] uppercase tracking-[0.14em] text-[#A3A3AD]">
            I tuoi sistemi
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
