# YUMA · Design system (estensione)

Questo documento **non ridefinisce** il brand: estende e collega al build i valori di
`yuma-brand.md`. Fonte di verità dei valori: `yuma-tokens.json` → `design/tokens.css`
(custom properties) + `design/tailwind.tokens.js` (classi Tailwind). Zero hex fuori dai token.

## Come sono collegati i token
- `design/tailwind.tokens.js` → importato da `tailwind.config.js` (colori, font, raggi, ombre, scala tipografica, gradienti).
- `design/tokens.css` → importato per primo in `src/index.css` (custom properties + ruoli).
- `yuma-tokens.json` → sorgente canonica, specchio dei due sopra.

## Colore (namespacing Tailwind)
Per non collidere con i semantic color shadcn:
- `viola-50…900` — primario (azioni, link, accenti). Base `viola-500 #6C0FF2`.
- `fucsia-400…600` — accento raro. Mai adiacente al primario, una sola azione speciale.
- `teal-50/500/600` — solo stati positivi/conferma.
- `neutral-0…900` — superfici e testo. Testo forte `neutral-900`, muted `neutral-600`, tenue `neutral-400`.

Ruoli (in `tokens.css`): `--text-strong/-muted/-faint`, `--surface-page/-alt/-sunken`, `--border-hairline`.

## Tipografia — 6 livelli (Plus Jakarta Sans, unico font)
| Classe | Peso | Size | Tracking | Line-height | Uso |
|---|---|---|---|---|---|
| `text-display` | 800 | clamp 46→58px | -0.03em | 1.02 | hero/dichiarativi |
| `text-h2` | 700 | clamp 30→34px | -0.02em | 1.1 | titolo sezione |
| `text-h3` | 700 | 22px | -0.01em | 1.25 | sotto-titolo |
| `text-body` | 400 | 16px | — | 1.6 | corpo |
| `text-label` | 600 | 15px | — | 1.2 | bottoni/label |
| `text-caption` | 500 | 13px | 0.02em | 1.3 | meta (neutral-400) |

Salto netto display↔body voluto (≈3.6×). Misura di riga max 75 caratteri.

## Raggi (per componente, non globali)
`rounded-input` 8px · `rounded-btn` 12px · `rounded-card` 16px · `rounded-pill` 9999px.

## Ombre (lunghe, quasi invisibili)
`shadow-card` · `shadow-panel` · `shadow-glow` (solo bottone primario). Ombra massima ammessa: queste.

## Gradienti (deroga_al_brand)
Solo su bottone primario (`bg-gradient-primary`) e pill accento (`bg-gradient-brand`).
Mai come fondo di sezione, mai su testo, mai su card. `bg-gradient-dark` riservato a cover.

## Motion
150–250ms, easing `ease-out-soft` (`cubic-bezier(0.22,1,0.36,1)`). `prefers-reduced-motion` rispettato.

## Deroghe attive (vedi prompt art direction)
- Card: bianche con bordo hairline `neutral-200`. **No** glass/backdrop-blur (sospesi).
- **No** blob/cerchi sfocati decorativi. Profondità da tipografia + spazio.

## Aperto / da riconciliare (fase estetica)
Valori attualmente in uso nei componenti **fuori dai token del brand**, da migrare:
- Fondo scuro sezioni `#0b1026` (hero sigillato) ≠ `neutral-900 #170B2E`.
- Fondo chiaro sezione 2 `#F3EFEA` (crema calda) ≠ neutri brand (freddi: `neutral-50 #F7F8FC`).
- Lilla `#b18cff` ≈ `viola-300 #B98CFF` (mappabile).
Il refactor hex→token e queste scelte cromatiche sono il passo successivo.

## Mancano nel repo (segnalati)
`docs/copy-rules.md` e `docs/positioning.md` non esistono: il prompt li dà come fonte di verità (sola lettura) ma non ci sono. Vanno forniti.
