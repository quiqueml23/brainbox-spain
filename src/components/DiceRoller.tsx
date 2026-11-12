import { Dices } from 'lucide-react';

interface DiceRollerProps {
  value: number | null;
  rolling: boolean;
  labelRoll: string;
  labelRolling: string;
  onRoll: () => void;
}

const PIP_POSITIONS: Record<number, number[]> = {
  1: [4],
  2: [0, 8],
  3: [0, 4, 8],
  4: [0, 2, 6, 8],
  5: [0, 2, 4, 6, 8],
  6: [0, 2, 3, 5, 6, 8],
};

export function DiceRoller({
  value,
  rolling,
  labelRoll,
  labelRolling,
  onRoll,
}: DiceRollerProps) {
  const pips = value ? PIP_POSITIONS[value] : [];

  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border border-amber-900/10 bg-white/90 p-3 shadow-sm">
      <div className="flex items-center gap-3">
        <div
          className={`grid h-12 w-12 grid-cols-3 grid-rows-3 gap-1 rounded-xl border-2 border-cobalt/20 bg-parchment p-2 shadow-inner transition-transform ${
            rolling ? 'animate-spin' : ''
          }`}
          aria-label={value ? `Dado: ${value}` : 'Dado sin tirar'}
        >
          {Array.from({ length: 9 }).map((_, idx) => (
            <span
              key={idx}
              className={`h-full w-full rounded-full ${
                pips.includes(idx) ? 'bg-terracotta' : 'bg-transparent'
              }`}
            />
          ))}
        </div>
        <div>
          <p className="text-xs font-medium text-slate-500">
            {value ? `#${value}` : '1 – 6'}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={onRoll}
        disabled={rolling}
        className="inline-flex items-center gap-2 rounded-xl bg-terracotta px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-terracotta/90 active:scale-95 disabled:opacity-60"
      >
        <Dices className="h-4 w-4" />
        <span>{rolling ? labelRolling : labelRoll}</span>
      </button>
    </div>
  );
}
