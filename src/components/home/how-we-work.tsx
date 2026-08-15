// Sezione 5 — Come lavoriamo (scura). Processo in 3 step (sequenza → numerati).
const steps = [
  {
    n: "01",
    title: "Definiamo assieme il tuo percorso",
    desc: "Partiamo dai tuoi obiettivi di business. Mettiamo a fuoco insieme dove vuoi arrivare, poi entriamo nei processi per individuare le aree di intervento a maggior valore e disegnare una roadmap di trasformazione AI su misura.",
  },
  {
    n: "02",
    title: "Know how tecnico",
    desc: "Conosciamo gli strumenti, le loro potenzialità e i loro limiti. Individuiamo le tecnologie adatte al tuo caso e studiamo la loro applicazione per massimizzare l'impatto sulla tua azienda.",
  },
  {
    n: "03",
    title: "Implementazione su misura",
    desc: "Costruiamo il sistema dentro il tuo modo di lavorare, con l'obiettivo che tutto risulti facile da capire e da usare. Formiamo il tuo team e gli diamo gli strumenti per moltiplicare la propria produttività.",
  },
]

export function HowWeWork() {
  return (
    <section
      id="come-lavoriamo"
      className="relative w-full overflow-hidden bg-[#0b1026] text-white [scroll-margin-top:80px]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(46% 40% at 16% 0%, rgba(108,15,242,0.18), rgba(11,16,38,0) 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:py-32">
        <h2 className="max-w-[16ch] text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
          Come lavoriamo
        </h2>

        <ol className="mt-14 grid gap-10 sm:mt-20 md:grid-cols-3 md:gap-8">
          {steps.map((s) => (
            <li key={s.n}>
              <div className="text-sm font-semibold tracking-[0.16em] text-[#b18cff]">
                {s.n}
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-lg leading-relaxed text-white/65">
                {s.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
