import { describe, test, expect } from 'vitest';
import { checkUndefined } from '@/utils/check/checkUndefined';

describe('Given checkUndefined function', () => {
  test('checked Undefined', () => {
    expect(checkUndefined(undefined)).toBeFalsy();
  });

  test('checked number', () => {
    expect(checkUndefined(123)).toBeTruthy();
  });

  test('checked array of numbers', () => {
    expect(checkUndefined([123, 456, 789])).toBeTruthy();
  });
});
