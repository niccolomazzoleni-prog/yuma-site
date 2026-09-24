import { useState, type ReactNode } from "react"
import { ChevronRight } from "lucide-react"
import { Body, Eyebrow, Glass, Section, Title } from "@/components/v3/glass"
import { Shot } from "@/components/v3/landing"

// Elenco selezionabile a sinistra, dettaglio con immagine a destra.
// Usato per i ruoli e, con i badge di stato, per i moduli.
export type SelectorItem = {
  label: string
  title: string
  desc: string
  badge?: ReactNode
}

export function SelectorBlock({
  id,
  eyebrow,
  title,
  items,
  imageRatio = "3 / 4",
}: {
  id: string
  eyebrow: string
  title: string
  items: SelectorItem[]
  imageRatio?: string
}) {
  const [active, setActive] = useState(0)

  return (
    <Section id={id} className="pt-0">
      <div className="mx-auto max-w-[820px] text-center">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Title className="mx-auto mt-5 max-w-[22ch]">{title}</Title>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <ul className="flex flex-col gap-2">
          {items.map((it, i) => (
            <li key={it.label}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-current={i === active}
                className={`flex w-full items-center justify-between gap-4 rounded-[16px] px-5 py-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFA] ${
                  i === active
                    ? "border border-white/70 bg-white/70 text-[#1B1A2E]"
                    : "border border-transparent text-[#4A4A58] hover:bg-white/40"
                }`}
              >
                <span className="flex flex-wrap items-center gap-3">
                  <span className="text-[16px] font-medium tracking-[-0.015em]">
                    {it.label}
                  </span>
                  {it.badge}
                </span>
                <ChevronRight
                  className={`h-4 w-4 shrink-0 ${i === active ? "text-[#7C5CFA]" : "text-[#A3A3AD]"}`}
                />
              </button>
            </li>
          ))}
        </ul>

        <Glass className="grid gap-6 p-7 md:grid-cols-[minmax(0,1fr)_220px] md:items-center md:p-8">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-[22px] font-medium tracking-[-0.02em] text-[#1B1A2E] md:text-[26px]">
                {items[active].title}
              </h3>
              {items[active].badge}
            </div>
            <Body className="mt-4">{items[active].desc}</Body>
          </div>
          <Shot label={`Schermata ${items[active].label}`} ratio={imageRatio} />
        </Glass>
      </div>
    </Section>
  )
}
