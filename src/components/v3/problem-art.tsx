// Illustrazioni del blocco problema, disegnate a codice.

// ── illustrazioni a codice, una per problema ────────────────────────────────
export function InboxArt() {
  return (
    <svg viewBox="0 0 320 180" className="h-auto w-full" aria-hidden>
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(${40 + i * 6} ${30 + i * 26})`}>
          <rect width="200" height="22" rx="6" fill="rgba(1,1,16,0.06)" />
          <rect width="72" height="22" rx="6" fill="rgba(124,92,250,0.35)" />
        </g>
      ))}
      <g transform="translate(250 96)">
        <circle r="26" fill="rgba(224,69,123,0.12)" stroke="#E0457B" />
        <text textAnchor="middle" y="6" fontSize="16" fill="#E0457B">
          +48
        </text>
      </g>
    </svg>
  )
}

export function ScatterArt() {
  const pts = [
    [50, 40],
    [110, 90],
    [80, 130],
    [180, 55],
    [230, 110],
    [150, 145],
    [270, 60],
  ]
  return (
    <svg viewBox="0 0 320 180" className="h-auto w-full" aria-hidden>
      <g stroke="rgba(1,1,16,0.12)" strokeDasharray="3 4">
        {pts.map(([x, y], i) =>
          i ? <line key={i} x1={pts[i - 1][0]} y1={pts[i - 1][1]} x2={x} y2={y} /> : null,
        )}
      </g>
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 6 : 4} fill={i % 3 === 0 ? "#7C5CFA" : "rgba(1,1,16,0.25)"} />
      ))}
      <text x="160" y="172" textAnchor="middle" fontSize="11" fill="rgba(1,1,16,0.4)">
        segnali sparsi, mai aggregati
      </text>
    </svg>
  )
}

export function KeyholderArt() {
  return (
    <svg viewBox="0 0 320 180" className="h-auto w-full" aria-hidden>
      <g transform="translate(90 90)">
        <circle r="34" fill="rgba(124,92,250,0.12)" stroke="#7C5CFA" />
        <circle cy="-8" r="10" fill="#7C5CFA" />
        <path d="M-18 22 A18 18 0 0 1 18 22" fill="#7C5CFA" />
      </g>
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(200 ${40 + i * 32})`}>
          <rect width="90" height="20" rx="10" fill="rgba(1,1,16,0.06)" />
          <circle cx="10" cy="10" r="4" fill="rgba(124,92,250,0.5)" />
        </g>
      ))}
      <path d="M128 90 C160 90 160 50 200 50" stroke="rgba(1,1,16,0.18)" fill="none" />
      <path d="M128 90 C160 90 160 82 200 82" stroke="rgba(1,1,16,0.18)" fill="none" />
      <path d="M128 90 C160 90 160 114 200 114" stroke="rgba(1,1,16,0.18)" fill="none" />
      <path d="M128 90 C160 90 160 146 200 146" stroke="rgba(1,1,16,0.18)" fill="none" />
    </svg>
  )
}

