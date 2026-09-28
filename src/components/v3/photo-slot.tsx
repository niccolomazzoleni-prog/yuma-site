import { Camera } from "lucide-react"
import { cn } from "@/lib/utils"

// Foto vere del sito. Il numero corrisponde all'elenco "Foto" in
// YUMA_Prompt_Infografiche.md: finché la foto non c'è, resta il segnaposto
// con la descrizione di cosa serve. Per montarne una basta aggiungere la riga.
const READY: Record<number, { file: string; alt: string }> = {}

export function PhotoSlot({
  n,
  subject,
  ratio = "4 / 3",
  className,
}: {
  n: number
  /** cosa deve mostrare la foto, compare nel segnaposto */
  subject: string
  ratio?: string
  className?: string
}) {
  const ready = READY[n]

  if (ready) {
    return (
      <img
        src={`${import.meta.env.BASE_URL}${ready.file}`}
        alt={ready.alt}
        loading="lazy"
        className={cn("w-full rounded-[16px] object-cover", className)}
        style={{ aspectRatio: ratio }}
      />
    )
  }

  return (
    <div
      role="img"
      aria-label={`Foto numero ${n} (segnaposto): ${subject}`}
      className={cn(
        "flex w-full items-center justify-center rounded-[16px] border border-dashed border-[#E0457B]/45 bg-white/45",
        className,
      )}
      style={{ aspectRatio: ratio }}
    >
      <span className="flex max-w-[34ch] flex-col items-center px-6 text-center">
        <Camera className="h-5 w-5 text-[#E0457B]" strokeWidth={1.75} />
        <span className="mt-3 block text-[15px] font-medium text-[#C2336A]">
          Foto n. {n}
        </span>
        <span className="mt-1.5 block text-[13px] leading-[1.45] text-[#6B6B76]">
          Foto di {subject}
        </span>
        <span className="mt-2 block text-[11px] text-[#A3A3AD]">
          formato {ratio.replace(" / ", ":")}
        </span>
      </span>
    </div>
  )
}
