export type Locale = 'es' | 'sk' | 'en';

export type LocalizedText = Record<Locale, string>;

export type CardCategory = 'city' | 'monument' | 'person' | 'culture';

export interface CardFact {
  id: string;
  label: LocalizedText;
  value: LocalizedText;
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
  image: string;
  accentColor: string;
  facts: CardFact[];
  questions: CardQuestion[];
}

export type GameMode = 'solo' | 'multiplayer';
export type TimerDuration = 10 | 15 | 20 | 0; // 0 = unlimited
