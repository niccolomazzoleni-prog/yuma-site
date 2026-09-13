import type { ReactNode } from "react"

// Contenitore di sezione — "white engineering blueprint" (DESIGN.md):
// canvas bianco o banda linen, contenuto a piena larghezza come abrarobotics.com.
// Padding verticale e laterale allineati ad abrarobotics.com (88/112px, 48px).
type Tone = "canvas" | "linen"
type Pad = "md" | "lg" | "xl"

const toneClass: Record<Tone, string> = {
  canvas: "bg-white text-ref-carbon",
  linen: "bg-ref-linen text-ref-carbon",
}
const padClass: Record<Pad, string> = {
  md: "py-16 md:py-[88px]",
  lg: "py-16 md:py-[88px]",
  xl: "py-16 md:py-[112px]",
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
      <div className={`w-full px-5 md:px-12 ${padClass[pad]}`}>
        {children}
      </div>
    </section>
  )
}
