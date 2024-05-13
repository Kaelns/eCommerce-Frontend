import { checkWhiteSpace, checkAtSymbol, checkMainPart, checkDomainPart } from './validationRules';

export default function checkEmail(value: string): string {
  if (checkWhiteSpace(value)) {
    return 'Please delete whitespace.';
  }
  if (checkAtSymbol(value)) {
    return 'Email should contain one @ symbol.';
  }
  if (checkMainPart(value)) {
    return 'Please enter a valid email address(can contain just latin letters and digits).';
  }
  if (checkDomainPart(value)) {
    return 'Incorrect domain name.';
  }
  return '';
}
