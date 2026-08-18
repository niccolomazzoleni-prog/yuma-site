# Libreria prompt per Claude Design · sito YUMA

Cinque prompt autoconsistenti, da incollare uno alla volta in Claude Design.
Ogni prompt contiene gli 8 blocchi obbligatori: stack, file bersaglio, AS IS,
obiettivo di gerarchia, specifiche numeriche, responsive, vincoli negativi,
criterio di accettazione.

**Palette decisa:** scala `ref-*`. `ref-lavender #918DF6` è l'unico colore d'azione.
**Regola trasversale:** `src/components/home/hero-silk.tsx` è READ ONLY in ogni prompt.
**Placeholder:** i `[TESTO IN MAIUSCOLO]` vanno sostituiti prima di eseguire.

Ordine di esecuzione consigliato: 1 → 3 → 4 → 2 → 5.

---

## Prompt 1 · Artefatto-dato nella sezione credibilità

**Quando usarlo:** per primo. È il picco visivo più vicino all'hero e sostiene il KPI "capire in 5 secondi".
**File:** `src/components/home/credibility.tsx`
**Output atteso:** un blocco di tre numeri di prova, sopra la foto del team.

```
CONTESTO TECNICO
Stack: Vite 6 + React 18.3 + TypeScript strict + Tailwind CSS v3.4 (config JS, niente @theme).
Disponibili senza installare nulla: framer-motion 11.18, lucide-react 0.469, cn() da @/lib/utils.
Font unico: Plus Jakarta Sans (400-800), già applicato globalmente su html.
Token registrati in tailwind.config.js, usa SOLO questi nomi, mai valori arbitrari tipo bg-[#fafafa]:
  colori: ref-carbon #181925 (testo primario), ref-graphite #666666 (testo secondario),
          ref-ash #999999 (muted), ref-fog #E8E8E8 (hairline), ref-linen #FAFAFA (banda),
          ref-lavender #918DF6 (UNICO colore d'azione), ref-mintwash #DEF6E4 (superficie positiva)
  raggi: rounded-input 8px, rounded-btn 12px, rounded-card 16px, rounded-pill
  ombre: shadow-subtle, shadow-subtle-2, shadow-subtle-3
  easing: ease-out-soft = cubic-bezier(0.22, 1, 0.36, 1)

FILE BERSAGLIO
src/components/home/credibility.tsx, componente esportato Credibility().
Il componente è avvolto da <SectionRail> che fornisce già il contenitore max-w-[1200px] px-6.

AS IS
Sequenza attuale, tutta a colonna singola allineata a sinistra:
  h2: "La tecnologia più trasformativa di sempre è alla portata della tua azienda."
  p: "Lo sappiamo perché per più di 10 anni abbiamo lavorato a progetti di trasformazione digitale nelle più grandi aziende italiane."
  figure: <img src=team.jpg> in rounded-[8px] border-ref-fog shadow-subtle-3, max-w-[560px]
  p: "Ci siamo scontrati con la complessità di implementare e far utilizzare la tecnologia..."
  p (24px semibold): "Poi, tutto è cambiato.."
  p: "Quando è arrivata l'intelligenza artificiale..."
  p: "Quello che prima richiedeva anni di lavoro..." con ultima frase in <strong>

OBIETTIVO DI GERARCHIA
Rendere verificabile in tre secondi l'esperienza dichiarata nel copy, inserendo tre numeri di prova
tra il primo paragrafo e la foto, così che l'occhio incontri un dato prima di incontrare un'immagine.

SPECIFICHE VISIVE NUMERICHE
Inserisci un blocco a 3 colonne subito dopo il primo paragrafo, con margin-top 48px e margin-bottom 48px.
Ogni colonna contiene, in quest'ordine verticale:
  1. valore: 44px, font-weight 600, letter-spacing -0.02em, line-height 1, colore text-ref-carbon, tabular-nums
  2. etichetta: 14px, font-weight 400, line-height 1.5, colore text-ref-graphite, margin-top 8px
Rapporto di scala tra valore ed etichetta: 3.14x. Non scendere sotto 3x.
Separatore verticale tra le colonne: border-l border-ref-fog con padding-left 32px, assente sulla prima colonna.
Nessun bordo esterno, nessuna ombra, nessun fondo colorato: il blocco vive sul canvas bianco.
Contenuto dei tre numeri:
  [NUMERO 1] / [ETICHETTA 1, es. anni nella trasformazione digitale]
  [NUMERO 2] / [ETICHETTA 2, es. aziende affiancate]
  [NUMERO 3] / [ETICHETTA 3, es. settimane per il primo rilascio]
Animazione: fade da opacity 0 a 1 e translateY da 12px a 0, durata 400ms, easing ease-out-soft,
stagger di 80ms tra le colonne, trigger una sola volta quando il blocco entra al 30% nel viewport.
Rispetta prefers-reduced-motion: con reduce, nessuna animazione e stato finale immediato.

RESPONSIVE
390px: 1 colonna, i tre numeri impilati, separatore verticale sostituito da border-t border-ref-fog con padding-top 24px, gap verticale 24px, valore ridotto a 36px.
768px: 3 colonne affiancate, valore 40px, padding-left tra colonne 24px.
1024px: 3 colonne, valore 44px, padding-left 32px.
1440px: identico a 1024px, il contenitore non supera max-w-[1200px].

VINCOLI NEGATIVI
Non modificare src/components/home/hero-silk.tsx, è READ ONLY.
Non modificare il testo dei paragrafi esistenti né l'ordine dei blocchi già presenti.
Non incapsulare i numeri in card con bordo o ombra: devono restare tipografia nuda su bianco.
Non usare ref-lavender su questi numeri: il colore d'azione resta riservato alle CTA.
Non aggiungere icone accanto ai numeri.
Non introdurre dipendenze nuove.

CRITERIO DI ACCETTAZIONE
PASSA se: il rapporto tra dimensione del valore e dell'etichetta è >= 3x; i tre numeri stanno su
una riga sola a 768px e oltre; a 390px non si genera overflow orizzontale; ogni colore usato
corrisponde a un token ref-*; il contrasto testo/sfondo è >= 4.5:1 su entrambi i livelli di testo.
FALLISCE se: compare anche un solo valore hex scritto a mano, oppure il blocco introduce un bordo.

FORMATO OUTPUT
Restituisci il file credibility.tsx completo e compilabile in TypeScript strict, senza commenti superflui.
```

