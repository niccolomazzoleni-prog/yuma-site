import { useEffect, useRef, useState, type ReactNode } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Eyebrow, Glass, Section, Title, Lead, Body } from "@/components/v3/glass"
import { ParticleGlobe } from "@/components/ui/particle-globe"
import { KnowledgeLayers } from "@/components/v3/visuals"

// Tre modi di raccontare il blocco 2 del copy (dalla tecnologia alla nota sui
// dati). Riferimenti 21st: Sticky Scroll Reveal (952), Image Text (19322),
// Alternating Rows With Stats (28168), Growth Story Timeline (28273).

const PHOTO = `${import.meta.env.BASE_URL}team.jpg`

type Beat = {
  id: string
  kicker: string
  title: string
  body: ReactNode
  visual: ReactNode
}

function Photo({ className = "" }: { className?: string }) {
  return (
    <img
      src={PHOTO}
      alt="Il team di YUMA al lavoro"
      loading="lazy"
      className={`h-full w-full object-cover ${className}`}
    />
  )
}

function BeforeAfterVisual() {
  return (
    <div className="grid h-full w-full grid-rows-2 gap-3 p-6">
      <div className="rounded-[14px] border border-white/60 bg-white/50 p-5">
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#A3A3AD]">
          Prima
        </p>
        <p className="mt-2 text-[14px] leading-[1.5] text-[#4A4A58]">
          Schermate, campi obbligatori, codici da ricordare. E qualcuno dedicato
          a inserire i dati e tenere insieme i pezzi.
        </p>
      </div>
      <div className="rounded-[14px] border border-[#7C5CFA]/30 bg-[#7C5CFA]/10 p-5">
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#7C5CFA]">
          Dopo
        </p>
        <p className="mt-2 text-[14px] leading-[1.5] text-[#2A2A38]">
          Un messaggio o un vocale, con le parole che useresti con un collega.
          Gli agenti fanno girare il processo dietro le quinte.
        </p>
      </div>
    </div>
  )
}

const beats: Beat[] = [
  {
    id: "esperienza",
    kicker: "Da dove veniamo",
    title: "Dieci anni dentro le grandi trasformazioni",
    body: (
      <>
        Lo sappiamo perché per più di 10 anni abbiamo lavorato a progetti di
        trasformazione digitale nelle grandi aziende, toccando con mano i limiti
        degli strumenti e scontrandoci con la complessità di implementare e far
        utilizzare la tecnologia.
      </>
    ),
    visual: <Photo />,
  },
  {
    id: "svolta",
    kicker: "La svolta",
    title: "Poi è arrivata l'intelligenza artificiale",
    body: (
      <>
        Ci siamo resi conto di essere davanti a qualcosa di rivoluzionario: una
        tecnologia economica, facile da utilizzare, che comprende il linguaggio
        umano e lavora autonomamente al fianco delle persone.
      </>
    ),
    visual: <ParticleGlobe className="h-full w-full" density={4200} />,
  },
  {
    id: "diverso",
    kicker: "Perché stavolta è diverso",
    title: "Oggi si parla ai sistemi come a un collega",
    body: (
      <>
        Per anni la tecnologia ha chiesto alle persone di adattarsi a lei. Quello
        che prima richiedeva anni di lavoro, oggi si costruisce in pochi mesi e
        con una frazione dei costi.
      </>
    ),
    visual: <BeforeAfterVisual />,
  },
  {
    id: "dati",
    kicker: "Una cosa non cambia",
    title: "I tuoi dati restano tuoi",
    body: (
      <>
        Nessuna condivisione con terze parti: le informazioni della tua azienda
        restano dentro il perimetro che definiamo insieme. Nessun dato viene usato
        per addestrare modelli, né da noi, né dai nostri fornitori tecnologici.
      </>
    ),
    visual: <KnowledgeLayers />,
  },
]

const SECTION_TITLE =
  "La tecnologia più avanzata che esiste, oggi, è alla portata delle aziende"

