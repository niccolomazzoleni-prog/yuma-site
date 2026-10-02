import { useEffect, useRef, useState, type FormEvent } from "react"
import { Body, Glass } from "@/components/v3/glass"
import {
  isQualified,
  isWorkEmail,
  loadRecaptcha,
  minRevenueLabel,
  revenueOptions,
  sendLead,
  type LeadFormKey,
} from "@/lib/leads"

const inputClass =
  "w-full rounded-[10px] border border-white/70 bg-white/70 px-4 py-3 text-[16px] text-[#1D1D1F] placeholder:text-[#6E6E73] outline-none transition-shadow duration-200 focus:border-[#7C5CFA] focus:ring-4 focus:ring-[#7C5CFA]/15 aria-[invalid=true]:border-[#B42318] aria-[invalid=true]:ring-4 aria-[invalid=true]:ring-[#B42318]/15"
const labelClass = "text-[14px] font-medium text-[#1D1D1F]"

type Status = "idle" | "sending" | "qualified" | "discarded" | "error"

export function LeadForm({
  form,
  submitLabel,
  instance,
}: {
  form: LeadFormKey
  submitLabel: string
  /** distingue gli id quando lo stesso modulo è in pagina due volte (es. "top") */
  instance?: string
}) {
  const [status, setStatus] = useState<Status>("idle")
  const [emailError, setEmailError] = useState("")
  const loadTime = useRef(Date.now())
  const doneRef = useRef<HTMLDivElement>(null)
  const id = (name: string) => (instance ? `${form}-${instance}-${name}` : `${form}-${name}`)

  useEffect(loadRecaptcha, [])

  // a invio riuscito il modulo sparisce: il focus va sul messaggio di conferma
  useEffect(() => {
    if (status === "qualified" || status === "discarded") doneRef.current?.focus()
  }, [status])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const data = Object.fromEntries(
      [...fd.entries()].map(([k, v]) => [k, String(v).trim()])
    ) as Record<string, string>

    if (!isWorkEmail(data.email)) {
      setEmailError("Inserisci la tua email di lavoro, non un indirizzo personale.")
      e.currentTarget.querySelector<HTMLInputElement>(`#${id("email")}`)?.focus()
      return
    }

    const qualified = isQualified(form, data.fatturato)
    setStatus("sending")
    try {
      // Honeypot (website) e tempo di compilazione vengono verificati dall'Apps Script.
      await sendLead({
        ...data,
        form,
        pagina: window.location.href,
        form_load_time: String(loadTime.current),
      })
      if (qualified) {
        // pagina vera di ringraziamento (con Calendly): è anche la conversione da misurare in GTM
        window.location.assign(`${import.meta.env.BASE_URL}grazie/?da=${form}`)
        return
      }
      setStatus("discarded")
    } catch (err) {
      console.error(err)
      setStatus("error")
    }
  }

  if (status === "qualified" || status === "discarded") {
    return (
      <Glass className="mx-auto mt-10 max-w-[620px] p-6 text-center sm:p-10">
        <div role="status" ref={doneRef} tabIndex={-1} className="outline-none">
        <Body className="text-[#1D1D1F]">
          {status === "qualified"
            ? "Grazie, abbiamo ricevuto la tua richiesta. Ti scriviamo entro 12 ore lavorative."
            : `Grazie per l'interesse. Oggi lavoriamo con aziende che superano i ${minRevenueLabel[form]} di fatturato, quindi non riusciamo a dare seguito alla richiesta.`}
        </Body>
        </div>
      </Glass>
    )
  }

  return (
    <Glass className="mx-auto mt-10 max-w-[720px] p-8 md:p-10">
      <form onSubmit={handleSubmit} className="grid gap-5 text-left">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <label htmlFor={id("nome")} className={labelClass}>Nome</label>
            <input id={id("nome")} name="nome" type="text" required autoComplete="given-name" className={inputClass} />
          </div>
          <div className="grid gap-2">
            <label htmlFor={id("cognome")} className={labelClass}>Cognome</label>
            <input id={id("cognome")} name="cognome" type="text" required autoComplete="family-name" className={inputClass} />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <label htmlFor={id("azienda")} className={labelClass}>Azienda</label>
            <input id={id("azienda")} name="azienda" type="text" required autoComplete="organization" className={inputClass} />
          </div>
          <div className="grid gap-2">
            <label htmlFor={id("ruolo")} className={labelClass}>Ruolo</label>
            <input id={id("ruolo")} name="ruolo" type="text" required autoComplete="organization-title" className={inputClass} />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <label htmlFor={id("email")} className={labelClass}>Email di lavoro</label>
            <input
              id={id("email")}
              name="email"
              type="email"
              required
              inputMode="email"
              autoComplete="email"
              spellCheck={false}
              placeholder="nome@azienda.it"
              aria-invalid={emailError ? true : undefined}
              aria-describedby={emailError ? id("email-err") : undefined}
              onChange={() => emailError && setEmailError("")}
              className={inputClass}
            />
            {emailError ? (
              <p id={id("email-err")} role="alert" className="text-[13px] leading-[1.4] text-[#B42318]">
                {emailError}
              </p>
            ) : null}
          </div>
          <div className="grid gap-2">
            <label htmlFor={id("fatturato")} className={labelClass}>Fatturato aziendale</label>
            <select id={id("fatturato")} name="fatturato" required defaultValue="" className={inputClass}>
              <option value="" disabled>Seleziona</option>
              {revenueOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Honeypot: hidden (non text) per evitare l'autofill del browser, come su Abra */}
        <input type="hidden" name="website" defaultValue="" />

        <p className="text-[13px] leading-[1.5] text-[#6E6E73]">
          Usiamo i tuoi dati solo per ricontattarti. Nessuna newsletter,
          nessuna condivisione con terzi.
        </p>

        {status === "error" ? (
          <p role="alert" className="text-center text-[14px] text-[#B42318]">
            Invio non riuscito. Riprova tra qualche istante.
          </p>
        ) : null}

        <button
          type="submit"
          disabled={status === "sending"}
          className="mt-1 inline-flex items-center justify-center justify-self-center rounded-full bg-[#6D4CF2] px-6 py-3 text-[15px] font-medium text-white transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1F] focus-visible:ring-offset-2"
        >
          {status === "sending" ? "Invio in corso…" : submitLabel}
        </button>
      </form>
    </Glass>
  )
}
