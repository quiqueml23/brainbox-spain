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
  playerStudyShort: string;
  playerQuestionShort: string;
  timerLabel: string;
  unlimited: string;
  seconds: string;
  studyLangLabel: string;
  questionLangLabel: string;
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
  // Pre-reveal
  cardPrepTitle: string;
  startStudyBtn: string;
  prepInstructions: string;
  readyPlayer: string;
  prepLangHeading: string;
  // Won cards / accumulated
  wonCardsTitle: string;
  noWonCardsYet: string;
  resetScores: string;
  viewWonCards: string;
  close: string;
  accumulatedTotal: string;
}

export const UI: Record<Locale, UIStrings> = {
  es: {
    appTitle: 'BrainBox España',
    appSubtitle: 'Observa la tarjeta, memoriza las imágenes y datos antes de que caiga la arena y pon a prueba tu memoria.',
    startGame: 'Empezar partida',
    soloMode: 'Solitario / Estudio',
    soloDesc: 'Juega a tu ritmo. Tira el dado o repasa las 6 preguntas.',
    multiMode: 'Multijugador local',
    multiDesc: 'Pass & Play en el mismo móvil. Cada jugador tiene sus propios idiomas.',
    playersLabel: 'Jugadores e idiomas',
    playerDefault: 'Jugador',
    addPlayer: 'Añadir jugador',
    playerStudyShort: 'Estudio:',
    playerQuestionShort: 'Preguntas:',
    timerLabel: 'Tiempo de estudio',
    unlimited: 'Sin límite',
    seconds: 'seg',
    studyLangLabel: 'Idioma de la tarjeta (estudio)',
    questionLangLabel: 'Idioma del reverso (preguntas)',
    rulesTitle: 'Cómo se juega',
    rulesSteps: [
      '1. Antes de revelar la tarjeta, confirma el idioma de estudio y pulsa «Empezar».',
      '2. Memoriza las imágenes y sus datos durante 10 segundos antes de que caiga la arena.',
      '3. La tarjeta se voltea, se tira el dado (1–6) y respondes. ¡Si aciertas, ganas la tarjeta!',
    ],
    studyingHint: '¡Memoriza las ilustraciones y los datos debajo de cada una!',
    flipEarly: '¡Listo, voltear ya!',
    timeUp: '¡Tiempo!',
    rollDice: 'Tirar el dado',
    rolling: 'Tirando...',
    selectedQuestion: 'Pregunta sorteada',
    allQuestionsHint: 'Pulsa cualquier pregunta para ver la respuesta',
    revealAnswer: 'Ver respuesta',
    hideAnswer: 'Ocultar',
    correctBtn: '¡Acertó! (+1 tarjeta)',
    wrongBtn: 'Falló',
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
    cardPrepTitle: 'Prepárate para memorizar',
    startStudyBtn: '¡Empezar a memorizar!',
    prepInstructions: 'Pasa el móvil al jugador. Cuando esté listo, pulsa empezar para iniciar el temporizador.',
    readyPlayer: '¿Todo listo?',
    prepLangHeading: 'Idioma para esta tarjeta:',
    wonCardsTitle: 'Pila de tarjetas ganadas',
    noWonCardsYet: 'Aún no has ganado tarjetas en esta partida.',
    resetScores: 'Reiniciar marcador',
    viewWonCards: 'Ver tarjetas',
    close: 'Cerrar',
    accumulatedTotal: 'Puntos acumulados',
  },
  sk: {
    appTitle: 'BrainBox Španielsko',
    appSubtitle: 'Pozoruj kartu, zapamätaj si obrázky a fakty skôr než sa presype piesok a otestuj svoju pamäť.',
    startGame: 'Začať hru',
    soloMode: 'Sólo / Štúdium',
    soloDesc: 'Hraj vlastným tempom. Hoď kockou alebo si precvič všetkých 6 otázok.',
    multiMode: 'Lokálny multiplayer',
    multiDesc: 'Pass & Play na jednom mobile. Každý hráč má vlastné nastavenie jazykov.',
    playersLabel: 'Hráči a jazyky',
    playerDefault: 'Hráč',
    addPlayer: 'Pridať hráča',
    playerStudyShort: 'Štúdium:',
    playerQuestionShort: 'Otázky:',
    timerLabel: 'Čas na štúdium',
    unlimited: 'Bez limitu',
    seconds: 'sek',
    studyLangLabel: 'Jazyk karty (štúdium)',
    questionLangLabel: 'Jazyk zadnej strany (otázky)',
    rulesTitle: 'Ako sa hrá',
    rulesSteps: [
      '1. Pred odhalením karty potvrď jazyk a stlač „Začať“.',
      '2. Počas 10 sekúnd si zapamätaj ilustrácie a údaje pod nimi.',
      '3. Karta sa otočí, hodí sa kocka (1–6) a odpovedáš. Ak uhádneš, karta je tvoja!',
    ],
    studyingHint: 'Zapamätaj si ilustrácie a údaje pod každou z nich!',
    flipEarly: 'Som pripravený, otočiť!',
    timeUp: 'Čas vypršal!',
    rollDice: 'Hodiť kockou',
    rolling: 'Hádžem...',
    selectedQuestion: 'Vyžrebovaná otázka',
    allQuestionsHint: 'Klikni na ľubovoľnú otázku pre zobrazenie odpovede',
    revealAnswer: 'Zobraziť odpoveď',
    hideAnswer: 'Skryť',
    correctBtn: 'Správne! (+1 karta)',
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
    cardPrepTitle: 'Priprav sa na štúdium',
    startStudyBtn: 'Začať študovať!',
    prepInstructions: 'Podaj mobil hráčovi na ťahu. Keď bude pripravený, stlač tlačidlo a spustí sa časovač.',
    readyPlayer: 'Všetko pripravené?',
    prepLangHeading: 'Jazyk pre túto kartu:',
    wonCardsTitle: 'Získané karty',
    noWonCardsYet: 'V tejto hre zatiaľ nemáš žiadne získané karty.',
    resetScores: 'Vynulovať skóre',
    viewWonCards: 'Zobraziť karty',
    close: 'Zavrieť',
    accumulatedTotal: 'Celkové skóre',
  },
  en: {
    appTitle: 'BrainBox Spain',
    appSubtitle: 'Study the card, memorize the images and facts before the sand runs out, and test your memory.',
    startGame: 'Start Game',
    soloMode: 'Solo / Study',
    soloDesc: 'Play at your own pace. Roll the die or practice all 6 questions.',
    multiMode: 'Local Multiplayer',
    multiDesc: 'Pass & Play on one phone. Each player has their own language profile.',
    playersLabel: 'Players & Languages',
    playerDefault: 'Player',
    addPlayer: 'Add player',
    playerStudyShort: 'Study:',
    playerQuestionShort: 'Questions:',
    timerLabel: 'Study timer',
    unlimited: 'Unlimited',
    seconds: 'sec',
    studyLangLabel: 'Card language (study)',
    questionLangLabel: 'Back side language (questions)',
    rulesTitle: 'How to play',
    rulesSteps: [
      '1. Before revealing the card, confirm the study language and press "Start".',
      '2. Memorize the illustrations and captions for 10 seconds before the sand runs out.',
      '3. The card flips, the 6-sided die rolls, and you answer. Get it right to win the card!',
    ],
    studyingHint: 'Memorize the illustrations and the facts beneath each one!',
    flipEarly: 'Ready, flip now!',
    timeUp: "Time's up!",
    rollDice: 'Roll the die',
    rolling: 'Rolling...',
    selectedQuestion: 'Rolled question',
    allQuestionsHint: 'Tap any question to reveal its answer',
    revealAnswer: 'Show answer',
    hideAnswer: 'Hide',
    correctBtn: 'Correct! (+1 card)',
    wrongBtn: 'Incorrect',
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
    cardPrepTitle: 'Get ready to study',
    startStudyBtn: 'Start studying!',
    prepInstructions: 'Hand the phone to the player. When ready, tap start to reveal the card and start the timer.',
    readyPlayer: 'Ready?',
    prepLangHeading: 'Language for this card:',
    wonCardsTitle: 'Won Cards Pile',
    noWonCardsYet: 'No cards won in this match yet.',
    resetScores: 'Reset scores',
    viewWonCards: 'View cards',
    close: 'Close',
    accumulatedTotal: 'Accumulated score',
  },
};
