/* ========================================
   FlashMaster — Core Application v2.5
   i18n · TXT Anki Import · Multiple Choice Quiz · TTS Audio · Safe Progress
   ======================================== */

'use strict';

// ==========================================
// INTERNATIONALIZATION (English & Polish)
// ==========================================
const I18N = {
  en: {
    appTitle: 'CapyCards',
    capyMessageBadge: 'Capy says 🐾',
    capyQuote: '"Take your time. A little bit every day."',
    due: 'Due', new: 'New', total: 'Total', learning: 'Learning',
    allLanguages: 'All', langJa: 'Japanese', langKo: 'Korean', langEn: 'English', other: 'Other',
    noDecks: 'No decks yet',
    noDecksHint: 'Import a deck or load our starter language decks',
    loadSamples: 'Load Starter Decks', starterDecks: 'Starter Language Decks',
    starterDecksHint: 'Load pre-built beginner decks for Japanese, Korean, and English to test multiple choice and audio.',
    samplesLoaded: 'Starter decks loaded: Japanese, Korean, and English! 🚀',
    createDeck: 'Create New Deck', deckName: 'Deck Name',
    deckNamePlaceholder: 'e.g., Japanese N5 Vocabulary',
    targetLanguage: 'Target Language',
    importDeck: 'Import File', exportDeck: '📤 Export Deck',
    exportTxt: '📄 Export as TXT', renameDeck: '✏️ Rename Deck', deleteDeck: '🗑️ Delete Deck',
    studyNow: 'Study Now', allDone: '✅ All done for today!',
    studyMode: 'Study Mode', flipMode: 'Flip', quizMode: 'Quiz',
    quizDirection: 'Quiz Direction', dirFrontToBack: 'Word → Meaning', dirBackToFront: 'Meaning → Word',
    dailyNewGoal: 'Daily New Words', dailyGoalHint: 'Target words to learn per day',
    tapForWisdom: 'Tap Capy for more wisdom 🐾',
    cards: 'Cards', progressLevelsShown: 'SRS memory levels preserved',
    addCard: '+ Add Card', editCard: 'Edit Card',
    frontLabel: 'Front (Question)', backLabel: 'Back (Answer)',
    frontPlaceholder: 'e.g., 猫[ねこ] or Cat', backPlaceholder: 'e.g., Cat — a domesticated feline',
    furiganaHint: 'Furigana: 漢字[かんじ]',
    imageOptional: 'Image (optional)', tapToAdd: 'Tap to add image',
    remove: 'Remove', save: 'Save', cancel: 'Cancel',
    create: 'Create', rename: 'Rename', delete: 'Delete', confirm: 'Confirm',
    settings: 'Settings', uiLanguage: 'Interface Language',
    theme: 'App Theme', darkTheme: 'Dark (Stone & Chestnut)', lightTheme: 'Light (Warm Linen & Cream)',
    themeChanged: (t) => `${t === 'light' ? '☀️ Light' : '🌙 Dark'} theme enabled!`,
    safeProgressTitle: 'Safe Progress File (PC ⇄ iPhone)',
    safeBadge: 'Safe Sync',
    safeProgressDesc: 'Saves your exact SRS memory levels, intervals, and repetitions. Uploading new files or updated decks will NEVER erase your progress because cards are matched safely by word.',
    exportProgress: '🛡️ Export Safe Progress', importProgress: '📥 Restore Progress',
    fullBackup: 'Full Backup',
    backupHint: 'Export everything — all decks, cards, images, and progress — in a single file.',
    exportAll: '📤 Export All', importAll: '📥 Import All',
    srsSettings: 'SRS Settings',
    newPerDay: 'New cards per day', maxReviews: 'Max reviews per day',
    dangerZone: 'Danger Zone', resetAll: 'Reset All Data',
    aboutSub: 'Anki-like spaced repetition for language learning · Safe Cross-Device Sync',
    showAnswer: 'Show Answer', pronounce: 'Pronounce', listen: 'Listen',
    translationTitle: 'Translation', exampleSentenceTitle: 'Exemplary Sentence', imageTitle: 'Illustration',
    meaningNuance: 'MEANING & NUANCE', exampleSentenceUpper: 'EXAMPLE SENTENCE',
    cardAnswerHint: 'Answer · Tap to flip back',
    again: 'Again', hard: 'Hard', good: 'Good', easy: 'Easy',
    sessionComplete: 'Session Complete!',
    reviewedStats: (n) => `You reviewed ${n} card${n !== 1 ? 's' : ''} this session. Great work! 🎯`,
    backToDeck: 'Back to Deck',
    noCards: 'No cards yet', noCardsHint: 'Add cards manually or import a text/JSON file',
    deleteCardConfirm: 'Are you sure you want to delete this card? Progress will be lost.',
    deleteDeckConfirm: 'This will delete the deck and all its cards. Progress data for these cards will also be removed.',
    resetConfirm: 'This will permanently delete ALL decks, cards, and progress. This cannot be undone!',
    importTxtTitle: 'Import Text File (Anki)',
    importTxtHint: 'Supports Anki format: Tab, Semicolon, Comma, or Pipe. Multi-line and images supported.',
    mergeOption: 'Existing deck found: Progress will be safely preserved! Only new words will be added.',
    separator: 'Separator', preview: 'Preview', importBtn: 'Import',
    correct: 'Correct! ✓', incorrect: 'Wrong ✗',
    card: 'card', cardPlural: 'cards',
    level: 'Lvl',
    importedJson: (name, n, u) => `Imported "${name}": ${n} new cards, ${u} existing cards kept safe!`,
    importedTxt: (name, n, u) => `"${name}": ${n} new cards added, ${u} cards safely preserved with progress!`,
    progressExported: 'Safe Progress File exported! Transfer this file to your other device.',
    progressRestored: (m, t) => `Progress restored safely! Matched ${m}/${t} cards across your decks.`,
    backupExported: 'Full backup exported!', backupRestored: (d, c) => `Restored ${d} deck(s) and ${c} cards!`,
    deckCreated: 'Deck created!', deckRenamed: 'Deck renamed', deckDeleted: 'Deck deleted',
    cardAdded: 'Card added', cardUpdated: 'Card updated', cardDeleted: 'Card deleted',
    nameRequired: 'Name is required', frontBackRequired: 'Front and back are required',
    imageTooLarge: 'Image too large (max 5MB)', importFailed: 'Import failed',
    txtNoCards: 'No valid card lines found in the file.',
  },
  pl: {
    appTitle: 'CapyCards',
    capyMessageBadge: 'Capy mówi 🐾',
    capyQuote: '"Spokojnie, krok po kroku każdego dnia."',
    due: 'Do powtórki', new: 'Nowe', total: 'Razem', learning: 'W nauce',
    allLanguages: 'Wszystkie', langJa: 'Japoński', langKo: 'Koreański', langEn: 'Angielski', other: 'Inny',
    noDecks: 'Brak talii',
    noDecksHint: 'Zaimportuj plik lub załaduj nasze talie startowe',
    loadSamples: 'Załaduj talie startowe', starterDecks: 'Talie startowe do nauki',
    starterDecksHint: 'Załaduj gotowe talie dla początkujących: japoński, koreański i angielski, aby przetestować quiz i wymowę.',
    samplesLoaded: 'Załadowano talie startowe: japoński, koreański i angielski! 🚀',
    createDeck: 'Stwórz nową talię', deckName: 'Nazwa talii',
    deckNamePlaceholder: 'np. Japońskie słówka N5',
    targetLanguage: 'Język docelowy',
    importDeck: 'Importuj plik', exportDeck: '📤 Eksportuj talię',
    exportTxt: '📄 Eksportuj jako TXT', renameDeck: '✏️ Zmień nazwę', deleteDeck: '🗑️ Usuń talię',
    studyNow: 'Ucz się teraz', allDone: '✅ Wszystko na dziś zrobione!',
    studyMode: 'Tryb nauki', flipMode: 'Fiszki', quizMode: 'Quiz',
    quizDirection: 'Kierunek quizu', dirFrontToBack: 'Słowo → Znaczenie', dirBackToFront: 'Znaczenie → Słowo',
    dailyNewGoal: 'Dzienne nowe słowa', dailyGoalHint: 'Liczba słów do nauki dziennie z tej talii',
    tapForWisdom: 'Dotknij Capy po nową myśl 🐾',
    cards: 'Karty', progressLevelsShown: 'Poziomy pamięci SRS zachowane',
    addCard: '+ Dodaj kartę', editCard: 'Edytuj kartę',
    frontLabel: 'Przód (Pytanie)', backLabel: 'Tył (Odpowiedź)',
    frontPlaceholder: 'np. 猫[ねこ] lub Słowo', backPlaceholder: 'np. Kot — zwierzę domowe',
    furiganaHint: 'Furigana: 漢字[かんじ]',
    imageOptional: 'Obrazek (opcjonalnie)', tapToAdd: 'Kliknij aby dodać obrazek',
    remove: 'Usuń', save: 'Zapisz', cancel: 'Anuluj',
    create: 'Stwórz', rename: 'Zmień', delete: 'Usuń', confirm: 'Potwierdź',
    settings: 'Ustawienia', uiLanguage: 'Język interfejsu',
    theme: 'Motyw aplikacji', darkTheme: 'Ciemny (Kamień i Kasztan)', lightTheme: 'Jasny (Ciepły Len i Krem)',
    themeChanged: (t) => `Włączono motyw ${t === 'light' ? '☀️ Jasny' : '🌙 Ciemny'}!`,
    safeProgressTitle: 'Bezpieczny plik postępu (PC ⇄ iPhone)',
    safeBadge: 'Bezpieczna synchronizacja',
    safeProgressDesc: 'Zapisuje dokładne poziomy SRS, interwały i powtórki. Wgrywanie nowych plików lub aktualizowanych talii NIGDY nie skasuje postępów, bo karty są dopasowywane bezpiecznie po słowie.',
    exportProgress: '🛡️ Eksportuj bezpieczny postęp', importProgress: '📥 Przywróć postęp',
    fullBackup: 'Pełna kopia',
    backupHint: 'Eksportuj wszystko — talie, karty, obrazki i postęp — w jednym pliku.',
    exportAll: '📤 Eksportuj wszystko', importAll: '📥 Importuj wszystko',
    srsSettings: 'Ustawienia SRS',
    newPerDay: 'Nowe karty dziennie', maxReviews: 'Maks. powtórek dziennie',
    dangerZone: 'Strefa zagrożenia', resetAll: 'Wyczyść wszystkie dane',
    aboutSub: 'Spokojna nauka języków w stylu Anki · Bezpieczna synchronizacja',
    showAnswer: 'Pokaż odpowiedź', pronounce: 'Wymowa', listen: 'Słuchaj',
    translationTitle: 'Tłumaczenie', exampleSentenceTitle: 'Przykładowe zdanie', imageTitle: 'Ilustracja',
    meaningNuance: 'ZNACZENIE I NIUANS', exampleSentenceUpper: 'PRZYKŁADOWE ZDANIE',
    cardAnswerHint: 'Odpowiedź · Dotknij, aby odwrócić',
    again: 'Powtórz', hard: 'Trudne', good: 'Dobrze', easy: 'Łatwe',
    sessionComplete: 'Sesja zakończona!',
    reviewedStats: (n) => `Powtórzyłeś ${n} kart${n === 1 ? 'ę' : (n < 5 ? 'y' : '')} w tej sesji. Świetna robota! 🎯`,
    backToDeck: 'Wróć do talii',
    noCards: 'Brak kart', noCardsHint: 'Dodaj karty ręcznie lub zaimportuj plik TXT/JSON',
    deleteCardConfirm: 'Czy na pewno chcesz usunąć tę kartę? Postęp zostanie utracony.',
    deleteDeckConfirm: 'To usunie talię i wszystkie jej karty. Postęp dla tych kart również zostanie usunięty.',
    resetConfirm: 'To permanentnie usunie WSZYSTKIE talie, karty i postęp. Tego nie można cofnąć!',
    importTxtTitle: 'Importuj plik tekstowy (Anki)',
    importTxtHint: 'Obsługuje format Anki: Tabulator, Średnik, Przecinek, Pipe. Multi-line i obrazki wspierane.',
    mergeOption: 'Znaleziono istniejącą talię: Postęp zostanie bezpiecznie zachowany! Zostaną dodane tylko nowe słówka.',
    separator: 'Separator', preview: 'Podgląd', importBtn: 'Importuj',
    correct: 'Dobrze! ✓', incorrect: 'Źle ✗',
    card: 'karta', cardPlural: 'kart',
    level: 'Poz.',
    importedJson: (name, n, u) => `Zaimportowano „${name}": ${n} nowych kart, ${u} istniejących bezpiecznie zachowanych!`,
    importedTxt: (name, n, u) => `„${name}": ${n} nowych kart dodanych, ${u} kart zachowanych z postępem!`,
    progressExported: 'Bezpieczny plik postępu wyeksportowany! Prześlij ten plik na drugi telefon/PC.',
    progressRestored: (m, t) => `Postęp bezpiecznie przywrócony! Dopasowano ${m}/${t} kart w Twoich taliach.`,
    backupExported: 'Pełna kopia wyeksportowana!', backupRestored: (d, c) => `Przywrócono ${d} talii i ${c} kart!`,
    deckCreated: 'Talia stworzona!', deckRenamed: 'Nazwa zmieniona', deckDeleted: 'Talia usunięta',
    cardAdded: 'Karta dodana', cardUpdated: 'Karta zaktualizowana', cardDeleted: 'Karta usunięta',
    nameRequired: 'Nazwa jest wymagana', frontBackRequired: 'Przód i tył są wymagane',
    imageTooLarge: 'Obrazek za duży (maks. 5MB)', importFailed: 'Import nieudany',
    txtNoCards: 'Nie znaleziono poprawnych linii z kartami w pliku.',
  }
};

let currentLang = 'en';

function t(key) {
  return I18N[currentLang]?.[key] || I18N.en[key] || key;
}

function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (typeof val === 'string') el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
  // Update settings language chips
  document.querySelectorAll('#settings-lang-chips .chip').forEach(c => {
    c.classList.toggle('active', c.dataset.uiLang === currentLang);
  });
  // Update settings theme chips
  document.querySelectorAll('#settings-theme-chips .chip').forEach(c => {
    c.classList.toggle('active', c.dataset.themeVal === (App.currentTheme || 'dark'));
  });
}

// ==========================================
// CONSTANTS & SRS CONFIG (SM-2 Algorithm)
// ==========================================
const DB_NAME = 'FlashMasterDB';
const DB_VERSION = 3;
const CARD_STATES = { NEW: 'new', LEARNING: 'learning', REVIEW: 'review' };
const RATINGS = { AGAIN: 1, HARD: 2, GOOD: 3, EASY: 4 };

const LANG_CONFIG = {
  ja: { flag: '🇯🇵', name: 'Japanese', voice: 'ja-JP', sampleDeck: 'Japanese Core 🇯🇵' },
  ko: { flag: '🇰🇷', name: 'Korean', voice: 'ko-KR', sampleDeck: 'Korean Core 🇰🇷' },
  en: { flag: '🇬🇧', name: 'English', voice: 'en-US', sampleDeck: 'English Idioms & Vocab 🇬🇧' },
  other: { flag: '🌐', name: 'Other', voice: 'en-US', sampleDeck: null }
};

const SRS_DEFAULTS = {
  learningSteps: [1, 10],       // minutes
  graduatingInterval: 1,         // days
  easyInterval: 4,               // days
  startingEase: 2.5,
  minimumEase: 1.3,
  easeBonus: 0.15,
  hardMultiplier: 1.2,
  easyMultiplier: 1.3,
  lapseInterval: 0.5,            // 12 hours
  maxInterval: 365 * 5,          // 5 years
  newPerDay: 20,
  maxReviews: 200,
};

// ==========================================
// UTILITY FUNCTIONS
// ==========================================
function uuid() {
  return 'card_' + Math.random().toString(36).substring(2, 9) + Date.now().toString(36);
}

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(36);
}

