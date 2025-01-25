import { ValidationErrors } from '@/shared/zod/%%%BADvalidation/data/validation.enum';
import { checkWhiteSpace, checkAtSymbol, checkMainPart, checkDomainPart } from './data/validationRules';

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
