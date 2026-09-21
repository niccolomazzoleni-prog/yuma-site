import { useState } from "react"
import {
  ArrowRight,
  Boxes,
  Database,
  MessageSquare,
  Radar,
  Sparkles,
  Users,
} from "lucide-react"
import { Band, ButtonLink, Card, Eyebrow, Lead, SectionTitle, TickGrid } from "@/components/v2/ui"
import { DashboardMock, FunnelArt, LayersArt } from "@/components/v2/mockups"
import { links } from "@/lib/links"

// ── Nav ───────────────────────────────────────────────────────────────────────

export function V2Nav() {
  const [open, setOpen] = useState(false)
  const items = [
    { label: "Cosa è possibile", href: "#possibilita" },
    { label: "Prodotti", href: "#prodotti" },
    { label: "Come lavoriamo", href: "#processo" },
    { label: "Team", href: "#team" },
  ]
  return (
    <header className="sticky top-0 z-50 border-b border-[#E6E6EA] bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-6 px-5 py-3.5 md:px-10">
        <a href="#top" className="text-[17px] font-semibold tracking-[0.18em] text-[#010110]">
          YUMA
        </a>
        <nav className="hidden items-center gap-8 text-[14px] text-[#6B6B76] lg:flex">
          {items.map((i) => (
            <a key={i.href} href={i.href} className="transition-colors hover:text-[#010110]">
              {i.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ButtonLink href="#contatti" className="hidden sm:inline-flex">
            Prenota una call
          </ButtonLink>
          <button
            type="button"
            aria-label={open ? "Chiudi il menu" : "Apri il menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-[6px] border border-[#E6E6EA] px-3 py-2 text-[14px] lg:hidden"
          >
            Menu
          </button>
        </div>
      </div>
      {open ? (
        <nav className="border-t border-[#E6E6EA] bg-white px-5 pb-6 lg:hidden">
          {items.map((i) => (
            <a
              key={i.href}
              href={i.href}
              onClick={() => setOpen(false)}
              className="block border-b border-[#E6E6EA] py-4 text-[16px] text-[#010110]"
            >
              {i.label}
            </a>
          ))}
          <ButtonLink href="#contatti" className="mt-5 w-full">
            Prenota una call
          </ButtonLink>
        </nav>
      ) : null}
    </header>
  )
}

// ── Hero ──────────────────────────────────────────────────────────────────────

export function V2Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white">
      <TickGrid />
      <div className="relative mx-auto grid w-full max-w-[1280px] items-center gap-14 px-5 pb-24 pt-20 md:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] md:px-10 md:pb-32 md:pt-24">
        <div>
          <h1 className="max-w-[16ch] text-balance text-[42px] font-medium leading-[1.02] tracking-[-0.045em] text-[#010110] sm:text-[58px] md:text-[72px]">
            L'AI dove serve davvero, dentro il lavoro che fai già.
          </h1>
          <Lead className="mt-7 max-w-[46ch]">
            YUMA affianca le imprese nel percorso di adozione AI unendo
            consulenza aziendale, know how tecnico e implementazione di progetti
            su misura.
          </Lead>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="#prodotti">
              Scopri i nostri prodotti
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="#contatti" variant="ghost">
              Richiedi informazioni
            </ButtonLink>
          </div>
          <p className="mt-10 text-[13px] text-[#6B6B76]">
            Impianti e costruzioni · manifattura · distribuzione B2B ·
            farmaceutico
          </p>
        </div>

        <DashboardMock />
      </div>
    </section>
  )
}

// ── Banda numeri ──────────────────────────────────────────────────────────────

const stats = [
  { value: "10+", unit: "anni", label: "Di trasformazione digitale nelle grandi aziende italiane" },
  { value: "2", unit: "prodotti", label: "Nati dai progetti di consulenza sul campo" },
  { value: "4", unit: "settori", label: "Impianti, manifattura, distribuzione, farmaceutico" },
  { value: "1", unit: "giorno", label: "Il tempo entro cui rispondiamo a una richiesta" },
]

export function V2Stats() {
  return (
    <Band tone="dark">
      <SectionTitle tone="dark" className="mx-auto max-w-[20ch] text-center">
        Dieci anni dentro le trasformazioni, oggi alla portata di tutti.
      </SectionTitle>
      <Lead tone="dark" className="mx-auto mt-6 max-w-[62ch] text-center">
        Abbiamo toccato con mano i limiti degli strumenti. Con l'AI quello che
        prima richiedeva anni di lavoro si costruisce in pochi mesi.
      </Lead>

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.label}>
            <div className="flex items-baseline gap-2">
              <span className="text-[40px] font-medium leading-none tracking-[-0.04em] text-white">
                {s.value}
              </span>
              <span className="text-[15px] text-white/50">{s.unit}</span>
            </div>
            <p className="mt-4 text-[14px] leading-[1.5] text-white/50">
              {s.label}
            </p>
          </Card>
        ))}
      </div>
    </Band>
  )
}

