import { describe, test, expect } from 'vitest';
import getAge from '@/utils/getAge';

describe('Given getAge function', () => {
  test('When month in date equal current month and day less than current day, should return correct age', () => {
    const today = new Date();
    today.setDate(today.getDate() - 1);
    today.setFullYear(today.getFullYear() - 1);
    const result = getAge(today);

    expect(result).toBe(1);
  });
  test('When month in date equal current month and day more than current day, should return correct age', () => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    today.setFullYear(today.getFullYear() - 1);
    const result = getAge(today);

    expect(result).toBe(0);
  });
});
