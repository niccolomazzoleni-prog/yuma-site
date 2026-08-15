import { CredibilitaVariantA } from "@/components/ui/credibilita-variant-a"
import { CredibilitaVariantB } from "@/components/ui/credibilita-variant-b"
import { yuma as t } from "@/lib/yuma-tokens"

function VariantLabel({ letter, title }: { letter: string; title: string }) {
  return (
    <div className="mx-auto flex max-w-[1200px] flex-wrap items-baseline gap-x-3 gap-y-1 px-6 pb-3 pt-16">
      <span
        className="text-[13px] font-bold uppercase tracking-[0.12em]"
        style={{ color: t.primary500 }}
      >
        Variante {letter}
      </span>
      <span className="text-[13px]" style={{ color: t.neutral500 }}>
        {title}
      </span>
    </div>
  )
}

export default function CredibilitaPreview() {
  return (
    <main
      className="min-h-screen"
      style={{ fontFamily: t.font, background: t.neutral100 }}
    >
      <VariantLabel letter="A" title="colonna sticky + tre blocchi" />
      <CredibilitaVariantA />

      <VariantLabel letter="B" title="editoriale con frase estratta" />
      <CredibilitaVariantB />
    </main>
  )
}
