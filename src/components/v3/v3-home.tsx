import { ArrowRight } from "lucide-react"
import { VerticalTabs, type VerticalTabItem } from "@/components/ui/vertical-tabs"
import { ParticleGlobe } from "@/components/ui/particle-globe"
import { AgentsFlow, DataBars, FreedRows, KnowledgeLayers } from "@/components/v3/visuals"
import { WhatsAppBar } from "@/components/home/whatsapp-bar"
import { links } from "@/lib/links"

// Versione 3 — direzione scelta: vetro su gradiente viola.
// "Cosa può fare l'AI" usa le schede verticali (21st.dev vertical-tabs).

const GLASS =
  "rounded-[28px] border border-white/65 bg-white/45 backdrop-blur-2xl"
const GLASS_SHADOW = {
  boxShadow: "0 40px 90px -45px rgba(1,1,16,0.35), inset 0 1px 0 rgba(255,255,255,0.85)",
}

const possibilities: VerticalTabItem[] = [
  {
    id: "01",
    title: "Processi che si muovono da soli",
    description:
      "Quello che prima richiedeva giornate di lavoro manuale, gestito da agenti che lavorano al tuo fianco.",
    visual: <AgentsFlow />,
  },
  {
    id: "02",
    title: "Dati finalmente leggibili",
    description:
      "Dati complessi e frammentati, resi leggibili e interpretabili senza doverli estrarre e incrociare a mano ogni volta.",
    visual: <DataBars />,
  },
  {
    id: "03",
    title: "Persone su ciò che conta",
    description:
      "Persone liberate dalle attività ripetitive, concentrate su ciò che conta davvero.",
    visual: <FreedRows />,
  },
  {
    id: "04",
    title: "Conoscenza che resta in azienda",
    description:
      "La conoscenza che oggi vive nella testa delle singole persone, trasformata in patrimonio dell'azienda.",
    visual: <KnowledgeLayers />,
  },
]

function GradientField() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        background:
          "radial-gradient(55% 45% at 12% 12%, rgba(124,92,250,0.55), rgba(124,92,250,0) 70%), radial-gradient(50% 45% at 88% 30%, rgba(224,69,123,0.35), rgba(224,69,123,0) 70%), radial-gradient(60% 50% at 50% 95%, rgba(124,92,250,0.35), rgba(124,92,250,0) 70%), #F7F7FB",
      }}
    />
  )
}