---

## Prompt 2 · Griglia di card legittima per il processo

**Quando usarlo:** dopo i prompt di ritmo. I 3 step sono paralleli per struttura e lunghezza, quindi la card è ammessa.
**File:** `src/components/home/how-we-work.tsx`
**Output atteso:** tre card in griglia, con numerazione di sequenza.

```
CONTESTO TECNICO
Stack: Vite 6 + React 18.3 + TypeScript strict + Tailwind CSS v3.4.
Disponibili: framer-motion 11.18, lucide-react 0.469, cn() da @/lib/utils.
Token da usare per nome, mai valori arbitrari:
  ref-carbon, ref-graphite, ref-ash, ref-fog, ref-linen, ref-lavender (solo azione), ref-mist
  rounded-card 16px, rounded-pill, shadow-subtle, shadow-subtle-2, ease-out-soft
shadcn/ui è configurato ma senza primitivi generati. Se serve un primitivo Card,
genera prima `npx shadcn@latest add card` e personalizzalo con i token, non riscriverlo a mano.

FILE BERSAGLIO
src/components/home/how-we-work.tsx, componente HowWeWork(), dentro <SectionRail tone="linen">.

AS IS
Titolo h2: "Come lavoriamo".
Sotto, una <ol> di 3 <li> in griglia [48px_1fr], separate da border-t border-ref-fog, ognuna con:
  numero 01/02/03 a 13px in ref-ash
  h3 20px semibold ref-carbon
  p 16px ref-graphite
I tre testi sono: "Definiamo assieme il tuo percorso" (roadmap dagli obiettivi di business),
"Know how tecnico" (scelta e applicazione delle tecnologie), "Implementazione su misura"
(costruzione dentro il modo di lavorare del cliente e formazione del team).

OBIETTIVO DI GERARCHIA
Far leggere il metodo come una sequenza di tre passi conclusi, non come tre paragrafi consecutivi,
mantenendo l'ordine percepibile anche quando le card si impilano su mobile.

SPECIFICHE VISIVE NUMERICHE
Converti la lista in una griglia di 3 card. Ogni card:
  fondo bg-white, bordo border border-ref-fog, raggio rounded-card, ombra shadow-subtle-2
  padding 32px, altezza uniforme tramite items-stretch sul contenitore
Struttura interna, dall'alto:
  indice in pill: 32x32px, rounded-pill, bg-ref-lavender, testo bianco 13px weight 500, tabular-nums
  h3: 20px, weight 600, line-height 1.4, letter-spacing -0.016em, text-ref-carbon, margin-top 20px
  p: 16px, weight 400, line-height 1.6, text-ref-graphite, margin-top 12px, massimo 46 caratteri per riga
Gap tra card: 20px. Margin-top del blocco rispetto al titolo: 48px.
Hover su card, solo da 1024px in su: translateY -2px e shadow da shadow-subtle-2 a shadow-subtle-3,
durata 200ms, easing ease-out-soft. Nessun cambio di colore del bordo.
L'indice in pill è l'unica occorrenza di ref-lavender in questa sezione.

RESPONSIVE
390px: 1 colonna, padding card 24px, gap 16px, h3 a 18px.
768px: 2 colonne, la terza card occupa la prima colonna della seconda riga.
1024px: 3 colonne uguali.
1440px: 3 colonne uguali, contenitore max-w-[1200px], nessun allargamento della card oltre 380px.

VINCOLI NEGATIVI
Non modificare src/components/home/hero-silk.tsx, è READ ONLY.
Non cambiare i testi dei tre step né il loro ordine.
Non aggiungere icone lucide dentro le card: l'indice numerato è già il segno distintivo.
Non usare gradienti, non usare backdrop-blur, non usare shadow-lg o superiori.
Non applicare lo stesso trattamento a card ad altre sezioni con questo prompt.

CRITERIO DI ACCETTAZIONE
PASSA se: le tre card hanno la stessa altezza a 1024px; l'ordine 01-02-03 resta leggibile a 390px;
ref-lavender compare esattamente 3 volte nella sezione, solo nelle pill; nessun hex hardcoded.
FALLISCE se: il testo di una card supera del 20% la lunghezza delle altre, nel qual caso interrompi
e segnala che va riscritto il copy prima di procedere.

FORMATO OUTPUT
File how-we-work.tsx completo, compilabile in TypeScript strict.
```

