import { describe, test, expect } from 'vitest';
import { ValidationErrors } from '@/features/validation/data/validation.enum';
import checkPassword from '@/features/validation/passwordValidation';

describe('Given checkPassword function', () => {
  test('When string length less than PASSWORD_LENGTH, should return correct error', () => {
    const result = checkPassword('');

    expect(result).toBe(ValidationErrors.LENGTH_PASSWORD);
  });

  test('When there is no uppercase letter in string , should return correct error', () => {
    const result = checkPassword('123456q!');

    expect(result).toBe(ValidationErrors.PASSWORD);
  });

  test('When there is no lowercase letter in string , should return correct error', () => {
    const result = checkPassword('123456Q!');

    expect(result).toBe(ValidationErrors.PASSWORD);
  });

  test('When there is no special character in string , should return correct error', () => {
    const result = checkPassword('123456qQ');

    expect(result).toBe(ValidationErrors.PASSWORD);
  });

  test('When there is no digit in string , should return correct error', () => {
    const result = checkPassword('QQQQQQq!');

    expect(result).toBe(ValidationErrors.PASSWORD);
  });

  test('When string start with whitespace, should return correct error', () => {
    const result = checkPassword(' 123456Qq!');

    expect(result).toBe(ValidationErrors.WHITESPACE);
  });
});
