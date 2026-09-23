import { ArrowRight, Minus } from "lucide-react"
import { DashboardMock, LayersArt } from "@/components/v2/mockups"

// Tre direzioni visive per la home YUMA, costruite sul copy approvato e sui
// token del progetto. Riferimenti 21st: Editorial Hero (19075), Content Section
// (28297), HeroSection Enterprise (8156), bento grid 01 (9594), Stats Section
// with Text (1195), Logo Cloud Marquee (26922), GlassRefractionHero (8754),
// Hero Static Radial Gradient (19151).

const HERO_SUB =
  "YUMA affianca le imprese nel percorso di adozione AI unendo consulenza aziendale, know how tecnico e implementazione di progetti su misura."

const POSSIBILITIES = [
  "Processi che prima richiedevano giornate di lavoro manuale, gestiti da agenti che lavorano al tuo fianco.",
  "Dati complessi e frammentati, resi leggibili senza doverli estrarre e incrociare a mano ogni volta.",
  "Persone liberate dalle attività ripetitive, concentrate su ciò che conta davvero.",
  "La conoscenza che vive nella testa delle singole persone, trasformata in patrimonio dell'azienda.",
]

// ── A · Editoriale sobrio ─────────────────────────────────────────────────────
// Ipotesi: il pubblico legge. Niente mockup, niente card: gerarchia tipografica,
// filetti sottili e un indice laterale che segue la lettura.

