import { SectionRail } from "@/components/home/section-rail"

// Sezione 3 — cosa è possibile. Quattro card (copy revisionato, blocco 3).
const items = [
  "Processi che prima richiedevano giornate di lavoro manuale, gestiti da agenti che lavorano al tuo fianco.",
  "Dati complessi e frammentati, resi leggibili e interpretabili senza doverli estrarre e incrociare a mano ogni volta.",
  "Persone liberate dalle attività ripetitive, concentrate su ciò che conta davvero.",
  "La conoscenza che oggi vive nella testa delle singole persone, trasformata in patrimonio dell'azienda.",
]

export function Possibilities() {
  return (
    <SectionRail id="cosa-e-possibile" label="Cosa è possibile" tone="linen">
      <h2 className="mx-auto max-w-[18ch] text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-ref-carbon sm:text-4xl md:text-5xl">
        Cosa può fare l'AI nella mia azienda?
      </h2>

      <ul className="mx-auto mt-16 grid max-w-[1100px] gap-5 md:grid-cols-2">
        {items.map((text, i) => (
          <li
            key={text}
            className="flex gap-5 rounded-[24px] border border-ref-fog bg-white px-8 py-10 text-left"
          >
            <span
              aria-hidden
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-pill bg-ref-lavender text-[13px] font-medium tabular-nums text-white shadow-subtle"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="text-[16px] leading-[1.7] text-ref-graphite md:text-[17px]">
              {text}
            </p>
          </li>
        ))}
      </ul>
    </SectionRail>
  )
}
