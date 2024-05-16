import { checkAge } from './validationRules';
import { MAX_AGE, MIN_AGE } from '@/features/validation/validation.constants';

export default function checkBirthday(value: string): string {
  if (checkAge(value)) {
    return `You should be older ${MIN_AGE} and younger ${MAX_AGE} years`;
  }
  return '';
}