// ── A · Scrollytelling: testo che scorre, visual che resta ───────────────────
export function StoryStickyScroll() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const i = Math.min(beats.length - 1, Math.floor(latest * beats.length))
    setActive(Math.max(0, i))
  })

  return (
    <Section id="perche-ora">
      <div className="mx-auto max-w-[820px] text-center">
        <Eyebrow>Perché lo diciamo noi</Eyebrow>
        <Title className="mx-auto mt-5 max-w-[22ch]">{SECTION_TITLE}</Title>
      </div>

      <div ref={ref} className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* colonna testo */}
        <div className="flex flex-col gap-24 lg:gap-32">
          {beats.map((b, i) => (
            <div key={b.id} className={i === active ? "" : "opacity-45 transition-opacity duration-500"}>
              <Eyebrow>{b.kicker}</Eyebrow>
              <h3 className="mt-4 max-w-[18ch] text-[26px] font-medium leading-[1.1] tracking-[-0.03em] text-[#010110] md:text-[34px]">
                {b.title}
              </h3>
              <Body className="mt-4 max-w-[52ch]">{b.body}</Body>
              {/* su mobile il visual sta sotto il suo testo */}
              <Glass className="mt-6 aspect-[4/3] overflow-hidden lg:hidden">
                {b.visual}
              </Glass>
            </div>
          ))}
        </div>

        {/* colonna visual, resta ferma */}
        <div className="hidden lg:block">
          <div className="sticky top-28">
            <Glass className="aspect-[4/3] overflow-hidden">
              {beats.map((b, i) => (
                <motion.div
                  key={b.id}
                  initial={false}
                  animate={{ opacity: i === active ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                  style={{ pointerEvents: i === active ? "auto" : "none" }}
                >
                  {b.visual}
                </motion.div>
              ))}
            </Glass>
          </div>
        </div>
      </div>
    </Section>
  )
}

// ── B · Righe alternate: immagine e testo, uno sotto l'altro ─────────────────
export function StoryAlternating() {
  return (
    <Section id="perche-ora">
      <div className="mx-auto max-w-[820px] text-center">
        <Eyebrow>Perché lo diciamo noi</Eyebrow>
        <Title className="mx-auto mt-5 max-w-[22ch]">{SECTION_TITLE}</Title>
      </div>

      <div className="mt-16 flex flex-col gap-6">
        {beats.map((b, i) => (
          <Glass key={b.id} className="overflow-hidden">
            <div
              className={`grid items-center gap-8 md:grid-cols-2 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="aspect-[4/3] overflow-hidden md:aspect-auto md:h-full md:min-h-[320px]">
                {b.visual}
              </div>
              <div className="p-8 md:p-10">
                <Eyebrow>{b.kicker}</Eyebrow>
                <h3 className="mt-4 max-w-[20ch] text-[24px] font-medium leading-[1.1] tracking-[-0.03em] text-[#010110] md:text-[30px]">
                  {b.title}
                </h3>
                <Body className="mt-4 max-w-[50ch]">{b.body}</Body>
              </div>
            </div>
          </Glass>
        ))}
      </div>
    </Section>
  )
}

// ── C · Linea del tempo: le tappe della storia ───────────────────────────────
export function StoryTimeline() {
  const [seen, setSeen] = useState<number[]>([])
  const refs = useRef<(HTMLLIElement | null)[]>([])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = Number((e.target as HTMLElement).dataset.index)
            setSeen((s) => (s.includes(i) ? s : [...s, i]))
          }
        })
      },
      { threshold: 0.35 },
    )
    refs.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <Section id="perche-ora">
      <div className="mx-auto max-w-[820px] text-center">
        <Eyebrow>Perché lo diciamo noi</Eyebrow>
        <Title className="mx-auto mt-5 max-w-[22ch]">{SECTION_TITLE}</Title>
        <Lead className="mx-auto mt-6 max-w-[58ch]">
          Come ci siamo arrivati, in quattro passaggi.
        </Lead>
      </div>

      <ol className="relative mx-auto mt-16 max-w-[880px] border-l border-[#010110]/10 pl-8 md:pl-12">
        {beats.map((b, i) => (
          <li
            key={b.id}
            data-index={i}
            ref={(el) => {
              refs.current[i] = el
            }}
            className={`relative pb-14 transition-opacity duration-500 ${
              seen.includes(i) ? "opacity-100" : "opacity-50"
            }`}
          >
            <span
              aria-hidden
              className={`absolute -left-[38px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full border md:-left-[54px] ${
                seen.includes(i)
                  ? "border-[#7C5CFA] bg-[#7C5CFA]"
                  : "border-[#010110]/20 bg-white"
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
            </span>

            <Eyebrow>{b.kicker}</Eyebrow>
            <h3 className="mt-3 max-w-[20ch] text-[24px] font-medium leading-[1.1] tracking-[-0.03em] text-[#010110] md:text-[30px]">
              {b.title}
            </h3>
            <Body className="mt-3 max-w-[54ch]">{b.body}</Body>
            <Glass className="mt-6 aspect-[16/9] overflow-hidden">
              {b.visual}
            </Glass>
          </li>
        ))}
      </ol>
    </Section>
  )
}
