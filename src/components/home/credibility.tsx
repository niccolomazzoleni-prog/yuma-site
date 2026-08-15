import { SectionRail } from "@/components/home/section-rail"

// Sezione 2 — credibilità (bianco caldo). Forma: narrazione editoriale + foto.
// Firma A: rail-indice sinistro. Token brand, zero hex. Copy invariato.
export function Credibility() {
  return (
    <SectionRail id="perche-ora" index="01" label="Perché lo diciamo noi" tone="warm" pad="xl">
      <h2 className="max-w-[18ch] text-balance text-h2 text-neutral-900">
        La tecnologia più trasformativa di sempre è alla portata della tua
        azienda.
      </h2>

      <p className="mt-7 max-w-[62ch] text-body text-neutral-600">
        Lo sappiamo perché per più di 10 anni abbiamo lavorato a progetti di
        trasformazione digitale nelle più grandi aziende italiane.
      </p>

      <figure className="mt-10 max-w-[560px] overflow-hidden rounded-card border border-neutral-200 shadow-card">
        <img
          src="/team.jpg"
          alt="Il team di YUMA a un evento"
          width={800}
          height={600}
          loading="lazy"
          className="h-auto w-full"
        />
      </figure>

      <p className="mt-10 max-w-[62ch] text-body text-neutral-600">
        Ci siamo scontrati con la complessità di implementare e far utilizzare
        la tecnologia, e abbiamo toccato con mano i limiti degli strumenti.
      </p>

      <p className="mt-9 text-h3 text-neutral-900">Poi, tutto è cambiato..</p>

      <p className="mt-7 max-w-[62ch] text-body text-neutral-600">
        Quando è arrivata l'intelligenza artificiale, ci siamo resi conto di
        essere davanti a qualcosa di rivoluzionario: una tecnologia economica,
        facile da utilizzare, che comprende il linguaggio umano e lavora
        autonomamente al fianco delle persone.
      </p>

      <p className="mt-5 max-w-[62ch] text-body text-neutral-600">
        Quello che prima richiedeva anni di lavoro, oggi si può costruire in
        pochi mesi e con una frazione dei costi. La barriera si è abbassata, e
        per la prima volta,{" "}
        <strong className="font-semibold text-neutral-900">
          il potenziale trasformativo della tecnologia è alla portata di tutte
          le aziende.
        </strong>
      </p>
    </SectionRail>
  )
}
