import { useEffect, useRef, useState, type FormEvent } from "react"
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
import { Shot } from "@/components/v3/landing"
import { SelectorBlock, type SelectorItem } from "@/components/v3/selector-block"
import { SystemsDiagramBlock } from "@/components/v3/systems-diagram"
import { StepsWizard } from "@/components/v3/steps-wizard"
import { FAQ, type FaqData } from "@/components/ui/faq-tabs"
import { PhotoSlot } from "@/components/v3/photo-slot"
import { CompareCardsBlock } from "@/components/v3/compare-variants"
import { SolutionsAccordionBlock } from "@/components/v3/solutions-variants"
import { WhatsAppBar } from "@/components/home/whatsapp-bar"
import { links } from "@/lib/links"
import { projectsContent as c } from "@/lib/landing-content"

// Landing YUMA Projects, direzione vetro su gradiente. Riusa i blocchi scelti
// per Client Interface, ma cambia struttura dove altrimenti si ripeterebbe:
// moduli a selettore (sono sei), ruoli ad adesivi, cause del problema a card
// alternate, soluzioni in schede animate, confronto Oggi/Con YUMA a tabella.

function TodoTag() {
  return (
    <span className="ml-2 inline-block rounded-[4px] bg-white/70 px-2 py-0.5 align-middle text-[11px] font-medium uppercase tracking-[0.06em] text-[#A1A1A6]">
      da confermare
    </span>
  )
}

function Cta({ children, href = "#demo", variant = "violet" }: { children: React.ReactNode; href?: string; variant?: "violet" | "ghost" }) {
  const styles =
    variant === "violet"
      ? "bg-[#7C5CFA] text-white"
      : "border border-white/70 bg-white/60 text-[#1D1D1F] backdrop-blur-xl"
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 text-[15px] font-medium transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1F] focus-visible:ring-offset-2 ${styles}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </a>
  )
}

// ── nav ──────────────────────────────────────────────────────────────────────
function Nav() {
  const items = [
    { label: "Il problema", href: "#problema" },
    { label: "I moduli", href: "#moduli" },
    { label: "Come si lavora", href: "#come-si-lavora" },
    { label: "FAQ", href: "#faq" },
  ]
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-5 pt-5">
      <div className="mx-auto flex w-full max-w-[1180px] items-center justify-between gap-6 rounded-full border border-white/70 bg-white/55 px-5 py-2.5 backdrop-blur-xl md:px-6">
        <a href={links.home} className="text-[15px] font-semibold tracking-[0.18em] text-[#1D1D1F]">
          YUMA
        </a>
        <nav className="hidden items-center gap-7 text-[14px] text-[#424245] lg:flex">
          {items.map((i) => (
            <a key={i.href} href={i.href} className="transition-colors hover:text-[#1D1D1F]">
              {i.label}
            </a>
          ))}
        </nav>
        <a href="#demo" className="rounded-full bg-[#7C5CFA] px-4 py-2 text-[14px] font-medium text-white">
          Richiedi una demo
        </a>
      </div>
    </header>
  )
}

// ── 01 hero ──────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="top" className="mx-auto max-w-[1180px] px-5 pb-10 pt-28 md:pt-36">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14">
        <div>
          <Eyebrow>{c.product}</Eyebrow>
          <h1 className="mt-5 max-w-[18ch] text-balance text-[36px] font-medium leading-[1.03] tracking-[-0.04em] text-[#1D1D1F] sm:text-[46px] lg:text-[54px]">
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

// ── 02 credibilità ───────────────────────────────────────────────────────────
function Credibility() {
  const claim = c.credibility.bullets[c.credibility.bullets.length - 1]
  return (
    <Section id="credibilita">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
        <Title className="max-w-[16ch]">{c.credibility.headline}</Title>
        <Lead className="max-w-[58ch] lg:pt-2">{c.credibility.body}</Lead>
      </div>

      <Glass className="mt-12 p-5 md:p-6">
        <PhotoSlot n={5} ratio="21 / 9" subject="un cantiere vero in piena attività: un capo cantiere con il casco al telefono, mezzi e materiali sullo sfondo" />
      </Glass>

      <p className="mt-8 flex flex-wrap items-center justify-center gap-3 text-center text-[16px] text-[#333336]">
        <Check className="h-5 w-5 text-[#7C5CFA]" />
        {claim.text}
      </p>
      {c.credibility.note ? (
        <p className="mt-3 text-center text-[15px] text-[#86868B]">
          {c.credibility.note}
          <TodoTag />
        </p>
      ) : null}
    </Section>
  )
}

