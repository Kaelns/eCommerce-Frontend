import { describe, test, expect } from 'vitest';
import { ValidationErrors } from '@/data/enum/validationError.enum';
import checkStreet from '@/features/validation/streetValidation';

describe('Given checkStreet function', () => {
  test('When string length less than GENERAL_LENGTH, should return correct error', () => {
    const result = checkStreet('');

    expect(result).toBe(ValidationErrors.LENGTH_GENERAL);
  });
});
