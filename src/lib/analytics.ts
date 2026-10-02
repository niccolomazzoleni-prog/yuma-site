import posthog from "posthog-js"

// PostHog (analytics, session replay, heatmap).
//
// Chiave e host arrivano dalle variabili d'ambiente di Vite, lette in build:
//   VITE_POSTHOG_KEY   chiave pubblica del progetto (phc_...)
//   VITE_POSTHOG_HOST  https://eu.i.posthog.com per il cloud europeo
// Senza chiave PostHog non parte (build locali, pagine di prova).
//
// Consenso: il sito ha il banner Iubenda, collegato a Google Consent Mode v2.
// PostHog parte "spento" (opt_out_capturing_by_default) e senza salvare nulla
// sul dispositivo; si accende solo quando il banner concede analytics_storage
// (finalità "misurazione") e si rispegne se il consenso viene revocato.

type ConsentEntry = { 0?: unknown; 1?: unknown; 2?: { analytics_storage?: string } }

let started = false

export function initAnalytics() {
  const key = import.meta.env.VITE_POSTHOG_KEY as string | undefined
  const host = import.meta.env.VITE_POSTHOG_HOST as string | undefined
  if (started || !key || !host || typeof window === "undefined") return
  started = true

  posthog.init(key, {
    api_host: host,
    defaults: "2025-05-24",
    person_profiles: "identified_only",
    // niente raccolta e niente cookie finché il banner non dà il consenso
    opt_out_capturing_by_default: true,
    opt_out_persistence_by_default: true,
    // session replay (i campi dei moduli restano mascherati) e heatmap
    disable_session_recording: false,
    session_recording: { maskAllInputs: true },
    enable_heatmaps: true,
  })
  // come lo snippet ufficiale: serve alla toolbar di PostHog e per il debug da console
  ;(window as unknown as { posthog: typeof posthog }).posthog = posthog

  // Il banner comunica le scelte con gtag('consent', 'default' | 'update', {...}),
  // cioè con voci nel dataLayer: leggiamo quelle già presenti e quelle future.
  const apply = (entry: ConsentEntry) => {
    if (!entry || entry[0] !== "consent" || !entry[2]) return
    const state = entry[2].analytics_storage
    if (state === "granted" && posthog.has_opted_out_capturing()) posthog.opt_in_capturing()
    if (state === "denied" && posthog.has_opted_in_capturing()) posthog.opt_out_capturing()
  }

  const w = window as unknown as { dataLayer?: ConsentEntry[] }
  const dl = (w.dataLayer = w.dataLayer || [])
  dl.forEach(apply)
  const push = dl.push.bind(dl)
  dl.push = (...items: ConsentEntry[]) => {
    items.forEach(apply)
    return push(...items)
  }
}
