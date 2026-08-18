import { useState } from "react"
import { Plus, X } from "lucide-react"
import { SectionRail } from "@/components/home/section-rail"

// Sezione 3 — accordion "app-like" (reference: What we do). Indice in pallino
// pieno Lavender quando aperto, hairline Fog, toggle +/×. Titoli placeholder.
const items = [
  {
    title: "Titolo uno",
    body: "Processi che prima richiedevano giornate di lavoro manuale, gestiti da agenti che lavorano al tuo fianco.",
  },
  {
    title: "Titolo due",
    body: "Dati complessi e frammentati, resi leggibili e interpretabili senza doverli estrarre e incrociare a mano ogni volta.",
  },
  {
    title: "Titolo tre",
    body: "Persone liberate dalle attività ripetitive, concentrate su ciò che conta davvero.",
  },
  {
    title: "Titolo quattro",
    body: "Trasformare la conoscenza delle singole persone in patrimonio condiviso aziendale.",
  },
]

export function Possibilities() {
  const [open, setOpen] = useState(0)

  return (
    <SectionRail id="cosa-e-possibile" label="Cosa è possibile" tone="linen">
      <h2 className="max-w-[18ch] text-balance text-[clamp(30px,3.4vw,36px)] font-semibold leading-[1.22] tracking-[-0.017em] text-ref-carbon">
        Cosa può fare l'AI nella mia azienda?
      </h2>

      <div className="mt-12">
        {items.map((it, i) => {
          const isOpen = open === i
          const idx = String(i + 1).padStart(2, "0")
          return (
            <div key={it.title} className="border-b border-ref-fog">
              <h3 className="m-0">
                <button
                  type="button"
                  id={`possibile-head-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`possibile-panel-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="group flex w-full items-center gap-5 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ref-lavender focus-visible:ring-offset-4 focus-visible:ring-offset-ref-linen"
                >
                  <span
                    aria-hidden
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-pill text-[13px] font-medium tabular-nums transition-colors duration-200 ease-out-soft ${
                      isOpen
                        ? "bg-ref-lavender text-white shadow-subtle"
                        : "text-ref-ash"
                    }`}
                  >
                    {idx}
                  </span>
                  <span
                    className={`flex-1 text-[24px] font-semibold leading-[1.17] tracking-[-0.013em] transition-colors duration-200 ease-out-soft ${
                      isOpen
                        ? "text-ref-carbon"
                        : "text-ref-ash group-hover:text-ref-carbon"
                    }`}
                  >
                    {it.title}
                  </span>
                  <span
                    aria-hidden
                    className="text-ref-ash transition-colors duration-200 ease-out-soft group-hover:text-ref-carbon"
                  >
                    {isOpen ? (
                      <X className="h-5 w-5" strokeWidth={1.75} />
                    ) : (
                      <Plus className="h-5 w-5" strokeWidth={1.75} />
                    )}
                  </span>
                </button>
              </h3>

              <div
                id={`possibile-panel-${i}`}
                role="region"
                aria-labelledby={`possibile-head-${i}`}
                className={`grid motion-safe:transition-[grid-template-rows] motion-safe:duration-200 motion-safe:ease-out-soft ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="max-w-[58ch] pb-8 pl-[60px] text-[16px] leading-[1.6] tracking-[-0.02em] text-ref-graphite">
                    {it.body}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </SectionRail>
  )
}