// ── 03 problema: cause a card alternate, soluzioni in schede, poi il confronto
const causePhotos = [
  { n: 6, subject: "un operatore in cantiere che fotografa un DDT o manda un vocale dallo smartphone" },
  { n: 7, subject: "un'impiegata dell'ufficio tecnico tra pile di rapportini e DDT, che li ricopia al computer" },
  { n: 8, subject: "titolare e project manager a fine lavori che confrontano preventivo e consuntivo su carta, espressione preoccupata" },
]

function Problem() {
  const p = c.problem
  return (
    <Section id="problema" className="pt-0">
      <div className="mx-auto max-w-[860px] text-center">
        <Eyebrow>{p.label}</Eyebrow>
        <Title className="mx-auto mt-5 max-w-[22ch]">{p.headline}</Title>
        {p.sub ? <Lead className="mx-auto mt-5 max-w-[62ch]">{p.sub}</Lead> : null}
      </div>

      <p className="mt-14 text-[12px] font-medium uppercase tracking-[0.14em] text-[#A1A1A6]">
        {p.causesTitle}
      </p>

      <div className="mt-6 flex flex-col gap-6">
        {p.causes?.map((cause, i) => {
          const imageFirst = i % 2 === 1
          return (
            <Glass
              key={cause.title}
              className="grid items-center gap-8 p-8 md:grid-cols-2 md:gap-12 md:p-10"
            >
              <div className={imageFirst ? "md:order-2" : ""}>
                <span className="text-[12px] font-medium tabular-nums text-[#7C5CFA]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 max-w-[22ch] text-[24px] font-medium leading-[1.15] tracking-[-0.025em] text-[#1D1D1F] md:text-[30px]">
                  {cause.title.replace(/\.$/, "")}
                </h3>
                <Body className="mt-4 max-w-[52ch]">{cause.desc}</Body>
              </div>
              <div className={imageFirst ? "md:order-1" : ""}>
                {causePhotos[i] ? <PhotoSlot n={causePhotos[i].n} subject={causePhotos[i].subject} /> : null}
              </div>
            </Glass>
          )
        })}
      </div>

      {/* come YUMA Projects risolve: fisarmonica con spunta verde */}
      {p.solutions ? (
        <div className="mt-24">
          <Title className="mx-auto max-w-[22ch] text-center">{p.solutionTitle}</Title>
          <SolutionsAccordionBlock className="mt-12" />
        </div>
      ) : null}

      {/* oggi / con YUMA Projects: due schede, quella YUMA in evidenza */}
      {p.table ? (
        <div className="mt-24">
          <Title className="mx-auto max-w-[22ch] text-center">{p.tableTitle}</Title>
          <CompareCardsBlock className="mt-12" />
        </div>
      ) : null}
    </Section>
  )
}

// ── 04 moduli: sei, quindi selettore con dettaglio e schermata ───────────────
const statusStyle: Record<string, string> = {
  attivo: "bg-[#7C5CFA]/15 text-[#5B3FD9]",
  "in rilascio": "bg-[#F5A623]/25 text-[#7A4E00] ring-1 ring-inset ring-[#F5A623]/45",
  "in sviluppo": "bg-[#F5A623]/15 text-[#8A5E14] ring-1 ring-inset ring-[#F5A623]/30",
}

function Modules() {
  const items: SelectorItem[] = c.modules.items.map((m) => ({
    label: m.name,
    title: m.name,
    desc: m.desc,
    badge: (
      <span className={`rounded-full px-3 py-1 text-[12px] font-medium ${statusStyle[m.status]}`}>
        {m.status}
      </span>
    ),
  }))

  return (
    <>
      <SelectorBlock
        id="moduli"
        eyebrow={c.modules.label}
        title={c.modules.headline}
        items={items}
        imageRatio="4 / 3"
      />
      <div className="mx-auto -mt-16 max-w-[1180px] px-5 pb-20 text-center md:pb-28">
        {c.modules.note ? (
          <p className="text-[14px] text-[#86868B]">
            {c.modules.note.text}
            <TodoTag />
          </p>
        ) : null}
      </div>
    </>
  )
}

