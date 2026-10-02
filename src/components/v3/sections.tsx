import { ArrowRight } from "lucide-react"
import {
  Body,
  Eyebrow,
  Glass,
  Lead,
  Section,
  Title,
} from "@/components/v3/glass"
import { ParticleGlobe } from "@/components/ui/particle-globe"
import { AnimatedTabs } from "@/components/ui/animated-tabs"
import { CardsSplit } from "@/components/v3/product-cards"
import { Info } from "@/components/v3/infographic"
import { links } from "@/lib/links"
import { LeadForm } from "@/components/v3/lead-form"

// Home v3 — un componente per ogni blocco del copy (YUMA_Sito_Copy_revisionato).

// ── 2 · Versione statica del blocco 2 (sostituita da StoryAlternating in
// story.tsx, tenuta qui come riferimento del copy integrale) ────────────────
export function WhyNow() {
  return (
    <Section id="perche-ora">
      <div className="mx-auto max-w-[820px] text-center">
        <Title className="mx-auto max-w-[22ch]">
          La tecnologia più avanzata che esiste, oggi, è alla portata delle
          aziende
        </Title>
        <Lead className="mx-auto mt-6 max-w-[62ch]">
          Lo sappiamo perché per più di 10 anni abbiamo lavorato a progetti di
          trasformazione digitale nelle grandi aziende, toccando con mano i
          limiti degli strumenti e scontrandoci con la complessità di
          implementare e far utilizzare la tecnologia.
        </Lead>
      </div>

      <Glass className="mt-14 overflow-hidden">
        <div className="grid items-center gap-8 p-8 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] md:p-10">
          <div className="space-y-4">
            <Body>
              Quando è arrivata l'intelligenza artificiale, ci siamo resi conto
              di essere davanti a qualcosa di rivoluzionario: una tecnologia
              economica, facile da utilizzare, che comprende il linguaggio umano
              e lavora autonomamente al fianco delle persone.
            </Body>
            <Body>
              Quello che prima richiedeva anni di lavoro, oggi si può costruire
              in pochi mesi e con una frazione dei costi. La barriera si è
              abbassata, e per la prima volta{" "}
              <strong className="font-medium text-[#1D1D1F]">
                il potenziale trasformativo della tecnologia è alla portata di
                tutte le aziende.
              </strong>
            </Body>
          </div>
          <ParticleGlobe className="h-[300px] md:h-[340px]" density={5200} />
        </div>
      </Glass>

      {/* Perché stavolta è diverso */}
      <div className="mx-auto mt-20 max-w-[820px] text-center">
        <Eyebrow>Perché stavolta è diverso</Eyebrow>
        <Title className="mx-auto mt-5 max-w-[24ch] text-[26px] md:text-[34px]">
          Oggi si parla ai sistemi come si parla a un collega
        </Title>
        <Lead className="mx-auto mt-5 max-w-[62ch]">
          Per anni la tecnologia ha chiesto alle persone di adattarsi a lei: gli
          strumenti erano complessi da utilizzare, e adottarli in azienda
          significava avere persone dedicate ai processi tecnologici. Oggi basta
          un messaggio o una nota vocale, e sono gli agenti AI a orchestrare e
          svolgere il lavoro sottostante.
        </Lead>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Glass className="p-8 md:p-10">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#56565B]">
            Prima
          </p>
          <Body className="mt-5">
            Qualcuno imparava a usare il software: schermate, campi obbligatori,
            codici da ricordare. La persona si adattava alla procedura, e serviva
            qualcuno dedicato a inserire i dati, correggerli e tenere insieme i
            pezzi tra un gestionale e l'altro.
          </Body>
        </Glass>
        <Glass className="p-8 md:p-10">
          <Eyebrow>Dopo</Eyebrow>
          <Body className="mt-5 text-[#333336]">
            Si scrive o si manda un vocale, con le stesse parole che si
            userebbero con un collega: cosa è stato fatto, per quale cliente,
            quanto tempo è servito. Gli agenti AI lo interpretano e fanno girare
            il processo dietro le quinte. Le persone intervengono solo quando
            strettamente necessario.
          </Body>
        </Glass>
      </div>

      {/* I tuoi dati restano tuoi */}
      <Glass className="mx-auto mt-5 max-w-[880px] p-8 text-center md:p-10">
        <Title className="mx-auto max-w-[20ch] text-[24px] md:text-[30px]">
          I tuoi dati restano tuoi
        </Title>
        <Body className="mx-auto mt-5 max-w-[62ch]">
          Nessuna condivisione con terze parti: le informazioni della tua azienda
          restano dentro il perimetro che definiamo insieme. Nessun dato viene
          usato per addestrare modelli, né da noi, né dai nostri fornitori
          tecnologici.
        </Body>
      </Glass>
    </Section>
  )
}

