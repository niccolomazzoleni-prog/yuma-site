import { useEffect, useRef, useState } from "react"
import { Reveal } from "@/components/ui/reveal"
import { CRED } from "@/lib/credibilita-content"
import { yuma as t } from "@/lib/yuma-tokens"

export interface CredibilitaSectionProps {
  className?: string
}

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)"

// Variante A — colonna sticky + tre blocchi (rifinita, Apple-like).
export function CredibilitaVariantA({ className }: CredibilitaSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const fillRef = useRef<HTMLDivElement>(null)
  const h2Ref = useRef<HTMLHeadingElement>(null)
  const [h2In, setH2In] = useState(false)
  const [reduce, setReduce] = useState(false)

  // Headline: mask reveal via clip-path.
  useEffect(() => {
    const el = h2Ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduce(true)
      setH2In(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setH2In(true)
            io.unobserve(el)
          }
        }
      },
      { threshold: 0.25 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Guida verticale: riempimento scroll-linked (rAF, nessuna libreria).
  useEffect(() => {
    const sec = sectionRef.current
    const fill = fillRef.current
    if (!sec || !fill) return
    let raf = 0
    const update = () => {
      raf = 0
      const r = sec.getBoundingClientRect()
      const total = r.height - window.innerHeight
      let p = total > 0 ? -r.top / total : r.top <= 0 ? 1 : 0
      p = Math.max(0, Math.min(1, p))
      fill.style.height = `${p * 100}%`
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className={className}
      style={{ fontFamily: t.font, background: t.surface }}
    >
      <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-[180px]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left (col 1-5): sticky intro + prova sociale */}
          <div className="lg:col-span-6 lg:sticky lg:top-[120px] lg:self-start">
            <p className="text-[13px] font-medium" style={{ color: t.neutral500 }}>
              {CRED.kicker}
            </p>
            <h2
              ref={h2Ref}
              className="mt-6 text-[clamp(40px,3.6vw,48px)] font-semibold leading-[0.98] tracking-[-0.025em]"
              style={{
                color: t.neutral900,
                clipPath: reduce
                  ? "none"
                  : h2In
                    ? "inset(0 0 0 0)"
                    : "inset(0 0 100% 0)",
                transition: reduce ? undefined : `clip-path 700ms ${EASE}`,
              }}
            >
              {CRED.h2Lines.map((line, i) => (
                <span key={i} className="block whitespace-nowrap">
                  {line}
                </span>
              ))}
            </h2>

            <div className="mt-16">
              <div
                className="text-[40px] font-semibold leading-none"
                style={{ color: t.neutral900 }}
              >
                10+
              </div>
              <div className="mt-3 text-[14px]" style={{ color: t.neutral500 }}>
                anni dentro la trasformazione digitale
              </div>
              <div
                className="mt-8 flex flex-nowrap items-center gap-x-12 overflow-hidden"
                aria-hidden
              >
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="shrink-0"
                    style={{
                      width: 64,
                      height: 28,
                      background: t.neutral400,
                      opacity: 0.5,
                      filter: "grayscale(1)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right (col 7-12): tre blocchi + guida verticale */}
          <div className="relative lg:col-span-6 lg:col-start-7">
            {/* Guida verticale (solo >=1024) */}
            <div
              aria-hidden
              className="absolute inset-y-0 left-[-16px] hidden w-[2px] lg:block"
              style={{ background: t.neutral200 }}
            >
              <div
                ref={fillRef}
                className="w-full"
                style={{ height: "0%", background: t.primary500 }}
              />
            </div>

            {CRED.blocks.map((b, i) => (
              <Reveal
                key={b.n}
                as="article"
                delay={i * 100}
                distance={24}
                duration={700}
                easing={EASE}
                threshold={0.25}
                className={
                  i < CRED.blocks.length - 1 ? "mb-[112px] max-md:mb-16" : ""
                }
              >
                <div
                  className="text-[12px] font-medium uppercase tracking-[0.08em]"
                  style={{ color: t.primary500 }}
                >
                  {b.n}
                  {" · "}
                  {b.name}
                </div>
                <p
                  className="mt-6 max-w-[62ch] text-[24px] font-medium leading-[1.35]"
                  style={{ color: t.neutral900 }}
                >
                  {b.guide}
                </p>
                <p
                  className="mt-5 max-w-[62ch] text-[18px] leading-[1.7]"
                  style={{ color: t.neutral600 }}
                >
                  {b.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
