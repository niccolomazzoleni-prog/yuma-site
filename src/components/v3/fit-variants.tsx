import { Check, Layers, MessageSquare, Repeat, Timer } from "lucide-react"
import { Body, Eyebrow, Glass, Section, Title } from "@/components/v3/glass"
import { clientInterfaceContent } from "@/lib/landing-content"

// Tre strutture per "YUMA Client Interface fa per te se:" (quattro elementi).
// Riferimenti 21st: Pros & Cons Block (18096), Feature Grid Spotlight Cards
// (26797), Steps (6087).

const f = clientInterfaceContent.forWhom
const bullets = f.bullets
const icons = [Repeat, MessageSquare, Timer, Layers]

// versioni brevi, per le strutture che hanno poco spazio
const short = [
  "Ordini ricorrenti da clienti abituali",
  "Più canali e formati diversi",
  "Back office che inserisce a mano",
  "ERP o CRM che non volete sostituire",
]

const TITLE = `${clientInterfaceContent.product} fa per te se:`

function Head() {
  return (
    <div className="mx-auto max-w-[820px] text-center">
      <Eyebrow>{f.label}</Eyebrow>
      <Title className="mx-auto mt-5 max-w-[22ch]">{TITLE}</Title>
    </div>
  )
}

function NotFor() {
  return (
    <p className="mx-auto mt-8 max-w-[760px] text-center text-[15px] leading-[1.6] text-[#8A8A97]">
      {f.notFor}
    </p>
  )
}

// ── A · Griglia due per due ─────────────────────────────────────────────────
export function FitGrid() {
  return (
    <Section>
      <Head />
      <div className="mx-auto mt-12 grid max-w-[980px] gap-5 md:grid-cols-2">
        {bullets.map((b, i) => (
          <Glass key={b} className="flex items-start gap-4 p-7 md:p-8">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#7C5CFA]/12 text-[#7C5CFA]">
              <Check className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-[17px] font-medium tracking-[-0.015em] text-[#1B1A2E] md:text-[19px]">
                {short[i]}
              </h3>
              <Body className="mt-2 text-[15px]">{b}</Body>
            </div>
          </Glass>
        ))}
      </div>
      <NotFor />
    </Section>
  )
}

// ── B · Quattro righe numerate ──────────────────────────────────────────────
export function FitRows() {
  return (
    <Section>
      <Head />
      <ol className="mx-auto mt-12 max-w-[900px]">
        {bullets.map((b, i) => (
          <li
            key={b}
            className="grid gap-4 border-t border-[#1B1A2E]/10 py-7 last:border-b md:grid-cols-[64px_minmax(0,1fr)] md:gap-8"
          >
            <span className="text-[26px] font-medium leading-none tabular-nums text-[#7C5CFA]/35 md:text-[32px]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <Body className="text-[17px] text-[#2A2A38]">{b}</Body>
          </li>
        ))}
      </ol>
      <NotFor />
    </Section>
  )
}

// ── C · Quattro colonne con icona ───────────────────────────────────────────
export function FitColumns() {
  return (
    <Section>
      <Head />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {bullets.map((b, i) => {
          const Icon = icons[i % icons.length]
          return (
            <Glass key={b} className="flex h-full flex-col p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#7C5CFA]/12 text-[#7C5CFA]">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-6 text-[17px] font-medium leading-[1.25] tracking-[-0.015em] text-[#1B1A2E]">
                {short[i]}
              </h3>
              <Body className="mt-3 text-[15px]">{b}</Body>
            </Glass>
          )
        })}
      </div>
      <NotFor />
    </Section>
  )
}
