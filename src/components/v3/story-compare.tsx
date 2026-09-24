import { useState } from "react"
import { GradientField } from "@/components/v3/glass"
import {
  StoryAlternating,
  StoryStickyScroll,
  StoryTimeline,
} from "@/components/v3/story"

// Confronto dei tre modi di raccontare il blocco 2, con le immagini dentro.
const options = [
  {
    key: "scroll",
    name: "A · Scrollytelling",
    claim: "Il testo scorre, il visual resta fermo e cambia. Racconto continuo.",
    node: <StoryStickyScroll />,
  },
  {
    key: "alternate",
    name: "B · Righe alternate",
    claim: "Quattro momenti, immagine e testo che si scambiano lato.",
    node: <StoryAlternating />,
  },
  {
    key: "timeline",
    name: "C · Linea del tempo",
    claim: "Le tappe una sotto l'altra, con i pallini che si accendono.",
    node: <StoryTimeline />,
  },
]

export default function StoryCompare() {
  const [active, setActive] = useState(0)
  return (
    <div className="relative min-h-screen text-[#1B1A2E]">
      <GradientField />
      <header className="sticky top-0 z-50 border-b border-white/50 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center gap-3 px-5 py-4">
          <span className="mr-3 text-[12px] uppercase tracking-[0.14em] text-[#A3A3AD]">
            Sezione 2 · storytelling
          </span>
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
        <div className="mx-auto max-w-[1180px] px-5 pb-4 text-[14px] text-[#6B6B76]">
          {options[active].claim}
        </div>
      </header>
      <main>{options[active].node}</main>
    </div>
  )
}
