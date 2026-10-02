/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** chiave pubblica del progetto PostHog (phc_...) */
  readonly VITE_POSTHOG_KEY?: string
  /** host PostHog, es. https://eu.i.posthog.com */
  readonly VITE_POSTHOG_HOST?: string
}