// ── 05 ruoli: adesivi inclinati ──────────────────────────────────────────────
function Roles() {
  const rotations = ["-2deg", "1.6deg", "-1.4deg"]
  return (
    <Section id="ruoli" className="pt-0">
      <div className="mx-auto max-w-[820px] text-center">
        <Eyebrow>{c.roles.label}</Eyebrow>
        <Title className="mx-auto mt-5 max-w-[20ch]">{c.roles.headline}</Title>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {c.roles.items.map((r, i) => (
          <div
            key={r.role}
            style={{ ["--rot" as string]: rotations[i % rotations.length] }}
            className="[transform:rotate(var(--rot))] transition-transform duration-500 hover:[transform:rotate(0deg)_translateY(-6px)]"
          >
            <Glass className="relative h-full p-7 md:p-8">
              <span
                aria-hidden
                className="absolute -top-3 left-7 h-6 w-14 rounded-[4px] bg-[#7C5CFA]/25 backdrop-blur-sm"
              />
              <h3 className="text-[19px] font-medium tracking-[-0.02em] text-[#1D1D1F] md:text-[21px]">
                {r.role}
              </h3>
              <Body className="mt-3 text-[15px]">{r.desc}</Body>
            </Glass>
          </div>
        ))}
      </div>
    </Section>
  )
}

