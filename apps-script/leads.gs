/**
 * YUMA - ricezione moduli contatto del sito.
 * Da incollare in un progetto Apps Script (script.google.com) e distribuire come
 * App web: Esegui come "Me", Chi ha accesso "Chiunque". L'URL /exec va in
 * src/lib/leads.ts (LEADS_ENDPOINT).
 *
 * Ogni modulo scrive nella sua tab (creata al primo invio se non esiste).
 * Il filtro su email e fatturato viene ripetuto qui: l'esito nel foglio non
 * dipende da cosa manda il browser.
 *
 * Anti-spam (stesso schema del sito Abra Robotics):
 *   1. honeypot "website" (input hidden, deve restare vuoto)
 *   2. time trap sul clock del server: tra 3 s e 1 h dal caricamento pagina
 *   3. rate limit globale: max 8 invii ogni 5 minuti
 *   4. reCAPTCHA v3 (punteggio >= 0.5), attivo se RECAPTCHA_SECRET e' nelle Script Properties
 *   5. validazione campi (email di lavoro, fatturato, lunghezze)
 *   6. dedup: stessa email bloccata per 24 h
 * Gli invii bloccati finiscono nella tab "Spam bloccati" con il motivo.
 * Al bot si risponde sempre ok, cosi' non capisce quale controllo lo ha fermato.
 *
 * Meta Conversions API (dal 2026-10-02): per i lead qualificati invia a Meta un
 * evento Lead lato server, con lo stesso event_id del pixel sulla pagina grazie
 * (Meta deduplica e conta un solo lead). Si attiva solo se nelle Script
 * Properties c'e' META_CAPI_TOKEN. META_TEST_EVENT_CODE (facoltativo) manda gli
 * eventi nella scheda "Eventi di test" di Events Manager: va tolto dopo i test.
 * Ogni chiamata viene annotata nella tab "Meta CAPI".
 *
 * DEPLOY_VERSION 2026-10-02-capi
 */

const SHEET_ID = '1alFVA5jFUjBooTZ8IZ_280cWW1onCif6nL4nHF9LWBE';

const FORMS = {
  home:     { tab: 'Home - Assessment', qualified: ['2M-10M', '10M-30M', '30M+'] },
  projects: { tab: 'Projects',          qualified: ['2M-10M', '10M-30M', '30M+'] },
  client:   { tab: 'Client Interface',  qualified: ['10M-30M', '30M+'] },
};
const REVENUE_BANDS = ['0-2M', '2M-10M', '10M-30M', '30M+'];

const SPAM_TAB         = 'Spam bloccati';
const CAPI_TAB         = 'Meta CAPI';
const META_PIXEL_ID    = '1102685935841738';
const META_GRAPH_VER   = 'v23.0';
const MIN_FORM_TIME_MS = 3000;     // min 3 s tra caricamento pagina e invio
const MAX_FORM_TIME_MS = 3600000;  // max 1 h
const RATE_LIMIT_N     = 8;        // max invii per finestra
const RATE_LIMIT_MS    = 300000;   // finestra da 5 min
const DEDUP_HOURS      = 24;       // stessa email bloccata per 24 h

const HEADERS      = ['Data', 'Nome', 'Cognome', 'Azienda', 'Ruolo', 'Email', 'Fatturato', 'Esito', 'Pagina'];
const SPAM_HEADERS = ['Data', 'Motivo', 'Modulo', 'Email', 'Nome', 'Azienda', 'Pagina', 'Payload (troncato)'];
const CAPI_HEADERS = ['Data', 'Modulo', 'event_id', 'Esito HTTP', 'Risposta Meta (troncata)'];

const PERSONAL_DOMAINS = [
  'gmail.com', 'googlemail.com', 'yahoo.com', 'yahoo.it', 'ymail.com', 'rocketmail.com',
  'hotmail.com', 'hotmail.it', 'outlook.com', 'outlook.it', 'live.com', 'live.it', 'msn.com',
  'icloud.com', 'me.com', 'mac.com', 'aol.com', 'aol.it',
  'libero.it', 'virgilio.it', 'alice.it', 'tim.it', 'tin.it', 'tiscali.it',
  'fastwebnet.it', 'email.it', 'inwind.it', 'iol.it', 'katamail.com', 'blu.it', 'vodafone.it',
  'pec.it', 'legalmail.it', 'proton.me', 'protonmail.com', 'pm.me',
  'gmx.com', 'gmx.it', 'gmx.net', 'gmx.de', 'web.de',
  'yandex.com', 'yandex.ru', 'mail.ru', 'mail.com', 'zohomail.com',
  'tutanota.com', 'tuta.io', 'hey.com', 'qq.com', '163.com',
];

