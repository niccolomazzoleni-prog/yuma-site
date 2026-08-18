import { SectionRail } from "@/components/home/section-rail"

// Sezione 2 — credibilità. Stile reference: canvas bianco, testo Carbon/
// Graphite, foto in card con hairline Fog e radius immagine 8px. Copy invariato.
export function Credibility() {
  return (
    <SectionRail id="perche-ora" index="01" label="Perché lo diciamo noi" tone="canvas" pad="xl">
      <h2 className="max-w-[20ch] text-balance text-[clamp(30px,3.6vw,40px)] font-semibold leading-[1.18] tracking-[-0.017em] text-ref-carbon">
        La tecnologia più trasformativa di sempre è alla portata della tua
        azienda.
      </h2>

      <p className="mt-6 max-w-[62ch] text-[16px] leading-[1.6] tracking-[-0.02em] text-ref-graphite">
        Lo sappiamo perché per più di 10 anni abbiamo lavorato a progetti di
        trasformazione digitale nelle più grandi aziende italiane.
      </p>

      <figure className="mt-10 max-w-[560px] overflow-hidden rounded-[8px] border border-ref-fog shadow-subtle-3">
        <img
          src="/team.jpg"
          alt="Il team di YUMA a un evento"
          width={800}
          height={600}
          loading="lazy"
          className="h-auto w-full"
        />
      </figure>

      <p className="mt-10 max-w-[62ch] text-[16px] leading-[1.6] tracking-[-0.02em] text-ref-graphite">
        Ci siamo scontrati con la complessità di implementare e far utilizzare
        la tecnologia, e abbiamo toccato con mano i limiti degli strumenti.
      </p>

      <p className="mt-8 text-[24px] font-semibold leading-[1.17] tracking-[-0.013em] text-ref-carbon">
        Poi, tutto è cambiato..
      </p>

      <p className="mt-6 max-w-[62ch] text-[16px] leading-[1.6] tracking-[-0.02em] text-ref-graphite">
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
