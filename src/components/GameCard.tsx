import { Eye, EyeOff, MapPin, Play, Sparkles } from 'lucide-react';
import { CATEGORY_LABELS, UI } from '../i18n/ui';
import type { BrainCard, CardPhase, Locale } from '../types/card';
import { LanguageToggle } from './LanguageToggle';

interface GameCardProps {
  card: BrainCard;
  phase: CardPhase;
  peekingFront: boolean;
  studyLocale: Locale;
  questionLocale: Locale;
  currentPlayerName: string;
  currentPlayerScore: number;
  rolledNumber: number | null;
  revealedAnswers: Record<number, boolean>;
  onChangeStudyLocale: (loc: Locale) => void;
  onChangeQuestionLocale: (loc: Locale) => void;
  onStartStudying: () => void;
  onToggleAnswer: (num: number) => void;
  onTogglePeekFront: () => void;
}

export function GameCard({
  card,
  phase,
  peekingFront,
  studyLocale,
  questionLocale,
  currentPlayerName,
  currentPlayerScore,
  rolledNumber,
  revealedAnswers,
  onChangeStudyLocale,
  onChangeQuestionLocale,
  onStartStudying,
  onToggleAnswer,
  onTogglePeekFront,
}: GameCardProps) {
  const isPrep = phase === 'prep';
  const isQuestions = phase === 'questions' && !peekingFront;
  const studyUI = UI[studyLocale];
  const questionUI = UI[questionLocale];

  // 1. PRE-REVEAL SCREEN (Before the timer starts)
  if (isPrep) {
    return (
      <div className="w-full">
        <div
          className="relative overflow-hidden rounded-3xl border-4 bg-white p-5 shadow-2xl transition-all sm:p-6"
          style={{ borderColor: card.accentColor }}
        >
          {/* Subtle decorative background watermark */}
          <div
            className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full opacity-10"
            style={{ backgroundColor: card.accentColor }}
          />

          {/* Turn Banner */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-900/10 pb-3">
            <div className="flex items-center gap-2">
              <span
                className="flex h-8 w-8 items-center justify-center rounded-xl text-xs font-bold text-white shadow-sm"
                style={{ backgroundColor: card.accentColor }}
              >
                {currentPlayerName.charAt(0).toUpperCase()}
              </span>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  {studyUI.turnOf}
                </span>
                <p className="text-sm font-bold text-slate-900 leading-none">
                  {currentPlayerName}
                </p>
              </div>
            </div>

            <div className="rounded-full bg-saffron/20 px-3 py-1 text-xs font-bold text-amber-900">
              {currentPlayerScore} {studyUI.cardsWon}
            </div>
          </div>

          {/* Card Presentation */}
          <div className="my-5 text-center">
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm"
              style={{ backgroundColor: card.accentColor }}
            >
              <Sparkles className="h-3.5 w-3.5" />
              {CATEGORY_LABELS[card.category][studyLocale]}
            </span>

            <h2 className="mt-3 font-display text-3xl font-bold text-cobalt sm:text-4xl">
              {card.title[studyLocale]}
            </h2>
            <p className="mt-1 text-sm font-semibold text-slate-600 sm:text-base">
              {card.subtitle[studyLocale]}
            </p>

            <div className="mt-2 flex items-center justify-center gap-2 text-xs font-medium text-slate-500">
              <MapPin className="h-3.5 w-3.5 text-terracotta" />
              <span>{card.region[studyLocale]}</span>
              <span>·</span>
              <span>{card.era[studyLocale]}</span>
            </div>
          </div>

          {/* Language Selector for this card */}
          <div className="rounded-2xl bg-parchment/90 p-4 border border-amber-900/10 text-center">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-700">
              {studyUI.prepLangHeading}
            </p>
            <div className="mt-2 flex justify-center">
              <LanguageToggle
                value={studyLocale}
                onChange={onChangeStudyLocale}
                size="md"
              />
            </div>
          </div>

          <p className="mt-3 text-center text-xs text-slate-500">
            {studyUI.prepInstructions}
          </p>

          {/* Big Start Studying Button */}
          <button
            type="button"
            onClick={onStartStudying}
            className="mt-4 flex w-full items-center justify-center gap-2.5 rounded-2xl bg-terracotta py-4 text-base font-bold text-white shadow-lg shadow-terracotta/30 transition hover:bg-terracotta/95 active:scale-[0.98] sm:text-lg"
          >
            <Play className="h-5 w-5 fill-current" />
            <span>{studyUI.startStudyBtn}</span>
          </button>
        </div>
      </div>
    );
  }

  // 2. REVEALED CARD (Studying vs Questions)
  return (
    <div className="perspective-1200 w-full">
      <div
        className={`preserve-3d relative w-full transition-transform duration-500 ease-out ${
          isQuestions ? 'rotate-y-180' : ''
        }`}
      >
        {/* FRONT: STUDY SIDE (BRAINBOX MULTI-VIGNETTE STYLE) */}
        <div
          className={`backface-hidden w-full rounded-3xl border-4 bg-white p-3.5 shadow-xl sm:p-5 ${
            isQuestions ? 'pointer-events-none invisible absolute inset-0' : 'relative'
          }`}
          style={{ borderColor: card.accentColor }}
        >
          {/* Card Top Strip */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-900/10 pb-2.5">
            <div className="flex items-center gap-2">
              <span
                className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white"
                style={{ backgroundColor: card.accentColor }}
              >
                <Sparkles className="h-3 w-3" />
                {CATEGORY_LABELS[card.category][studyLocale]}
              </span>
              <span className="text-xs font-bold text-slate-600">
                {card.region[studyLocale]}
              </span>
            </div>

            <LanguageToggle value={studyLocale} onChange={onChangeStudyLocale} size="sm" />
          </div>

          {/* Header Title */}
          <div className="mt-2 text-center">
            <h2 className="font-display text-2xl font-bold leading-tight text-cobalt sm:text-3xl">
              {card.title[studyLocale]}
            </h2>
            <p className="text-xs font-semibold text-slate-600 sm:text-sm">
              {card.subtitle[studyLocale]}
            </p>
          </div>

          {/* BrainBox Multi-Image Grid with Captions Underneath */}
          <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
            {card.vignettes.map((v) => (
              <div
                key={v.id}
                className="group flex flex-col overflow-hidden rounded-2xl border-2 border-amber-900/10 bg-parchment/60 p-2 shadow-sm transition hover:bg-parchment"
              >
                {/* Vignette Illustration */}
                <div className="relative aspect-video sm:aspect-square w-full overflow-hidden rounded-xl border border-amber-900/10 bg-white">
                  <img
                    src={v.image}
                    alt={v.title[studyLocale]}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="eager"
                  />
                </div>

                {/* Vignette Data & Caption Underneath Image */}
                <div className="mt-2 flex-1 text-center sm:text-left">
                  <h4 className="text-xs font-bold text-cobalt leading-snug">
                    {v.title[studyLocale]}
                  </h4>
                  <p className="mt-0.5 text-[11px] font-medium leading-relaxed text-slate-750 text-slate-700">
                    {v.caption[studyLocale]}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Peek Back Action */}
          {phase === 'questions' && peekingFront && (
            <button
              type="button"
              onClick={onTogglePeekFront}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-cobalt py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-cobalt/90"
            >
              <EyeOff className="h-4 w-4" />
              {studyUI.backToQuestions}
            </button>
          )}
        </div>

        {/* BACK: QUESTIONS SIDE */}
        <div
          className={`backface-hidden rotate-y-180 w-full rounded-3xl border-4 bg-parchment p-4 shadow-xl sm:p-5 ${
            !isQuestions ? 'pointer-events-none invisible absolute inset-0' : 'relative'
          }`}
          style={{ borderColor: card.accentColor }}
        >
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-900/10 pb-2.5">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                {questionUI.questionSide}
              </span>
              <h3 className="font-display text-lg font-bold text-cobalt sm:text-xl">
                {card.title[questionLocale]}
              </h3>
            </div>

            <LanguageToggle value={questionLocale} onChange={onChangeQuestionLocale} size="sm" />
          </div>

          <p className="mt-1.5 text-xs text-slate-500">{questionUI.allQuestionsHint}</p>

          <div className="mt-3 space-y-2">
            {card.questions.map((q) => {
              const isSelected = rolledNumber === q.number;
              const isRevealed = Boolean(revealedAnswers[q.number]);

              return (
                <div
                  key={q.number}
                  onClick={() => onToggleAnswer(q.number)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onToggleAnswer(q.number);
                    }
                  }}
                  className={`cursor-pointer rounded-2xl border-2 p-3 transition-all ${
                    isSelected
                      ? 'border-terracotta bg-white shadow-md ring-2 ring-saffron/40'
                      : 'border-amber-900/10 bg-white/80 hover:border-amber-900/25 hover:bg-white'
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                        isSelected
                          ? 'bg-terracotta text-white shadow-sm'
                          : 'bg-cobalt/10 text-cobalt'
                      }`}
                    >
                      {q.number}
                    </span>
                    <div className="min-w-0 flex-1">
                      {isSelected && (
                        <span className="mb-1 inline-block rounded-full bg-saffron/25 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-amber-900">
                          {questionUI.selectedQuestion}
                        </span>
                      )}
                      <p className="text-sm font-semibold leading-snug text-slate-900">
                        {q.question[questionLocale]}
                      </p>

                      {isRevealed ? (
                        <div className="mt-2 rounded-xl bg-olive/10 px-3 py-1.5 text-sm font-bold text-olive">
                          {q.answer[questionLocale]}
                        </div>
                      ) : (
                        <span className="mt-1.5 inline-block text-xs font-semibold text-terracotta">
                          {questionUI.revealAnswer} →
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            type="button"
            onClick={onTogglePeekFront}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-cobalt/20 bg-white py-2.5 text-xs font-semibold text-cobalt transition hover:bg-cobalt/5 sm:text-sm"
          >
            <Eye className="h-4 w-4" />
            {questionUI.peekFront}
          </button>
        </div>
      </div>
    </div>
  );
}