---

## Prompt 3 · Rottura del ritmo verticale

**Quando usarlo:** subito dopo il prompt 1. Agisce sul contenitore, quindi cambia la percezione di tutte le sezioni in un colpo solo.
**File:** `src/components/home/section-rail.tsx`
**Output atteso:** tre varianti di contenitore, applicabili per sezione.

```
CONTESTO TECNICO
Stack: Vite 6 + React 18.3 + TypeScript strict + Tailwind CSS v3.4.
Token: ref-carbon, ref-graphite, ref-ash, ref-fog, ref-linen, ref-mist, ref-lavender.
Scala di spaziatura ammessa: 4, 8, 12, 16, 24, 32, 48, 64, 96px. Nessun valore fuori scala.

FILE BERSAGLIO
src/components/home/section-rail.tsx, componente SectionRail().

AS IS
Il componente accetta { id, label?, tone: "canvas" | "linen", pad: "md" | "lg" | "xl", children }.
Rende: <section> con tone e scroll-margin-top 96px, dentro un div mx-auto max-w-[1200px] px-6
con padding verticale da pad, dentro ancora un div max-w-[880px] che contiene i children.
Il risultato è che tutte e 9 le sezioni hanno la stessa larghezza di colonna e lo stesso asse:
il ritmo verticale è identico e la pagina si legge piatta.

OBIETTIVO DI GERARCHIA
Introdurre tre ampiezze di contenitore distinte, così che la pagina alterni respiro e densità
e il lettore percepisca dove sono i momenti importanti senza bisogno di decorazione.

SPECIFICHE VISIVE NUMERICHE
Aggiungi la prop width: "narrow" | "default" | "wide" | "bleed", default "default".
  narrow: colonna interna max-w-[680px]. Per le sezioni di sola lettura continuata.
  default: colonna interna max-w-[880px]. Comportamento attuale, invariato.
  wide:   colonna interna max-w-[1200px], px-6. Per griglie e artefatti.
  bleed:  nessun contenitore, il figlio occupa il 100% della viewport width, senza px.
Ridefinisci la scala di padding verticale con tre livelli distanziati di almeno 1.5x:
  md: 64px mobile / 80px da 768px
  lg: 80px mobile / 128px da 768px
  xl: 96px mobile / 160px da 768px
Aggiungi la prop divider: boolean, default false. Quando true, rende un border-t border-ref-fog
a filo del contenitore, prima del padding superiore.
Mantieni tone: "canvas" (bg-white) e "linen" (bg-ref-linen), e aggiungi "mist" (bg-ref-mist)
per un terzo livello di superficie.
Regola di alternanza da applicare nel comporre la pagina: mai due sezioni consecutive con
lo stesso tone E la stessa width.

RESPONSIVE
390px: tutte le width collassano a colonna piena con px-6, tranne bleed che resta a 100%.
768px: narrow 680px, default 720px, wide 100% con px-6.
1024px: narrow 680px, default 880px, wide 1024px.
1440px: narrow 680px, default 880px, wide 1200px.

VINCOLI NEGATIVI
Non modificare src/components/home/hero-silk.tsx, è READ ONLY.
Non toccare i componenti figli: questo prompt cambia solo il contenitore.
Non rimuovere le prop esistenti: la modifica deve essere retrocompatibile, le sezioni che
non passano width devono rendere esattamente come adesso.
Non introdurre max-width fuori dai quattro valori dichiarati.

CRITERIO DI ACCETTAZIONE
PASSA se: le 9 sezioni esistenti compilano senza modifiche e rendono identiche a prima;
i tre livelli di padding sono distanziati di almeno 1.5x; bleed non produce overflow orizzontale a 390px.
FALLISCE se: una sezione esistente cambia aspetto senza aver ricevuto la nuova prop.

FORMATO OUTPUT
File section-rail.tsx completo, più una tabella di due colonne che assegna width e tone
a ciascuna delle 9 sezioni rispettando la regola di alternanza.
```

