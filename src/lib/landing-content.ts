// Contenuti delle due landing di prodotto (YUMA_Sito_Copy_revisionato.md).
// I punti ancora da verificare col cliente sono marcati `todo: true`: in pagina
// compaiono con il tag "da confermare" e vanno sostituiti prima di pubblicare.

export type Bullet = { text: string; todo?: boolean }

export type Module = {
  name: string
  status: "attivo" | "in rilascio" | "in sviluppo"
  statusTodo?: boolean
  desc: string
}

export type Faq = { q: string; a: string; todo?: boolean }

export type LandingContent = {
  slug: string
  product: string
  title: string
  metaDescription: string
  hero: { headline: string; sub: string; cta: string }
  credibility: {
    headline: string
    body: string
    bullets: Bullet[]
    note?: string
    sectors?: string
  }
  problem: {
    label: string
    headline: string
    sub?: string
    causesTitle?: string
    causes?: { title: string; desc: string }[]
    items?: { title: string; desc: string }[]
    solutionTitle?: string
    solutions?: { title: string; desc: string }[]
    tableTitle?: string
    table?: { before: string; after: string }[]
  }
  modules: { label: string; headline: string; note?: Bullet; items: Module[] }
  roles: { label: string; headline: string; items: { role: string; desc: string }[] }
  caseStudy: {
    label: string
    headline: string
    note: string
    blocks: { title: string; desc: string }[]
    resultsTitle: string
    resultsNote: string
    results: Bullet[]
  }
  systems: { label: string; headline: string; sub: string; items: Bullet[] }
  together: { label: string; headline: string; steps: { n: string; title: string; desc: string }[] }
  forWhom: { label: string; headline: string; bullets: string[]; notFor: string }
  faq: { label: string; headline: string; items: Faq[] }
  objection: { title: string; body: string }
  cta: { headline: string; body: string }
}

