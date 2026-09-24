import { Merge, Plug, ShieldCheck } from "lucide-react"
import { Body, Glass } from "@/components/v3/glass"
import type { LandingContent } from "@/lib/landing-content"

// Cinque modi di trattare le tre card sotto lo schema dei sistemi.
// Riferimenti 21st: Feature Grid Spotlight Cards (26797), Product Card (27903),
// Cta Card (8747), Steps (6087).

const icons = [Plug, Merge, ShieldCheck]

function TodoTag() {
  return (
    <span className="ml-2 inline-block rounded-[4px] bg-white/70 px-2 py-0.5 align-middle text-[11px] font-medium uppercase tracking-[0.06em] text-[#A3A3AD]">
      da confermare
    </span>
  )
}

export function useSystemItems(systems: LandingContent["systems"]) {
  return systems.items.map((it) => {
    const [title, ...rest] = it.text.split(". ")
    return { title, desc: rest.join(". "), todo: it.todo }
  })
}

type Item = { title: string; desc: string; todo?: boolean }

// ── A · Icona in cerchio viola ──────────────────────────────────────────────
export function CardsIcon({ items }: { items: Item[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {items.map((it, i) => {
        const Icon = icons[i % icons.length]
        return (
          <Glass key={it.title} className="flex h-full flex-col p-7 md:p-8">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#7C5CFA]/12 text-[#7C5CFA]">
              <Icon className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <h3 className="mt-6 text-[19px] font-medium tracking-[-0.02em] text-[#1B1A2E] md:text-[20px]">
              {it.title}
            </h3>
            <Body className="mt-3 text-[15px]">
              {it.desc}
              {it.todo ? <TodoTag /> : null}
            </Body>
          </Glass>
        )
      })}
    </div>
  )
}

// ── B · Filetto viola in alto e numero ──────────────────────────────────────
export function CardsRule({ items }: { items: Item[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {items.map((it, i) => (
        <Glass key={it.title} className="relative flex h-full flex-col overflow-hidden p-7 md:p-8">
          <span aria-hidden className="absolute inset-x-0 top-0 h-[3px] bg-[#7C5CFA]" />
          <span className="text-[13px] font-medium tabular-nums text-[#7C5CFA]">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-4 text-[19px] font-medium tracking-[-0.02em] text-[#1B1A2E] md:text-[20px]">
            {it.title}
          </h3>
          <Body className="mt-3 text-[15px]">
            {it.desc}
            {it.todo ? <TodoTag /> : null}
          </Body>
        </Glass>
      ))}
    </div>
  )
}

// ── C · Intestazione piena e corpo chiaro ───────────────────────────────────
export function CardsHeader({ items }: { items: Item[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {items.map((it, i) => {
        const Icon = icons[i % icons.length]
        return (
          <Glass key={it.title} className="flex h-full flex-col overflow-hidden p-0">
            <div className="flex items-center gap-3 bg-[#7C5CFA]/12 px-7 py-5">
              <Icon className="h-5 w-5 text-[#5B3FD9]" strokeWidth={1.75} />
              <h3 className="text-[17px] font-medium tracking-[-0.015em] text-[#1B1A2E] md:text-[19px]">
                {it.title}
              </h3>
            </div>
            <div className="px-7 py-6">
              <Body className="text-[15px]">
                {it.desc}
                {it.todo ? <TodoTag /> : null}
              </Body>
            </div>
          </Glass>
        )
      })}
    </div>
  )
}

// ── D · Card orizzontali, icona a sinistra ──────────────────────────────────
export function CardsHorizontal({ items }: { items: Item[] }) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((it, i) => {
        const Icon = icons[i % icons.length]
        return (
          <Glass key={it.title} className="grid gap-5 p-6 md:grid-cols-[56px_minmax(0,0.5fr)_minmax(0,1fr)] md:items-center md:p-7">
            <span className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#7C5CFA]/12 text-[#7C5CFA]">
              <Icon className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <h3 className="text-[19px] font-medium tracking-[-0.02em] text-[#1B1A2E] md:text-[21px]">
              {it.title}
            </h3>
            <Body className="text-[15px]">
              {it.desc}
              {it.todo ? <TodoTag /> : null}
            </Body>
          </Glass>
        )
      })}
    </div>
  )
}

// ── E · Card garanzia, con etichette in fondo ───────────────────────────────
const tags = [
  ["ERP", "CRM", "anagrafiche"],
  ["email", "WhatsApp", "PDF", "vocali"],
  ["GDPR", "ambienti separati", "nessun addestramento"],
]

export function CardsTags({ items }: { items: Item[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {items.map((it, i) => (
        <Glass key={it.title} className="flex h-full flex-col p-7 md:p-8">
          <h3 className="text-[19px] font-medium tracking-[-0.02em] text-[#1B1A2E] md:text-[20px]">
            {it.title}
          </h3>
          <Body className="mt-3 flex-1 text-[15px]">
            {it.desc}
            {it.todo ? <TodoTag /> : null}
          </Body>
          <ul className="mt-6 flex flex-wrap gap-2 border-t border-[#1B1A2E]/8 pt-5">
            {(tags[i] ?? []).map((t) => (
              <li
                key={t}
                className="rounded-full border border-[#7C5CFA]/25 bg-white/60 px-3 py-1 text-[12px] font-medium text-[#5B3FD9]"
              >
                {t}
              </li>
            ))}
          </ul>
        </Glass>
      ))}
    </div>
  )
}
