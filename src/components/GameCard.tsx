import { Eye, EyeOff, MapPin, Sparkles } from 'lucide-react';
import { CATEGORY_LABELS, UI } from '../i18n/ui';
import type { BrainCard, Locale } from '../types/card';
import { LanguageToggle } from './LanguageToggle';

interface GameCardProps {
  card: BrainCard;
  flipped: boolean;
  peekingFront: boolean;
  studyLocale: Locale;
  questionLocale: Locale;
  rolledNumber: number | null;
  revealedAnswers: Record<number, boolean>;
  onChangeStudyLocale: (loc: Locale) => void;
  onChangeQuestionLocale: (loc: Locale) => void;
  onToggleAnswer: (num: number) => void;
  onTogglePeekFront: () => void;
}

export function GameCard({
  card,
  flipped,
  peekingFront,
  studyLocale,
  questionLocale,
  rolledNumber,
  revealedAnswers,
  onChangeStudyLocale,
  onChangeQuestionLocale,
  onToggleAnswer,
  onTogglePeekFront,
}: GameCardProps) {
  const showBack = flipped && !peekingFront;
  const studyUI = UI[studyLocale];
  const questionUI = UI[questionLocale];

  return (
    <div className="perspective-1200 w-full">
      <div
        className={`preserve-3d relative w-full transition-transform duration-500 ease-out ${
          showBack ? 'rotate-y-180' : ''
        }`}
      >
        {/* FRONT: STUDY SIDE */}
        <div
          className={`backface-hidden w-full rounded-3xl border-4 bg-white p-4 shadow-xl sm:p-5 ${
            showBack ? 'pointer-events-none invisible absolute inset-0' : 'relative'
          }`}
          style={{ borderColor: card.accentColor }}
        >
          {/* Card Header */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span
              className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white"
              style={{ backgroundColor: card.accentColor }}
            >
              <Sparkles className="h-3 w-3" />
              {CATEGORY_LABELS[card.category][studyLocale]}
            </span>

            <LanguageToggle value={studyLocale} onChange={onChangeStudyLocale} size="sm" />
          </div>

          {/* Title & Region */}
          <div className="mt-3">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-medium text-slate-500">
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-terracotta" />
                {card.region[studyLocale]}
              </span>
              <span className="rounded-md bg-amber-950/5 px-2 py-0.5 font-semibold text-slate-700">
                {card.era[studyLocale]}
              </span>
            </div>
            <h2 className="mt-1 font-display text-2xl font-bold leading-tight text-cobalt sm:text-3xl">
              {card.title[studyLocale]}
            </h2>
            <p className="text-sm font-medium text-slate-600">{card.subtitle[studyLocale]}</p>
          </div>

          {/* Illustration */}
          <div className="mt-3 overflow-hidden rounded-2xl border-2 border-amber-900/10 bg-parchment shadow-inner">
            <img
              src={card.image}
              alt={card.title[studyLocale]}
              className="aspect-square w-full object-cover"
              loading="eager"
            />
          </div>

          {/* Concise Memorizable Facts */}
          <div className="mt-3 grid grid-cols-2 gap-2">
            {card.facts.map((fact) => (
              <div
                key={fact.id}
                className="rounded-xl border border-amber-900/10 bg-parchment/80 px-3 py-2"
              >
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  {fact.label[studyLocale]}
                </div>
                <div className="mt-0.5 text-xs font-bold leading-snug text-slate-900 sm:text-sm">
                  {fact.value[studyLocale]}
                </div>
              </div>
            ))}
          </div>

          {flipped && peekingFront && (
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
            !showBack ? 'pointer-events-none invisible absolute inset-0' : 'relative'
          }`}
          style={{ borderColor: card.accentColor }}
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
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

          <p className="mt-1 text-xs text-slate-500">{questionUI.allQuestionsHint}</p>

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
                      : 'border-amber-900/10 bg-white/75 hover:border-amber-900/25 hover:bg-white'
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                        isSelected
                          ? 'bg-terracotta text-white'
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
