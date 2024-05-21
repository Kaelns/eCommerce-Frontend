import { describe, test, expect } from 'vitest';
import { ValidationErrors } from '@/data/enum/validationError.enum';
import checkGeneralRule from '@/features/validation/generalValidation';

describe('Given checkGeneralRule function', () => {
  test('When string length less than GENERAL_LENGTH, should return correct error', () => {
    const result = checkGeneralRule('');

    expect(result).toBe(ValidationErrors.LENGTH_GENERAL);
  });
  test('When there is illegal symbol in string, should return correct error', () => {
    const result = checkGeneralRule('r4');

    expect(result).toBe(ValidationErrors.JUST_LETTER);
  });
});
