import { Award, X } from 'lucide-react';
import { CARDS } from '../data/cards';
import { UI } from '../i18n/ui';
import type { Locale, PlayerProfile } from '../types/card';

interface WonCardsModalProps {
  player: PlayerProfile | null;
  locale: Locale;
  onClose: () => void;
}

export function WonCardsModal({ player, locale, onClose }: WonCardsModalProps) {
  if (!player) return null;
  const t = UI[locale];
  const wonCards = CARDS.filter((c) => player.wonCardIds.includes(c.id));

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div className="max-h-[85vh] w-full max-w-lg overflow-hidden rounded-3xl border border-amber-900/10 bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-amber-900/10 bg-parchment px-5 py-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-saffron/20 text-amber-900">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-cobalt">
                {t.wonCardsTitle}
              </h3>
              <p className="text-xs font-semibold text-slate-600">
                {player.name} · {player.score} {t.cardsWon}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
            aria-label={t.close}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* List of cards won */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-3">
          {wonCards.length === 0 ? (
            <div className="py-8 text-center text-sm text-slate-500">
              {t.noWonCardsYet}
            </div>
          ) : (
            wonCards.map((c) => (
              <div
                key={c.id}
                className="flex items-center gap-3 rounded-2xl border border-amber-900/10 bg-parchment/60 p-2.5 transition hover:bg-parchment"
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-display text-lg font-bold text-white shadow-sm"
                  style={{ backgroundColor: c.accentColor }}
                >
                  {c.title[locale].charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: c.accentColor }}
                    />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      {c.region[locale]}
                    </span>
                  </div>
                  <h4 className="font-display text-base font-bold text-cobalt truncate">
                    {c.title[locale]}
                  </h4>
                  <p className="text-xs text-slate-600 truncate">{c.subtitle[locale]}</p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-amber-900/10 bg-slate-50 px-5 py-3 text-right">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-cobalt px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-cobalt/90"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
}
