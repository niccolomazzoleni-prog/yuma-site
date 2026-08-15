import type { ReactNode } from "react"

// FIRMA VISIVA A — rail-indice sinistro fisso.
// Ogni sezione (dalla 2 in giù) condivide questo asse: spalla stretta a sinistra
// con indice + etichetta (sticky), contenuto denso a destra. Si riconosce anche
// in un ritaglio. A <1024px il rail collassa in una riga-meta sopra il contenuto.
type Tone = "warm" | "page" | "ink"
type Pad = "md" | "lg" | "xl"

const toneClass: Record<Tone, string> = {
  warm: "bg-surface-warm text-neutral-900",
  page: "bg-surface-page text-neutral-900",
  ink: "bg-surface-ink text-neutral-0",
}
const padClass: Record<Pad, string> = {
  md: "py-20 md:py-28",
  lg: "py-24 md:py-36",
  xl: "py-28 md:py-44",
}

export function SectionRail({
  id,
  index,
  label,
  tone = "warm",
  pad = "lg",
  children,
}: {
  id: string
  index: string
  label: string
  tone?: Tone
  pad?: Pad
  children: ReactNode
}) {
  const dark = tone === "ink"
  const idxColor = dark ? "text-neutral-500" : "text-neutral-300"
  const labelColor = dark ? "text-neutral-400" : "text-neutral-500"
  const rule = dark ? "border-white/10" : "border-neutral-200"

  return (
    <section id={id} className={`${toneClass[tone]} [scroll-margin-top:96px]`}>
      <div className={`mx-auto max-w-6xl px-6 ${padClass[pad]}`}>
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-3 lg:sticky lg:top-28 lg:self-start">
            <div className="flex items-baseline gap-4 lg:flex-col lg:items-start lg:gap-4">
              <span
                aria-hidden
                className={`text-h2 tabular-nums ${idxColor}`}
              >
                {index}
              </span>
              <span className={`text-caption uppercase ${labelColor}`}>
                {label}
              </span>
            </div>
            <div className={`mt-6 hidden border-t lg:block ${rule}`} />
          </div>

          <div className="lg:col-span-8 lg:col-start-5">{children}</div>
        </div>
      </div>
    </section>
  )
}
