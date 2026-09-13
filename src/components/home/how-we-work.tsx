import { SectionRail } from "@/components/home/section-rail"

// Sezione 5 — come lavoriamo. Sequenza reale → righe numerate con hairline
// Fog (stile tabella reference), non tre colonne identiche. Copy invariato.
const steps = [
  {
    n: "01",
    title: "Definiamo assieme il tuo percorso",
    desc: "Partiamo dai tuoi obiettivi di business. Mettiamo a fuoco insieme dove vuoi arrivare, poi entriamo nei processi per individuare le aree di intervento a maggior valore e disegnare una roadmap di trasformazione AI su misura.",
  },
  {
    n: "02",
    title: "Individuiamo gli strumenti migliori",
    desc: "Conosciamo gli strumenti, le loro potenzialità e i loro limiti. Individuiamo le tecnologie adatte al tuo caso e studiamo la loro applicazione per massimizzare l'impatto sulla tua azienda.",
  },
  {
    n: "03",
    title: "Li implementiamo a supporto dei tuoi processi",
    desc: "Costruiamo il sistema dentro il tuo modo di lavorare, con l'obiettivo che tutto risulti facile da capire e da usare. Formiamo il tuo team e gli diamo gli strumenti per moltiplicare la propria produttività.",
  },
]

export function HowWeWork() {
  return (
    <SectionRail id="come-lavoriamo" label="Come lavoriamo" tone="linen">
      <h2 className="max-w-[16ch] text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl text-ref-carbon">
        Come lavoriamo
      </h2>

      <ol className="mt-16">
        {steps.map((s, i) => (
          <li
            key={s.n}
            className={`grid grid-cols-[48px_1fr] gap-x-5 py-8 md:grid-cols-[64px_1fr] ${
              i === 0 ? "" : "border-t border-ref-fog"
            }`}
          >
            <span
              aria-hidden
              className="text-[13px] font-medium tabular-nums leading-[1.6] text-ref-ash"
            >
              {s.n}
            </span>
            <div>
              <h3 className="text-[20px] md:text-[22px] font-semibold leading-[1.3] tracking-[-0.01em] text-ref-carbon">
                {s.title}
              </h3>
              <p className="mt-3 max-w-[58ch] text-[16px] md:text-[17px] leading-[1.7] text-ref-graphite">
                {s.desc}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </SectionRail>
  )
}
