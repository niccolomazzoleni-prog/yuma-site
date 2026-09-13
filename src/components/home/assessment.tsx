import { ArrowRight } from "lucide-react"
import { SectionRail } from "@/components/home/section-rail"

// Sezione 8 — da dove si parte. Momento di conversione: pill Lavender piena
// (unico colore d'azione della pagina).
export function Assessment() {
  return (
    <>
      <SectionRail id="assessment" label="Da dove si parte" tone="canvas" pad="xl">
      <h2 className="mx-auto max-w-[26ch] text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl text-ref-carbon">
        Vuoi capire come la tua azienda può implementare l'AI? Prenota un
        assessment YUMA.
      </h2>

      <div className="mx-auto mt-6 max-w-[62ch] space-y-4 text-[17px] md:text-[20px] leading-[1.7] text-ref-graphite">
        <p>
          Veniamo nella tua azienda, mappiamo i processi insieme alle persone
          che li vivono ogni giorno e individuiamo dove l'intelligenza
          artificiale può avere l'impatto maggiore.
        </p>
        <p>
          Alla fine del percorso ti consegniamo un documento con i casi d'uso
          individuati, ordinati per impatto e ritorno economico, con una stima
          di cosa serve per realizzarli.
        </p>
      </div>

      <div className="mt-9">
        <a
          href="#contatti"
          className="group inline-flex items-center gap-2 rounded-pill bg-ref-lavender px-6 py-3 text-[15px] font-medium text-white shadow-subtle transition-transform duration-200 ease-out-soft hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ref-carbon focus-visible:ring-offset-2"
        >
          Richiedi il tuo assessment
          <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out-soft group-hover:translate-x-0.5" />
        </a>
        </div>
      </SectionRail>
    </>
  )
}
