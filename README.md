# Prisma Hero

Hero section React (shadcn structure + Tailwind CSS + TypeScript) con animazioni
Framer Motion e icone lucide-react.

## Requisiti

- Node.js 18+ e npm

## Avvio in locale

```bash
npm install
npm run dev
```

Poi apri l'URL mostrato in terminale (di default http://localhost:5173).

## Build di produzione

```bash
npm run build
npm run preview
```

## Struttura

- `src/components/ui/prisma-hero.tsx` - il componente `PrismaHero` (+ `WordsPullUp`, `WordsPullUpMultiStyle`)
- `src/components/demo.tsx` - demo che usa `PrismaHero`
- `src/App.tsx` - monta la demo
- `src/index.css` - direttive Tailwind, variabili tema shadcn e classe `.noise-overlay`
- `tailwind.config.js` - tema con variabili CSS (incluso `--primary` = crema Prisma `#E1E0CC`)
- `src/lib/utils.ts` - helper `cn`

## Note

- Il colore `primary` del tema e' impostato sul crema Prisma `#E1E0CC`, cosi' le
  classi `bg-primary` / `text-primary/70` del componente rendono come nel design.
- Il video di background e' caricato da un URL remoto (CloudFront). Se vuoi renderlo
  offline, scarica il file e sostituisci l'attributo `src` del tag `video` con un
  asset locale in `public/`.
- Per aggiungere altri componenti shadcn: `npx shadcn@latest add <componente>`.