// ── 3 · Cosa è possibile (schede animate) ────────────────────────────────────
const possibilities = [
  {
    id: "processi",
    label: "Processi",
    title: "Processi che si muovono da soli",
    text: "Processi che prima richiedevano giornate di lavoro manuale, gestiti da agenti che lavorano al tuo fianco.",
    visual: <Info n={4} />,
  },
  {
    id: "dati",
    label: "Dati",
    title: "Dati finalmente leggibili",
    text: "Dati complessi e frammentati, resi leggibili e interpretabili senza doverli estrarre e incrociare a mano ogni volta.",
    visual: <Info n={5} />,
  },
  {
    id: "persone",
    label: "Persone",
    title: "Persone su ciò che conta",
    text: "Persone liberate dalle attività ripetitive, concentrate su ciò che conta davvero.",
    visual: <Info n={6} />,
  },
  {
    id: "conoscenza",
    label: "Conoscenza",
    title: "Conoscenza che resta in azienda",
    text: "La conoscenza che oggi vive nella testa delle singole persone, trasformata in patrimonio dell'azienda.",
    visual: <Info n={7} />,
  },
]

export function Possibilities() {
  const tabs = possibilities.map((p) => ({
    id: p.id,
    label: p.label,
    content: (
      <div className="grid h-full w-full gap-6 md:grid-cols-2">
        <div className="overflow-hidden rounded-[14px] border border-white/60 bg-white/40">
          {p.visual}
        </div>
        <div className="flex flex-col justify-center gap-y-3">
          <h3 className="m-0 text-[22px] font-medium tracking-[-0.02em] text-[#1D1D1F] md:text-[26px]">
            {p.title}
          </h3>
          <p className="m-0 text-[15px] leading-[1.55] text-[#424245] md:text-[16px]">
            {p.text}
          </p>
        </div>
      </div>
    ),
  }))

  return (
    <Section id="cosa-e-possibile">
      <div className="mx-auto max-w-[760px] text-center">
        <Eyebrow>Cosa è possibile</Eyebrow>
        <Title className="mt-5">Cosa può fare l'AI nella mia azienda</Title>
      </div>

      <AnimatedTabs
        tabs={tabs}
        tone="glass"
        className="mx-auto mt-12 max-w-[1000px]"
        panelClassName="p-6 md:p-8"
      />
    </Section>
  )
}

// ── 4 · Le nostre soluzioni ──────────────────────────────────────────────────
// Schede "divise": immagine a fianco del testo, lati alternati. I contenuti
// stanno in product-cards.tsx, insieme al segnaposto per gli screenshot.
export function Solutions() {
  return (
    <Section id="soluzioni" className="pt-0">
      <div className="mx-auto max-w-[760px] text-center">
        <Eyebrow>Le nostre soluzioni</Eyebrow>
        <Title className="mt-5">
          Dai nostri progetti di consulenza sono nati due prodotti digitali.
        </Title>
      </div>

      <div className="mt-12">
        <CardsSplit />
      </div>

      <p className="mt-10 text-center text-[16px] text-[#424245]">
        Ti interessa solo il software?{" "}
        <a
          href="#contatti"
          className="font-medium text-[#1D1D1F] underline decoration-[#7C5CFA] decoration-2 underline-offset-4 transition-colors hover:text-[#7C5CFA]"
        >
          Richiedi una demo
        </a>
      </p>
    </Section>
  )
}

// ── 5 · Come lavoriamo ───────────────────────────────────────────────────────
const steps = [
  {
    n: "01",
    title: "Definiamo assieme il tuo percorso",
    desc: "Partiamo dai tuoi obiettivi di business. Mettiamo a fuoco insieme dove vuoi arrivare, poi entriamo nei processi per individuare le aree di intervento a maggior valore e disegnare una roadmap di trasformazione AI su misura.",
  },
  {
    n: "02",
    title: "Individuiamo gli strumenti migliori",
    desc: "Conosciamo gli strumenti, le loro potenzialità e i loro limiti. Individuiamo le tecnologie adatte al tuo caso e studiamo la loro applicazione per massimizzare l'impatto sulla tua azienda.",
  },
  {
    n: "03",
    title: "Li implementiamo a supporto dei tuoi processi",
    desc: "Costruiamo il sistema dentro il tuo modo di lavorare, con l'obiettivo che tutto risulti facile da capire e da usare. Formiamo il tuo team e gli diamo gli strumenti per moltiplicare la propria produttività.",
  },
]

