"use client"

import { useState, useEffect, useCallback, type ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

// Schede verticali (21st.dev): la voce attiva si apre, il pannello a destra
// scorre in verticale e una barra mostra l'avanzamento dell'autoplay.
// Adattato al progetto: framer-motion al posto di motion/react, icone lucide
// al posto di hugeicons, e al posto delle foto un visual costruito a codice.

export type VerticalTabItem = {
  id: string
  title: string
  description: string
  visual: ReactNode
}

const AUTO_PLAY_DURATION = 6000

export function VerticalTabs({
  eyebrow,
  title,
  items,
  className,
  tone = "light",
}: {
  eyebrow?: string
  title: string
  items: VerticalTabItem[]
  className?: string
  tone?: "light" | "dark"
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const handleNext = useCallback(() => {
    setDirection(1)
    setActiveIndex((prev) => (prev + 1) % items.length)
  }, [items.length])

  const handlePrev = useCallback(() => {
    setDirection(-1)
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length)
  }, [items.length])

  const handleTabClick = (index: number) => {
    if (index === activeIndex) return
    setDirection(index > activeIndex ? 1 : -1)
    setActiveIndex(index)
    setIsPaused(false)
  }

  useEffect(() => {
    if (isPaused) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const interval = setInterval(handleNext, AUTO_PLAY_DURATION)
    return () => clearInterval(interval)
  }, [activeIndex, isPaused, handleNext])

  const variants = {
    enter: (d: number) => ({ y: d > 0 ? "-100%" : "100%", opacity: 0 }),
    center: { zIndex: 1, y: 0, opacity: 1 },
    exit: (d: number) => ({ zIndex: 0, y: d > 0 ? "100%" : "-100%", opacity: 0 }),
  }

  const ink = tone === "dark" ? "text-white" : "text-[#1B1A2E]"
  const muted = tone === "dark" ? "text-white/55" : "text-[#6B6B76]"
  const dim = tone === "dark" ? "text-white/35" : "text-[#A3A3AD]"
  const rule = tone === "dark" ? "border-white/15" : "border-[#1B1A2E]/10"
  const track = tone === "dark" ? "bg-white/15" : "bg-[#1B1A2E]/10"
  const bar = tone === "dark" ? "bg-white" : "bg-[#7C5CFA]"

  return (
    <section className={cn("w-full", className)}>
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
        {/* colonna sinistra: elenco */}
        <div className="order-2 flex flex-col justify-center lg:order-1 lg:col-span-5">
          <div className="mb-10 space-y-1">
            <h2
              className={cn(
                "text-balance text-3xl font-medium tracking-[-0.035em] md:text-4xl lg:text-[44px]",
                ink,
              )}
            >
              {title}
            </h2>
            {eyebrow ? (
              <span className={cn("ml-0.5 block text-[10px] font-medium uppercase tracking-[0.3em]", dim)}>
                ({eyebrow})
              </span>
            ) : null}
          </div>

          <div className="flex flex-col">
            {items.map((item, index) => {
              const isActive = activeIndex === index
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleTabClick(index)}
                  aria-current={isActive}
                  className={cn(
                    "group relative flex items-start gap-4 border-t py-6 text-left transition-colors duration-500 first:border-0 md:py-7",
                    rule,
                    isActive ? ink : cn(muted, "hover:text-[#1B1A2E]"),
                    tone === "dark" && !isActive ? "hover:text-white" : "",
                  )}
                >
                  <span className={cn("absolute bottom-0 top-0 -left-4 w-[2px] md:-left-6", track)}>
                    {isActive ? (
                      <motion.span
                        key={`progress-${index}-${isPaused}`}
                        className={cn("absolute left-0 top-0 block w-full origin-top", bar)}
                        initial={{ height: "0%" }}
                        animate={isPaused ? { height: "0%" } : { height: "100%" }}
                        transition={{ duration: AUTO_PLAY_DURATION / 1000, ease: "linear" }}
                      />
                    ) : null}
                  </span>

                  <span className={cn("mt-1 text-[10px] font-medium tabular-nums", dim)}>
                    /{item.id}
                  </span>

                  <span className="flex flex-1 flex-col gap-2">
                    <span className="text-[22px] font-normal tracking-[-0.02em] md:text-[26px] lg:text-[30px]">
                      {item.title}
                    </span>

                    <AnimatePresence mode="wait">
                      {isActive ? (
                        <motion.span
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                          className="block overflow-hidden"
                        >
                          <span className={cn("block max-w-sm pb-1 text-[15px] leading-[1.55] md:text-[16px]", muted)}>
                            {item.description}
                          </span>
                        </motion.span>
                      ) : null}
                    </AnimatePresence>
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* colonna destra: pannello */}
        <div className="order-1 flex h-full flex-col justify-end lg:order-2 lg:col-span-7">
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className={cn(
                "relative aspect-[4/5] overflow-hidden rounded-[28px] border md:aspect-[4/3] lg:aspect-[16/11]",
                tone === "dark" ? "border-white/15 bg-white/5" : "border-white/65 bg-white/45 backdrop-blur-2xl",
              )}
              style={
                tone === "light"
                  ? {
                      boxShadow:
                        "0 40px 90px -45px rgba(1,1,16,0.35), inset 0 1px 0 rgba(255,255,255,0.85)",
                    }
                  : undefined
              }
            >
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    y: { type: "spring", stiffness: 260, damping: 32 },
                    opacity: { duration: 0.4 },
                  }}
                  className="absolute inset-0 h-full w-full"
                >
                  {items[activeIndex].visual}
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-6 right-6 z-20 flex gap-2 md:bottom-8 md:right-8 md:gap-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Elemento precedente"
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-md transition active:scale-90 md:h-12 md:w-12",
                    tone === "dark"
                      ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
                      : "border-white/70 bg-white/70 text-[#1B1A2E] hover:bg-white",
                  )}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Elemento successivo"
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-md transition active:scale-90 md:h-12 md:w-12",
                    tone === "dark"
                      ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
                      : "border-white/70 bg-white/70 text-[#1B1A2E] hover:bg-white",
                  )}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VerticalTabs
