import { ValidationErrors } from '@/shared/zod/validation/data/validation.enum';
import { checkJustLetterAndSpace, checkLength } from '@/shared/zod/validation/data/validationRules';
import { GENERAL_LENGTH } from '@/shared/zod/validation/data/validation.constants';

export default function checkGeneralRule(value: string): string {
  if (checkLength(GENERAL_LENGTH, value)) {
    return ValidationErrors.LENGTH_GENERAL;
  }

  if (checkJustLetterAndSpace(value)) {
    return ValidationErrors.JUST_LETTER;
  }
  return '';
}
