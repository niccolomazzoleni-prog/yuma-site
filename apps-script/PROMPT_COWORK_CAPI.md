# Prompt per Claude Cowork · attivare la Meta Conversions API sul sito YUMA

Copia tutto il blocco qui sotto in Claude Cowork.

---

RUOLO
Sei un tecnico che lavora in autonomia sul mio Mac, nel browser dove ho già fatto
l'accesso a Meta (Business Manager / Events Manager) e a Google (Apps Script).
Devi attivare la Meta Conversions API per i lead del sito YUMA. Il codice è già
pronto: tu fai solo i passaggi nei pannelli di Meta e Google, poi verifichi.

CONTESTO
- Pixel / dataset Meta: 1098927475833280
- Il sito invia i moduli a una web app Apps Script. URL della web app (non va
  cambiato): https://script.google.com/macros/s/AKfycbzlU4LXgoniqOHsgiUlnbJ7yzFfYYbSb3uHuosOpdnacVIPyL_qLkYTNGWTJRNJ4bptjQ/exec
- Il nuovo codice dello script è nel file:
  ~/Downloads/prisma-hero/apps-script/leads.gs
  (cerca nel file la riga "DEPLOY_VERSION 2026-10-02-capi": se c'è, è la versione giusta)
- Lo script, per ogni lead qualificato, manda a Meta un evento Lead lato server
  con lo stesso event_id del pixel sulla pagina di ringraziamento: Meta li
  deduplica. Si attiva solo quando trova META_CAPI_TOKEN nelle proprietà dello script.

REGOLE
- Il token di accesso è segreto: non scriverlo in chat, nel report o in file.
  Va solo nelle proprietà dello script.
- Non cancellare nulla (righe del foglio, proprietà esistenti, deployment).
- Non creare un NUOVO deployment della web app: aggiorna quello esistente,
  altrimenti cambia l'URL e i moduli del sito smettono di funzionare.
- Se un passaggio si blocca per più di due tentativi, fermati e descrivimi il problema.

PASSI

1. Token della Conversions API
   - Apri business.facebook.com > Events Manager > dataset 1098927475833280.
   - Impostazioni > sezione "Conversions API" > "Genera token di accesso".
   - Copia il token (servirà al passo 3).

2. Codice di test
   - Sempre in Events Manager, scheda "Eventi di test" del dataset.
   - Copia il "codice evento di test" (tipo TEST12345).

3. Proprietà dello script
   - Apri script.google.com e trova il progetto Apps Script dei moduli YUMA:
     è quello che ha la web app con l'URL indicato sopra (Distribuisci >
     Gestisci deployment). Contiene le funzioni handleLead, recentDuplicate, testLead.
   - Impostazioni progetto (ingranaggio) > Proprietà script > aggiungi:
       META_CAPI_TOKEN       = il token del passo 1
       META_TEST_EVENT_CODE  = il codice del passo 2
     Lascia intatte le proprietà già presenti (es. RECAPTCHA_SECRET, rl_*).

4. Codice nuovo
   - Nell'editor apri il file dello script (quello che contiene handleLead).
   - Sostituisci TUTTO il contenuto con quello di
     ~/Downloads/prisma-hero/apps-script/leads.gs e salva.
   - Esegui la funzione "setup" (crea la tab "Meta CAPI" nel foglio). Se Google
     chiede nuove autorizzazioni (connessione a servizi esterni), accetta:
     servono per chiamare Meta.

5. Test lato server
   - Esegui la funzione "testMetaCapi".
   - Nel foglio Google, tab "Meta CAPI": l'ultima riga deve avere Esito HTTP 200
     e nella risposta "events_received":1.
   - In Events Manager > Eventi di test deve comparire un "Lead" ricevuto dal
     server. Se l'esito è diverso da 200, copiami la risposta di Meta (è nella tab).

6. Pubblicazione della web app (stesso URL)
   - Distribuisci > Gestisci deployment > sulla web app esistente clicca la
     matita (Modifica) > Versione: "Nuova versione" > descrizione
     "Meta Conversions API" > Distribuisci.
   - Verifica che l'URL /exec sia identico a quello indicato sopra.

7. Test completo dal sito
   - Apri in una finestra normale (non privata)
     https://niccolomazzoleni-prog.github.io/yuma-site/projects/
     accetta i cookie e compila il modulo sotto l'hero con:
     Nome "Test", Cognome "CAPI", Azienda "Test CAPI", Ruolo "Test",
     un'email aziendale mai usata prima (es. capi-test-<ora>@yuma-tx.com),
     Fatturato "10M - 30M". Aspetta qualche secondo prima di inviare.
   - Devi arrivare sulla pagina "Grazie per il tuo interesse verso YUMA".
   - Nel foglio: riga nuova nella tab "Projects" con Esito "Qualificato" e riga
     nuova nella tab "Meta CAPI" con 200.
   - In Events Manager > Eventi di test: un Lead dal browser e uno dal server con
     lo stesso event ID, segnalati come deduplicati (oppure un solo Lead con
     entrambe le origini).
   - La riga di test nel foglio lasciala: la tolgo io.

8. Chiusura
   - Torna in Proprietà script e cancella SOLO la proprietà META_TEST_EVENT_CODE:
     finché c'è, Meta tratta gli eventi come test e non li usa per le campagne.
   - Non toccare META_CAPI_TOKEN.

REPORT FINALE
- Esito di ogni passo (fatto / bloccato e perché)
- Esito HTTP e risposta di Meta del test server (passo 5) e del test dal sito (passo 7)
- Se in Events Manager la deduplica risulta corretta
- Conferma che l'URL della web app è rimasto lo stesso e che META_TEST_EVENT_CODE è stato rimosso
- Nessun token o segreto nel report
