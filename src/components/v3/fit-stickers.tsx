import { Body, Eyebrow, Glass, Section, Title } from "@/components/v3/glass"
import type { LandingContent } from "@/lib/landing-content"

// "Fa per te se": card inclinate come adesivi, si raddrizzano al passaggio.
const ROTATIONS = ["-2.2deg", "1.6deg", "2deg", "-1.4deg", "1.2deg", "-1.8deg"]

export function FitStickers({
  forWhom,
  product,
  shortLabels,
}: {
  forWhom: LandingContent["forWhom"]
  product: string
  shortLabels?: string[]
}) {
  return (
    <Section id="a-chi-e-rivolto" className="pt-0">
      <div className="mx-auto max-w-[820px] text-center">
        <Eyebrow>{forWhom.label}</Eyebrow>
        <Title className="mx-auto mt-5 max-w-[22ch]">{product} fa per te se:</Title>
      </div>

      <div className="mx-auto mt-14 grid max-w-[1000px] gap-6 md:grid-cols-2">
        {forWhom.bullets.map((b, i) => (
          <div
            key={b}
            style={{ ["--rot" as string]: ROTATIONS[i % ROTATIONS.length] }}
            className="[transform:rotate(var(--rot))] transition-transform duration-500 hover:[transform:rotate(0deg)_translateY(-6px)]"
          >
            <Glass className="relative h-full p-8 md:p-9">
              <span
                aria-hidden
                className="absolute -top-3 left-8 h-6 w-16 rounded-[4px] bg-[#7C5CFA]/25 backdrop-blur-sm"
              />
              <span className="text-[13px] font-medium tabular-nums text-[#7C5CFA]">
                {String(i + 1).padStart(2, "0")}
              </span>
              {shortLabels?.[i] ? (
                <h3 className="mt-3 text-[19px] font-medium leading-[1.2] tracking-[-0.02em] text-[#1B1A2E] md:text-[21px]">
                  {shortLabels[i]}
                </h3>
              ) : null}
              <Body className={`text-[15px] ${shortLabels?.[i] ? "mt-3" : "mt-4 text-[16px]"}`}>
                {b}
              </Body>
            </Glass>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-10 max-w-[760px] text-center text-[15px] leading-[1.6] text-[#8A8A97]">
        {forWhom.notFor}
      </p>
    </Section>
  )
}