export const projectsContent: LandingContent = {
  slug: "projects",
  product: "YUMA Projects",
  title: "YUMA Projects · Margini di commessa sotto controllo",
  metaDescription:
    "YUMA Projects trasforma vocali, foto e messaggi dal cantiere in ore, costi e avanzamento di ogni commessa, sopra il gestionale che usi già.",
  hero: {
    headline:
      "Chiudi commesse e cantieri con il margine che avevi messo a preventivo.",
    sub: "YUMA Projects trasforma vocali, foto e messaggi dal cantiere in ore, costi e avanzamento di ogni commessa, e ti avvisa quando lo scostamento supera la tua soglia. Sopra il gestionale che usi già.",
    cta: "Richiedi una demo",
  },
  credibility: {
    headline: "Costruito con chi gestisce decine di commesse aperte.",
    body: "YUMA Projects è la piattaforma che abbiamo costruito lavorando fianco a fianco con imprese che gestiscono decine di commesse aperte contemporaneamente, partendo da come il cantiere comunica davvero.",
    bullets: [
      {
        text: "Oltre 10 anni di progetti di trasformazione digitale nelle più grandi aziende italiane",
      },
      { text: "N imprese la usano oggi su N cantieri attivi", todo: true },
      { text: "Integrazione con i gestionali già in uso, senza sostituirli" },
    ],
    note: "Compatibile con: lista gestionali",
    sectors: "Dove lavoriamo: impianti e costruzioni · manifattura · distribuzione B2B · farmaceutico",
  },
  problem: {
    label: "Il problema",
    headline:
      "Gli extra lavori e gli scostamenti si scoprono spesso a commessa chiusa.",
    sub: "Quando i numeri finali arrivano sulla scrivania, il cantiere è già stato smontato, e l'azienda si trova a sostenere tutti i costi non preventivati.",
    causesTitle: "Perché succede",
    causes: [
      {
        title: "Il dato nasce informale.",
        desc: "Le ore in un vocale, il documento di trasporto in una foto, l'imprevisto in un messaggio WhatsApp.",
      },
      {
        title: "Qualcuno lo ricostruisce a mano.",
        desc: "Il project manager rimette insieme i pezzi giorni dopo, con quello che riesce a recuperare.",
      },
      {
        title: "Il confronto col preventivo arriva a fine corsa.",
        desc: "I conti tornano quando i costi sono già stati messi a bilancio.",
      },
    ],
    solutionTitle: "Come YUMA Projects ti aiuta a risolvere questo problema",
    solutions: [
      {
        title: "Il campo continua a comunicare come già fa.",
        desc: "Vocale, foto, messaggio. La piattaforma legge e struttura le informazioni che il personale manda.",
      },
      {
        title: "Ogni voce si aggancia da sola alla commessa.",
        desc: "Ore, mezzi, materiali ed extra lavori, con data e foto allegate come evidenza.",
      },
      {
        title: "Il confronto col preventivo si aggiorna ogni giorno.",
        desc: "Superata la soglia che hai fissato, lo scostamento compare sulla dashboard e il project manager riceve una notifica.",
      },
    ],
    tableTitle: "Oggi / Con YUMA Projects",
    table: [
      {
        before: "Le ore arrivano in un vocale e restano lì",
        after: "Il vocale diventa ore sulla commessa giusta",
      },
      {
        before: "Il PM ricostruisce a mano, giorni dopo",
        after: "Ogni voce si aggancia da sola, il giorno stesso",
      },
      {
        before: "Il preventivo si confronta a fine lavori",
        after: "Il preventivo si confronta ogni giorno",
      },
      {
        before: "L'extra lavoro emerge senza prove",
        after: "L'extra lavoro nasce già con data e foto",
      },
    ],
  },
  modules: {
    label: "I moduli",
    headline: "Sei moduli, un unico filo che parte dal cantiere.",
    note: { text: "N moduli attivi oggi, N in rilascio entro il trimestre", todo: true },
    items: [
      {
        name: "Dashboard direzionale",
        status: "attivo",
        statusTodo: true,
        desc: "Tutte le commesse aperte in un'unica vista. Fatturato, margine, costi e scostamenti aggiornati. Dove intervenire, indicato. Tutti i dettagli di ogni singola commessa accessibili con un clic.",
      },
      {
        name: "Project management",
        status: "attivo",
        statusTodo: true,
        desc: "Il piano di commessa, e come cambia a progetto in corso. Avvio, pianificazione e allocazione delle risorse. Organizzazione di squadre e mezzi. Segnalazioni su imprevisti, assenze e guasti. Pianificato e consuntivato sempre affiancati.",
      },
      {
        name: "Gestione del cantiere",
        status: "attivo",
        statusTodo: true,
        desc: "Il campo comunica come già fa. Input via chat e messaggi vocali. Ore, mezzi e materiali rendicontati da soli. Report fotografici per extra lavori e imprevisti. Approvazioni configurabili cliente per cliente.",
      },
      {
        name: "Controllo finanziario",
        status: "attivo",
        statusTodo: true,
        desc: "Il preventivo e la realtà, affiancati ogni giorno. Alert sulle deviazioni. Riconciliazione tra produzione e costi. Una base dati oggettiva da portare ai SAL e alle varianti con il committente.",
      },
      {
        name: "Memoria di commessa",
        status: "attivo",
        statusTodo: true,
        desc: "Quello che sa l'azienda resta all'azienda. Contratti, relazioni e prescrizioni interrogabili a voce o per iscritto. Scadenze e certificazioni sotto controllo. Versioning e tracciabilità degli elaborati.",
      },
      {
        name: "Ingegneria d'offerta e gare",
        status: "in sviluppo",
        desc: "Il preventivo costruito sulle commesse che hai già chiuso. Dallo scouting dei bandi alla compilazione documentale.",
      },
    ],
  },
  roles: {
    label: "Chi la usa",
    headline: "Per chi è pensato YUMA Projects",
    items: [
      {
        role: "Direzione",
        desc: "Consulta fatturato, margine, costi e scostamenti di tutte le commesse aperte da un'unica dashboard, per decidere dove intervenire su dati aggiornati alla giornata e proteggere il margine su ogni progetto.",
      },
      {
        role: "Project manager",
        desc: "Pianifica attività, squadre e mezzi, e confronta in ogni momento il pianificato con il consuntivato, per riallineare la commessa mentre lo scostamento è ancora recuperabile.",
      },
      {
        role: "Capi cantiere e operatori",
        desc: "Registra ore, mezzi, materiali ed extra lavori con un messaggio vocale o una foto, per lasciare evidenza di tutto quello che accade in cantiere senza sottrarre tempo al lavoro.",
      },
    ],
  },
  caseStudy: {
    label: "Caso sul campo",
    headline: "Impresa di impianti, 40 addetti, 12 cantieri aperti",
    note: "Nome del cliente disponibile su richiesta.",
    blocks: [
      {
        title: "La situazione di partenza.",
        desc: "Le ore dei cantieri arrivavano in ufficio ogni fine settimana, tra vocali e fogli compilati a mano. Il confronto col preventivo si chiudeva a lavori finiti, quando gli extra lavori non erano più recuperabili col committente.",
      },
      {
        title: "Cosa è cambiato.",
        desc: "Le squadre hanno continuato a mandare vocali e foto come prima. La piattaforma le ha trasformate in ore, mezzi e materiali agganciati alla commessa giusta, il giorno stesso.",
      },
    ],
    resultsTitle: "Il risultato",
    resultsNote: "Numeri da confermare con il cliente.",
    results: [
      { text: "Scostamenti intercettati mentre il cantiere è ancora aperto" },
      { text: "Extra lavori documentati con data e foto, da portare in variante" },
      {
        text: "N ore al mese di ricostruzione manuale liberate al project manager",
        todo: true,
      },
    ],
  },
  systems: {
    label: "I tuoi sistemi",
    headline: "Il gestionale resta dov'è",
    sub: "YUMA Projects si innesta sui sistemi già in uso. Il ciclo amministrativo e finanziario continua a girare nel tuo ERP, con le sue regole e le sue abitudini. La piattaforma aggiunge lo strato che collega l'operatività di cantiere ai numeri della direzione.",
    items: [
      {
        text: "Integrazione. Collegamento al gestionale in uso e ai sistemi che alimentano la commessa. I dati anagrafici, i fornitori e il ciclo attivo e passivo restano la fonte di verità dove sono oggi.",
      },
      {
        text: "Infrastruttura. Cloud AWS in configurazione standard, private cloud dove il contesto lo richiede. Ambienti separati per cliente e backup giornalieri.",
      },
      {
        text: "Titolarità dei dati. Conformità GDPR. Il titolare del trattamento è il cliente, YUMA opera come responsabile. Nessuna condivisione con terze parti e nessun dato usato per addestrare modelli, né da noi né dai fornitori tecnologici.",
        todo: true,
      },
      {
        text: "Livelli di servizio. SLA e tempi di risposta definiti a contratto. Un referente dedicato per l'intero progetto, dall'avvio all'esercizio.",
      },
    ],
  },
  together: {
    label: "Come si lavora insieme",
    headline: "Dalla prima call al cantiere che comunica da solo.",
    steps: [
      {
        n: "01",
        title: "Demo e analisi",
        desc: "Ti mostriamo la piattaforma sui tuoi processi e capiamo insieme da quali commesse conviene partire.",
      },
      {
        n: "02",
        title: "Configurazione",
        desc: "Colleghiamo il gestionale, carichiamo le commesse aperte e impostiamo soglie, approvazioni e destinatari degli alert secondo le tue regole.",
      },
      {
        n: "03",
        title: "Avvio sul campo",
        desc: "Partiamo da un cantiere pilota. Le squadre continuano a mandare vocali e foto, senza app nuove da imparare.",
      },
      {
        n: "04",
        title: "Estensione",
        desc: "Portiamo la piattaforma su tutte le commesse aperte, con un referente dedicato per l'intero percorso.",
      },
    ],
  },
  forWhom: {
    label: "A chi è rivolto",
    headline: "Funziona bene se ti riconosci qui",
    bullets: [
      "Imprese che lavorano a commessa o su cantiere: impianti, costruzioni, manutenzioni, carpenterie",
      "Da 20 addetti in su, con più cantieri aperti contemporaneamente",
      "Un gestionale o un ERP già in uso, che non volete sostituire",
      "Il dato di cantiere che oggi nasce informale, tra vocali, foto e messaggi",
      "Margini di commessa che si scoprono a lavori chiusi",
    ],
    notFor:
      "Quando invece non è lo strumento giusto: produzione ripetitiva di serie, o realtà con una sola commessa alla volta e un controllo di gestione già quotidiano.",
  },
  faq: {
    label: "Domande frequenti",
    headline: "Le domande che ci fanno più spesso",
    items: [
      {
        q: "Dobbiamo cambiare gestionale?",
        a: "No. YUMA Projects si innesta su quello che usate già e lascia il ciclo amministrativo e finanziario dov'è.",
      },
      {
        q: "I capi cantiere devono imparare un'app nuova?",
        a: "No. Continuano a mandare vocali, foto e messaggi come fanno oggi. È la piattaforma a strutturare quello che arriva.",
      },
      {
        q: "In quanto tempo si parte?",
        a: "Tempo di attivazione del cantiere pilota da inserire.",
        todo: true,
      },
      {
        q: "Come vengono gestiti i nostri dati?",
        a: "Il titolare del trattamento resta la tua azienda, YUMA opera come responsabile. Ambienti separati per cliente, nessuna condivisione con terze parti, nessun dato usato per addestrare modelli.",
      },
      {
        q: "Cosa succede se un dato arriva sbagliato o incompleto?",
        a: "La piattaforma lo segnala e lo mette in attesa di conferma, con le approvazioni configurate cliente per cliente.",
      },
      {
        q: "Quanto costa?",
        a: "Il prezzo dipende dal numero di commesse e di utenti. Ne parliamo in demo, con una proposta scritta dopo l'analisi.",
      },
    ],
  },
  objection: {
    title: "Hai già provato a far compilare un'app ai capi cantiere?",
    body: "Succede sempre la stessa cosa: la prima settimana la usano, poi smettono. YUMA Projects non chiede al cantiere di cambiare abitudini: si continua a mandare un vocale, una foto e un messaggio. È la piattaforma che struttura, non la persona.",
  },
  cta: {
    headline: "Vuoi provare YUMA Projects?",
    body: "Compila il modulo qui sotto, ti ricontatteremo entro un giorno lavorativo per fissare una demo del software.",
  },
}

