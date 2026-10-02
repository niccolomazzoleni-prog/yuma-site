import { useEffect } from "react"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import { Glass, GradientField } from "@/components/v3/glass"
import { YumaLogo } from "@/components/v3/logo"
import { SiteFooter, SkipLink } from "@/components/v3/site-chrome"
import { links } from "@/lib/links"

// Pagina di ringraziamento dopo l'invio di un modulo (solo per chi è sopra
// soglia). ?da= dice da quale modulo arriva: le landing prenotano una demo,
// la home una chiamata conoscitiva. In GTM la conversione è la visita a /grazie/.
const origine = {
  home: { chiamata: "conoscitiva", indietro: links.home },
  projects: { chiamata: "demo", indietro: links.projects },
  client: { chiamata: "demo", indietro: links.clientInterface },
} as const

type Origine = keyof typeof origine

export default function ThankYou() {
  const da = new URLSearchParams(window.location.search).get("da")
  const o = origine[(da && da in origine ? da : "home") as Origine]

  useEffect(() => {
    document.documentElement.style.colorScheme = "light"
  }, [])

  return (
    <div className="relative flex min-h-screen flex-col text-[#1D1D1F]">
      <SkipLink />
      <GradientField />

      <header className="px-3 pt-3 sm:px-5 md:pt-5">
        <div className="mx-auto flex w-full max-w-[1180px] items-center rounded-full border border-white/70 bg-white/55 px-5 py-3 backdrop-blur-xl md:px-6">
          <a href={links.home} className="inline-flex items-center py-1 text-[#1D1D1F]">
            <YumaLogo className="h-[18px] w-auto md:h-5" />
          </a>
        </div>
      </header>

      <main id="contenuto" className="flex flex-1 items-center px-5 py-16 md:py-24">
        <Glass className="mx-auto w-full max-w-[680px] p-8 text-center md:p-12">
          <span
            aria-hidden
            className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#22C55E] text-white shadow-[0_12px_30px_-10px_rgba(34,197,94,0.7)]"
          >
            <Check className="h-7 w-7" strokeWidth={3} />
          </span>

          <h1 className="mx-auto mt-7 max-w-[20ch] text-balance text-[30px] font-medium leading-[1.08] tracking-[-0.035em] md:text-[42px]">
            Grazie per il tuo interesse verso YUMA
          </h1>

          <p className="mx-auto mt-5 max-w-[52ch] text-[17px] leading-[1.55] text-[#424245]">
            Abbiamo ricevuto la tua richiesta: un membro del nostro team ti contatterà
            entro 12 ore lavorative per fissare una chiamata {o.chiamata}.
          </p>
          <p className="mx-auto mt-3 max-w-[52ch] text-[17px] leading-[1.55] text-[#424245]">
            Se preferisci prenotarla tu stesso, puoi farlo dal link qui sotto.
          </p>

          <a
            href={links.calendly}
            target="_blank"
            rel="noopener"
            className="group mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-[#6D4CF2] px-7 py-3.5 text-[16px] font-medium text-white transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1F] focus-visible:ring-offset-2"
          >
            Prenota la chiamata
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            <span className="sr-only"> (si apre in una nuova scheda)</span>
          </a>

          <div className="mt-6">
            <a
              href={o.indietro}
              className="inline-flex min-h-[40px] items-center gap-1.5 text-[15px] text-[#56565B] underline-offset-4 hover:text-[#1D1D1F] hover:underline"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Torna al sito
            </a>
          </div>
        </Glass>
      </main>

      <SiteFooter />
    </div>
  )
}