// ── 09 fa per te se: checklist che si spunta ─────────────────────────────────
function Fit() {
  const [done, setDone] = useState<number[]>([])
  const refs = useRef<(HTMLLIElement | null)[]>([])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = Number((e.target as HTMLElement).dataset.i)
            setDone((d) => (d.includes(i) ? d : [...d, i]))
          }
        }),
      { threshold: 0.6 },
    )
    refs.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <Section id="a-chi-e-rivolto" className="pt-0">
      <div className="mx-auto max-w-[820px] text-center">
        <Eyebrow>{c.forWhom.label}</Eyebrow>
        <Title className="mx-auto mt-5 max-w-[22ch]">{c.product} fa per la tua azienda se:</Title>
      </div>

      <Glass className="mx-auto mt-12 max-w-[880px] p-8 md:p-10">
        <div className="flex items-baseline justify-between gap-4 border-b border-[#1D1D1F]/10 pb-5">
          <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#A1A1A6]">
            Quante te ne riconosci?
          </span>
          <span className="text-[15px] font-medium tabular-nums text-[#7C5CFA]">
            {done.length} / {c.forWhom.bullets.length}
          </span>
        </div>

        <ul className="mt-2">
          {c.forWhom.bullets.map((b, i) => {
            const isDone = done.includes(i)
            return (
              <li
                key={b}
                data-i={i}
                ref={(el) => {
                  refs.current[i] = el
                }}
                className="flex items-start gap-4 border-b border-[#1D1D1F]/8 py-6 last:border-0"
              >
                <span
                  className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-[8px] border transition-all duration-500 ${
                    isDone
                      ? "border-[#7C5CFA] bg-[#7C5CFA] text-white"
                      : "border-[#1D1D1F]/20 bg-white/60 text-transparent"
                  }`}
                >
                  <Check className="h-4 w-4" />
                </span>
                <span
                  className={`text-[17px] leading-[1.5] transition-colors duration-500 ${
                    isDone ? "text-[#1D1D1F]" : "text-[#A1A1A6]"
                  }`}
                >
                  {b}
                </span>
              </li>
            )
          })}
        </ul>
      </Glass>

      <p className="mx-auto mt-8 max-w-[760px] text-center text-[15px] leading-[1.6] text-[#86868B]">
        {c.forWhom.notFor}
      </p>
    </Section>
  )
}

// ── 10 FAQ a gruppi ──────────────────────────────────────────────────────────
function Faq() {
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
    <Section className="pt-0">
      <FAQ title={c.faq.headline} subtitle={c.faq.label} categories={categories} faqData={groups} />
    </Section>
  )
}

// ── 11 obiezione + modulo demo ───────────────────────────────────────────────
const inputClass =
  "w-full rounded-[10px] border border-white/70 bg-white/70 px-4 py-3 text-[16px] text-[#1D1D1F] placeholder:text-[#9A9AA6] outline-none transition-shadow duration-200 focus:border-[#7C5CFA] focus:ring-4 focus:ring-[#7C5CFA]/15"
const labelClass = "text-[14px] font-medium text-[#1D1D1F]"

function DemoForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // TODO: collegare invio (email/CRM). Per ora mostra la conferma.
    setSent(true)
  }

  return (
    <Section id="demo" className="pt-0">
      <Glass className="mx-auto max-w-[820px] p-8 md:p-10">
        <h2 className="text-[22px] font-medium leading-[1.2] tracking-[-0.02em] text-[#1D1D1F] md:text-[26px]">
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
          <Body className="text-[#1D1D1F]">
            Grazie, abbiamo ricevuto la tua richiesta. Ti scriviamo entro un
            giorno lavorativo.
          </Body>
        </Glass>
      ) : (
        <Glass className="mx-auto mt-10 max-w-[720px] p-8 md:p-10">
          <form onSubmit={handleSubmit} className="grid gap-5 text-left">
            <div className="grid gap-2">
              <label htmlFor="p-nome" className={labelClass}>
                Nome e cognome
              </label>
              <input id="p-nome" name="nome" type="text" required autoComplete="name" className={inputClass} />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <label htmlFor="p-azienda" className={labelClass}>
                  Azienda
                </label>
                <input id="p-azienda" name="azienda" type="text" required autoComplete="organization" className={inputClass} />
              </div>
              <div className="grid gap-2">
                <label htmlFor="p-ruolo" className={labelClass}>
                  Ruolo
                </label>
                <input id="p-ruolo" name="ruolo" type="text" autoComplete="organization-title" className={inputClass} />
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <label htmlFor="p-telefono" className={labelClass}>
                  Telefono
                </label>
                <input id="p-telefono" name="telefono" type="tel" inputMode="tel" autoComplete="tel" className={inputClass} />
              </div>
              <div className="grid gap-2">
                <label htmlFor="p-email" className={labelClass}>
                  Email
                </label>
                <input id="p-email" name="email" type="email" required inputMode="email" autoComplete="email" spellCheck={false} className={inputClass} />
              </div>
            </div>
            <div className="grid gap-2">
              <label htmlFor="p-domande" className={labelClass}>
                Domande <span className="font-normal text-[#6E6E73]">(eventuali)</span>
              </label>
              <textarea
                id="p-domande"
                name="domande"
                rows={4}
                placeholder="C'è qualcosa che vuoi vedere nella demo?"
                className={inputClass + " resize-y"}
              />
            </div>
            <p className="text-[13px] leading-[1.5] text-[#6E6E73]">
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
          <div className="text-[15px] font-semibold tracking-[0.18em] text-[#1D1D1F]">YUMA</div>
          <div className="mt-3 space-y-1 text-[13px] leading-[1.6] text-[#6E6E73]">
            <div>YUMA TX S.r.l. · P. IVA 14244440963</div>
            <div>Sede legale: Via Giacomo Leopardi 14, Milano</div>
            <div>PEC yumatxsrl@pec.it · SDI WY7PJ6k</div>
          </div>
        </div>
        <nav className="flex flex-col gap-2 text-[14px] text-[#6E6E73]">
          <a href={links.home} className="hover:text-[#1D1D1F]">Home</a>
          <a href={links.clientInterface} className="hover:text-[#1D1D1F]">YUMA Client Interface</a>
          <a href="#" className="hover:text-[#1D1D1F]">Privacy policy</a>
        </nav>
      </div>
    </footer>
  )
}

export default function ProjectsLanding() {
  useEffect(() => {
    document.documentElement.style.colorScheme = "light"
  }, [])

  return (
    <div className="relative min-h-screen text-[#1D1D1F]">
      <GradientField />
      <Nav />

      <main>
        <Hero />
        <Credibility />
        <Problem />
        <Modules />
        <Roles />
        <SystemsDiagramBlock systems={c.systems} diagramNumber={26} />
        <StepsWizard together={c.together} />
        <Fit />
        <Faq />
        <DemoForm />
      </main>

      <Footer />
      <WhatsAppBar />
    </div>
  )
}