---

## Prompt 4 · Blocco firma full bleed sull'assessment

**Quando usarlo:** è il secondo picco visivo della pagina e sta sulla CTA di lead più forte. Richiede il prompt 3 già applicato.
**File:** `src/components/home/assessment.tsx`
**Output atteso:** anteprima del deliverable, a tutta larghezza, su fondo scuro.

```
CONTESTO TECNICO
Stack: Vite 6 + React 18.3 + TypeScript strict + Tailwind CSS v3.4.
Disponibili: framer-motion 11.18, lucide-react 0.469.
Token: ref-carbon #181925, ref-graphite, ref-ash, ref-fog, ref-linen, ref-mist,
ref-lavender #918DF6 (unico colore d'azione), ref-mintwash #DEF6E4.
Il contenitore SectionRail supporta width="bleed" e tone.

FILE BERSAGLIO
src/components/home/assessment.tsx, componente Assessment().

AS IS
Sopra la sezione c'è già una banda decorativa full bleed alta 200/280px con background-image
texture-01.jpg. Poi, dentro SectionRail tone="canvas" pad="xl":
  h2: "Tutti i nostri progetti iniziano con un assessment AI: un modo semplice per conoscersi e pensare in grande assieme."
  p: "Veniamo nella tua azienda, mappiamo i processi insieme alle persone che li vivono ogni giorno..."
  p: "Alla fine del percorso ti consegniamo un documento con i casi d'uso individuati, ordinati per impatto e ritorno economico..."
  callout su bg-ref-mintwash: "Il risultato è tuo, anche se decidi di fermarti lì."
  CTA pill bg-ref-lavender: "Richiedi il tuo assessment"

OBIETTIVO DI GERARCHIA
Rendere visibile il deliverable descritto a parole, così che il lettore veda cosa riceve
prima di decidere se chiederlo, e far coincidere il picco visivo con il momento di conversione.

SPECIFICHE VISIVE NUMERICHE
Sostituisci la banda con texture-01.jpg con un blocco full bleed costruito in DOM.
Il blocco:
  fondo bg-ref-carbon, padding verticale 96px, contenuto centrato in max-w-[1200px] px-6
  contiene, affiancati da 1024px in su in griglia 5/7:
  colonna sinistra (5): eyebrow 12px uppercase letter-spacing 0.08em in ref-ash,
    h2 36px weight 600 letter-spacing -0.017em in bianco, paragrafo 16px line-height 1.6 in ref-fog
  colonna destra (7): anteprima del documento di assessment, costruita come tabella di 4 righe:
    intestazione con 3 colonne: "Caso d'uso" | "Impatto" | "Effort"
    4 righe di esempio con [CASO USO 1..4], impatto reso come barra orizzontale
    larga 100/75/50/25% in bg-ref-lavender alta 6px rounded-pill, effort come testo 13px in ref-ash
    contenitore della tabella: bg-white, rounded-card, padding 24px, shadow-subtle-3
    gridlines: border-b border-ref-fog su ogni riga tranne l'ultima, altezza riga 48px
Sotto il blocco full bleed, la sezione prosegue su bg-white con callout e CTA invariati.
Animazione: le 4 barre di impatto crescono da scaleX 0 a 1 con transform-origin left,
durata 600ms, easing ease-out-soft, stagger 100ms, trigger una volta al 30% di visibilità.
Con prefers-reduced-motion reduce, rendi le barre già al 100% senza animazione.

RESPONSIVE
390px: colonna singola, la tabella sotto il testo, padding verticale 64px, h2 a 28px,
  colonna "Effort" nascosta, restano Caso d'uso e barra di impatto.
768px: colonna singola, tabella a larghezza piena, tutte e 3 le colonne visibili.
1024px: griglia 5/7 affiancata, gap 48px.
1440px: griglia 5/7, gap 64px, contenitore max-w-[1200px].

VINCOLI NEGATIVI
Non modificare src/components/home/hero-silk.tsx, è READ ONLY.
Non usare immagini: la tabella va costruita in DOM. Rimuovi il riferimento a texture-01.jpg.
Non usare dati inventati che sembrino risultati reali di clienti: i 4 casi d'uso sono
esempi generici di metodo, non risultati misurati.
Non aggiungere una seconda CTA: ne resta una sola in questa sezione.
Non usare ref-lavender per il testo, solo per le barre e per la CTA.

CRITERIO DI ACCETTAZIONE
PASSA se: il blocco tocca entrambi i bordi della viewport a ogni breakpoint senza overflow orizzontale;
il contrasto del testo bianco su ref-carbon è >= 4.5:1; a 390px la tabella resta leggibile con 2 colonne;
esiste una sola CTA nella sezione.
FALLISCE se: compaiono numeri presentati come risultati di clienti reali.

FORMATO OUTPUT
File assessment.tsx completo, compilabile in TypeScript strict.
```

