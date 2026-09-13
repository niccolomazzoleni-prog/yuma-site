import { SectionRail } from "@/components/home/section-rail"

// Sezione 2 — credibilità. Headline alla stessa scala dell'hero, seguita dal
// racconto dell'arrivo dell'AI. Canvas bianco, testo Carbon/Graphite.
export function Credibility() {
  return (
    <SectionRail id="perche-ora" label="Perché lo diciamo noi" tone="canvas" pad="xl">
      <h2 className="max-w-[20ch] text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-ref-carbon sm:text-5xl md:text-6xl">
        La tecnologia più trasformativa di sempre è alla portata della tua
        azienda.
      </h2>

      <p className="mt-10 max-w-[62ch] text-[16px] leading-[1.6] tracking-[-0.02em] text-ref-graphite">
        Quando è arrivata l'intelligenza artificiale, ci siamo resi conto di
        essere davanti a qualcosa di rivoluzionario: una tecnologia economica,
        facile da utilizzare, che comprende il linguaggio umano e lavora
        autonomamente al fianco delle persone.
      </p>

      <p className="mt-4 max-w-[62ch] text-[16px] leading-[1.6] tracking-[-0.02em] text-ref-graphite">
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
