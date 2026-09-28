// Invio dei moduli contatto al Google Sheet YUMA, tramite la web app Apps Script
// in `apps-script/leads.gs`. Ogni modulo scrive in una tab dedicata del foglio.

// URL della web app Apps Script (Distribuisci > Nuova distribuzione > App web, finisce con /exec).
export const LEADS_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbzlU4LXgoniqOHsgiUlnbJ7yzFfYYbSb3uHuosOpdnacVIPyL_qLkYTNGWTJRNJ4bptjQ/exec"

// reCAPTCHA v3 (google.com/recaptcha/admin, tipo "Basato sul punteggio (v3)").
// Vuota = disattivato lato browser; gli altri controlli anti-spam restano attivi.
// La chiave segreta va nelle Script Properties dell'Apps Script (RECAPTCHA_SECRET).
export const RECAPTCHA_SITE_KEY = ""

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void
      execute: (key: string, opts: { action: string }) => Promise<string>
    }
  }
}

export function loadRecaptcha() {
  if (!RECAPTCHA_SITE_KEY || document.getElementById("recaptcha-v3")) return
  const s = document.createElement("script")
  s.id = "recaptcha-v3"
  s.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`
  s.async = true
  document.head.appendChild(s)
}

async function getRecaptchaToken(): Promise<string> {
  const g = window.grecaptcha
  if (!RECAPTCHA_SITE_KEY || !g) return ""
  try {
    await new Promise<void>((resolve) => g.ready(resolve))
    return await g.execute(RECAPTCHA_SITE_KEY, { action: "lead" })
  } catch {
    return ""
  }
}

export type LeadFormKey = "home" | "client" | "projects"

export const revenueOptions = [
  { value: "0-2M", label: "0 - 2M €" },
  { value: "2M-10M", label: "2M - 10M €" },
  { value: "10M-30M", label: "10M - 30M €" },
  { value: "30M+", label: "30M+ €" },
] as const

export type RevenueBand = (typeof revenueOptions)[number]["value"]

// Fasce di fatturato accettate da ciascun modulo.
// Home (assessment/consulenza) e Projects: da 2M in su. Client Interface: da 10M in su.
const qualifiedBands: Record<LeadFormKey, RevenueBand[]> = {
  home: ["2M-10M", "10M-30M", "30M+"],
  projects: ["2M-10M", "10M-30M", "30M+"],
  client: ["10M-30M", "30M+"],
}

export const minRevenueLabel: Record<LeadFormKey, string> = {
  home: "2 milioni di euro",
  projects: "2 milioni di euro",
  client: "10 milioni di euro",
}

export function isQualified(form: LeadFormKey, band: string) {
  return (qualifiedBands[form] as string[]).includes(band)
}

// Domini di email personali: il modulo accetta solo email aziendali.
const personalDomains = new Set([
  "gmail.com", "googlemail.com",
  "yahoo.com", "yahoo.it", "ymail.com", "rocketmail.com",
  "hotmail.com", "hotmail.it", "outlook.com", "outlook.it", "live.com", "live.it", "msn.com",
  "icloud.com", "me.com", "mac.com",
  "aol.com", "aol.it",
  "libero.it", "virgilio.it", "alice.it", "tim.it", "tin.it", "tiscali.it",
  "fastwebnet.it", "email.it", "inwind.it", "iol.it", "katamail.com", "blu.it", "vodafone.it",
  "pec.it", "legalmail.it",
  "proton.me", "protonmail.com", "pm.me",
  "gmx.com", "gmx.it", "gmx.net", "gmx.de", "web.de",
  "yandex.com", "yandex.ru", "mail.ru", "mail.com", "zohomail.com",
  "tutanota.com", "tuta.io", "hey.com", "qq.com", "163.com",
])

export function isWorkEmail(email: string) {
  const domain = email.trim().toLowerCase().split("@")[1] ?? ""
  if (!domain || !domain.includes(".")) return false
  return !personalDomains.has(domain)
}

export async function sendLead(data: Record<string, string>) {
  if (!LEADS_ENDPOINT) throw new Error("LEADS_ENDPOINT non configurato in src/lib/leads.ts")
  const recaptcha_token = await getRecaptchaToken()
  // no-cors: Apps Script non espone header CORS, la risposta resta opaca.
  await fetch(LEADS_ENDPOINT, {
    method: "POST",
    mode: "no-cors",
    body: new URLSearchParams({ ...data, recaptcha_token }),
  })
}
