import { describe, test, expect } from 'vitest';
import { ValidationErrors } from '@/data/enum/validationError.enum';
import { checkAge, checkLength } from '@/features/validation/validationRules';

describe('Given checkAge function', () => {
  test('When birthday less than 13 years ago, should return true', () => {
    const date = Date.now();
    const result = checkAge(date.toString());

    expect(result).toBe(true);
  });

  test('When birthday more than 100 years ago, should return true', () => {
    const date = new Date('1900-01-01');
    const result = checkAge(date.toString());

    expect(result).toBe(true);
  });

  test('When birthday incorrect, should return true', () => {
    const date = new Date('1900-20-20');
    const result = checkAge(date.toString());

    expect(result).toBe(true);
  });

  test('When birthday between 13 and 100 years ago, should return false', () => {
    const date = new Date(Date.now());
    date.setFullYear(date.getFullYear() - 20);
    const result = checkAge(date.toString());

    expect(result).toBe(false);
  });
});

describe('Given checkLength function', () => {
  test('When length of value less than parameter "length", should return true', () => {
    const result = checkLength(2, 'a');

    expect(result).toBe(true);
  });

  test('When length of value equal parameter "length", should return false', () => {
    const result = checkLength(2, 'aa');

    expect(result).toBe(false);
  });
});
