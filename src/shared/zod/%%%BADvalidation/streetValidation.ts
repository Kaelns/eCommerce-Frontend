import { ValidationErrors } from '@/shared/zod/%%%BADvalidation/data/validation.enum';
import { checkLength } from './data/validationRules';
import { GENERAL_LENGTH } from './data/validation.constants';

export default function checkStreet(value: string): string {
  if (checkLength(GENERAL_LENGTH, value)) {
    return ValidationErrors.LENGTH_GENERAL;
  }
  return '';
}
