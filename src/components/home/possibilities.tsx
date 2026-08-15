import { Workflow, LineChart, UserRound, Library } from "lucide-react"

// Sezione 3 — "Cosa è possibile". Scura (design system dell'hero), 4 esiti in
// griglia 2x2, card glassy. Copy approvato invariato.
const items = [
  {
    icon: Workflow,
    text: "Processi che prima richiedevano giornate di lavoro manuale, gestiti da agenti che lavorano al tuo fianco.",
  },
  {
    icon: LineChart,
    text: "Dati complessi e frammentati, resi leggibili e interpretabili senza doverli estrarre e incrociare a mano ogni volta.",
  },
  {
    icon: UserRound,
    text: "Persone liberate dalle attività ripetitive, concentrate su ciò che conta davvero.",
  },
  {
    icon: Library,
    text: "Trasformare la conoscenza delle singole persone in patrimonio condiviso aziendale.",
  },
]

export function Possibilities() {
  return (
    <section
      id="cosa-e-possibile"
      className="relative w-full overflow-hidden bg-[#0b1026] text-white [scroll-margin-top:80px]"
    >
      {/* Glow viola morbido */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(48% 40% at 82% 0%, rgba(108,15,242,0.20), rgba(11,16,38,0) 60%)",
        }}
      />
      {/* Dashed grid su scuro (stessa trama della sez. 2) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px)," +
            "linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          maskImage:
            "repeating-linear-gradient(to right, black 0, black 3px, transparent 3px, transparent 8px)," +
            "repeating-linear-gradient(to bottom, black 0, black 3px, transparent 3px, transparent 8px)",
          WebkitMaskImage:
            "repeating-linear-gradient(to right, black 0, black 3px, transparent 3px, transparent 8px)," +
            "repeating-linear-gradient(to bottom, black 0, black 3px, transparent 3px, transparent 8px)",
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:py-32">
        <h2 className="max-w-[16ch] text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
          Cosa è possibile
        </h2>

        <ul className="mt-14 grid gap-5 sm:mt-16 sm:grid-cols-2">
          {items.map(({ icon: Icon, text }) => (
            <li
              key={text}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-colors duration-300 hover:bg-white/[0.06] sm:p-8"
            >
              <Icon
                className="h-6 w-6 text-[#b18cff]"
                strokeWidth={1.5}
                aria-hidden
              />
              <p className="mt-5 text-lg leading-relaxed text-white/85">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
