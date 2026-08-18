import type { ReactNode } from "react"

// FIRMA VISIVA A — rail-indice sinistro fisso, in linguaggio "white
// engineering blueprint" (DESIGN.md): canvas bianco o banda linen, hairline
// Fog, indice grande in Fog scuro, etichetta caption in Ash.
// A <1024px il rail collassa in una riga-meta sopra il contenuto.
type Tone = "canvas" | "linen"
type Pad = "md" | "lg" | "xl"

const toneClass: Record<Tone, string> = {
  canvas: "bg-ref-linen/0 bg-white text-ref-carbon",
  linen: "bg-ref-linen text-ref-carbon",
}
const padClass: Record<Pad, string> = {
  md: "py-20 md:py-24",
  lg: "py-24 md:py-32",
  xl: "py-24 md:py-40",
}

export function SectionRail({
  id,
  index,
  label,
  tone = "canvas",
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
  return (
    <section id={id} className={`${toneClass[tone]} [scroll-margin-top:96px]`}>
      <div className={`mx-auto max-w-[1200px] px-6 ${padClass[pad]}`}>
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-3 lg:sticky lg:top-28 lg:self-start">
            <div className="flex items-baseline gap-4 lg:flex-col lg:items-start lg:gap-3">
              <span
                aria-hidden
                className="text-[28px] font-semibold tabular-nums leading-none tracking-[-0.02em] text-ref-ash"
              >
                {index}
              </span>
              <span className="text-[12px] font-medium uppercase tracking-[0.08em] text-ref-ash">
                {label}
              </span>
            </div>
            <div className="mt-6 hidden border-t border-ref-fog lg:block" />
          </div>

          <div className="lg:col-span-8 lg:col-start-5">{children}</div>
        </div>
      </div>
    </section>
  )
}
