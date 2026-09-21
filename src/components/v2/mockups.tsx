// Visual astratti disegnati a codice: fanno da segnaposto finché non arrivano
// gli screenshot veri dei prodotti. Nessuna immagine esterna.

export function DashboardMock() {
  const rows = [
    { name: "Commessa 128 · Impianti", pct: 82, tone: "ok" },
    { name: "Commessa 131 · Cantiere Nord", pct: 64, tone: "warn" },
    { name: "Commessa 134 · Manutenzioni", pct: 41, tone: "ok" },
    { name: "Commessa 137 · Ampliamento", pct: 27, tone: "ok" },
  ]
  return (
    <div className="overflow-hidden rounded-[10px] border border-[#22222A] bg-[#0A0A0F] shadow-[0_24px_80px_-24px_rgba(1,1,16,0.45)]">
      <div className="flex items-center gap-2 border-b border-[#22222A] px-5 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#2E2E38]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#2E2E38]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#2E2E38]" />
        <span className="ml-3 text-[12px] font-medium tracking-[0.04em] text-white/40">
          Margine di commessa
        </span>
      </div>

      <div className="grid gap-5 p-6 sm:grid-cols-[1fr_auto]">
        <div className="space-y-4">
          {rows.map((r) => (
            <div key={r.name}>
              <div className="flex items-baseline justify-between">
                <span className="text-[13px] text-white/70">{r.name}</span>
                <span className="text-[13px] tabular-nums text-white/40">
                  {r.pct}%
                </span>
              </div>
              <div className="mt-2 h-1.5 w-full rounded-full bg-[#22222A]">
                <div
                  className={`h-1.5 rounded-full ${
                    r.tone === "warn" ? "bg-[#FF8A5C]" : "bg-[#7C5CFA]"
                  }`}
                  style={{ width: `${r.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-between gap-4 rounded-[8px] bg-[#16161C] p-5">
          <div>
            <div className="text-[11px] uppercase tracking-[0.12em] text-white/35">
              Scostamento
            </div>
            <div className="mt-2 text-[30px] font-medium leading-none tracking-[-0.03em] text-white">
              +4,2%
            </div>
          </div>
          <div className="text-[12px] leading-[1.5] text-white/45">
            Soglia superata sulla commessa 131. Notifica inviata al project
            manager.
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 border-t border-[#22222A] px-6 py-4">
        <span className="rounded-[4px] bg-[#7C5CFA]/15 px-2 py-1 text-[11px] font-medium text-[#A794FF]">
          vocale
        </span>
        <span className="text-[12px] text-white/45">
          "Oggi in tre, otto ore, più il noleggio della piattaforma."
        </span>
      </div>
    </div>
  )
}

// Illustrazione a linee: piani impilati (per la card prodotto).
export function LayersArt() {
  return (
    <svg viewBox="0 0 320 180" className="h-auto w-full" aria-hidden>
      <g stroke="rgba(255,255,255,0.35)" fill="none" strokeWidth="1">
        {[0, 1, 2, 3].map((i) => (
          <polygon
            key={i}
            points={`160,${28 + i * 30} 280,${68 + i * 30} 160,${108 + i * 30} 40,${68 + i * 30}`}
            opacity={1 - i * 0.22}
          />
        ))}
      </g>
      <g fill="#7C5CFA">
        <circle cx="160" cy="28" r="3" />
        <circle cx="280" cy="68" r="3" />
        <circle cx="40" cy="68" r="3" />
      </g>
    </svg>
  )
}

// Illustrazione a linee: canali che confluiscono (per la card prodotto).
export function FunnelArt() {
  return (
    <svg viewBox="0 0 320 180" className="h-auto w-full" aria-hidden>
      <g stroke="rgba(255,255,255,0.35)" fill="none" strokeWidth="1">
        {[30, 70, 110, 150].map((y, i) => (
          <path key={i} d={`M20 ${y} H120 Q160 ${y} 160 90 H300`} opacity={0.9 - i * 0.12} />
        ))}
        <rect x="150" y="80" width="20" height="20" />
      </g>
      <g fill="#7C5CFA">
        {[30, 70, 110, 150].map((y) => (
          <circle key={y} cx="20" cy={y} r="3" />
        ))}
        <circle cx="300" cy="90" r="3" />
      </g>
    </svg>
  )
}
