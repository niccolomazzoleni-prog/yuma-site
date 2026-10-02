// Eventi del pixel Meta oltre a PageView e Lead (che stanno negli index.html).
// Il pixel è caricato nell'<head>; se un adblocker lo blocca fbq non esiste e
// queste funzioni non fanno nulla.

type Fbq = (cmd: "track" | "trackCustom", name: string, params?: object, opts?: { eventID?: string }) => void

function fbq(): Fbq | undefined {
  return (window as unknown as { fbq?: Fbq }).fbq
}

export function metaTrack(name: string, params?: object) {
  try {
    fbq()?.("track", name, params)
  } catch {
    /* il tracciamento non deve mai rompere la pagina */
  }
}

// Clic sui contatti diretti, ovunque nel sito:
//   Calendly  -> Schedule (prenotazione della chiamata)
//   WhatsApp  -> Contact
//   email     -> Contact
export function initMetaEvents() {
  document.addEventListener(
    "click",
    (e) => {
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null
      if (!a) return
      const href = a.href
      if (href.includes("calendly.com")) metaTrack("Schedule", { content_name: "calendly" })
      else if (href.includes("wa.me") || href.includes("api.whatsapp.com")) metaTrack("Contact", { content_name: "whatsapp" })
      else if (href.startsWith("mailto:")) metaTrack("Contact", { content_name: "email" })
    },
    { capture: true },
  )
}

// Identificativo condiviso tra pixel (pagina grazie) e Conversions API (Apps
// Script): Meta vede due volte lo stesso Lead e lo conta una volta sola.
export function newEventId() {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`
}

// Cookie del pixel che collegano la visita all'annuncio cliccato.
export function metaCookies() {
  const get = (name: string) => document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`))?.[1] ?? ""
  return { fbp: get("_fbp"), fbc: get("_fbc") }
}
