import {
  checkUppercaseLetter,
  checkLowercaseLetter,
  checkDigit,
  checkSpecialChar,
  checkWhiteSpace
} from './validationRules';

export default function checkPassword(value: string): string {
  if (value.length < 8) {
    return 'Password must be at least 8 characters long';
  }
  if (checkUppercaseLetter(value) || checkLowercaseLetter(value) || checkDigit(value) || checkSpecialChar(value)) {
    return 'Password must contain one uppercase(A-Z), one lowercase(a-z) letter, digit (0-9) and special character (e.g., !@#$%^&*).';
  }
  if (checkWhiteSpace(value)) {
    return 'Password must not contain leading or trailing whitespace.';
  }
  return '';
}
