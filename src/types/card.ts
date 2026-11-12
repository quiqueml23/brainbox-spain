export type Locale = 'es' | 'sk' | 'en';

export type LocalizedText = Record<Locale, string>;

export type CardCategory = 'city' | 'monument' | 'person' | 'culture';

export interface CardCell {
  id: string;
  iconName: string; // Identifier for clean minimalist spot icon/illustration
  image?: string;
  title: LocalizedText;
  fact: LocalizedText;
}

export interface CardQuestion {
  number: 1 | 2 | 3 | 4 | 5 | 6;
  targetCellId?: string; // Link to the exact cell on the front
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
  cells: CardCell[]; // 9 clear cells in a 3x3 grid
  questions: CardQuestion[]; // 6 questions directly from the 9 cells
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
