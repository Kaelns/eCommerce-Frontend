import type { IAddress } from '@/services/interface';
import type { IInputsValues, IInputsErrors } from '@/features/components/AuthForms/data/AuthForms.types';

import { INPUTS, AddressPrefix } from '@/features/components/AuthForms/data/AuthForms.constants';

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

export function getAddressValue(key: string, address?: IAddress): string {
  if (address === undefined) {
    return '';
  }
  switch (key) {
    case 'City':
      return address.city;
    case 'Country':
      return address.country;
    case 'PostalCode':
      return address.postalCode;
    case 'Street':
      return address.streetName;
    default:
      return '';
  }
}

export const getPrefix = (name: string): AddressPrefix | null => {
  const prefix = name.match(AddressPrefix.BILLING) ?? name.match(AddressPrefix.SHIPPING);
  return prefix ? (prefix[0] as AddressPrefix) : null;
};
