import { ArrowRight } from "lucide-react"
import { SectionRail } from "@/components/home/section-rail"

// Sezione 4 — soluzioni. Card stile pricing-tier reference: bianche, 1px Fog,
// radius 24, nessuna ombra. Link testuale Carbon con freccia. Copy invariato.
const products = [
  {
    name: "Yuma Projects",
    desc: "Aiuta le aziende che lavorano a commessa a tenere sotto controllo margini, costi e avanzamento in tempo reale. Raccoglie i dati dal campo come arrivano, con messaggi, foto e note vocali, e li trasforma in un quadro sempre aggiornato di ogni commessa.",
  },
  {
    name: "Yuma Client Interface",
    desc: "Gestisce ordini, richieste e reclami che arrivano dai tuoi clienti. Li interpreta e li porta già strutturati nei tuoi sistemi, liberando il tuo team dalle attività di data entry manuali e ripetitive.",
  },
]

export function Solutions() {
  return (
    <SectionRail id="soluzioni" index="03" label="Le nostre soluzioni" tone="canvas">
      <h2 className="max-w-[22ch] text-balance text-[clamp(30px,3.4vw,36px)] font-semibold leading-[1.22] tracking-[-0.017em] text-ref-carbon">
        Dai nostri progetti di consulenza sono nati due prodotti digitali.
      </h2>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {products.map((p) => (
          <article
            key={p.name}
            className="flex flex-col rounded-[24px] border border-ref-fog bg-white p-8"
          >
            <h3 className="text-[20px] font-semibold leading-[1.4] tracking-[-0.016em] text-ref-carbon">
              {p.name}
            </h3>
            <p className="mt-4 flex-1 text-[16px] leading-[1.6] tracking-[-0.02em] text-ref-graphite">
              {p.desc}
            </p>
            <a
              href="#contatti"
              className="group mt-6 inline-flex items-center gap-2 self-start rounded-pill text-[14px] font-medium text-ref-carbon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ref-lavender focus-visible:ring-offset-4"
            >
              Scopri di più
              <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out-soft group-hover:translate-x-0.5" />
            </a>
          </article>
        ))}
      </div>
    </SectionRail>
  )
}
