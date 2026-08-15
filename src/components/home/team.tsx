// Sezione 6 — Le persone dietro YUMA (chiara). Intro + founder (placeholder).
const founders = [
  { name: "Nome Cognome", role: "Co-founder", line: "Una riga di descrizione del founder." },
  { name: "Nome Cognome", role: "Co-founder", line: "Una riga di descrizione del founder." },
  { name: "Nome Cognome", role: "Co-founder", line: "Una riga di descrizione del founder." },
]

export function Team() {
  return (
    <section
      id="team"
      className="relative w-full text-[#201C18] [scroll-margin-top:80px]"
      style={{ background: "#FBFAF7" }}
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6C0FF2]">
          Le persone dietro YUMA
        </p>
        <h2 className="mt-6 max-w-[18ch] text-balance text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl md:text-5xl">
          Siamo un team giovane, con tanta esperienza alle spalle.
        </h2>
        <div className="mt-6 max-w-[62ch] space-y-4 text-lg leading-relaxed text-[#4A443C]">
          <p>
            In passato abbiamo gestito progetti di trasformazione digitale per
            le più grandi aziende italiane, partecipato a round di finanziamento
            a sette cifre e accompagnato una startup fino all'exit.
          </p>
          <p>
            Oggi applichiamo tutto quello che abbiamo imparato dentro le aziende
            per cui, fino a poco tempo fa, una vera trasformazione tecnologica
            era fuori portata.
          </p>
        </div>

        <ul className="mt-14 grid gap-8 sm:mt-16 sm:grid-cols-2 md:grid-cols-3">
          {founders.map((f, i) => (
            <li key={i}>
              <div
                aria-hidden
                className="aspect-[4/5] w-full rounded-2xl"
                style={{ background: "#E7E1D8" }}
              />
              <div className="mt-4 text-lg font-semibold tracking-tight">
                {f.name}
              </div>
              <div className="text-sm font-medium text-[#6C0FF2]">{f.role}</div>
              <p className="mt-2 text-[15px] leading-relaxed text-[#4A443C]">
                {f.line}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