---

## Prompt 5 · Comparativa "oggi vs con YUMA" nelle soluzioni

**Quando usarlo:** quando i due prodotti hanno bisogno di essere distinti, non descritti in parallelo.
**File:** `src/components/home/solutions.tsx`
**Output atteso:** due blocchi alternati con tabella di confronto, non due card gemelle.

```
CONTESTO TECNICO
Stack: Vite 6 + React 18.3 + TypeScript strict + Tailwind CSS v3.4.
Token: ref-carbon, ref-graphite, ref-ash, ref-fog, ref-linen, ref-mist, ref-lavender, ref-mintwash.
rounded-card 16px, shadow-subtle-2, ease-out-soft.

FILE BERSAGLIO
src/components/home/solutions.tsx, componente Solutions().

AS IS
h2: "Dai nostri progetti di consulenza sono nati due prodotti digitali."
Due card affiancate identiche (rounded-[24px], border-ref-fog, bg-white, padding 32px), ognuna con
h3, paragrafo e link "Scopri di più".
  Yuma Projects: controllo di margini, costi e avanzamento per aziende a commessa; raccoglie dati
    dal campo con messaggi, foto e note vocali.
  Yuma Client Interface: gestisce ordini, richieste e reclami dai clienti, li struttura nei sistemi
    aziendali, elimina il data entry manuale.

OBIETTIVO DI GERARCHIA
Far capire in pochi secondi a chi serve ciascun prodotto e cosa cambia concretamente rispetto
a come si lavora oggi, invece di presentarli come due descrizioni simmetriche intercambiabili.

SPECIFICHE VISIVE NUMERICHE
Sostituisci le due card gemelle con due blocchi alternati a piena larghezza del contenitore.
Ogni blocco è una griglia 6/6 con gap 48px, separati tra loro da margin-top 96px.
Blocco 1 (Yuma Projects): testo a sinistra, artefatto a destra.
Blocco 2 (Yuma Client Interface): artefatto a sinistra, testo a destra. L'inversione è obbligatoria.
Lato testo:
  eyebrow 12px uppercase letter-spacing 0.08em ref-ash con il destinatario, es. "Aziende a commessa"
  h3 28px weight 600 letter-spacing -0.017em ref-carbon, margin-top 12px
  p 16px line-height 1.6 ref-graphite, margin-top 16px, massimo 62 caratteri per riga
  link "Scopri di più" 14px weight 500 ref-carbon con freccia lucide ArrowRight 16px, margin-top 24px
Lato artefatto: tabella comparativa a 2 colonne, costruita in DOM.
  intestazione: "Oggi" in ref-ash | "Con YUMA" in ref-carbon weight 600
  3 righe di confronto, altezza 56px, border-b border-ref-fog tranne l'ultima
  colonna sinistra: testo 14px ref-ash
  colonna destra: testo 14px ref-carbon, preceduto da un punto 6x6px rounded-pill bg-ref-lavender
  contenitore: bg-white, border border-ref-fog, rounded-card, padding 24px
  contenuti: [CONFRONTO 1 OGGI] / [CONFRONTO 1 CON YUMA], e così per 2 e 3
Nessuna ombra sui blocchi: la separazione è data dallo spazio di 96px, non dall'elevazione.

RESPONSIVE
390px: colonna singola, il testo sempre prima dell'artefatto in entrambi i blocchi,
  gap verticale 32px, h3 a 24px, righe della tabella a 48px.
768px: colonna singola, tabella a larghezza piena.
1024px: griglia 6/6 con alternanza attiva, gap 48px.
1440px: griglia 6/6, gap 64px, contenitore max-w-[1200px].

VINCOLI NEGATIVI
Non modificare src/components/home/hero-silk.tsx, è READ ONLY.
Non trasformare i due prodotti in una griglia di card: sono due offerte distinte con destinatari
diversi, la simmetria le rende intercambiabili e questo è l'errore da correggere.
Non inventare metriche numeriche nei confronti: usa descrizioni di attività, non percentuali.
Non usare ref-lavender oltre ai punti elenco della colonna "Con YUMA".

CRITERIO DI ACCETTAZIONE
PASSA se: a 1024px il secondo blocco è specularmente invertito rispetto al primo;
a 390px il testo precede sempre l'artefatto; nessun blocco ha ombra; nessun hex hardcoded;
contrasto >= 4.5:1 su tutti i livelli di testo.
FALLISCE se: i due blocchi risultano visivamente identici a parte il testo.

FORMATO OUTPUT
File solutions.tsx completo, compilabile in TypeScript strict.
```

