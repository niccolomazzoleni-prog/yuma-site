import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react"
import { motion, useScroll, useSpring, useMotionValueEvent } from "framer-motion"
import { ArrowRight, Check, Minus, Plus } from "lucide-react"
import {
  Body,
  Eyebrow,
  GradientField,
  Glass,
  Lead,
  Section,
  Title,
} from "@/components/v3/glass"
import { AnimatedTabs } from "@/components/ui/animated-tabs"
import { WhatsAppBar } from "@/components/home/whatsapp-bar"
import { links } from "@/lib/links"
import type { Bullet, LandingContent } from "@/lib/landing-content"

// Landing di prodotto nella direzione "vetro su gradiente": stessi mattoni
// della home v3 (racconto a blocchi, schede animate, timeline che avanza,
// segnaposto tratteggiati per le immagini che mancano).

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

// ── 02 credibilità ───────────────────────────────────────────────────────────
function Credibility({ c }: { c: LandingContent }) {
  return (
    <Section id="credibilita">
      <div className="mx-auto max-w-[820px] text-center">
        <Title className="mx-auto max-w-[22ch]">{c.credibility.headline}</Title>
        <Lead className="mx-auto mt-6 max-w-[62ch]">{c.credibility.body}</Lead>
      </div>

      <ul className="mt-12 grid gap-5 md:grid-cols-3">
        {c.credibility.bullets.map((b) => (
          <li key={b.text}>
            <Glass className="h-full p-7">
              <Body className={b.todo ? "text-[#8A8A97]" : ""}>
                <BulletText item={b} />
              </Body>
            </Glass>
          </li>
        ))}
      </ul>

      {c.credibility.note ? (
        <p className="mt-8 text-center text-[15px] text-[#8A8A97]">
          {c.credibility.note}
          <TodoTag />
        </p>
      ) : null}
    </Section>
  )
}

// ── 03 problema ──────────────────────────────────────────────────────────────
function Problem({ c }: { c: LandingContent }) {
  const p = c.problem
  return (
    <Section id="problema" className="pt-0">
      <div className="mx-auto max-w-[820px] text-center">
        <Eyebrow>{p.label}</Eyebrow>
        <Title className="mx-auto mt-5 max-w-[24ch]">{p.headline}</Title>
        {p.sub ? <Lead className="mx-auto mt-5 max-w-[62ch]">{p.sub}</Lead> : null}
      </div>

      {p.items ? (
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {p.items.map((it) => (
            <Glass key={it.title} className="h-full p-7 md:p-8">
              <h3 className="text-[20px] font-medium leading-[1.2] tracking-[-0.02em] text-[#010110] md:text-[22px]">
                {it.title}
              </h3>
              <Body className="mt-3 text-[15px]">{it.desc}</Body>
            </Glass>
          ))}
        </div>
      ) : null}

      {p.causes ? (
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <Glass className="p-8">
            <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#A3A3AD]">
              {p.causesTitle}
            </p>
            <ul className="mt-5 space-y-4">
              {p.causes.map((x) => (
                <li key={x.title}>
                  <Body>
                    <span className="font-medium text-[#010110]">{x.title}</span>{" "}
                    {x.desc}
                  </Body>
                </li>
              ))}
            </ul>
          </Glass>
          <Glass className="p-8">
            <Eyebrow>{p.solutionTitle}</Eyebrow>
            <ul className="mt-5 space-y-4">
              {p.solutions?.map((x) => (
                <li key={x.title}>
                  <Body>
                    <span className="font-medium text-[#010110]">{x.title}</span>{" "}
                    {x.desc}
                  </Body>
                </li>
              ))}
            </ul>
          </Glass>
        </div>
      ) : null}

      {p.table ? (
        <Glass className="mt-5 overflow-x-auto p-6 md:p-8">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">{p.tableTitle}</caption>
            <thead>
              <tr>
                <th className="w-1/2 border-b border-[#010110]/10 pb-4 text-[12px] font-medium uppercase tracking-[0.14em] text-[#A3A3AD]">
                  Oggi
                </th>
                <th className="w-1/2 border-b border-[#010110]/10 pb-4 pl-6 text-[12px] font-medium uppercase tracking-[0.14em] text-[#7C5CFA]">
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
        </Glass>
      ) : null}
    </Section>
  )
}

