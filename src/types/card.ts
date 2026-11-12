export type Locale = 'es' | 'sk' | 'en';

export type LocalizedText = Record<Locale, string>;

export type CardCategory = 'city' | 'monument' | 'person' | 'culture';

export interface CardVignette {
  id: string;
  image: string;
  title: LocalizedText;
  caption: LocalizedText;
}

export interface CardQuestion {
  number: 1 | 2 | 3 | 4 | 5 | 6;
  question: LocalizedText;
  answer: LocalizedText;
}

export interface BrainCard {
  id: string;
  category: CardCategory;
  region: LocalizedText;
  era: LocalizedText;
  title: LocalizedText;
  subtitle: LocalizedText;
  accentColor: string;
  vignettes: CardVignette[];
  questions: CardQuestion[];
}

export interface PlayerProfile {
  id: string;
  name: string;
  studyLocale: Locale;
  questionLocale: Locale;
  score: number;
  wonCardIds: string[];
}

export type GameMode = 'solo' | 'multiplayer';
export type TimerDuration = 10 | 15 | 20 | 0; // 0 = unlimited
export type CardPhase = 'prep' | 'studying' | 'questions';
