import { ValidationErrors } from '@/data/enum/validationError.enum';
import { checkLength } from './validationRules';
import { GENERAL_LENGTH } from './validation.constants';

export default function checkStreet(value: string): string {
  if (checkLength(GENERAL_LENGTH, value)) {
    return ValidationErrors.LENGTH_GENERAL;
  }
  return '';
}
