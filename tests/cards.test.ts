import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { CARDS } from '../src/data/cards';
import { UI } from '../src/i18n/ui';
import type { Locale } from '../src/types/card';

const LOCALES: Locale[] = ['es', 'sk', 'en'];

describe('BrainBox España deck integrity', () => {
  it('has at least 10 unique cards', () => {
    expect(CARDS.length).toBeGreaterThanOrEqual(10);
    const ids = new Set(CARDS.map((c) => c.id));
    expect(ids.size).toBe(CARDS.length);
  });

  it('every card has complete ES, SK, EN translations, 4+ facts, 6 questions, and a valid image file', () => {
    for (const card of CARDS) {
      for (const loc of LOCALES) {
        expect(card.title[loc].trim().length, `${card.id} title.${loc}`).toBeGreaterThan(0);
        expect(card.subtitle[loc].trim().length, `${card.id} subtitle.${loc}`).toBeGreaterThan(0);
        expect(card.region[loc].trim().length, `${card.id} region.${loc}`).toBeGreaterThan(0);
        expect(card.era[loc].trim().length, `${card.id} era.${loc}`).toBeGreaterThan(0);
      }

      expect(card.facts.length, `${card.id} facts`).toBeGreaterThanOrEqual(4);
      for (const fact of card.facts) {
        for (const loc of LOCALES) {
          expect(fact.label[loc].trim().length).toBeGreaterThan(0);
          expect(fact.value[loc].trim().length).toBeGreaterThan(0);
        }
      }

      expect(card.questions.length, `${card.id} questions`).toBe(6);
      const numbers = card.questions.map((q) => q.number);
      expect(numbers).toEqual([1, 2, 3, 4, 5, 6]);
      for (const q of card.questions) {
        for (const loc of LOCALES) {
          expect(q.question[loc].trim().length, `${card.id} q${q.number}.${loc}`).toBeGreaterThan(0);
          expect(q.answer[loc].trim().length, `${card.id} a${q.number}.${loc}`).toBeGreaterThan(0);
        }
      }

      const relImage = card.image.replace(/^\.\//, '');
      const fullPath = resolve(process.cwd(), 'public', relImage);
      expect(existsSync(fullPath), `Missing image ${fullPath}`).toBe(true);
    }
  });

  it('UI dictionary has all 3 locales', () => {
    for (const loc of LOCALES) {
      expect(UI[loc].appTitle.length).toBeGreaterThan(0);
      expect(UI[loc].rulesSteps.length).toBe(3);
    }
  });
});
