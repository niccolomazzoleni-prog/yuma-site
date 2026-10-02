// Percorsi del sito. In locale la base è "/", su GitHub Pages "/yuma-site/".
const base = import.meta.env.BASE_URL

export const links = {
  home: base,
  projects: `${base}projects/`,
  clientInterface: `${base}client-interface/`,
  homeSection: (id: string) => `${base}#${id}`,
  grazie: `${base}grazie/`,
  // prenotazione diretta della chiamata (si apre in una nuova scheda)
  calendly: "https://calendly.com/e-turatti-yuma-tx/30min",
}
