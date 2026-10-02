// Fotografia statica delle tre pagine pubbliche, dopo `vite build`.
// Playwright apre ogni pagina buildata, aspetta che React l'abbia disegnata e
// salva l'HTML risultante al posto del guscio vuoto. Al caricamento React
// ridisegna tutto come prima (createRoot): cambia solo quello che vedono
// Google, LinkedIn, WhatsApp e i crawler AI, che spesso non eseguono JS.
//
// Servizi di terze parti (banner cookie, tag manager, analytics) vengono
// bloccati durante la cattura: devono partire nel browser del visitatore, non
// finire congelati nell'HTML (banner doppio, GTM caricato due volte).
//
// Uso: VITE_BASE=/yuma-site/ npm run build && node scripts/prerender.mjs
import { preview } from "vite"
import { chromium } from "playwright"
import { readFile, writeFile } from "node:fs/promises"

const base = process.env.VITE_BASE ?? "/"
const pages = ["", "projects/", "client-interface/"]
const port = 4179

const server = await preview({ base, preview: { port, strictPort: true, open: false }, logLevel: "error" })
const browser = await chromium.launch()

const THIRD_PARTY = /iubenda\.com|googletagmanager\.com|google-analytics\.com|clarity\.ms|facebook\.(net|com)|doubleclick\.net|posthog\.com/

for (const p of pages) {
  // script e link già presenti nell'HTML di partenza: gli unici da tenere
  const source = await readFile(`dist/${p}index.html`, "utf8")
  const keepSrc = [...source.matchAll(/<script[^>]*\ssrc="([^"]+)"/g)].map((m) => m[1])
  const keepHref = [...source.matchAll(/<link[^>]*\shref="([^"]+)"/g)].map((m) => m[1])

  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } })
  await page.route(THIRD_PARTY, (route) => route.abort())
  await page.goto(`http://localhost:${port}${base}${p}`, { waitUntil: "networkidle" })
  await page.waitForSelector("#root h1")
  // scorre tutta la pagina: i blocchi che compaiono allo scroll finiscono visibili
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 500) {
      window.scrollTo(0, y)
      await new Promise((r) => setTimeout(r, 40))
    }
    window.scrollTo(0, 0)
  })
  await page.waitForTimeout(600)
  const html = await page.evaluate(({ keepSrc, keepHref }) => {
    // tutto quello che è stato aggiunto da script esterni fuori da #root
    document.querySelectorAll("script[src]").forEach((el) => {
      if (!keepSrc.includes(el.getAttribute("src") ?? "")) el.remove()
    })
    document.querySelectorAll("link[href]").forEach((el) => {
      if (!keepHref.includes(el.getAttribute("href") ?? "")) el.remove()
    })
    document.querySelectorAll('[id^="iubenda"], [class*="iubenda"], body > iframe').forEach((el) => el.remove())
    document.querySelectorAll("#root canvas").forEach((c) => c.remove())
    document.querySelectorAll("[inert]").forEach((e) => e.removeAttribute("inert"))
    document.documentElement.removeAttribute("style")
    document.body.classList.remove("has-wa-bar", "nav-open")
    document.body.removeAttribute("style")
    return "<!doctype html>\n" + document.documentElement.outerHTML
  }, { keepSrc, keepHref })
  await writeFile(`dist/${p}index.html`, html)
  console.log(`prerender: /${p} (${Math.round(html.length / 1024)} KB)`)
  await page.close()
}

await browser.close()
server.httpServer.close()
