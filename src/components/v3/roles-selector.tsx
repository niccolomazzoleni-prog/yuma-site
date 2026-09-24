import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { Body, Eyebrow, Glass, Section, Title } from "@/components/v3/glass"
import { Info } from "@/components/v3/infographic"
import type { LandingContent } from "@/lib/landing-content"

// Ruoli: elenco selezionabile a sinistra, dettaglio con immagine a destra.
export function RolesSelector({
  roles,
  infographics,
}: {
  roles: LandingContent["roles"]
  infographics?: number[]
}) {
  const [active, setActive] = useState(0)
  const items = roles.items

  return (
    <Section id="ruoli" className="pt-0">
      <div className="mx-auto max-w-[820px] text-center">
        <Eyebrow>{roles.label}</Eyebrow>
        <Title className="mx-auto mt-5 max-w-[20ch]">{roles.headline}</Title>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <ul className="flex flex-col gap-2">
          {items.map((it, i) => (
            <li key={it.role}>
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
                <span className="text-[17px] font-medium tracking-[-0.015em]">
                  {it.role}
                </span>
                <ChevronRight
                  className={`h-4 w-4 transition-transform ${
                    i === active ? "text-[#7C5CFA]" : "text-[#A3A3AD]"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        <Glass className="grid gap-6 p-7 md:grid-cols-[minmax(0,1fr)_200px] md:items-center md:p-8">
          <div>
            <h3 className="text-[22px] font-medium tracking-[-0.02em] text-[#1B1A2E] md:text-[26px]">
              {items[active].role}
            </h3>
            <Body className="mt-4">{items[active].desc}</Body>
          </div>
          {infographics ? (
            <Info n={infographics[active]} ratio="3 / 4" />
          ) : null}
        </Glass>
      </div>
    </Section>
  )
}