// Esegui una volta dall'editor: autorizza l'accesso al foglio, imposta il fuso
// orario di Roma e crea le tab. Resta la prima funzione del file, cosi' e'
// quella selezionata di default nell'editor.
function setup() {
  SpreadsheetApp.openById(SHEET_ID).setSpreadsheetTimeZone('Europe/Rome');
  Object.keys(FORMS).forEach(function (k) { getTab(FORMS[k].tab, HEADERS); });
  getTab(SPAM_TAB, SPAM_HEADERS);
  getTab(CAPI_TAB, CAPI_HEADERS);
}

// ── Entry point ──────────────────────────────────────────────
function doPost(e) {
  try {
    return handleLead((e && e.parameter) || {});
  } catch (ex) {
    return ok();
  }
}

function doGet() {
  return ContentService.createTextOutput('YUMA - endpoint moduli attivo.');
}

function handleLead(p) {
  const now = new Date();
  const nowMs = now.getTime();
  const form = FORMS[p.form];
  if (!form) return reject(p, 'modulo_sconosciuto', now);

  // 1. Honeypot
  if (String(p.website || '').trim()) return reject(p, 'honeypot', now);

  // 2. Time trap (clock del server, non del client)
  const loadTime = parseInt(p.form_load_time || 0, 10);
  const elapsed = nowMs - loadTime;
  if (!loadTime || loadTime > nowMs || elapsed < MIN_FORM_TIME_MS || elapsed > MAX_FORM_TIME_MS) {
    return reject(p, 'time_trap (' + elapsed + ' ms)', now);
  }

  // 3. Rate limit
  if (!checkRateLimit(nowMs)) return reject(p, 'rate_limit', now);

  // 4. reCAPTCHA v3
  const secret = PropertiesService.getScriptProperties().getProperty('RECAPTCHA_SECRET') || '';
  if (secret) {
    const token = String(p.recaptcha_token || '').trim();
    if (!token || !verifyRecaptcha(token, secret)) return reject(p, 'captcha_fallito', now);
  }

  // 5. Campi
  const email = String(p.email || '').trim().toLowerCase();
  const domain = email.split('@')[1] || '';
  if (String(p.nome || '').trim().length < 2)    return reject(p, 'campo:nome', now);
  if (String(p.cognome || '').trim().length < 2) return reject(p, 'campo:cognome', now);
  if (String(p.azienda || '').trim().length < 2) return reject(p, 'campo:azienda', now);
  if (String(p.ruolo || '').trim().length < 2)   return reject(p, 'campo:ruolo', now);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return reject(p, 'campo:email', now);
  if (PERSONAL_DOMAINS.indexOf(domain) !== -1)      return reject(p, 'email_personale', now);
  if (REVENUE_BANDS.indexOf(p.fatturato) === -1)    return reject(p, 'campo:fatturato', now);

  // 6. Dedup email
  if (recentDuplicate(email, nowMs)) return reject(p, 'dedup_email (' + DEDUP_HOURS + ' h)', now);

  const esito = form.qualified.indexOf(p.fatturato) !== -1 ? 'Qualificato' : 'Scartato';
  withLock(function () {
    getTab(form.tab, HEADERS).appendRow([
      now,
      clean(p.nome), clean(p.cognome), clean(p.azienda), clean(p.ruolo),
      email, clean(p.fatturato), esito, clean(p.pagina),
    ]);
  });

  // Meta Conversions API: solo i lead qualificati, come il pixel sulla pagina grazie
  if (esito === 'Qualificato') sendMetaLead(p, email, now);
  return ok();
}

// ── Meta Conversions API ─────────────────────────────────────
function sendMetaLead(p, email, now) {
  const props = PropertiesService.getScriptProperties();
  const token = props.getProperty('META_CAPI_TOKEN');
  if (!token) return;
  const testCode = props.getProperty('META_TEST_EVENT_CODE');

  const userData = {
    em: [sha256(email)],
    fn: [sha256(String(p.nome || '').trim().toLowerCase())],
    ln: [sha256(String(p.cognome || '').trim().toLowerCase())],
    country: [sha256('it')],
    external_id: [sha256(email)],
  };
  if (p.fbp) userData.fbp = String(p.fbp);
  if (p.fbc) userData.fbc = String(p.fbc);
  if (p.ua) userData.client_user_agent = String(p.ua).slice(0, 500);

  const event = {
    event_name: 'Lead',
    event_time: Math.floor(now.getTime() / 1000),
    action_source: 'website',
    event_source_url: String(p.pagina || ''),
    user_data: userData,
    custom_data: { content_name: String(p.form || '') },
  };
  if (p.event_id) event.event_id = String(p.event_id);

  const body = { data: [event] };
  if (testCode) body.test_event_code = testCode;

  let code = 0;
  let text = '';
  try {
    const res = UrlFetchApp.fetch(
      'https://graph.facebook.com/' + META_GRAPH_VER + '/' + META_PIXEL_ID + '/events?access_token=' + encodeURIComponent(token),
      { method: 'post', contentType: 'application/json', payload: JSON.stringify(body), muteHttpExceptions: true }
    );
    code = res.getResponseCode();
    text = res.getContentText();
  } catch (ex) {
    text = 'errore: ' + ex;
  }
  try {
    withLock(function () {
      getTab(CAPI_TAB, CAPI_HEADERS).appendRow([now, clean(p.form), clean(p.event_id), code, clean(text.slice(0, 400))]);
    });
  } catch (_) {}
}

