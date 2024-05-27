import GetAge from '@/utils/getAge';
import { MAX_AGE, MIN_AGE } from '@/features/validation/validation.constants';

export function checkWhiteSpace(value: string): boolean {
  const whiteSpace = /^\s|\s$/gm;
  return !!value.match(whiteSpace);
}
export function checkAtSymbol(value: string): boolean {
  const atSymbol = /^[^@]*@{1}[^@]*$/gm;
  return !value.match(atSymbol);
}
export function checkDomainPart(value: string): boolean {
  const domainPart = /@(?:[a-zA-Z0-9]+\.)+[A-Za-z]{2,}$/gm;
  return !value.match(domainPart);
}
export function checkMainPart(value: string): boolean {
  const mainPart = /^[a-zA-Z0-9\-_.]+@/gm;
  return !value.match(mainPart);
}
export function checkUppercaseLetter(value: string): boolean {
  const uppercaseLetter = /[A-Z]{1,}/gm;
  return !value.match(uppercaseLetter);
}
export function checkLowercaseLetter(value: string): boolean {
  const lowercaseLetter = /[a-z]{1,}/gm;
  return !value.match(lowercaseLetter);
}
export function checkDigit(value: string): boolean {
  const digit = /[0-9]{1,}/gm;
  return !value.match(digit);
}
export function checkSpecialChar(value: string): boolean {
  const specialChar = /[!@#$%^&*\-+_=,./\\<>?{}[\]():;"'|`~]{1,}/gm;
  return !value.match(specialChar);
}
export function checkJustLetterAndSpace(value: string): boolean {
  const justLetter = /^[a-zA-Z ]+$/gm;
  return !value.match(justLetter);
}
export function checkAge(value: string): boolean {
  const age = GetAge(new Date(value));
  return age < MIN_AGE || age > MAX_AGE || Object.is(age, NaN);
}
export function checkLength(length: number, value: string): boolean {
  return value.length < length;
}
