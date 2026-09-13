import { SectionRail } from "@/components/home/section-rail"

// Sezione 2 — credibilità. Headline un gradino sotto l'hero, sottotitolo,
// immagine placeholder e racconto dell'arrivo dell'AI.
export function Credibility() {
  return (
    <SectionRail id="perche-ora" label="Perché lo diciamo noi" tone="canvas" pad="xl">
      <h2 className="mx-auto max-w-[20ch] text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-ref-carbon sm:text-4xl md:text-5xl">
        La tecnologia più trasformativa di sempre è alla portata della tua
        azienda.
      </h2>

      <p className="mx-auto mt-6 max-w-[62ch] text-[17px] md:text-[20px] leading-[1.7] text-ref-graphite">
        Lo sappiamo perché per più di 10 anni abbiamo lavorato a progetti di
        trasformazione digitale nelle grandi aziende, toccando con mano i limiti
        degli strumenti e scontrandoci con la complessità di implementare e far
        utilizzare la tecnologia.
      </p>

      {/* Placeholder immagine, da sostituire con foto reale */}
      <div
        role="img"
        aria-label="Immagine (placeholder)"
        className="mx-auto mt-10 flex aspect-[16/9] max-w-[720px] items-center justify-center rounded-[16px] border border-ref-fog bg-ref-linen text-[13px] font-medium text-ref-ash"
      >
        Immagine placeholder
      </div>

      <p className="mx-auto mt-10 max-w-[62ch] text-[16px] md:text-[17px] leading-[1.7] text-ref-graphite">
        Quando è arrivata l'intelligenza artificiale, ci siamo resi conto di
        essere davanti a qualcosa di rivoluzionario: una tecnologia economica,
        facile da utilizzare, che comprende il linguaggio umano e lavora
        autonomamente al fianco delle persone.
      </p>

      <p className="mx-auto mt-4 max-w-[62ch] text-[16px] md:text-[17px] leading-[1.7] text-ref-graphite">
        Quello che prima richiedeva anni di lavoro, oggi si può costruire in
        pochi mesi e con una frazione dei costi. La barriera si è abbassata, e
        per la prima volta,{" "}
        <strong className="font-semibold text-ref-carbon">
          il potenziale trasformativo della tecnologia è alla portata di tutte
          le aziende.
        </strong>
      </p>
    </SectionRail>
  )
}
