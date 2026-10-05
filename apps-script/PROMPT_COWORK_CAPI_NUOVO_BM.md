# Prompt per Claude Cowork · spostare la Conversions API sul nuovo pixel YUMA TX SRL

Copia tutto il blocco qui sotto in Claude Cowork.

---

RUOLO
Sei un tecnico che lavora in autonomia sul mio Mac, nel browser dove ho già fatto
l'accesso a Meta (Business Manager) e a Google (Apps Script). La Conversions API
dei lead YUMA oggi manda gli eventi al vecchio pixel 1098927475833280 (BM "YUMA").
Va spostata sul nuovo pixel 1102685935841738 (BM "YUMA TX SRL"). Il codice è già
aggiornato: tu fai solo i passaggi nei pannelli di Meta e Google, poi verifichi.

CONTESTO
- Nuovo pixel / dataset: 1102685935841738 (nome "YUMA TX SRL", BM YUMA TX SRL)
- URL della web app Apps Script (non va cambiato):
  https://script.google.com/macros/s/AKfycbzlU4LXgoniqOHsgiUlnbJ7yzFfYYbSb3uHuosOpdnacVIPyL_qLkYTNGWTJRNJ4bptjQ/exec
- Codice aggiornato: ~/Downloads/prisma-hero/apps-script/leads-notifica.gs
  se nello script online c'è la funzione notifyLead (mail di avviso lead),
  altrimenti ~/Downloads/prisma-hero/apps-script/leads.gs. In entrambi la riga
  META_PIXEL_ID deve valere '1102685935841738'.
- Sito: https://yuma-tx.com (finché il dominio non punta a Netlify usa
  https://yuma-ai-site.netlify.app)

REGOLE
- Il token di accesso è segreto: non scriverlo in chat, nel report o in file.
  Va solo nelle proprietà dello script.
- Non cancellare nulla (righe del foglio, deployment) tranne quanto indicato.
- Non creare un NUOVO deployment della web app: aggiorna quello esistente.
- Se un passaggio si blocca per più di due tentativi, fermati e descrivimi il problema.

PASSI

1. Token del nuovo pixel
   - business.facebook.com > BM "YUMA TX SRL" > Events Manager > dataset 1102685935841738.
   - Impostazioni > "Conversions API" > "Genera token di accesso". Copialo.
   - Scheda "Eventi di test": copia il codice evento di test (tipo TEST12345).

2. Proprietà dello script
   - script.google.com > progetto dei moduli YUMA (quello con la web app sopra).
   - Impostazioni progetto > Proprietà script:
       META_CAPI_TOKEN       = SOSTITUISCI il valore con il token del passo 1
       META_TEST_EVENT_CODE  = il codice del passo 1 (aggiungilo)
     Lascia intatte le altre (RECAPTCHA_SECRET, rl_*).

3. Codice
   - Sostituisci TUTTO il contenuto del file dello script con il file indicato
     nel CONTESTO e salva. Controlla che META_PIXEL_ID sia '1102685935841738'.

4. Test lato server
   - Esegui "testMetaCapi". Tab "Meta CAPI" del foglio: ultima riga HTTP 200 e
     "events_received":1. In Events Manager (nuovo dataset) > Eventi di test
     compare un Lead dal server.

5. Pubblicazione (stesso URL)
   - Distribuisci > Gestisci deployment > matita sulla web app esistente >
     Versione "Nuova versione" > descrizione "CAPI nuovo pixel" > Distribuisci.
   - Verifica che l'URL /exec sia identico a quello sopra.

6. Test dal sito
   - Prima controlla che il sito online sia la versione nuova: apri
     view-source:https://yuma-ai-site.netlify.app/ e cerca "1102685935841738".
     Se non c'è, salta questo passo e scrivilo nel report (il deploy Netlify
     non è ancora partito).
   - Apri https://yuma-ai-site.netlify.app/projects/ (finestra normale), accetta
     i cookie, compila il modulo: Nome "Test", Cognome "CAPI", Azienda
     "Test CAPI", Ruolo "Test", email aziendale mai usata
     (capi-test-<ora>@yuma-tx.com), Fatturato "10M - 30M". Aspetta qualche
     secondo prima di inviare.
   - Devi arrivare sulla pagina di ringraziamento. Nel foglio: riga nella tab
     "Projects" (Qualificato) e riga 200 nella tab "Meta CAPI".
   - Eventi di test del nuovo dataset: Lead dal browser e dal server con lo
     stesso event ID, deduplicati.
   - Se il modulo dà errore reCAPTCHA, fermati: va aggiunto il dominio nella
     console reCAPTCHA (lo faccio io).

7. Chiusura
   - Cancella SOLO la proprietà META_TEST_EVENT_CODE. Non toccare META_CAPI_TOKEN.

REPORT FINALE
- Esito di ogni passo, HTTP e risposta Meta dei test (passi 4 e 6)
- Deduplica corretta sì/no, URL web app invariato, META_TEST_EVENT_CODE rimosso
- Nessun token o segreto nel report
