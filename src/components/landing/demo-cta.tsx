import { useState, type FormEvent } from "react"
import { SectionRail } from "@/components/home/section-rail"
import type { LandingContent } from "@/lib/landing-content"

// Blocco 11 — obiezione + modulo demo. Stessi campi del copy: nome, azienda,
// ruolo, telefono, email, domande. Invio ancora da collegare (email/CRM).
const inputClass =
  "w-full rounded-input border border-ref-fog bg-white px-4 py-3 text-[16px] text-ref-carbon placeholder:text-ref-ash outline-none transition-shadow duration-200 ease-out-soft focus:border-ref-lavender focus:ring-4 focus:ring-ref-lavender/15"

const labelClass = "text-[14px] font-medium text-ref-carbon"

export function DemoCta({
  objection,
  cta,
}: {
  objection: LandingContent["objection"]
  cta: LandingContent["cta"]
}) {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // TODO: collegare invio (email/CRM). Per ora mostra la conferma.
    setSent(true)
  }

  return (
    <SectionRail id="demo" tone="linen" pad="xl">
      <div className="mx-auto max-w-[760px] rounded-[24px] border border-ref-fog bg-white px-8 py-10 text-left">
        <h2 className="text-[22px] font-semibold leading-[1.3] text-ref-carbon md:text-[26px]">
          {objection.title}
        </h2>
        <p className="mt-4 text-[16px] leading-[1.7] text-ref-graphite md:text-[17px]">
          {objection.body}
        </p>
      </div>

      <h2 className="mx-auto mt-20 max-w-[22ch] text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-ref-carbon sm:text-4xl md:text-5xl">
        {cta.headline}
      </h2>
      <p className="mx-auto mt-6 max-w-[58ch] text-[17px] leading-[1.7] text-ref-graphite md:text-[20px]">
        {cta.body}
      </p>

      {sent ? (
        <div
          aria-live="polite"
          className="mx-auto mt-10 max-w-[560px] rounded-[16px] bg-ref-mintwash p-8 text-[16px] leading-[1.7] text-ref-carbon md:text-[17px]"
        >
          Grazie, abbiamo ricevuto la tua richiesta. Ti scriviamo entro un
          giorno lavorativo.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 grid max-w-[640px] gap-5 rounded-[24px] border border-ref-fog bg-white px-8 py-10 text-left"
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
                Telefono
              </label>
              <input id="telefono" name="telefono" type="tel" inputMode="tel" autoComplete="tel" className={inputClass} />
            </div>
          </div>

          <div className="grid gap-2">
            <label htmlFor="domande" className={labelClass}>
              Domande <span className="font-normal text-ref-ash">(facoltativo)</span>
            </label>
            <textarea
              id="domande"
              name="domande"
              rows={4}
              placeholder="C'è qualcosa che vuoi vedere nella demo?"
              className={inputClass + " resize-y"}
            />
          </div>

          <p className="text-[13px] leading-[1.5] text-ref-ash">
            Usiamo i tuoi dati solo per ricontattarti. Nessuna newsletter,
            nessuna condivisione con terzi.
          </p>

          <button
            type="submit"
            className="mt-1 inline-flex items-center justify-center justify-self-center rounded-pill bg-ref-lavender px-6 py-3 text-[15px] font-medium text-white shadow-subtle transition-transform duration-200 ease-out-soft hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ref-carbon focus-visible:ring-offset-2"
          >
            Richiedi la demo
          </button>
        </form>
      )}
    </SectionRail>
  )
}