// ── Prima / dopo ──────────────────────────────────────────────────────────────

export function V2BeforeAfter() {
  return (
    <Band tone="light" ticks>
      <div className="mx-auto max-w-[760px] text-center">
        <Eyebrow>Perché stavolta è diverso</Eyebrow>
        <SectionTitle className="mt-5">
          Oggi si parla ai sistemi come si parla a un collega.
        </SectionTitle>
        <Lead className="mx-auto mt-6 max-w-[58ch]">
          Per anni la tecnologia ha chiesto alle persone di adattarsi a lei.
          Adesso sono gli agenti AI a orchestrare e svolgere il lavoro
          sottostante.
        </Lead>
      </div>

      <div className="mt-16 grid gap-4 md:grid-cols-2">
        <Card tone="light">
          <Eyebrow>Prima</Eyebrow>
          <p className="mt-5 text-[16px] leading-[1.6] text-[#6B6B76] md:text-[17px]">
            Qualcuno imparava a usare il software: schermate, campi obbligatori,
            codici da ricordare. La persona si adattava alla procedura, e serviva
            qualcuno dedicato a inserire i dati, correggerli e tenere insieme i
            pezzi tra un gestionale e l'altro.
          </p>
        </Card>
        <Card>
          <Eyebrow tone="dark">Dopo</Eyebrow>
          <p className="mt-5 text-[16px] leading-[1.6] text-white/75 md:text-[17px]">
            Si scrive o si manda un vocale, con le stesse parole che si userebbero
            con un collega: cosa è stato fatto, per quale cliente, quanto tempo è
            servito. Gli agenti AI lo interpretano e fanno girare il processo
            dietro le quinte.
          </p>
        </Card>
      </div>
    </Band>
  )
}

// ── Cosa è possibile (griglia a 6) ────────────────────────────────────────────

const possibilities = [
  {
    icon: Sparkles,
    title: "Processi che si muovono da soli",
    desc: "Quello che prima richiedeva giornate di lavoro manuale, gestito da agenti che lavorano al tuo fianco.",
  },
  {
    icon: Database,
    title: "Dati finalmente leggibili",
    desc: "Informazioni complesse e frammentate, interpretabili senza estrarle e incrociarle a mano ogni volta.",
  },
  {
    icon: Users,
    title: "Persone su ciò che conta",
    desc: "Il team liberato dalle attività ripetitive e concentrato sul lavoro che genera valore.",
  },
  {
    icon: Boxes,
    title: "Conoscenza che resta in azienda",
    desc: "Quello che oggi vive nella testa delle singole persone, trasformato in patrimonio dell'azienda.",
  },
  {
    icon: MessageSquare,
    title: "Nessuna app nuova da imparare",
    desc: "Messaggi, foto e note vocali: le persone continuano a comunicare come già fanno.",
  },
  {
    icon: Radar,
    title: "I tuoi dati restano tuoi",
    desc: "Nessuna condivisione con terze parti e nessun dato usato per addestrare modelli.",
  },
]

