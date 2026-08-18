# YUMA · Stack tecnico e design system

Stato verificato al 18 agosto 2026. Repo: `niccolomazzoleni-prog/yuma-site` (privato).

---

## 1. Stack

**Vite + React + TypeScript.** Non è Next.js, non è HTML statico.

| Area | Tecnologia | Versione |
|---|---|---|
| Build tool | Vite | 6.0.7 |
| UI | React | 18.3.1 |
| Linguaggio | TypeScript (strict) | 5.7.2 |
| CSS | Tailwind CSS | 3.4.17 |
| PostCSS | postcss + autoprefixer | 8.4 / 10.4 |

### Librerie già installate (usabili senza aggiungere nulla)
- `framer-motion` 11.18.2 — animazioni React
- `lucide-react` 0.469.0 — icone
- `clsx` + `tailwind-merge` — composizione classi (via `cn()`)
- `class-variance-authority` — varianti componenti
- `tailwindcss-animate` — plugin animazioni Tailwind

### Comandi
```bash
npm run dev      # dev server Vite → http://localhost:5199
npm run build    # tsc --noEmit && vite build
npm run preview  # anteprima della build
```

### Note importanti
- Tailwind è **v3** con `tailwind.config.js` classico. Non v4: niente `@theme` nel CSS, i token si registrano nella config JS.
- Il dev server gira sulla porta **5199** (definita in `.claude/launch.json`).

---

## 2. shadcn/ui

**Configurato ma senza componenti generati.**

- `components.json` presente e valido:
  - style: `default`, rsc: `false`, tsx: `true`
  - baseColor: `neutral`, cssVariables: `true`
  - alias: `@/components`, `@/components/ui`, `@/lib/utils`, `@/lib`, `@/hooks`
- `src/lib/utils.ts` con l'helper `cn()` presente.
- `npx shadcn@latest add <componente>` funziona già.

**Nessun primitivo shadcn è stato generato.** I file in `src/components/ui/` sono componenti scritti a mano per questo progetto:

| File | Cosa è |
|---|---|
| `silk-shader.tsx` | shader WebGL dell'hero (21st.dev, zero dipendenze) |
| `reveal.tsx` | wrapper reveal allo scroll con IntersectionObserver |
| `credibilita-variant-a.tsx` / `-b.tsx` | varianti di sezione, non più in uso |
| `prisma-hero.tsx` | hero del template originale, non più in uso |

Button, Input, Accordion, Card ecc. sono attualmente **scritti a mano** dentro le sezioni.

### MCP collegati al progetto
```
shadcn      npx shadcn@latest mcp        ✔ connected
playwright  npx -y @playwright/mcp@latest ✔ connected
```
Scope locale al progetto (in `~/.claude.json`): attivi nelle sessioni `claude` avviate dentro la cartella del progetto.

Skill installate in `.agents/skills/`: `shadcn`, `migrate-radix-to-base`.

---

## 3. Design system e token

**Esistono e sono agganciati al build.**

| File | Ruolo | Collegato |
|---|---|---|
| `yuma-tokens.json` | sorgente canonica dei token brand | riferimento |
| `design/tokens.css` | CSS custom properties | importato in `src/index.css` |
| `design/tailwind.tokens.js` | scale in JS | importato in `tailwind.config.js` |
| `tailwind.config.js` | registrazione token in Tailwind | attivo |
| `docs/design-system.md` | documentazione del sistema | documentazione |
| `yuma-brand.md` | brand guide YUMA completa | fonte di verità brand |

### Scale colore disponibili come classi Tailwind

**Brand YUMA** (da `yuma-brand.md`):
- `viola-50…900` — primario, base `viola-500 #6C0FF2`
- `fucsia-400/500/600` — accento raro, `#FF4D9D`
- `teal-50/500/600` — stati positivi
- `neutral-0…900` — superfici e testo, testo forte `neutral-900 #170B2E`
- `surface-page/warm/alt/sunken/ink` — superfici semantiche

**Reference "Visitors"** (palette attualmente in uso nelle sezioni):
- `ref-carbon` `#181925` — testo primario
- `ref-graphite` `#666666` — testo secondario
- `ref-ash` `#999999` — testo muted
- `ref-fog` `#E8E8E8` — hairline e bordi
- `ref-linen` `#FAFAFA` — bande di sezione alternate
- `ref-mist` `#F5F5F5` — superfici tenui
- `ref-lavender` `#918DF6` — **unico colore d'azione**
- `ref-iris` `#9580FF`, `ref-mint` `#33C758`, `ref-mintwash` `#DEF6E4`, `ref-sky` `#2C78FC`