function normalizeKey(str) {
  return (str || '').trim().toLowerCase().replace(/\s+/g, ' ');
}

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function formatInterval(days) {
  if (days < 1 / 24 / 60) return '<1m';
  if (days < 1 / 24) return Math.round(days * 24 * 60) + 'm';
  if (days < 1) return Math.round(days * 24) + 'h';
  if (days < 30) return Math.round(days) + 'd';
  if (days < 365) return Math.round(days / 30) + 'mo';
  return (days / 365).toFixed(1) + 'y';
}

function escapeHtml(s) {
  const d = document.createElement('div');
  d.textContent = s || '';
  return d.innerHTML;
}

// Convert bracketed furigana: 漢字[かんじ] -> <ruby>漢字<rt>かんじ</rt></ruby>
function renderFurigana(text) {
  if (!text) return '';
  const escaped = escapeHtml(text);
  // Match patterns like: 漢字[かんじ] or 私[わたし]
  return escaped.replace(/([^\x00-\x7F\s]+)\[([^\]]+)\]/g, '<ruby>$1<rt>$2</rt></ruby>');
}

// Clean text for text-to-speech audio across Korean, Japanese, English, Polish
function cleanTextForSpeech(text) {
  if (!text) return '';
  let str = text;
  // If Japanese bracketed furigana exists: 漢字[かんじ] -> use kana reading かんじ!
  str = str.replace(/([^\x00-\x7F\s]+)\[([^\]]+)\]/g, '$2');
  // Strip ruby tags
  str = str.replace(/<rt>[^<]*<\/rt>/gi, '').replace(/<[^>]+>/g, '');
  // Strip parenthetical translations/romanization: e.g. " (gada)" or " (I eat...)"
  str = str.replace(/\([^)]*\)/g, ' ');
  // Strip any remaining brackets: [VERB · BASIC 1]
  str = str.replace(/\[[^\]]*\]/g, ' ');
  // Strip emojis
  str = str.replace(/[\p{Extended_Pictographic}\uFE0F\u200D\u200E\u200F\u2600-\u27BF]/gu, ' ');
  // Strip special symbols
  str = str.replace(/[~·•|★☆→←_]/g, ' ');
  return str.replace(/\s+/g, ' ').trim();
}

