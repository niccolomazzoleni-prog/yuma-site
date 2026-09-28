import { Body, Glass } from "@/components/v3/glass"
import { PhotoSlot } from "@/components/v3/photo-slot"

// Blocco problema: card staccate, testo e immagine che si alternano.
const PHOTOS = [
  { n: 2, subject: "un'operatrice di back office alla scrivania che ricopia a mano ordini arrivati da email e WhatsApp, due monitor e il telefono" },
  { n: 3, subject: "un direttore commerciale che sfoglia report ed Excel stampati cercando di capire come va un cliente" },
  { n: 4, subject: "un agente commerciale in auto o da un cliente, al telefono, con il suo taccuino personale" },
]

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
              <h3 className="mt-3 max-w-[22ch] text-[24px] font-medium leading-[1.15] tracking-[-0.025em] text-[#1D1D1F] md:text-[30px]">
                {it.title}
              </h3>
              <Body className="mt-4 max-w-[52ch]">{it.desc}</Body>
            </div>
            <div className={imageFirst ? "md:order-1" : ""}>
              {PHOTOS[i] ? <PhotoSlot n={PHOTOS[i].n} subject={PHOTOS[i].subject} /> : null}
            </div>
          </Glass>
        )
      })}
    </div>
  )
}
