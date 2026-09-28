// Segnaposto per le schermate di prodotto, finché non arrivano le catture vere.
export function Shot({
  label,
  ratio = "16 / 10",
  className = "",
}: {
  label: string
  ratio?: string
  className?: string
}) {
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
