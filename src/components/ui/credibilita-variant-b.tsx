import { Reveal } from "@/components/ui/reveal"
import { CRED } from "@/lib/credibilita-content"
import { yuma as t } from "@/lib/yuma-tokens"
import type { CredibilitaSectionProps } from "@/components/ui/credibilita-variant-a"

// Variante B — editoriale con frase estratta.
export function CredibilitaVariantB({ className }: CredibilitaSectionProps) {
  const [b1, b2, b3] = CRED.blocks
  const opening = `${b1.guide} ${b1.body}`

  return (
    <section
      className={className}
      style={{ fontFamily: t.font, background: t.neutral0 }}
    >
      <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-[160px]">
        {/* Kicker + H2 a piena larghezza */}
        <p className="text-[13px] font-medium" style={{ color: t.neutral500 }}>
          {CRED.kicker}
        </p>
        <h2
          className="mt-4 max-w-[18ch] text-[clamp(40px,5vw,56px)] font-semibold leading-[1.05] max-md:text-[32px]"
          style={{ color: t.neutral900 }}
        >
          {CRED.h2}
        </h2>

        {/* Paragrafo di apertura = blocco 01 */}
        <Reveal>
          <p
            className="mt-10 max-w-[70ch] text-[22px] leading-[1.55]"
            style={{ color: t.neutral600 }}
          >
            {opening}
          </p>
        </Reveal>

        <hr className="my-12" style={{ borderColor: t.neutral200 }} />

        {/* Corpo su due colonne: blocchi 02 e 03 (frase forte rimossa dal 03) */}
        <Reveal>
          <div className="md:columns-2 [column-gap:64px]">
            <p
              className="mb-[1.4em] max-w-[62ch] break-inside-avoid text-[18px] leading-[1.65] max-md:text-[17px]"
              style={{ color: t.neutral600 }}
            >
              <span className="font-medium" style={{ color: t.neutral900 }}>
                {b2.guide}{" "}
              </span>
              {b2.body}
            </p>
            <p
              className="max-w-[62ch] break-inside-avoid text-[18px] font-medium leading-[1.65] max-md:text-[17px]"
              style={{ color: t.neutral900 }}
            >
              {b3.guide}
            </p>
          </div>
        </Reveal>

        {/* Blockquote: frase più forte estratta dal testo esistente */}
        <Reveal>
          <div
            className="mt-12 rounded-2xl p-12 max-md:p-8"
            style={{ background: t.neutral50 }}
          >
            <p
              className="max-w-[62ch] text-[32px] font-medium leading-[1.35] max-md:text-[24px]"
              style={{ color: t.neutral900 }}
            >
              {b3.body}
            </p>
          </div>
        </Reveal>
      </div>

      {/* Fascia gradiente decorativa, full-bleed */}
      <div
        aria-hidden
        className="w-full"
        style={{ height: 280, background: t.gradientDark }}
      />

      {/* Riga di chiusura (copy da confermare: nel testo approvato non esiste
          una frase di chiusura per questo blocco) */}
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <p className="text-[18px]" style={{ color: t.neutral400 }}>
          Riga di chiusura — copy da confermare
        </p>
      </div>
    </section>
  )
}
