import { useId, useState } from "react"
import { Check, Plus } from "lucide-react"
import { Body, Glass, Section, Title } from "@/components/v3/glass"
import { projectsContent } from "@/lib/landing-content"

// Cinque strutture semplici per "Come YUMA Projects ti aiuta a risolvere
// questo problema": niente immagini, una spunta verde per ogni punto.
// Riferimenti 21st: Feature with advantages (1017), Key Value List (25162),
// Features 9 (1907), Achievement List (13041), Accordion.

const p = projectsContent.problem
const items = (p.solutions ?? []).map((s) => ({ ...s, title: s.title.replace(/\.$/, "") }))
const TITLE = p.solutionTitle ?? ""

function GreenCheck({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const box = { sm: "h-6 w-6", md: "h-8 w-8", lg: "h-11 w-11" }[size]
  const icon = { sm: "h-3.5 w-3.5", md: "h-4 w-4", lg: "h-5 w-5" }[size]
  return (
    <span
      aria-hidden
      className={`flex ${box} shrink-0 items-center justify-center rounded-full bg-[#22C55E] text-white shadow-[0_8px_20px_-8px_rgba(34,197,94,0.7)]`}
    >
      <Check className={icon} strokeWidth={3} />
    </span>
  )
}

const itemTitle = "text-[19px] font-medium leading-[1.25] tracking-[-0.02em] text-[#1D1D1F] md:text-[21px]"

// ── A · Tre colonne, solo spunta e testo ────────────────────────────────────
export function SolutionsColumns() {
  return (
    <Section>
      <Title className="mx-auto max-w-[22ch] text-center">{TITLE}</Title>
      <ul className="mx-auto mt-14 grid max-w-[1080px] gap-10 md:grid-cols-3 md:gap-12">
        {items.map((it) => (
          <li key={it.title}>
            <GreenCheck />
            <h3 className={`mt-5 ${itemTitle}`}>{it.title}</h3>
            <Body className="mt-3 text-[15px]">{it.desc}</Body>
          </li>
        ))}
      </ul>
    </Section>
  )
}

// ── B · Una scheda, tre righe ───────────────────────────────────────────────
export function SolutionsRows() {
  return (
    <Section>
      <Title className="mx-auto max-w-[22ch] text-center">{TITLE}</Title>
      <Glass className="mx-auto mt-12 max-w-[860px] p-3 md:p-4">
        <ul>
          {items.map((it) => (
            <li
              key={it.title}
              className="flex gap-5 border-b border-[#1D1D1F]/8 px-4 py-7 last:border-0 md:px-6"
            >
              <GreenCheck />
              <div>
                <h3 className={itemTitle}>{it.title}</h3>
                <Body className="mt-2 text-[15px]">{it.desc}</Body>
              </div>
            </li>
          ))}
        </ul>
      </Glass>
    </Section>
  )
}

// ── C · Titolo a sinistra, elenco a destra ──────────────────────────────────
export function SolutionsSplit() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <Title className="max-w-[16ch] lg:sticky lg:top-32 lg:self-start">{TITLE}</Title>
        <ul className="flex flex-col">
          {items.map((it) => (
            <li
              key={it.title}
              className="grid grid-cols-[32px_minmax(0,1fr)] gap-x-5 border-t border-[#1D1D1F]/10 py-8 last:border-b"
            >
              <GreenCheck />
              <div>
                <h3 className={itemTitle}>{it.title}</h3>
                <Body className="mt-2">{it.desc}</Body>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

// ── D · Traguardi raggiunti ─────────────────────────────────────────────────
export function SolutionsAchievements() {
  return (
    <Section>
      <Title className="mx-auto max-w-[22ch] text-center">{TITLE}</Title>
      <ul className="mx-auto mt-12 flex max-w-[900px] flex-col gap-4">
        {items.map((it, i) => (
          <li key={it.title}>
            <Glass className="flex items-center gap-6 rounded-[22px] p-6 md:p-7">
              <span className="relative flex h-14 w-14 shrink-0 items-center justify-center">
                <svg viewBox="0 0 56 56" className="absolute inset-0" aria-hidden>
                  <circle cx="28" cy="28" r="25" fill="none" stroke="#22C55E" strokeOpacity="0.18" strokeWidth="4" />
                  <circle cx="28" cy="28" r="25" fill="none" stroke="#22C55E" strokeWidth="4" strokeLinecap="round" />
                </svg>
                <Check className="h-6 w-6 text-[#16A34A]" strokeWidth={3} aria-hidden />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className={itemTitle}>{it.title}</h3>
                <Body className="mt-2 text-[15px]">{it.desc}</Body>
              </div>
              <span className="hidden text-[28px] font-medium tabular-nums text-[#1D1D1F]/15 md:block">
                {String(i + 1).padStart(2, "0")}
              </span>
            </Glass>
          </li>
        ))}
      </ul>
    </Section>
  )
}

// ── E · Fisarmonica: si legge il titolo, si apre il dettaglio ───────────────
// Generica (titolo + testo): la usano "come ti aiuta" in Projects e
// "per chi è pensato" in Client Interface.
export function CheckAccordion({
  items: list,
  className = "mt-12",
}: {
  items: { title: string; desc: string }[]
  className?: string
}) {
  const [open, setOpen] = useState(0)
  const uid = useId()
  return (
    <ul className={`mx-auto flex max-w-[860px] flex-col gap-3 ${className}`}>
      {list.map((it, i) => {
        const isOpen = open === i
        return (
          <li key={it.title}>
            <Glass className="overflow-hidden rounded-[22px] p-0">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${uid}-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center gap-5 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#7C5CFA] md:px-7"
              >
                <GreenCheck />
                <span className={`flex-1 ${itemTitle}`}>{it.title}</span>
                <Plus
                  aria-hidden
                  className={`h-5 w-5 shrink-0 text-[#7C5CFA] transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                />
              </button>
              <div
                id={`${uid}-${i}`}
                aria-hidden={!isOpen}
                className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "invisible grid-rows-[0fr]"}`}
              >
                <div className="overflow-hidden">
                  <Body className="px-6 pb-6 text-[15px] sm:pl-[84px] md:px-7 md:pl-[88px]">{it.desc}</Body>
                </div>
              </div>
            </Glass>
          </li>
        )
      })}
    </ul>
  )
}

export function SolutionsAccordionBlock({ className = "mt-12" }: { className?: string }) {
  return <CheckAccordion items={items} className={className} />
}

export function SolutionsAccordion() {
  return (
    <Section>
      <Title className="mx-auto max-w-[22ch] text-center">{TITLE}</Title>
      <SolutionsAccordionBlock />
    </Section>
  )
}