export function V2Possibilities() {
  return (
    <Band id="possibilita" tone="dark">
      <div className="mx-auto max-w-[760px] text-center">
        <Eyebrow tone="dark">Cosa è possibile</Eyebrow>
        <SectionTitle tone="dark" className="mt-5">
          Cosa può fare l'AI nella mia azienda.
        </SectionTitle>
      </div>

      <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {possibilities.map((p) => (
          <Card key={p.title}>
            <p.icon className="h-5 w-5 text-[#A794FF]" strokeWidth={1.5} />
            <h3 className="mt-6 text-[18px] font-medium tracking-[-0.01em] text-white">
              {p.title}
            </h3>
            <p className="mt-3 text-[14px] leading-[1.6] text-white/50">
              {p.desc}
            </p>
          </Card>
        ))}
      </div>
    </Band>
  )
}

// ── Prodotti ──────────────────────────────────────────────────────────────────

const products = [
  {
    name: "YUMA Projects",
    art: LayersArt,
    desc: "Aiuta le aziende che lavorano a commessa a tenere sotto controllo margini, costi e avanzamento di ogni progetto. Raccoglie i dati dal campo come arrivano e li trasforma in un quadro aggiornato ogni giorno.",
    href: links.projects,
  },
  {
    name: "YUMA Client Interface",
    art: FunnelArt,
    desc: "Gestisce ordini, richieste e reclami che arrivano dai tuoi clienti. Li interpreta e li porta già strutturati nei tuoi sistemi, liberando il team dal data entry manuale.",
    href: links.clientInterface,
  },
]

export function V2Products() {
  return (
    <Band id="prodotti" tone="light" ticks>
      <div className="mx-auto max-w-[760px] text-center">
        <Eyebrow>Le nostre soluzioni</Eyebrow>
        <SectionTitle className="mt-5">
          Dai progetti di consulenza sono nati due prodotti.
        </SectionTitle>
      </div>

      <div className="mt-16 grid gap-4 md:grid-cols-2">
        {products.map((p) => (
          <article
            key={p.name}
            className="flex flex-col rounded-[8px] bg-[#0A0A0F] p-9"
          >
            <div className="rounded-[6px] bg-[#16161C] p-6">
              <p.art />
            </div>
            <h3 className="mt-8 text-[22px] font-medium tracking-[-0.02em] text-white">
              {p.name}
            </h3>
            <p className="mt-4 flex-1 text-[15px] leading-[1.6] text-white/55">
              {p.desc}
            </p>
            <a
              href={p.href}
              className="group mt-7 inline-flex items-center gap-2 self-start rounded-[6px] bg-white px-5 py-3 text-[15px] font-medium text-[#010110] transition-colors hover:bg-white/90"
            >
              Scopri di più
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </article>
        ))}
      </div>

      <p className="mt-10 text-center text-[15px] text-[#6B6B76]">
        Ti interessa solo il software?{" "}
        <a href="#contatti" className="font-medium text-[#010110] underline underline-offset-4">
          Richiedi una demo
        </a>
      </p>
    </Band>
  )
}

// ── Come lavoriamo ────────────────────────────────────────────────────────────

const steps = [
  {
    n: "01",
    title: "Definiamo assieme il tuo percorso",
    desc: "Partiamo dai tuoi obiettivi di business, entriamo nei processi e disegniamo una roadmap di trasformazione AI su misura.",
  },
  {
    n: "02",
    title: "Individuiamo gli strumenti migliori",
    desc: "Conosciamo tecnologie, potenzialità e limiti. Scegliamo quelle adatte al tuo caso e ne studiamo l'applicazione.",
  },
  {
    n: "03",
    title: "Li implementiamo a supporto dei tuoi processi",
    desc: "Costruiamo il sistema dentro il tuo modo di lavorare e formiamo il team perché lo usi davvero.",
  },
]

export function V2Process() {
  return (
    <Band id="processo" tone="mist">
      <div className="mx-auto max-w-[760px] text-center">
        <Eyebrow>Come lavoriamo</Eyebrow>
        <SectionTitle className="mt-5">Tre passi, nessuna sorpresa.</SectionTitle>
      </div>

      <div className="mt-16 grid gap-4 md:grid-cols-3">
        {steps.map((s) => (
          <Card key={s.n} tone="light" className="bg-white">
            <span className="text-[13px] font-medium tabular-nums text-[#6B6B76]">
              {s.n}
            </span>
            <h3 className="mt-5 text-[20px] font-medium tracking-[-0.015em] text-[#010110]">
              {s.title}
            </h3>
            <p className="mt-3 text-[15px] leading-[1.6] text-[#6B6B76]">
              {s.desc}
            </p>
          </Card>
        ))}
      </div>
    </Band>
  )
}

