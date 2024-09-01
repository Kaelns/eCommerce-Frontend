import { ValidationErrors } from '@/features/validation/data/validation.enum';

export default function checkPostalCode(value: string, pattern?: RegExp): string {
  if (pattern && !value.match(pattern)) {
    return ValidationErrors.POSTAL_CODE;
  }
  return '';
}
