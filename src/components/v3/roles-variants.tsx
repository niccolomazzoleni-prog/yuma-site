import { useState } from "react"
import { ChevronRight, Minus, Plus } from "lucide-react"
import { Body, Eyebrow, Glass, Section, Title } from "@/components/v3/glass"
import { Shot } from "@/components/v3/landing"
import { clientInterfaceContent } from "@/lib/landing-content"

// Cinque strutture per "Per chi è pensato YUMA Client Interface", tutte con
// spazio per un'immaginina. Riferimenti 21st: Steps (6087), Feature Carousel
// (10466), Accordion Multiple (29251), Product Card (27903).

const r = clientInterfaceContent.roles
const items = r.items

function Head({ align = "center" }: { align?: "center" | "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-[820px] text-center" : ""}>
      <Eyebrow>{r.label}</Eyebrow>
      <Title className={`mt-5 max-w-[20ch] ${align === "center" ? "mx-auto" : ""}`}>
        {r.headline}
      </Title>
    </div>
  )
}

// ── A · Scheda tecnica con miniatura a sinistra ─────────────────────────────
export function RolesSpecList() {
  return (
    <Section>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
        <Head align="left" />
        <dl className="divide-y divide-[#010110]/10 border-y border-[#010110]/10">
          {items.map((it) => (
            <div key={it.role} className="grid gap-4 py-7 md:grid-cols-[96px_160px_minmax(0,1fr)] md:items-start md:gap-6">
              <Shot label="Icona" ratio="1 / 1" className="w-full" />
              <dt className="text-[17px] font-medium tracking-[-0.015em] text-[#010110]">
                {it.role}
              </dt>
              <dd className="m-0">
                <Body className="text-[15px]">{it.desc}</Body>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}

// ── B · Tre schede con immagine in alto ─────────────────────────────────────
export function RolesCards() {
  return (
    <Section>
      <Head />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {items.map((it) => (
          <Glass key={it.role} className="flex h-full flex-col p-6 md:p-7">
            <Shot label={`Immagine ${it.role}`} ratio="16 / 10" className="w-full" />
            <h3 className="mt-6 text-[19px] font-medium tracking-[-0.02em] text-[#010110] md:text-[21px]">
              {it.role}
            </h3>
            <Body className="mt-3 text-[15px]">{it.desc}</Body>
          </Glass>
        ))}
      </div>
    </Section>
  )
}

// ── C · Selettore a sinistra, dettaglio a destra ────────────────────────────
export function RolesSelector() {
  const [active, setActive] = useState(0)
  return (
    <Section>
      <Head />
      <div className="mt-12 grid gap-5 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <ul className="flex flex-col gap-2">
          {items.map((it, i) => (
            <li key={it.role}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-current={i === active}
                className={`flex w-full items-center justify-between gap-4 rounded-[16px] px-5 py-4 text-left transition-colors ${
                  i === active
                    ? "border border-white/70 bg-white/70 text-[#010110]"
                    : "border border-transparent text-[#4A4A58] hover:bg-white/40"
                }`}
              >
                <span className="text-[17px] font-medium tracking-[-0.015em]">
                  {it.role}
                </span>
                <ChevronRight
                  className={`h-4 w-4 transition-transform ${i === active ? "text-[#7C5CFA]" : "text-[#A3A3AD]"}`}
                />
              </button>
            </li>
          ))}
        </ul>

        <Glass className="grid gap-6 p-7 md:grid-cols-[minmax(0,1fr)_200px] md:items-center md:p-8">
          <div>
            <h3 className="text-[22px] font-medium tracking-[-0.02em] text-[#010110] md:text-[26px]">
              {items[active].role}
            </h3>
            <Body className="mt-4">{items[active].desc}</Body>
          </div>
          <Shot label={`Immagine ${items[active].role}`} ratio="3 / 4" />
        </Glass>
      </div>
    </Section>
  )
}

// ── D · Fisarmonica con immagine nel pannello ───────────────────────────────
export function RolesAccordion() {
  const [open, setOpen] = useState(0)
  return (
    <Section>
      <Head />
      <Glass className="mx-auto mt-12 max-w-[900px] p-6 md:p-8">
        {items.map((it, i) => {
          const isOpen = open === i
          return (
            <div key={it.role} className="border-b border-[#010110]/8 last:border-0">
              <h3 className="m-0">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 py-5 text-left"
                >
                  <span className={`flex-1 text-[19px] font-medium tracking-[-0.015em] ${isOpen ? "text-[#010110]" : "text-[#4A4A58]"}`}>
                    {it.role}
                  </span>
                  <span className="text-[#7C5CFA]">
                    {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </span>
                </button>
              </h3>
              {isOpen ? (
                <div className="grid gap-5 pb-6 md:grid-cols-[minmax(0,1fr)_180px] md:items-center">
                  <Body>{it.desc}</Body>
                  <Shot label="Immagine" ratio="4 / 3" />
                </div>
              ) : null}
            </div>
          )
        })}
      </Glass>
    </Section>
  )
}

// ── E · Immagine grande a sinistra, ruoli in elenco a destra ────────────────
export function RolesSplit() {
  const [active, setActive] = useState(0)
  return (
    <Section>
      <Head align="left" />
      <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
        <Glass className="p-6 md:p-8">
          <Shot label={`Immagine ${items[active].role}`} ratio="4 / 5" className="w-full" />
        </Glass>

        <div className="flex flex-col justify-center">
          {items.map((it, i) => (
            <button
              key={it.role}
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              className={`border-t border-[#010110]/10 py-6 text-left transition-opacity last:border-b ${
                i === active ? "opacity-100" : "opacity-55"
              }`}
            >
              <div className="flex items-baseline gap-3">
                <span className="text-[12px] font-medium tabular-nums text-[#7C5CFA]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[21px] font-medium tracking-[-0.02em] text-[#010110] md:text-[24px]">
                  {it.role}
                </h3>
              </div>
              <Body className="mt-3 max-w-[54ch] text-[15px]">{it.desc}</Body>
            </button>
          ))}
        </div>
      </div>
    </Section>
  )
}
