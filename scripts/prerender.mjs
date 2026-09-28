// Fotografia statica delle tre pagine pubbliche, dopo `vite build`.
// Playwright apre ogni pagina buildata, aspetta che React l'abbia disegnata e
// salva l'HTML risultante al posto del guscio vuoto. Al caricamento React
// ridisegna tutto come prima (createRoot): cambia solo quello che vedono
// Google, LinkedIn, WhatsApp e i crawler AI, che spesso non eseguono JS.
//
// Uso: VITE_BASE=/yuma-site/ npm run build && node scripts/prerender.mjs
import { preview } from "vite"
import { chromium } from "playwright"
import { writeFile } from "node:fs/promises"

const base = process.env.VITE_BASE ?? "/"
const pages = ["", "projects/", "client-interface/"]
const port = 4179

const server = await preview({ base, preview: { port, strictPort: true, open: false }, logLevel: "error" })
const browser = await chromium.launch()

for (const p of pages) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } })
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
  const html = await page.evaluate(() => {
    document.querySelectorAll("#root canvas").forEach((c) => c.remove())
    document.querySelectorAll("[inert]").forEach((e) => e.removeAttribute("inert"))
    document.documentElement.removeAttribute("style")
    document.body.classList.remove("has-wa-bar", "nav-open")
    document.body.removeAttribute("style")
    return "<!doctype html>\n" + document.documentElement.outerHTML
  })
  await writeFile(`dist/${p}index.html`, html)
  console.log(`prerender: /${p} (${Math.round(html.length / 1024)} KB)`)
  await page.close()
}

await browser.close()
server.httpServer.close()
