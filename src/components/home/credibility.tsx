import { SectionRail } from "@/components/home/section-rail"

// Sezione 2 — perché lo diciamo noi. Racconto dell'arrivo dell'AI, confronto
// prima/dopo e nota sui dati (copy revisionato, blocco 2).
export function Credibility() {
  return (
    <SectionRail id="perche-ora" label="Perché lo diciamo noi" tone="canvas" pad="xl">
      <h2 className="mx-auto max-w-[20ch] text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-ref-carbon sm:text-4xl md:text-5xl">
        La tecnologia più avanzata che esiste, oggi, è alla portata delle
        aziende.
      </h2>

      <p className="mx-auto mt-6 max-w-[62ch] text-[17px] leading-[1.7] text-ref-graphite md:text-[20px]">
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

      <p className="mx-auto mt-10 max-w-[62ch] text-[16px] leading-[1.7] text-ref-graphite md:text-[17px]">
        Quando è arrivata l'intelligenza artificiale, ci siamo resi conto di
        essere davanti a qualcosa di rivoluzionario: una tecnologia economica,
        facile da utilizzare, che comprende il linguaggio umano e lavora
        autonomamente al fianco delle persone.
      </p>

      <p className="mx-auto mt-4 max-w-[62ch] text-[16px] leading-[1.7] text-ref-graphite md:text-[17px]">
        Quello che prima richiedeva anni di lavoro, oggi si può costruire in
        pochi mesi e con una frazione dei costi. La barriera si è abbassata, e
        per la prima volta{" "}
        <strong className="font-semibold text-ref-carbon">
          il potenziale trasformativo della tecnologia è alla portata di tutte
          le aziende.
        </strong>
      </p>

      {/* Perché stavolta è diverso: confronto prima / dopo */}
      <h3 className="mx-auto mt-20 max-w-[24ch] text-balance text-[26px] font-semibold leading-[1.2] tracking-tight text-ref-carbon md:text-[32px]">
        Perché stavolta è diverso
      </h3>

      <p className="mx-auto mt-6 max-w-[62ch] text-[16px] leading-[1.7] text-ref-graphite md:text-[17px]">
        Per anni la tecnologia ha chiesto alle persone di adattarsi a lei: gli
        strumenti erano complessi da utilizzare, e adottarli in azienda
        significava avere persone dedicate ai processi tecnologici.
      </p>

      <p className="mx-auto mt-4 max-w-[62ch] text-[16px] leading-[1.7] text-ref-graphite md:text-[17px]">
        Oggi si parla ai sistemi come si parla a un collega, con un messaggio o
        una nota vocale, e sono gli agenti AI a orchestrare e svolgere il lavoro
        sottostante.
      </p>

      <div className="mx-auto mt-12 grid max-w-[1000px] gap-5 text-left md:grid-cols-2">
        <article className="rounded-[24px] border border-ref-fog bg-ref-linen px-8 py-10">
          <h4 className="text-[13px] font-medium uppercase tracking-[0.08em] text-ref-ash">
            Prima
          </h4>
          <p className="mt-4 text-[16px] leading-[1.7] text-ref-graphite md:text-[17px]">
            Qualcuno imparava a usare il software: schermate, campi obbligatori,
            codici da ricordare. La persona si adattava alla procedura, e serviva
            qualcuno dedicato a inserire i dati, correggerli e tenere insieme i
            pezzi tra un gestionale e l'altro.
          </p>
        </article>
        <article className="rounded-[24px] border border-ref-fog bg-white px-8 py-10">
          <h4 className="text-[13px] font-medium uppercase tracking-[0.08em] text-ref-lavender">
            Dopo
          </h4>
          <p className="mt-4 text-[16px] leading-[1.7] text-ref-carbon md:text-[17px]">
            Si scrive o si manda un vocale, con le stesse parole che si userebbero
            con un collega: cosa è stato fatto, per quale cliente, quanto tempo è
            servito. Gli agenti AI lo interpretano e fanno girare il processo
            dietro le quinte. Le persone intervengono solo quando strettamente
            necessario.
          </p>
        </article>
      </div>

      {/* I tuoi dati restano tuoi */}
      <div className="mx-auto mt-12 max-w-[820px] rounded-[24px] border border-ref-fog bg-white px-8 py-10 text-left">
        <h3 className="text-[20px] font-semibold leading-[1.3] text-ref-carbon md:text-[22px]">
          I tuoi dati restano tuoi
        </h3>
        <p className="mt-4 text-[16px] leading-[1.7] text-ref-graphite md:text-[17px]">
          Nessuna condivisione con terze parti: le informazioni della tua azienda
          restano dentro il perimetro che definiamo insieme.
        </p>
        <p className="mt-3 text-[16px] leading-[1.7] text-ref-graphite md:text-[17px]">
          Nessun dato viene usato per addestrare modelli, né da noi, né dai
          nostri fornitori tecnologici.
        </p>
      </div>
    </SectionRail>
  )
}
