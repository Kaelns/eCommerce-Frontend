import { IInputsValues, IInputsErrors } from '@/features/AuthorizationForms/data/AuthorizationForms.types';
import { keysToCheck } from '@/features/UserProfile/UserProfile.constants';

export function checkAddressInputs(inputsValues: IInputsValues, inputsErrors: IInputsErrors): boolean {
  return keysToCheck.some((key) => !(!inputsValues[key] || inputsErrors[key]));
}
