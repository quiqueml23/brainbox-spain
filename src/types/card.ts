export type Locale = 'es' | 'sk' | 'en';

export type LocalizedText = Record<Locale, string>;

export type CardCategory = 'city' | 'monument' | 'person' | 'culture';

export interface CardCell {
  id: string;
  image?: string; // Real illustrated painting or crop (NO generic icons)
  badge?: string; // Bold accent badge like "1605", "1492", "4 Torres", "124", "18"
  title: LocalizedText;
  fact: LocalizedText;
}

export interface CardQuestion {
  number: 1 | 2 | 3 | 4 | 5 | 6;
  targetCellId?: string;
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
  heroImage: string; // Big main illustration for the collage
  cells: CardCell[]; // 9 data points displayed organically (with real images and bold stickers)
  questions: CardQuestion[]; // 6 questions directly from the card
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
