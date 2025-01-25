import { describe, test, expect } from 'vitest';
import { ValidationErrors } from '@/shared/zod/%%%BADvalidation/data/validation.enum';
import checkStreet from '@/shared/zod/%%%BADvalidation/streetValidation';

describe('Given checkStreet function', () => {
  test('When string length less than GENERAL_LENGTH, should return correct error', () => {
    const result = checkStreet('');

    expect(result).toBe(ValidationErrors.LENGTH_GENERAL);
  });
});