export function DirectionEditorial() {
  const index = ["Perché ora", "Cosa è possibile", "Soluzioni", "Come lavoriamo", "Assessment"]
  return (
    <div className="bg-[#FBFBF9] text-[#12121A]">
      <div className="mx-auto grid max-w-[1180px] gap-12 px-6 py-20 lg:grid-cols-[180px_minmax(0,1fr)] lg:py-28">
        {/* indice laterale */}
        <aside className="hidden lg:block">
          <div className="sticky top-16 space-y-3 text-[13px] text-[#6B6B76]">
            <div className="mb-5 text-[12px] uppercase tracking-[0.16em] text-[#A3A3AD]">
              Indice
            </div>
            {index.map((i, n) => (
              <div key={i} className={n === 0 ? "text-[#12121A]" : ""}>
                <span className="mr-3 tabular-nums text-[#C4C4CC]">
                  {String(n + 1).padStart(2, "0")}
                </span>
                {i}
              </div>
            ))}
          </div>
        </aside>

        <div>
          <h1 className="max-w-[20ch] text-balance text-[40px] font-medium leading-[1.03] tracking-[-0.04em] sm:text-[58px] lg:text-[68px]">
            Liberiamo il potenziale inespresso della tua azienda implementando
            l'AI dove serve davvero.
          </h1>

          <div className="mt-10 flex flex-col gap-8 border-t border-[#E3E3DE] pt-8 md:flex-row">
            <p className="max-w-[46ch] flex-1 text-[17px] leading-[1.55] text-[#4A4A58]">
              {HERO_SUB}
            </p>
            <div className="flex flex-col gap-3 md:w-[240px]">
              <a
                href="#"
                className="inline-flex items-center justify-between rounded-[4px] bg-[#12121A] px-5 py-3.5 text-[15px] font-medium text-white"
              >
                Scopri i nostri prodotti
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-between rounded-[4px] border border-[#D8D8D2] px-5 py-3.5 text-[15px]"
              >
                Richiedi informazioni
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* blocco di lettura, niente card */}
          <div className="mt-20 border-t border-[#E3E3DE] pt-10">
            <div className="mb-8 flex items-baseline gap-4">
              <span className="text-[12px] uppercase tracking-[0.16em] text-[#A3A3AD]">
                02
              </span>
              <h2 className="text-[26px] font-medium tracking-[-0.03em] md:text-[34px]">
                Cosa può fare l'AI nella mia azienda
              </h2>
            </div>
            <ol className="divide-y divide-[#E3E3DE] border-y border-[#E3E3DE]">
              {POSSIBILITIES.map((p, i) => (
                <li key={p} className="grid gap-4 py-7 md:grid-cols-[64px_minmax(0,1fr)]">
                  <span className="text-[13px] tabular-nums text-[#A3A3AD]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="max-w-[62ch] text-[17px] leading-[1.55] text-[#4A4A58]">
                    {p}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-8 flex items-center gap-2 text-[14px] text-[#6B6B76]">
              <Minus className="h-4 w-4" /> Viola usato solo sui link e sulle
              azioni, mai come superficie.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── B · Prodotto in vetrina ───────────────────────────────────────────────────
// Ipotesi: il pubblico vuole vedere il software. Hero divisa con mockup, bento
// delle capacità, numeri e loghi. Densità alta, scansione veloce.

const BENTO = [
  { t: "Dashboard di commessa", d: "Margine, costi e avanzamento aggiornati ogni giorno.", span: "md:col-span-2" },
  { t: "Vocali che diventano dati", d: "Il campo comunica come già fa.", span: "" },
  { t: "Ordini da ogni canale", d: "Email, WhatsApp, PDF e vocali in un solo ingresso.", span: "" },
  { t: "Alert sugli scostamenti", d: "Superata la soglia, il PM riceve la notifica.", span: "md:col-span-2" },
]

const STATS = [
  { v: "10+", l: "anni nelle grandi trasformazioni" },
  { v: "2", l: "prodotti nati dai progetti" },
  { v: "4", l: "settori serviti" },
  { v: "1 giorno", l: "tempo di risposta" },
]

export function DirectionProduct() {
  return (
    <div className="bg-white text-[#010110]">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-24">
        <div>
          <span className="inline-flex rounded-full border border-[#E6E6EA] px-3 py-1 text-[12px] font-medium text-[#6B6B76]">
            Consulenza + software
          </span>
          <h1 className="mt-6 max-w-[16ch] text-balance text-[40px] font-medium leading-[1.04] tracking-[-0.04em] sm:text-[52px] lg:text-[60px]">
            L'AI dove serve davvero, dentro il lavoro che fai già.
          </h1>
          <p className="mt-6 max-w-[46ch] text-[17px] leading-[1.55] text-[#6B6B76]">
            {HERO_SUB}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-[8px] bg-[#7C5CFA] px-5 py-3 text-[15px] font-medium text-white">
              Scopri i nostri prodotti <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#" className="inline-flex items-center rounded-[8px] border border-[#E6E6EA] px-5 py-3 text-[15px] font-medium">
              Richiedi informazioni
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-[#E6E6EA] pt-8 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.l}>
                <div className="text-[26px] font-medium tracking-[-0.03em]">{s.v}</div>
                <div className="mt-1 text-[13px] leading-[1.4] text-[#6B6B76]">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <DashboardMock />
      </div>

      {/* bento delle capacità */}
      <div className="mx-auto max-w-[1280px] px-6 pb-24">
        <div className="grid gap-4 md:grid-cols-3">
          {BENTO.map((b) => (
            <article
              key={b.t}
              className={`rounded-[14px] border border-[#E6E6EA] bg-[#FAFAFC] p-7 ${b.span}`}
            >
              <h3 className="text-[19px] font-medium tracking-[-0.015em]">{b.t}</h3>
              <p className="mt-2 text-[15px] leading-[1.55] text-[#6B6B76]">{b.d}</p>
            </article>
          ))}
        </div>

        {/* riga loghi */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 border-t border-[#E6E6EA] pt-10">
          <span className="text-[12px] uppercase tracking-[0.14em] text-[#A3A3AD]">
            Dove lavoriamo
          </span>
          {["Impianti", "Manifattura", "Distribuzione B2B", "Farmaceutico"].map((s) => (
            <span key={s} className="text-[15px] text-[#6B6B76]">
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── C · Vetro su gradiente ────────────────────────────────────────────────────
// Ipotesi: la qualità percepita convince prima delle parole. Fondo viola vivo,
// contenuto su lastre di vetro, navigazione a pillola sospesa.

export function DirectionGlass() {
  return (
    <div className="relative overflow-hidden bg-[#F7F7FB] text-[#010110]">
      {/* macchie di colore sotto il vetro */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 55% at 15% 20%, rgba(124,92,250,0.55), rgba(124,92,250,0) 70%), radial-gradient(55% 50% at 85% 75%, rgba(224,69,123,0.4), rgba(224,69,123,0) 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative mx-auto max-w-[1180px] px-6 py-20 lg:py-24">
        {/* nav a pillola */}
        <div className="mx-auto mb-16 flex w-fit items-center gap-6 rounded-full border border-white/70 bg-white/55 px-6 py-3 text-[14px] text-[#4A4A58] backdrop-blur-xl">
          <span className="font-semibold tracking-[0.16em] text-[#010110]">YUMA</span>
          <span>Soluzioni</span>
          <span>Come lavoriamo</span>
          <span className="rounded-full bg-[#7C5CFA] px-4 py-1.5 text-white">Prenota una call</span>
        </div>

        <div className="mx-auto max-w-[840px] text-center">
          <h1 className="text-balance text-[40px] font-medium leading-[1.02] tracking-[-0.04em] sm:text-[54px] lg:text-[64px]">
            Liberiamo il potenziale inespresso della tua azienda.
          </h1>
          <p className="mx-auto mt-6 max-w-[52ch] text-[17px] leading-[1.5] text-[#4A4A58] md:text-[19px]">
            {HERO_SUB}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#" className="rounded-full bg-[#010110] px-6 py-3 text-[15px] font-medium text-white">
              Scopri i nostri prodotti
            </a>
            <a href="#" className="rounded-full border border-white/70 bg-white/60 px-6 py-3 text-[15px] font-medium backdrop-blur-xl">
              Richiedi informazioni
            </a>
          </div>
        </div>

        {/* lastre di vetro */}
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {POSSIBILITIES.slice(0, 3).map((p, i) => (
            <article
              key={p}
              className="rounded-[24px] border border-white/65 bg-white/45 p-8 backdrop-blur-2xl"
              style={{
                boxShadow:
                  "0 40px 90px -45px rgba(1,1,16,0.35), inset 0 1px 0 rgba(255,255,255,0.85)",
              }}
            >
              <span className="text-[12px] uppercase tracking-[0.14em] text-[#7C5CFA]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-5 text-[16px] leading-[1.5] text-[#2A2A38]">{p}</p>
            </article>
          ))}
        </div>

        {/* lastra larga con visual */}
        <div
          className="mt-5 grid items-center gap-8 rounded-[24px] border border-white/65 bg-white/45 p-10 backdrop-blur-2xl md:grid-cols-[minmax(0,1fr)_320px]"
          style={{
            boxShadow:
              "0 40px 90px -45px rgba(1,1,16,0.35), inset 0 1px 0 rgba(255,255,255,0.85)",
          }}
        >
          <div>
            <h2 className="max-w-[18ch] text-[26px] font-medium leading-[1.1] tracking-[-0.03em] md:text-[34px]">
              Dai progetti di consulenza sono nati due prodotti.
            </h2>
            <p className="mt-4 max-w-[52ch] text-[16px] leading-[1.5] text-[#4A4A58]">
              YUMA Projects tiene sotto controllo margini e avanzamento delle
              commesse. YUMA Client Interface porta ordini e richieste già
              strutturati nei tuoi sistemi.
            </p>
          </div>
          <div className="rounded-[16px] bg-[#0A0A0F] p-6">
            <LayersArt />
          </div>
        </div>
      </div>
    </div>
  )
}
