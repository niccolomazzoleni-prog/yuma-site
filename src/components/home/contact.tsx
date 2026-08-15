import { useState, type FormEvent } from "react"

// Sezione 9 — Modulo di contatto (chiara). Form statico (backend da collegare).
const inputClass =
  "w-full rounded-lg border border-black/15 bg-white px-4 py-3 text-[15px] text-[#201C18] outline-none transition focus:border-[#6C0FF2] focus:ring-2 focus:ring-[#6C0FF2]/20"

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // TODO: collegare invio (email/CRM). Per ora mostra la conferma.
    setSent(true)
  }

  return (
    <section
      id="contatti"
      className="relative w-full text-[#201C18] [scroll-margin-top:80px]"
      style={{ background: "#F3EFEA" }}
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:gap-16 md:py-32">
        <div>
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
            Parliamone
          </h2>
          <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-[#4A443C]">
            Raccontaci come lavori oggi e cosa vorresti migliorare. Ti
            rispondiamo entro un giorno lavorativo e fissiamo una prima call
            conoscitiva di trenta minuti, senza impegno.
          </p>
          <p className="mt-8 max-w-[46ch] text-sm leading-relaxed text-[#6B6459]">
            Usiamo i tuoi dati solo per ricontattarti. Nessuna newsletter,
            nessuna condivisione con terzi.
          </p>
        </div>

        {sent ? (
          <div
            aria-live="polite"
            className="flex items-center rounded-2xl border border-black/10 bg-white/70 p-8 text-lg leading-relaxed text-[#201C18]"
          >
            Grazie, abbiamo ricevuto la tua richiesta. Ti scriviamo entro un
            giorno lavorativo.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-5">
            <div className="grid gap-2">
              <label htmlFor="nome" className="text-sm font-medium">
                Nome e cognome
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                required
                autoComplete="name"
                className={inputClass}
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <label htmlFor="azienda" className="text-sm font-medium">
                  Azienda
                </label>
                <input
                  id="azienda"
                  name="azienda"
                  type="text"
                  required
                  autoComplete="organization"
                  className={inputClass}
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="ruolo" className="text-sm font-medium">
                  Ruolo
                </label>
                <input
                  id="ruolo"
                  name="ruolo"
                  type="text"
                  autoComplete="organization-title"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium">
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
                <label htmlFor="telefono" className="text-sm font-medium">
                  Telefono <span className="text-[#8B8578]">(facoltativo)</span>
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid gap-2">
              <label htmlFor="dipendenti" className="text-sm font-medium">
                Numero di dipendenti
              </label>
              <select
                id="dipendenti"
                name="dipendenti"
                required
                defaultValue=""
                className={inputClass}
                style={{ backgroundColor: "#fff", color: "#201C18" }}
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
              <label htmlFor="messaggio" className="text-sm font-medium">
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

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[#6C0FF2] px-6 py-3.5 text-[15px] font-semibold text-white transition hover:bg-[#5a0dcc]"
            >
              Invia la richiesta
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