export function HowWeWork() {
  return (
    <Section id="come-lavoriamo" className="pt-0">
      <div className="mx-auto max-w-[760px] text-center">
        <Eyebrow>Come lavoriamo</Eyebrow>
        <Title className="mt-5">Come lavoriamo</Title>
      </div>

      <ol className="mt-12 grid gap-5 md:grid-cols-3">
        {steps.map((s) => (
          <li key={s.n}>
            <Glass className="h-full p-8">
              <span className="text-[13px] font-medium tabular-nums text-[#5B3FD9]">
                {s.n}
              </span>
              <h3 className="mt-4 text-[20px] font-medium leading-[1.2] tracking-[-0.02em] text-[#1D1D1F] md:text-[22px]">
                {s.title}
              </h3>
              <Body className="mt-3 text-[15px]">{s.desc}</Body>
            </Glass>
          </li>
        ))}
      </ol>
    </Section>
  )
}

// ── 6 · Le persone dietro YUMA ───────────────────────────────────────────────
export function Team() {
  return (
    <Section id="team" className="pt-0">
      <div className="mx-auto max-w-[820px] text-center">
        <Eyebrow>Le persone dietro YUMA</Eyebrow>
        <Title className="mx-auto mt-5 max-w-[20ch]">
          Un team con l'esperienza delle grandi trasformazioni alle spalle.
        </Title>
        <Lead className="mx-auto mt-6 max-w-[62ch]">
          In passato abbiamo gestito progetti di trasformazione digitale per le
          più grandi aziende italiane. Tra noi c'è chi ha portato una startup da
          un round a sette cifre fino all'exit.
        </Lead>
        <Lead className="mx-auto mt-4 max-w-[62ch]">
          Oggi applichiamo tutto quello che abbiamo imparato dentro le aziende
          per cui, fino a poco tempo fa, una vera trasformazione tecnologica era
          fuori portata.
        </Lead>
      </div>

      <ul className="mt-12 grid gap-5 sm:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <li key={i}>
            {/* su telefono foto piccola accanto al testo, da sm in su foto quadrata sopra */}
            <Glass className="flex h-full items-start gap-4 p-5 text-left sm:block sm:p-6 sm:text-center md:p-7">
              <div
                role="img"
                aria-label="Foto del founder (segnaposto)"
                className="flex aspect-square w-24 shrink-0 items-center justify-center rounded-[18px] border border-dashed border-[#7C5CFA]/35 bg-white/45 text-[12px] font-medium text-[#56565B] sm:w-full"
              >
                Foto
              </div>
              <div>
                <div className="text-[17px] font-medium text-[#1D1D1F] sm:mt-6">
                  Nome Cognome
                </div>
                <div className="mt-1 text-[13px] text-[#56565B]">Co-founder</div>
                <Body className="mt-3 text-[15px]">
                  Una riga di descrizione del founder.
                </Body>
              </div>
            </Glass>
          </li>
        ))}
      </ul>
    </Section>
  )
}

// ── 7 · I nostri clienti e partner ───────────────────────────────────────────
// Solo i clienti di YUMA (non le aziende dove il team ha lavorato prima).
// Loghi in grigio per tenere il blocco sobrio; a colori al passaggio del mouse.
// h = altezza massima in px: i loghi tondi o su due righe ne vogliono di più
// per avere lo stesso peso visivo di quelli orizzontali.
// wide: wordmark molto lungo, su telefono occupa tutta la riga per restare leggibile
const clientLogos: { name: string; file: string; w: number; h: number; size: number; wide?: boolean }[] = [
  { name: "AVM", file: "avm.webp", w: 600, h: 221, size: 46 },
  { name: "Napolillo Industry", file: "napolillo.svg", w: 109, h: 21, size: 34 },
  { name: "Sirai", file: "sirai.webp", w: 454, h: 233, size: 48 },
  { name: "Mountech", file: "mountech.svg", w: 170, h: 46, size: 38 },
  { name: "EKORE", file: "ekore.svg", w: 581, h: 111, size: 28 },
  { name: "Polo", file: "polo.svg", w: 227, h: 61, size: 40 },
  { name: "B2O Birrificio Agricolo", file: "b2o.webp", w: 360, h: 384, size: 60 },
  { name: "ADHOX", file: "adhox.webp", w: 900, h: 81, size: 20, wide: true },
]

