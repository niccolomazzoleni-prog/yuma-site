// Sezione 10 — Footer (scuro). Dati legali + link.
export function Footer() {
  return (
    <footer className="w-full bg-[#0b1026] text-white/70">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div>
            <div className="text-lg font-semibold tracking-[0.2em] text-white">
              YUMA
            </div>
            <div className="mt-4 space-y-1 text-sm leading-relaxed text-white/55">
              <div className="text-white/75">Yuma Tx Srl</div>
              <div>Via G. Leopardi 14, 20123 Milano (MI)</div>
              <div>P. IVA 14244440963</div>
              <div>
                PEC{" "}
                <a
                  href="mailto:yumatxsrl@pec.it"
                  className="underline-offset-2 transition hover:text-white"
                >
                  yumatxsrl@pec.it
                </a>
              </div>
              <div>SDI WY7PJ6k</div>
            </div>
          </div>

          <nav className="flex flex-col gap-3 text-sm">
            <a className="transition hover:text-white" href="#">
              LinkedIn
            </a>
            <a className="transition hover:text-white" href="#">
              Privacy policy
            </a>
            <a className="transition hover:text-white" href="#">
              Cookie policy
            </a>
          </nav>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/40">
          © {"2026"} Yuma Tx Srl. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  )
}
