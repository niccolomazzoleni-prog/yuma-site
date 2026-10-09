import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import { ShaderBackground } from "@/components/ui/silk-shader"

// HERO SIGILLATO — versione approvata. Ritocchi dell'audit (settembre 2026):
// shader avviato a pagina già disegnata, altezza sicura su iPhone piccoli,
// velo più scuro dietro al testo solo su telefono. Aspetto desktop invariato.

// Lo shader si compila solo quando il browser è libero: il testo compare
// subito sul blu di fondo e la seta entra in dissolvenza.
function DeferredShader() {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number
      cancelIdleCallback?: (id: number) => void
    }
    if (w.requestIdleCallback) {
      const id = w.requestIdleCallback(() => setReady(true), { timeout: 1200 })
      return () => w.cancelIdleCallback?.(id)
    }
    const t = window.setTimeout(() => setReady(true), 300)
    return () => window.clearTimeout(t)
  }, [])
  return (
    <div
      aria-hidden
      className={`absolute inset-0 transition-opacity duration-1000 ${ready ? "opacity-100" : "opacity-0"}`}
    >
      {ready ? <ShaderBackground className="absolute inset-0 h-full w-full" /> : null}
    </div>
  )
}

export function HeroSilk() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#0b1026] text-white">
      {/* Animated Silk shader background */}
      <DeferredShader />

      {/* Legibility scrim: darkens edges and the lower third so text stays readable */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 12%, rgba(6,9,26,0) 40%, rgba(6,9,26,0.55) 100%), linear-gradient(180deg, rgba(6,9,26,0.35) 0%, rgba(6,9,26,0) 30%, rgba(6,9,26,0.72) 100%)",
        }}
      />

      {/* velo in più dietro al testo, solo su telefono dove la seta schiarisce */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 md:hidden"
        style={{ background: "linear-gradient(180deg, rgba(6,9,26,0.55) 0%, rgba(6,9,26,0.25) 60%, rgba(6,9,26,0) 100%)" }}
      />

      {/* Hero content */}
      <div className="relative z-10 flex min-h-[100svh] items-center pb-24 pt-28">
        <div className="w-full px-5 md:px-12">
          <div className="max-w-4xl">
            <h1 className="text-balance text-[32px] font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              Liberiamo il potenziale inespresso della tua azienda implementando
              l'AI dove serve davvero.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-[1.6] text-white/75 md:text-[22px]">
              Yuma affianca le imprese nel loro percorso di adozione AI unendo
              consulenza aziendale, know how tecnico e implementazione di
              progetti su misura.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#soluzioni"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b1026] transition hover:scale-[1.03]"
              >
                Scopri i nostri prodotti
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
  )
}