---

## Protocollo di iterazione

| Difetto dell'output | Prompt di correzione da inviare | Cosa NON fare |
|---|---|---|
| Ha usato hex arbitrari | "Sostituisci ogni valore colore hardcoded con il token ref-* equivalente registrato in tailwind.config.js. Elenca in coda le sostituzioni fatte, nel formato hex → token." | Non riscrivere il componente da zero |
| Le card hanno altezze diverse | "Applica items-stretch al contenitore della griglia e h-full alla card. Non modificare padding né testi." | Non accorciare il copy per pareggiare |
| Overflow orizzontale a 390px | "Cattura con Playwright MCP lo screenshot a 390x844 e leggi document.documentElement.scrollWidth. Se supera 390, individua l'elemento che sfora con un confronto dei bounding box e correggi solo quello." | Non aggiungere overflow-x-hidden sul body: nasconde il sintomo |
| Il blocco full bleed non tocca i bordi | "Il blocco deve essere figlio diretto di SectionRail con width='bleed', senza px. Rimuovi ogni contenitore intermedio con max-width." | Non usare margini negativi |
| Troppo lavanda | "ref-lavender deve comparire al massimo una volta per ruolo per vista. Elenca ogni occorrenza attuale con il suo ruolo, poi rimuovi tutte quelle che non sono azione o indice di sequenza." | Non sostituirlo con un altro colore: rimuovilo |
| Animazione ignora reduced motion | "Avvolgi ogni transizione in motion-safe: e verifica con prefers-reduced-motion: reduce che lo stato finale sia già applicato al primo render." | Non rimuovere l'animazione per tutti |

## Verifica finale con Playwright MCP

Da eseguire dopo ogni prompt applicato:

1. Screenshot a 1440x900 e a 390x844 della sezione modificata.
2. Leggi `document.documentElement.scrollWidth` a 390px: deve essere esattamente 390.
3. Naviga da tastiera con Tab: ogni elemento interattivo deve mostrare un focus ring visibile.
4. Verifica il contrasto dei due livelli di testo con getComputedStyle: minimo 4.5:1.
5. Conta le occorrenze di `#` nei className del file: devono essere zero.

## Criteri di accettazione trasversali

- [ ] Nessun valore hex hardcoded nei componenti toccati
- [ ] `hero-silk.tsx` invariato, verificabile con `git diff --stat`
- [ ] A 390px `scrollWidth` uguale a 390, in tutte le sezioni
- [ ] A 390px ogni griglia collassa a colonna singola senza testo tagliato
- [ ] Contrasto >= 4.5:1 su testo primario e secondario in ogni sezione
- [ ] `ref-lavender` compare solo su azioni e indici di sequenza
- [ ] Focus ring visibile su tutti gli elementi interattivi
- [ ] `npx tsc --noEmit` senza errori
- [ ] `npx vite build` completa senza warning nuovi
