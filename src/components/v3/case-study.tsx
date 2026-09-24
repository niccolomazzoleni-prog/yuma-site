import { Body, Eyebrow, Section, Title } from "@/components/v3/glass"
import { Shot } from "@/components/v3/landing"
import type { Bullet, LandingContent } from "@/lib/landing-content"

// Blocco "caso sul campo": per ora fuori dalla landing, pronto da rimettere
// quando arrivano numeri e immagini veri.

function TodoTag() {
  return (
    <span className="ml-2 inline-block rounded-[4px] bg-white/70 px-2 py-0.5 align-middle text-[11px] font-medium uppercase tracking-[0.06em] text-[#A3A3AD]">
      da confermare
    </span>
  )
}

function BulletText({ item }: { item: Bullet }) {
  return (
    <>
      {item.text}
      {item.todo ? <TodoTag /> : null}
    </>
  )
}

// ── 06 caso sul campo: fuori pagina per ora, il componente resta pronto ─────
export function CaseStudy({ c }: { c: LandingContent }) {
  const cs = c.caseStudy
  return (
    <Section id="caso" className="pt-0">
      <Eyebrow>{cs.label}</Eyebrow>
      <Title className="mt-5 max-w-[20ch]">{cs.headline}</Title>
      <p className="mt-3 text-[15px] italic text-[#8A8A97]">{cs.note}</p>

      <div className="mt-10">
        <Shot label="Foto o schermata del caso" ratio="21 / 9" className="w-full" />
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-12">
        {cs.blocks.map((b) => (
          <div key={b.title}>
            <h3 className="text-[17px] font-medium text-[#1B1A2E]">{b.title}</h3>
            <Body className="mt-3">{b.desc}</Body>
          </div>
        ))}
      </div>

      <div className="mt-12 border-t border-[#1B1A2E]/10 pt-8">
        <div className="flex flex-wrap items-baseline gap-3">
          <h3 className="text-[17px] font-medium text-[#1B1A2E]">{cs.resultsTitle}</h3>
          <span className="text-[13px] text-[#8A8A97]">{cs.resultsNote}</span>
          <TodoTag />
        </div>
        <ul className="mt-6 grid gap-6 md:grid-cols-3">
          {cs.results.map((r, i) => (
            <li key={r.text} className="border-l border-[#7C5CFA]/30 pl-5">
              <span className="text-[12px] font-medium tabular-nums text-[#7C5CFA]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className={`mt-2 text-[16px] leading-[1.5] ${r.todo ? "text-[#8A8A97]" : "text-[#2A2A38]"}`}>
                <BulletText item={r} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

