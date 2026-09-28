import { useState } from "react"
import V3Home from "@/components/v3/v3-home"

// Prova dei caratteri sulla home. Le impostazioni "Apple" sono applicate qui
// come sovrascrittura CSS solo per il confronto: se una versione vince, la
// portiamo nei componenti veri (Title, Lead, Body).

const APPLE_SETTINGS = `
  .type-apple h1 { font-weight: 600 !important; letter-spacing: -0.02em !important; line-height: 1.05 !important; }
  .type-apple h2 { font-weight: 600 !important; letter-spacing: -0.022em !important; line-height: 1.08 !important; }
  .type-apple h3 { font-weight: 600 !important; letter-spacing: -0.012em !important; }
  .type-apple p[class*="text-[16px]"] { font-size: 17px !important; line-height: 1.47 !important; letter-spacing: -0.012em !important; }
  .type-apple p[class*="text-[15px]"] { font-size: 16px !important; line-height: 1.47 !important; letter-spacing: -0.01em !important; }
  .type-apple p[class*="uppercase"] { font-weight: 600 !important; }
  @media (min-width: 768px) {
    .type-apple p[class*="md:text-[18px]"] { font-size: 19px !important; line-height: 1.42 !important; }
  }
`

const SYSTEM_STACK = `-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Helvetica Neue", sans-serif`

const options = [
  {
    key: "oggi",
    name: "1 · Oggi",
    claim: "Geist con le impostazioni attuali: titoli medium, spaziatura molto stretta, corpo 16px.",
    className: "",
    font: "",
  },
  {
    key: "geist-apple",
    name: "2 · Geist + regole Apple",
    claim: "Stesso carattere, impostato come apple.com: titoli semibold, spaziatura meno stretta, corpo 17px con interlinea 1,47.",
    className: "type-apple",
    font: "",
  },
  {
    key: "sf",
    name: "3 · SF Pro (font di sistema)",
    claim: "Il carattere di Apple, preso dal dispositivo. Su Mac e iPhone è identico ad apple.com. Stesse regole della 2.",
    className: "type-apple",
    font: SYSTEM_STACK,
  },
  {
    key: "altri",
    name: "4 · La 3 vista da Windows/Android",
    claim: "Chi non usa Apple non ha SF Pro: vedrebbe il font del suo sistema. Qui Roboto (Android); su Windows sarebbe Segoe UI, simile.",
    className: "type-apple",
    font: `"Roboto", sans-serif`,
  },
]

export default function FontPage() {
  const [active, setActive] = useState(0)
  const o = options[active]
  return (
    <>
      <style>{APPLE_SETTINGS}</style>
      {o.font ? <style>{`.type-font, .type-font * { font-family: ${o.font} !important; }`}</style> : null}

      <div key={o.key} className={`${o.className} ${o.font ? "type-font" : ""}`}>
        <V3Home />
      </div>

      {/* selettore: flottante in basso a sinistra, sopra la barra WhatsApp */}
      <div className="fixed bottom-24 left-4 z-[70] w-[300px] rounded-[20px] border border-white/70 bg-white/85 p-3 shadow-[0_20px_60px_-25px_rgba(1,1,16,0.5)] backdrop-blur-xl" style={{ fontFamily: '"Geist", sans-serif' }}>
        <p className="px-2 pb-2 pt-1 text-[11px] font-medium uppercase tracking-[0.14em] text-[#56565B]">Prova caratteri</p>
        <div className="flex flex-col gap-1">
          {options.map((opt, i) => (
            <button
              key={opt.key}
              type="button"
              onClick={() => setActive(i)}
              className={`rounded-[12px] px-3 py-2 text-left text-[14px] font-medium transition-colors ${
                i === active ? "bg-[#1D1D1F] text-white" : "text-[#424245] hover:bg-black/5"
              }`}
            >
              {opt.name}
            </button>
          ))}
        </div>
        <p className="px-2 pb-1 pt-3 text-[12px] leading-[1.45] text-[#6E6E73]">{o.claim}</p>
      </div>
    </>
  )
}
