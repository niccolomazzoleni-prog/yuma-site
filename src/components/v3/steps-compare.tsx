import { useState } from "react"
import { GradientField } from "@/components/v3/glass"
import {
  StepsChain,
  StepsLadder,
  StepsProgressBar,
  StepsSerpentine,
  StepsTrack,
  StepsWizard,
} from "@/components/v3/steps-variants"

const options = [
  { key: "track", name: "A · Percorso", claim: "Quattro tappe in riga, linea e frecce tra i numeri.", node: <StepsTrack /> },
  { key: "ladder", name: "B · Gradini", claim: "Ogni passo rientra di un gradino: si scende come una scala.", node: <StepsLadder /> },
  { key: "serpentina", name: "C · Serpentina", claim: "Due colonne sfalsate, con il numero grande e il filetto che prosegue.", node: <StepsSerpentine /> },
  { key: "barra", name: "D · Barra che avanza", claim: "Barra orizzontale che si riempie mentre scorri, i quattro passi sotto.", node: <StepsProgressBar /> },
  { key: "wizard", name: "E · Stepper cliccabile", claim: "Pillole numerate in alto: quelli fatti diventano spuntati, sotto il dettaglio.", node: <StepsWizard /> },
  { key: "catena", name: "F · Catena", claim: "Le quattro tappe come etichette collegate da frecce, testi sotto.", node: <StepsChain /> },
]

export default function StepsCompare() {
  const [active, setActive] = useState(0)
  return (
    <div className="relative min-h-screen text-[#010110]">
      <GradientField />
      <header className="sticky top-0 z-50 border-b border-white/50 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center gap-3 px-5 py-4">
          <span className="mr-3 text-[12px] uppercase tracking-[0.14em] text-[#A3A3AD]">
            Come si lavora insieme
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
