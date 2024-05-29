import { describe, test, expect } from 'vitest';
import { ValidationErrors } from '@/features/validation/data/validation.enum';
import checkBirthday from '@/features/validation/birthdayValidation';

describe('Given checkBirthday function', () => {
  test('When birthday less than 13 years ago, should return correct error', () => {
    const date = Date.now();
    const result = checkBirthday(date.toString());

    expect(result).toBe(ValidationErrors.AGE);
  });
});
