import type { CardCategory, Locale } from '../types/card';

export const LOCALE_NAMES: Record<Locale, { short: string; native: string; flag: string }> = {
  es: { short: 'ES', native: 'Español', flag: '🇪🇸' },
  sk: { short: 'SK', native: 'Slovenčina', flag: '🇸🇰' },
  en: { short: 'EN', native: 'English', flag: '🇬🇧' },
};

export const CATEGORY_LABELS: Record<CardCategory, Record<Locale, string>> = {
  city: { es: 'Ciudad histórica', sk: 'Historické mesto', en: 'Historic City' },
  monument: { es: 'Monumento', sk: 'Pamiatka', en: 'Monument' },
  person: { es: 'Personaje', sk: 'Osobnosť', en: 'Historical Figure' },
  culture: { es: 'Cultura y Ruta', sk: 'Kultúra a trasa', en: 'Culture & Route' },
};

export interface UIStrings {
  appTitle: string;
  appSubtitle: string;
  startGame: string;
  soloMode: string;
  soloDesc: string;
  multiMode: string;
  multiDesc: string;
  playersLabel: string;
  playerDefault: string;
  addPlayer: string;
  timerLabel: string;
  unlimited: string;
  seconds: string;
  studyLangLabel: string;
  questionLangLabel: string;
  sameAsStudy: string;
  rulesTitle: string;
  rulesSteps: string[];
  studyingHint: string;
  flipEarly: string;
  timeUp: string;
  rollDice: string;
  rolling: string;
  selectedQuestion: string;
  allQuestionsHint: string;
  revealAnswer: string;
  hideAnswer: string;
  correctBtn: string;
  wrongBtn: string;
  nextCard: string;
  cardOf: string;
  score: string;
  cardsWon: string;
  turnOf: string;
  gameOver: string;
  winnerIs: string;
  tieGame: string;
  playAgain: string;
  backHome: string;
  soundOn: string;
  soundOff: string;
  studySide: string;
  questionSide: string;
  peekFront: string;
  backToQuestions: string;
}

