import { ValidationErrors } from '@/shared/zod/%%%BADvalidation/data/validation.enum';
import {
  checkUppercaseLetter,
  checkLowercaseLetter,
  checkDigit,
  checkSpecialChar,
  checkWhiteSpace
} from './data/validationRules';
import { PASSWORD_LENGTH } from '@/shared/zod/%%%BADvalidation/data/validation.constants';

export default function checkPassword(value: string): string {
  if (value.length < PASSWORD_LENGTH) {
    return ValidationErrors.LENGTH_PASSWORD;
  }
  if (checkUppercaseLetter(value) || checkLowercaseLetter(value) || checkDigit(value) || checkSpecialChar(value)) {
    return ValidationErrors.PASSWORD;
  }
  if (checkWhiteSpace(value)) {
    return ValidationErrors.WHITESPACE;
  }
  return '';
}
