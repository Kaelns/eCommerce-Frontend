import { ValidationErrors } from '@/features/validation/data/validation.enum';
import { checkJustLetterAndSpace, checkLength } from '@/features/validation/data/validationRules';
import { GENERAL_LENGTH } from '@/features/validation/data/validation.constants';

export default function checkGeneralRule(value: string): string {
  if (checkLength(GENERAL_LENGTH, value)) {
    return ValidationErrors.LENGTH_GENERAL;
  }

  if (checkJustLetterAndSpace(value)) {
    return ValidationErrors.JUST_LETTER;
  }
  return '';
}
