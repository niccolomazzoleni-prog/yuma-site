import { useState, type FormEvent } from "react"
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
import { VerticalTabs, type VerticalTabItem } from "@/components/ui/vertical-tabs"
import { AgentsFlow, DataBars, FreedRows, KnowledgeLayers } from "@/components/v3/visuals"
import { links } from "@/lib/links"

// Home v3 — un componente per ogni blocco del copy (YUMA_Sito_Copy_revisionato).

// ── 2 · La tecnologia più avanzata è alla portata delle aziende ───────────────
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
              <strong className="font-medium text-[#010110]">
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
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#A3A3AD]">
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
          <Body className="mt-5 text-[#2A2A38]">
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

// ── 3 · Cosa è possibile (schede verticali) ──────────────────────────────────
const possibilities: VerticalTabItem[] = [
  {
    id: "01",
    title: "Processi che si muovono da soli",
    description:
      "Processi che prima richiedevano giornate di lavoro manuale, gestiti da agenti che lavorano al tuo fianco.",
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

export function Possibilities() {
  return (
    <Section id="cosa-e-possibile">
      <VerticalTabs
        title="Cosa può fare l'AI nella mia azienda"
        eyebrow="cosa è possibile"
        items={possibilities}
      />
    </Section>
  )
}

// ── 4 · Le nostre soluzioni ──────────────────────────────────────────────────
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
    <Section id="soluzioni" className="pt-0">
      <div className="mx-auto max-w-[760px] text-center">
        <Eyebrow>Le nostre soluzioni</Eyebrow>
        <Title className="mt-5">
          Dai nostri progetti di consulenza sono nati due prodotti digitali.
        </Title>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {products.map((p) => (
          <Glass key={p.name} className="flex flex-col p-8 md:p-10">
            <h3 className="text-[22px] font-medium tracking-[-0.02em] text-[#010110] md:text-[26px]">
              {p.name}
            </h3>
            <Body className="mt-4 flex-1">{p.desc}</Body>
            <a
              href={p.href}
              className="group mt-7 inline-flex items-center gap-2 self-start rounded-full bg-[#7C5CFA] px-5 py-2.5 text-[15px] font-medium text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#010110] focus-visible:ring-offset-2"
            >
              Scopri di più
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Glass>
        ))}
      </div>

      <p className="mt-10 text-center text-[16px] text-[#4A4A58]">
        Ti interessa solo il software?{" "}
        <a
          href="#contatti"
          className="font-medium text-[#010110] underline decoration-[#7C5CFA] decoration-2 underline-offset-4 transition-colors hover:text-[#7C5CFA]"
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
              <span className="text-[13px] font-medium tabular-nums text-[#7C5CFA]">
                {s.n}
              </span>
              <h3 className="mt-4 text-[20px] font-medium leading-[1.2] tracking-[-0.02em] text-[#010110] md:text-[22px]">
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
            <Glass className="h-full p-8 text-center">
              <div
                aria-hidden
                className="mx-auto h-20 w-20 rounded-full border border-white/70 bg-white/60"
              />
              <div className="mt-5 text-[17px] font-medium text-[#010110]">
                Nome Cognome
              </div>
              <div className="mt-1 text-[13px] text-[#6B6B76]">Co-founder</div>
              <Body className="mt-3 text-[15px]">
                Una riga di descrizione del founder.
              </Body>
            </Glass>
          </li>
        ))}
      </ul>
    </Section>
  )
}

// ── 7 · I nostri clienti e partner ───────────────────────────────────────────
export function Clients() {
  return (
    <Section id="clienti" className="pt-0">
      <Glass className="p-10 text-center md:p-12">
        <Eyebrow>I nostri clienti e partner</Eyebrow>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              aria-hidden
              className="h-7 w-28 rounded-[4px] bg-white/70"
            />
          ))}
        </div>
        <Body className="mt-8">
          <span className="font-medium text-[#010110]">Dove lavoriamo:</span>{" "}
          impianti e costruzioni · manifattura · distribuzione B2B ·
          farmaceutico
        </Body>
      </Glass>
    </Section>
  )
}

// ── 8 · Da dove si parte ─────────────────────────────────────────────────────
export function Assessment() {
  return (
    <Section id="assessment" className="pt-0">
      <Glass className="mx-auto max-w-[920px] p-10 text-center md:p-14">
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
          className="group mt-9 inline-flex items-center gap-2 rounded-full bg-[#010110] px-6 py-3 text-[15px] font-medium text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFA] focus-visible:ring-offset-2"
        >
          Richiedi il tuo assessment
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </Glass>
    </Section>
  )
}

// ── 9 · Modulo di contatto ───────────────────────────────────────────────────
const inputClass =
  "w-full rounded-[10px] border border-white/70 bg-white/70 px-4 py-3 text-[16px] text-[#010110] placeholder:text-[#9A9AA6] outline-none transition-shadow duration-200 focus:border-[#7C5CFA] focus:ring-4 focus:ring-[#7C5CFA]/15"