export default function V3Home() {
  return (
    <div className="relative min-h-screen text-[#010110]">
      <GradientField />

      {/* nav a pillola */}
      <header className="sticky top-0 z-50 px-5 pt-5">
        <div className="mx-auto flex w-full max-w-[1180px] items-center justify-between gap-6 rounded-full border border-white/70 bg-white/55 px-5 py-2.5 backdrop-blur-xl md:px-6">
          <a href="#top" className="text-[15px] font-semibold tracking-[0.18em]">
            YUMA
          </a>
          <nav className="hidden items-center gap-7 text-[14px] text-[#4A4A58] lg:flex">
            <a className="transition-colors hover:text-[#010110]" href="#possibilita">
              Cosa è possibile
            </a>
            <a className="transition-colors hover:text-[#010110]" href="#soluzioni">
              Soluzioni
            </a>
            <a className="transition-colors hover:text-[#010110]" href={links.projects}>
              YUMA Projects
            </a>
            <a className="transition-colors hover:text-[#010110]" href={links.clientInterface}>
              Client Interface
            </a>
          </nav>
          <a
            href="#contatti"
            className="rounded-full bg-[#7C5CFA] px-4 py-2 text-[14px] font-medium text-white"
          >
            Prenota una call
          </a>
        </div>
      </header>

      <main id="top">
        {/* hero */}
        <section className="mx-auto max-w-[1180px] px-5 pb-16 pt-16 md:pt-24">
          <div className="mx-auto max-w-[860px] text-center">
            <h1 className="text-balance text-[38px] font-medium leading-[1.02] tracking-[-0.04em] sm:text-[52px] lg:text-[64px]">
              Liberiamo il potenziale inespresso della tua azienda implementando
              l'AI dove serve davvero.
            </h1>
            <p className="mx-auto mt-6 max-w-[54ch] text-[17px] leading-[1.5] text-[#4A4A58] md:text-[19px]">
              YUMA affianca le imprese nel percorso di adozione AI unendo
              consulenza aziendale, know how tecnico e implementazione di
              progetti su misura.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#soluzioni"
                className="group inline-flex items-center gap-2 rounded-full bg-[#010110] px-6 py-3 text-[15px] font-medium text-white transition-transform hover:-translate-y-0.5"
              >
                Scopri i nostri prodotti
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contatti"
                className="inline-flex items-center rounded-full border border-white/70 bg-white/60 px-6 py-3 text-[15px] font-medium backdrop-blur-xl transition-colors hover:bg-white/80"
              >
                Richiedi informazioni
              </a>
            </div>
          </div>

          {/* lastra con il globo */}
          <div className={`mt-14 overflow-hidden ${GLASS}`} style={GLASS_SHADOW}>
            <div className="grid items-center gap-8 p-8 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] md:p-10">
              <div>
                <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#7C5CFA]">
                  La barriera si è abbassata
                </p>
                <h2 className="mt-5 max-w-[18ch] text-[26px] font-medium leading-[1.06] tracking-[-0.03em] md:text-[34px]">
                  Quello che prima richiedeva anni di lavoro, oggi si costruisce
                  in pochi mesi.
                </h2>
                <p className="mt-4 max-w-[50ch] text-[16px] leading-[1.5] text-[#4A4A58]">
                  Per la prima volta il potenziale trasformativo della tecnologia
                  è alla portata di tutte le aziende, non solo delle più grandi.
                </p>
              </div>
              <ParticleGlobe className="h-[300px] md:h-[340px]" density={5200} />
            </div>
          </div>
        </section>

        {/* cosa è possibile — schede verticali */}
        <section id="possibilita" className="mx-auto max-w-[1180px] px-5 py-20 md:py-28">
          <VerticalTabs
            title="Cosa può fare l'AI nella mia azienda"
            eyebrow="cosa è possibile"
            items={possibilities}
          />
        </section>

        {/* soluzioni */}
        <section id="soluzioni" className="mx-auto max-w-[1180px] px-5 pb-20 md:pb-28">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#7C5CFA]">
              Le nostre soluzioni
            </p>
            <h2 className="mt-5 text-balance text-[30px] font-medium leading-[1.05] tracking-[-0.035em] md:text-[44px]">
              Dai progetti di consulenza sono nati due prodotti digitali.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {[
              {
                name: "YUMA Projects",
                desc: "Tiene sotto controllo margini, costi e avanzamento di ogni commessa. Raccoglie i dati dal campo come arrivano, con messaggi, foto e note vocali.",
                href: links.projects,
              },
              {
                name: "YUMA Client Interface",
                desc: "Gestisce ordini, richieste e reclami dei tuoi clienti. Li interpreta e li porta già strutturati nei tuoi sistemi, senza data entry manuale.",
                href: links.clientInterface,
              },
            ].map((p) => (
              <article key={p.name} className={`flex flex-col p-8 md:p-10 ${GLASS}`} style={GLASS_SHADOW}>
                <h3 className="text-[22px] font-medium tracking-[-0.02em] md:text-[26px]">
                  {p.name}
                </h3>
                <p className="mt-4 flex-1 text-[16px] leading-[1.5] text-[#4A4A58]">
                  {p.desc}
                </p>
                <a
                  href={p.href}
                  className="group mt-7 inline-flex items-center gap-2 self-start rounded-full bg-[#7C5CFA] px-5 py-2.5 text-[15px] font-medium text-white transition-transform hover:-translate-y-0.5"
                >
                  Scopri di più
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* assessment */}
        <section id="contatti" className="mx-auto max-w-[1180px] px-5 pb-28">
          <div className={`mx-auto max-w-[900px] p-10 text-center md:p-14 ${GLASS}`} style={GLASS_SHADOW}>
            <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#7C5CFA]">
              Da dove si parte
            </p>
            <h2 className="mx-auto mt-5 max-w-[22ch] text-balance text-[30px] font-medium leading-[1.05] tracking-[-0.035em] md:text-[44px]">
              Vuoi capire come la tua azienda può implementare l'AI?
            </h2>
            <p className="mx-auto mt-5 max-w-[58ch] text-[16px] leading-[1.5] text-[#4A4A58] md:text-[18px]">
              Ogni percorso di consulenza inizia con un assessment AI: mappiamo i
              processi con le persone che li vivono ogni giorno e ti consegniamo i
              casi d'uso ordinati per impatto. Il risultato è tuo, anche se decidi
              di fermarti lì.
            </p>
            <a
              href={links.home + "#contatti"}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#010110] px-6 py-3 text-[15px] font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              Richiedi il tuo assessment
              <ArrowRight className="h-4 w-4" />
            </a>
            <p className="mt-5 text-[13px] text-[#6B6B76]">
              Ti rispondiamo entro un giorno lavorativo.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/60 bg-white/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-6 px-5 py-12 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="text-[15px] font-semibold tracking-[0.18em]">YUMA</div>
            <div className="mt-3 space-y-1 text-[13px] leading-[1.6] text-[#6B6B76]">
              <div>Yuma Tx Srl · P. IVA 14244440963</div>
              <div>Via G. Leopardi 14, 20123 Milano (MI)</div>
              <div>PEC yumatxsrl@pec.it · SDI WY7PJ6k</div>
            </div>
          </div>
          <nav className="flex flex-col gap-2 text-[14px] text-[#6B6B76]">
            <a href={links.projects} className="hover:text-[#010110]">YUMA Projects</a>
            <a href={links.clientInterface} className="hover:text-[#010110]">YUMA Client Interface</a>
            <a href={links.home} className="hover:text-[#010110]">Versione 1 del sito</a>
          </nav>
        </div>
      </footer>

      <WhatsAppBar />
    </div>
  )
}
