import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { CARDS } from '../src/data/cards';
import { UI } from '../src/i18n/ui';
import type { Locale } from '../src/types/card';

const LOCALES: Locale[] = ['es', 'sk', 'en'];

describe('BrainBox España collage cards integrity', () => {
  it('has at least 10 unique cards with valid hero illustrations', () => {
    expect(CARDS.length).toBeGreaterThanOrEqual(10);
    const ids = new Set(CARDS.map((c) => c.id));
    expect(ids.size).toBe(CARDS.length);

    for (const card of CARDS) {
      expect(card.heroImage.length).toBeGreaterThan(0);
      const relHero = card.heroImage.replace(/^\.\//, '');
      const fullPath = resolve(process.cwd(), 'public', relHero);
      expect(existsSync(fullPath), `Missing hero image: ${fullPath}`).toBe(true);
    }
  });

  it('every card has exactly 9 data cells, real images where defined, and complete ES, SK, EN translations', () => {
    for (const card of CARDS) {
      for (const loc of LOCALES) {
        expect(card.title[loc].trim().length, `${card.id} title.${loc}`).toBeGreaterThan(0);
        expect(card.subtitle[loc].trim().length, `${card.id} subtitle.${loc}`).toBeGreaterThan(0);
        expect(card.region[loc].trim().length, `${card.id} region.${loc}`).toBeGreaterThan(0);
        expect(card.era[loc].trim().length, `${card.id} era.${loc}`).toBeGreaterThan(0);
      }

      expect(card.cells.length, `${card.id} must have exactly 9 cells`).toBe(9);
      const cellIds = new Set(card.cells.map((c) => c.id));
      expect(cellIds.size, `${card.id} cells must have unique IDs`).toBe(9);

      for (const cell of card.cells) {
        if (cell.image) {
          const relImg = cell.image.replace(/^\.\//, '');
          const fullImg = resolve(process.cwd(), 'public', relImg);
          expect(existsSync(fullImg), `Missing cell image ${fullImg}`).toBe(true);
        }
        for (const loc of LOCALES) {
          expect(cell.title[loc].trim().length, `${card.id} cell ${cell.id} title.${loc}`).toBeGreaterThan(0);
          expect(cell.fact[loc].trim().length, `${card.id} cell ${cell.id} fact.${loc}`).toBeGreaterThan(0);
        }
      }
    }
  });

  it('every card has exactly 6 questions matching front cells', () => {
    for (const card of CARDS) {
      expect(card.questions.length, `${card.id} questions`).toBe(6);
      const cellIds = new Set(card.cells.map((c) => c.id));

      for (const q of card.questions) {
        if (q.targetCellId) {
          expect(cellIds.has(q.targetCellId), `${card.id} q${q.number} targets invalid cell ${q.targetCellId}`).toBe(true);
        }
        for (const loc of LOCALES) {
          expect(q.question[loc].trim().length, `${card.id} q${q.number}.${loc}`).toBeGreaterThan(0);
          expect(q.answer[loc].trim().length, `${card.id} a${q.number}.${loc}`).toBeGreaterThan(0);
        }
      }
    }
  });

  it('UI dictionary has all 3 locales and required keys', () => {
    for (const loc of LOCALES) {
      expect(UI[loc].appTitle.length).toBeGreaterThan(0);
      expect(UI[loc].startStudyBtn.length).toBeGreaterThan(0);
    }
  });
});
