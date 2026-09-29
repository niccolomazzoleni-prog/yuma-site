import type React from "react"
import { Camera } from "lucide-react"
import { cn } from "@/lib/utils"

// Foto vere del sito. Il numero corrisponde all'elenco "Foto" in
// YUMA_Prompt_Infografiche.md: finché la foto non c'è, resta il segnaposto
// con la descrizione di cosa serve. Per montarne una basta aggiungere la riga.
const READY: Record<number, { file: string; alt: string; position?: string }> = {
  1: { file: "foto-01.webp", alt: "Un workshop con il team di un'azienda: una facilitatrice indica i post-it divisi per idee, priorità, azioni e impatto" },
  2: { file: "foto-02.webp", alt: "Un'operatrice di back office alle sei di sera, tra due monitor, il telefono e pile di ordini stampati" },
  3: { file: "foto-03.webp", alt: "Un direttore commerciale chino su report stampati, evidenziatore in mano" },
  4: { file: "foto-04.webp", alt: "Un agente commerciale in auto, al telefono, con il catalogo aperto sulle ginocchia" },
  5: { file: "foto-05.webp", alt: "Un capo cantiere al telefono in un cantiere in piena attività, con escavatore e gru", position: "50% 80%" },
  6: { file: "foto-06.webp", alt: "Un operatore in cantiere che fotografa con lo smartphone un DDT appoggiato sui mattoni" },
  7: { file: "foto-07.webp", alt: "Un'impiegata dell'ufficio tecnico che ricopia al computer i dati di un rapportino" },
  8: { file: "foto-08.webp", alt: "Titolare e project manager in un container di cantiere che confrontano preventivo e consuntivo" },
}

const SIZE: Record<string, [number, number]> = {
  "foto-01.webp": [1536, 1024],
  "foto-02.webp": [1200, 800],
  "foto-03.webp": [1200, 800],
  "foto-04.webp": [768, 512],
  "foto-05.webp": [768, 512],
  "foto-06.webp": [768, 512],
  "foto-07.webp": [768, 512],
  "foto-08.webp": [768, 512],
}

export function PhotoSlot({
  n,
  subject,
  ratio = "4 / 3",
  mobileRatio,
  position,
  className,
}: {
  /** formato su telefono (sotto i 640px) */
  mobileRatio?: string
  /** punto da tenere nel ritaglio */
  position?: string
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
        width={SIZE[ready.file]?.[0]}
        height={SIZE[ready.file]?.[1]}
        alt={ready.alt}
        loading="lazy"
        className={cn(
          "w-full rounded-[16px] object-cover",
          mobileRatio ? "[aspect-ratio:var(--rm)] sm:[aspect-ratio:var(--r)]" : "",
          className,
        )}
        style={
          {
            aspectRatio: mobileRatio ? undefined : ratio,
            "--rm": mobileRatio,
            "--r": ratio,
            objectPosition: position ?? ready.position,
          } as React.CSSProperties
        }
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
        <span className="mt-1.5 block text-[13px] leading-[1.45] text-[#6E6E73]">
          Foto di {subject}
        </span>
        <span className="mt-2 block text-[11px] text-[#56565B]">
          formato {ratio.replace(" / ", ":")}
        </span>
      </span>
    </div>
  )
}
