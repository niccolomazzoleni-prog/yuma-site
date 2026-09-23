import { useState } from "react"
import { GradientField, Eyebrow, Title, Section } from "@/components/v3/glass"
import {
  CardsShowcase,
  CardsSplit,
  CardsWindow,
} from "@/components/v3/product-cards"

const options = [
  {
    key: "showcase",
    name: "A · Vetrina",
    claim: "Screenshot grande in alto, testo sotto. Due schede affiancate.",
    node: <CardsShowcase />,
  },
  {
    key: "split",
    name: "B · Divisa",
    claim: "Immagine a fianco del testo, una scheda per riga, lati alternati.",
    node: <CardsSplit />,
  },
  {
    key: "window",
    name: "C · Finestra",
    claim: "Lo screenshot dentro la cornice di un'app, con la barra in alto.",
    node: <CardsWindow />,
  },
]

export default function CardsCompare() {
  const [active, setActive] = useState(0)
  return (
    <div className="relative min-h-screen text-[#010110]">
      <GradientField />
      <header className="sticky top-0 z-50 border-b border-white/50 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center gap-3 px-5 py-4">
          <span className="mr-3 text-[12px] uppercase tracking-[0.14em] text-[#A3A3AD]">
            Schede prodotto
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
            <Eyebrow>Le nostre soluzioni</Eyebrow>
            <Title className="mt-5">
              Dai nostri progetti di consulenza sono nati due prodotti digitali.
            </Title>
          </div>
          <div className="mt-12">{options[active].node}</div>
        </Section>
      </main>
    </div>
  )
}
