import type { ReactNode } from "react"

// Contenitore di sezione — "white engineering blueprint" (DESIGN.md):
// canvas bianco o banda linen, contenuto allineato a sinistra su max 1200px.
type Tone = "canvas" | "linen"
type Pad = "md" | "lg" | "xl"

const toneClass: Record<Tone, string> = {
  canvas: "bg-white text-ref-carbon",
  linen: "bg-ref-linen text-ref-carbon",
}
const padClass: Record<Pad, string> = {
  md: "py-20 md:py-24",
  lg: "py-24 md:py-32",
  xl: "py-24 md:py-40",
}

export function SectionRail({
  id,
  label: _label,
  tone = "canvas",
  pad = "lg",
  children,
}: {
  id: string
  label?: string
  tone?: Tone
  pad?: Pad
  children: ReactNode
}) {
  return (
    <section id={id} className={`${toneClass[tone]} [scroll-margin-top:96px]`}>
      <div className={`mx-auto max-w-[1200px] px-6 ${padClass[pad]}`}>
        <div className="max-w-[880px]">{children}</div>
      </div>
    </section>
  )
}
