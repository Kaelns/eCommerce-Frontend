import { INPUTS } from '@/features/AuthorizationForms/data/AuthorizationForms.constants';
import { AddressPrefix } from '@/features/AuthorizationForms/data/AuthorizationForms.enum';
import { IInputsErrors, IInputsValues } from '@/features/AuthorizationForms/data/AuthorizationForms.types';

export function checkCredentialInputs(inputsValues: IInputsValues, inputsErrors: IInputsErrors): boolean {
  const isValidEmail = !!inputsValues[INPUTS.email.name] && !inputsErrors[INPUTS.email.name];
  const isValidPassword = !!inputsValues[INPUTS.password.name] && !inputsErrors[INPUTS.password.name];
  return isValidEmail && isValidPassword;
}

export function checkAllInputs(
  inputsValues: IInputsValues,
  inputsErrors: IInputsErrors,
  isSameAddress: boolean
): boolean {
  const values = Object.values(INPUTS);
  const result = !values.some((input) => {
    const isErrOrNoValue = Boolean(!inputsValues[input.name] || inputsErrors[input.name]);
    const isNotSameAddressOrAsBilling = Boolean(!(isSameAddress && input.name.indexOf(AddressPrefix.BILLING) >= 0));
    return isErrOrNoValue && isNotSameAddressOrAsBilling;
  });

  return result;
}