const labelClass = "text-[14px] font-medium text-[#010110]"

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // TODO: collegare invio (email/CRM). Per ora mostra la conferma.
    setSent(true)
  }

  return (
    <Section id="contatti" className="pt-0">
      <div className="mx-auto max-w-[760px] text-center">
        <Eyebrow>Parliamone</Eyebrow>
        <Title className="mt-5">Parliamone</Title>
        <Lead className="mx-auto mt-6 max-w-[58ch]">
          Raccontaci come lavori oggi e cosa vorresti migliorare. Ti rispondiamo
          entro un giorno lavorativo e fissiamo una prima call conoscitiva di
          trenta minuti, senza impegno.
        </Lead>
      </div>

      {sent ? (
        <Glass className="mx-auto mt-10 max-w-[620px] p-10 text-center">
          <Body className="text-[#010110]">
            Grazie, abbiamo ricevuto la tua richiesta. Ti scriviamo entro un
            giorno lavorativo.
          </Body>
        </Glass>
      ) : (
        <Glass className="mx-auto mt-10 max-w-[720px] p-8 md:p-10">
          <form onSubmit={handleSubmit} className="grid gap-5 text-left">
            <div className="grid gap-2">
              <label htmlFor="v3-nome" className={labelClass}>
                Nome e cognome
              </label>
              <input id="v3-nome" name="nome" type="text" required autoComplete="name" className={inputClass} />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <label htmlFor="v3-azienda" className={labelClass}>
                  Azienda
                </label>
                <input id="v3-azienda" name="azienda" type="text" required autoComplete="organization" className={inputClass} />
              </div>
              <div className="grid gap-2">
                <label htmlFor="v3-ruolo" className={labelClass}>
                  Ruolo
                </label>
                <input id="v3-ruolo" name="ruolo" type="text" autoComplete="organization-title" className={inputClass} />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <label htmlFor="v3-email" className={labelClass}>
                  Email di lavoro
                </label>
                <input
                  id="v3-email"
                  name="email"
                  type="email"
                  required
                  inputMode="email"
                  autoComplete="email"
                  spellCheck={false}
                  className={inputClass}
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="v3-telefono" className={labelClass}>
                  Telefono{" "}
                  <span className="font-normal text-[#6B6B76]">(facoltativo)</span>
                </label>
                <input id="v3-telefono" name="telefono" type="tel" inputMode="tel" autoComplete="tel" className={inputClass} />
              </div>
            </div>

            <div className="grid gap-2">
              <label htmlFor="v3-dipendenti" className={labelClass}>
                Numero di dipendenti
              </label>
              <select
                id="v3-dipendenti"
                name="dipendenti"
                required
                defaultValue=""
                className={inputClass}
              >
                <option value="" disabled>
                  Seleziona
                </option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201-500">201-500</option>
                <option value="500+">Oltre 500</option>
              </select>
            </div>

            <div className="grid gap-2">
              <label htmlFor="v3-messaggio" className={labelClass}>
                Come possiamo aiutarti
              </label>
              <textarea
                id="v3-messaggio"
                name="messaggio"
                rows={4}
                required
                placeholder="Descrivi in due righe la situazione attuale e cosa vorresti ottenere."
                className={inputClass + " resize-y"}
              />
            </div>

            <p className="text-[13px] leading-[1.5] text-[#6B6B76]">
              Usiamo i tuoi dati solo per ricontattarti. Nessuna newsletter,
              nessuna condivisione con terzi.
            </p>

            <button
              type="submit"
              className="mt-1 inline-flex items-center justify-center justify-self-center rounded-full bg-[#7C5CFA] px-6 py-3 text-[15px] font-medium text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#010110] focus-visible:ring-offset-2"
            >
              Invia la richiesta
            </button>
          </form>
        </Glass>
      )}
    </Section>
  )
}

// ── 10 · Footer ──────────────────────────────────────────────────────────────
export function Footer() {
  return (
    <footer className="border-t border-white/60 bg-white/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-6 px-5 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="text-[15px] font-semibold tracking-[0.18em] text-[#010110]">
            YUMA
          </div>
          <div className="mt-3 space-y-1 text-[13px] leading-[1.6] text-[#6B6B76]">
            <div>YUMA TX S.r.l. · P. IVA 14244440963</div>
            <div>Sede legale: Via Giacomo Leopardi 14, Milano</div>
            <div>
              PEC{" "}
              <a href="mailto:yumatxsrl@pec.it" className="hover:text-[#010110]">
                yumatxsrl@pec.it
              </a>{" "}
              · SDI WY7PJ6k
            </div>
            <div className="text-[#9A9AA6]">
              Email pubblica da confermare
            </div>
          </div>
        </div>
        <nav className="flex flex-col gap-2 text-[14px] text-[#6B6B76]">
          <a href={links.projects} className="hover:text-[#010110]">
            YUMA Projects
          </a>
          <a href={links.clientInterface} className="hover:text-[#010110]">
            YUMA Client Interface
          </a>
          <a href="#" className="hover:text-[#010110]">
            LinkedIn
          </a>
          <a href="#" className="hover:text-[#010110]">
            Privacy policy
          </a>
          <a href="#" className="hover:text-[#010110]">
            Cookie policy
          </a>
        </nav>
      </div>
    </footer>
  )
}
