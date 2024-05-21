import { describe, test, expect } from 'vitest';
import { ValidationErrors } from '@/data/enum/validationError.enum';
import checkPostalCode from '@/features/validation/postalCodeValidation';

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
