import { useState } from "react"
import { Eyebrow, GradientField, Section, Title } from "@/components/v3/glass"
import {
  CardsHeader,
  CardsHorizontal,
  CardsIcon,
  CardsRule,
  CardsTags,
  useSystemItems,
} from "@/components/v3/systems-cards"
import { clientInterfaceContent } from "@/lib/landing-content"

export default function SystemsCardsCompare() {
  const items = useSystemItems(clientInterfaceContent.systems)
  const [active, setActive] = useState(0)

  const options = [
    { key: "icon", name: "A · Icona in cerchio", claim: "Icona viola in alto, titolo e testo sotto.", node: <CardsIcon items={items} /> },
    { key: "rule", name: "B · Filetto e numero", claim: "Riga viola sul bordo alto e numero progressivo.", node: <CardsRule items={items} /> },
    { key: "header", name: "C · Intestazione piena", claim: "Fascia viola con icona e titolo, corpo chiaro sotto.", node: <CardsHeader items={items} /> },
    { key: "horizontal", name: "D · Orizzontali", claim: "Tre righe larghe: icona, titolo e testo sulla stessa linea.", node: <CardsHorizontal items={items} /> },
    { key: "tags", name: "E · Con etichette", claim: "Titolo, testo e in fondo le etichette di cosa copre.", node: <CardsTags items={items} /> },
  ]

  return (
    <div className="relative min-h-screen text-[#010110]">
      <GradientField />
      <header className="sticky top-0 z-50 border-b border-white/50 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center gap-3 px-5 py-4">
          <span className="mr-3 text-[12px] uppercase tracking-[0.14em] text-[#A3A3AD]">
            Le tre card dei sistemi
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

      <main>
        <Section>
          <div className="mx-auto max-w-[760px] text-center">
            <Eyebrow>I tuoi sistemi</Eyebrow>
            <Title className="mt-5">I tuoi sistemi restano al centro</Title>
          </div>
          <div className="mt-12">{options[active].node}</div>
        </Section>
      </main>
    </div>
  )
}
