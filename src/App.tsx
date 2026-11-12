import { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  Award,
  Check,
  Clock,
  Home,
  Play,
  Plus,
  RotateCcw,
  Trash2,
  Users,
  User,
  Volume2,
  VolumeX,
  X,
} from 'lucide-react';
import { DiceRoller } from './components/DiceRoller';
import { GameCard } from './components/GameCard';
import { LanguageToggle } from './components/LanguageToggle';
import { SandTimer } from './components/SandTimer';
import { WonCardsModal } from './components/WonCardsModal';
import { CARDS } from './data/cards';
import { UI } from './i18n/ui';
import type {
  BrainCard,
  CardPhase,
  GameMode,
  Locale,
  PlayerProfile,
  TimerDuration,
} from './types/card';
import { playFail, playSuccess, playTick, playTimeUp } from './utils/sound';

type Screen = 'lobby' | 'playing' | 'summary';

const STORAGE_KEY_PLAYERS = 'brainbox_spain_players_v2';
const STORAGE_KEY_SETTINGS = 'brainbox_spain_settings_v2';

const DEFAULT_PLAYERS: PlayerProfile[] = [
  {
    id: 'p1',
    name: 'Quique',
    studyLocale: 'es',
    questionLocale: 'es',
    score: 0,
    wonCardIds: [],
  },
  {
    id: 'p2',
    name: 'Priateľ (Slovák)',
    studyLocale: 'sk',
    questionLocale: 'en',
    score: 0,
    wonCardIds: [],
  },
];

function loadSavedPlayers(): PlayerProfile[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PLAYERS);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch {
    // Ignore fallback to defaults
  }
  return DEFAULT_PLAYERS;
}

function loadSavedSettings(): { timer: TimerDuration; mode: GameMode; muted: boolean } {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_SETTINGS);
    if (raw) return JSON.parse(raw);
  } catch {
    // fallback
  }
  return { timer: 10, mode: 'multiplayer', muted: false };
}

