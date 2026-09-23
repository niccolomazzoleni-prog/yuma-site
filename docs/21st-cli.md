# 21st.dev CLI

CLI per cercare, scaricare e pubblicare componenti UI da [21st.dev](https://21st.dev).

## Installazione

```bash
npm i -g @21st-dev/cli
```

Installato in questo ambiente: versione 1.17.1, eseguibile `21st`.

## Login (una volta sola, in locale)

```bash
21st login
```

Apre il browser e salva il token sulla macchina. Per controllare l'account:

```bash
21st whoami
```

## CI e script

In CI il login interattivo non serve e non funziona. Passa la chiave in uno dei tre modi,
che il CLI accetta in questo ordine:

```bash
21st search navbar --api-key "$API_KEY_21ST"     # flag esplicito
export API_KEY_21ST=...                           # variabile d'ambiente
export TWENTYFIRST_TOKEN=...                      # nome alternativo, stessa cosa
```

La chiave non va mai committata: tienila nei secret del workflow (GitHub Actions →
Settings → Secrets and variables → Actions) e leggila da lì.

## Comandi che servono qui

```bash
21st search "pricing table" --limit 5     # cerca componenti, temi e template
21st get <id>                             # stampa codice e demo di un componente
21st add <autore>/<slug>                  # installa un componente pubblicato nel progetto
21st logo "acme" --limit 5                # cerca loghi SVG (gratis, senza login)
21st usage                                # quota residua
```

`21st add` scrive dentro il progetto seguendo `components.json`, quindi i componenti
finiscono in `src/components/ui/`, come gli altri di shadcn.
