// Sezione 10 — footer chiaro minimale (reference): canvas bianco, hairline
// Fog superiore, testo Graphite/Ash. Dati legali invariati.
export function Footer() {
  return (
    <footer className="border-t border-ref-fog bg-white text-ref-graphite">
      <div className="w-full px-5 py-16 md:px-12">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div>
            <div className="text-[16px] font-semibold tracking-[0.16em] text-ref-carbon">
              YUMA
            </div>
            <div className="mt-4 space-y-1 text-[14px] leading-[1.6] text-ref-ash">
              <div className="text-ref-graphite">Yuma Tx Srl</div>
              <div>Via G. Leopardi 14, 20123 Milano (MI)</div>
              <div>P. IVA 14244440963</div>
              <div>
                PEC{" "}
                <a
                  href="mailto:yumatxsrl@pec.it"
                  className="underline-offset-2 transition-colors duration-200 hover:text-ref-carbon"
                >
                  yumatxsrl@pec.it
                </a>
              </div>
              <div>SDI WY7PJ6k</div>
            </div>
          </div>

          <nav className="flex flex-col gap-3 text-[15px] font-medium">
            <a className="transition-colors duration-200 hover:text-ref-carbon" href="#">
              LinkedIn
            </a>
            <a className="transition-colors duration-200 hover:text-ref-carbon" href="#">
              Privacy policy
            </a>
            <a className="transition-colors duration-200 hover:text-ref-carbon" href="#">
              Cookie policy
            </a>
          </nav>
        </div>

        <div className="mt-12 border-t border-ref-fog pt-6 text-[13px] text-ref-ash">
          © 2026 Yuma Tx Srl. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  )
}
