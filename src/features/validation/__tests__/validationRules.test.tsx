import { describe, test, expect } from 'vitest';
import { checkAge, checkLength } from '@/features/validation/data/validationRules';

describe('Given checkAge function', () => {
  test('When birthday less than 13 years ago, should return true', () => {
    const date = Date.now();
    const result = checkAge(date.toString());

    expect(result).toBeTruthy();
  });

  test('When birthday more than 100 years ago, should return true', () => {
    const date = new Date('1900-01-01');
    const result = checkAge(date.toString());

    expect(result).toBeTruthy();
  });

  test('When birthday incorrect, should return true', () => {
    const date = new Date('1900-20-20');
    const result = checkAge(date.toString());

    expect(result).toBeTruthy();
  });

  test('When birthday between 13 and 100 years ago, should return false', () => {
    const date = new Date(Date.now());
    date.setFullYear(date.getFullYear() - 20);
    const result = checkAge(date.toString());

    expect(result).toBeFalsy();
  });
});

describe('Given checkLength function', () => {
  test('When length of value less than parameter "length", should return true', () => {
    const result = checkLength(2, 'a');

    expect(result).toBeTruthy();
  });

  test('When length of value equal parameter "length", should return false', () => {
    const result = checkLength(2, 'aa');

    expect(result).toBeFalsy();
  });
});
