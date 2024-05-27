import { MAX_AGE, MIN_AGE, GENERAL_LENGTH, PASSWORD_LENGTH } from '@/features/validation/validation.constants';

export enum ValidationErrors {
  AGE = `You should be older ${MIN_AGE} and younger ${MAX_AGE} years`,
  API = 'There is already an existing customer with the provided email.',
  PASSWORD = 'Password must contain one uppercase(A-Z), one lowercase(a-z) letter, digit (0-9) and special character (e.g., !@#$%^&*).',
  AT_SYMBOL = `Email should contain ${GENERAL_LENGTH} @ symbol.`,
  MAIN_PART = 'Please enter a valid email address (can contain just latin letters and digits).',
  WHITESPACE = 'Please delete whitespace.',
  POSTAL_CODE = 'Postal code does not match the country',
  JUST_LETTER = 'Field must contain just latin letter',
  DOMAIN_PART = 'Incorrect domain name. It should look like: @(latin/number > 1).(latin > 2)',
  LENGTH_GENERAL = `Field must contain at least one latin letter`,
  LENGTH_PASSWORD = `Password must be at least ${PASSWORD_LENGTH} characters long`
}
