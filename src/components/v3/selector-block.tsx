import { useState, type ReactNode } from "react"
import { ChevronRight } from "lucide-react"
import { Body, Eyebrow, Glass, Section, Title } from "@/components/v3/glass"
import { Shot } from "@/components/v3/shot"
import { Info } from "@/components/v3/infographic"
import { useTabs } from "@/lib/use-tabs"

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
  infographics,
}: {
  id: string
  eyebrow: string
  title: string
  items: SelectorItem[]
  imageRatio?: string
  /** numeri delle infografiche, una per voce; senza, resta il segnaposto "schermata" */
  infographics?: number[]
}) {
  const visual = (i: number, ratio: string) =>
    infographics?.[i] ? (
      <Info n={infographics[i]} ratio={ratio} className="rounded-[16px]" />
    ) : (
      <Shot label={`Schermata ${items[i].label}`} ratio={ratio} />
    )

  const [active, setActive] = useState(0)
  const { tab, panel } = useTabs(items.length, active, setActive)

  return (
    <Section id={id} className="pt-0">
      <div className="mx-auto max-w-[820px] text-center">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Title className="mx-auto mt-5 max-w-[22ch]">{title}</Title>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div role="tablist" aria-orientation="vertical" className="flex flex-col gap-2">
          {items.map((it, i) => (
            <div key={it.label}>
              <button
                type="button"
                {...tab(i)}
                onClick={() => setActive(i)}
                className={`flex w-full items-center justify-between gap-4 rounded-[16px] px-5 py-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFA] ${
                  i === active
                    ? "border border-white/70 bg-white/70 text-[#1D1D1F]"
                    : "border border-transparent text-[#424245] hover:bg-white/40"
                }`}
              >
                <span className="flex flex-wrap items-center gap-3">
                  <span className="text-[16px] font-medium tracking-[-0.015em]">
                    {it.label}
                  </span>
                  {it.badge}
                </span>
                <ChevronRight
                  aria-hidden
                  className={`h-4 w-4 shrink-0 transition-transform ${i === active ? "rotate-90 text-[#7C5CFA] lg:rotate-0" : "text-[#56565B]"}`}
                />
              </button>
              {/* su telefono il dettaglio si apre sotto la voce scelta, non in fondo all'elenco */}
              {i === active ? (
                <div className="px-5 pb-2 pt-3 lg:hidden">
                  <Body className="text-[15px]">{it.desc}</Body>
                  {infographics ? <div className="mt-4">{visual(i, "4 / 3")}</div> : null}
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div {...panel()} className="hidden lg:block">
        <Glass className="grid h-full gap-6 p-7 md:grid-cols-[minmax(0,1fr)_220px] md:items-center md:p-8">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-[22px] font-medium tracking-[-0.02em] text-[#1D1D1F] md:text-[26px]">
                {items[active].title}
              </h3>
              {items[active].badge}
            </div>
            <Body className="mt-4">{items[active].desc}</Body>
          </div>
          {visual(active, imageRatio)}
        </Glass>
        </div>
      </div>
    </Section>
  )
}