export function Clients() {
  return (
    <Section id="clienti" className="pt-0">
      <Glass className="p-6 text-center md:p-12">
        <h2 className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#5B3FD9]">
          I nostri clienti e partner
        </h2>
        <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-4 md:gap-x-8">
          {clientLogos.map((l) => (
            <li
              key={l.file}
              className={`flex h-20 items-center justify-center md:h-24 ${l.wide ? "col-span-2 sm:col-span-1" : ""}`}
            >
              <img
                src={`${import.meta.env.BASE_URL}loghi/${l.file}`}
                alt={l.name}
                width={l.w}
                height={l.h}
                loading="lazy"
                style={{ maxHeight: l.size }}
                className={`h-auto w-auto object-contain opacity-80 grayscale transition-[filter,opacity] duration-300 hover:opacity-100 hover:grayscale-0 ${l.wide ? "max-w-[70%] sm:max-w-[90%] md:max-w-[210px]" : "max-w-[78%] md:max-w-[170px]"}`}
              />
            </li>
          ))}
        </ul>
      </Glass>
    </Section>
  )
}

// ── 8 · Versione a blocco unico di "Da dove si parte" (sostituita da
// AssessmentReport in assessment.tsx, tenuta come riferimento) ─────────────
export function Assessment() {
  return (
    <Section id="assessment" className="pt-0">
      <Glass className="mx-auto max-w-[920px] p-6 text-center sm:p-10 md:p-14">
        <Eyebrow>Da dove si parte</Eyebrow>
        <Title className="mx-auto mt-5 max-w-[24ch]">
          Ogni percorso di consulenza inizia con un assessment AI: un modo
          semplice per conoscersi e pensare in grande assieme.
        </Title>
        <Lead className="mx-auto mt-6 max-w-[62ch]">
          Veniamo nella tua azienda, mappiamo i processi insieme alle persone che
          li vivono ogni giorno e individuiamo dove l'intelligenza artificiale
          può avere l'impatto maggiore.
        </Lead>
        <Lead className="mx-auto mt-4 max-w-[62ch]">
          Alla fine del percorso ti consegniamo un documento con i casi d'uso
          individuati, ordinati per impatto e ritorno economico, con una stima di
          cosa serve per realizzarli. Il risultato è tuo, anche se decidi di
          fermarti lì.
        </Lead>
        <a
          href="#contatti"
          className="group mt-9 inline-flex items-center gap-2 rounded-full bg-[#1D1D1F] px-6 py-3 text-[15px] font-medium text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFA] focus-visible:ring-offset-2"
        >
          Richiedi il tuo assessment
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </Glass>
    </Section>
  )
}

// ── 9 · Modulo di contatto ───────────────────────────────────────────────────
export function Contact() {
  return (
    <Section id="contatti" className="pt-0">
      <div className="mx-auto max-w-[760px] text-center">
        <Eyebrow>Parliamone</Eyebrow>
        <Title className="mt-5">Parliamone</Title>
        <Lead className="mx-auto mt-6 max-w-[58ch]">
          Raccontaci come lavori oggi e cosa vorresti migliorare. Ti rispondiamo
          entro 12 ore lavorative e fissiamo una prima call conoscitiva di
          trenta minuti, senza impegno.
        </Lead>
      </div>

      <LeadForm form="home" submitLabel="Invia la richiesta" />
    </Section>
  )
}

// ── 10 · Footer ──────────────────────────────────────────────────────────────
export function Footer() {
  return (
    <footer className="border-t border-white/60 bg-white/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-6 px-5 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="text-[15px] font-semibold tracking-[0.18em] text-[#1D1D1F]">
            YUMA
          </div>
          <div className="mt-3 space-y-1 text-[13px] leading-[1.6] text-[#6E6E73]">
            <div>YUMA TX S.r.l. · P. IVA 14244440963</div>
            <div>Sede legale: Via Giacomo Leopardi 14, Milano</div>
            <div>
              PEC{" "}
              <a href="mailto:yumatxsrl@pec.it" className="hover:text-[#1D1D1F]">
                yumatxsrl@pec.it
              </a>{" "}
              · SDI WY7PJ6k
            </div>
            <div className="text-[#56565B]">
              Email pubblica da confermare
            </div>
          </div>
        </div>
        <nav className="flex flex-col gap-2 text-[14px] text-[#6E6E73]">
          <a href={links.projects} className="hover:text-[#1D1D1F]">
            YUMA Projects
          </a>
          <a href={links.clientInterface} className="hover:text-[#1D1D1F]">
            YUMA Client Interface
          </a>
          <a href="#" className="hover:text-[#1D1D1F]">
            LinkedIn
          </a>
          <a href="#" className="hover:text-[#1D1D1F]">
            Privacy policy
          </a>
          <a href="#" className="hover:text-[#1D1D1F]">
            Cookie policy
          </a>
        </nav>
      </div>
    </footer>
  )
}
