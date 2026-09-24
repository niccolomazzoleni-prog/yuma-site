import { Body, Glass } from "@/components/v3/glass"
import { Info } from "@/components/v3/infographic"

// Blocco problema: card staccate, testo e immagine che si alternano.
const NUMBERS = [10, 11, 12]

export function ProblemAlternating({
  items,
}: {
  items: { title: string; desc: string }[]
}) {
  return (
    <div className="mt-12 flex flex-col gap-6">
      {items.map((it, i) => {
        const imageFirst = i % 2 === 1
        return (
          <Glass
            key={it.title}
            className="grid items-center gap-8 p-8 md:grid-cols-2 md:gap-12 md:p-10"
          >
            <div className={imageFirst ? "md:order-2" : ""}>
              <span className="text-[12px] font-medium tabular-nums text-[#7C5CFA]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 max-w-[22ch] text-[24px] font-medium leading-[1.15] tracking-[-0.025em] text-[#1B1A2E] md:text-[30px]">
                {it.title}
              </h3>
              <Body className="mt-4 max-w-[52ch]">{it.desc}</Body>
            </div>
            <div className={imageFirst ? "md:order-1" : ""}>
              <Info n={NUMBERS[i] ?? i + 1} />
            </div>
          </Glass>
        )
      })}
    </div>
  )
}
