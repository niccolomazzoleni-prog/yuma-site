import { useEffect, useRef, useState } from "react"
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
import { Shot } from "@/components/v3/shot"
import { SelectorBlock, type SelectorItem } from "@/components/v3/selector-block"
import { SystemsDiagramBlock } from "@/components/v3/systems-diagram"
import { StepsWizard } from "@/components/v3/steps-wizard"
import { FAQ, type FaqData } from "@/components/ui/faq-tabs"
import { PhotoSlot } from "@/components/v3/photo-slot"
import { CompareCardsBlock } from "@/components/v3/compare-variants"
import { SolutionsAccordionBlock } from "@/components/v3/solutions-variants"
import { MobileNav, SiteFooter, SkipLink } from "@/components/v3/site-chrome"
import { WhatsAppBar } from "@/components/home/whatsapp-bar"
import { links } from "@/lib/links"
import { LeadForm } from "@/components/v3/lead-form"
import { projectsContent as c, type LandingContent } from "@/lib/landing-content"
import { YumaLogo } from "@/components/v3/logo"

// Landing YUMA Projects, direzione vetro su gradiente. Riusa i blocchi scelti
// per Client Interface, ma cambia struttura dove altrimenti si ripeterebbe:
// moduli a selettore (sono sei), ruoli ad adesivi, cause del problema a card
// alternate, soluzioni in schede animate, confronto Oggi/Con YUMA a tabella.

function TodoTag() {
  return (
    <span className="ml-2 inline-block rounded-[4px] bg-white/70 px-2 py-0.5 align-middle text-[11px] font-medium uppercase tracking-[0.06em] text-[#56565B]">
      da confermare
    </span>
  )
}

