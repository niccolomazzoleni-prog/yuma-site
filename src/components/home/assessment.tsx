import { ArrowRight } from "lucide-react"

// Sezione 8 — Da dove si parte (scura). Assessment + CTA. Copy invariato.
export function Assessment() {
  return (
    <section
      id="assessment"
      className="relative w-full overflow-hidden bg-[#0b1026] text-white [scroll-margin-top:80px]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 45% at 78% 4%, rgba(108,15,242,0.20), rgba(11,16,38,0) 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#b18cff]">
          Da dove si parte
        </p>
        <h2 className="mt-6 max-w-[24ch] text-balance text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl md:text-[2.75rem]">
          Tutti i nostri progetti iniziano con un assessment AI: un modo semplice
          per conoscersi e pensare in grande assieme.
        </h2>

        <div className="mt-8 max-w-[62ch] space-y-5 text-lg leading-relaxed text-white/70">
          <p>
            Veniamo nella tua azienda, mappiamo i processi insieme alle persone
            che li vivono ogni giorno e individuiamo dove l'intelligenza
            artificiale può avere l'impatto maggiore.
          </p>
          <p>
            Alla fine del percorso ti consegniamo un documento con i casi d'uso
            individuati, ordinati per impatto e ritorno economico, con una stima
            di cosa serve per realizzarli. Il risultato è tuo, anche se decidi di
            fermarti lì.
          </p>
        </div>

        <a
          href="#contatti"
          className="group mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-[#0b1026] transition hover:scale-[1.03]"
        >
          Richiedi il tuo assessment
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  )
}
