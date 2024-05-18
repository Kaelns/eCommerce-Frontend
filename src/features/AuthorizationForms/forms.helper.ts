import { INPUTS } from '@/features/AuthorizationForms/data/forms.constants';
import { IInputsErrors, IInputsValues } from '@/features/AuthorizationForms/data/InputTypes';

export function checkCredentialInputs(inputsValues: IInputsValues, inputsErrors: IInputsErrors): boolean {
  const isValidEmail = !!inputsValues[INPUTS.email.name] && !inputsErrors[INPUTS.email.name];
  const isValidPassword = !!inputsValues[INPUTS.password.name] && !inputsErrors[INPUTS.password.name];
  return isValidEmail && isValidPassword;
}

export function checkAllInputs(inputsValues: IInputsValues, inputsErrors: IInputsErrors): boolean {
  const values = Object.values(INPUTS);
  for (const i of values) {
    if (!inputsValues[i.name] || inputsErrors[i.name]) {
      return false;
    }
  }
  return true;
}
