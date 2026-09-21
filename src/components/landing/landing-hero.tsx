import { ArrowRight } from "lucide-react"
import { ShaderBackground } from "@/components/ui/silk-shader"
import { links } from "@/lib/links"

// Hero delle pagine prodotto: stessa impostazione dell'hero home (shader Silk,
// scrim per la leggibilità), altezza ridotta perché sotto c'è molto contenuto.
export function LandingHero({
  product,
  headline,
  sub,
  cta,
}: {
  product: string
  headline: string
  sub: string
  cta: string
}) {
  return (
    <section className="relative min-h-[680px] w-full overflow-hidden bg-[#0b1026] py-28 text-white md:min-h-[760px] md:py-32">
      <ShaderBackground className="absolute inset-0 h-full w-full" />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 12%, rgba(6,9,26,0) 40%, rgba(6,9,26,0.55) 100%), linear-gradient(180deg, rgba(6,9,26,0.35) 0%, rgba(6,9,26,0) 30%, rgba(6,9,26,0.72) 100%)",
        }}
      />

      <header className="absolute inset-x-0 top-0 z-20">
        <div className="flex w-full items-center justify-between px-5 py-6 md:px-12">
          <a href={links.home} className="text-lg font-semibold tracking-[0.2em]">
            YUMA
          </a>
          <nav className="hidden items-center gap-7 text-sm text-white/70 lg:flex">
            <a className="transition hover:text-white" href={links.projects}>
              YUMA Projects
            </a>
            <a className="transition hover:text-white" href={links.clientInterface}>
              Client Interface
            </a>
            <a className="transition hover:text-white" href={links.homeSection("assessment")}>
              Assessment AI
            </a>
            <a className="transition hover:text-white" href="#demo">
              Contatti
            </a>
          </nav>
          <a
            href="#demo"
            className="rounded-full border border-white/25 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/15"
          >
            Richiedi una demo
          </a>
        </div>
      </header>

      <div className="relative z-10 flex h-full items-center">
        <div className="w-full px-5 md:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-white/55">
              {product}
            </p>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              {headline}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-[1.6] text-white/75 md:text-[22px]">
              {sub}
            </p>

            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href="#demo"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b1026] transition hover:scale-[1.03]"
              >
                {cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={links.home}
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-sm transition hover:bg-white/10"
              >
                Scopri YUMA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
