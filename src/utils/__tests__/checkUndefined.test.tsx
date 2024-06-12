import { describe, test, expect } from 'vitest';
import { checkUndefined } from '@/utils/checkUndefined';

describe('Given checkUndefined function', () => {
  test('checked Undefined', ()=> {
    expect(checkUndefined(undefined)).toBe(false);
  })

  test('checked number', ()=> {
    expect(checkUndefined(123)).toBe(true);
  })

  test('checked array of numbers', ()=> {
    expect(checkUndefined([123, 456, 789])).toBe(true);
  })
})
