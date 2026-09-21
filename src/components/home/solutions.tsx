import { ArrowRight } from "lucide-react"
import { SectionRail } from "@/components/home/section-rail"
import { links } from "@/lib/links"

// Sezione 4 — soluzioni. Le due card portano alle pagine prodotto; sotto, la
// CTA secondaria per chi cerca solo il software (copy revisionato, blocco 4).
const products = [
  {
    name: "YUMA Projects",
    desc: "Aiuta le aziende che lavorano a commessa a tenere sotto controllo margini, costi e avanzamento di ogni progetto. Raccoglie i dati dal campo come arrivano, con messaggi, foto e note vocali, e li trasforma in un quadro aggiornato ogni giorno di ogni commessa.",
    href: links.projects,
  },
  {
    name: "YUMA Client Interface",
    desc: "Gestisce ordini, richieste e reclami che arrivano dai tuoi clienti. Li interpreta e li porta già strutturati nei tuoi sistemi, liberando il tuo team dalle attività di data entry manuali e ripetitive.",
    href: links.clientInterface,
  },
]

export function Solutions() {
  return (
    <SectionRail id="soluzioni" label="Le nostre soluzioni" tone="canvas">
      <h2 className="mx-auto max-w-[22ch] text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-ref-carbon sm:text-4xl md:text-5xl">
        Dai nostri progetti di consulenza sono nati due prodotti digitali.
      </h2>

      <div className="mt-16 grid gap-5 md:grid-cols-2">
        {products.map((p) => (
          <article
            key={p.name}
            className="flex flex-col items-center rounded-[24px] border border-ref-fog bg-white px-8 py-10 text-center"
          >
            {/* Placeholder immagine prodotto, da sostituire con screenshot reale */}
            <div
              role="img"
              aria-label={`Immagine ${p.name} (placeholder)`}
              className="mb-8 flex aspect-[16/10] w-full items-center justify-center rounded-[16px] border border-ref-fog bg-ref-linen text-[13px] font-medium text-ref-ash"
            >
              Immagine {p.name}
            </div>
            <h3 className="text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-ref-carbon md:text-[22px]">
              {p.name}
            </h3>
            <p className="mt-4 flex-1 text-[16px] leading-[1.7] text-ref-graphite md:text-[17px]">
              {p.desc}
            </p>
            <a
              href={p.href}
              className="group mt-8 inline-flex items-center gap-2 self-center rounded-pill bg-ref-lavender px-6 py-3 text-[15px] font-medium text-white shadow-subtle transition-transform duration-200 ease-out-soft hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ref-carbon focus-visible:ring-offset-2"
            >
              Scopri di più
              <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out-soft group-hover:translate-x-0.5" />
            </a>
          </article>
        ))}
      </div>

      <p className="mt-12 text-[16px] leading-[1.7] text-ref-graphite md:text-[17px]">
        Ti interessa solo il software?{" "}
        <a
          href="#contatti"
          className="font-semibold text-ref-carbon underline decoration-ref-lavender decoration-2 underline-offset-4 transition-colors duration-200 hover:text-ref-lavender"
        >
          Richiedi una demo
        </a>
      </p>
    </SectionRail>
  )
}
