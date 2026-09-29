import { ArrowRight } from "lucide-react"
import { Glass, Eyebrow, Body } from "@/components/v3/glass"
import { DashboardMock } from "@/components/v2/mockups"
import { links } from "@/lib/links"

// Tre tipi di scheda prodotto, tutte con lo spazio per lo screenshot.
// Riferimenti 21st: Showcase Card (2062), Feature Grid Spotlight Cards (26797),
// Product Card (27903), Cta Card (8747).

export type Product = {
  name: string
  desc: string
  href: string
  ratio: string
  /** quando arriva lo screenshot vero basta valorizzare `image` */
  image?: string
}

export const products: Product[] = [
  {
    name: "YUMA Projects",
    desc: "Aiuta le aziende che lavorano a commessa a tenere sotto controllo margini, costi e avanzamento di ogni progetto. Raccoglie i dati dal campo come arrivano, con messaggi, foto e note vocali, e li trasforma in un quadro aggiornato ogni giorno di ogni commessa.",
    href: links.projects,
    ratio: "16 / 10",
    image: `${import.meta.env.BASE_URL}screen-projects.webp`,
  },
  {
    name: "YUMA Client Interface",
    desc: "Gestisce ordini, richieste e reclami che arrivano dai tuoi clienti. Li interpreta e li porta già strutturati nei tuoi sistemi, liberando il tuo team dalle attività di data entry manuali e ripetitive.",
    href: links.clientInterface,
    ratio: "16 / 10",
    image: `${import.meta.env.BASE_URL}screen-client-interface.webp`,
  },
]

// Cornice per lo screenshot: tratteggiata finché l'immagine non c'è.
function Shot({
  product,
  className = "",
  ratio,
}: {
  product: Product
  className?: string
  ratio?: string
}) {
  if (product.image) {
    return (
      // la schermata intera, nel suo formato: niente ritaglio del pannello a destra
      <img
        src={product.image}
        alt={`Schermata di ${product.name}`}
        width={1600}
        height={952}
        loading="lazy"
        className={`block h-auto w-full rounded-[14px] border border-white/70 shadow-[0_24px_60px_-30px_rgba(1,1,16,0.45)] ${className.replace("h-full", "")}`}
      />
    )
  }
  return (
    <div
      role="img"
      aria-label={`Screenshot di ${product.name} (segnaposto)`}
      className={`flex items-center justify-center rounded-[14px] border border-dashed border-[#7C5CFA]/35 bg-white/45 ${className}`}
      style={{ aspectRatio: ratio ?? product.ratio }}
    >
      <span className="px-6 text-center text-[13px] font-medium text-[#56565B]">
        Screenshot {product.name}
        <span className="mt-1 block text-[11px] font-normal text-[#56565B]">
          formato {(ratio ?? product.ratio).replace(" / ", ":")}
        </span>
      </span>
    </div>
  )
}

function Cta({ href, name }: { href: string; name?: string }) {
  return (
    <a
      href={href}
      aria-label={name ? `Scopri di più su ${name}` : undefined}
      className="group inline-flex items-center gap-2 self-start rounded-full bg-[#6D4CF2] px-5 py-2.5 text-[15px] font-medium text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1F] focus-visible:ring-offset-2"
    >
      Scopri di più
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </a>
  )
}

// ── A · Vetrina: screenshot grande in alto ───────────────────────────────────
export function CardsShowcase() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {products.map((p) => (
        <Glass
          key={p.name}
          className="group flex flex-col p-6 transition-transform duration-300 hover:-translate-y-1 md:p-8"
        >
          <Shot product={p} className="w-full" />
          <h3 className="mt-7 text-[22px] font-medium tracking-[-0.02em] text-[#1D1D1F] md:text-[26px]">
            {p.name}
          </h3>
          <Body className="mt-3 flex-1">{p.desc}</Body>
          <div className="mt-6">
            <Cta href={p.href} name={p.name} />
          </div>
        </Glass>
      ))}
    </div>
  )
}

// ── B · Scheda divisa: immagine a fianco del testo ───────────────────────────
export function CardsSplit() {
  return (
    <div className="flex flex-col gap-5">
      {products.map((p, i) => (
        <Glass key={p.name} className="overflow-hidden">
          <div
            className={`grid items-stretch gap-0 md:grid-cols-2 ${
              i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="flex items-center p-4 md:p-6">
              <Shot product={p} className="h-full w-full" ratio="4 / 3" />
            </div>
            <div className="flex flex-col justify-center p-6 md:p-10">
              <Eyebrow>Prodotto</Eyebrow>
              <h3 className="mt-3 text-[24px] font-medium tracking-[-0.02em] text-[#1D1D1F] md:text-[30px]">
                {p.name}
              </h3>
              <Body className="mt-4 max-w-[46ch]">{p.desc}</Body>
              <div className="mt-7">
                <Cta href={p.href} name={p.name} />
              </div>
            </div>
          </div>
        </Glass>
      ))}
    </div>
  )
}

// ── C · Finestra: lo screenshot dentro una cornice di app ────────────────────
export function CardsWindow() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {products.map((p, i) => (
        <Glass key={p.name} className="flex flex-col p-6 md:p-8">
          <div className="overflow-hidden rounded-[14px] border border-white/60 bg-white/50">
            <div className="flex items-center gap-2 border-b border-white/60 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#1D1D1F]/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#1D1D1F]/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#1D1D1F]/15" />
              <span className="ml-2 text-[11px] font-medium text-[#56565B]">
                {p.name.toLowerCase().replace(/\s+/g, "-")}.yuma.app
              </span>
            </div>
            {/* il primo prodotto mostra il mockup vero, il secondo il segnaposto */}
            {i === 0 && !p.image ? (
              <div className="p-3">
                <DashboardMock />
              </div>
            ) : (
              <div className="p-3">
                <Shot product={p} className="w-full" />
              </div>
            )}
          </div>

          <h3 className="mt-7 text-[22px] font-medium tracking-[-0.02em] text-[#1D1D1F] md:text-[26px]">
            {p.name}
          </h3>
          <Body className="mt-3 flex-1">{p.desc}</Body>
          <div className="mt-6">
            <Cta href={p.href} name={p.name} />
          </div>
        </Glass>
      ))}
    </div>
  )
}
