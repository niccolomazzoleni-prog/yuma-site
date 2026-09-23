import { useEffect, useState, type FormEvent, type ReactNode } from "react"
import { ArrowRight, Check } from "lucide-react"
import {
  Body,
  Eyebrow,
  GradientField,
  Glass,
  Lead,
  Section,
  Title,
} from "@/components/v3/glass"
import { WhatsAppBar } from "@/components/home/whatsapp-bar"
import { links } from "@/lib/links"
import type { Bullet, LandingContent } from "@/lib/landing-content"
import { ProblemAlternating } from "@/components/v3/problem-blocks"
import { RolesSelector } from "@/components/v3/roles-selector"
import { SystemsDiagramBlock } from "@/components/v3/systems-diagram"
import { StepsWizard } from "@/components/v3/steps-wizard"
import { FitStickers } from "@/components/v3/fit-stickers"
import { FAQ, type FaqData } from "@/components/ui/faq-tabs"

// Landing di prodotto nella direzione "vetro su gradiente". Le strutture sono
// diverse da quelle della home, per dare varietà: riga di prova con divisori,
// elenco numerato, bento dei moduli, scheda tecnica dei ruoli, caso editoriale,
// griglia a filetti, percorso orizzontale, due colonne sì/no, FAQ aperte.

// ── segnaposto immagine ──────────────────────────────────────────────────────
export function Shot({
  label,
  ratio = "16 / 10",
  className = "",
}: {
  label: string
  ratio?: string
  className?: string
}) {
  return (
    <div
      role="img"
      aria-label={`${label} (segnaposto)`}
      className={`flex items-center justify-center rounded-[16px] border border-dashed border-[#7C5CFA]/35 bg-white/45 ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <span className="px-6 text-center text-[13px] font-medium text-[#8A8A97]">
        {label}
        <span className="mt-1 block text-[11px] font-normal text-[#A3A3AD]">
          formato {ratio.replace(" / ", ":")}
        </span>
      </span>
    </div>
  )
}

function TodoTag() {
  return (
    <span className="ml-2 inline-block rounded-[4px] bg-white/70 px-2 py-0.5 align-middle text-[11px] font-medium uppercase tracking-[0.06em] text-[#A3A3AD]">
      da confermare
    </span>
  )
}

function BulletText({ item }: { item: Bullet }) {
  return (
    <>
      {item.text}
      {item.todo ? <TodoTag /> : null}
    </>
  )
}

function Cta({
  href = "#demo",
  children,
  variant = "violet",
}: {
  href?: string
  children: ReactNode
  variant?: "violet" | "dark" | "ghost"
}) {
  const styles = {
    violet: "bg-[#7C5CFA] text-white",
    dark: "bg-[#010110] text-white",
    ghost: "border border-white/70 bg-white/60 text-[#010110] backdrop-blur-xl",
  }[variant]
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 text-[15px] font-medium transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#010110] focus-visible:ring-offset-2 ${styles}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </a>
  )
}

// ── nav ──────────────────────────────────────────────────────────────────────
function LandingNav({ product }: { product: string }) {
  const items = [
    { label: "Il problema", href: "#problema" },
    { label: "Come funziona", href: "#moduli" },
    { label: "Caso sul campo", href: "#caso" },
    { label: "FAQ", href: "#faq" },
  ]
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-5 pt-5">
      <div className="mx-auto flex w-full max-w-[1180px] items-center justify-between gap-6 rounded-full border border-white/70 bg-white/55 px-5 py-2.5 backdrop-blur-xl md:px-6">
        <a href={links.home} className="text-[15px] font-semibold tracking-[0.18em] text-[#010110]">
          YUMA
        </a>
        <nav className="hidden items-center gap-7 text-[14px] text-[#4A4A58] lg:flex">
          {items.map((i) => (
            <a key={i.href} href={i.href} className="transition-colors hover:text-[#010110]">
              {i.label}
            </a>
          ))}
        </nav>
        <a
          href="#demo"
          className="rounded-full bg-[#7C5CFA] px-4 py-2 text-[14px] font-medium text-white"
          aria-label={`Richiedi una demo di ${product}`}
        >
          Richiedi una demo
        </a>
      </div>
    </header>
  )
}

// ── 01 hero: testo a sinistra, schermata a destra ───────────────────────────
function Hero({ c }: { c: LandingContent }) {
  return (
    <section id="top" className="mx-auto max-w-[1180px] px-5 pb-10 pt-28 md:pt-36">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14">
        <div>
          <Eyebrow>{c.product}</Eyebrow>
          <h1 className="mt-5 max-w-[18ch] text-balance text-[36px] font-medium leading-[1.03] tracking-[-0.04em] text-[#010110] sm:text-[46px] lg:text-[54px]">
            {c.hero.headline}
          </h1>
          <Lead className="mt-6 max-w-[52ch]">{c.hero.sub}</Lead>
          <div className="mt-8 flex flex-wrap gap-3">
            <Cta>{c.hero.cta}</Cta>
            <Cta href={links.home} variant="ghost">
              Scopri YUMA
            </Cta>
          </div>
        </div>

        <Glass className="p-5 md:p-6">
          <Shot label={`Schermata ${c.product}`} />
        </Glass>
      </div>
    </section>
  )
}

// ── 02 credibilità: titolo, grafica e una riga di prova ─────────────────────
function Credibility({ c }: { c: LandingContent }) {
  // del blocco resta solo l'ultimo punto (la compatibilità coi gestionali):
  // gli altri due torneranno dentro la grafica, quando sarà pronta.
  const claim = c.credibility.bullets[c.credibility.bullets.length - 1]
  return (
    <Section id="credibilita">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
        <Title className="max-w-[16ch]">{c.credibility.headline}</Title>
        <Lead className="max-w-[58ch] lg:pt-2">{c.credibility.body}</Lead>
      </div>

      <Glass className="mt-12 p-5 md:p-6">
        <Shot label="Grafica: come arrivano gli ordini" ratio="21 / 9" className="w-full" />
      </Glass>

      <p className="mt-8 flex flex-wrap items-center justify-center gap-3 text-center text-[16px] text-[#2A2A38]">
        <Check className="h-5 w-5 text-[#7C5CFA]" />
        <span className={claim.todo ? "text-[#8A8A97]" : ""}>
          <BulletText item={claim} />
        </span>
      </p>

      {c.credibility.note ? (
        <p className="mt-3 text-center text-[15px] text-[#8A8A97]">
          {c.credibility.note}
          <TodoTag />
        </p>
      ) : null}
    </Section>
  )
}

// ── 03 problema: elenco numerato grande, niente riquadri ────────────────────
function Problem({ c }: { c: LandingContent }) {
  const p = c.problem
  return (
    <Section id="problema" className="pt-0">
      <Eyebrow>{p.label}</Eyebrow>
      <Title className="mt-5 max-w-[20ch]">{p.headline}</Title>
      {p.sub ? <Lead className="mt-5 max-w-[62ch]">{p.sub}</Lead> : null}

      {p.items ? <ProblemAlternating items={p.items} /> : null}

      {p.causes ? (
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#A3A3AD]">
              {p.causesTitle}
            </p>
            <ul className="mt-5 space-y-4">
              {p.causes.map((x) => (
                <li key={x.title} className="border-b border-[#010110]/8 pb-4 last:border-0">
                  <Body>
                    <span className="font-medium text-[#010110]">{x.title}</span> {x.desc}
                  </Body>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>{p.solutionTitle}</Eyebrow>
            <ul className="mt-5 space-y-4">
              {p.solutions?.map((x) => (
                <li key={x.title} className="border-b border-[#010110]/8 pb-4 last:border-0">
                  <Body>
                    <span className="font-medium text-[#010110]">{x.title}</span> {x.desc}
                  </Body>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}

      {p.table ? (
        <div className="mt-12 overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">{p.tableTitle}</caption>
            <thead>
              <tr>
                <th className="w-1/2 border-b border-[#010110]/15 pb-4 text-[12px] font-medium uppercase tracking-[0.14em] text-[#A3A3AD]">
                  Oggi
                </th>
                <th className="w-1/2 border-b border-[#010110]/15 pb-4 pl-6 text-[12px] font-medium uppercase tracking-[0.14em] text-[#7C5CFA]">
                  Con {c.product}
                </th>
              </tr>
            </thead>
            <tbody>
              {p.table.map((row) => (
                <tr key={row.before}>
                  <td className="border-b border-[#010110]/8 py-5 pr-6 text-[16px] leading-[1.5] text-[#4A4A58]">
                    {row.before}
                  </td>
                  <td className="border-b border-[#010110]/8 py-5 pl-6 text-[16px] font-medium leading-[1.5] text-[#010110]">
                    {row.after}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </Section>
  )
}

// ── 04 moduli: tre schede uguali, schermata grande in alto ──────────────────
function Modules({ c }: { c: LandingContent }) {
  const statusStyle: Record<string, string> = {
    attivo: "bg-[#7C5CFA]/15 text-[#5B3FD9]",
    "in rilascio": "bg-[#F5A623]/25 text-[#7A4E00] ring-1 ring-inset ring-[#F5A623]/45",
    "in sviluppo": "bg-[#F5A623]/15 text-[#8A5E14] ring-1 ring-inset ring-[#F5A623]/30",
  }

  return (
    <Section id="moduli" className="pt-0">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-end">
        <div>
          <Eyebrow>{c.modules.label}</Eyebrow>
          <Title className="mt-5 max-w-[18ch]">{c.modules.headline}</Title>
        </div>
        {c.modules.note ? (
          <p className="text-[15px] text-[#8A8A97] lg:text-right">
            {c.modules.note.text}
            {c.modules.note.todo ? <TodoTag /> : null}
          </p>
        ) : null}
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {c.modules.items.map((m) => (
          <Glass key={m.name} className="flex h-full flex-col p-6 md:p-7">
            <Shot label={`Schermata ${m.name}`} ratio="4 / 3" className="w-full" />
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <h3 className="text-[19px] font-medium tracking-[-0.02em] text-[#010110] md:text-[21px]">
                {m.name}
              </h3>
              <span className={`rounded-full px-3 py-1 text-[12px] font-medium ${statusStyle[m.status]}`}>
                {m.status}
              </span>
            </div>
            <Body className="mt-3 text-[15px]">{m.desc}</Body>
          </Glass>
        ))}
      </div>

      {c.modules.items.some((m) => m.statusTodo) ? (
        <p className="mt-6 text-[14px] text-[#8A8A97]">
          Lo stato dei moduli è
          <TodoTag />
        </p>
      ) : null}
    </Section>
  )
}

// ── 05 ruoli: selettore con dettaglio e immagine ────────────────────────────
function Roles({ c }: { c: LandingContent }) {
  return <RolesSelector roles={c.roles} />
}

// ── 07 i tuoi sistemi: schema del flusso al centro ──────────────────────────
function Systems({ c }: { c: LandingContent }) {
  return <SystemsDiagramBlock systems={c.systems} />
}

// ── 08 come si lavora insieme: stepper cliccabile ───────────────────────────
function Together({ c }: { c: LandingContent }) {
  return <StepsWizard together={c.together} />
}

// ── 09 fa per te se: adesivi inclinati ──────────────────────────────────────
const fitLabels: Record<string, string[]> = {
  "client-interface": [
    "Ordini ricorrenti da clienti abituali",
    "Più canali e formati diversi",
    "Back office che inserisce a mano",
    "ERP o CRM che non volete sostituire",
  ],
}

function ForWhom({ c }: { c: LandingContent }) {
  return (
    <FitStickers
      forWhom={c.forWhom}
      product={c.product}
      shortLabels={fitLabels[c.slug]}
    />
  )
}

// ── 10 domande frequenti: schede per gruppo ─────────────────────────────────
function Faq({ c }: { c: LandingContent }) {
  // se le domande hanno un gruppo le raccolgo per gruppo, altrimenti una sola scheda
  const groups = c.faq.items.reduce<FaqData>((acc, item) => {
    const key = item.group ?? "Tutte"
    acc[key] = acc[key] ?? []
    acc[key].push({
      question: item.q,
      answer: (
        <>
          {item.a}
          {item.todo ? <TodoTag /> : null}
        </>
      ),
    })
    return acc
  }, {})

  const categories = Object.keys(groups).reduce<Record<string, string>>((acc, k) => {
    acc[k] = k
    return acc
  }, {})

  return (
    <Section id="faq" className="pt-0">
      <FAQ
        title={c.faq.headline}
        subtitle={c.faq.label}
        categories={categories}
        faqData={groups}
      />
    </Section>
  )
}

// ── 11 obiezione + modulo demo ───────────────────────────────────────────────
const inputClass =
  "w-full rounded-[10px] border border-white/70 bg-white/70 px-4 py-3 text-[16px] text-[#010110] placeholder:text-[#9A9AA6] outline-none transition-shadow duration-200 focus:border-[#7C5CFA] focus:ring-4 focus:ring-[#7C5CFA]/15"
const labelClass = "text-[14px] font-medium text-[#010110]"

function DemoForm({ c }: { c: LandingContent }) {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // TODO: collegare invio (email/CRM). Per ora mostra la conferma.
    setSent(true)
  }

  return (
    <Section id="demo" className="pt-0">
      <Glass className="mx-auto max-w-[820px] p-8 md:p-10">
        <h2 className="text-[22px] font-medium leading-[1.2] tracking-[-0.02em] text-[#010110] md:text-[26px]">
          {c.objection.title}
        </h2>
        <Body className="mt-4">{c.objection.body}</Body>
      </Glass>

      <div className="mx-auto mt-16 max-w-[760px] text-center">
        <Title>{c.cta.headline}</Title>
        <Lead className="mx-auto mt-5 max-w-[58ch]">{c.cta.body}</Lead>
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
              <label htmlFor="l-nome" className={labelClass}>
                Nome e cognome
              </label>
              <input id="l-nome" name="nome" type="text" required autoComplete="name" className={inputClass} />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <label htmlFor="l-azienda" className={labelClass}>
                  Azienda
                </label>
                <input id="l-azienda" name="azienda" type="text" required autoComplete="organization" className={inputClass} />
              </div>
              <div className="grid gap-2">
                <label htmlFor="l-ruolo" className={labelClass}>
                  Ruolo
                </label>
                <input id="l-ruolo" name="ruolo" type="text" autoComplete="organization-title" className={inputClass} />
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <label htmlFor="l-telefono" className={labelClass}>
                  Telefono
                </label>
                <input id="l-telefono" name="telefono" type="tel" inputMode="tel" autoComplete="tel" className={inputClass} />
              </div>
              <div className="grid gap-2">
                <label htmlFor="l-email" className={labelClass}>
                  Email
                </label>
                <input
                  id="l-email"
                  name="email"
                  type="email"
                  required
                  inputMode="email"
                  autoComplete="email"
                  spellCheck={false}
                  className={inputClass}
                />
              </div>
            </div>
            <div className="grid gap-2">
              <label htmlFor="l-domande" className={labelClass}>
                Domande <span className="font-normal text-[#6B6B76]">(eventuali)</span>
              </label>
              <textarea
                id="l-domande"
                name="domande"
                rows={4}
                placeholder="C'è qualcosa che vuoi vedere nella demo?"
                className={inputClass + " resize-y"}
              />
            </div>
            <p className="text-[13px] leading-[1.5] text-[#6B6B76]">
              Usiamo i tuoi dati solo per ricontattarti. Nessuna newsletter,
              nessuna condivisione con terzi.
            </p>
            <button
              type="submit"
              className="mt-1 inline-flex items-center justify-center justify-self-center rounded-full bg-[#7C5CFA] px-6 py-3 text-[15px] font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              Richiedi la demo
            </button>
          </form>
        </Glass>
      )}
    </Section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/60 bg-white/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-6 px-5 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="text-[15px] font-semibold tracking-[0.18em] text-[#010110]">YUMA</div>
          <div className="mt-3 space-y-1 text-[13px] leading-[1.6] text-[#6B6B76]">
            <div>YUMA TX S.r.l. · P. IVA 14244440963</div>
            <div>Sede legale: Via Giacomo Leopardi 14, Milano</div>
            <div>PEC yumatxsrl@pec.it · SDI WY7PJ6k</div>
          </div>
        </div>
        <nav className="flex flex-col gap-2 text-[14px] text-[#6B6B76]">
          <a href={links.home} className="hover:text-[#010110]">Home</a>
          <a href="#" className="hover:text-[#010110]">Privacy policy</a>
          <a href="#" className="hover:text-[#010110]">Cookie policy</a>
        </nav>
      </div>
    </footer>
  )
}

// ── pagina ───────────────────────────────────────────────────────────────────
export default function LandingV3({ content }: { content: LandingContent }) {
  useEffect(() => {
    document.documentElement.style.colorScheme = "light"
  }, [])

  return (
    <div className="relative min-h-screen text-[#010110]">
      <GradientField />
      <LandingNav product={content.product} />

      <main>
        <Hero c={content} />
        <Credibility c={content} />
        <Problem c={content} />
        <Modules c={content} />
        <Roles c={content} />
        <Systems c={content} />
        <Together c={content} />
        <ForWhom c={content} />
        <Faq c={content} />
        <DemoForm c={content} />
      </main>

      <Footer />
      <WhatsAppBar />
    </div>
  )
}
