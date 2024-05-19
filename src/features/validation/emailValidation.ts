import { ValidationErrors } from '@/data/enum/validationError.enum';
import { checkWhiteSpace, checkAtSymbol, checkMainPart, checkDomainPart } from './validationRules';

export default function checkEmail(value: string): string {
  if (checkWhiteSpace(value)) {
    return ValidationErrors.WHITESPACE;
  }
  if (checkAtSymbol(value)) {
    return ValidationErrors.AT_SYMBOL;
  }
  if (checkMainPart(value)) {
    return ValidationErrors.MAIN_PART;
  }
  if (checkDomainPart(value)) {
    return ValidationErrors.DOMAIN_PART;
  }
  return '';
}
