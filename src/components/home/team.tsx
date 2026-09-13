import { SectionRail } from "@/components/home/section-rail"

// Sezione 6 — le persone. Intro editoriale + founder (placeholder foto in
// cerchio, stile avatar reference). Copy invariato.
const founders = [
  { name: "Nome Cognome", role: "Co-founder", line: "Una riga di descrizione del founder." },
  { name: "Nome Cognome", role: "Co-founder", line: "Una riga di descrizione del founder." },
  { name: "Nome Cognome", role: "Co-founder", line: "Una riga di descrizione del founder." },
]

export function Team() {
  return (
    <SectionRail id="team" label="Le persone dietro YUMA" tone="canvas">
      <h2 className="max-w-[20ch] text-balance text-[clamp(30px,3.4vw,36px)] font-semibold leading-[1.22] tracking-[-0.017em] text-ref-carbon">
        Siamo un team giovane, con tanta esperienza alle spalle.
      </h2>

      <div className="mt-6 max-w-[62ch] space-y-4 text-[16px] md:text-[17px] leading-[1.7] text-ref-graphite">
        <p>
          In passato abbiamo gestito progetti di trasformazione digitale per le
          più grandi aziende italiane, partecipato a round di finanziamento a
          sette cifre e accompagnato una startup fino all'exit.
        </p>
        <p>
          Oggi applichiamo tutto quello che abbiamo imparato dentro le aziende
          per cui, fino a poco tempo fa, una vera trasformazione tecnologica era
          fuori portata.
        </p>
      </div>

      <ul className="mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-3">
        {founders.map((f, i) => (
          <li key={i}>
            <div
              aria-hidden
              className="h-24 w-24 rounded-pill border border-ref-fog bg-ref-mist"
            />
            <div className="mt-5 text-[17px] font-semibold text-ref-carbon">
              {f.name}
            </div>
            <div className="mt-0.5 text-[13px] font-medium text-ref-ash">
              {f.role}
            </div>
            <p className="mt-2 text-[15px] leading-[1.6] text-ref-graphite">
              {f.line}
            </p>
          </li>
        ))}
      </ul>
    </SectionRail>
  )
}
