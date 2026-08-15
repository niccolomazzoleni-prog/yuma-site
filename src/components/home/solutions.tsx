import { ArrowRight } from "lucide-react"

// Sezione 4 — Le nostre soluzioni (chiara). Due prodotti. Copy invariato.
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
    <section
      id="soluzioni"
      className="relative w-full text-[#201C18] [scroll-margin-top:80px]"
      style={{
        background:
          "radial-gradient(70% 45% at 50% -6%, rgba(108,15,242,0.07), rgba(243,239,234,0) 60%), #F3EFEA",
      }}
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6C0FF2]">
          Le nostre soluzioni
        </p>
        <h2 className="mt-6 max-w-[20ch] text-balance text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl md:text-5xl">
          Dai nostri progetti di consulenza sono nati due prodotti digitali.
        </h2>

        <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-2">
          {products.map((p) => (
            <div
              key={p.name}
              className="flex flex-col rounded-2xl border border-black/10 bg-white/60 p-8 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-semibold tracking-tight">{p.name}</h3>
              <p className="mt-4 flex-1 text-lg leading-relaxed text-[#4A443C]">
                {p.desc}
              </p>
              <a
                href="#contatti"
                className="group mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-[#6C0FF2]"
              >
                Scopri di più
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