// Filter bilingual strings to keep ONLY the selected UI language:
// - English version: ONLY English input
// - Polish version: ONLY Polish input
function filterByUiLang(text, lang = currentLang) {
  if (!text) return '';
  let str = text.trim();

  // Strip trailing whitespace, emojis, and variation selectors, but remember them to reattach
  const emojiRegex = /[\p{Extended_Pictographic}\uFE0F\u200D\u200E\u200F\u2600-\u27BF\s]+$/u;
  const match = str.match(emojiRegex);
  let emoji = '';
  let core = str;
  if (match && match.index > 0) {
    emoji = ' ' + match[0].trim();
    core = str.slice(0, match.index).trim();
  }

  // Check for Pattern A: Ends with (Polish...)
  // E.g. "To eat (Jeść)" -> en: "To eat", pl: "Jeść"
  // E.g. "Goodbye (to someone staying) (Do widzenia - do zostającego)"
  // E.g. "To see / To watch (Widzieć / Oglądać)"
  const lastParenMatch = core.match(/^(.*?)\s*[(（]([^()（）]+)[)）]$/);
  if (lastParenMatch) {
    const englishPart = lastParenMatch[1].trim();
    const polishPart = lastParenMatch[2].trim();

    if (englishPart && polishPart) {
      return (lang === 'pl' ? polishPart : englishPart) + emoji;
    }
  }

  // Check for Pattern B: Slash separated "English / Polish"
  // E.g. "I eat bread every morning. / Każdego ranka jem chleb."
  if (core.includes(' / ')) {
    const parts = core.split(' / ');
    if (parts.length >= 2) {
      const hasPl0 = /[ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/.test(parts[0]);
      const hasPl1 = /[ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/.test(parts[parts.length - 1]);
      if (!hasPl0 && hasPl1) {
        return (lang === 'pl' ? parts[parts.length - 1].trim() : parts[0].trim()) + emoji;
      }
      if (!hasPl0 && parts[0].length > 10) {
        return (lang === 'pl' ? parts[parts.length - 1].trim() : parts[0].trim()) + emoji;
      }
    }
  }

  return str;
}

// Parse card back into separate structured windows:
// 1. Translation (Filtered strictly to UI language: English vs Polish)
// 2. Exemplary sentence (target language sentence + translation filtered to UI language)
function parseCardBack(backText, lang = currentLang) {
  if (!backText) return { translation: '', sentenceTarget: '', sentenceTrans: '', levelTag: '' };

  let raw = backText.trim();
  let levelTag = '';
  const levelMatch = raw.match(/\[([A-Z]+)\s*[·•]\s*BASIC\s*([123])\]/i);
  if (levelMatch) {
    levelTag = levelMatch[0].trim();
    raw = raw.replace(levelMatch[0], '').trim();
  }

  let rawTrans = raw;
  let rawSentenceTarget = '';
  let rawSentenceTrans = '';

  // Pattern A: Explicit marker e.g., "\n例文: ...", "\n예문: ...", "\nExample: ...", "\nPrzykład: ..."
  const markerRegex = /(?:\r?\n)+(?:例文\s*[:：]|예문\s*[:：]|Example\s*[:：]|Przykład\s*[:：]|Ex\s*[:：])/i;
  if (markerRegex.test(raw)) {
    const parts = raw.split(markerRegex);
    rawTrans = (parts[0] || '').trim();
    const sentencePart = (parts[1] || '').trim();

    // Match Sentence (translation)
    const parenIdx = sentencePart.indexOf('(');
    const lastParenIdx = sentencePart.lastIndexOf(')');
    if (parenIdx !== -1 && lastParenIdx > parenIdx) {
      rawSentenceTarget = sentencePart.slice(0, parenIdx).trim();
      rawSentenceTrans = sentencePart.slice(parenIdx + 1, lastParenIdx).trim();
    } else {
      rawSentenceTarget = sentencePart;
    }
  } else {
    // Pattern B: Delimited by newlines (Line 1: Translation, Line 2+: Exemplary Sentence)
    const lines = raw.split(/\r?\n+/).map(l => l.trim()).filter(Boolean);
    if (lines.length > 1) {
      rawTrans = lines[0];
      const sentencePart = lines.slice(1).join(' ').trim();
      const parenIdx = sentencePart.indexOf('(');
      const lastParenIdx = sentencePart.lastIndexOf(')');
      if (parenIdx !== -1 && lastParenIdx > parenIdx) {
        rawSentenceTarget = sentencePart.slice(0, parenIdx).trim();
        rawSentenceTrans = sentencePart.slice(parenIdx + 1, lastParenIdx).trim();
      } else {
        rawSentenceTarget = sentencePart;
      }
    } else if (raw.includes(' · ')) {
      // Pattern C: Single line with " · " delimiter
      const dotParts = raw.split(' · ');
      rawTrans = dotParts[0].trim();
      rawSentenceTarget = dotParts.slice(1).join(' · ').trim();
    }
  }

  // Filter translation and sentence translation according to UI language:
  // English version: ONLY English input
  // Polish version: ONLY Polish input
  const translation = filterByUiLang(rawTrans, lang);
  const sentenceTrans = filterByUiLang(rawSentenceTrans, lang);

  return { translation, sentenceTarget: rawSentenceTarget, sentenceTrans, levelTag };
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.random() * (i + 1) | 0;
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ==========================================
// ROBUST LANGUAGE DETECTION & ISOLATION
// ==========================================
function detectDeckLanguage(deck, cards = []) {
  if (!deck) return 'other';
  const name = (deck.name || '').toLowerCase();

  // 1. Explicit Deck Name Markers (Highest confidence for curated decks)
  const hasJaName = /japanese|japan|japońsk|japonsk|nihongo|🇯🇵|日本語|\bn[1-5]\b/i.test(name);
  const hasKoName = /korean|korea|koreańsk|koreansk|hangul|topik|🇰🇷|한국어/i.test(name);
  const hasEnName = /english|angielsk|angiel|cefr|🇬🇧|\ba[1-2]\b|\bb[1-2]\b/i.test(name);

  if (hasKoName && !hasJaName && !hasEnName) return 'ko';
  if (hasJaName && !hasKoName && !hasEnName) return 'ja';
  if (hasEnName && !hasJaName && !hasKoName) return 'en';

  // 2. Script Analysis of Front & Back of Cards
  let koChars = 0;
  let jaChars = 0;
  let enChars = 0;

  for (const c of cards) {
    const front = c.front || '';
    const back = c.back || '';
    // Hangul (Korean syllables & jamo)
    const koMatch = (front + ' ' + back).match(/[\uac00-\ud7af\u1100-\u11ff\u3130-\u318f]/g);
    if (koMatch) koChars += koMatch.length;
    // Japanese Kana (Hiragana & Katakana) or Furigana brackets
    const jaMatch = (front + ' ' + back).match(/[\u3040-\u30ff]|\[[\u3040-\u30ff]+\]/g);
    if (jaMatch) jaChars += jaMatch.length;
    // English/Latin alphabet in front
    const enMatch = front.match(/[a-zA-Z]/g);
    if (enMatch) enChars += enMatch.length;
  }

  // Strong script signal
  if (koChars > 0 && koChars >= jaChars) return 'ko';
  if (jaChars > 0 && jaChars > koChars) return 'ja';

  // 3. Explicit Deck Target Language (if valid)
  if (deck.targetLang && ['ja', 'ko', 'en'].includes(deck.targetLang)) {
    return deck.targetLang;
  }

  // 4. Default Latin fallback if cards have Latin text
  if (enChars > 0) return 'en';

  return 'other';
}

// ==========================================
// AUDIO TEXT-TO-SPEECH (TTS)
// ==========================================
const Speech = {
  synth: typeof window !== 'undefined' ? (window.speechSynthesis || null) : null,
  cachedVoices: [],
  isSpeaking: false,
  fallbackAudio: null,

  init() {
    if (!Speech.synth) return;
    Speech.loadVoices();
    if (typeof Speech.synth.onvoiceschanged !== 'undefined') {
      Speech.synth.onvoiceschanged = () => Speech.loadVoices();
    }
  },

  loadVoices() {
    if (!Speech.synth) return [];
    try {
      const v = Speech.synth.getVoices();
      if (v && v.length) {
        Speech.cachedVoices = v;
      }
      return Speech.cachedVoices;
    } catch (e) {
      return [];
    }
  },

  findBestVoice(voiceLang) {
    const voices = Speech.loadVoices();
    if (!voices || !voices.length) return null;

    const code = (voiceLang || 'en-US').toLowerCase().replace('_', '-');
    const prefix = code.split('-')[0]; // 'ko', 'ja', 'en', 'pl'

    // Priority 1: Exact match with Natural/Online/Neural
    let match = voices.find(v => v.lang.toLowerCase().replace('_', '-') === code && /natural|online|neural|premium/i.test(v.name));
    if (match) return match;

    // Priority 2: Prefix match with Natural/Online/Neural
    match = voices.find(v => v.lang.toLowerCase().startsWith(prefix) && /natural|online|neural|premium/i.test(v.name));
    if (match) return match;

    // Priority 3: Exact language match
    match = voices.find(v => v.lang.toLowerCase().replace('_', '-') === code);
    if (match) return match;

    // Priority 4: Prefix match
    match = voices.find(v => v.lang.toLowerCase().startsWith(prefix));
    if (match) return match;

    return null;
  },

  speak(text, langCode = 'ko', onEnd = null) {
    const clean = cleanTextForSpeech(text);
    if (!clean) {
      if (onEnd) onEnd();
      return;
    }

    // Auto-detect language if Hangul or Kana or Polish is present
    let detectedLang = langCode;
    if (/[\uac00-\ud7af]/.test(clean)) detectedLang = 'ko';
    else if (/[\u3040-\u30ff\u4e00-\u9faf]/.test(clean)) detectedLang = 'ja';
    else if (/[ąćęłńóśźż]/i.test(clean)) detectedLang = 'pl';

    const voiceLang = LANG_CONFIG[detectedLang]?.voice || (detectedLang === 'ko' ? 'ko-KR' : detectedLang === 'ja' ? 'ja-JP' : detectedLang === 'pl' ? 'pl-PL' : 'en-US');

    // 1. Try Web Speech API (Local & Natural voices)
    if (Speech.synth) {
      try {
        if (Speech.synth.paused) {
          Speech.synth.resume();
        }
        // Only cancel previous speech if currently active to prevent Chromium bug
        if (Speech.synth.speaking) {
          Speech.synth.cancel();
        }

        const utterance = new SpeechSynthesisUtterance(clean);
        utterance.lang = voiceLang;
        utterance.rate = 0.88; // clear, comfortable pace for learners

        const bestVoice = Speech.findBestVoice(voiceLang);
        if (bestVoice) {
          utterance.voice = bestVoice;
        }

        // Keep reference on Speech to prevent garbage-collection
        Speech._activeUtterance = utterance;

        let hasFinished = false;
        const done = () => {
          if (hasFinished) return;
          hasFinished = true;
          Speech.isSpeaking = false;
          Speech._activeUtterance = null;
          if (onEnd) onEnd();
        };

        utterance.onstart = () => {
          Speech.isSpeaking = true;
        };
        utterance.onend = done;
        utterance.onerror = (e) => {
          console.warn('SpeechSynthesis error:', e.error, 'Falling back to audio stream...');
          done();
          Speech.speakFallback(clean, detectedLang, onEnd);
        };

        // iOS Safari safeguard: clear hanging state if onend is skipped
        setTimeout(() => {
          if (Speech.isSpeaking && !hasFinished) {
            done();
          }
        }, Math.max(3000, clean.length * 280));

        // Speak immediately within user-gesture callstack (no setTimeout) to avoid losing user activation on iOS
        try {
          Speech.synth.speak(utterance);
        } catch (e) {
          Speech.speakFallback(clean, detectedLang, onEnd);
        }
        return;
      } catch (e) {
        console.warn('SpeechSynthesis exception:', e);
      }
    }

    // 2. Fallback to HTML5 Audio Stream if Web Speech is blocked/unavailable
    Speech.speakFallback(clean, detectedLang, onEnd);
  },

  speakFallback(text, langCode, onEnd = null) {
    try {
      if (Speech.fallbackAudio) {
        Speech.fallbackAudio.pause();
        Speech.fallbackAudio = null;
      }
      const tl = (langCode || 'ko').split('-')[0];
      const encoded = encodeURIComponent(text.slice(0, 120));
      const url = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=${tl}&q=${encoded}`;
      const audio = new Audio(url);
      Speech.fallbackAudio = audio;
      Speech.isSpeaking = true;

      const finish = () => {
        Speech.fallbackAudio = null;
        Speech.isSpeaking = false;
        if (onEnd) onEnd();
      };
      audio.onended = finish;
      audio.onerror = finish;
      audio.play().catch(finish);
    } catch (e) {
      Speech.isSpeaking = false;
      if (onEnd) onEnd();
    }
  }
};
window.Speech = Speech;

// ==========================================
// DATABASE (IndexedDB)
// ==========================================
const DB = {
  db: null,

  async open() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = e => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains('decks')) {
          db.createObjectStore('decks', { keyPath: 'id' });
        }
        if (!db.objectStoreNames.contains('cards')) {
          const s = db.createObjectStore('cards', { keyPath: 'id' });
          s.createIndex('deckId', 'deckId', { unique: false });
        }
        if (!db.objectStoreNames.contains('progress')) {
          db.createObjectStore('progress', { keyPath: 'cardId' });
        }
        if (!db.objectStoreNames.contains('settings')) {
          db.createObjectStore('settings', { keyPath: 'key' });
        }
      };
      req.onsuccess = e => { DB.db = e.target.result; resolve(DB.db); };
      req.onerror = e => reject(e.target.error);
    });
  },

  _tx(storeName, mode = 'readonly') {
    return DB.db.transaction(storeName, mode).objectStore(storeName);
  },

  _req(store, method, ...args) {
    return new Promise((res, rej) => {
      const r = store[method](...args);
      r.onsuccess = () => res(r.result);
      r.onerror = () => rej(r.error);
    });
  },

  // Decks
  async addDeck(d) { return DB._req(DB._tx('decks', 'readwrite'), 'put', d); },
  async updateDeck(d) { return DB.addDeck(d); },
  async getDeck(id) { return DB._req(DB._tx('decks'), 'get', id); },
  async getAllDecks() { return DB._req(DB._tx('decks'), 'getAll'); },
  async deleteDeck(id) { return DB._req(DB._tx('decks', 'readwrite'), 'delete', id); },

  // Cards
  async addCard(c) { return DB._req(DB._tx('cards', 'readwrite'), 'put', c); },
  async updateCard(c) { return DB.addCard(c); },
  async getCard(id) { return DB._req(DB._tx('cards'), 'get', id); },
  async getCardsByDeck(deckId) {
    return new Promise((res, rej) => {
      const r = DB._tx('cards').index('deckId').getAll(deckId);
      r.onsuccess = () => res(r.result || []);
      r.onerror = () => rej(r.error);
    });
  },
  async deleteCard(id) { return DB._req(DB._tx('cards', 'readwrite'), 'delete', id); },
  async deleteCardsByDeck(deckId) {
    const cards = await DB.getCardsByDeck(deckId);
    const s = DB._tx('cards', 'readwrite');
    cards.forEach(c => s.delete(c.id));
  },

  // Progress (Safe SRS Progress Store)
  async getProgress(cardId) { return DB._req(DB._tx('progress'), 'get', cardId); },
  async setProgress(p) { return DB._req(DB._tx('progress', 'readwrite'), 'put', p); },
  async getAllProgress() { return DB._req(DB._tx('progress'), 'getAll'); },
  async deleteProgress(id) { return DB._req(DB._tx('progress', 'readwrite'), 'delete', id); },

  // Settings
  async getSetting(key) {
    const r = await DB._req(DB._tx('settings'), 'get', key);
    return r ? r.value : undefined;
  },
  async setSetting(key, value) {
    return DB._req(DB._tx('settings', 'readwrite'), 'put', { key, value });
  },

  // Full clear
  async clearAll() {
    const tx = DB.db.transaction(['decks', 'cards', 'progress', 'settings'], 'readwrite');
    ['decks', 'cards', 'progress', 'settings'].forEach(s => tx.objectStore(s).clear());
    return new Promise((res, rej) => {
      tx.oncomplete = res;
      tx.onerror = () => rej(tx.error);
    });
  }
};
window.DB = DB;

// ==========================================
// SRS ENGINE (SM-2 SuperMemo Algorithm)
// ==========================================
const SRS = {
  createProgress(cardId) {
    return {
      cardId,
      state: CARD_STATES.NEW,
      interval: 0,
      ease: SRS_DEFAULTS.startingEase,
      repetitions: 0,
      lapses: 0,
      learningStep: 0,
      dueDate: todayStr(),
      lastReview: null,
    };
  },

  processRating(progress, rating) {
    const p = { ...progress };
    p.lastReview = new Date().toISOString();
    const now = new Date();

    if (p.state === CARD_STATES.NEW || p.state === CARD_STATES.LEARNING) {
      p.state = CARD_STATES.LEARNING;
      if (rating === RATINGS.AGAIN) {
        p.learningStep = 0;
        p.dueDate = SRS._addMin(now, SRS_DEFAULTS.learningSteps[0]);
      } else if (rating === RATINGS.HARD) {
        const step = SRS_DEFAULTS.learningSteps[p.learningStep] || SRS_DEFAULTS.learningSteps[0];
        p.dueDate = SRS._addMin(now, step);
      } else if (rating === RATINGS.GOOD) {
        p.learningStep++;
        if (p.learningStep >= SRS_DEFAULTS.learningSteps.length) {
          // Graduate to Review
          p.state = CARD_STATES.REVIEW;
          p.interval = SRS_DEFAULTS.graduatingInterval;
          p.repetitions = 1;
          p.dueDate = SRS._addDay(now, p.interval);
        } else {
          p.dueDate = SRS._addMin(now, SRS_DEFAULTS.learningSteps[p.learningStep]);
        }
      } else if (rating === RATINGS.EASY) {
        // Graduate directly
        p.state = CARD_STATES.REVIEW;
        p.interval = SRS_DEFAULTS.easyInterval;
        p.ease = Math.max(SRS_DEFAULTS.minimumEase, p.ease + SRS_DEFAULTS.easeBonus);
        p.repetitions = 1;
        p.dueDate = SRS._addDay(now, p.interval);
      }
    } else {
      // CARD_STATES.REVIEW
      if (rating === RATINGS.AGAIN) {
        p.lapses++;
        p.state = CARD_STATES.LEARNING;
        p.learningStep = 0;
        p.ease = Math.max(SRS_DEFAULTS.minimumEase, p.ease - 0.20);
        p.interval = Math.max(SRS_DEFAULTS.lapseInterval, p.interval * 0.2);
        p.dueDate = SRS._addMin(now, SRS_DEFAULTS.learningSteps[0]);
      } else if (rating === RATINGS.HARD) {
        p.ease = Math.max(SRS_DEFAULTS.minimumEase, p.ease - 0.15);
        p.interval = Math.min(SRS_DEFAULTS.maxInterval, p.interval * SRS_DEFAULTS.hardMultiplier);
        p.repetitions++;
        p.dueDate = SRS._addDay(now, p.interval);
      } else if (rating === RATINGS.GOOD) {
        p.interval = Math.min(SRS_DEFAULTS.maxInterval, p.interval * p.ease);
        p.repetitions++;
        p.dueDate = SRS._addDay(now, p.interval);
      } else if (rating === RATINGS.EASY) {
        p.ease = Math.max(SRS_DEFAULTS.minimumEase, p.ease + SRS_DEFAULTS.easeBonus);
        p.interval = Math.min(SRS_DEFAULTS.maxInterval, p.interval * p.ease * SRS_DEFAULTS.easyMultiplier);
        p.repetitions++;
        p.dueDate = SRS._addDay(now, p.interval);
      }
    }
    return p;
  },

  previewRatings(progress) {
    const r = {};
    for (const [name, rating] of Object.entries(RATINGS)) {
      const pv = SRS.processRating(progress, rating);
      if (pv.state === CARD_STATES.LEARNING || pv.state === CARD_STATES.NEW) {
        const step = SRS_DEFAULTS.learningSteps[pv.learningStep] || SRS_DEFAULTS.learningSteps[0];
        r[name] = formatInterval(step / (24 * 60));
      } else {
        r[name] = formatInterval(pv.interval);
      }
    }
    return r;
  },

  formatProgressLevel(progress) {
    if (!progress || progress.state === CARD_STATES.NEW) {
      return { text: t('new'), cls: 'status-new' };
    }
    if (progress.state === CARD_STATES.LEARNING) {
      return { text: `${t('learning')} (${progress.learningStep + 1}/2)`, cls: 'status-learning' };
    }
    // Review Level
    const days = Math.round(progress.interval);
    const easePct = Math.round(progress.ease * 100);
    return {
      text: `${t('level')} ${progress.repetitions} (${formatInterval(days)}, ${easePct}%)`,
      cls: 'status-review'
    };
  },

  isDue(p) {
    if (!p || p.state === CARD_STATES.NEW) return true;
    return new Date(p.dueDate) <= new Date();
  },

  _addMin(d, m) { return new Date(d.getTime() + m * 60000).toISOString(); },
  _addDay(d, days) { return new Date(d.getTime() + days * 86400000).toISOString().slice(0, 10); }
};

// ==========================================
// TXT & ANKI PARSER
// ==========================================
const TxtParser = {
  detectSeparator(text) {
    const lines = text.split(/\r?\n/).filter(l => l.trim() && !l.startsWith('#'));
    if (lines.length === 0) return '\t';
    const counts = { '\t': 0, ';': 0, ',': 0, '|': 0 };
    for (const line of lines.slice(0, 15)) {
      for (const sep of Object.keys(counts)) {
        if (line.includes(sep)) counts[sep]++;
      }
    }
    let best = '\t', maxCount = 0;
    for (const [sep, count] of Object.entries(counts)) {
      if (count > maxCount) { best = sep; maxCount = count; }
    }
    return best;
  },

  extractDeckNameFromHeader(text) {
    const match = text.match(/^#deck:\s*([^\r\n]+)/im);
    return match ? match[1].trim() : null;
  },

  parse(text, separator) {
    let effectiveSep = separator;
    if (separator === 'auto') {
      const sepMatch = text.match(/^#separator:\s*(tab|comma|semicolon|pipe|[^\r\n]+)/im);
      if (sepMatch) {
        const val = sepMatch[1].trim().toLowerCase();
        if (val === 'tab') effectiveSep = '\t';
        else if (val === 'comma') effectiveSep = ',';
        else if (val === 'semicolon') effectiveSep = ';';
        else if (val === 'pipe') effectiveSep = '|';
        else effectiveSep = val;
      } else {
        effectiveSep = TxtParser.detectSeparator(text);
      }
    }

    const lines = text.split(/\r?\n/);
    const cards = [];

    for (const rawLine of lines) {
      const line = rawLine.trim();
      if (!line || line.startsWith('#')) continue;

      const parts = line.split(effectiveSep);
      if (parts.length >= 2) {
        const front = parts[0].trim();
        let back = parts[1].trim();
        let image = null;

        // Check 3rd column or embedded image in back
        if (parts.length >= 3) {
          const col3 = parts[2].trim();
          if (col3.startsWith('data:image') || col3.startsWith('http') || col3.includes('<img')) {
            image = col3;
          } else if (col3) {
            back += `\n(${col3})`;
          }
        }

        // Check if back has <img src="...">
        const imgMatch = back.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i);
        if (imgMatch && !image) {
          image = imgMatch[1];
          back = back.replace(imgMatch[0], '').trim();
        }

        if (front && back) {
          cards.push({
            id: 'txt_' + hashString(front),
            front,
            back,
            image
          });
        }
      }
    }

    return { cards, detectedSep: effectiveSep };
  }
};

// ==========================================
// FILE HANDLER (Safe Sync & Progress Guarantee)
// ==========================================
const FileHandler = {
  // Import JSON Deck with Safe Progress Preservation
  async importDeck(file) {
    const text = await file.text();
    const data = JSON.parse(text);
    if (!data.name || !Array.isArray(data.cards)) {
      throw new Error('Invalid deck file. Expected { name, cards: [...] }');
    }

    const allDecks = await DB.getAllDecks();
    let deck = allDecks.find(d => normalizeKey(d.name) === normalizeKey(data.name));
    const deckId = deck ? deck.id : uuid();

    deck = {
      id: deckId,
      name: data.name,
      description: data.description || '',
      targetLang: data.targetLang || deck?.targetLang || 'other',
      createdAt: deck ? deck.createdAt : new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    await DB.addDeck(deck);

    // Existing cards in this deck
    const existingCards = await DB.getCardsByDeck(deckId);
    const existingByFront = {};
    const existingById = {};
    existingCards.forEach(c => {
      existingByFront[normalizeKey(c.front)] = c;
      existingById[c.id] = c;
      if (c.originalId) existingById[c.originalId] = c;
    });

    let newCount = 0;
    let preservedCount = 0;

    for (const c of data.cards) {
      const origId = c.id || ('card_' + hashString(c.front));
      const ec = existingById[origId] || existingByFront[normalizeKey(c.front)];

      const card = {
        id: ec ? ec.id : origId,
        originalId: origId,
        deckId,
        front: c.front,
        back: c.back,
        image: c.image || (ec ? ec.image : null),
        createdAt: ec ? ec.createdAt : new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      await DB.addCard(card);

      if (!ec) {
        // Genuinely new card -> create starting SRS progress
        await DB.setProgress(SRS.createProgress(card.id));
        newCount++;
      } else {
        // Existing card -> KEEP ITS SRS PROGRESS LEVEL INTACT!
        preservedCount++;
      }
    }

    return { deckId, name: data.name, newCount, preservedCount, totalCards: data.cards.length };
  },

  // Import TXT with Safe Progress Preservation
  async importTxt(cards, deckName, targetLang) {
    const allDecks = await DB.getAllDecks();
    let deck = allDecks.find(d => normalizeKey(d.name) === normalizeKey(deckName));
    const deckId = deck ? deck.id : uuid();

    deck = {
      id: deckId,
      name: deckName,
      description: deck ? deck.description : '',
      targetLang: targetLang || deck?.targetLang || 'other',
      createdAt: deck ? deck.createdAt : new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    await DB.addDeck(deck);

    const existingCards = await DB.getCardsByDeck(deckId);
    const existingByFront = {};
    existingCards.forEach(c => {
      existingByFront[normalizeKey(c.front)] = c;
    });

    let newCount = 0;
    let preservedCount = 0;

    for (const c of cards) {
      const normFront = normalizeKey(c.front);
      const ec = existingByFront[normFront];
      const cardId = ec ? ec.id : (c.id || ('txt_' + hashString(c.front)));

      const card = {
        id: cardId,
        originalId: cardId,
        deckId,
        front: c.front,
        back: c.back,
        image: c.image || (ec ? ec.image : null),
        createdAt: ec ? ec.createdAt : new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      await DB.addCard(card);

      if (!ec) {
        await DB.setProgress(SRS.createProgress(cardId));
        newCount++;
      } else {
        // Existing card -> PROGRESS PRESERVED!
        preservedCount++;
      }
    }

    return { deckId, name: deckName, newCount, preservedCount, totalCards: cards.length };
  },

  // Export Safe Progress File (for PC <-> iPhone cross-device sync)
  async exportProgress() {
    const allP = await DB.getAllProgress();
    const progressRecords = [];

    for (const p of allP) {
      const card = await DB.getCard(p.cardId);
      if (card) {
        const deck = await DB.getDeck(card.deckId);
        progressRecords.push({
          cardId: card.id,
          originalId: card.originalId || card.id,
          deckName: deck ? deck.name : '',
          front: card.front,
          frontHash: hashString(card.front),
          progress: {
            state: p.state,
            interval: p.interval,
            ease: p.ease,
            repetitions: p.repetitions,
            lapses: p.lapses,
            learningStep: p.learningStep,
            dueDate: p.dueDate,
            lastReview: p.lastReview,
          }
        });
      }
    }

    const payload = {
      app: 'FlashMaster',
      type: 'safe-progress-sync',
      version: 2,
      exportedAt: new Date().toISOString(),
      cardCount: progressRecords.length,
      records: progressRecords,
    };

    const dateStamp = todayStr();
    FileHandler._download(`flashmaster-progress-${dateStamp}.json`, JSON.stringify(payload, null, 2));
  },

  // Restore Safe Progress File (matches by ID, originalId, or word text)
  async importProgress(file) {
    const text = await file.text();
    const data = JSON.parse(text);

    if (!data.records && !data.progress) {
      throw new Error('Invalid progress file.');
    }

    // Build index of all cards currently on this device
    const allDecks = await DB.getAllDecks();
    const cardMapById = {};
    const cardMapByFront = {};

    for (const deck of allDecks) {
      const cards = await DB.getCardsByDeck(deck.id);
      for (const card of cards) {
        cardMapById[card.id] = card;
        if (card.originalId) cardMapById[card.originalId] = card;
        cardMapByFront[normalizeKey(card.front)] = card;
      }
    }

    let matchCount = 0;
    const records = data.records || [];

    // Format v2 (Array of records with word fallback)
    if (records.length > 0) {
      for (const item of records) {
        const targetCard = cardMapById[item.cardId] ||
                           cardMapById[item.originalId] ||
                           cardMapByFront[normalizeKey(item.front)];

        if (targetCard && item.progress) {
          const p = item.progress;
          await DB.setProgress({
            cardId: targetCard.id,
            state: p.state || CARD_STATES.NEW,
            interval: p.interval || 0,
            ease: p.ease || SRS_DEFAULTS.startingEase,
            repetitions: p.repetitions || 0,
            lapses: p.lapses || 0,
            learningStep: p.learningStep || 0,
            dueDate: p.dueDate || todayStr(),
            lastReview: p.lastReview || null,
          });
          matchCount++;
        }
      }
      return { matchCount, totalInFile: records.length };
    }

    // Format v1 fallback (object map)
    if (data.progress) {
      for (const [key, p] of Object.entries(data.progress)) {
        const targetCard = cardMapById[key] || cardMapByFront[normalizeKey(key)];
        if (targetCard) {
          await DB.setProgress({
            cardId: targetCard.id,
            state: p.state || CARD_STATES.NEW,
            interval: p.interval || 0,
            ease: p.ease || SRS_DEFAULTS.startingEase,
            repetitions: p.repetitions || 0,
            lapses: p.lapses || 0,
            learningStep: p.learningStep || 0,
            dueDate: p.dueDate || todayStr(),
            lastReview: p.lastReview || null,
          });
          matchCount++;
        }
      }
      return { matchCount, totalInFile: Object.keys(data.progress).length };
    }

    return { matchCount: 0, totalInFile: 0 };
  },

  // Export single deck as JSON
  async exportDeck(deckId) {
    const deck = await DB.getDeck(deckId);
    const cards = await DB.getCardsByDeck(deckId);
    const data = {
      name: deck.name,
      description: deck.description || '',
      targetLang: deck.targetLang || 'other',
      cards: cards.map(c => ({
        id: c.originalId || c.id,
        front: c.front,
        back: c.back,
        ...(c.image ? { image: c.image } : {}),
      })),
    };
    FileHandler._download(`${deck.name}.json`, JSON.stringify(data, null, 2));
  },

  // Export single deck as Anki-compatible TXT
  async exportDeckTxt(deckId) {
    const deck = await DB.getDeck(deckId);
    const cards = await DB.getCardsByDeck(deckId);
    let output = `#separator:tab\n#deck:${deck.name}\n#targetLang:${deck.targetLang || 'other'}\n`;
    for (const c of cards) {
      const cleanFront = c.front.replace(/\t|\r?\n/g, ' ');
      const cleanBack = c.back.replace(/\t|\r?\n/g, ' ');
      if (c.image) {
        output += `${cleanFront}\t${cleanBack}\t${c.image}\n`;
      } else {
        output += `${cleanFront}\t${cleanBack}\n`;
      }
    }
    FileHandler._download(`${deck.name}.txt`, output, 'text/plain');
  },

  // Full Backup (Everything)
  async exportAll() {
    const decks = await DB.getAllDecks();
    const allP = await DB.getAllProgress();
    const pm = {};
    allP.forEach(p => { pm[p.cardId] = p; });

    const allData = {
      app: 'FlashMaster',
      version: 2,
      exportedAt: new Date().toISOString(),
      decks: []
    };

    for (const deck of decks) {
      const cards = await DB.getCardsByDeck(deck.id);
      allData.decks.push({
        name: deck.name,
        description: deck.description || '',
        targetLang: deck.targetLang || 'other',
        cards: cards.map(c => {
          const p = pm[c.id];
          return {
            id: c.originalId || c.id,
            front: c.front,
            back: c.back,
            ...(c.image ? { image: c.image } : {}),
            progress: p ? {
              state: p.state,
              interval: p.interval,
              ease: p.ease,
              repetitions: p.repetitions,
              lapses: p.lapses,
              learningStep: p.learningStep,
              dueDate: p.dueDate,
              lastReview: p.lastReview,
            } : null,
          };
        }),
      });
    }

    FileHandler._download(`flashmaster-full-backup-${todayStr()}.json`, JSON.stringify(allData, null, 2));
  },

  // Restore Full Backup
  async importAll(file) {
    const text = await file.text();
    const data = JSON.parse(text);
    if (!data.decks || !Array.isArray(data.decks)) {
      throw new Error('Invalid backup file.');
    }

    let totalDecks = 0;
    let totalCards = 0;

    for (const dd of data.decks) {
      const deckId = uuid();
      await DB.addDeck({
        id: deckId,
        name: dd.name,
        description: dd.description || '',
        targetLang: dd.targetLang || 'other',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
      totalDecks++;

      for (const c of dd.cards) {
        const cardId = uuid();
        await DB.addCard({
          id: cardId,
          originalId: c.id || cardId,
          deckId,
          front: c.front,
          back: c.back,
          image: c.image || null,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });

        if (c.progress) {
          await DB.setProgress({
            cardId,
            state: c.progress.state || CARD_STATES.NEW,
            interval: c.progress.interval || 0,
            ease: c.progress.ease || SRS_DEFAULTS.startingEase,
            repetitions: c.progress.repetitions || 0,
            lapses: c.progress.lapses || 0,
            learningStep: c.progress.learningStep || 0,
            dueDate: c.progress.dueDate || todayStr(),
            lastReview: c.progress.lastReview || null,
          });
        } else {
          await DB.setProgress(SRS.createProgress(cardId));
        }
        totalCards++;
      }
    }

    return { totalDecks, totalCards };
  },

  _download(fn, content, type = 'application/json') {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([content], { type }));
    a.download = fn;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
  },
};

// ==========================================
// STARTER DECKS (Japanese, Korean, English)
// ==========================================
const STARTER_DECKS = [
  {
    name: 'Japanese Essentials 🇯🇵',
    targetLang: 'ja',
    description: 'Essential Japanese vocabulary with furigana readings',
    cards: [
      { front: '猫[ねこ]', back: 'Cat (Kot) 🐱\n domesticated feline animal' },
      { front: '犬[いぬ]', back: 'Dog (Pies) 🐶\n loyal domesticated canine' },
      { front: '水[みず]', back: 'Water (Woda) 💧\n essential drinking water' },
      { front: '本[ほん]', back: 'Book (Książka) 📖\n counter: ～冊 (satsu)' },
      { front: '食[た]べる', back: 'To eat (Jeść) 🍽️\n Example: ご飯を食べる' },
      { front: '飲[の]む', back: 'To drink (Pić) 🥤\n Example: お茶を飲む' },
      { front: '大[おお]きい', back: 'Big / Large (Duży) 🐘' },
      { front: '小[ちい]さい', back: 'Small / Little (Mały) 🐭' },
      { front: 'ありがとうございます', back: 'Thank you (Dziękuję bardzo) 🙏' },
      { front: 'すみません', back: 'Excuse me / Sorry (Przepraszam)' },
      { front: '友達[ともだち]', back: 'Friend (Przyjaciel)' },
      { front: '学[がっ]校[こう]', back: 'School (Szkoła) 🏫' },
    ]
  },
  {
    name: 'Korean Essentials 🇰🇷',
    targetLang: 'ko',
    description: 'Essential Korean words with Hangul & Romanization',
    cards: [
      { front: '안녕하세요 (annyeonghaseyo)', back: 'Hello / Good day (Dzień dobry / Cześć) 👋' },
      { front: '감사합니다 (gamsahamnida)', back: 'Thank you (Dziękuję) 🙏' },
      { front: '물 (mul)', back: 'Water (Woda) 💧' },
      { front: '고양이 (goyangi)', back: 'Cat (Kot) 🐱' },
      { front: '강아지 (gangaji)', back: 'Puppy / Dog (Piesek / Pies) 🐶' },
      { front: '먹다 (meokda)', back: 'To eat (Jeść) 🍚' },
      { front: '마시다 (masida)', back: 'To drink (Pić) ☕' },
      { front: '친구 (chingu)', back: 'Friend (Przyjaciel) 🤝' },
      { front: '사랑해요 (saranghaeyo)', back: 'I love you (Kocham cię) ❤️' },
      { front: '네 (ne)', back: 'Yes (Tak)' },
      { front: '아니요 (aniyo)', back: 'No (Nie)' },
      { front: '학교 (hakgyo)', back: 'School (Szkoła) 🏫' },
    ]
  },
  {
    name: 'English Essentials 🇬🇧',
    targetLang: 'en',
    description: 'Practical English idioms and vocabulary',
    cards: [
      { front: 'Piece of cake', back: 'Very easy (Bułka z masłem) 🍰\n Example: The exam was a piece of cake!' },
      { front: 'Break a leg', back: 'Good luck! (Powodzenia / Połamania nóg!) 🎭' },
      { front: 'Bite the bullet', back: 'Face a difficult situation with courage (Zacisnąć zęby)' },
      { front: 'Once in a blue moon', back: 'Very rarely (Raz na ruski rok) 🌕' },
      { front: 'Under the weather', back: 'Feeling slightly sick (Czuć się nieswojo / chorym) 🤒' },
      { front: 'Hit the books', back: 'To begin studying hard (Uczyć się pilnie / Zakuwać) 📚' },
      { front: 'Curiosity killed the cat', back: 'Being too inquisitive can lead to danger (Ciekawość to pierwszy stopień do piekła) 🐱' },
      { front: 'Spill the beans', back: 'Reveal a secret (Wyjawić tajemnicę) 🫘' },
    ]
  }
];

// ==========================================
// UI CONTROLLER
// ==========================================
const App = {
  currentDeckId: null,
  editingCardId: null,
  studySession: null,
  studyMode: 'flip',       // 'flip' or 'mc'
  quizDirection: 'rev',    // 'rev' (Meaning->Word, screenshot layout) or 'fwd'
  currentFilterLang: 'all',
  currentSubdeckFilter: 'all', // 'all', '1', '2', '3'
  currentTheme: 'dark',

  async setTheme(theme, showToast = true) {
    App.currentTheme = theme === 'light' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', App.currentTheme);
    const toggleBtn = document.getElementById('btn-theme-toggle');
    if (toggleBtn) {
      toggleBtn.textContent = App.currentTheme === 'light' ? '☀️' : '🌙';
      toggleBtn.title = App.currentTheme === 'light' ? 'Light Theme (Click to switch to Dark)' : 'Dark Theme (Click to switch to Light)';
    }
    document.querySelectorAll('#settings-theme-chips .chip').forEach(c => {
      c.classList.toggle('active', c.dataset.themeVal === App.currentTheme);
    });
    await DB.setSetting('theme', App.currentTheme);
    if (showToast && I18N[currentLang]?.themeChanged) {
      App.showToast(I18N[currentLang].themeChanged(App.currentTheme));
    }
  },

  async toggleTheme() {
    const next = App.currentTheme === 'light' ? 'dark' : 'light';
    await App.setTheme(next, true);
  },

  _pendingTxtFile: null,
  _pendingTxtText: null,
  _pendingTxtCards: [],

  async setUiLang(lang) {
    if (lang !== 'en' && lang !== 'pl') return;
    currentLang = lang;
    await DB.setSetting('uiLang', currentLang);
    applyI18n();
    App.renderCapyQuote();
    if (App.currentScreen === 'study') {
      const wasFlipped = App.studySession && App.studySession.isFlipped;
      App._showCurrentCard();
      if (wasFlipped) {
        App._flipCard();
      }
    } else if (App.currentScreen === 'deck') {
      App.renderDeckDetail();
    } else if (App.currentScreen === 'home') {
      App.renderHome();
    }
  },

  async init() {
    Speech.init();
    await DB.open();
    await App.migrateDeckIntegrity();
    await App.ensureStarterDecksExist();

    // Load saved settings (theme, filterLang, etc.) BEFORE rendering screens
    await App._loadSettings();
    App._bindEvents();

    const savedLang = await DB.getSetting('uiLang');
    if (savedLang) {
      currentLang = savedLang;
      applyI18n();
      App.renderCapyQuote();
      App.showScreen('home');
    } else {
      App.showScreen('lang-select');
    }

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    }
  },

  _ensuringPromise: null,
  async ensureStarterDecksExist() {
    if (App._ensuringPromise) return App._ensuringPromise;
    App._ensuringPromise = (async () => {
      try {
        let allDecks = await DB.getAllDecks();
        const starterList = (window.CAPY_STARTER_DECKS && window.CAPY_STARTER_DECKS.length) ? window.CAPY_STARTER_DECKS : STARTER_DECKS;

      // Clean up legacy combined decks so only clean 125-card subgroup decks exist
      for (const d of allDecks) {
        if (!d.name) continue;
        if (/동사 375|명사 375|형용사 375|동사 125|명사 125|형용사 125|Korean Essentials/i.test(d.name)) {
          const oldCards = await DB.getCardsByDeck(d.id);
          await Promise.all(oldCards.map(oc => Promise.all([DB.deleteCard(oc.id), DB.deleteProgress(oc.id)])));
          await DB.deleteDeck(d.id);
        }
      }
      allDecks = await DB.getAllDecks();

      for (const sd of starterList) {
        allDecks = await DB.getAllDecks();
        let canonicalDeck = allDecks.find(d => d.name === sd.name);

        let deckId;
        if (!canonicalDeck) {
          deckId = uuid();
          canonicalDeck = {
            id: deckId,
            name: sd.name,
            description: sd.description,
            targetLang: sd.targetLang,
            dailyNewCards: sd.dailyNewCards || 10,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          };
          await DB.addDeck(canonicalDeck);
        } else {
          deckId = canonicalDeck.id;
          if (canonicalDeck.targetLang !== sd.targetLang) {
            canonicalDeck.targetLang = sd.targetLang;
            await DB.updateDeck(canonicalDeck);
          }
        }

        let cards = await DB.getCardsByDeck(deckId);
        if (cards.length !== sd.cards.length) {
          // Reset cards in deck to match exactly the starter deck list
          await Promise.all(cards.map(ec => Promise.all([DB.deleteCard(ec.id), DB.deleteProgress(ec.id)])));

          await Promise.all(sd.cards.map(c => {
            const cardId = uuid();
            return Promise.all([
              DB.addCard({
                id: cardId,
                originalId: cardId,
                deckId,
                front: c.front,
                back: c.back,
                image: c.image || null,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
              }),
              DB.setProgress(SRS.createProgress(cardId))
            ]);
          }));
          cards = await DB.getCardsByDeck(deckId);
        } else {
          // Exactly matching count: update images or formatting if updated
          for (let i = 0; i < cards.length; i++) {
            const ec = cards[i];
            const sc = sd.cards[i];
            if (sc && (ec.front !== sc.front || ec.back !== sc.back || (sc.image && ec.image !== sc.image))) {
              ec.front = sc.front;
              ec.back = sc.back;
              ec.image = sc.image || ec.image;
              await DB.updateCard(ec);
            }
          }
        }
      }
    } catch (e) {
      console.warn('ensureStarterDecksExist warning:', e);
    }
    })();
    try {
      await App._ensuringPromise;
    } finally {
      App._ensuringPromise = null;
    }
  },

  async migrateDeckIntegrity() {
    try {
      const allDecks = await DB.getAllDecks();

      // Step 1: Detect and correct deck languages authoritatively (Name and Content)
      for (const deck of allDecks) {
        const name = (deck.name || '').toLowerCase();
        let exactLang = null;
        if (/korean|korea|koreańsk|🇰🇷|한국어/i.test(name)) exactLang = 'ko';
        else if (/japanese|japan|japońsk|🇯🇵|日本語/i.test(name)) exactLang = 'ja';
        else if (/english|angielsk|🇬🇧/i.test(name)) exactLang = 'en';

        if (exactLang) {
          if (deck.targetLang !== exactLang) {
            deck.targetLang = exactLang;
            deck.updatedAt = new Date().toISOString();
            await DB.updateDeck(deck);
          }
        } else {
          const cards = await DB.getCardsByDeck(deck.id);
          const detected = detectDeckLanguage(deck, cards);
          if (detected !== 'other' && deck.targetLang !== detected) {
            deck.targetLang = detected;
            deck.updatedAt = new Date().toISOString();
            await DB.updateDeck(deck);
          }
        }
      }

      // Step 2: Clean up obsolete legacy decks (e.g. old unified Korean Essentials or combined 375/125 decks)
      const refreshedDecks = await DB.getAllDecks();
      for (const d of refreshedDecks) {
        if (d.name && (/Korean Essentials|동사 375|명사 375|형용사 375|동사 125|명사 125|형용사 125/i.test(d.name))) {
          const oldCards = await DB.getCardsByDeck(d.id);
          for (const oc of oldCards) {
            await DB.deleteCard(oc.id);
            await DB.deleteProgress(oc.id);
          }
          await DB.deleteDeck(d.id);
        }
      }

      // Step 3: Clean out stray cards belonging to other languages
      const finalDecks = await DB.getAllDecks();
      for (const deck of finalDecks) {
        const cards = await DB.getCardsByDeck(deck.id);
        for (const card of cards) {
          const front = card.front || '';
          if (deck.targetLang === 'ko') {
            // In Korean deck: front must NOT have Japanese Kana without Hangul
            if (/[\u3040-\u30ff]/.test(front) && !/[\uac00-\ud7af]/.test(front)) {
              await DB.deleteCard(card.id);
              await DB.deleteProgress(card.id);
            }
          } else if (deck.targetLang === 'ja') {
            // In Japanese deck: front must NOT have Korean Hangul
            if (/[\uac00-\ud7af]/.test(front) && !/[\u3040-\u30ff]/.test(front)) {
              await DB.deleteCard(card.id);
              await DB.deleteProgress(card.id);
            }
          } else if (deck.targetLang === 'en') {
            // In English deck: front must NOT have Asian scripts
            if (/[\u3040-\u30ff\uac00-\ud7af]/.test(front)) {
              await DB.deleteCard(card.id);
              await DB.deleteProgress(card.id);
            }
          }
        }
      }
    } catch (e) {
      console.warn('Data migration warning:', e);
    }
  },

  async _loadSettings() {
    const npd = await DB.getSetting('newPerDay');
    const mr = await DB.getSetting('maxReviews');
    const sm = await DB.getSetting('studyMode');
    const qd = await DB.getSetting('quizDirection');
    const fl = await DB.getSetting('filterLang');
    const th = await DB.getSetting('theme');

    if (npd !== undefined) document.getElementById('setting-new-per-day').value = npd;
    if (mr !== undefined) document.getElementById('setting-max-reviews').value = mr;
    if (sm) App.studyMode = sm;
    if (qd) App.quizDirection = qd;
    if (fl) App.currentFilterLang = fl;
    await App.setTheme(th || 'dark', false);
  },

  _getSettings() {
    return {
      newPerDay: parseInt(document.getElementById('setting-new-per-day').value) || SRS_DEFAULTS.newPerDay,
      maxReviews: parseInt(document.getElementById('setting-max-reviews').value) || SRS_DEFAULTS.maxReviews,
    };
  },

  showScreen(name) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(`${name}-screen`).classList.add('active');
    document.getElementById('deck-menu')?.classList.add('hidden');

    switch (name) {
      case 'home': App.renderHome(); break;
      case 'deck': App.renderDeckDetail(); break;
      case 'card-edit': App.renderCardEdit(); break;
      case 'study': App.renderStudy(); break;
      case 'settings': applyI18n(); break;
    }
  },

  showToast(msg) {
    const el = document.getElementById('toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(App._toastT);
    App._toastT = setTimeout(() => el.classList.remove('show'), 2800);
  },

  // ===== CAPY DYNAMIC QUOTES =====
  currentQuoteIdx: -1,
  renderCapyQuote() {
    const list = (window.CAPY_QUOTES && window.CAPY_QUOTES[currentLang]) || [
      currentLang === 'pl' ? "Spokojnie, krok po kroku każdego dnia." : "Take your time. A little bit every day."
    ];
    let idx;
    do {
      idx = Math.floor(Math.random() * list.length);
    } while (list.length > 1 && idx === App.currentQuoteIdx);
    App.currentQuoteIdx = idx;

    const el = document.getElementById('greeting-quote');
    if (el) {
      el.textContent = `"${list[idx]}"`;
      el.classList.remove('quote-pop');
      void el.offsetWidth;
      el.classList.add('quote-pop');
    }
  },

  // ===== LOAD STARTER DECKS =====
  async loadStarterDecks() {
    let totalCardsAdded = 0;
    const starterList = (window.CAPY_STARTER_DECKS && window.CAPY_STARTER_DECKS.length) ? window.CAPY_STARTER_DECKS : STARTER_DECKS;

    for (const sd of starterList) {
      const allDecks = await DB.getAllDecks();
      let deck = allDecks.find(d => d.name === sd.name);

      let deckId;
      if (!deck) {
        deckId = uuid();
        await DB.addDeck({
          id: deckId,
          name: sd.name,
          description: sd.description,
          targetLang: sd.targetLang,
          dailyNewCards: sd.dailyNewCards || 10,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
      } else {
        deckId = deck.id;
        deck.name = sd.name;
        deck.targetLang = sd.targetLang;
        if (!deck.dailyNewCards) {
          deck.dailyNewCards = sd.dailyNewCards || 10;
        }
        await DB.updateDeck(deck);
      }

      // Preserve existing cards and progress!
      const existingCards = await DB.getCardsByDeck(deckId);
      const existingMap = new Map();
      existingCards.forEach(c => existingMap.set(normalizeKey(c.front), c));

      // Purge any cross-language contamination from earlier versions
      for (const card of existingCards) {
        const front = card.front || '';
        if (sd.targetLang === 'ko' && /[\u3040-\u30ff]/.test(front) && !/[\uac00-\ud7af]/.test(front)) {
          await DB.deleteCard(card.id);
          await DB.deleteProgress(card.id);
          existingMap.delete(normalizeKey(front));
        } else if (sd.targetLang === 'ja' && /[\uac00-\ud7af]/.test(front) && !/[\u3040-\u30ff]/.test(front)) {
          await DB.deleteCard(card.id);
          await DB.deleteProgress(card.id);
          existingMap.delete(normalizeKey(front));
        } else if (sd.targetLang === 'en' && /[\u3040-\u30ff\uac00-\ud7af]/.test(front)) {
          await DB.deleteCard(card.id);
          await DB.deleteProgress(card.id);
          existingMap.delete(normalizeKey(front));
        }
      }

      for (const c of sd.cards) {
        const key = normalizeKey(c.front);
        const existing = existingMap.get(key);
        if (existing) {
          // If existing card has corrupted back or updated image, refresh
          let changed = false;
          if (existing.back !== c.back) {
            existing.back = c.back;
            changed = true;
          }
          if (c.image && existing.image !== c.image) {
            existing.image = c.image;
            changed = true;
          }
          if (changed) {
            existing.updatedAt = new Date().toISOString();
            await DB.addCard(existing);
          }
        } else {
          const cardId = uuid();
          await DB.addCard({
            id: cardId,
            originalId: cardId,
            deckId,
            front: c.front,
            back: c.back,
            image: c.image || null,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          });
          await DB.setProgress(SRS.createProgress(cardId));
          totalCardsAdded++;
        }
      }
    }

    const msg = currentLang === 'pl'
      ? `Załadowano starter! Dodano ${totalCardsAdded} słówek z czystymi zdaniami.`
      : `Starter loaded! Added ${totalCardsAdded} vocabulary cards with pure language sentences.`;
    App.showToast(msg);
    App.renderHome();
  },

  // ===== INSTANT FILTER ACTION =====
  async filterByLang(lang) {
    App.currentFilterLang = lang;
    await DB.setSetting('filterLang', lang);
    await App.renderHome();
  },

  // ===== HOME SCREEN =====
  async renderHome() {
    applyI18n();

    // Update filter tabs UI and auto-scroll active chip into view
    document.querySelectorAll('#home-lang-filters .filter-chip').forEach(c => {
      const isActive = c.dataset.filterLang === App.currentFilterLang;
      c.classList.toggle('active', isActive);
      if (isActive && document.getElementById('home-screen')?.classList.contains('active')) {
        try { c.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' }); } catch (e) {}
      }
    });

    const allDecks = await DB.getAllDecks();
    const starterOrder = (window.CAPY_STARTER_DECKS || []).map(d => d.name);
    allDecks.sort((a, b) => {
      const idxA = starterOrder.indexOf(a.name);
      const idxB = starterOrder.indexOf(b.name);
      if (idxA !== -1 && idxB !== -1) return idxA - idxB;
      if (idxA !== -1) return -1;
      if (idxB !== -1) return 1;
      return (a.name || '').localeCompare(b.name || '');
    });
    const allP = await DB.getAllProgress();
    const pm = {};
    allP.forEach(p => { pm[p.cardId] = p; });

    // Calculate per-language stats so numbers are strictly divided between languages
    const langStats = {
      all: { due: 0, new: 0, total: 0 },
      ja: { due: 0, new: 0, total: 0 },
      ko: { due: 0, new: 0, total: 0 },
      en: { due: 0, new: 0, total: 0 },
      other: { due: 0, new: 0, total: 0 }
    };

    const infos = [];

    for (const deck of allDecks) {
      const cards = await DB.getCardsByDeck(deck.id);
      let dc = 0;
      let nc = 0;

      for (const card of cards) {
        const p = pm[card.id];
        if (!p || p.state === CARD_STATES.NEW) nc++;
        else if (SRS.isDue(p)) dc++;
      }

      // Detect deck language authoritatively
      const detected = detectDeckLanguage(deck, cards);
      const effectiveLang = (deck.targetLang && ['ja', 'ko', 'en'].includes(deck.targetLang))
        ? deck.targetLang
        : (detected !== 'other' ? detected : 'other');

      if (deck.targetLang !== effectiveLang) {
        deck.targetLang = effectiveLang;
        await DB.updateDeck(deck).catch(() => {});
      }

      if (!langStats[effectiveLang]) {
        langStats[effectiveLang] = { due: 0, new: 0, total: 0 };
      }

      langStats[effectiveLang].due += dc;
      langStats[effectiveLang].new += nc;
      langStats[effectiveLang].total += cards.length;

      langStats.all.due += dc;
      langStats.all.new += nc;
      langStats.all.total += cards.length;

      // Filter by language learned if selected (Strict isolation: only show requested language)
      if (App.currentFilterLang !== 'all' && effectiveLang !== App.currentFilterLang) {
        continue;
      }
      infos.push({ deck, langKey: effectiveLang, cardCount: cards.length, dueCount: dc, newCount: nc });
    }

    // Update count badges on language filter chips
    ['all', 'ja', 'ko', 'en', 'other'].forEach(lk => {
      const el = document.getElementById(`chip-count-${lk}`);
      if (el) {
        const count = langStats[lk] ? langStats[lk].total : 0;
        el.textContent = count > 0 ? count : '';
        el.style.display = count > 0 ? 'inline-block' : 'none';
      }
    });

    // Language-specific stats for top counter bar (divided between languages)
    const activeStats = langStats[App.currentFilterLang] || langStats.all;
    document.getElementById('stat-due').textContent = activeStats.due;
    document.getElementById('stat-new').textContent = activeStats.new;
    document.getElementById('stat-total').textContent = activeStats.total;

    // Clarify which language the stats represent
    const langFlagMap = { ja: '🇯🇵', ko: '🇰🇷', en: '🇬🇧', other: '🌐', all: '' };
    const flag = langFlagMap[App.currentFilterLang] ? ` (${langFlagMap[App.currentFilterLang]})` : '';

    const dueLbl = document.getElementById('stat-label-due');
    const newLbl = document.getElementById('stat-label-new');
    const totLbl = document.getElementById('stat-label-total');
    if (dueLbl) dueLbl.textContent = `${t('due')}${flag}`;
    if (newLbl) newLbl.textContent = `${t('new')}${flag}`;
    if (totLbl) totLbl.textContent = `${t('total')}${flag}`;

    const listEl = document.getElementById('deck-list');

    if (infos.length === 0) {
      listEl.innerHTML = `
        <div class="empty-state" id="empty-state">
          <img src="capybara.jpg" alt="Relaxed Capybara" class="empty-mascot-img">
          <p>${t('noDecks')}</p>
          <p class="sub">${t('noDecksHint')}</p>
          <div class="empty-actions">
            <button class="btn btn-primary btn-small" id="btn-empty-load-samples">🎁 <span>${t('loadSamples')}</span></button>
            <button class="btn btn-small" id="btn-empty-import">📥 <span>${t('importDeck')}</span></button>
          </div>
        </div>
      `;
      document.getElementById('btn-empty-load-samples')?.addEventListener('click', () => App.loadStarterDecks());
      document.getElementById('btn-empty-import')?.addEventListener('click', () => $('import-deck-input').click());
      return;
    }

    listEl.innerHTML = infos.map(({ deck, langKey, cardCount, dueCount, newCount }) => {
      const td = dueCount + newCount;
      const effectiveLang = langKey || deck.targetLang || 'other';
      const langConfig = LANG_CONFIG[effectiveLang] || LANG_CONFIG.other;
      const hasSubdecks = cardCount >= 250 || (deck.name && /동사|명사|형용사|375/i.test(deck.name));

      const subdeckPillsHtml = hasSubdecks ? `
        <div class="deck-subdeck-pills">
          <button class="subdeck-pill" data-deck-id="${deck.id}" data-subdeck="1">Basic 1 (125)</button>
          <button class="subdeck-pill" data-deck-id="${deck.id}" data-subdeck="2">Basic 2 (125)</button>
          <button class="subdeck-pill" data-deck-id="${deck.id}" data-subdeck="3">Basic 3 (125)</button>
        </div>
      ` : '';

      return `
        <div class="deck-item" data-deck-id="${deck.id}" data-deck-lang="${effectiveLang}">
          <div class="deck-item-info">
            <div class="deck-item-name">
              ${escapeHtml(deck.name)}
              <span class="lang-tag lang-tag-${effectiveLang}">${langConfig.flag} ${langConfig.name}</span>
            </div>
            <div class="deck-item-meta">${cardCount} ${cardCount !== 1 ? t('cardPlural') : t('card')}</div>
            ${subdeckPillsHtml}
          </div>
          <div class="deck-item-badge ${td === 0 ? 'none' : ''}">${td > 0 ? td : '✓'}</div>
        </div>
      `;
    }).join('');

    listEl.querySelectorAll('.subdeck-pill').forEach(pill => {
      pill.addEventListener('click', e => {
        e.stopPropagation();
        App.currentDeckId = pill.dataset.deckId;
        App.currentSubdeckFilter = pill.dataset.subdeck;
        App.showScreen('deck');
      });
    });

    listEl.querySelectorAll('.deck-item').forEach(el => {
      el.addEventListener('click', e => {
        if (e.target.closest('.subdeck-pill')) return;
        App.currentDeckId = el.dataset.deckId;
        App.currentSubdeckFilter = 'all';
        App.showScreen('deck');
      });
    });
  },

  // ===== DECK DETAIL SCREEN =====
  async renderDeckDetail() {
    if (!App.currentDeckId) return;
    applyI18n();

    const deck = await DB.getDeck(App.currentDeckId);
    if (!deck) { App.showScreen('home'); return; }

    const cards = await DB.getCardsByDeck(App.currentDeckId);
    const hasSubdecks = cards.length >= 250 || cards.some(c => /BASIC\s*[123]/i.test(c.back || ''));
    const subdeckSelector = document.getElementById('deck-subdeck-selector');
    if (subdeckSelector) {
      if (hasSubdecks) {
        subdeckSelector.classList.remove('hidden');
        const currentFilter = App.currentSubdeckFilter || 'all';
        subdeckSelector.querySelectorAll('.subdeck-chip').forEach(btn => {
          btn.classList.toggle('active', btn.dataset.subdeck === currentFilter);
          btn.onclick = (e) => {
            e.stopPropagation();
            App.currentSubdeckFilter = btn.dataset.subdeck;
            App.renderDeckDetail();
          };
        });
      } else {
        subdeckSelector.classList.add('hidden');
      }
    }

    let displayCards = cards;
    if (hasSubdecks && App.currentSubdeckFilter && App.currentSubdeckFilter !== 'all') {
      const subNum = App.currentSubdeckFilter;
      displayCards = cards.filter((c, idx) => {
        if (/BASIC\s*1/i.test(c.back || '')) return subNum === '1';
        if (/BASIC\s*2/i.test(c.back || '')) return subNum === '2';
        if (/BASIC\s*3/i.test(c.back || '')) return subNum === '3';
        if (subNum === '1') return idx < 125;
        if (subNum === '2') return idx >= 125 && idx < 250;
        if (subNum === '3') return idx >= 250 && idx < 375;
        return true;
      });
    }

    const allP = await DB.getAllProgress();
    const pm = {};
    allP.forEach(p => { pm[p.cardId] = p; });

    let nc = 0, lc = 0, dc = 0;
    for (const card of displayCards) {
      const p = pm[card.id];
      if (!p || p.state === CARD_STATES.NEW) nc++;
      else if (p.state === CARD_STATES.LEARNING) lc++;
      else if (SRS.isDue(p)) dc++;
    }

    const titleSuffix = (hasSubdecks && App.currentSubdeckFilter !== 'all') ? ` · Basic ${App.currentSubdeckFilter}` : '';
    document.getElementById('deck-title').textContent = `${deck.name}${titleSuffix}`;
    document.getElementById('deck-stat-new').textContent = nc;
    document.getElementById('deck-stat-learning').textContent = lc;
    document.getElementById('deck-stat-due').textContent = dc;
    document.getElementById('deck-stat-total').textContent = displayCards.length;

    // Study mode & direction toggles
    document.querySelectorAll('#study-mode-toggle .toggle-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.mode === App.studyMode);
    });

    const quizDirRow = document.getElementById('quiz-direction-row');
    quizDirRow.classList.toggle('hidden', App.studyMode !== 'mc');

    document.querySelectorAll('#quiz-direction-toggle .toggle-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.dir === App.quizDirection);
    });

    // Daily New Words Goal
    const dailyGoal = deck.dailyNewCards || 10;
    const goalValEl = document.getElementById('deck-daily-goal-num');
    if (goalValEl) goalValEl.textContent = dailyGoal;
    document.querySelectorAll('#goal-presets .preset-chip').forEach(b => {
      b.classList.toggle('active', parseInt(b.dataset.goal) === dailyGoal);
    });

    const btn = document.getElementById('btn-study-deck');
    const hasCardsToStudy = (nc + lc + dc) > 0;
    btn.disabled = !hasCardsToStudy;
    const studySpan = btn.querySelector('[data-i18n="studyNow"]');
    if (studySpan) {
      studySpan.textContent = hasCardsToStudy ? `${t('studyNow')} (${nc + lc + dc})` : t('allDone');
    }

    // Card list with SRS Progress Level Badges
    const listEl = document.getElementById('deck-card-list');
    if (displayCards.length === 0) {
      listEl.innerHTML = `<div class="empty-state"><div class="empty-icon">🃏</div><p>${t('noCards')}</p><p class="sub">${t('noCardsHint')}</p></div>`;
      return;
    }

    listEl.innerHTML = displayCards.map(card => {
      const p = pm[card.id];
      const levelInfo = SRS.formatProgressLevel(p);
      const furiganaFront = renderFurigana(card.front);
      const parsedCard = parseCardBack(card.back, currentLang);
      const displayBack = parsedCard.sentenceTarget
        ? `${parsedCard.translation} · ${parsedCard.sentenceTarget}`
        : (parsedCard.translation || filterByUiLang(card.back, currentLang));

      return `
        <div class="card-list-item" data-card-id="${card.id}">
          <div class="card-list-item-text">
            <div class="card-list-item-front">${furiganaFront}</div>
            <div class="card-list-item-back">${escapeHtml(displayBack)}</div>
          </div>
          <span class="card-list-item-status ${levelInfo.cls}">${levelInfo.text}</span>
          <button class="delete-btn" data-card-id="${card.id}" title="Delete">🗑️</button>
        </div>
      `;
    }).join('');

    listEl.querySelectorAll('.card-list-item').forEach(el => {
      el.addEventListener('click', e => {
        if (e.target.closest('.delete-btn')) return;
        App.editingCardId = el.dataset.cardId;
        App.showScreen('card-edit');
      });
    });

    listEl.querySelectorAll('.delete-btn').forEach(btn => {
      btn.addEventListener('click', async e => {
        e.stopPropagation();
        App._showConfirm(t('confirm'), t('deleteCardConfirm'), async () => {
          await DB.deleteCard(btn.dataset.cardId);
          await DB.deleteProgress(btn.dataset.cardId);
          App.renderDeckDetail();
          App.showToast(t('cardDeleted'));
        });
      });
    });
  },

  // ===== CARD EDIT SCREEN =====
  async renderCardEdit() {
    applyI18n();
    const titleEl = document.getElementById('card-edit-title');
    const fi = document.getElementById('card-front-input');
    const bi = document.getElementById('card-back-input');
    const pc = document.getElementById('image-preview-container');
    const pi = document.getElementById('image-preview');
    const ph = document.getElementById('image-placeholder');
    App._cardImageData = null;

    if (App.editingCardId) {
      titleEl.textContent = t('editCard');
      const card = await DB.getCard(App.editingCardId);
      if (card) {
        fi.value = card.front;
        bi.value = card.back;
        if (card.image) {
          App._cardImageData = card.image;
          pi.src = card.image;
          pc.classList.remove('hidden');
          ph.classList.add('hidden');
        } else {
          pc.classList.add('hidden');
          ph.classList.remove('hidden');
        }
      }
    } else {
      titleEl.textContent = t('addCard');
      fi.value = '';
      bi.value = '';
      pc.classList.add('hidden');
      ph.classList.remove('hidden');
    }
  },

  async _saveCard() {
    const front = document.getElementById('card-front-input').value.trim();
    const back = document.getElementById('card-back-input').value.trim();
    if (!front || !back) {
      App.showToast(t('frontBackRequired'));
      return;
    }

    if (App.editingCardId) {
      const card = await DB.getCard(App.editingCardId);
      card.front = front;
      card.back = back;
      card.image = App._cardImageData || null;
      card.updatedAt = new Date().toISOString();
      await DB.addCard(card);
      App.showToast(t('cardUpdated'));
    } else {
      const cardId = uuid();
      await DB.addCard({
        id: cardId,
        originalId: cardId,
        deckId: App.currentDeckId,
        front,
        back,
        image: App._cardImageData || null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
      await DB.setProgress(SRS.createProgress(cardId));
      App.showToast(t('cardAdded'));
    }

    App.editingCardId = null;
    App.showScreen('deck');
  },

  // ===== STUDY SCREEN (Flip & Multiple Choice) =====
  async renderStudy() {
    if (!App.currentDeckId) return;
    applyI18n();

    const deck = await DB.getDeck(App.currentDeckId);
    if (!deck) { App.showScreen('home'); return; }
    App._currentDeck = deck;

    const cards = await DB.getCardsByDeck(App.currentDeckId);
    const hasSubdecks = cards.length >= 250 || cards.some(c => /BASIC\s*[123]/i.test(c.back || ''));
    let studyCards = cards;
    if (hasSubdecks && App.currentSubdeckFilter && App.currentSubdeckFilter !== 'all') {
      const subNum = App.currentSubdeckFilter;
      studyCards = cards.filter((c, idx) => {
        if (/BASIC\s*1/i.test(c.back || '')) return subNum === '1';
        if (/BASIC\s*2/i.test(c.back || '')) return subNum === '2';
        if (/BASIC\s*3/i.test(c.back || '')) return subNum === '3';
        if (subNum === '1') return idx < 125;
        if (subNum === '2') return idx >= 125 && idx < 250;
        if (subNum === '3') return idx >= 250 && idx < 375;
        return true;
      });
      document.getElementById('study-title').textContent = `${deck.name} (Basic ${subNum})`;
    } else {
      document.getElementById('study-title').textContent = deck.name;
    }
    App._currentDeck = deck;

    const settings = App._getSettings();
    const cardProgress = [];

    for (const card of studyCards) {
      let p = await DB.getProgress(card.id);
      if (!p) {
        p = SRS.createProgress(card.id);
        await DB.setProgress(p);
      }
      cardProgress.push({ card, progress: p });
    }

    const newC = cardProgress.filter(cp => cp.progress.state === CARD_STATES.NEW);
    const learnC = cardProgress.filter(cp => cp.progress.state === CARD_STATES.LEARNING && SRS.isDue(cp.progress));
    const revC = cardProgress.filter(cp => cp.progress.state === CARD_STATES.REVIEW && SRS.isDue(cp.progress));

    const deckDailyLimit = (App._currentDeck && App._currentDeck.dailyNewCards) || settings.newPerDay || 10;
    const selNew = newC.slice(0, deckDailyLimit);
    const selRev = revC.slice(0, settings.maxReviews);

    const queue = [...learnC];
    let ni = 0, ri = 0;
    while (ni < selNew.length || ri < selRev.length) {
      if (ri < selRev.length) queue.push(selRev[ri++]);
      if (ri < selRev.length) queue.push(selRev[ri++]);
      if (ri < selRev.length) queue.push(selRev[ri++]);
      if (ni < selNew.length) queue.push(selNew[ni++]);
      if (ri < selRev.length) queue.push(selRev[ri++]);
      if (ri < selRev.length) queue.push(selRev[ri++]);
    }

    App._allCardsInDeck = studyCards;
    App.studySession = {
      queue,
      index: 0,
      total: queue.length,
      reviewed: 0,
      isFlipped: false,
      mcAnswered: false,
    };

    if (queue.length === 0) {
      App._showStudyComplete();
      return;
    }

    App._showCurrentCard();
  },

  _showCurrentCard() {
    const s = App.studySession;
    if (s.index >= s.queue.length) {
      App._showStudyComplete();
      return;
    }

    const { card, progress } = s.queue[s.index];
    s.isFlipped = false;
    s.mcAnswered = false;

    document.getElementById('study-counter').textContent = `${s.index + 1}/${s.total}`;
    document.getElementById('study-progress-bar').style.width = `${(s.index / s.total) * 100}%`;

    const isFlip = App.studyMode === 'flip';
    const targetLang = App._currentDeck?.targetLang || 'other';

    document.getElementById('flashcard-container').classList.toggle('hidden', !isFlip);
    document.getElementById('mc-card-container').classList.toggle('hidden', isFlip);
    document.getElementById('show-answer-area').classList.toggle('hidden', !isFlip);
    document.getElementById('rating-area').classList.add('hidden');
    document.getElementById('study-complete').classList.add('hidden');

    if (isFlip) {
      // ===== FLIP MODE (Matches User Screenshots) =====
      const langConfig = LANG_CONFIG[targetLang] || LANG_CONFIG.other;
      const targetLangName = (langConfig.name || 'Target Word').toUpperCase();
      const targetLangFlag = langConfig.flag || '';

      const parsed = parseCardBack(card.back);

      // Check if card has natural target word on front or back
      const frontHasJapanese = /[\u3040-\u30ff]/.test(card.front || '');
      const backHasJapanese = /[\u3040-\u30ff]/.test(card.back || '');
      const frontHasKorean = /[\uac00-\ud7af]/.test(card.front || '');
      const backHasKorean = /[\uac00-\ud7af]/.test(card.back || '');

      let targetWord = card.front || '';
      let meaningText = parsed.translation || card.back || '';

      if ((targetLang === 'ja' && !frontHasJapanese && backHasJapanese) ||
          (targetLang === 'ko' && !frontHasKorean && backHasKorean)) {
        // Inverted card: target word was placed in back, meaning in front
        targetWord = parsed.translation || card.back.split(/\r?\n/)[0];
        meaningText = card.front;
      }
      meaningText = filterByUiLang(meaningText, currentLang);

      const lvl = parsed.levelTag ? ` · ${parsed.levelTag.replace(/[\[\]]/g, '')}` : '';

      const isReverseMode = App.quizDirection === 'rev';
      let frontBadgeText, frontMainHtml;
      if (isReverseMode) {
        // Reverse Mode: Front = MEANING & NUANCE
        frontBadgeText = t('meaningNuance') + lvl;
        frontMainHtml = escapeHtml(meaningText);
      } else {
        // Forward Mode: Front = Target Word
        frontBadgeText = `${targetLangFlag} ${targetLangName}${lvl}`.trim();
        frontMainHtml = renderFurigana(targetWord);
      }

      // Instant unflip without animation or backface leak
      const fc = document.getElementById('flashcard');
      if (fc) {
        fc.style.transition = 'none';
        fc.classList.remove('flipped');
        void fc.offsetWidth; // Force layout reflow
        fc.style.transition = '';
      }

      // Populate Front Side ONLY
      const frontBadge = document.getElementById('card-front-badge');
      if (frontBadge) frontBadge.textContent = frontBadgeText;
      const frontText = document.getElementById('flashcard-front-text');
      if (frontText) frontText.innerHTML = frontMainHtml;

      // Blank out Back Side completely so the next card's answer/picture is NEVER leaked before flipping
      const backBadge = document.getElementById('card-back-badge');
      if (backBadge) backBadge.textContent = '';
      const backSub = document.getElementById('card-back-subtitle');
      if (backSub) backSub.textContent = '';
      const backAns = document.getElementById('card-target-answer');
      if (backAns) backAns.innerHTML = '';
      const sentWin = document.getElementById('window-sentence');
      sentWin?.classList.add('hidden');
      const sentTarget = document.getElementById('card-sentence-target');
      if (sentTarget) sentTarget.innerHTML = '';
      const sentTrans = document.getElementById('card-sentence-trans');
      if (sentTrans) sentTrans.textContent = '';
      const imgWin = document.getElementById('window-image');
      imgWin?.classList.add('hidden');
      const imgE = document.getElementById('flashcard-image');
      if (imgE) {
        imgE.removeAttribute('src');
      }

      document.getElementById('show-answer-area').classList.remove('hidden');
      document.getElementById('rating-area').classList.add('hidden');

      const previews = SRS.previewRatings(progress);
      document.getElementById('time-again').textContent = previews.AGAIN;
      document.getElementById('time-hard').textContent = previews.HARD;
      document.getElementById('time-good').textContent = previews.GOOD;
      document.getElementById('time-easy').textContent = previews.EASY;
    } else {
      // ===== MULTIPLE CHOICE QUIZ MODE =====
      const isFwd = App.quizDirection === 'fwd'; // fwd: Word -> Meaning, rev: Meaning -> Word
      const parsedAns = parseCardBack(card.back, currentLang);
      const cleanFront = card.front;
      const cleanBack = parsedAns.translation || filterByUiLang(card.back, currentLang);

      const questionText = isFwd ? cleanFront : cleanBack;
      const correctAnswer = isFwd ? cleanBack : cleanFront;

      const langConfig = LANG_CONFIG[targetLang] || LANG_CONFIG.other;
      const langBadge = document.getElementById('mc-lang-badge');
      langBadge.textContent = `${langConfig.flag} ${langConfig.name} · ${isFwd ? t('dirFrontToBack') : t('dirBackToFront')}`;

      document.getElementById('mc-front-text').innerHTML = isFwd ? renderFurigana(questionText) : escapeHtml(questionText);

      const fb = document.getElementById('mc-feedback');
      fb.classList.add('hidden');
      fb.className = 'mc-feedback hidden';

      const mcWindows = document.getElementById('mc-windows-container');
      if (mcWindows) mcWindows.classList.add('hidden');

      // Generate distractors from the deck
      const candidateDistractors = App._allCardsInDeck
        .map(c => {
          if (isFwd) {
            const p = parseCardBack(c.back, currentLang);
            return p.translation || filterByUiLang(c.back, currentLang);
          }
          return c.front;
        })
        .filter(ans => normalizeKey(ans) !== normalizeKey(correctAnswer));

      const shuffledDistractors = shuffle(candidateDistractors).slice(0, 3);
      while (shuffledDistractors.length < 3) {
        shuffledDistractors.push('—');
      }

      const options = shuffle([correctAnswer, ...shuffledDistractors]);
      const optBtns = document.querySelectorAll('#mc-options .mc-option');

      optBtns.forEach((btn, i) => {
        const textSpan = btn.querySelector('.opt-text');
        const optVal = options[i];
        if (textSpan) {
          textSpan.innerHTML = (!isFwd) ? renderFurigana(optVal) : escapeHtml(optVal);
        }
        btn.className = 'mc-option';
        btn.dataset.answer = optVal;
        btn.dataset.correct = (normalizeKey(optVal) === normalizeKey(correctAnswer)) ? '1' : '0';
      });
    }
  },

  _renderCardBack(card) {
    if (!card) return;
    const targetLang = App._currentDeck?.targetLang || 'other';
    const langConfig = LANG_CONFIG[targetLang] || LANG_CONFIG.other;
    const targetLangName = (langConfig.name || 'Target Word').toUpperCase();
    const targetLangFlag = langConfig.flag || '';

    const parsed = parseCardBack(card.back);

    const frontHasJapanese = /[\u3040-\u30ff]/.test(card.front || '');
    const backHasJapanese = /[\u3040-\u30ff]/.test(card.back || '');
    const frontHasKorean = /[\uac00-\ud7af]/.test(card.front || '');
    const backHasKorean = /[\uac00-\ud7af]/.test(card.back || '');

    let targetWord = card.front || '';
    let meaningText = parsed.translation || card.back || '';

    if ((targetLang === 'ja' && !frontHasJapanese && backHasJapanese) ||
        (targetLang === 'ko' && !frontHasKorean && backHasKorean)) {
      targetWord = parsed.translation || card.back.split(/\r?\n/)[0];
      meaningText = card.front;
    }
    meaningText = filterByUiLang(meaningText, currentLang);

    const isReverseMode = App.quizDirection === 'rev';
    const lvl = parsed.levelTag ? ` · ${parsed.levelTag.replace(/[\[\]]/g, '')}` : '';

    let backBadgeText, backSubtitleText, backAnswerHtml;

    if (isReverseMode) {
      backBadgeText = `${targetLangFlag} ${targetLangName}${lvl}`.trim();
      backSubtitleText = meaningText;
      backAnswerHtml = renderFurigana(targetWord);
    } else {
      backBadgeText = t('meaningNuance') + lvl;
      backSubtitleText = cleanTextForSpeech(targetWord);
      backAnswerHtml = escapeHtml(meaningText);
    }

    const backBadge = document.getElementById('card-back-badge');
    if (backBadge) backBadge.textContent = backBadgeText;
    const backSub = document.getElementById('card-back-subtitle');
    if (backSub) backSub.textContent = backSubtitleText;

    const backAns = document.getElementById('card-target-answer');
    if (backAns) backAns.innerHTML = backAnswerHtml;

    // Window 2: Exemplary Sentence
    const sentWin = document.getElementById('window-sentence');
    const sentTarget = document.getElementById('card-sentence-target');
    const sentTrans = document.getElementById('card-sentence-trans');
    if (parsed.sentenceTarget && parsed.sentenceTarget.trim()) {
      if (sentTarget) sentTarget.innerHTML = renderFurigana(parsed.sentenceTarget);
      if (sentTrans) {
        sentTrans.textContent = parsed.sentenceTrans ? ` (${parsed.sentenceTrans})` : '';
        sentTrans.style.display = parsed.sentenceTrans ? 'inline' : 'none';
      }
      sentWin?.classList.remove('hidden');
    } else {
      sentWin?.classList.add('hidden');
      if (sentTarget) sentTarget.innerHTML = '';
      if (sentTrans) sentTrans.textContent = '';
    }

    // Window 3: Image (Strict rule: zero space if no image, loaded strictly upon flip)
    const imgWin = document.getElementById('window-image');
    const imgE = document.getElementById('flashcard-image');
    if (card.image && card.image.trim()) {
      if (imgE) {
        imgE.onerror = () => { imgWin?.classList.add('hidden'); };
        imgE.src = card.image;
      }
      imgWin?.classList.remove('hidden');
    } else {
      imgWin?.classList.add('hidden');
      if (imgE) imgE.removeAttribute('src');
    }
  },

  _flipCard() {
    if (!App.studySession || App.studySession.isFlipped) return;
    const s = App.studySession;
    const currentItem = s.queue[s.index];
    if (!currentItem) return;

    s.isFlipped = true;

    // Lazy-render the back face elements ONLY when the user clicks Show Answer
    App._renderCardBack(currentItem.card);

    const fc = document.getElementById('flashcard');
    if (fc) fc.classList.add('flipped');
    document.getElementById('show-answer-area').classList.add('hidden');
    document.getElementById('rating-area').classList.remove('hidden');
  },

  async _handleMCAnswer(btn) {
    const s = App.studySession;
    if (!s || s.mcAnswered) return;
    s.mcAnswered = true;

    const { card, progress } = s.queue[s.index];
    const isCorrect = btn.dataset.correct === '1';

    // Highlight options
    document.querySelectorAll('#mc-options .mc-option').forEach(b => {
      b.classList.add('disabled');
      if (b.dataset.correct === '1') {
        b.classList.add(isCorrect ? 'correct' : 'reveal-correct');
      }
    });
    if (!isCorrect) btn.classList.add('incorrect');

    const fb = document.getElementById('mc-feedback');
    fb.textContent = isCorrect ? t('correct') : t('incorrect');
    fb.className = `mc-feedback ${isCorrect ? 'correct-fb' : 'incorrect-fb'}`;
    fb.classList.remove('hidden');
    // Reveal structured screenshot-faithful card windows after choice
    const parsed = parseCardBack(card.back);
    const mcWindows = document.getElementById('mc-windows-container');
    if (mcWindows) {
      mcWindows.classList.remove('hidden');

      const targetLang = App._currentDeck?.targetLang || 'other';
      const langConfig = LANG_CONFIG[targetLang] || LANG_CONFIG.other;

      const mcBadge = document.getElementById('mc-revealed-badge');
      if (mcBadge) mcBadge.textContent = langConfig.name.toUpperCase();

      const mcSub = document.getElementById('mc-revealed-subtitle');
      if (mcSub) mcSub.textContent = cleanTextForSpeech(card.front);

      const mcAns = document.getElementById('mc-target-answer');
      if (mcAns) mcAns.innerHTML = escapeHtml(parsed.translation || card.back);

      // Window 2: Exemplary Sentence
      const mcSentWin = document.getElementById('mc-window-sentence');
      const mcSentTarget = document.getElementById('mc-sentence-target');
      const mcSentTrans = document.getElementById('mc-sentence-trans');
      if (parsed.sentenceTarget && parsed.sentenceTarget.trim()) {
        if (mcSentTarget) mcSentTarget.innerHTML = renderFurigana(parsed.sentenceTarget);
        if (mcSentTrans) {
          mcSentTrans.textContent = parsed.sentenceTrans ? ` (${parsed.sentenceTrans})` : '';
          mcSentTrans.style.display = parsed.sentenceTrans ? 'inline' : 'none';
        }
        mcSentWin?.classList.remove('hidden');
      } else {
        mcSentWin?.classList.add('hidden');
      }

      // Window 3: Image (Strict rule: if no image, zero space)
      const mcImgWin = document.getElementById('mc-window-image');
      const mcImgE = document.getElementById('mc-image');
      if (card.image && card.image.trim()) {
        if (mcImgE) mcImgE.src = card.image;
        mcImgWin?.classList.remove('hidden');
      } else {
        mcImgWin?.classList.add('hidden');
        if (mcImgE) mcImgE.src = '';
      }
    }

    // Auto-rate with SM-2: correct -> Good, incorrect -> Again
    const rating = isCorrect ? RATINGS.GOOD : RATINGS.AGAIN;
    const updated = SRS.processRating(progress, rating);
    await DB.setProgress(updated);

    if (!isCorrect) {
      s.queue.push({ card, progress: updated });
      s.total = s.queue.length;
    }
    s.reviewed++;

    // Speak answer pronunciation
    const targetLang = App._currentDeck?.targetLang || 'other';
    if (isCorrect) {
      Speech.speak(card.front, targetLang);
    }

    setTimeout(() => {
      s.index++;
      App._showCurrentCard();
    }, isCorrect ? 900 : 2000);
  },

  async _rateCard(rating) {
    if (!App.studySession) return;
    const s = App.studySession;
    const { card, progress } = s.queue[s.index];

    // Instantly remove flip state and blank out the back face to prevent any leakage or flash
    const fc = document.getElementById('flashcard');
    if (fc) {
      fc.style.transition = 'none';
      fc.classList.remove('flipped');
    }
    const backAns = document.getElementById('card-target-answer');
    if (backAns) backAns.innerHTML = '';
    const imgE = document.getElementById('flashcard-image');
    if (imgE) imgE.removeAttribute('src');
    const imgWin = document.getElementById('window-image');
    imgWin?.classList.add('hidden');
    const sentWin = document.getElementById('window-sentence');
    sentWin?.classList.add('hidden');

    const updated = SRS.processRating(progress, rating);
    await DB.setProgress(updated);

    if (rating === RATINGS.AGAIN) {
      s.queue.push({ card, progress: updated });
      s.total = s.queue.length;
    }

    s.reviewed++;
    s.index++;
    App._showCurrentCard();
  },

  getTargetWordToSpeak(card) {
    if (!card) return '';
    const deck = App._currentDeck;
    const targetLang = deck?.targetLang || 'other';

    const frontHasKorean = /[\uac00-\ud7af]/.test(card.front || '');
    const backHasKorean = /[\uac00-\ud7af]/.test(card.back || '');
    const frontHasJapanese = /[\u3040-\u30ff\u4e00-\u9faf]/.test(card.front || '');
    const backHasJapanese = /[\u3040-\u30ff\u4e00-\u9faf]/.test(card.back || '');

    if (targetLang === 'ko') {
      if (frontHasKorean) return card.front;
      if (backHasKorean) return card.back.split(/\r?\n/)[0];
    }
    if (targetLang === 'ja') {
      if (frontHasJapanese) return card.front;
      if (backHasJapanese) return card.back.split(/\r?\n/)[0];
    }
    return card.front || '';
  },

  getExemplarySentenceToSpeak(card) {
    if (!card) return '';
    const parsed = parseCardBack(card.back || '', currentLang);
    return parsed.sentenceTarget || '';
  },

  _showStudyComplete() {
    document.getElementById('flashcard-container').classList.add('hidden');
    document.getElementById('mc-card-container').classList.add('hidden');
    document.getElementById('show-answer-area').classList.add('hidden');
    document.getElementById('rating-area').classList.add('hidden');
    document.getElementById('study-complete').classList.remove('hidden');
    document.getElementById('study-progress-bar').style.width = '100%';
    document.getElementById('study-counter').textContent = '✓';

    const s = App.studySession;
    const fn = I18N[currentLang].reviewedStats;
    document.getElementById('complete-stats').textContent = fn ? fn(s ? s.reviewed : 0) : '';
  },

  // ===== TXT IMPORT MODAL =====
  async _showTxtImportModal(file, text) {
    App._pendingTxtFile = file;
    App._pendingTxtText = text;

    const detectedDeckName = TxtParser.extractDeckNameFromHeader(text) || file.name.replace(/\.[^.]+$/, '');
    const nameInput = document.getElementById('txt-deck-name');
    nameInput.value = detectedDeckName;

    // Check if deck with this name already exists
    const allDecks = await DB.getAllDecks();
    const existing = allDecks.find(d => normalizeKey(d.name) === normalizeKey(detectedDeckName));
    document.getElementById('txt-merge-banner').classList.toggle('hidden', !existing);

    const { cards } = TxtParser.parse(text, 'auto');
    App._pendingTxtCards = cards;

    document.querySelectorAll('#txt-separator-chips .chip').forEach(c => {
      c.classList.toggle('active', c.dataset.sep === 'auto');
    });

    // Detect language from header or default to Japanese/Korean if non-ASCII detected
    let suggestedLang = 'other';
    if (/[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/.test(text)) suggestedLang = 'ja';
    else if (/[\uAC00-\uD7AF]/.test(text)) suggestedLang = 'ko';

    document.querySelectorAll('#txt-lang-chips .chip').forEach(c => {
      c.classList.toggle('active', c.dataset.targetLang === suggestedLang);
    });

    App._updateTxtPreview(cards);
    document.getElementById('txt-import-overlay').classList.remove('hidden');
    applyI18n();
  },

  _updateTxtPreview(cards) {
    const preview = document.getElementById('txt-preview');
    const content = document.getElementById('txt-preview-content');
    if (cards.length === 0) {
      preview.classList.add('hidden');
      return;
    }
    preview.classList.remove('hidden');
    content.innerHTML = cards.slice(0, 5).map(c => `
      <div class="txt-preview-row">
        <span class="txt-preview-front">${renderFurigana(c.front)}</span>
        <span class="txt-preview-back">${escapeHtml(c.back)}</span>
      </div>
    `).join('') + (cards.length > 5 ? `<div style="color:var(--text-muted);padding:4px 0;">... +${cards.length - 5} more</div>` : '');
  },

  _hideTxtImportModal() {
    document.getElementById('txt-import-overlay').classList.add('hidden');
    App._pendingTxtFile = null;
    App._pendingTxtText = null;
    App._pendingTxtCards = [];
  },

  // ===== MODAL HELPERS =====
  _showModal(title, placeholder, confirmText, callback, targetLang = 'other') {
    document.getElementById('modal-title').textContent = title;
    const input = document.getElementById('modal-input');
    input.placeholder = placeholder;
    input.value = '';
    document.getElementById('modal-confirm').textContent = confirmText;
    document.querySelectorAll('#modal-lang-chips .chip').forEach(c => {
      c.classList.toggle('active', c.dataset.targetLang === targetLang);
    });
    document.getElementById('modal-overlay').classList.remove('hidden');
    input.focus();
    App._modalCallback = callback;
  },
  _hideModal() {
    document.getElementById('modal-overlay').classList.add('hidden');
    App._modalCallback = null;
  },

  _showConfirm(title, message, callback) {
    document.getElementById('confirm-title').textContent = title;
    document.getElementById('confirm-message').textContent = message;
    document.getElementById('confirm-overlay').classList.remove('hidden');
    App._confirmCallback = callback;
  },
  _hideConfirm() {
    document.getElementById('confirm-overlay').classList.add('hidden');
    App._confirmCallback = null;
  },

  // ===== EVENT BINDINGS =====
  _bindEvents() {
    const $ = id => document.getElementById(id);

    // Initial Language Selection Screen
    document.querySelectorAll('#lang-select-screen .lang-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        currentLang = btn.dataset.uiLang;
        await DB.setSetting('uiLang', currentLang);
        applyI18n();
        App.showScreen('home');
      });
    });

    // Settings UI Language Switcher
    document.querySelectorAll('#settings-lang-chips .chip').forEach(btn => {
      btn.addEventListener('click', async () => {
        currentLang = btn.dataset.uiLang;
        await DB.setSetting('uiLang', currentLang);
        applyI18n();
        App.showToast(currentLang === 'pl' ? 'Język zmieniony na Polski' : 'Language changed to English');
      });
    });

    // Home Screen Language Filter Slider & Chips
    $('btn-lang-slide-left')?.addEventListener('click', () => {
      const slider = $('home-lang-filters');
      if (slider) slider.scrollBy({ left: -160, behavior: 'smooth' });
    });
    $('btn-lang-slide-right')?.addEventListener('click', () => {
      const slider = $('home-lang-filters');
      if (slider) slider.scrollBy({ left: 160, behavior: 'smooth' });
    });

    const langSlider = $('home-lang-filters');
    if (langSlider) {
      let isDown = false;
      let startX = 0;
      let scrollLeft = 0;

      langSlider.addEventListener('mousedown', e => {
        isDown = true;
        langSlider.classList.add('is-dragging');
        startX = e.pageX - langSlider.offsetLeft;
        scrollLeft = langSlider.scrollLeft;
      });

      window.addEventListener('mouseup', () => {
        if (!isDown) return;
        isDown = false;
        langSlider.classList.remove('is-dragging');
      });

      langSlider.addEventListener('mouseleave', () => {
        if (!isDown) return;
        isDown = false;
        langSlider.classList.remove('is-dragging');
      });

      langSlider.addEventListener('mousemove', e => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - langSlider.offsetLeft;
        const walk = (x - startX) * 1.5;
        langSlider.scrollLeft = scrollLeft - walk;
      });

      langSlider.addEventListener('wheel', e => {
        if (e.deltaY !== 0) {
          e.preventDefault();
          langSlider.scrollBy({ left: e.deltaY * 1.5, behavior: 'smooth' });
        }
      }, { passive: false });
    }

    document.querySelectorAll('#home-lang-filters .filter-chip').forEach(chip => {
      chip.addEventListener('click', async () => {
        const lang = chip.dataset.filterLang || 'all';
        await App.filterByLang(lang);
      });
    });

    // Top Header Buttons
    $('btn-theme-toggle')?.addEventListener('click', () => App.toggleTheme());
    $('btn-quick-samples').addEventListener('click', () => App.loadStarterDecks());
    $('btn-settings').addEventListener('click', () => App.showScreen('settings'));
    $('btn-empty-load-samples')?.addEventListener('click', () => App.loadStarterDecks());
    $('btn-empty-import')?.addEventListener('click', () => $('import-deck-input').click());
    $('btn-settings-load-samples')?.addEventListener('click', () => App.loadStarterDecks());

    // Create Deck
    $('btn-create-deck').addEventListener('click', () => {
      const defaultLang = App.currentFilterLang !== 'all' ? App.currentFilterLang : 'other';
      App._showModal(t('createDeck'), t('deckNamePlaceholder'), t('create'), async name => {
        if (!name.trim()) { App.showToast(t('nameRequired')); return; }
        const selLang = document.querySelector('#modal-lang-chips .chip.active')?.dataset.targetLang || 'other';
        await DB.addDeck({
          id: uuid(),
          name: name.trim(),
          description: '',
          targetLang: selLang,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
        App.renderHome();
        App.showToast(t('deckCreated'));
      }, defaultLang);
    });

    document.querySelectorAll('#modal-lang-chips .chip').forEach(c => {
      c.addEventListener('click', () => {
        document.querySelectorAll('#modal-lang-chips .chip').forEach(x => x.classList.remove('active'));
        c.classList.add('active');
      });
    });

    // Import Deck (JSON or TXT)
    $('btn-import-deck').addEventListener('click', () => $('import-deck-input').click());
    $('import-deck-input').addEventListener('change', async e => {
      const file = e.target.files[0];
      if (!file) return;
      const ext = file.name.split('.').pop().toLowerCase();
      try {
        if (ext === 'json') {
          const res = await FileHandler.importDeck(file);
          App.showToast(I18N[currentLang].importedJson(res.name, res.newCount, res.preservedCount));
          App.renderHome();
        } else {
          // TXT, CSV, TSV
          const text = await file.text();
          await App._showTxtImportModal(file, text);
        }
      } catch (err) {
        App.showToast(t('importFailed') + ': ' + err.message);
      }
      e.target.value = '';
    });

    // TXT Import Modal Controls
    document.querySelectorAll('#txt-separator-chips .chip').forEach(c => {
      c.addEventListener('click', () => {
        document.querySelectorAll('#txt-separator-chips .chip').forEach(x => x.classList.remove('active'));
        c.classList.add('active');
        if (App._pendingTxtText) {
          const { cards } = TxtParser.parse(App._pendingTxtText, c.dataset.sep);
          App._pendingTxtCards = cards;
          App._updateTxtPreview(cards);
        }
      });
    });

    document.querySelectorAll('#txt-lang-chips .chip').forEach(c => {
      c.addEventListener('click', () => {
        document.querySelectorAll('#txt-lang-chips .chip').forEach(x => x.classList.remove('active'));
        c.classList.add('active');
      });
    });

    $('txt-cancel').addEventListener('click', () => App._hideTxtImportModal());
    $('txt-confirm').addEventListener('click', async () => {
      const name = $('txt-deck-name').value.trim();
      if (!name) { App.showToast(t('nameRequired')); return; }
      const cards = App._pendingTxtCards;
      if (cards.length === 0) { App.showToast(t('txtNoCards')); return; }
      const targetLang = document.querySelector('#txt-lang-chips .chip.active')?.dataset.targetLang || 'other';

      try {
        const res = await FileHandler.importTxt(cards, name, targetLang);
        App.showToast(I18N[currentLang].importedTxt(res.name, res.newCount, res.preservedCount));
        App._hideTxtImportModal();
        App.renderHome();
      } catch (err) {
        App.showToast(t('importFailed') + ': ' + err.message);
      }
    });
    $('txt-import-overlay').addEventListener('click', e => {
      if (e.target === $('txt-import-overlay')) App._hideTxtImportModal();
    });

    // Deck Detail Screen Events
    $('btn-deck-back').addEventListener('click', () => App.showScreen('home'));
    $('btn-study-deck').addEventListener('click', () => App.showScreen('study'));
    $('btn-add-card').addEventListener('click', () => {
      App.editingCardId = null;
      App.showScreen('card-edit');
    });

    // Study Mode Toggle (Flip vs Quiz)
    document.querySelectorAll('#study-mode-toggle .toggle-btn').forEach(b => {
      b.addEventListener('click', async () => {
        document.querySelectorAll('#study-mode-toggle .toggle-btn').forEach(x => x.classList.remove('active'));
        b.classList.add('active');
        App.studyMode = b.dataset.mode;
        await DB.setSetting('studyMode', App.studyMode);
        document.getElementById('quiz-direction-row').classList.toggle('hidden', App.studyMode !== 'mc');
      });
    });

    // Quiz Direction Toggle (Word->Meaning vs Meaning->Word)
    document.querySelectorAll('#quiz-direction-toggle .toggle-btn').forEach(b => {
      b.addEventListener('click', async () => {
        document.querySelectorAll('#quiz-direction-toggle .toggle-btn').forEach(x => x.classList.remove('active'));
        b.classList.add('active');
        App.quizDirection = b.dataset.dir;
        await DB.setSetting('quizDirection', App.quizDirection);
      });
    });

    // Daily New Cards Goal Stepper & Presets
    const updateDeckGoal = async (newGoal) => {
      newGoal = Math.max(1, Math.min(200, newGoal));
      if (!App.currentDeckId) return;
      const deck = await DB.getDeck(App.currentDeckId);
      if (deck) {
        deck.dailyNewCards = newGoal;
        deck.updatedAt = new Date().toISOString();
        await DB.updateDeck(deck);
        App._currentDeck = deck;
        const goalEl = document.getElementById('deck-daily-goal-num');
        if (goalEl) goalEl.textContent = newGoal;
        document.querySelectorAll('#goal-presets .preset-chip').forEach(btn => {
          btn.classList.toggle('active', parseInt(btn.dataset.goal) === newGoal);
        });
        App.renderDeckDetail();
      }
    };

    $('btn-daily-dec')?.addEventListener('click', async () => {
      const cur = parseInt(document.getElementById('deck-daily-goal-num')?.textContent) || 10;
      await updateDeckGoal(cur - (cur > 10 ? 5 : 1));
    });

    $('btn-daily-inc')?.addEventListener('click', async () => {
      const cur = parseInt(document.getElementById('deck-daily-goal-num')?.textContent) || 10;
      await updateDeckGoal(cur + (cur >= 10 ? 5 : 1));
    });

    document.querySelectorAll('#goal-presets .preset-chip').forEach(btn => {
      btn.addEventListener('click', async () => {
        const val = parseInt(btn.dataset.goal) || 10;
        await updateDeckGoal(val);
      });
    });

    // Tap Capy Greeting card for random dynamic quotes
    $('capy-greeting-card')?.addEventListener('click', () => {
      App.renderCapyQuote();
    });

    // Deck Menu
    $('btn-deck-menu').addEventListener('click', e => {
      e.stopPropagation();
      $('deck-menu').classList.toggle('hidden');
    });
    document.addEventListener('click', () => $('deck-menu')?.classList.add('hidden'));

    $('menu-export-deck').addEventListener('click', async () => {
      await FileHandler.exportDeck(App.currentDeckId);
      App.showToast(t('deckExported'));
    });
    $('menu-export-txt').addEventListener('click', async () => {
      await FileHandler.exportDeckTxt(App.currentDeckId);
      App.showToast(t('deckExported'));
    });
    $('menu-rename-deck').addEventListener('click', async () => {
      const deck = await DB.getDeck(App.currentDeckId);
      App._showModal(t('renameDeck'), deck.name, t('rename'), async name => {
        if (!name.trim()) return;
        deck.name = name.trim();
        deck.updatedAt = new Date().toISOString();
        await DB.addDeck(deck);
        App.renderDeckDetail();
        App.showToast(t('deckRenamed'));
      }, deck.targetLang);
      $('modal-input').value = deck.name;
    });
    $('menu-delete-deck').addEventListener('click', () => {
      App._showConfirm(t('confirm'), t('deleteDeckConfirm'), async () => {
        const cards = await DB.getCardsByDeck(App.currentDeckId);
        for (const c of cards) await DB.deleteProgress(c.id);
        await DB.deleteCardsByDeck(App.currentDeckId);
        await DB.deleteDeck(App.currentDeckId);
        App.showScreen('home');
        App.showToast(t('deckDeleted'));
      });
    });

    // Card Edit Events
    $('btn-card-edit-back').addEventListener('click', () => {
      App.editingCardId = null;
      App.showScreen('deck');
    });
    $('btn-save-card').addEventListener('click', () => App._saveCard());

    // Card Image Upload
    $('image-upload-area').addEventListener('click', e => {
      if (e.target.closest('#btn-remove-image')) return;
      $('card-image-input').click();
    });
    $('card-image-input').addEventListener('change', e => {
      const file = e.target.files[0];
      if (!file) return;
      if (file.size > 5 * 1024 * 1024) {
        App.showToast(t('imageTooLarge'));
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        App._cardImageData = reader.result;
        $('image-preview').src = reader.result;
        $('image-preview-container').classList.remove('hidden');
        $('image-placeholder').classList.add('hidden');
      };
      reader.readAsDataURL(file);
      e.target.value = '';
    });
    $('btn-remove-image').addEventListener('click', e => {
      e.stopPropagation();
      App._cardImageData = null;
      $('image-preview-container').classList.add('hidden');
      $('image-placeholder').classList.remove('hidden');
    });

    // Study Screen Controls
    $('btn-study-back').addEventListener('click', () => {
      App.studySession = null;
      App.showScreen('deck');
    });
    $('btn-show-answer').addEventListener('click', () => App._flipCard());
    $('flashcard-container').addEventListener('click', () => {
      if (App.studySession && !App.studySession.isFlipped) App._flipCard();
    });

    // Audio TTS Speech Buttons & Event Listeners
    const triggerSpeak = (btnEl, text, langCode) => {
      if (!text) return;
      if (btnEl) btnEl.classList.add('speaking');
      Speech.speak(text, langCode, () => {
        if (btnEl) btnEl.classList.remove('speaking');
      });
      setTimeout(() => {
        if (btnEl) btnEl.classList.remove('speaking');
      }, 4000);
    };

    const speakTargetWord = (btnEl) => {
      if (!App.studySession) return;
      const { card } = App.studySession.queue[App.studySession.index];
      const lang = App._currentDeck?.targetLang || 'other';
      const word = App.getTargetWordToSpeak(card);
      triggerSpeak(btnEl, word, lang);
    };

    const speakSentence = (btnEl) => {
      if (!App.studySession) return;
      const { card } = App.studySession.queue[App.studySession.index];
      const lang = App._currentDeck?.targetLang || 'other';
      const sent = App.getExemplarySentenceToSpeak(card);
      triggerSpeak(btnEl, sent, lang);
    };

    // Header speaker button: speaks target word
    $('btn-audio-speak').addEventListener('click', e => {
      e.stopPropagation();
      speakTargetWord($('btn-audio-speak'));
    });

    // Front card face pronounce button
    $('btn-card-speak-front').addEventListener('click', e => {
      e.stopPropagation();
      speakTargetWord($('btn-card-speak-front'));
    });

    // Back card face pronounce button
    $('btn-card-speak-back')?.addEventListener('click', e => {
      e.stopPropagation();
      speakTargetWord($('btn-card-speak-back'));
    });

    // Clicking target answer directly on back face pronounces it
    $('card-target-answer')?.addEventListener('click', e => {
      e.stopPropagation();
      speakTargetWord($('btn-card-speak-back') || $('card-target-answer'));
    });

    // Sentence box pronounce button
    $('btn-sentence-speak')?.addEventListener('click', e => {
      e.stopPropagation();
      speakSentence($('btn-sentence-speak'));
    });

    // Clicking exemplary sentence text pronounces it
    $('card-sentence-target')?.addEventListener('click', e => {
      e.stopPropagation();
      speakSentence($('btn-sentence-speak') || $('card-sentence-target'));
    });

    // MC Quiz Mode Pronounce button
    $('btn-mc-speak')?.addEventListener('click', e => {
      e.stopPropagation();
      if (!App.studySession) return;
      const { card } = App.studySession.queue[App.studySession.index];
      const lang = App._currentDeck?.targetLang || 'other';
      triggerSpeak($('btn-mc-speak'), card.front, lang);
    });

    // SRS Rating Buttons
    $('btn-again').addEventListener('click', () => App._rateCard(RATINGS.AGAIN));
    $('btn-hard').addEventListener('click', () => App._rateCard(RATINGS.HARD));
    $('btn-good').addEventListener('click', () => App._rateCard(RATINGS.GOOD));
    $('btn-easy').addEventListener('click', () => App._rateCard(RATINGS.EASY));
    $('btn-finish-study').addEventListener('click', () => {
      App.studySession = null;
      App.showScreen('deck');
    });

    // MC Option Clicks
    document.querySelectorAll('#mc-options .mc-option').forEach(btn => {
      btn.addEventListener('click', () => App._handleMCAnswer(btn));
    });

    // Keyboard Shortcuts (Space to flip, 1-4 for ratings or MC options)
    document.addEventListener('keydown', e => {
      if (!$('study-screen').classList.contains('active') || !App.studySession) return;

      if (App.studyMode === 'flip') {
        if (!App.studySession.isFlipped) {
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            App._flipCard();
          }
        } else {
          if (e.key === '1') App._rateCard(RATINGS.AGAIN);
          if (e.key === '2') App._rateCard(RATINGS.HARD);
          if (e.key === '3') App._rateCard(RATINGS.GOOD);
          if (e.key === '4') App._rateCard(RATINGS.EASY);
        }
      } else {
        // Quiz Mode (1-4 to pick option)
        if (!App.studySession.mcAnswered) {
          const idx = parseInt(e.key) - 1;
          if (idx >= 0 && idx <= 3) {
            const btns = document.querySelectorAll('#mc-options .mc-option');
            if (btns[idx]) App._handleMCAnswer(btns[idx]);
          }
        }
      }
    });

    // Settings Screen Events
    $('btn-settings-back').addEventListener('click', async () => {
      const s = App._getSettings();
      await DB.setSetting('newPerDay', s.newPerDay);
      await DB.setSetting('maxReviews', s.maxReviews);
      App.showScreen('home');
    });

    // Settings Theme Selector
    document.querySelectorAll('#settings-theme-chips .chip').forEach(btn => {
      btn.addEventListener('click', async () => {
        await App.setTheme(btn.dataset.themeVal, true);
      });
    });

    // Safe Progress File Export & Restore
    $('btn-export-progress').addEventListener('click', async () => {
      await FileHandler.exportProgress();
      App.showToast(t('progressExported'));
    });
    $('btn-import-progress').addEventListener('click', () => $('import-progress-input').click());
    $('import-progress-input').addEventListener('change', async e => {
      const file = e.target.files[0];
      if (!file) return;
      try {
        const r = await FileHandler.importProgress(file);
        App.showToast(I18N[currentLang].progressRestored(r.matchCount, r.totalInFile));
        App.renderHome();
      } catch (err) {
        App.showToast(t('importFailed') + ': ' + err.message);
      }
      e.target.value = '';
    });

    // Full Backup Export & Restore
    $('btn-export-all').addEventListener('click', async () => {
      await FileHandler.exportAll();
      App.showToast(t('backupExported'));
    });
    $('btn-import-all').addEventListener('click', () => $('import-all-input').click());
    $('import-all-input').addEventListener('change', async e => {
      const file = e.target.files[0];
      if (!file) return;
      try {
        const r = await FileHandler.importAll(file);
        App.showToast(I18N[currentLang].backupRestored(r.totalDecks, r.totalCards));
        App.renderHome();
      } catch (err) {
        App.showToast(t('importFailed') + ': ' + err.message);
      }
      e.target.value = '';
    });

    // Danger Zone Clear
    $('btn-reset-all').addEventListener('click', () => {
      App._showConfirm(t('confirm'), t('resetConfirm'), async () => {
        await DB.clearAll();
        App.showScreen('home');
        App.showToast('All data cleared');
      });
    });

    // Modal Common Controls
    $('modal-cancel').addEventListener('click', () => App._hideModal());
    $('modal-confirm').addEventListener('click', () => {
      if (App._modalCallback) App._modalCallback($('modal-input').value);
      App._hideModal();
    });
    $('modal-input').addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        $('modal-confirm').click();
      }
    });
    $('modal-overlay').addEventListener('click', e => {
      if (e.target === $('modal-overlay')) App._hideModal();
    });

    $('confirm-cancel').addEventListener('click', () => App._hideConfirm());
    $('confirm-ok').addEventListener('click', () => {
      if (App._confirmCallback) App._confirmCallback();
      App._hideConfirm();
    });
    $('confirm-overlay').addEventListener('click', e => {
      if (e.target === $('confirm-overlay')) App._hideConfirm();
    });
  },
};

// ==========================================
// EXPOSE GLOBALLY FOR INLINE DOM HANDLERS
// ==========================================
window.App = App;
window.filterByLang = (lang) => App.filterByLang(lang);

// ==========================================
// BOOT
// ==========================================
document.addEventListener('DOMContentLoaded', () => App.init());
