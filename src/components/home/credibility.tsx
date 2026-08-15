// Seconda sezione — versione chiara (screenshot), tipografia dell'hero.
// Sfondo: dashed grid + glow viola morbido (adattato dal componente 21st.dev,
// glow riportato dal giallo #FFF991 al viola YUMA). Copy come da screenshot.
const STYLE = `
.cred3 {
  --paper: #F3EFEA;
  --ink: #201C18;
  --body: #4A443C;
  background:
    radial-gradient(58% 44% at 50% 28%, rgba(108,15,242,0.15), rgba(108,15,242,0) 62%),
    radial-gradient(90% 60% at 84% -6%, rgba(255,255,255,0.6), rgba(255,255,255,0) 58%),
    var(--paper);
  color: var(--ink);
}
.cred3-h {
  font-weight: 600;
  letter-spacing: -0.025em;
  line-height: 1.08;
  text-wrap: balance;
  color: var(--ink);
}
.cred3-body { font-weight: 400; line-height: 1.6; color: var(--body); }
.cred3-teaser { font-weight: 600; letter-spacing: -0.02em; color: var(--ink); }
`

export function Credibility() {
  return (
    <section
      id="perche-ora"
      className="cred3 relative w-full overflow-hidden [scroll-margin-top:80px]"
    >
      <style dangerouslySetInnerHTML={{ __html: STYLE }} />

      {/* Dashed grid (adattata dal componente 21st.dev) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(58,46,34,0.10) 1px, transparent 1px)," +
            "linear-gradient(to bottom, rgba(58,46,34,0.10) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          maskImage:
            "repeating-linear-gradient(to right, black 0, black 3px, transparent 3px, transparent 8px)," +
            "repeating-linear-gradient(to bottom, black 0, black 3px, transparent 3px, transparent 8px)",
          WebkitMaskImage:
            "repeating-linear-gradient(to right, black 0, black 3px, transparent 3px, transparent 8px)," +
            "repeating-linear-gradient(to bottom, black 0, black 3px, transparent 3px, transparent 8px)",
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:py-32">
        <h2 className="cred3-h max-w-[17ch] text-balance text-3xl tracking-tight sm:text-4xl md:text-5xl">
          La tecnologia più trasformativa di sempre è alla portata della tua
          azienda.
        </h2>

        <p className="cred3-body mt-8 max-w-[54ch] text-[clamp(18px,1.5vw,21px)]">
          Lo sappiamo perché per più di 10 anni abbiamo lavorato a progetti di
          trasformazione digitale nelle più grandi aziende italiane.
        </p>

        {/* Foto team — file in public/team.jpg */}
        <div
          className="mt-12 max-w-[620px] overflow-hidden rounded-2xl"
          style={{ background: "#E9E3DA" }}
        >
          <img
            src="/team.jpg"
            alt="Il team di YUMA a un evento"
            width={800}
            height={600}
            loading="lazy"
            className="h-auto w-full object-cover"
          />
        </div>

        <p className="cred3-body mt-12 max-w-[54ch] text-[clamp(18px,1.5vw,21px)]">
          Ci siamo scontrati con la complessità di implementare e far utilizzare
          la tecnologia, e abbiamo toccato con mano i limiti degli strumenti.
        </p>

        <p className="cred3-teaser mt-10 max-w-[17ch] text-2xl tracking-tight sm:text-3xl md:text-4xl">
          Poi, tutto è cambiato..
        </p>

        <p className="cred3-body mt-8 max-w-[54ch] text-[clamp(18px,1.5vw,21px)]">
          Quando è arrivata l'intelligenza artificiale, ci siamo resi conto di
          essere davanti a qualcosa di rivoluzionario: una tecnologia economica,
          facile da utilizzare, che comprende il linguaggio umano e lavora
          autonomamente al fianco delle persone.
        </p>

        <p className="cred3-body mt-6 max-w-[54ch] text-[clamp(18px,1.5vw,21px)]">
          Quello che prima richiedeva anni di lavoro, oggi si può costruire in
          pochi mesi e con una frazione dei costi. La barriera si è abbassata, e
          per la prima volta,{" "}
          <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
            il potenziale trasformativo della tecnologia è alla portata di tutte
            le aziende.
          </strong>
        </p>
      </div>
    </section>
  )
}
