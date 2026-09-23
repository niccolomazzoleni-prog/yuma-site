// Illustrazioni del blocco problema di YUMA Projects, disegnate a codice.

function Panel({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex h-full w-full items-center justify-center p-8"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.55), rgba(255,240,246,0.45))",
      }}
    >
      {children}
    </div>
  )
}

// 01 · il dato nasce informale: vocale, foto, messaggio
export function FieldInputsArt() {
  return (
    <Panel>
      <svg viewBox="0 0 420 240" className="h-auto w-full max-w-[420px]" aria-hidden>
        {/* onda vocale */}
        <g transform="translate(30 40)">
          <rect width="150" height="54" rx="14" fill="rgba(124,92,250,0.12)" stroke="#7C5CFA" />
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <rect
              key={i}
              x={22 + i * 14}
              y={27 - (6 + (i % 3) * 8)}
              width="5"
              height={12 + (i % 3) * 16}
              rx="2.5"
              fill="#7C5CFA"
              opacity={0.75}
            />
          ))}
        </g>
        {/* foto */}
        <g transform="translate(230 40)">
          <rect width="150" height="54" rx="14" fill="rgba(1,1,16,0.05)" stroke="rgba(1,1,16,0.18)" />
          <rect x="18" y="14" width="46" height="28" rx="4" fill="rgba(1,1,16,0.12)" />
          <circle cx="30" cy="24" r="4" fill="rgba(224,69,123,0.6)" />
          <path d="M22 38 L36 26 L48 38 Z" fill="rgba(1,1,16,0.25)" />
          <text x="100" y="32" textAnchor="middle" fontSize="12" fill="rgba(1,1,16,0.45)">
            foto DDT
          </text>
        </g>
        {/* messaggio */}
        <g transform="translate(120 130)">
          <rect width="180" height="60" rx="16" fill="rgba(1,1,16,0.05)" stroke="rgba(1,1,16,0.18)" />
          <rect x="16" y="18" width="110" height="7" rx="3.5" fill="rgba(1,1,16,0.18)" />
          <rect x="16" y="33" width="80" height="7" rx="3.5" fill="rgba(1,1,16,0.12)" />
          <path d="M28 60 L40 60 L32 72 Z" fill="rgba(1,1,16,0.05)" stroke="rgba(1,1,16,0.18)" />
        </g>
      </svg>
    </Panel>
  )
}

// 02 · qualcuno ricostruisce a mano, giorni dopo
export function RebuildArt() {
  return (
    <Panel>
      <svg viewBox="0 0 420 240" className="h-auto w-full max-w-[420px]" aria-hidden>
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i} transform={`translate(${30 + i * 14} ${34 + i * 8}) rotate(${-6 + i * 3} 90 20)`}>
            <rect width="180" height="34" rx="8" fill="rgba(255,255,255,0.9)" stroke="rgba(1,1,16,0.14)" />
            <rect x="14" y="13" width="90" height="8" rx="4" fill="rgba(1,1,16,0.12)" />
            <rect x="120" y="13" width="44" height="8" rx="4" fill="rgba(124,92,250,0.35)" />
          </g>
        ))}
        <g transform="translate(300 150)">
          <circle r="30" fill="rgba(224,69,123,0.1)" stroke="#E0457B" />
          <text textAnchor="middle" y="5" fontSize="13" fill="#E0457B">
            +5 gg
          </text>
        </g>
      </svg>
    </Panel>
  )
}

// 03 · il confronto col preventivo arriva a fine corsa
export function LateBudgetArt() {
  return (
    <Panel>
      <svg viewBox="0 0 420 240" className="h-auto w-full max-w-[420px]" aria-hidden>
        <line x1="40" y1="190" x2="380" y2="190" stroke="rgba(1,1,16,0.18)" />
        <path d="M40 150 H380" stroke="rgba(124,92,250,0.5)" strokeDasharray="5 5" />
        <text x="44" y="142" fontSize="11" fill="rgba(124,92,250,0.8)">
          preventivo
        </text>
        <path
          d="M40 170 C120 168 180 160 240 140 C300 118 340 96 380 70"
          fill="none"
          stroke="#E0457B"
          strokeWidth="2"
        />
        <circle cx="380" cy="70" r="5" fill="#E0457B" />
        <text x="330" y="56" fontSize="11" fill="#E0457B">
          costo reale
        </text>
        <g transform="translate(330 176)">
          <rect x="-46" y="-14" width="92" height="28" rx="14" fill="rgba(1,1,16,0.06)" />
          <text textAnchor="middle" y="5" fontSize="11" fill="rgba(1,1,16,0.5)">
            fine lavori
          </text>
        </g>
      </svg>
    </Panel>
  )
}
