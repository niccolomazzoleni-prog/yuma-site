// Visual astratti per le schede "Cosa può fare l'AI": costruiti a codice,
// niente stock photo (CLAUDE.md §5). Ognuno racconta il contenuto della scheda.

function Panel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#0A0A0F] p-8">
      {children}
    </div>
  )
}

// 01 · processi gestiti da agenti: nodi che si passano il lavoro
export function AgentsFlow() {
  return (
    <Panel>
      <svg viewBox="0 0 420 240" className="h-auto w-full max-w-[420px]" aria-hidden>
        <g stroke="rgba(255,255,255,0.25)" fill="none" strokeWidth="1">
          <path d="M60 120 H140" />
          <path d="M180 120 H260" />
          <path d="M300 120 H360" />
          <path d="M160 100 C160 60 260 60 280 100" strokeDasharray="4 4" />
        </g>
        {[60, 160, 280, 380].map((x, i) => (
          <g key={x}>
            <circle cx={x} cy="120" r="20" fill="rgba(124,92,250,0.14)" stroke="#7C5CFA" strokeWidth="1" />
            <circle cx={x} cy="120" r="4" fill="#A794FF" />
            <text x={x} y="172" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="11">
              {["input", "agente", "controllo", "sistema"][i]}
            </text>
          </g>
        ))}
      </svg>
    </Panel>
  )
}

// 02 · dati leggibili: colonne che si allineano
export function DataBars() {
  const bars = [38, 64, 52, 88, 46, 72, 58]
  return (
    <Panel>
      <svg viewBox="0 0 420 240" className="h-auto w-full max-w-[420px]" aria-hidden>
        <line x1="40" y1="200" x2="380" y2="200" stroke="rgba(255,255,255,0.2)" />
        {bars.map((h, i) => (
          <g key={i}>
            <rect
              x={50 + i * 48}
              y={200 - h * 1.6}
              width="26"
              height={h * 1.6}
              rx="3"
              fill={i === 3 ? "#7C5CFA" : "rgba(255,255,255,0.14)"}
            />
          </g>
        ))}
        <path
          d="M63 140 L111 98 L159 118 L207 60 L255 128 L303 86 L351 108"
          fill="none"
          stroke="#E0457B"
          strokeWidth="1.5"
        />
        {[63, 111, 159, 207, 255, 303, 351].map((x, i) => (
          <circle key={x} cx={x} cy={[140, 98, 118, 60, 128, 86, 108][i]} r="2.5" fill="#E0457B" />
        ))}
      </svg>
    </Panel>
  )
}

// 03 · persone liberate: righe ripetitive che si dissolvono
export function FreedRows() {
  return (
    <Panel>
      <svg viewBox="0 0 420 240" className="h-auto w-full max-w-[420px]" aria-hidden>
        {Array.from({ length: 9 }).map((_, i) => (
          <g key={i} opacity={1 - i * 0.1}>
            <rect x="40" y={24 + i * 22} width={i < 4 ? 250 : 250 - (i - 3) * 46} height="8" rx="4" fill="rgba(255,255,255,0.12)" />
            <rect x="40" y={24 + i * 22} width={i < 4 ? 90 : Math.max(0, 90 - (i - 3) * 20)} height="8" rx="4" fill={i < 4 ? "rgba(124,92,250,0.6)" : "rgba(124,92,250,0.25)"} />
          </g>
        ))}
        <g transform="translate(320 96)">
          <circle r="26" fill="rgba(124,92,250,0.14)" stroke="#7C5CFA" />
          <circle cy="-6" r="7" fill="#A794FF" />
          <path d="M-13 16 A13 13 0 0 1 13 16" fill="#A794FF" />
        </g>
      </svg>
    </Panel>
  )
}

// 04 · conoscenza dell'azienda: piani impilati che diventano uno
export function KnowledgeLayers() {
  return (
    <Panel>
      <svg viewBox="0 0 420 240" className="h-auto w-full max-w-[420px]" aria-hidden>
        <g stroke="rgba(255,255,255,0.3)" fill="none" strokeWidth="1">
          {[0, 1, 2, 3].map((i) => (
            <polygon
              key={i}
              points={`210,${40 + i * 34} 340,${82 + i * 34} 210,${124 + i * 34} 80,${82 + i * 34}`}
              opacity={1 - i * 0.2}
            />
          ))}
        </g>
        <g fill="#7C5CFA">
          <circle cx="210" cy="40" r="3.5" />
          <circle cx="340" cy="82" r="3.5" />
          <circle cx="80" cy="82" r="3.5" />
        </g>
        <text x="210" y="222" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="11">
          memoria condivisa dell'azienda
        </text>
      </svg>
    </Panel>
  )
}
