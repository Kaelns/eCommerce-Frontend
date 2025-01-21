import { describe, test, expect } from 'vitest';
import { ValidationErrors } from '@/shared/zod/validation/data/validation.enum';
import checkBirthday from '@/shared/zod/validation/birthdayValidation';

describe('Given checkBirthday function', () => {
  test('When birthday less than 13 years ago, should return correct error', () => {
    const date = Date.now();
    const result = checkBirthday(date.toString());

    expect(result).toBe(ValidationErrors.AGE);
  });

  test('When birthday more than 100 years ago, should return correct error', () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 101);
    const result = checkBirthday(date.toString());

    expect(result).toBe(ValidationErrors.AGE);
  });

  test("When birthday more than 13 years ago and less than 100 years ago, should return ''", () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 15);
    const result = checkBirthday(date.toString());

    expect(result).toBe('');
  });
});
