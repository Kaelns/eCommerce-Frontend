import { describe, test, expect } from 'vitest';
import checkEmail from './emailValidation';
import { ValidationErrors } from '@/data/enum/validationError.enum';

describe('Given checkEmail function', () => {
  test('When string start with whitespace, should return correct error', () => {
    const result = checkEmail('  a');

    expect(result).toBe(ValidationErrors.WHITESPACE);
  });
  test('When there is no symbol @ in string, should return correct error', () => {
    const result = checkEmail('a');

    expect(result).toBe(ValidationErrors.AT_SYMBOL);
  });
  test('When there is illegal symbol in string, should return correct error', () => {
    const result = checkEmail('^@');

    expect(result).toBe(ValidationErrors.MAIN_PART);
  });
  test('When domain name has incorrect format, should return correct error', () => {
    const result = checkEmail('d@d.');

    expect(result).toBe(ValidationErrors.DOMAIN_PART);
  });
});
