import { ArrowRight } from "lucide-react"
import { ShaderBackground } from "@/components/ui/silk-shader"

export default function DemoOne() {
  return (
    <main>
    <section className="relative h-screen w-full overflow-hidden bg-[#0b1026] text-white">
      {/* Animated Silk shader background */}
      <ShaderBackground className="absolute inset-0 h-full w-full" />

      {/* Legibility scrim: darkens edges and the lower third so text stays readable */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 12%, rgba(6,9,26,0) 40%, rgba(6,9,26,0.55) 100%), linear-gradient(180deg, rgba(6,9,26,0.35) 0%, rgba(6,9,26,0) 30%, rgba(6,9,26,0.72) 100%)",
        }}
      />

      {/* Top bar */}
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <span className="text-lg font-semibold tracking-[0.2em]">YUMA</span>
          <nav className="hidden items-center gap-8 text-sm text-white/70 sm:flex">
            <a className="transition hover:text-white" href="#soluzioni">
              Soluzioni
            </a>
            <a className="transition hover:text-white" href="#progetti">
              Progetti
            </a>
            <a className="transition hover:text-white" href="#contatti">
              Contatti
            </a>
          </nav>
          <a
            href="#contatti"
            className="rounded-full border border-white/25 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/15"
          >
            Prenota una call
          </a>
        </div>
      </header>

      {/* Hero content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="max-w-4xl">
            <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              Liberiamo il potenziale inespresso della tua azienda implementando
              l'AI dove serve davvero.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              Yuma affianca le imprese nel loro percorso di adozione AI unendo
              consulenza aziendale, know how tecnico e implementazione di
              progetti su misura.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#soluzioni"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b1026] transition hover:scale-[1.03]"
              >
                Scopri le nostre soluzioni
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contatti"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-sm transition hover:bg-white/10"
              >
                Richiedi informazioni
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Section 2 — Perché ora */}
      <section id="perche-ora" className="w-full">
        <div className="grid md:grid-cols-2">
          {/* Left: text panel (cream) */}
          <div className="flex flex-col justify-center gap-8 bg-[#faf6ef] px-6 py-16 text-[#0b1026] sm:px-10 md:min-h-[660px] md:px-16 md:py-24">
            <h2 className="text-balance text-2xl font-bold leading-[1.15] tracking-tight sm:text-3xl md:text-4xl">
              La tecnologia più avanzata che esiste, oggi, è alla portata delle
              aziende.
            </h2>

            <div className="max-w-xl space-y-5 text-base leading-relaxed text-[#0b1026]/65 md:text-lg">
              <p>
                Lo sappiamo perché per più di 10 anni abbiamo lavorato a
                progetti di trasformazione digitale nelle grandi aziende,
                toccando con mano i limiti degli strumenti e scontrandoci con la
                complessità di implementare e far utilizzare la tecnologia.
              </p>
              <p>
                Quando è arrivata l'intelligenza artificiale, ci siamo resi
                conto di essere davanti a qualcosa di rivoluzionario: una
                tecnologia economica, facile da utilizzare, che comprende il
                linguaggio umano e lavora autonomamente al fianco delle persone.
              </p>
            </div>
          </div>

          {/* Right: dark visual (silk shader) */}
          <div className="relative min-h-[420px] overflow-hidden bg-[#05060f] md:min-h-[660px]">
            <ShaderBackground className="absolute inset-0 h-full w-full" />
          </div>
        </div>
      </section>
    </main>
  )
}
