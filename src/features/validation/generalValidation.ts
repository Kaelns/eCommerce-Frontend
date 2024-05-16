import { checkJustLetter } from './validationRules';

export default function checkGeneralRule(value: string): string {
  if (value.length < 1) {
    return 'Field must contain at least one latin letter';
  }

  if (checkJustLetter(value)) {
    return 'Field must contain just latin letter';
  }
  return '';
}
