import { useState, type ReactNode } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"

// FAQ a categorie (21st.dev): le schede in alto filtrano le domande, ogni
// domanda si apre con il "+" che ruota. Portato a TypeScript e ai colori YUMA
// (vetro chiaro su gradiente) invece dei token shadcn di default.

export type FaqEntry = {
  question: string
  answer: ReactNode
}

export type FaqData = Record<string, FaqEntry[]>

export function FAQ({
  title,
  subtitle,
  categories,
  faqData,
  className,
}: {
  title: string
  subtitle?: string
  categories: Record<string, string>
  faqData: FaqData
  className?: string
}) {
  const categoryKeys = Object.keys(categories)
  const [selected, setSelected] = useState(categoryKeys[0])

  return (
    <section id="faq" className={cn("relative", className)}>
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        {subtitle ? (
          <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#7C5CFA]">
            {subtitle}
          </span>
        ) : null}
        <h2 className="mt-5 max-w-[22ch] text-balance text-[30px] font-medium leading-[1.05] tracking-[-0.035em] text-[#1B1A2E] md:text-[44px]">
          {title}
        </h2>
      </div>

      <div className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-3">
        {Object.entries(categories).map(([key, label]) => (
          <button
            key={key}
            type="button"
            onClick={() => setSelected(key)}
            aria-current={selected === key}
            className={cn(
              "relative overflow-hidden whitespace-nowrap rounded-full border px-4 py-2 text-[14px] font-medium transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFA]",
              selected === key
                ? "border-[#7C5CFA] text-white"
                : "border-white/70 bg-white/50 text-[#4A4A58] hover:text-[#1B1A2E]",
            )}
          >
            <span className="relative z-10">{label}</span>
            <AnimatePresence>
              {selected === key && (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "100%" }}
                  transition={{ duration: 0.5, ease: "backIn" }}
                  className="absolute inset-0 z-0 bg-[#7C5CFA]"
                />
              )}
            </AnimatePresence>
          </button>
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-[880px]">
        <AnimatePresence mode="wait">
          {Object.entries(faqData).map(([category, questions]) =>
            selected === category ? (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: "backIn" }}
                className="space-y-4"
              >
                {questions.map((faq) => (
                  <FAQItem key={faq.question} {...faq} />
                ))}
              </motion.div>
            ) : null,
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

function FAQItem({ question, answer }: FaqEntry) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      className={cn(
        "rounded-[20px] border border-white/65 backdrop-blur-2xl transition-colors",
        isOpen ? "bg-white/65" : "bg-white/40",
      )}
      style={{
        boxShadow: isOpen
          ? "0 30px 70px -45px rgba(1,1,16,0.35), inset 0 1px 0 rgba(255,255,255,0.85)"
          : "inset 0 1px 0 rgba(255,255,255,0.7)",
      }}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 p-5 text-left md:p-6"
      >
        <span
          className={cn(
            "text-[17px] font-medium tracking-[-0.015em] transition-colors md:text-[19px]",
            isOpen ? "text-[#1B1A2E]" : "text-[#4A4A58]",
          )}
        >
          {question}
        </span>
        <motion.span
          variants={{ open: { rotate: "45deg" }, closed: { rotate: "0deg" } }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <Plus className={cn("h-5 w-5", isOpen ? "text-[#7C5CFA]" : "text-[#A3A3AD]")} />
        </motion.span>
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, marginBottom: isOpen ? 20 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden px-5 md:px-6"
      >
        <p className="max-w-[62ch] text-[16px] leading-[1.55] text-[#4A4A58]">{answer}</p>
      </motion.div>
    </motion.div>
  )
}
