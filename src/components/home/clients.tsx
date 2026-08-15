// Sezione 7 — Clienti e partner (chiara, compatta). Loghi placeholder.
export function Clients() {
  return (
    <section
      id="clienti"
      className="relative w-full border-t border-black/5 text-[#201C18] [scroll-margin-top:80px]"
      style={{ background: "#FBFAF7" }}
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-[#8B8578]">
          I nostri clienti e partner
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              aria-hidden
              className="h-8 w-28 rounded"
              style={{ background: "#E7E1D8" }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
