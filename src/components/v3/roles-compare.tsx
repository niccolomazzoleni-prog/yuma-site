import { useState } from "react"
import { GradientField } from "@/components/v3/glass"
import {
  RolesAccordion,
  RolesCards,
  RolesSelector,
  RolesSpecList,
  RolesSplit,
} from "@/components/v3/roles-variants"

const options = [
  {
    key: "spec",
    name: "A · Scheda tecnica",
    claim: "Righe con icona, ruolo e descrizione. Compatta, si legge tutta insieme.",
    node: <RolesSpecList />,
  },
  {
    key: "cards",
    name: "B · Tre schede",
    claim: "Tre riquadri affiancati con immagine in alto, titolo e testo.",
    node: <RolesCards />,
  },
  {
    key: "selector",
    name: "C · Selettore",
    claim: "Elenco dei ruoli a sinistra, dettaglio con immagine a destra.",
    node: <RolesSelector />,
  },
  {
    key: "accordion",
    name: "D · Fisarmonica",
    claim: "Un ruolo alla volta: si apre e mostra testo e immagine.",
    node: <RolesAccordion />,
  },
  {
    key: "split",
    name: "E · Immagine grande",
    claim: "Immagine verticale a sinistra che cambia, ruoli in elenco a destra.",
    node: <RolesSplit />,
  },
]

export default function RolesCompare() {
  const [active, setActive] = useState(0)
  return (
    <div className="relative min-h-screen text-[#010110]">
      <GradientField />
      <header className="sticky top-0 z-50 border-b border-white/50 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center gap-3 px-5 py-4">
          <span className="mr-3 text-[12px] uppercase tracking-[0.14em] text-[#A3A3AD]">
            Per chi è pensato
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
