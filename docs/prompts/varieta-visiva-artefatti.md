# Prompt · Varietà visiva e artefatti (Claude Design)

> Prompt operativo per progettare gli artefatti visivi delle sezioni YUMA.
> Non ancora eseguito. Contiene variabili da compilare (vedi `<context_and_assumptions>`).
> Salvato il 18 agosto 2026.

---

<role>
Sei un Senior Product Designer specializzato in siti vetrina B2B lead-gen e in design system tokenizzati, con esperienza diretta di generazione UI assistita da LLM (Claude Design, Claude Code) su stack Vite + React + Tailwind.
Il tuo lavoro è giudicato su 3 KPI, non sull'estetica:
1. Conversion rate sulla CTA di lead (form contatto + assessment), e scroll depth fino a quella sezione.
2. Comprensione in 5 secondi: chi arriva deve capire cosa fa YUMA, per chi, e perché fidarsi, entro il secondo scroll.
3. Consistenza sistemica: percentuale di elementi UI che usano i token già registrati in tailwind.config.js invece di valori arbitrari.
Non sei un decoratore. Ogni scelta visiva va giustificata con la gerarchia informativa o con uno di questi 3 KPI. Se una proposta è bella ma non sposta nessuno dei tre, la scarti tu stesso prima di proporla.
</role>

<context_and_assumptions>
FATTI VERIFICATI

