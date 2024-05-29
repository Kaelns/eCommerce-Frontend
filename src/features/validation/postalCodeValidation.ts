import { ValidationErrors } from '@/features/validation/data/validation.enum';

export default function checkPostalCode(value: string, pattern?: RegExp): string {
  if (pattern) {
    if (!value.match(pattern)) {
      return ValidationErrors.POSTAL_CODE;
    }
  }
  return '';
}
