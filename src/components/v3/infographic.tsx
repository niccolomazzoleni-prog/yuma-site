import { cn } from "@/lib/utils"

// Segnaposto numerato per le infografiche ancora da produrre.
// Il numero corrisponde a quello del file YUMA_Prompt_Infografiche.md.
export function Info({
  n,
  ratio = "4 / 3",
  className,
}: {
  n: number
  ratio?: string
  className?: string
}) {
  return (
    <div
      role="img"
      aria-label={`Infografica numero ${n} (segnaposto)`}
      className={cn(
        "flex w-full items-center justify-center rounded-[16px] border border-dashed border-[#7C5CFA]/40 bg-white/45",
        className,
      )}
      style={{ aspectRatio: ratio }}
    >
      <span className="px-6 text-center">
        <span className="block text-[15px] font-medium text-[#5B3FD9]">
          Infografica n. {n}
        </span>
        <span className="mt-1 block text-[11px] font-normal text-[#A3A3AD]">
          formato {ratio.replace(" / ", ":")}
        </span>
      </span>
    </div>
  )
}
