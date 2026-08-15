# Design rules

## Estetica
Tendi a convergere su output generici "on distribution". In frontend questo produce
la cosiddetta "AI slop". Evitala: fai frontend distintivi che sorprendono.

- Tipografia: mai Inter, Roboto, Open Sans, Lato, font di sistema, e mai Space Grotesk
  (e' il tuo secondo default). Scegli font con carattere. Riferimenti per categoria:
  code aesthetic (JetBrains Mono, Fira Code), editorial (Playfair Display, Crimson Pro),
  technical (IBM Plex, Source Sans 3), distintivo (Bricolage Grotesque, Newsreader).
  Accoppia per contrasto: display + monospace, serif + geometric sans.
  Usa gli estremi: pesi 100/200 contro 800/900, mai 400 contro 600.
  Salti di scala 3x o piu, mai 1.5x. Carica da Google Fonts.
- Colore: committi su un'estetica coesa via CSS variables. Colori dominanti con accenti
  taglienti battono palette timide e distribuite uniformemente. Mai gradienti viola su
  bianco. Pesca dai temi IDE e dalle estetiche culturali.
- Motion: concentra il budget sui momenti ad alto impatto. Un page load orchestrato con
  reveal scaglionati (animation-delay) vale piu di micro-interazioni sparse.
  CSS-only quando possibile, Motion per React.
- Background: atmosfera e profondita, mai colori solidi piatti. Stratifica gradienti CSS,
  pattern geometrici, effetti contestuali.
- Varia tra generazioni: temi chiari e scuri, font diversi, estetiche diverse.

## Processo obbligatorio
Prima di scrivere una riga di codice UI, dichiarami in una frase:
1. scopo dell'interfaccia e chi la usa
2. la direzione estetica scelta, presa come ESTREMO
   (brutalist, editorial/magazine, luxury, retro-futurista, art deco, organico,
   industriale, maximalista, playful, minimale radicale)
Poi costruisci coerentemente con quella scelta. Niente compromessi verso il mezzo.

## Componenti
Non scrivere Button, Dialog, Form, Input o simili da zero.
Interroga il registry shadcn via MCP e usa i componenti reali con le prop attuali.
Personalizza via design token, non riscrivendo il componente.

## QA prima di dichiarare finito
1. screenshot con Playwright MCP a 375px, 768px, 1440px
2. esegui /web-interface-guidelines sui file toccati
3. sistema tutti i finding di accessibilita prima di considerare il task chiuso