Progetto: YUMA, sito vetrina + lead generation. Repo `niccolomazzoleni-prog/yuma-site` (privato).
Stack: Vite 6 + React 18.3 + TypeScript strict + Tailwind CSS v3.4 (config JS classica, niente @theme).
Librerie già disponibili: framer-motion 11.18, lucide-react 0.469, clsx + tailwind-merge via `cn()`, class-variance-authority, tailwindcss-animate.
shadcn/ui: configurato (components.json valido, alias attivi, `npx shadcn@latest add` funzionante) ma con ZERO primitivi generati. Button, Card, Accordion, Input sono attualmente scritti a mano dentro le sezioni. MCP `shadcn` e `playwright` collegati al progetto.
Design system: token reali e agganciati al build. `yuma-tokens.json`, `design/tokens.css`, `design/tailwind.tokens.js`, registrati in `tailwind.config.js`.
Due palette coesistono nel progetto:
  a) brand YUMA: `viola-50…900` (base `viola-500 #6C0FF2`), `fucsia-400/500/600` (#FF4D9D, accento raro), `teal-*`, `neutral-0…900`, superfici semantiche `surface-page/warm/alt/sunken/ink`.
  b) reference "Visitors", oggi effettivamente in uso nelle sezioni: `ref-carbon #181925`, `ref-graphite #666666`, `ref-ash #999999`, `ref-fog #E8E8E8`, `ref-linen #FAFAFA`, `ref-mist #F5F5F5`, `ref-lavender #918DF6` (unico colore d'azione), più `ref-iris`, `ref-mint`, `ref-mintwash`, `ref-sky`.
Raggi: `rounded-input` 8, `rounded-btn` 12, `rounded-card` 16, `rounded-pill`. Ombre: `shadow-card`, `shadow-panel`, `shadow-glow`, `shadow-subtle`, `shadow-subtle-2`, `shadow-subtle-3`. Tipografia: `text-display`, `text-h2`, `text-h3`, `text-body`, `text-label`, `text-caption`. Motion: `ease-out-soft` cubic-bezier(0.22, 1, 0.36, 1).
Font unico: Plus Jakarta Sans, pesi 400 a 800.
Struttura pagina (`src/components/home/`): `hero-silk.tsx` (shader WebGL, SIGILLATO, non modificabile), `section-rail.tsx` (contenitore di sezione), poi in ordine `credibility`, `possibilities` (accordion), `solutions`, `how-we-work`, `team`, `clients`, `assessment`, `contact` (form), `footer`.
Asset visivi disponibili: nessuno. Esistono solo `public/team.jpg` e `public/texture-01.jpg`. Loghi cliente in attesa di consenso, screenshot prodotto assenti, foto founder placeholder, titoli accordion placeholder ("Titolo uno-quattro").
Libertà di intervento: ALTA. Refactor di layout consentito ovunque tranne l'hero.
Riferimento indicato dall'utente: https://visitors.now, attributo richiesto "varietà visiva".

CONTESTO INFERITO (deduzioni operative, dichiarate come tali)

1. La varietà di visitors.now NON viene da card né da colore. Quel sito è quasi monocromatico (grigi + un solo lavanda d'azione) e ottiene varietà da una successione di ARTEFATTI DI PRODOTTO diversi tra loro: uno screenshot dashboard con tab switcher, una lista di canali con numeri allineati, un feed di visitatori con nomi e ricavi, un contatore live, un gauge di punteggio, una tabella comparativa competitor, uno slider di pricing con prezzo che cambia. Ogni sezione ha una forma visiva propria perché mostra un pezzo di software diverso.
2. Il progetto ha già copiato la parte a bassa varietà della reference (la palette neutra) senza poter copiare la parte ad alta varietà (gli artefatti), perché non esiste un prodotto software da mostrare e non esiste nessun asset. Questa è la causa strutturale della monotonia percepita, non l'assenza di bordi attorno ai blocchi.
3. YUMA è verosimilmente una società di consulenza o servizi (sezioni: credibilità, soluzioni, come lavoriamo, team, clienti, assessment). L'equivalente funzionale degli artefatti di prodotto, per un sito di servizi, sono ARTEFATTI DI DATO E DI METODO: numeri di risultato, matrici di posizionamento, timeline di processo, checklist di deliverable, tabelle comparative "voi oggi vs voi con YUMA", anteprime del deliverable dell'assessment. Sono costruibili interamente in DOM con i token esistenti, senza una sola immagine.
4. L'hero è uno shader WebGL sigillato: il picco visivo della pagina è già al pixel zero. Le sezioni 2 a 10 vivono quindi in un avvallamento, e la percezione di "piattume" è amplificata dal contrasto con l'hero. Servono 2 picchi intermedi, non 8 sezioni tutte un po' più decorate.
5. `section-rail.tsx` come contenitore unico è il sospetto numero uno del ritmo verticale identico: probabile stessa max-width, stesso padding verticale, stessa struttura di intestazione su tutte e 9 le sezioni.
6. Traffico prevalentemente mobile: ogni griglia collassa a colonna singola, quindi la varietà deve reggere prima a 390px in una colonna, poi a 1440px.
7. Il sito è una SPA client-side senza pre-render. Non è oggetto di questo lavoro, ma ogni proposta che aggiunga peso o dipendenze va valutata anche su questo vincolo.

VARIABILI MANCANTI (da compilare prima o durante l'esecuzione)

- [SCREENSHOT AS IS NON FORNITI: mancano le catture full page a 1440px e a 390px, e il repo è privato. Ogni diagnosi sul ritmo verticale e sul contrasto tonale va marcata come ipotesi e accompagnata da una verifica eseguibile in un minuto]
- [INSERIRE COSA VENDE ESATTAMENTE YUMA: consulenza, prodotto, servizio ricorrente. Determina quale sezione diventa il blocco firma]
- [INSERIRE 3 NUMERI VERI E PUBBLICABILI: es. clienti serviti, tempo medio di delivery, risultato medio ottenuto. Senza numeri veri gli artefatti-dato restano scheletri]
- [INSERIRE I 4 TITOLI REALI DELL'ACCORDION in possibilities.tsx, oggi placeholder]
- [INSERIRE COSA CONSEGNA CONCRETAMENTE L'ASSESSMENT: formato, durata, output. È la CTA di lead più forte della pagina]
- [CONFERMARE LA DECISIONE DI PALETTE: brand viola/fucsia oppure reference ref-*. Oggi convivono e questo è un debito da chiudere]
</context_and_assumptions>

<task>
RICHIESTA DI SUPERFICIE: scrivere prompt per Claude Design che trasformino alcune sezioni del sito YUMA in card visive, replicando la varietà di visitors.now.

PROBLEMA RADICE DA RISOLVERE: il sito non manca di card, manca di artefatti. La varietà del riferimento è generata da oggetti visivi eterogenei che mostrano contenuto reale; incapsulare i blocchi YUMA dentro contenitori con bordo e ombra produce "card soup", cioè la stessa monotonia con più rumore. L'obiettivo reale è progettare, per ogni sezione, l'artefatto minimo che rende visibile la sostanza già presente nel copy, e orchestrare la pagina come alternanza di pochi picchi e molta calma, tenendo conto che l'hero occupa già un picco.
Vincolo aggiuntivo non negoziabile: zero immagini disponibili. Ogni artefatto proposto deve essere costruibile in DOM con Tailwind, i token esistenti, lucide-react e framer-motion. I placeholder immagine sono ammessi solo dove l'asset reale è certo e già pianificato (foto founder, loghi cliente), mai come riempitivo estetico.

DELIVERABLE, in questo ordine:
1. Decomposizione del riferimento: quali dispositivi visivi generano davvero la varietà di visitors.now, e quali di essi sono trasferibili a un sito di servizi senza asset.
2. Diagnosi AS IS di YUMA, con livello di certezza dichiarato dato che gli screenshot non sono disponibili.
3. Decisione strategica con confronto di 3 approcci e trade off mappati.
4. Mappa sezione per sezione AS IS verso TO BE, per tutte e 9 le sezioni non sigillate, con la dichiarazione esplicita di quali NON devono diventare card.
5. Metodologia: l'anatomia di un prompt efficace per Claude Design su questo stack.
6. Libreria di prompt pronti da incollare, da 4 a 6, già compilati sul caso YUMA reale.
7. Protocollo di iterazione per correggere un output insoddisfacente senza ripartire da zero.
8. Criteri di accettazione binari.
</task>

<execution_rules>
1. Numeri obbligatori. Ogni indicazione visiva deve portare valori: scala tipografica in px con rapporto dichiarato, step di spaziatura dalla scala 4/8/12/16/24/32/48/64/96, max-width dei contenitori, numero di colonne per breakpoint (390, 768, 1024, 1440), contrasto minimo 4.5:1 sul testo, durata e curva delle animazioni. Vietate le indicazioni puramente qualitative del tipo "più arioso", "più moderno", "più dinamico".
2. Usa i token esistenti per nome. Scrivi `bg-ref-linen`, `text-ref-carbon`, `rounded-card`, `shadow-subtle-2`, `ease-out-soft`. Non inventare classi arbitrarie tipo `bg-[#f7f7f7]`. Se serve un token nuovo, dichiaralo esplicitamente come aggiunta a `design/tailwind.tokens.js` e motivalo.
3. Vietate le formule di rinuncia. Niente "dipende", niente "potresti valutare". Se una condizione cambia la risposta, dichiara la condizione e dai comunque la raccomandazione di default.
4. Forma attiva e imperativa. Ogni riga della libreria di prompt deve essere eseguibile da un LLM senza interpretazione.
5. Confronto obbligatorio di 3 approcci, con trade off mappati su impatto visivo, rischio di regressione, tempo di esecuzione, effetto sui 3 KPI:
   - Opzione A, card sistematiche: convertire in griglie di card i blocchi enumerabili (solutions, how-we-work, team, clients) lasciando invariato il resto.
   - Opzione B, ritmo prima di tutto: non aggiungere card, rompere `section-rail` in 3 varianti di contenitore (largo/stretto/full bleed) e alternare superfici `ref-linen` e bianco, allineamenti e densità.
   - Opzione C, alternativa controintuitiva: ridurre il numero di sezioni da 9 a 6, fondere credibility + clients e solutions + possibilities, e investire tutto il budget visivo in 2 artefatti firma ad alto impatto (per esempio una matrice interattiva nell'assessment e una timeline di processo full bleed in how-we-work), lasciando le altre sezioni volutamente spoglie. La varietà si percepisce per contrasto tra pochi picchi e molta calma, non distribuendo decorazione su tutto.
   Chiudi con una sola raccomandazione motivata in massimo 3 righe.
6. Evita esplicitamente questi due errori, e dichiara nell'output come li hai evitati:
   - ERRORE 1, card soup: incapsulare in card contenuti non paralleli o non enumerabili. Una griglia di card è ammessa solo con 3 a 6 elementi di struttura identica, lunghezza del testo entro il 20 per cento di scarto e stesso tipo di elemento visivo. Se il contenuto non è parallelo, rifiuta la card e prescrivi la riscrittura del copy prima del design.
   - ERRORE 2, copia dell'attributo sbagliato dal riferimento: replicare la palette neutra e le proporzioni di visitors.now credendo di replicarne la varietà, quando la varietà lì è generata da screenshot di prodotto che YUMA non possiede. Ogni proposta ispirata al riferimento deve dichiarare quale dispositivo sta trasferendo e con quale sostituto locale, dato il vincolo zero asset.
7. Ogni prompt della libreria deve contenere, nell'ordine, questi 8 blocchi obbligatori: (a) stack e vincoli tecnici, (b) file e componente bersaglio con percorso esatto, (c) input AS IS da incollare, (d) obiettivo di gerarchia in una frase, (e) specifiche visive numeriche con token nominati, (f) comportamento responsive ai 4 breakpoint, (g) vincoli negativi espliciti su cosa non toccare, (h) criterio di accettazione binario e formato di output atteso.
8. Tratta `hero-silk.tsx` come read only in ogni prompt. Inseriscilo nei vincoli negativi di tutti i prompt della libreria.
9. Prescrivi, dove serve un primitivo, la generazione shadcn (`npx shadcn@latest add <componente>`) invece della riscrittura a mano, dato che shadcn è configurato ma inutilizzato e questo è un debito tecnico già presente.
10. Sfrutta l'MCP playwright collegato: almeno un passaggio del protocollo di iterazione deve usarlo per catturare lo stato AS IS a 1440 e 390 px e per verificare il TO BE, invece di affidarsi a giudizi a occhio.
11. Se una diagnosi dipende dagli screenshot mancanti, marcala e affianca la verifica di un minuto che l'utente può eseguire per confermarla o smentirla.
</execution_rules>

<output_format>
Rispondi in italiano, in Markdown, con questa struttura rigida. Vietati introduzioni, conclusioni motivazionali, disclaimer e ripetizione della richiesta.

**1. EXECUTIVE SUMMARY**, massimo 5 righe: diagnosi e decisione, senza preamboli.

**2. DECOMPOSIZIONE DEL RIFERIMENTO**: tabella con colonne: Dispositivo visivo su visitors.now | Cosa genera la varietà | Trasferibile a YUMA senza asset? (Sì / No / Sì con sostituto) | Sostituto locale proposto.

**3. DIAGNOSI AS IS**: tabella con colonne: Sintomo ipotizzato | Causa probabile | Certezza (Certo / Probabile / Da verificare) | Verifica in 1 minuto.

**4. DECISION MATRIX**: tabella con colonne: Opzione | Impatto visivo (1-5) | Rischio regressione (1-5) | Tempo stimato | Effetto sui 3 KPI | Quando sceglierla. Sotto, una sola raccomandazione in grassetto, massimo 3 righe.

**5. MAPPA AS IS → TO BE**: tabella con una riga per ciascuna delle 9 sezioni (credibility, possibilities, solutions, how-we-work, team, clients, assessment, contact, footer). Colonne: Sezione | Trattamento AS IS ipotizzato | Artefatto TO BE | Diventa card? (Sì / No + motivo) | Leva di variazione (densità / allineamento / contrasto / scala / larghezza) | Priorità (P0 / P1 / P2).

**6. ANATOMIA DEL PROMPT PER CLAUDE DESIGN**: elenco numerato degli 8 blocchi obbligatori, una riga di spiegazione ciascuno, e per almeno 3 blocchi un confronto affiancato "prompt debole" contro "prompt forte" con testo reale.

**7. LIBRERIA PROMPT**: da 4 a 6 prompt, ognuno in un blocco di codice separato, ognuno preceduto da tre righe che dichiarano quando usarlo, su quale file, e output atteso. Placeholder residui in MAIUSCOLO tra parentesi quadre. Copre almeno: un artefatto-dato, una griglia di card legittima, una rottura di ritmo su section-rail, un blocco firma full bleed.

**8. PROTOCOLLO DI ITERAZIONE**: tabella con colonne: Difetto dell'output | Prompt di correzione (testo esatto da inviare) | Cosa NON fare. Almeno una riga deve usare l'MCP playwright per la verifica.

**9. CRITERI DI ACCETTAZIONE**: checklist con caselle, ogni voce verificabile in modo binario, di cui almeno 2 test a 390px in colonna singola e almeno 1 sul contrasto AA.

**10. NOTO vs IGNOTO**: due elenchi separati. In IGNOTO metti ogni assunzione che, se sbagliata, cambierebbe la raccomandazione, con accanto cosa serve per risolverla.
</output_format>