export const clientInterfaceContent: LandingContent = {
  slug: "client-interface",
  product: "YUMA Client Interface",
  title: "YUMA Client Interface · Ordini strutturati da ogni canale",
  metaDescription:
    "YUMA Client Interface legge gli ordini che arrivano da email, WhatsApp, PDF e vocali e li scrive già strutturati nel tuo gestionale.",
  hero: {
    headline:
      "Automatizza il back office, libera il tempo delle tue persone, e tieni sotto controllo i rapporti commerciali con tutti i clienti.",
    sub: "YUMA Client Interface legge gli ordini che arrivano da email, WhatsApp, PDF e vocali, li scrive già strutturati nel tuo gestionale e ti mostra l'andamento di ogni rapporto commerciale, cliente per cliente.",
    cta: "Richiedi una demo",
  },
  credibility: {
    headline: "Costruito su come i clienti ordinano davvero.",
    body: "Email, WhatsApp, PDF, vocali: YUMA Client Interface nasce dentro i back office commerciali che ricevono ordini in ogni formato e li reinseriscono a mano, uno per uno.",
    bullets: [
      {
        text: "Oltre 10 anni di progetti di trasformazione digitale nelle più grandi aziende italiane",
      },
      { text: "N aziende la usano oggi", todo: true },
      { text: "Scrittura diretta nei gestionali già in uso, senza sostituirli" },
    ],
    sectors: "Dove lavoriamo: impianti e costruzioni · manifattura · distribuzione B2B · farmaceutico",
  },
  problem: {
    label: "Il problema",
    headline: "Molti back office commerciali condividono gli stessi problemi",
    items: [
      {
        title: "L'operatività giornaliera consuma tempo prezioso",
        desc: "Ogni ordine va interpretato e inserito a mano. Più canali da coordinare significano più errori di trascrizione e più persone dedicate a un lavoro che non genera un ritorno economico diretto.",
      },
      {
        title: "Avere il polso di tutte le relazioni commerciali è difficile",
        desc: "Gli indicatori sono sparsi tra messaggi, mail e informazioni sul gestionale, aggregarli e analizzarli richiede tempo, e non viene fatto quasi mai.",
      },
      {
        title: "Ogni commerciale ha il monopolio dei suoi clienti",
        desc: "Storico, preferenze, rapporto: tutto vive nella sua testa e nel suo telefono. Se dovesse cambiare lavoro, quel patrimonio uscirebbe dalla porta con lui.",
      },
    ],
  },
  modules: {
    label: "La soluzione",
    headline: "Come YUMA Client Interface risolve questi problemi",
    items: [
      {
        name: "Orchestrazione dei canali",
        status: "attivo",
        statusTodo: true,
        desc: "Tutte le comunicazioni dei clienti, aggregate e analizzate. Email, WhatsApp, portali, PDF e vocali confluiscono in un'unica interfaccia. YUMA interpreta ordini, richieste e reclami e li trasforma in oggetti strutturati, pronti per l'ERP e il CRM.",
      },
      {
        name: "Market Intelligence",
        status: "in rilascio",
        desc: "I segnali dei clienti, letti tutti insieme. Analisi dei pattern di acquisto e del sentiment delle conversazioni. Alert sui clienti silenti, su chi riduce l'ordinato medio, su chi accumula reclami. Report periodici e storici su ordinato, retention e reclami, costruiti su tutte le conversazioni.",
      },
      {
        name: "Assistenza e Next Best Action",
        status: "in sviluppo",
        desc: "Un assistente AI dedicato per i tuoi agenti e per i tuoi clienti. Stato ordini, disponibilità, condizioni e informazioni tecniche di prodotto sempre a portata di domanda. Suggerimenti su riordino, prodotti sostitutivi e cross sell, con un occhio alla marginalità.",
      },
    ],
  },
  roles: {
    label: "Chi la usa",
    headline: "Per chi è pensato YUMA Client Interface",
    items: [
      {
        role: "Direzione commerciale",
        desc: "Osserva l'andamento di tutti i clienti da un'unica vista, con i segnali di abbandono e le opportunità di cross sell già in evidenza, per decidere dove intervenire prima che un cliente rallenti gli ordini o cambi fornitore.",
      },
      {
        role: "Commerciali e agenti",
        desc: "Ricevi gli ordini dei tuoi clienti già strutturati e a sistema, con storico, disponibilità e condizioni sempre a portata di domanda, potendo dedicare il tempo alla relazione e alla vendita invece che alla trascrizione.",
      },
      {
        role: "Back office",
        desc: "Gestisci ordini, richieste e reclami che arrivano già interpretati e pronti nell'ERP, per chiudere in pochi minuti quello che prima richiedeva ore di inserimento manuale.",
      },
    ],
  },
  caseStudy: {
    label: "Caso sul campo",
    headline: "Distribuzione B2B, 60 addetti, ordini su quattro canali",
    note: "Nome del cliente disponibile su richiesta.",
    blocks: [
      {
        title: "La situazione di partenza.",
        desc: "Gli ordini arrivavano via email, WhatsApp, PDF allegati e telefonate. Il back office li reinseriva a mano nel gestionale, con code nelle ore di punta ed errori di trascrizione da correggere a valle.",
      },
      {
        title: "Cosa è cambiato.",
        desc: "I clienti hanno continuato a ordinare come prima, sui canali che già usavano. Gli ordini sono arrivati nell'ERP già strutturati, con le eccezioni messe in attesa di conferma.",
      },
    ],
    resultsTitle: "Il risultato",
    resultsNote: "Numeri da confermare con il cliente.",
    results: [
      { text: "N% degli ordini strutturati senza intervento manuale", todo: true },
      { text: "Errori di trascrizione intercettati prima della conferma" },
      { text: "Tempo del back office spostato dall'inserimento alla gestione delle eccezioni" },
    ],
  },
  systems: {
    label: "I tuoi sistemi",
    headline: "I tuoi sistemi restano al centro. YUMA li fa lavorare.",
    sub: "Client Interface non sostituisce l'ERP e non rimpiazza il CRM. Si posiziona nel mezzo per farli rendere al meglio: interpreta quello che arriva dai clienti in linguaggio naturale e lo scrive nei sistemi che già usi, strutturato e pronto.",
    items: [
      {
        text: "Integrazione. Scrittura diretta in ERP e CRM. Ordini, anagrafiche e transazioni finiscono dove il tuo team li cerca già oggi.",
      },
      {
        text: "Ogni canale, un solo ingresso. Email, WhatsApp, portali, PDF, fogli di calcolo e vocali confluiscono in un punto unico e ne escono come dati strutturati.",
      },
      {
        text: "I tuoi dati restano tuoi. Nessuna condivisione con terze parti. Nessun dato usato per addestrare modelli, né da noi né dai fornitori tecnologici. Conformità GDPR: il titolare del trattamento è il cliente, YUMA opera come responsabile. Infrastruttura cloud europea, ambienti separati per cliente.",
        todo: true,
      },
    ],
  },
  together: {
    label: "Come si lavora insieme",
    headline: "Dalla prima demo agli ordini che entrano da soli.",
    steps: [
      {
        n: "01",
        title: "Demo e analisi",
        desc: "Guardiamo insieme come arrivano oggi gli ordini e su quali canali conviene partire.",
      },
      {
        n: "02",
        title: "Collegamento ai sistemi",
        desc: "Colleghiamo ERP e CRM, mappiamo anagrafiche e listini, definiamo le regole di conferma.",
      },
      {
        n: "03",
        title: "Avvio su un canale",
        desc: "Partiamo dal canale più pesante, con le eccezioni sempre sotto controllo umano.",
      },
      {
        n: "04",
        title: "Estensione",
        desc: "Portiamo dentro gli altri canali e attiviamo i moduli di analisi, con un referente dedicato per l'intero percorso.",
      },
    ],
  },
  forWhom: {
    label: "A chi è rivolto",
    headline: "Funziona bene se ti riconosci qui",
    bullets: [
      "Aziende che ricevono ordini ricorrenti da una rete di clienti abituali: distribuzione B2B, manifattura, ricambi, ingrosso",
      "Ordini che arrivano su più canali e in formati diversi, spesso in linguaggio libero",
      "Un back office che dedica ore al giorno all'inserimento manuale",
      "Un ERP o un CRM già in uso, che non volete sostituire",
    ],
    notFor:
      "Quando invece non è lo strumento giusto: vendita esclusivamente e-commerce con ordini già strutturati all'origine.",
  },
  faq: {
    label: "Domande frequenti",
    headline: "Le domande che ci fanno più spesso",
    items: [
      {
        q: "Dobbiamo chiedere ai clienti di cambiare il modo in cui ordinano?",
        a: "No. Continuano a scrivere su WhatsApp, per email o a voce, come fanno oggi.",
      },
      {
        q: "Chi controlla che l'ordine sia corretto?",
        a: "Le eccezioni e i casi dubbi restano in attesa di conferma umana, con regole definite insieme a voi.",
      },
      {
        q: "Si integra col nostro gestionale?",
        a: "Scriviamo direttamente in ERP e CRM. Elenco dei gestionali già integrati da inserire.",
        todo: true,
      },
      {
        q: "Come vengono gestite le conversazioni dei nostri clienti?",
        a: "Restano di proprietà della tua azienda. Ambienti separati per cliente, nessuna condivisione con terze parti, nessun dato usato per addestrare modelli.",
      },
      {
        q: "In quanto tempo si parte?",
        a: "Tempo di attivazione del primo canale da inserire.",
        todo: true,
      },
      {
        q: "Quanto costa?",
        a: "Il prezzo dipende dal volume di ordini e dai canali attivati. Ne parliamo in demo, con una proposta scritta dopo l'analisi.",
      },
    ],
  },
  objection: {
    title: "Hai già comprato un portale che i clienti non usano?",
    body: "Succede quando si chiede al cliente di cambiare il modo in cui ordina. YUMA fa l'opposto: lascia che il cliente continui a scrivere su WhatsApp, per email o a voce, analizza il contenuto dei messaggi e li trasforma in dati strutturati per la tua azienda.",
  },
  cta: {
    headline: "Vuoi provare YUMA Client Interface?",
    body: "Compila il modulo qui sotto, ti ricontatteremo entro un giorno lavorativo per fissare una demo del software.",
  },
}
