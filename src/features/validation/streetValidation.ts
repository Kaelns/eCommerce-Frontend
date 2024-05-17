import { checkLength } from './validationRules';
import { GENERAL_LENGTH } from './validation.constants';

export default function streetValidation(value: string): string {
  if (checkLength(GENERAL_LENGTH, value)) {
    return 'Field must contain at least one latin letter';
  }
  return '';
}
