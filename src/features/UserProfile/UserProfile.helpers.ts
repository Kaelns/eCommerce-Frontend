import { INPUTS } from '@/features/AuthorizationForms/data/AuthorizationForms.constants';
import { IInputsValues, IInputsErrors } from '@/features/AuthorizationForms/data/AuthorizationForms.types';

export function checkAddressInputs(inputsValues: IInputsValues, inputsErrors: IInputsErrors): boolean {
  if (!inputsValues[INPUTS.shippingCity.name] || inputsErrors[INPUTS.shippingCity.name]) {
    return false;
  }
  if (!inputsValues[INPUTS.shippingCountry.name] || inputsErrors[INPUTS.shippingCountry.name]) {
    return false;
  }
  if (!inputsValues[INPUTS.shippingPostalCode.name] || inputsErrors[INPUTS.shippingPostalCode.name]) {
    return false;
  }
  if (!inputsValues[INPUTS.shippingStreet.name] || inputsErrors[INPUTS.shippingStreet.name]) {
    return false;
  }
  return true;
}
