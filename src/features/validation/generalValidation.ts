import { checkJustLetter, checkLength } from './validationRules';
import { GENERAL_LENGTH } from './validation.constants';

export default function checkGeneralRule(value: string): string {
  if (checkLength(GENERAL_LENGTH, value)) {
    return 'Field must contain at least one latin letter';
  }

  if (checkJustLetter(value)) {
    return 'Field must contain just latin letter';
  }
  return '';
}
