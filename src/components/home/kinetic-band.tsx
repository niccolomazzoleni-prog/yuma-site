import KineticGrid from "@/components/ui/kinetic-grid"

// Banda subito sotto l'hero: griglia interattiva (si deforma col cursore, onda
// al click) con una riga di copy presa dal blocco 2.
export function KineticBand() {
  return (
    <section id="kinetic" aria-label="La barriera si è abbassata">
      <KineticGrid className="min-h-[520px] md:min-h-[600px]">
        <div className="flex min-h-[520px] flex-col items-center justify-center px-5 py-24 text-center md:min-h-[600px] md:px-12">
          <span className="rounded-full border border-white/15 px-3 py-1 text-[12px] font-medium uppercase tracking-[0.12em] text-white/60">
            La barriera si è abbassata
          </span>
          <h2 className="mt-6 max-w-[22ch] text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl">
            Quello che prima richiedeva anni di lavoro, oggi si costruisce in
            pochi mesi.
          </h2>
          <p className="mt-6 max-w-[54ch] text-[17px] leading-[1.7] text-white/60 md:text-[20px]">
            Muovi il cursore sulla griglia, e clicca dove vuoi.
          </p>
        </div>
      </KineticGrid>
    </section>
  )
}
