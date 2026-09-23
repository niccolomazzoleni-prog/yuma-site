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
    "in sviluppo": "bg-[#010110]/6 text-[#8A8A97]",
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

// ── 05 ruoli: righe con l'etichetta a sinistra, come una scheda tecnica ─────
function Roles({ c }: { c: LandingContent }) {
  return (
    <Section id="ruoli" className="pt-0">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
        <div>
          <Eyebrow>{c.roles.label}</Eyebrow>
          <Title className="mt-5 max-w-[14ch]">{c.roles.headline}</Title>
        </div>

        <dl className="divide-y divide-[#010110]/10 border-y border-[#010110]/10">
          {c.roles.items.map((r) => (
            <div key={r.role} className="grid gap-2 py-7 md:grid-cols-[200px_minmax(0,1fr)] md:gap-8">
              <dt className="text-[17px] font-medium tracking-[-0.015em] text-[#010110]">
                {r.role}
              </dt>
              <dd className="m-0">
                <Body className="text-[15px]">{r.desc}</Body>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}

// ── 06 caso sul campo: impaginazione editoriale ─────────────────────────────
function CaseStudy({ c }: { c: LandingContent }) {
  const cs = c.caseStudy
  return (
    <Section id="caso" className="pt-0">
      <Eyebrow>{cs.label}</Eyebrow>
      <Title className="mt-5 max-w-[20ch]">{cs.headline}</Title>
      <p className="mt-3 text-[15px] italic text-[#8A8A97]">{cs.note}</p>

      <div className="mt-10">
        <Shot label="Foto o schermata del caso" ratio="21 / 9" className="w-full" />
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-12">
        {cs.blocks.map((b) => (
          <div key={b.title}>
            <h3 className="text-[17px] font-medium text-[#010110]">{b.title}</h3>
            <Body className="mt-3">{b.desc}</Body>
          </div>
        ))}
      </div>

      <div className="mt-12 border-t border-[#010110]/10 pt-8">
        <div className="flex flex-wrap items-baseline gap-3">
          <h3 className="text-[17px] font-medium text-[#010110]">{cs.resultsTitle}</h3>
          <span className="text-[13px] text-[#8A8A97]">{cs.resultsNote}</span>
          <TodoTag />
        </div>
        <ul className="mt-6 grid gap-6 md:grid-cols-3">
          {cs.results.map((r, i) => (
            <li key={r.text} className="border-l border-[#7C5CFA]/30 pl-5">
              <span className="text-[12px] font-medium tabular-nums text-[#7C5CFA]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className={`mt-2 text-[16px] leading-[1.5] ${r.todo ? "text-[#8A8A97]" : "text-[#2A2A38]"}`}>
                <BulletText item={r} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

// ── 07 i tuoi sistemi: griglia a filetti, senza riquadri ────────────────────
function Systems({ c }: { c: LandingContent }) {
  return (
    <Section id="sistemi" className="pt-0">
      <div className="mx-auto max-w-[820px]">
        <Eyebrow>{c.systems.label}</Eyebrow>
        <Title className="mt-5 max-w-[22ch]">{c.systems.headline}</Title>
        <Lead className="mt-5 max-w-[62ch]">{c.systems.sub}</Lead>
      </div>

      <div className="mt-12 grid border-t border-[#010110]/10 md:grid-cols-2">
        {c.systems.items.map((it, i) => {
          const [title, ...rest] = it.text.split(". ")
          return (
            <div
              key={it.text}
              className={`border-b border-[#010110]/10 py-8 md:py-10 ${
                i % 2 === 0 ? "md:pr-10" : "md:border-l md:pl-10"
              }`}
            >
              <h3 className="text-[18px] font-medium tracking-[-0.015em] text-[#010110] md:text-[20px]">
                {title}
              </h3>
              <Body className="mt-3 max-w-[52ch] text-[15px]">
                {rest.join(". ")}
                {it.todo ? <TodoTag /> : null}
              </Body>
            </div>
          )
        })}
      </div>
    </Section>
  )
}

// ── 08 come si lavora insieme: percorso orizzontale ─────────────────────────
function Together({ c }: { c: LandingContent }) {
  const steps = c.together.steps
  return (
    <Section id="come-si-lavora" className="pt-0">
      <div className="mx-auto max-w-[820px] text-center">
        <Eyebrow>{c.together.label}</Eyebrow>
        <Title className="mx-auto mt-5 max-w-[22ch]">{c.together.headline}</Title>
      </div>

      <div className="relative mt-14">
        <div
          aria-hidden
          className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-[#7C5CFA]/10 via-[#7C5CFA]/45 to-[#7C5CFA]/10 lg:block"
        />
        <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((s, i) => (
            <li key={s.n} className="relative">
              <div className="flex items-center gap-3 lg:block">
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-white text-[15px] font-medium tabular-nums text-[#7C5CFA] shadow-[0_10px_30px_-18px_rgba(1,1,16,0.5)]">
                  {s.n}
                </span>
                {i < steps.length - 1 ? (
                  <ArrowRight
                    aria-hidden
                    className="hidden h-4 w-4 text-[#7C5CFA]/50 lg:absolute lg:right-[-14px] lg:top-4 lg:block"
                  />
                ) : null}
              </div>
              <h3 className="mt-5 text-[18px] font-medium leading-[1.2] tracking-[-0.02em] text-[#010110] md:text-[20px]">
                {s.title}
              </h3>
              <Body className="mt-3 text-[15px]">{s.desc}</Body>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}

// ── 09 a chi è rivolto: due colonne, quando sì e quando no ──────────────────
function ForWhom({ c }: { c: LandingContent }) {
  return (
    <Section id="a-chi-e-rivolto" className="pt-0">
      <Eyebrow>{c.forWhom.label}</Eyebrow>
      <Title className="mt-5 max-w-[20ch]">{c.forWhom.headline}</Title>

      <div className="mt-10 grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
        <Glass className="p-8 md:p-10">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#7C5CFA]">
            Funziona bene se
          </p>
          <ul className="mt-6 space-y-4">
            {c.forWhom.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#7C5CFA]" />
                <span className="text-[16px] leading-[1.5] text-[#2A2A38]">{b}</span>
              </li>
            ))}
          </ul>
        </Glass>

        <div className="rounded-[28px] border border-[#010110]/10 p-8 md:p-10">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#A3A3AD]">
            Quando invece no
          </p>
          <Body className="mt-6">{c.forWhom.notFor.replace("Quando invece non è lo strumento giusto: ", "")}</Body>
        </div>
      </div>
    </Section>
  )
}

// ── 10 domande frequenti: due colonne, tutte leggibili ──────────────────────
function Faq({ c }: { c: LandingContent }) {
  return (
    <Section id="faq" className="pt-0">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-14">
        <div>
          <Eyebrow>{c.faq.label}</Eyebrow>
          <Title className="mt-5 max-w-[14ch]">{c.faq.headline}</Title>
        </div>

        <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
          {c.faq.items.map((f) => (
            <div key={f.q}>
              <h3 className="text-[17px] font-medium leading-[1.3] tracking-[-0.015em] text-[#010110]">
                {f.q}
              </h3>
              <Body className={`mt-2 text-[15px] ${f.todo ? "text-[#8A8A97]" : ""}`}>
                {f.a}
                {f.todo ? <TodoTag /> : null}
              </Body>
            </div>
          ))}
        </div>
      </div>
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