// ── Team ──────────────────────────────────────────────────────────────────────

export function V2Team() {
  return (
    <Band id="team" tone="light">
      <div className="grid gap-14 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div>
          <Eyebrow>Le persone dietro YUMA</Eyebrow>
          <SectionTitle className="mt-5 max-w-[16ch]">
            Un team con l'esperienza delle grandi trasformazioni alle spalle.
          </SectionTitle>
        </div>
        <div className="space-y-5">
          <Lead>
            In passato abbiamo gestito progetti di trasformazione digitale per le
            più grandi aziende italiane. Tra noi c'è chi ha portato una startup da
            un round a sette cifre fino all'exit.
          </Lead>
          <Lead>
            Oggi applichiamo tutto quello che abbiamo imparato dentro le aziende
            per cui, fino a poco tempo fa, una vera trasformazione tecnologica era
            fuori portata.
          </Lead>
        </div>
      </div>

      <ul className="mt-16 grid gap-4 sm:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <li key={i} className="rounded-[8px] border border-[#E6E6EA] p-8">
            <div aria-hidden className="h-16 w-16 rounded-full bg-[#F4F4F6]" />
            <div className="mt-6 text-[17px] font-medium text-[#010110]">
              Nome Cognome
            </div>
            <div className="mt-1 text-[13px] text-[#6B6B76]">Co-founder</div>
            <p className="mt-3 text-[14px] leading-[1.6] text-[#6B6B76]">
              Una riga di descrizione del founder.
            </p>
          </li>
        ))}
      </ul>
    </Band>
  )
}

// ── Assessment + contatti ─────────────────────────────────────────────────────

export function V2Cta() {
  return (
    <Band id="contatti" tone="dark">
      <div className="mx-auto max-w-[860px] text-center">
        <Eyebrow tone="dark">Da dove si parte</Eyebrow>
        <SectionTitle tone="dark" className="mt-5">
          Vuoi capire come la tua azienda può implementare l'AI?
        </SectionTitle>
        <Lead tone="dark" className="mx-auto mt-6 max-w-[62ch]">
          Ogni percorso di consulenza inizia con un assessment AI: veniamo nella
          tua azienda, mappiamo i processi con le persone che li vivono ogni
          giorno e ti consegniamo i casi d'uso ordinati per impatto. Il risultato
          è tuo, anche se decidi di fermarti lì.
        </Lead>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <ButtonLink href={links.home + "#contatti"} variant="light">
            Richiedi il tuo assessment
            <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
        <p className="mt-6 text-[13px] text-white/40">
          Ti rispondiamo entro un giorno lavorativo.
        </p>
      </div>
    </Band>
  )
}

export function V2Footer() {
  return (
    <footer className="border-t border-[#E6E6EA] bg-white">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 px-5 py-14 md:flex-row md:items-start md:justify-between md:px-10">
        <div>
          <div className="text-[16px] font-semibold tracking-[0.18em] text-[#010110]">
            YUMA
          </div>
          <div className="mt-4 space-y-1 text-[13px] leading-[1.6] text-[#6B6B76]">
            <div>Yuma Tx Srl · P. IVA 14244440963</div>
            <div>Via G. Leopardi 14, 20123 Milano (MI)</div>
            <div>PEC yumatxsrl@pec.it · SDI WY7PJ6k</div>
          </div>
        </div>
        <nav className="flex flex-col gap-3 text-[14px] text-[#6B6B76]">
          <a href={links.projects} className="hover:text-[#010110]">
            YUMA Projects
          </a>
          <a href={links.clientInterface} className="hover:text-[#010110]">
            YUMA Client Interface
          </a>
          <a href={links.home} className="hover:text-[#010110]">
            Versione 1 del sito
          </a>
        </nav>
      </div>
    </footer>
  )
}
