import { Eyebrow, Glass, Lead, Section, Title } from "@/components/v3/glass"
import { AnimatedTabs } from "@/components/ui/animated-tabs"
import { Shot } from "@/components/v3/landing"
import type { LandingContent } from "@/lib/landing-content"

// "I tuoi sistemi": schema del flusso al centro, i tre punti sotto.
// Lo schema è provvisorio: al suo posto andrà l'immagine vera.

function TodoTag() {
  return (
    <span className="ml-2 inline-block rounded-[4px] bg-white/70 px-2 py-0.5 align-middle text-[11px] font-medium uppercase tracking-[0.06em] text-[#A3A3AD]">
      da confermare
    </span>
  )
}

function FlowDiagram() {
  const channels = ["Email", "WhatsApp", "PDF", "Vocali"]
  const systems = ["ERP", "CRM"]
  return (
    <svg viewBox="0 0 520 260" className="h-auto w-full" aria-hidden>
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
          <text x="55" y="27" textAnchor="middle" fontSize="13" fill="#010110">
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

export function SystemsDiagramBlock({ systems }: { systems: LandingContent["systems"] }) {
  const items = systems.items.map((it) => {
    const [title, ...rest] = it.text.split(". ")
    return { title, desc: rest.join(". "), todo: it.todo }
  })

  // etichette brevi per le schede, i titoli lunghi restano dentro il pannello
  const labels = ["Integrazione", "Canali", "I tuoi dati"]

  const tabs = items.map((it, i) => ({
    id: labels[i] ?? it.title,
    label: labels[i] ?? it.title,
    content: (
      <div className="grid h-full w-full gap-6 md:grid-cols-2">
        <Shot label={`Immagine ${labels[i] ?? it.title}`} ratio="4 / 3" className="w-full" />
        <div className="flex flex-col justify-center gap-y-3">
          <h3 className="m-0 text-[21px] font-medium tracking-[-0.02em] text-[#010110] md:text-[24px]">
            {it.title}
          </h3>
          <p className="m-0 text-[15px] leading-[1.55] text-[#4A4A58] md:text-[16px]">
            {it.desc}
            {it.todo ? <TodoTag /> : null}
          </p>
        </div>
      </div>
    ),
  }))

  return (
    <Section id="sistemi" className="pt-0">
      <div className="mx-auto max-w-[820px] text-center">
        <Eyebrow>{systems.label}</Eyebrow>
        <Title className="mx-auto mt-5 max-w-[24ch]">{systems.headline}</Title>
        <Lead className="mx-auto mt-5 max-w-[62ch]">{systems.sub}</Lead>
      </div>

      <Glass className="mt-12 p-8 md:p-10">
        <FlowDiagram />
      </Glass>

      <AnimatedTabs
        tabs={tabs}
        tone="glass"
        className="mx-auto mt-5 max-w-[1000px]"
        panelClassName="p-6 md:p-8"
      />
    </Section>
  )
}
