import { ValidationErrors } from '@/data/enum/validationError.enum';
import { checkAge } from './validationRules';

export default function checkBirthday(value: string): string {
  if (checkAge(value)) {
    return ValidationErrors.AGE;
  }
  return '';
}
