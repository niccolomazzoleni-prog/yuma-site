import { useState } from "react"
import { Check } from "lucide-react"
import { Body, Eyebrow, Glass, Section, Title } from "@/components/v3/glass"
import type { LandingContent } from "@/lib/landing-content"

// "Come si lavora insieme": pillole numerate in alto, dettaglio sotto.
export function StepsWizard({ together }: { together: LandingContent["together"] }) {
  const steps = together.steps
  const [active, setActive] = useState(0)

  return (
    <Section id="come-si-lavora" className="pt-0">
      <div className="mx-auto max-w-[820px] text-center">
        <Eyebrow>{together.label}</Eyebrow>
        <Title className="mx-auto mt-5 max-w-[24ch]">{together.headline}</Title>
      </div>

      <ol className="mt-12 flex flex-wrap items-center justify-center gap-2">
        {steps.map((s, i) => (
          <li key={s.n} className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-current={i === active}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-[14px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFA] ${
                i === active
                  ? "border-[#7C5CFA] bg-[#7C5CFA] text-white"
                  : i < active
                    ? "border-[#7C5CFA]/35 bg-white/70 text-[#5B3FD9]"
                    : "border-white/70 bg-white/50 text-[#8A8A97]"
              }`}
            >
              <span className="tabular-nums">
                {i < active ? <Check className="h-4 w-4" /> : s.n}
              </span>
              <span className="hidden sm:inline">
                {s.title.split(" ").slice(0, 2).join(" ")}
              </span>
            </button>
            {i < steps.length - 1 ? (
              <span aria-hidden className="hidden h-px w-6 bg-[#7C5CFA]/25 sm:block" />
            ) : null}
          </li>
        ))}
      </ol>

      <Glass className="mx-auto mt-6 max-w-[900px] p-8 md:p-10">
        <span className="text-[13px] font-medium tabular-nums text-[#7C5CFA]">
          {steps[active].n}
        </span>
        <h3 className="mt-3 text-[24px] font-medium tracking-[-0.025em] text-[#010110] md:text-[30px]">
          {steps[active].title}
        </h3>
        <Body className="mt-4 max-w-[62ch]">{steps[active].desc}</Body>
      </Glass>
    </Section>
  )
}
