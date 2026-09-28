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
  8: {
    // nome versionato: così il browser non mostra la versione precedente in cache
    file: "infografica-08-v3.webp",
    alt: "Il documento dell'assessment AI: casi d'uso ordinati per impatto, alto e medio, con il sigillo di verifica",
  },
  9: {
    file: "infografica-09.webp",
    alt: "Email, WhatsApp, PDF e vocali che si aggrovigliano prima di arrivare sulla scrivania del back office",
  },
  10: {
    file: "infografica-10.webp",
    alt: "Una casella di posta traboccante di messaggi, con una clessidra e il contatore +48",
  },
  11: {
    file: "infografica-11.webp",
    alt: "Punti sparsi collegati da linee tratteggiate e una lente che non inquadra nulla",
  },
  12: {
    file: "infografica-12.webp",
    alt: "Una persona che tiene da sola tutte le schede cliente, accanto a una porta socchiusa",
  },
  13: {
    file: "infografica-13.webp",
    alt: "Dati ordinati che entrano in ERP e CRM: ordini, anagrafiche, transazioni",
  },
  14: {
    file: "infografica-14.webp",
    alt: "Email, WhatsApp, portali, PDF e vocali che confluiscono in un imbuto e ne escono come dati strutturati",
  },
  16: {
    file: "infografica-16.webp",
    alt: "Un cruscotto con l'andamento dei clienti e le schede di sintesi per la direzione",
  },
  17: {
    file: "infografica-17.webp",
    alt: "Una conversazione su smartphone che diventa un ordine gia compilato e confermato",
  },
  18: {
    file: "infografica-18.webp",
    alt: "Un documento che diventa una tabella di righe verificate una a una",
  },
  23: {
    file: "infografica-23.webp",
    alt: "Portatile, smartphone e tablet collegati: il campo comunica da qualunque dispositivo",
  },
  24: {
    file: "infografica-24.webp",
    alt: "File sparsi che vengono smistati da soli, ognuno nella cartella giusta",
  },
  25: {
    file: "infografica-25.webp",
    alt: "Documenti che diventano grafici e tabelle di confronto aggiornati",
  },
}

// Dimensioni reali dei file: con width/height il browser riserva lo spazio
// prima che l'immagine arrivi e la pagina non salta mentre scorri.
const SIZE: Record<string, [number, number]> = {
  "infografica-01.webp": [1280, 960],
  "infografica-02.webp": [1280, 960],
  "infografica-03.webp": [1280, 960],
  "infografica-04.webp": [1280, 960],
  "infografica-05.webp": [1280, 960],
  "infografica-06.webp": [1280, 853],
  "infografica-07.webp": [1280, 853],
  "infografica-08-v3.webp": [1280, 960],
  "infografica-09.webp": [1916, 821],
  "infografica-10.webp": [1448, 1086],
  "infografica-11.webp": [1448, 1086],
  "infografica-12.webp": [1448, 1086],
  "infografica-13.webp": [1448, 1086],
  "infografica-14.webp": [1448, 1086],
  "infografica-16.webp": [1086, 1448],
  "infografica-17.webp": [1086, 1448],
  "infografica-18.webp": [1086, 1448],
  "infografica-23.webp": [1672, 941],
  "infografica-24.webp": [1672, 941],
  "infografica-25.webp": [1672, 941],
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
        width={ready ? SIZE[ready.file]?.[0] : undefined}
        height={ready ? SIZE[ready.file]?.[1] : undefined}
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
        <span className="mt-1 block text-[11px] font-normal text-[#56565B]">
          formato {ratio.replace(" / ", ":")}
        </span>
      </span>
    </div>
  )
}