function shuffleCards(cards: BrainCard[]): BrainCard[] {
  const copy = [...cards];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function App() {
  const savedSettings = useMemo(() => loadSavedSettings(), []);
  const [screen, setScreen] = useState<Screen>('lobby');
  const [mode, setMode] = useState<GameMode>(savedSettings.mode);
  const [timerDuration, setTimerDuration] = useState<TimerDuration>(savedSettings.timer);
  const [muted, setMuted] = useState(savedSettings.muted);

  const [players, setPlayers] = useState<PlayerProfile[]>(() => loadSavedPlayers());
  const [inspectingPlayer, setInspectingPlayer] = useState<PlayerProfile | null>(null);

  const [deck, setDeck] = useState<BrainCard[]>(() => shuffleCards(CARDS));
  const [cardIndex, setCardIndex] = useState(0);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  // Card Phase: 'prep' -> 'studying' -> 'questions'
  const [phase, setPhase] = useState<CardPhase>('prep');
  const [peekingFront, setPeekingFront] = useState(false);
  const [remaining, setRemaining] = useState<number>(10);
  const [rolledNumber, setRolledNumber] = useState<number | null>(null);
  const [rolling, setRolling] = useState(false);
  const [revealedAnswers, setRevealedAnswers] = useState<Record<number, boolean>>({});
  const [roundScored, setRoundScored] = useState<'won' | 'lost' | null>(null);

  // Active languages for current turn
  const [activeStudyLocale, setActiveStudyLocale] = useState<Locale>('es');
  const [activeQuestionLocale, setActiveQuestionLocale] = useState<Locale>('es');

  // Persist players and settings
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_PLAYERS, JSON.stringify(players));
    } catch {
      // ignore
    }
  }, [players]);

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY_SETTINGS,
        JSON.stringify({ timer: timerDuration, mode, muted }),
      );
    } catch {
      // ignore
    }
  }, [timerDuration, mode, muted]);

  const activePlayers = useMemo(
    () => (mode === 'solo' ? [players[0]] : players),
    [mode, players],
  );
  const currentPlayer = activePlayers[currentPlayerIndex % activePlayers.length];
  const activeCard = deck[cardIndex];

  // Set card languages whenever current player changes or when new card begins
  useEffect(() => {
    if (currentPlayer) {
      setActiveStudyLocale(currentPlayer.studyLocale);
      setActiveQuestionLocale(currentPlayer.questionLocale);
    }
  }, [currentPlayerIndex, currentPlayer]);

  const t = UI[activeStudyLocale];

  // Countdown timer effect during studying phase
  useEffect(() => {
    if (screen !== 'playing' || phase !== 'studying' || timerDuration === 0) return;

    if (remaining <= 0) {
      playTimeUp(muted);
      setPhase('questions');
      handleRollDice();
      return;
    }

    const id = window.setTimeout(() => {
      const next = remaining - 1;
      if (next > 0 && next <= 3) {
        playTick(muted);
      }
      setRemaining(next);
    }, 1000);

    return () => window.clearTimeout(id);
  }, [screen, phase, timerDuration, remaining, muted]);

  function startNewGame(keepPoints = false) {
    const freshDeck = shuffleCards(CARDS);
    setDeck(freshDeck);
    setCardIndex(0);
    setCurrentPlayerIndex(0);
    if (!keepPoints) {
      setPlayers((prev) => prev.map((p) => ({ ...p, score: 0, wonCardIds: [] })));
    }
    resetRoundState(timerDuration);
    setScreen('playing');
  }

  function resetRoundState(duration: TimerDuration) {
    setPhase('prep');
    setPeekingFront(false);
    setRemaining(duration);
    setRolledNumber(null);
    setRolling(false);
    setRevealedAnswers({});
    setRoundScored(null);
  }

  function handleStartStudying() {
    setPhase('studying');
    setRemaining(timerDuration);
  }

  function handleRollDice() {
    if (rolling) return;
    setRolling(true);
    window.setTimeout(() => {
      const result = Math.floor(Math.random() * 6) + 1;
      setRolledNumber(result);
      setRolling(false);
    }, 450);
  }

  function handleFlipNow() {
    setPhase('questions');
    if (rolledNumber === null) {
      handleRollDice();
    }
  }

  function handleScore(won: boolean) {
    if (roundScored !== null || !activeCard) return;
    if (won) {
      playSuccess(muted);
      setPlayers((prev) =>
        prev.map((p) =>
          p.id === currentPlayer.id
            ? {
                ...p,
                score: p.score + 1,
                wonCardIds: p.wonCardIds.includes(activeCard.id)
                  ? p.wonCardIds
                  : [...p.wonCardIds, activeCard.id],
              }
            : p,
        ),
      );
      setRoundScored('won');
    } else {
      playFail(muted);
      setRoundScored('lost');
    }
  }

  function handleNextCard() {
    if (cardIndex + 1 >= deck.length) {
      setScreen('summary');
      return;
    }
    setCardIndex((idx) => idx + 1);
    if (mode === 'multiplayer') {
      setCurrentPlayerIndex((idx) => (idx + 1) % activePlayers.length);
    }
    resetRoundState(timerDuration);
  }

  function addPlayer() {
    if (players.length >= 6) return;
    const nextNum = players.length + 1;
    setPlayers((prev) => [
      ...prev,
      {
        id: `p-${Date.now()}`,
        name: `${t.playerDefault} ${nextNum}`,
        studyLocale: 'es',
        questionLocale: 'es',
        score: 0,
        wonCardIds: [],
      },
    ]);
  }

  function removePlayer(id: string) {
    if (players.length <= 2) return;
    setPlayers((prev) => prev.filter((p) => p.id !== id));
  }

  function updatePlayer(id: string, updates: Partial<PlayerProfile>) {
    setPlayers((prev) => prev.map((p) => (p.id === id ? { ...p, ...updates } : p)));
  }

  function resetAllScores() {
    setPlayers((prev) => prev.map((p) => ({ ...p, score: 0, wonCardIds: [] })));
  }

  return (
    <div className="min-h-screen px-3 py-4 sm:px-6 sm:py-6">
      <div className="mx-auto max-w-xl">
        {/* TOP BAR */}
        <header className="mb-4 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => setScreen('lobby')}
            className="flex items-center gap-2 text-left"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-terracotta font-display text-lg font-bold text-white shadow-sm">
              B
            </span>
            <div>
              <h1 className="font-display text-lg font-bold leading-none text-cobalt sm:text-xl">
                {t.appTitle}
              </h1>
              <span className="text-[11px] font-semibold text-slate-500">
                ES · SK · EN · BrainBox España
              </span>
            </div>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMuted((m) => !m)}
              aria-label={muted ? t.soundOff : t.soundOn}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-amber-900/10 bg-white text-slate-700 shadow-sm transition hover:bg-amber-50"
            >
              {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </button>
            {screen !== 'lobby' && (
              <button
                type="button"
                onClick={() => setScreen('lobby')}
                aria-label={t.backHome}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-amber-900/10 bg-white text-slate-700 shadow-sm transition hover:bg-amber-50"
              >
                <Home className="h-4 w-4" />
              </button>
            )}
          </div>
        </header>

        {/* LOBBY SCREEN */}
        {screen === 'lobby' && (
          <main className="space-y-4">
            <section className="rounded-3xl border border-amber-900/10 bg-white p-5 shadow-md">
              <p className="text-sm leading-relaxed text-slate-600">{t.appSubtitle}</p>

              {/* Mode Selection */}
              <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setMode('solo')}
                  className={`rounded-2xl border-2 p-3.5 text-left transition ${
                    mode === 'solo'
                      ? 'border-terracotta bg-terracotta/5'
                      : 'border-amber-900/10 hover:border-amber-900/25'
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold text-cobalt">
                    <User className="h-4 w-4 text-terracotta" />
                    {t.soloMode}
                  </div>
                  <p className="mt-1 text-xs text-slate-600">{t.soloDesc}</p>
                </button>

                <button
                  type="button"
                  onClick={() => setMode('multiplayer')}
                  className={`rounded-2xl border-2 p-3.5 text-left transition ${
                    mode === 'multiplayer'
                      ? 'border-terracotta bg-terracotta/5'
                      : 'border-amber-900/10 hover:border-amber-900/25'
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold text-cobalt">
                    <Users className="h-4 w-4 text-terracotta" />
                    {t.multiMode}
                  </div>
                  <p className="mt-1 text-xs text-slate-600">{t.multiDesc}</p>
                </button>
              </div>

              {/* Players with Per-Player Languages & Accumulated Points */}
              <div className="mt-5 rounded-2xl bg-parchment/80 p-4 border border-amber-900/10">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wide text-slate-700">
                    {t.playersLabel}
                  </span>
                  {mode === 'multiplayer' && players.length < 6 && (
                    <button
                      type="button"
                      onClick={addPlayer}
                      className="inline-flex items-center gap-1 rounded-xl bg-white px-2.5 py-1 text-xs font-semibold text-cobalt shadow-sm hover:bg-slate-50"
                    >
                      <Plus className="h-3.5 w-3.5" />
                      {t.addPlayer}
                    </button>
                  )}
                </div>

                <div className="space-y-3">
                  {(mode === 'solo' ? [players[0]] : players).map((p, i) => (
                    <div
                      key={p.id}
                      className="rounded-2xl border border-amber-900/10 bg-white p-3 shadow-sm"
                    >
                      <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-cobalt/10 text-xs font-bold text-cobalt">
                          #{i + 1}
                        </span>
                        <input
                          type="text"
                          value={p.name}
                          onChange={(e) => updatePlayer(p.id, { name: e.target.value })}
                          className="flex-1 rounded-xl border border-amber-900/15 px-3 py-1 text-sm font-bold text-slate-900 focus:border-terracotta focus:outline-none"
                          placeholder={t.playerDefault}
                        />

                        {/* Player Score Badge / Card pile */}
                        <button
                          type="button"
                          onClick={() => setInspectingPlayer(p)}
                          className="flex items-center gap-1.5 rounded-xl bg-saffron/20 px-2.5 py-1 text-xs font-bold text-amber-950 transition hover:bg-saffron/30"
                          title={t.viewWonCards}
                        >
                          <Award className="h-3.5 w-3.5 text-terracotta" />
                          <span>
                            {p.score} {t.cardsWon}
                          </span>
                        </button>

                        {mode === 'multiplayer' && players.length > 2 && (
                          <button
                            type="button"
                            onClick={() => removePlayer(p.id)}
                            className="rounded-lg p-1.5 text-slate-400 hover:bg-red-50 hover:text-red-600"
                            aria-label="Remove player"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        )}
                      </div>

                      {/* Individual Player Language Selection */}
                      <div className="mt-2.5 grid grid-cols-1 gap-2 border-t border-amber-900/10 pt-2.5 sm:grid-cols-2">
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-[11px] font-semibold text-slate-500">
                            {t.playerStudyShort}
                          </span>
                          <LanguageToggle
                            value={p.studyLocale}
                            onChange={(loc) => updatePlayer(p.id, { studyLocale: loc })}
                            size="sm"
                          />
                        </div>
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-[11px] font-semibold text-slate-500">
                            {t.playerQuestionShort}
                          </span>
                          <LanguageToggle
                            value={p.questionLocale}
                            onChange={(loc) => updatePlayer(p.id, { questionLocale: loc })}
                            size="sm"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Score Reset Button */}
                <div className="mt-3 flex justify-end">
                  <button
                    type="button"
                    onClick={resetAllScores}
                    className="text-xs font-semibold text-slate-500 hover:text-terracotta underline"
                  >
                    {t.resetScores}
                  </button>
                </div>
              </div>

              {/* Timer Duration Setting */}
              <div className="mt-5">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-slate-700">
                  <Clock className="h-4 w-4 text-terracotta" />
                  {t.timerLabel}
                </span>
                <div className="mt-2 grid grid-cols-4 gap-2">
                  {([10, 15, 20, 0] as TimerDuration[]).map((sec) => {
                    const active = timerDuration === sec;
                    return (
                      <button
                        key={sec}
                        type="button"
                        onClick={() => setTimerDuration(sec)}
                        className={`rounded-xl border-2 py-2 text-xs font-bold transition sm:text-sm ${
                          active
                            ? 'border-cobalt bg-cobalt text-white'
                            : 'border-amber-900/10 bg-parchment/60 text-slate-700 hover:border-amber-900/25'
                        }`}
                      >
                        {sec === 0 ? t.unlimited : `${sec} ${t.seconds}`}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Start Buttons: Fresh vs Keep Points */}
              <div className="mt-6 space-y-2">
                <button
                  type="button"
                  onClick={() => startNewGame(true)}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-terracotta py-3.5 text-base font-bold text-white shadow-lg shadow-terracotta/25 transition hover:bg-terracotta/95 active:scale-[0.99]"
                >
                  <Play className="h-5 w-5 fill-current" />
                  {t.startGame} ({CARDS.length} {t.cardsWon})
                </button>
              </div>
            </section>

            {/* Quick Rules */}
            <section className="rounded-3xl border border-amber-900/10 bg-white/75 p-4 text-xs text-slate-600 shadow-sm">
              <h2 className="font-display text-sm font-bold text-cobalt">{t.rulesTitle}</h2>
              <ul className="mt-2 space-y-1">
                {t.rulesSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </section>
          </main>
        )}

        {/* PLAYING SCREEN */}
        {screen === 'playing' && activeCard && (
          <main className="space-y-3.5">
            {/* Top Match Progress & Player Piles Strip */}
            <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-amber-900/10 bg-white/95 px-3.5 py-2.5 shadow-sm">
              <div className="text-xs font-bold text-slate-600">
                {t.cardOf}{' '}
                <span className="text-cobalt">
                  {cardIndex + 1} / {deck.length}
                </span>
              </div>

              {/* Player Score Badges (Click to inspect won cards) */}
              <div className="flex flex-wrap items-center gap-1.5">
                {activePlayers.map((p, idx) => {
                  const isTurn = idx === currentPlayerIndex % activePlayers.length;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setInspectingPlayer(p)}
                      className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold transition ${
                        isTurn
                          ? 'bg-cobalt text-white shadow-sm ring-2 ring-saffron/50'
                          : 'bg-amber-950/5 text-slate-700 hover:bg-amber-950/10'
                      }`}
                    >
                      <span>{p.name}:</span>
                      <span className="text-saffron">{p.score}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sand Timer (only when studying) or Dice Roller (when in questions) */}
            {phase === 'studying' && (
              <SandTimer
                duration={timerDuration}
                remaining={remaining}
                labelFlipEarly={t.flipEarly}
                labelUnlimited={t.unlimited}
                onFlipEarly={handleFlipNow}
              />
            )}

            {phase === 'questions' && (
              <DiceRoller
                value={rolledNumber}
                rolling={rolling}
                labelRoll={t.rollDice}
                labelRolling={t.rolling}
                onRoll={handleRollDice}
              />
            )}

            {/* The Game Card (Prep, Study, or Questions) */}
            <GameCard
              card={activeCard}
              phase={phase}
              peekingFront={peekingFront}
              studyLocale={activeStudyLocale}
              questionLocale={activeQuestionLocale}
              currentPlayerName={currentPlayer.name}
              currentPlayerScore={currentPlayer.score}
              rolledNumber={rolledNumber}
              revealedAnswers={revealedAnswers}
              onChangeStudyLocale={setActiveStudyLocale}
              onChangeQuestionLocale={setActiveQuestionLocale}
              onStartStudying={handleStartStudying}
              onToggleAnswer={(num) =>
                setRevealedAnswers((prev) => ({ ...prev, [num]: !prev[num] }))
              }
              onTogglePeekFront={() => setPeekingFront((p) => !p)}
            />

            {/* Scoring & Next Card Actions (only in questions phase) */}
            {phase === 'questions' && (
              <div className="sticky bottom-3 z-10 rounded-2xl border border-amber-900/15 bg-white/95 p-3 shadow-lg backdrop-blur-md">
                {roundScored === null ? (
                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={() => handleScore(true)}
                      className="flex items-center justify-center gap-1.5 rounded-xl bg-olive py-3 text-sm font-bold text-white shadow-sm transition hover:bg-olive/90 active:scale-95"
                    >
                      <Check className="h-4 w-4" />
                      {t.correctBtn}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleScore(false)}
                      className="flex items-center justify-center gap-1.5 rounded-xl bg-slate-200 py-3 text-sm font-bold text-slate-800 transition hover:bg-slate-300 active:scale-95"
                    >
                      <X className="h-4 w-4" />
                      {t.wrongBtn}
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={handleNextCard}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-cobalt py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-cobalt/90 active:scale-95"
                  >
                    <span>{t.nextCard}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            )}
          </main>
        )}

        {/* SUMMARY SCREEN */}
        {screen === 'summary' && (
          <main className="rounded-3xl border border-amber-900/10 bg-white p-6 text-center shadow-lg">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-saffron/20 text-amber-800">
              <Award className="h-8 w-8" />
            </div>
            <h2 className="mt-3 font-display text-2xl font-bold text-cobalt">{t.gameOver}</h2>

            {/* Scoreboard List */}
            <div className="mt-5 space-y-2">
              {[...activePlayers]
                .sort((a, b) => b.score - a.score)
                .map((p, idx) => (
                  <div
                    key={p.id}
                    onClick={() => setInspectingPlayer(p)}
                    className={`flex cursor-pointer items-center justify-between rounded-2xl px-4 py-3 transition hover:scale-[1.01] ${
                      idx === 0
                        ? 'bg-saffron/20 font-bold text-cobalt border border-saffron/50'
                        : 'bg-parchment text-slate-700 border border-amber-900/10'
                    }`}
                  >
                    <div className="flex items-center gap-2 text-left">
                      <span className="text-base font-bold">#{idx + 1}</span>
                      <div>
                        <div className="font-bold">{p.name}</div>
                        <span className="text-[11px] text-slate-500 underline">
                          {t.viewWonCards} ({p.wonCardIds.length})
                        </span>
                      </div>
                    </div>
                    <span className="text-lg font-bold">
                      {p.score} {t.cardsWon}
                    </span>
                  </div>
                ))}
            </div>

            <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => startNewGame(true)}
                className="flex items-center justify-center gap-2 rounded-2xl bg-terracotta py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-terracotta/90"
              >
                <RotateCcw className="h-4 w-4" />
                {t.playAgain} ({t.accumulatedTotal})
              </button>
              <button
                type="button"
                onClick={() => setScreen('lobby')}
                className="flex items-center justify-center gap-2 rounded-2xl border border-amber-900/15 bg-parchment py-3.5 text-sm font-bold text-cobalt transition hover:bg-amber-100/50"
              >
                <Home className="h-4 w-4" />
                {t.backHome}
              </button>
            </div>
          </main>
        )}

        {/* Won Cards Modal / Drawer */}
        <WonCardsModal
          player={inspectingPlayer}
          locale={activeStudyLocale}
          onClose={() => setInspectingPlayer(null)}
        />
      </div>
    </div>
  );
}

export default App;
