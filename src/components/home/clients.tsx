// Sezione 7 — clienti e partner. Banda sottile stile "partner logos" della
// reference: logo grayscale su linen, senza rail (pausa visiva tra sezioni).
export function Clients() {
  return (
    <section
      id="clienti"
      className="border-y border-ref-fog bg-ref-linen [scroll-margin-top:96px]"
    >
      <div className="w-full px-5 py-14 text-center md:px-12">
        <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-ref-ash">
          I nostri clienti e partner
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              aria-hidden
              className="h-7 w-28 rounded-[4px] bg-ref-fog opacity-70"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