export const UI: Record<Locale, UIStrings> = {
  es: {
    appTitle: 'BrainBox España',
    appSubtitle: 'Observa la tarjeta, memoriza los detalles antes de que caiga la arena y pon a prueba tu memoria.',
    startGame: 'Empezar partida',
    soloMode: 'Solitario / Estudio',
    soloDesc: 'Juega a tu ritmo. Tira el dado o repasa las 6 preguntas.',
    multiMode: 'Multijugador local',
    multiDesc: 'Pass & Play en el mismo dispositivo. Pasa el móvil tras estudiar.',
    playersLabel: 'Jugadores',
    playerDefault: 'Jugador',
    addPlayer: 'Añadir jugador',
    timerLabel: 'Tiempo de estudio',
    unlimited: 'Sin límite',
    seconds: 'seg',
    studyLangLabel: 'Idioma del anverso (estudio)',
    questionLangLabel: 'Idioma del reverso (preguntas)',
    sameAsStudy: 'Igual que estudio',
    rulesTitle: 'Cómo se juega',
    rulesSteps: [
      '1. Observa la tarjeta ilustrada y sus cápsulas de datos durante 10 segundos.',
      '2. Al terminar el tiempo, la tarjeta se voltea y se tira el dado (1–6).',
      '3. Responde la pregunta indicada sin mirar el anverso. ¡Si aciertas, te quedas la tarjeta!',
    ],
    studyingHint: '¡Memoriza los detalles visuales y las fechas!',
    flipEarly: '¡Listo, voltear ya!',
    timeUp: '¡Tiempo!',
    rollDice: 'Tirar el dado',
    rolling: 'Tirando...',
    selectedQuestion: 'Pregunta sorteada',
    allQuestionsHint: 'Pulsa cualquier pregunta para ver la respuesta',
    revealAnswer: 'Ver respuesta',
    hideAnswer: 'Ocultar',
    correctBtn: '¡Acerté!',
    wrongBtn: 'Fallé',
    nextCard: 'Siguiente tarjeta',
    cardOf: 'Tarjeta',
    score: 'Puntos',
    cardsWon: 'tarjetas',
    turnOf: 'Turno de',
    gameOver: '¡Fin de la partida!',
    winnerIs: 'Ganador/a',
    tieGame: '¡Empate!',
    playAgain: 'Jugar otra vez',
    backHome: 'Configuración',
    soundOn: 'Sonido activo',
    soundOff: 'Silenciado',
    studySide: 'Anverso · Estudio',
    questionSide: 'Reverso · Preguntas',
    peekFront: 'Comprobar anverso',
    backToQuestions: 'Volver a preguntas',
  },
  sk: {
    appTitle: 'BrainBox Španielsko',
    appSubtitle: 'Pozoruj kartu, zapamätaj si detaily skôr než sa presype piesok a otestuj svoju pamäť.',
    startGame: 'Začať hru',
    soloMode: 'Sólo / Štúdium',
    soloDesc: 'Hraj vlastným tempom. Hoď kockou alebo si precvič všetkých 6 otázok.',
    multiMode: 'Lokálny multiplayer',
    multiDesc: 'Pass & Play na jednom zariadení. Po štúdiu podaj mobil ďalej.',
    playersLabel: 'Hráči',
    playerDefault: 'Hráč',
    addPlayer: 'Pridať hráča',
    timerLabel: 'Čas na štúdium',
    unlimited: 'Bez limitu',
    seconds: 'sek',
    studyLangLabel: 'Jazyk prednej strany (štúdium)',
    questionLangLabel: 'Jazyk zadnej strany (otázky)',
    sameAsStudy: 'Rovnaký ako štúdium',
    rulesTitle: 'Ako sa hrá',
    rulesSteps: [
      '1. Pozorne si prezri ilustrovanú kartu a jej údaje počas 10 sekúnd.',
      '2. Po uplynutí času sa karta otočí a hodí sa kocka (1–6).',
      '3. Odpovedz na vyžrebovanú otázku bez pozerania. Ak uhádneš, kartu si necháš!',
    ],
    studyingHint: 'Zapamätaj si vizuálne detaily a letopočty!',
    flipEarly: 'Som pripravený, otočiť!',
    timeUp: 'Čas vypršal!',
    rollDice: 'Hodiť kockou',
    rolling: 'Hádžem...',
    selectedQuestion: 'Vyžrebovaná otázka',
    allQuestionsHint: 'Klikni na ľubovoľnú otázku pre zobrazenie odpovede',
    revealAnswer: 'Zobraziť odpoveď',
    hideAnswer: 'Skryť',
    correctBtn: 'Správne!',
    wrongBtn: 'Nesprávne',
    nextCard: 'Ďalšia karta',
    cardOf: 'Karta',
    score: 'Body',
    cardsWon: 'kariet',
    turnOf: 'Na ťahu je',
    gameOver: 'Koniec hry!',
    winnerIs: 'Víťaz',
    tieGame: 'Remíza!',
    playAgain: 'Hrať znova',
    backHome: 'Nastavenia',
    soundOn: 'Zvuk zapnutý',
    soundOff: 'Stlmené',
    studySide: 'Predná strana · Štúdium',
    questionSide: 'Zadná strana · Otázky',
    peekFront: 'Skontrolovať prednú stranu',
    backToQuestions: 'Späť na otázky',
  },
  en: {
    appTitle: 'BrainBox Spain',
    appSubtitle: 'Study the card, memorize key details before the sand runs out, and test your memory.',
    startGame: 'Start Game',
    soloMode: 'Solo / Study',
    soloDesc: 'Play at your own pace. Roll the die or practice all 6 questions.',
    multiMode: 'Local Multiplayer',
    multiDesc: 'Pass & Play on one device. Hand the phone over after studying.',
    playersLabel: 'Players',
    playerDefault: 'Player',
    addPlayer: 'Add player',
    timerLabel: 'Study timer',
    unlimited: 'Unlimited',
    seconds: 'sec',
    studyLangLabel: 'Front side language (study)',
    questionLangLabel: 'Back side language (questions)',
    sameAsStudy: 'Same as study',
    rulesTitle: 'How to play',
    rulesSteps: [
      '1. Study the illustrated card and its fact badges for 10 seconds.',
      '2. When time is up, the card flips and the 6-sided die is rolled.',
      '3. Answer the rolled question without peeking. Get it right to keep the card!',
    ],
    studyingHint: 'Memorize the visual details and historical dates!',
    flipEarly: 'Ready, flip now!',
    timeUp: "Time's up!",
    rollDice: 'Roll the die',
    rolling: 'Rolling...',
    selectedQuestion: 'Rolled question',
    allQuestionsHint: 'Tap any question to reveal its answer',
    revealAnswer: 'Show answer',
    hideAnswer: 'Hide',
    correctBtn: 'Got it!',
    wrongBtn: 'Missed it',
    nextCard: 'Next card',
    cardOf: 'Card',
    score: 'Score',
    cardsWon: 'cards',
    turnOf: 'Turn:',
    gameOver: 'Game Over!',
    winnerIs: 'Winner',
    tieGame: "It's a tie!",
    playAgain: 'Play again',
    backHome: 'Settings',
    soundOn: 'Sound on',
    soundOff: 'Muted',
    studySide: 'Front · Study',
    questionSide: 'Back · Questions',
    peekFront: 'Check front side',
    backToQuestions: 'Back to questions',
  },
};
