import { ArrowRight } from "lucide-react"
import { SectionRail } from "@/components/home/section-rail"

// Sezione 8 — da dove si parte. Momento di conversione: pill Lavender piena
// (unico colore d'azione della pagina) + callout mint-wash per la garanzia.
export function Assessment() {
  return (
    <SectionRail id="assessment" label="Da dove si parte" tone="canvas" pad="xl">
      <h2 className="max-w-[26ch] text-balance text-[clamp(30px,3.4vw,36px)] font-semibold leading-[1.22] tracking-[-0.017em] text-ref-carbon">
        Tutti i nostri progetti iniziano con un assessment AI: un modo semplice
        per conoscersi e pensare in grande assieme.
      </h2>

      <div className="mt-7 max-w-[62ch] space-y-4 text-[16px] leading-[1.6] tracking-[-0.02em] text-ref-graphite">
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

      <p className="mt-6 inline-block rounded-[8px] bg-ref-mintwash px-4 py-2.5 text-[14px] font-medium leading-[1.43] text-ref-carbon">
        Il risultato è tuo, anche se decidi di fermarti lì.
      </p>

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
  )
}
