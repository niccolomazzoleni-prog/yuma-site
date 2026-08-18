import { useState, type FormEvent } from "react"
import { SectionRail } from "@/components/home/section-rail"

// Sezione 9 — modulo di contatto. Input 8px radius, bordo Fog, focus Lavender;
// submit = pill Lavender. Conferma su mint-wash. Copy invariato.
const inputClass =
  "w-full rounded-input border border-ref-fog bg-white px-4 py-3 text-[15px] tracking-[-0.02em] text-ref-carbon placeholder:text-ref-ash outline-none transition-shadow duration-200 ease-out-soft focus:border-ref-lavender focus:ring-4 focus:ring-ref-lavender/15"

const labelClass =
  "text-[13px] font-medium tracking-[-0.025em] text-ref-carbon"

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // TODO: collegare invio (email/CRM). Per ora mostra la conferma.
    setSent(true)
  }

  return (
    <SectionRail id="contatti" label="Parliamone" tone="linen" pad="xl">
      <h2 className="text-[clamp(30px,3.4vw,36px)] font-semibold leading-[1.22] tracking-[-0.017em] text-ref-carbon">
        Parliamone
      </h2>
      <p className="mt-5 max-w-[54ch] text-[16px] leading-[1.6] tracking-[-0.02em] text-ref-graphite">
        Raccontaci come lavori oggi e cosa vorresti migliorare. Ti rispondiamo
        entro un giorno lavorativo e fissiamo una prima call conoscitiva di
        trenta minuti, senza impegno.
      </p>

      {sent ? (
        <div
          aria-live="polite"
          className="mt-10 max-w-[560px] rounded-[16px] bg-ref-mintwash p-8 text-[16px] leading-[1.6] tracking-[-0.02em] text-ref-carbon"
        >
          Grazie, abbiamo ricevuto la tua richiesta. Ti scriviamo entro un
          giorno lavorativo.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mt-10 grid max-w-[640px] gap-5 rounded-[24px] border border-ref-fog bg-white p-8"
        >
          <div className="grid gap-2">
            <label htmlFor="nome" className={labelClass}>
              Nome e cognome
            </label>
            <input id="nome" name="nome" type="text" required autoComplete="name" className={inputClass} />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="grid gap-2">
              <label htmlFor="azienda" className={labelClass}>
                Azienda
              </label>
              <input id="azienda" name="azienda" type="text" required autoComplete="organization" className={inputClass} />
            </div>
            <div className="grid gap-2">
              <label htmlFor="ruolo" className={labelClass}>
                Ruolo
              </label>
              <input id="ruolo" name="ruolo" type="text" autoComplete="organization-title" className={inputClass} />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="grid gap-2">
              <label htmlFor="email" className={labelClass}>
                Email di lavoro
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                inputMode="email"
                autoComplete="email"
                spellCheck={false}
                className={inputClass}
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="telefono" className={labelClass}>
                Telefono <span className="font-normal text-ref-ash">(facoltativo)</span>
              </label>
              <input id="telefono" name="telefono" type="tel" inputMode="tel" autoComplete="tel" className={inputClass} />
            </div>
          </div>

          <div className="grid gap-2">
            <label htmlFor="dipendenti" className={labelClass}>
              Numero di dipendenti
            </label>
            <select
              id="dipendenti"
              name="dipendenti"
              required
              defaultValue=""
              className={inputClass}
              style={{ backgroundColor: "#ffffff", color: "#181925" }}
            >
              <option value="" disabled>
                Seleziona
              </option>
              <option value="1-10">1-10</option>
              <option value="11-50">11-50</option>
              <option value="51-200">51-200</option>
              <option value="201-500">201-500</option>
              <option value="500+">Oltre 500</option>
            </select>
          </div>

          <div className="grid gap-2">
            <label htmlFor="messaggio" className={labelClass}>
              Come possiamo aiutarti
            </label>
            <textarea
              id="messaggio"
              name="messaggio"
              rows={4}
              required
              placeholder="Descrivi in due righe la situazione attuale e cosa vorresti ottenere."
              className={inputClass + " resize-y"}
            />
          </div>

          <p className="text-[12px] leading-[1.5] text-ref-ash">
            Usiamo i tuoi dati solo per ricontattarti. Nessuna newsletter,
            nessuna condivisione con terzi.
          </p>

          <button
            type="submit"
            className="mt-1 inline-flex items-center justify-center self-start rounded-pill bg-ref-lavender px-6 py-3 text-[15px] font-medium text-white shadow-subtle transition-transform duration-200 ease-out-soft hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ref-carbon focus-visible:ring-offset-2"
          >
            Invia la richiesta
          </button>
        </form>
      )}
    </SectionRail>
  )
}
