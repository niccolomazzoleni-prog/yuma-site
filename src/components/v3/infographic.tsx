import { cn } from "@/lib/utils"

// Infografiche del sito. Il numero corrisponde a quello del file
// YUMA_Prompt_Infografiche.md: finché l'immagine non c'è, resta il segnaposto.
// Per montarne una nuova basta aggiungere la riga qui sotto.
const READY: Record<number, { file: string; alt: string }> = {
  1: {
    file: "infografica-01.webp",
    alt: "Messaggi, foto, documenti e vocali collegati a una sfera di particelle",
  },
  2: {
    file: "infografica-02.webp",
    alt: "Prima: una finestra software piena di campi. Dopo: un vocale che diventa tre righe di dati ordinate",
  },
  3: {
    file: "infografica-03.webp",
    alt: "Documenti che confluiscono in piani impilati fino alla memoria dell'azienda",
  },
  4: {
    file: "infografica-04.webp",
    alt: "Catena input, agente, controllo, sistema, con avanzamento al 90%",
  },
  5: {
    file: "infografica-05.webp",
    alt: "Canali diversi che entrano in una sfera e ne escono come schede ordinate",
  },
  6: {
    file: "infografica-06.webp",
    alt: "Righe ripetitive che si dissolvono e confluiscono in una persona",
  },
  7: {
    file: "infografica-07.webp",
    alt: "Tre nuclei di conoscenza che confluiscono in un unico archivio",
  },
}
export function Info({
  n,
  ratio = "4 / 3",
  className,
  src,
  alt,
}: {
  n: number
  ratio?: string
  className?: string
  /** quando l'infografica è pronta, basta passarla qui */
  src?: string
  alt?: string
}) {
  const ready = READY[n]
  const source = src ?? (ready ? `${import.meta.env.BASE_URL}${ready.file}` : undefined)
  const description = alt ?? ready?.alt

  if (source) {
    return (
      <img
        src={source}
        alt={description ?? `Infografica ${n}`}
        loading="lazy"
        className={cn("h-full w-full object-cover", className)}
      />
    )
  }

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
