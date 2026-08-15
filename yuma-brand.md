# YUMA · Brand & Style Guide

> Fonte di verità dello stile YUMA (direzione "Jakarta"). Allega o incolla questo file come contesto quando chiedi a un assistente AI di creare materiali on-brand (slide, landing, documenti).

## 1. Essenza

YUMA è una boutique di trasformazione AI: porta l'intelligenza artificiale dove crea valore reale nelle operazioni, non dove fa scena.

**Tono di voce:** chiaro, concreto, umano, premium. Mai iperbolico o "tech aggressivo".

- **Siamo:** chiari · concreti · umani · premium · misurabili
- **Non siamo:** iperbolici · cyber/dark · robotici · generici · gergali
- **Riferimenti:** la pulizia di Apple, la capacità di Stripe di rendere semplice un tema complesso.

### Due verticali
- **YUMA AI Market Interface** (Client Interface): fornitori/distributori B2B mid-market con clientela frammentata. Automazione ordini e comunicazione clienti.
- **YUMA Projects**: layer AI per aziende a commessa (ingegneria, costruzioni, manutenzione industriale). Si distingue con l'accento fucsia.

## 2. Colore

### Primario · Viola (colore del marchio: azioni, link, accenti chiave)
| Token | Hex |
|---|---|
| primary-50 | `#F4ECFF` |
| primary-100 | `#E9DCFF` |
| primary-200 | `#D6BBFF` |
| primary-300 | `#B98CFF` |
| primary-400 | `#9A5CFF` |
| **primary-500 (base)** | **`#6C0FF2`** |
| primary-600 | `#5A0FD6` |
| primary-700 | `#4A0BB0` |
| primary-800 | `#3B0A73` |
| primary-900 | `#26064D` |

### Accento · Fucsia (saturo, uso raro: una sola azione speciale, mai accanto al primario)
| Token | Hex |
|---|---|
| accent-400 | `#FF6FB0` |
| **accent-500** | **`#FF4D9D`** |
| accent-600 | `#E01F7C` |

### Teal · Stato positivo / conferma
| Token | Hex |
|---|---|
| teal-50 | `#E7F6F3` |
| teal-500 | `#14B8A6` |
| teal-600 | `#0F9488` |

### Neutri · Superfici e testo
| Token | Hex |
|---|---|
| neutral-0 | `#FFFFFF` |
| neutral-50 | `#F7F8FC` |
| neutral-100 | `#EEF0F7` |
| neutral-200 | `#E2E5F0` |
| neutral-300 | `#C9CEE0` |
| neutral-400 | `#9AA0BC` |
| neutral-500 | `#6B7290` |
| neutral-600 | `#4A4F6B` |
| neutral-700 | `#333756` |
| neutral-800 | `#22243F` |
| neutral-900 | `#170B2E` |

### Uso colore
- Testo primario `#170B2E`, testo secondario `#4A4F6B`, testo tenue `#9AA0BC`.
- Sfondo pagina `#FFFFFF` o `#F7F8FC`; superfici alternate `#EEF0F7`.
- Gradiente marchio: `linear-gradient(135deg, #6C0FF2, #FF4D9D)`.
- Gradiente scuro (hero/cover): `linear-gradient(150deg, #170B2E, #3B0A73 55%, #6C0FF2)`.

## 3. Tipografia

**Un solo carattere: Plus Jakarta Sans** (Google Fonts) per titoli e testo. La gerarchia si costruisce con peso e dimensione, non cambiando font.

Pesi: 400 Regular · 500 Medium · 600 SemiBold · 700 Bold · 800 ExtraBold.

| Ruolo | Peso | Dimensione | Note |
|---|---|---|---|
| Display / Hero | 800 | 46–58px | letter-spacing -0.03em, line-height ~1.02 |
| H2 sezione | 700 | 30–34px | letter-spacing -0.02em |
| H3 paragrafo | 700 | 20–22px | |
| Body | 400 | 16px | line-height 1.6 |
| Bottoni / label | 600 | 15px | |
| Caption / meta | 500 | 13px | colore neutral-400 |

## 4. Bottoni

- Angoli 12–14px; testo SemiBold 600. Un solo primario per vista.
- **Primario:** bg `linear-gradient(135deg,#6C0FF2,#5A0FD6)`, testo bianco, ombra `0 12px 26px -12px rgba(108,15,242,0.7)`. Hover: scurisci di un gradino + `translateY(-1px)`. Disabled: bg `#C9CEE0`.
- **Secondario:** bg bianco, bordo `#D6BBFF`, testo `#6C0FF2`. Hover: bg `#F4ECFF`, bordo `#6C0FF2`.
- **Pill accento (rara):** bg `linear-gradient(135deg,#6C0FF2,#FF4D9D)`, radius full.
- **Ghost:** bg `rgba(108,15,242,0.08)`, testo `#6C0FF2`.
- **Dark:** bg `#170B2E`, testo bianco.
- Taglie: Small (8–10px pad, 13px) · Medium (13px pad, 15px) · Large (17px pad, 18px).

## 5. Componenti

- **Card base:** bg bianco, bordo `#E2E5F0`, radius 16px, ombra `0 20px 40px -32px rgba(23,11,46,0.4)`.
- **Card glass:** bg `linear-gradient(135deg, rgba(108,15,242,0.14), rgba(255,255,255,0.5))`, bordo bianco, `backdrop-filter: blur(8px)`.
- **Card gradiente:** bg gradiente viola, testo bianco, bagliore fucsia in alto a destra (`radial-gradient` + `mix-blend-mode: screen`).
- **Badge/tag:** radius full (999px), 13px 600. Varianti: tint viola, gradiente pieno, teal (attivo), fucsia (novità), outline.
- **Input:** radius 12px, bordo `#C9CEE0`. Focus: bordo `#6C0FF2` + `box-shadow: 0 0 0 4px rgba(108,15,242,0.15)`.

## 6. Fondamenta

- **Raggi:** 8px input · 12–13px bottoni · 16px card · 999px pill.
- **Spazi (base 4):** 8 · 12 · 16 · 24 · 32 · 48.
- **Ombre:** sm card `0 20px 40px -32px rgba(23,11,46,0.4)` · md pannello `0 24px 46px -28px rgba(23,11,46,0.55)` · glow bottone `0 12px 26px -12px rgba(108,15,242,0.6)`.
- **Forme decorative:** cerchi/blob morbidi con blur, gradienti viola→fucsia a bassa opacità.

## 7. Do & Don't

**Fai così**
- Lascia respirare i layout: molto bianco, gerarchia chiara.
- Viola per le azioni; fucsia solo come accento raro.
- Forme morbide, gradienti sottili, tocchi glass.
- Copy concreto e umano, orientato al risultato.

**Evita**
- Iconografia robot/circuiti o estetica cyber/dark.
- Claim iperbolici e gergo tecnico fine a sé stesso.
- Boardroom stock photo e dashboard IT generiche.
- Troppi accenti fucsia o due primari nella stessa vista.

---

## Prompt di riuso (esempio)

> Usa la guida di stile YUMA allegata. Crea [presentazione di 10 slide / landing / documento] su [argomento]. Rispetta palette (primario viola `#6C0FF2`, accento fucsia `#FF4D9D` raro, neutri, teal per stati positivi), font Plus Jakarta Sans, bottoni e componenti come da guida. Tono premium, chiaro, umano. Evita estetica cyber/dark, robot, claim iperbolici.