### Altri token registrati
- **Raggi**: `rounded-input` 8px · `rounded-btn` 12px · `rounded-card` 16px · `rounded-pill` 9999px
- **Ombre**: `shadow-card`, `shadow-panel`, `shadow-glow` (brand) + `shadow-subtle`, `shadow-subtle-2`, `shadow-subtle-3` (reference)
- **Tipografia**: `text-display`, `text-h2`, `text-h3`, `text-body`, `text-label`, `text-caption`
- **Motion**: `ease-out-soft` = `cubic-bezier(0.22, 1, 0.36, 1)`
- **Gradienti**: `bg-gradient-primary`, `bg-gradient-brand`, `bg-gradient-dark`

### Font
**Plus Jakarta Sans** (Google Fonts), unico carattere del sito, applicato globalmente su `html` in `src/index.css`. Pesi 400/500/600/700/800.

---

## 4. Struttura del progetto

```
prisma-hero/
├── CLAUDE.md                  regole di design (anti AI-slop, processo, QA)
├── yuma-brand.md              brand guide YUMA
├── yuma-tokens.json           token canonici
├── components.json            config shadcn
├── tailwind.config.js         token registrati in Tailwind
├── design/
│   ├── tokens.css             custom properties
│   └── tailwind.tokens.js     scale JS
├── docs/
│   ├── design-system.md       documentazione sistema
│   └── stack.md               questo file
├── public/
│   ├── team.jpg               foto team (unica immagine reale)
│   └── texture-01.jpg         texture astratta generata
└── src/
    ├── index.css              @import tokens + Tailwind + font
    ├── App.tsx                routing minimale
    ├── lib/
    │   ├── utils.ts           cn()
    │   ├── yuma-theme.ts      tema (legacy)
    │   └── credibilita-content.ts
    └── components/
        ├── home/              LE SEZIONI ATTIVE DEL SITO
        │   ├── home.tsx           composizione pagina
        │   ├── hero-silk.tsx      hero SIGILLATO (non modificare)
        │   ├── section-rail.tsx   contenitore di sezione
        │   ├── credibility.tsx    sez. 2
        │   ├── possibilities.tsx  sez. 3 (accordion)
        │   ├── solutions.tsx      sez. 4
        │   ├── how-we-work.tsx    sez. 5
        │   ├── team.tsx           sez. 6
        │   ├── clients.tsx        sez. 7
        │   ├── assessment.tsx     sez. 8
        │   ├── contact.tsx        sez. 9 (form)
        │   └── footer.tsx         sez. 10
        └── ui/                componenti di supporto
```

---

## 5. Punto aperto: SEO e rendering

`CLAUDE.md` richiede **generazione statica (SSG)** per SEO e indicizzazione. Lo stack attuale è una **SPA client-side**: il contenuto viene renderizzato da JavaScript nel browser.

Conseguenze concrete:
- meta title/description e Open Graph per pagina sono gestibili solo via JS
- l'indicizzazione è più debole rispetto a HTML servito già pronto
- sitemap.xml e robots.txt non sono ancora presenti

Opzioni, da valutare:
1. **Restare su Vite** e aggiungere un plugin di pre-render statico (intervento contenuto)
2. **Migrare ad Astro** (il più adatto a un sito vetrina: HTML statico di default, isole React dove servono)
3. **Migrare a Next.js** (più struttura, utile se il sito crescerà con blog e pagine prodotto)
4. Rimandare, se la priorità ora è il design

Nessuna di queste è stata avviata: la scelta è aperta.

---

## 6. Stato del lavoro

**Fatto**
- Hero con shader WebGL, sigillato
- Sezioni 2-10 costruite dal copy approvato e ristilizzate sulla reference "Visitors"
- Design system a token, agganciato al build
- Plus Jakarta Sans come unico font

**Aperto**
- Titoli veri dell'accordion (ora "Titolo uno-quattro")
- Foto e dati dei founder (ora placeholder)
- Loghi cliente (in attesa dei consensi)
- Screenshot dei due prodotti
- Form di contatto non collegato a email/CRM
- Privacy policy e cookie policy
- QA responsive completa a 768px e verifica contrasto AA sistematica
