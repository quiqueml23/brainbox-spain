import { LOCALE_NAMES } from '../i18n/ui';
import type { Locale } from '../types/card';

interface LanguageToggleProps {
  value: Locale;
  onChange: (locale: Locale) => void;
  size?: 'sm' | 'md';
}

const LOCALES: Locale[] = ['es', 'sk', 'en'];

export function LanguageToggle({ value, onChange, size = 'md' }: LanguageToggleProps) {
  return (
    <div
      className="inline-flex items-center rounded-full bg-amber-950/10 p-1 backdrop-blur-sm"
      role="group"
      aria-label="Language selector"
    >
      {LOCALES.map((loc) => {
        const active = value === loc;
        const info = LOCALE_NAMES[loc];
        return (
          <button
            key={loc}
            type="button"
            onClick={() => onChange(loc)}
            className={`flex items-center gap-1 rounded-full font-semibold transition-all ${
              size === 'sm' ? 'px-2.5 py-1 text-xs' : 'px-3 py-1.5 text-xs sm:text-sm'
            } ${
              active
                ? 'bg-white text-cobalt shadow-sm'
                : 'text-slate-700 hover:text-slate-950'
            }`}
          >
            <span>{info.flag}</span>
            <span>{info.short}</span>
          </button>
        );
      })}
    </div>
  );
}
