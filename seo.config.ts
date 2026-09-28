import type { Plugin, HtmlTagDescriptor } from "vite"
import { clientInterfaceContent, projectsContent, type LandingContent } from "./src/lib/landing-content"

// Meta tag, anteprime social e dati strutturati per le tre pagine pubbliche,
// generati in build dagli stessi testi del sito (niente copie da allineare).
//
// VITE_SITE_URL  indirizzo pubblico, senza barra finale (default: GitHub Pages)
// VITE_ROBOTS    "noindex, nofollow" finché siamo in staging; al lancio sul
//                dominio vero: VITE_ROBOTS="index, follow"

const SITE = (process.env.VITE_SITE_URL ?? "https://niccolomazzoleni-prog.github.io/yuma-site").replace(/\/$/, "")
const ROBOTS = process.env.VITE_ROBOTS ?? "noindex, nofollow"

type Page = { path: string; og: string; title?: string; description?: string; jsonld: object[] }

const org = {
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${SITE}/#org`,
  name: "YUMA",
  legalName: "Yuma Tx Srl",
  url: `${SITE}/`,
  logo: `${SITE}/icon-512.png`,
  image: `${SITE}/og-home.jpg`,
  vatID: "IT14244440963",
  taxID: "14244440963",
  description: "Boutique di trasformazione AI per le imprese: consulenza, progetti su misura e prodotti software.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Giacomo Leopardi 14",
    postalCode: "20123",
    addressLocality: "Milano",
    addressRegion: "MI",
    addressCountry: "IT",
  },
  areaServed: "IT",
}

function product(c: LandingContent) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: c.product,
    url: `${SITE}/${c.slug}/`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    inLanguage: "it-IT",
    description: c.metaDescription,
    publisher: { "@id": `${SITE}/#org` },
  }
}

// solo le risposte confermate: quelle ancora "da confermare" restano fuori
function faq(c: LandingContent) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faq.items
      .filter((f) => !f.todo)
      .map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  }
}

const PAGES: Record<string, Page> = {
  "/index.html": {
    path: "/",
    og: "og-home.jpg",
    jsonld: [
      {
        "@context": "https://schema.org",
        "@graph": [
          org,
          { "@type": "WebSite", "@id": `${SITE}/#website`, url: `${SITE}/`, name: "YUMA", inLanguage: "it-IT", publisher: { "@id": `${SITE}/#org` } },
        ],
      },
    ],
  },
  "/projects/index.html": {
    path: "/projects/",
    og: "og-projects.jpg",
    title: projectsContent.title,
    description: projectsContent.metaDescription,
    jsonld: [product(projectsContent), faq(projectsContent)],
  },
  "/client-interface/index.html": {
    path: "/client-interface/",
    og: "og-client-interface.jpg",
    title: clientInterfaceContent.title,
    description: clientInterfaceContent.metaDescription,
    jsonld: [product(clientInterfaceContent), faq(clientInterfaceContent)],
  },
}

const attr = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;")

export function seo(): Plugin {
  let base = "/"
  return {
    name: "yuma-seo",
    configResolved(c) {
      base = c.base
    },
    transformIndexHtml(html, ctx) {
      const icons: HtmlTagDescriptor[] = [
        { tag: "link", attrs: { rel: "icon", href: `${base}favicon.svg`, type: "image/svg+xml" }, injectTo: "head" },
        { tag: "link", attrs: { rel: "icon", href: `${base}favicon-32.png`, sizes: "32x32" }, injectTo: "head" },
        { tag: "link", attrs: { rel: "apple-touch-icon", href: `${base}apple-touch-icon.png` }, injectTo: "head" },
        { tag: "link", attrs: { rel: "manifest", href: `${base}site.webmanifest` }, injectTo: "head" },
      ]
      const page = PAGES[ctx.path]
      if (!page) return { html, tags: icons } // pagine interne: solo icone, restano noindex

      // il font parte subito, insieme al CSS, invece di aspettare che il CSS lo chieda
      const font = Object.keys(ctx.bundle ?? {}).find((f) => /geist-latin-wght-normal.*\.woff2$/.test(f))
      if (font) {
        icons.unshift({
          tag: "link",
          attrs: { rel: "preload", as: "font", type: "font/woff2", href: `${base}${font}`, crossorigin: true },
          injectTo: "head-prepend",
        })
      }

      const title = page.title ?? html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "YUMA"
      const description = page.description ?? html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? ""
      const url = `${SITE}${page.path}`
      const image = `${SITE}/${page.og}`

      const out = html.replace(/<meta name="robots" content="[^"]*" \/>/, `<meta name="robots" content="${attr(ROBOTS)}" />`)
      const meta = (a: Record<string, string>): HtmlTagDescriptor => ({ tag: "meta", attrs: a, injectTo: "head" })
      return {
        html: out,
        tags: [
          ...icons,
          { tag: "link", attrs: { rel: "canonical", href: url }, injectTo: "head" },
          meta({ property: "og:type", content: "website" }),
          meta({ property: "og:locale", content: "it_IT" }),
          meta({ property: "og:site_name", content: "YUMA" }),
          meta({ property: "og:url", content: url }),
          meta({ property: "og:title", content: title }),
          meta({ property: "og:description", content: description }),
          meta({ property: "og:image", content: image }),
          meta({ property: "og:image:width", content: "1200" }),
          meta({ property: "og:image:height", content: "630" }),
          meta({ name: "twitter:card", content: "summary_large_image" }),
          meta({ name: "twitter:title", content: title }),
          meta({ name: "twitter:description", content: description }),
          meta({ name: "twitter:image", content: image }),
          ...page.jsonld.map(
            (j): HtmlTagDescriptor => ({
              tag: "script",
              attrs: { type: "application/ld+json" },
              children: JSON.stringify(j).replace(/</g, "\\u003c"),
              injectTo: "head",
            }),
          ),
        ],
      }
    },
  }
}
