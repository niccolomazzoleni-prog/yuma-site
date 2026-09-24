import { Body, Eyebrow, Glass, Lead, Section, Title } from "@/components/v3/glass"
import { clientInterfaceContent } from "@/lib/landing-content"

// Cinque direzioni per il blocco "I tuoi sistemi restano al centro".
// Riferimenti 21st: Feature Grid Spotlight Cards (26797), Comparison Section
// (26826), Content With Illustration (8462), Steps (6087).

const sys = clientInterfaceContent.systems
const items = sys.items.map((it) => {
  const [title, ...rest] = it.text.split(". ")
  return { title, desc: rest.join(". "), todo: it.todo }
})

function TodoTag() {
  return (
    <span className="ml-2 inline-block rounded-[4px] bg-white/70 px-2 py-0.5 align-middle text-[11px] font-medium uppercase tracking-[0.06em] text-[#A3A3AD]">
      da confermare
    </span>
  )
}

function Head({ center = true }: { center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-[820px] text-center" : "max-w-[820px]"}>
      <Eyebrow>{sys.label}</Eyebrow>
      <Title className={`mt-5 max-w-[24ch] ${center ? "mx-auto" : ""}`}>{sys.headline}</Title>
      <Lead className={`mt-5 max-w-[62ch] ${center ? "mx-auto" : ""}`}>{sys.sub}</Lead>
    </div>
  )
}

// Schema: i canali entrano, YUMA sta in mezzo, ERP e CRM restano dove sono.
function FlowDiagram({ compact = false }: { compact?: boolean }) {
  const channels = ["Email", "WhatsApp", "PDF", "Vocali"]
  const systems = ["ERP", "CRM"]
  return (
    <svg viewBox="0 0 520 260" className={`h-auto w-full ${compact ? "max-w-[420px]" : ""}`} aria-hidden>
      {channels.map((ch, i) => (
        <g key={ch} transform={`translate(10 ${24 + i * 56})`}>
          <rect width="110" height="38" rx="10" fill="rgba(255,255,255,0.75)" stroke="rgba(1,1,16,0.1)" />
          <text x="55" y="24" textAnchor="middle" fontSize="13" fill="#4A4A58">
            {ch}
          </text>
          <path
            d={`M120 19 C170 19 180 ${130 - (24 + i * 56) + 19} 210 ${130 - (24 + i * 56) + 19}`}
            stroke="rgba(124,92,250,0.45)"
            fill="none"
          />
        </g>
      ))}

      <g transform="translate(210 96)">
        <rect width="100" height="68" rx="16" fill="rgba(124,92,250,0.12)" stroke="#7C5CFA" />
        <text x="50" y="32" textAnchor="middle" fontSize="13" fill="#5B3FD9" fontWeight="500">
          YUMA
        </text>
        <text x="50" y="50" textAnchor="middle" fontSize="11" fill="#7C5CFA">
          interpreta
        </text>
      </g>

      {systems.map((sname, i) => (
        <g key={sname} transform={`translate(400 ${80 + i * 60})`}>
          <rect width="110" height="44" rx="10" fill="rgba(255,255,255,0.85)" stroke="rgba(1,1,16,0.12)" />
          <text x="55" y="27" textAnchor="middle" fontSize="13" fill="#1B1A2E">
            {sname}
          </text>
          <path d={`M-90 ${50 - i * 60} C-40 ${50 - i * 60} -30 22 0 22`} stroke="rgba(1,1,16,0.2)" fill="none" />
        </g>
      ))}

      <text x="455" y="215" textAnchor="middle" fontSize="11" fill="rgba(1,1,16,0.4)">
        restano la fonte di verità
      </text>
    </svg>
  )
}

