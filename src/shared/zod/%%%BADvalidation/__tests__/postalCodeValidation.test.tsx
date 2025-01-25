import { describe, test, expect } from 'vitest';
import { ValidationErrors } from '@/shared/zod/%%%BADvalidation/data/validation.enum';
import checkPostalCode from '@/shared/zod/%%%BADvalidation/postalCodeValidation';

describe('Given checkPostalCode function', () => {
  test("When value match pattern, should return ''", () => {
    const result = checkPostalCode('0', undefined);

    expect(result).toBe('');
  });

  test("When value don't match pattern, should return correct error", () => {
    const result = checkPostalCode('00', /^[0-9]{1}$/gm);

    expect(result).toBe(ValidationErrors.POSTAL_CODE);
  });
  test("When value match pattern, should return ''", () => {
    const result = checkPostalCode('0', /^[0-9]{1}$/gm);

    expect(result).toBe('');
  });
});
