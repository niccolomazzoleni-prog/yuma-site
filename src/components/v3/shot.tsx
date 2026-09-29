// Segnaposto per le schermate di prodotto, finché non arrivano le catture vere.
export function Shot({
  label,
  ratio = "16 / 10",
  className = "",
  src,
  alt,
  eager = false,
}: {
  label: string
  ratio?: string
  className?: string
  /** schermata vera: se c'è, prende il posto del segnaposto */
  src?: string
  alt?: string
  /** true per le immagini in cima alla pagina (hero) */
  eager?: boolean
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt ?? label}
        width={1600}
        height={952}
        loading={eager ? "eager" : "lazy"}
        // attributo scritto in minuscolo: React 18 non riconosce ancora fetchPriority
        {...(eager ? { fetchpriority: "high" } : {})}
        className={`block h-auto w-full rounded-[16px] border border-white/70 shadow-[0_24px_60px_-30px_rgba(1,1,16,0.45)] ${className}`}
      />
    )
  }
  return (
    <div
      role="img"
      aria-label={`${label} (segnaposto)`}
      className={`flex items-center justify-center rounded-[16px] border border-dashed border-[#7C5CFA]/35 bg-white/45 ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <span className="px-6 text-center text-[13px] font-medium text-[#56565B]">
        {label}
        <span className="mt-1 block text-[11px] font-normal text-[#56565B]">
          formato {ratio.replace(" / ", ":")}
        </span>
      </span>
    </div>
  )
}