// ── 04 moduli, in schede animate ─────────────────────────────────────────────
function Modules({ c }: { c: LandingContent }) {
  const statusStyle: Record<string, string> = {
    attivo: "bg-[#7C5CFA]/15 text-[#5B3FD9]",
    "in rilascio": "bg-[#010110]/6 text-[#4A4A58]",
    "in sviluppo": "bg-[#010110]/6 text-[#8A8A97]",
  }

  const tabs = c.modules.items.map((m) => ({
    id: m.name,
    label: m.name,
    content: (
      <div className="grid h-full w-full gap-6 md:grid-cols-2">
        <Shot label={`Schermata ${m.name}`} ratio="4 / 3" className="w-full" />
        <div className="flex flex-col justify-center gap-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="m-0 text-[22px] font-medium tracking-[-0.02em] text-[#010110] md:text-[26px]">
              {m.name}
            </h3>
            <span className={`rounded-full px-3 py-1 text-[12px] font-medium ${statusStyle[m.status]}`}>
              {m.status}
            </span>
          </div>
          <p className="m-0 text-[15px] leading-[1.55] text-[#4A4A58] md:text-[16px]">
            {m.desc}
          </p>
        </div>
      </div>
    ),
  }))

  return (
    <Section id="moduli" className="pt-0">
      <div className="mx-auto max-w-[820px] text-center">
        <Eyebrow>{c.modules.label}</Eyebrow>
        <Title className="mx-auto mt-5 max-w-[24ch]">{c.modules.headline}</Title>
        {c.modules.note ? (
          <p className="mt-5 text-[15px] text-[#8A8A97]">
            {c.modules.note.text}
            {c.modules.note.todo ? <TodoTag /> : null}
          </p>
        ) : null}
      </div>

      <AnimatedTabs
        tabs={tabs}
        tone="glass"
        className="mx-auto mt-12 max-w-[1000px]"
        panelClassName="p-6 md:p-8"
      />

      {c.modules.items.some((m) => m.statusTodo) ? (
        <p className="mt-6 text-center text-[14px] text-[#8A8A97]">
          Lo stato dei moduli è
          <TodoTag />
        </p>
      ) : null}
    </Section>
  )
}

// ── 05 ruoli ─────────────────────────────────────────────────────────────────
function Roles({ c }: { c: LandingContent }) {
  return (
    <Section id="ruoli" className="pt-0">
      <div className="mx-auto max-w-[820px] text-center">
        <Eyebrow>{c.roles.label}</Eyebrow>
        <Title className="mx-auto mt-5 max-w-[22ch]">{c.roles.headline}</Title>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {c.roles.items.map((r) => (
          <Glass key={r.role} className="h-full p-7 md:p-8">
            <h3 className="text-[20px] font-medium tracking-[-0.02em] text-[#010110] md:text-[22px]">
              {r.role}
            </h3>
            <Body className="mt-3 text-[15px]">{r.desc}</Body>
          </Glass>
        ))}
      </div>
    </Section>
  )
}

// ── 06 caso sul campo ────────────────────────────────────────────────────────
function CaseStudy({ c }: { c: LandingContent }) {
  const cs = c.caseStudy
  return (
    <Section id="caso" className="pt-0">
      <div className="mx-auto max-w-[820px] text-center">
        <Eyebrow>{cs.label}</Eyebrow>
        <Title className="mx-auto mt-5 max-w-[24ch]">{cs.headline}</Title>
        <p className="mt-4 text-[15px] italic text-[#8A8A97]">{cs.note}</p>
      </div>

      <Glass className="mt-12 overflow-hidden">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="p-6 md:p-8">
            <Shot label="Foto o schermata del caso" ratio="4 / 3" />
          </div>
          <div className="p-6 md:p-10">
            {cs.blocks.map((b) => (
              <Body key={b.title} className="mb-4 last:mb-0">
                <span className="font-medium text-[#010110]">{b.title}</span> {b.desc}
              </Body>
            ))}
          </div>
        </div>
      </Glass>

      <Glass className="mt-5 p-8 md:p-10">
        <div className="flex flex-wrap items-baseline gap-3">
          <h3 className="text-[20px] font-medium text-[#010110] md:text-[22px]">
            {cs.resultsTitle}
          </h3>
          <span className="text-[13px] text-[#8A8A97]">{cs.resultsNote}</span>
          <TodoTag />
        </div>
        <ul className="mt-5 space-y-3">
          {cs.results.map((r) => (
            <li key={r.text} className="flex items-start gap-3">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#7C5CFA]" />
              <span className={`text-[16px] leading-[1.5] ${r.todo ? "text-[#8A8A97]" : "text-[#2A2A38]"}`}>
                <BulletText item={r} />
              </span>
            </li>
          ))}
        </ul>
      </Glass>
    </Section>
  )
}

// ── 07 i tuoi sistemi ────────────────────────────────────────────────────────
function Systems({ c }: { c: LandingContent }) {
  return (
    <Section id="sistemi" className="pt-0">
      <div className="mx-auto max-w-[820px] text-center">
        <Eyebrow>{c.systems.label}</Eyebrow>
        <Title className="mx-auto mt-5 max-w-[24ch]">{c.systems.headline}</Title>
        <Lead className="mx-auto mt-5 max-w-[62ch]">{c.systems.sub}</Lead>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {c.systems.items.map((it) => {
          const [title, ...rest] = it.text.split(". ")
          return (
            <Glass key={it.text} className="h-full p-7 md:p-8">
              <h3 className="text-[19px] font-medium tracking-[-0.02em] text-[#010110] md:text-[21px]">
                {title}
              </h3>
              <Body className="mt-3 text-[15px]">
                {rest.join(". ")}
                {it.todo ? <TodoTag /> : null}
              </Body>
            </Glass>
          )
        })}
      </div>
    </Section>
  )
}

// ── 08 come si lavora insieme: timeline che avanza ───────────────────────────
function Together({ c }: { c: LandingContent }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  })
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 24 })
  const [active, setActive] = useState(0)
  const steps = c.together.steps

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(steps.length - 1, Math.floor(v * steps.length)))
  })

  return (
    <Section id="come-si-lavora" className="pt-0">
      <div className="mx-auto max-w-[820px] text-center">
        <Eyebrow>{c.together.label}</Eyebrow>
        <Title className="mx-auto mt-5 max-w-[24ch]">{c.together.headline}</Title>
      </div>

      <div ref={ref} className="relative mx-auto mt-14 max-w-[820px] pl-12 md:pl-16">
        <div aria-hidden className="absolute bottom-0 left-[22px] top-2 w-px bg-[#010110]/10 md:left-[30px]" />
        <motion.div
          aria-hidden
          style={{ scaleY: fill, originY: 0 }}
          className="absolute bottom-0 left-[22px] top-2 w-px bg-[#7C5CFA] md:left-[30px]"
        />
        <ol className="space-y-8">
          {steps.map((s, i) => (
            <li key={s.n} className="relative">
              <span
                aria-hidden
                className={`absolute -left-12 top-0 flex h-11 w-11 items-center justify-center rounded-full border text-[14px] font-medium tabular-nums transition-colors duration-500 md:-left-16 ${
                  i <= active
                    ? "border-[#7C5CFA] bg-[#7C5CFA] text-white"
                    : "border-[#010110]/15 bg-white text-[#A3A3AD]"
                }`}
              >
                {i < active ? <Check className="h-5 w-5" /> : s.n}
              </span>
              <Glass className="p-6 md:p-7">
                <h3 className="text-[19px] font-medium tracking-[-0.02em] text-[#010110] md:text-[22px]">
                  {s.title}
                </h3>
                <Body className="mt-2 text-[15px]">{s.desc}</Body>
              </Glass>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}

// ── 09 a chi è rivolto ───────────────────────────────────────────────────────
function ForWhom({ c }: { c: LandingContent }) {
  return (
    <Section id="a-chi-e-rivolto" className="pt-0">
      <div className="mx-auto max-w-[820px] text-center">
        <Eyebrow>{c.forWhom.label}</Eyebrow>
        <Title className="mx-auto mt-5 max-w-[22ch]">{c.forWhom.headline}</Title>
      </div>

      <Glass className="mx-auto mt-12 max-w-[880px] p-8 md:p-10">
        <ul className="space-y-4">
          {c.forWhom.bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 border-b border-[#010110]/8 pb-4 last:border-0 last:pb-0">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#7C5CFA]" />
              <span className="text-[16px] leading-[1.5] text-[#2A2A38]">{b}</span>
            </li>
          ))}
        </ul>
      </Glass>

      <p className="mx-auto mt-6 max-w-[880px] text-[15px] leading-[1.6] text-[#8A8A97]">
        {c.forWhom.notFor}
      </p>
    </Section>
  )
}

// ── 10 domande frequenti ─────────────────────────────────────────────────────
function Faq({ c }: { c: LandingContent }) {
  const [open, setOpen] = useState(0)
  return (
    <Section id="faq" className="pt-0">
      <div className="mx-auto max-w-[820px] text-center">
        <Eyebrow>{c.faq.label}</Eyebrow>
        <Title className="mx-auto mt-5 max-w-[22ch]">{c.faq.headline}</Title>
      </div>

      <Glass className="mx-auto mt-12 max-w-[880px] p-6 md:p-10">
        {c.faq.items.map((f, i) => {
          const isOpen = open === i
          return (
            <div key={f.q} className="border-b border-[#010110]/8 last:border-0">
              <h3 className="m-0">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 py-5 text-left"
                >
                  <span
                    className={`flex-1 text-[17px] font-medium tracking-[-0.015em] md:text-[19px] ${
                      isOpen ? "text-[#010110]" : "text-[#4A4A58]"
                    }`}
                  >
                    {f.q}
                  </span>
                  <span className="text-[#7C5CFA]">
                    {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </span>
                </button>
              </h3>
              <div
                className={`grid transition-[grid-template-rows] duration-200 ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <Body className={`max-w-[62ch] pb-5 ${f.todo ? "text-[#8A8A97]" : ""}`}>
                    {f.a}
                    {f.todo ? <TodoTag /> : null}
                  </Body>
                </div>
              </div>
            </div>
          )
        })}
      </Glass>
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
        <CaseStudy c={content} />
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
