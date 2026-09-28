# Prompt Claude Cowork - attivazione moduli sito YUMA

Copia tutto il blocco qui sotto in Claude Cowork, con accesso alla cartella
`~/Downloads/prisma-hero` e al browser (Chrome, loggato con l'account Google
proprietario del foglio).

---

Devi mettere in funzione il backend dei moduli contatto del sito YUMA. Il codice e' gia' scritto: tu lo pubblichi su Google e colleghi le chiavi al sito. Lavora nella cartella `~/Downloads/prisma-hero`. Non modificare nulla oltre ai file indicati.

**Contesto**
- Script da pubblicare: `apps-script/leads.gs` (Google Apps Script, web app).
- Foglio di destinazione: https://docs.google.com/spreadsheets/d/1alFVA5jFUjBooTZ8IZ_280cWW1onCif6nL4nHF9LWBE/edit
- Sito (GitHub Pages): https://niccolomazzoleni-prog.github.io/yuma-site/
- File da aggiornare con le chiavi: `src/lib/leads.ts` (costanti `LEADS_ENDPOINT` e `RECAPTCHA_SITE_KEY`).

**Passi**

1. **Chiave reCAPTCHA v3.** Vai su https://www.google.com/recaptcha/admin/create e crea un nuovo sito:
   - Etichetta: `YUMA sito`
   - Tipo: *Basato sul punteggio (v3)*
   - Domini: `niccolomazzoleni-prog.github.io` e `localhost` (e il dominio definitivo YUMA se ti viene indicato)
   - Invia il modulo. Annota la **chiave del sito** e la **chiave segreta**. Prima di accettare i termini di servizio reCAPTCHA chiedimi conferma.

2. **Progetto Apps Script.** Vai su https://script.google.com e crea un nuovo progetto chiamato `YUMA - Moduli sito`. Sostituisci tutto il contenuto di `Codice.gs` con il contenuto integrale di `apps-script/leads.gs`, poi salva.

3. **Setup e autorizzazione.** Dalla tendina funzioni seleziona `setup` ed esegui. Google chiedera' di autorizzare l'accesso a Fogli e servizi esterni: fermati e lascia che sia io a completare la schermata di autorizzazione. Poi verifica che nel foglio esistano le tab `Home - Assessment`, `Projects`, `Client Interface`, `Spam bloccati`.

4. **Test interno.** Esegui la funzione `testLead`. Controlla che nella tab `Projects` compaia una riga con azienda `Acme Srl`, esito `Qualificato`. Poi cancella solo quella riga di test.

5. **Chiave segreta reCAPTCHA.** In Apps Script apri *Impostazioni progetto* (ingranaggio) > *Proprieta' script* > *Aggiungi proprieta' script*: nome `RECAPTCHA_SECRET`, valore = chiave segreta del passo 1. Salva. Non scrivere mai la chiave segreta in file del progetto o in chat.

6. **Distribuzione.** *Esegui il deployment* > *Nuovo deployment* > tipo *App web*:
   - Descrizione: `v2 anti-spam`
   - Esegui come: *Me*
   - Chi ha accesso: *Chiunque*
   Copia l'**URL dell'app web** (finisce con `/exec`). Aprilo nel browser: deve mostrare `YUMA - endpoint moduli attivo.`

7. **Collega il sito.** In `src/lib/leads.ts` imposta:
   - `export const LEADS_ENDPOINT = "<URL /exec del passo 6>"`
   - `export const RECAPTCHA_SITE_KEY = "<chiave del sito del passo 1>"`
   Non toccare altro nel file.

8. **Verifica dell'anti-spam.** Dal terminale invia un POST senza token reCAPTCHA, che deve essere bloccato:
   ```
   curl -sL -X POST "<URL /exec>" --data-urlencode "form=projects" --data-urlencode "nome=Bot" --data-urlencode "cognome=Test" --data-urlencode "azienda=Acme" --data-urlencode "ruolo=CEO" --data-urlencode "email=bot@acme-test.it" --data-urlencode "fatturato=10M-30M" --data-urlencode "form_load_time=$(($(date +%s)*1000-10000))"
   ```
   Controlla che nel foglio compaia una riga in `Spam bloccati` con motivo `captcha_fallito` e **nessuna** nuova riga in `Projects`. Poi cancella quella riga di test.

9. **Report finale.** Dimmi: URL /exec, chiave del sito reCAPTCHA (la segreta no), esito dei test 4 e 8, e il diff di `src/lib/leads.ts`. Non fare commit, push o deploy del sito: lo faccio con Claude Code.

**Regole**
- Se una schermata chiede login, password, accettazione di termini o autorizzazioni OAuth, fermati e passa a me.
- Se lo script viene modificato in futuro, per aggiornarlo usa *Gestisci deployment* > matita > *Nuova versione* sullo stesso deployment, cosi' l'URL /exec non cambia.