// ── A · Schema al centro, note attorno ──────────────────────────────────────
export function SystemsDiagram() {
  return (
    <Section>
      <Head />
      <Glass className="mt-12 p-8 md:p-10">
        <FlowDiagram />
      </Glass>
      <div className="mt-5 grid gap-5 md:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="border-t border-[#1B1A2E]/10 pt-5">
            <h3 className="text-[17px] font-medium text-[#1B1A2E]">{it.title}</h3>
            <Body className="mt-2 text-[15px]">
              {it.desc}
              {it.todo ? <TodoTag /> : null}
            </Body>
          </div>
        ))}
      </div>
    </Section>
  )
}

// ── B · Schema a sinistra, elenco a destra ──────────────────────────────────
export function SystemsSplit() {
  return (
    <Section>
      <Head center={false} />
      <div className="mt-12 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <Glass className="p-7 md:p-8">
          <FlowDiagram compact />
        </Glass>
        <div className="divide-y divide-[#1B1A2E]/10 border-y border-[#1B1A2E]/10">
          {items.map((it) => (
            <div key={it.title} className="py-6">
              <h3 className="text-[18px] font-medium text-[#1B1A2E]">{it.title}</h3>
              <Body className="mt-2 max-w-[52ch] text-[15px]">
                {it.desc}
                {it.todo ? <TodoTag /> : null}
              </Body>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

// ── C · Tre riquadri con numero grande ──────────────────────────────────────
export function SystemsNumbered() {
  return (
    <Section>
      <Head />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {items.map((it, i) => (
          <Glass key={it.title} className="flex h-full flex-col p-7 md:p-8">
            <span className="text-[40px] font-medium leading-none tabular-nums text-[#7C5CFA]/30">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-6 text-[19px] font-medium tracking-[-0.02em] text-[#1B1A2E] md:text-[21px]">
              {it.title}
            </h3>
            <Body className="mt-3 text-[15px]">
              {it.desc}
              {it.todo ? <TodoTag /> : null}
            </Body>
          </Glass>
        ))}
      </div>
    </Section>
  )
}

// ── D · Banda di garanzie, compatta ─────────────────────────────────────────
const chips = [
  "Scrittura diretta in ERP e CRM",
  "Un solo ingresso per tutti i canali",
  "Conformità GDPR",
  "Ambienti separati per cliente",
  "Nessun dato per addestrare modelli",
]

export function SystemsTrustBand() {
  return (
    <Section>
      <Glass className="p-8 md:p-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
          <div>
            <Eyebrow>{sys.label}</Eyebrow>
            <Title className="mt-5 max-w-[18ch] text-[26px] md:text-[34px]">
              {sys.headline}
            </Title>
            <Lead className="mt-5 max-w-[52ch]">{sys.sub}</Lead>
          </div>
          <div>
            <ul className="flex flex-wrap gap-2">
              {chips.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-white/70 bg-white/60 px-4 py-2 text-[14px] text-[#4A4A58]"
                >
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[14px] text-[#8A8A97]">
              Il titolare del trattamento resta la tua azienda, YUMA opera come
              responsabile.
              <TodoTag />
            </p>
          </div>
        </div>
      </Glass>
    </Section>
  )
}

// ── E · Righe editoriali, senza riquadri ────────────────────────────────────
export function SystemsRows() {
  return (
    <Section>
      <Head center={false} />
      <div className="mt-12">
        {items.map((it, i) => (
          <div
            key={it.title}
            className="grid gap-4 border-t border-[#1B1A2E]/10 py-8 md:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)] md:gap-12"
          >
            <div className="flex items-baseline gap-4">
              <span className="text-[13px] font-medium tabular-nums text-[#7C5CFA]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[22px] font-medium leading-[1.15] tracking-[-0.025em] text-[#1B1A2E] md:text-[26px]">
                {it.title}
              </h3>
            </div>
            <Body className="max-w-[60ch]">
              {it.desc}
              {it.todo ? <TodoTag /> : null}
            </Body>
          </div>
        ))}
        <div className="border-t border-[#1B1A2E]/10" />
      </div>
    </Section>
  )
}
