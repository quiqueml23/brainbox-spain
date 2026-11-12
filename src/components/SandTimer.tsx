import { Hourglass, RotateCw } from 'lucide-react';
import type { TimerDuration } from '../types/card';

interface SandTimerProps {
  duration: TimerDuration;
  remaining: number;
  labelFlipEarly: string;
  labelUnlimited: string;
  onFlipEarly: () => void;
}

export function SandTimer({
  duration,
  remaining,
  labelFlipEarly,
  labelUnlimited,
  onFlipEarly,
}: SandTimerProps) {
  const isUnlimited = duration === 0;
  const pct = isUnlimited ? 100 : Math.max(0, Math.min(100, (remaining / duration) * 100));
  const isUrgent = !isUnlimited && remaining <= 3 && remaining > 0;

  return (
    <div className="w-full rounded-2xl border border-amber-900/10 bg-white/90 p-3 shadow-sm backdrop-blur-sm">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div
            className={`flex h-9 w-9 items-center justify-center rounded-xl transition-colors ${
              isUrgent
                ? 'animate-pulse bg-terracotta text-white'
                : 'bg-saffron/20 text-amber-900'
            }`}
          >
            <Hourglass className="h-5 w-5" />
          </div>
          <div>
            <div
              className={`font-display text-xl font-bold leading-none ${
                isUrgent ? 'text-terracotta' : 'text-cobalt'
              }`}
            >
              {isUnlimited ? labelUnlimited : `${remaining}s`}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onFlipEarly}
          className="inline-flex items-center gap-1.5 rounded-xl bg-cobalt px-3.5 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-cobalt/90 active:scale-95 sm:text-sm"
        >
          <RotateCw className="h-4 w-4" />
          <span>{labelFlipEarly}</span>
        </button>
      </div>

      {!isUnlimited && (
        <div className="mt-2.5 h-2.5 w-full overflow-hidden rounded-full bg-amber-950/10">
          <div
            className={`h-full rounded-full transition-all duration-1000 ease-linear ${
              isUrgent ? 'bg-terracotta' : 'bg-gradient-to-r from-saffron to-terracotta'
            }`}
            style={{ width: `${pct}%` }}
          />
        </div>
      )}
    </div>
  );
}
