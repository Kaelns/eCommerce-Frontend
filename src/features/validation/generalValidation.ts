import { ValidationErrors } from '@/data/enum/validationError.enum';
import { checkJustLetter, checkLength } from '@/features/validation/validationRules';
import { GENERAL_LENGTH } from '@/features/validation/validation.constants';

export default function checkGeneralRule(value: string): string {
  if (checkLength(GENERAL_LENGTH, value)) {
    return ValidationErrors.LENGTH_GENERAL;
  }

  if (checkJustLetter(value)) {
    return ValidationErrors.JUST_LETTER;
  }
  return '';
}