function Cta({ children, href = "#richiedi-demo", variant = "violet" }: { children: React.ReactNode; href?: string; variant?: "violet" | "ghost" }) {
  const styles =
    variant === "violet"
      ? "bg-[#6D4CF2] text-white"
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
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 md:pt-5">
      <div className="mx-auto flex w-full max-w-[1180px] items-center justify-between gap-4 rounded-full border border-white/70 bg-white/55 px-5 py-2 backdrop-blur-xl md:px-6">
        <a href={links.home} className="inline-flex items-center py-1 text-[#1D1D1F]">
          <YumaLogo className="h-[18px] w-auto md:h-5" />
        </a>
        <nav aria-label="Principale" className="hidden items-center gap-7 text-[14px] text-[#424245] lg:flex">
          {items.map((i) => (
            <a key={i.href} href={i.href} className="transition-colors hover:text-[#1D1D1F]">
              {i.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#richiedi-demo" className="inline-flex items-center justify-center whitespace-nowrap rounded-full px-3.5 py-2 text-center text-[13px] font-medium sm:px-4 sm:py-2.5 sm:text-[14px] bg-[#6D4CF2] text-white">
            Richiedi una demo
          </a>
          <MobileNav anchors={items} current="projects" cta={{ label: "Richiedi una demo", href: "#richiedi-demo" }} />
        </div>
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
          <h1 className="mt-5 max-w-[18ch] text-balance text-[32px] font-medium leading-[1.03] tracking-[-0.04em] text-[#1D1D1F] sm:text-[46px] lg:text-[44px] xl:text-[54px]">
            {c.hero.headline}
          </h1>
          <Lead className="mt-6 max-w-[52ch]">{c.hero.sub}</Lead>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap [&>a]:justify-center sm:[&>a]:justify-start">
            <Cta>{c.hero.cta}</Cta>
            <Cta href={links.home} variant="ghost">
              Scopri YUMA
            </Cta>
          </div>
        </div>
        <Glass className="p-5 md:p-6">
          <Shot
            label={`Schermata ${c.product}`}
            src={`${import.meta.env.BASE_URL}screen-projects.webp`}
            alt="YUMA Projects, la vista Oggi: margine di portafoglio contro budget, opportunità trovate da Yuma e dichiarazioni arrivate dal campo"
            eager
          />
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

      <Glass className="mt-12 overflow-hidden p-2 sm:p-5 md:p-6">
        {/* su telefono 4:3, tenendo il capo cantiere a sinistra */}
        <PhotoSlot n={5} ratio="21 / 9" mobileRatio="4 / 3" position="15% 70%" className="rounded-[20px] sm:rounded-[16px]" subject="un cantiere vero in piena attività: un capo cantiere con il casco al telefono, mezzi e materiali sullo sfondo" />
      </Glass>

      <p className="mt-8 flex flex-wrap items-center justify-center gap-3 text-center text-[16px] text-[#333336]">
        <Check className="h-5 w-5 text-[#7C5CFA]" />
        {claim.text}
      </p>
      {c.credibility.note ? (
        <p className="mt-3 text-center text-[15px] text-[#56565B]">
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

      <p className="mt-14 text-[12px] font-medium uppercase tracking-[0.14em] text-[#56565B]">
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
                <span className="text-[12px] font-medium tabular-nums text-[#5B3FD9]">
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
  "in sviluppo": "bg-[#F5A623]/15 text-[#7A4E00] ring-1 ring-inset ring-[#F5A623]/30",
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
        infographics={[27, 28, 29, 30, 31, 32]}
      />
      <div className="mx-auto -mt-16 max-w-[1180px] px-5 pb-20 text-center md:pb-28">
        {c.modules.note ? (
          <p className="text-[14px] text-[#56565B]">
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
          <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#56565B]">
            Quante te ne riconosci?
          </span>
          <span aria-hidden className="text-[15px] font-medium tabular-nums text-[#5B3FD9]">
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
                  aria-hidden
                  className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-[8px] border transition-all duration-500 ${
                    isDone
                      ? "border-[#6D4CF2] bg-[#6D4CF2] text-white"
                      : "border-[#1D1D1F]/20 bg-white/60 text-transparent"
                  }`}
                >
                  <Check className="h-4 w-4" />
                </span>
                <span
                  className={`text-[17px] leading-[1.5] transition-colors duration-500 ${
                    isDone ? "text-[#1D1D1F]" : "text-[#56565B]"
                  }`}
                >
                  {b}
                </span>
              </li>
            )
          })}
        </ul>
      </Glass>

      <p className="mx-auto mt-8 max-w-[760px] text-center text-[15px] leading-[1.6] text-[#56565B]">
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
// ── modulo subito sotto l'hero: chi è già convinto non deve scorrere fino in fondo
function TopForm({ c }: { c: LandingContent }) {
  return (
    <Section id="richiedi-demo" className="pb-10 pt-6 md:pb-16 md:pt-10">
      <div className="mx-auto max-w-[720px] text-center">
        <h2 className="text-balance text-[24px] font-medium leading-[1.15] tracking-[-0.025em] text-[#1D1D1F] md:text-[30px]">
          {c.cta.headline}
        </h2>
        <Lead className="mx-auto mt-3 max-w-[56ch] text-[16px] md:text-[17px]">{c.cta.body}</Lead>
      </div>
      <LeadForm form="projects" instance="top" submitLabel="Richiedi la demo" />
    </Section>
  )
}

function DemoForm() {
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

      <LeadForm form="projects" submitLabel="Richiedi la demo" />
    </Section>
  )
}

export default function ProjectsLanding() {
  useEffect(() => {
    document.documentElement.style.colorScheme = "light"
  }, [])

  return (
    <div className="relative min-h-screen text-[#1D1D1F]">
      <SkipLink />
      <GradientField />
      <Nav />

      <main id="contenuto">
        <Hero />
        <TopForm c={c} />
        <Credibility />
        <Problem />
        <Modules />
        <Roles />
        <SystemsDiagramBlock
          systems={c.systems}
          image={`${import.meta.env.BASE_URL}schema-projects.webp`}
          imageAlt="Vocali, foto, messaggi e DDT convergono in YUMA, che li struttura e li scrive in ERP e gestionale di cantiere, che restano la fonte di verità"
          imageWidth={1536}
          imageHeight={864}
        />
        <StepsWizard together={c.together} />
        <Fit />
        <Faq />
        <DemoForm />
      </main>

      <SiteFooter current="projects" />
      <WhatsAppBar />
    </div>
  )
}
