// Copy approvato, riusato ESATTAMENTE dalla sezione attuale, solo redistribuito.
// L'unica libertà presa è dove va a capo un paragrafo: la "frase guida" è la
// prima frase di ogni blocco (leggibile da sola), il resto è corpo.
export const CRED = {
  kicker: "Perché lo diciamo noi",
  h2: "La tecnologia più avanzata che esiste, oggi, è alla portata delle aziende.",
  // Stessi identici parole della h2, solo con i punti di rottura forzati.
  h2Lines: [
    "La tecnologia più avanzata",
    "che esiste, oggi,",
    "è alla portata",
    "delle aziende.",
  ],
  blocks: [
    {
      n: "01",
      name: "Prima",
      label: "01 · Prima",
      guide:
        "Lo sappiamo perché per più di 10 anni abbiamo lavorato a progetti di trasformazione digitale nelle grandi aziende,",
      body: "toccando con mano i limiti degli strumenti e scontrandoci con la complessità di implementare e far utilizzare la tecnologia.",
    },
    {
      n: "02",
      name: "Cosa è cambiato",
      label: "02 · Cosa è cambiato",
      guide:
        "Quando è arrivata l'intelligenza artificiale, ci siamo resi conto di essere davanti a qualcosa di rivoluzionario:",
      body: "una tecnologia economica, facile da utilizzare, che comprende il linguaggio umano e lavora autonomamente al fianco delle persone.",
    },
    {
      n: "03",
      name: "Oggi",
      label: "03 · Oggi",
      guide:
        "Quello che prima richiedeva anni di lavoro, oggi si può costruire in pochi mesi e con una frazione dei costi.",
      body: "La barriera si è abbassata, e per la prima volta, il potenziale trasformativo della tecnologia è alla portata di tutte le aziende.",
    },
  ],
} as const