function sha256(s) {
  const bytes = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, s, Utilities.Charset.UTF_8);
  return bytes.map(function (b) { return ('0' + (b & 0xff).toString(16)).slice(-2); }).join('');
}

// ── Rate limit con LockService + PropertiesService ───────────
function checkRateLimit(nowMs) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(3000);
    const props = PropertiesService.getScriptProperties();
    const windowStart = parseInt(props.getProperty('rl_window_start') || '0', 10);
    let count = parseInt(props.getProperty('rl_count') || '0', 10);
    if (nowMs - windowStart > RATE_LIMIT_MS) {
      props.setProperties({ rl_window_start: String(nowMs), rl_count: '1' });
      return true;
    }
    count++;
    props.setProperty('rl_count', String(count));
    return count <= RATE_LIMIT_N;
  } catch (_) {
    return true; // lock non disponibile: lascia passare
  } finally {
    try { lock.releaseLock(); } catch (_) {}
  }
}

// ── Dedup: stessa email in una qualsiasi tab moduli nelle ultime DEDUP_HOURS ──
function recentDuplicate(email, nowMs) {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const cutoff = new Date(nowMs - DEDUP_HOURS * 3600000);
  const emailCol = HEADERS.indexOf('Email') + 1;
  return Object.keys(FORMS).some(function (k) {
    const sh = ss.getSheetByName(FORMS[k].tab);
    if (!sh || sh.getLastRow() < 2) return false;
    const rows = sh.getRange(2, 1, sh.getLastRow() - 1, emailCol).getValues();
    for (let i = rows.length - 1; i >= 0; i--) {
      if (new Date(rows[i][0]) < cutoff) break;
      if (String(rows[i][emailCol - 1]).toLowerCase().trim() === email) return true;
    }
    return false;
  });
}

// ── reCAPTCHA v3 ──────────────────────────────────────────────
function verifyRecaptcha(token, secret) {
  try {
    const res = UrlFetchApp.fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'post',
      payload: { secret: secret, response: token },
    });
    const obj = JSON.parse(res.getContentText());
    if (obj.success && obj.score !== undefined) return obj.score >= 0.5;
    return obj.success === true;
  } catch (_) {
    return true; // errore di rete: non bloccare utenti reali
  }
}

// ── Helpers ──────────────────────────────────────────────────
function reject(p, motivo, now) {
  try {
    withLock(function () {
      const payload = JSON.stringify(p);
      getTab(SPAM_TAB, SPAM_HEADERS).appendRow([
        now, motivo, clean(p.form), clean(p.email), clean(p.nome), clean(p.azienda), clean(p.pagina),
        clean(payload.slice(0, 400)),
      ]);
    });
  } catch (_) {}
  return ok();
}

function withLock(fn) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try { fn(); } finally { lock.releaseLock(); }
}

function getTab(name, headers) {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

// Evita che un valore che inizia con = + - @ venga interpretato come formula.
function clean(v) {
  const s = String(v || '').trim().slice(0, 500);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function ok() {
  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
}

// Test dall'editor: invia a Meta un Lead di prova (serve META_CAPI_TOKEN; con
// META_TEST_EVENT_CODE compare in Events Manager > Eventi di test). Controlla
// l'esito nella tab "Meta CAPI": 200 e "events_received":1 = funziona.
function testMetaCapi() {
  sendMetaLead({
    form: 'projects', nome: 'Test', cognome: 'Yuma', pagina: 'https://niccolomazzoleni-prog.github.io/yuma-site/projects/',
    event_id: 'test-' + Date.now(), ua: 'Apps Script test',
  }, 'test@yuma-tx.com', new Date());
}

// Test dall'editor: simula un invio valido (compare una riga in "Projects").
function testLead() {
  const res = handleLead({
    form: 'projects', nome: 'Test', cognome: 'Yuma', azienda: 'Acme Srl', ruolo: 'CEO',
    email: 'test+' + Date.now() + '@acme-test.it', fatturato: '10M-30M',
    pagina: 'test-editor', website: '', form_load_time: String(Date.now() - 10000),
  });
  Logger.log(res.getContent());
}
