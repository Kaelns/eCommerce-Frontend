import { AddressPrefix } from '@/data/enum/addressPrefix.enum';
import { IInputs } from '@/data/interface/IRegistration.interface';
import { getAddressProperty } from '@/utils/getAddressProperty';

export const INPUTS: IInputs = {
  email: { label: 'Enter your email', name: 'email' },
  password: { label: 'Enter your password', name: 'password' },
  lastName: { label: 'Last name', name: 'lastName' },
  firstName: { label: 'First name', name: 'firstName' },
  birthday: { label: 'Birthday', name: 'birthday' },
  shipping: getAddressProperty(AddressPrefix.SHIPPING),
  billing: getAddressProperty(AddressPrefix.BILLING)
} as const;

export const PROPERTY = {
  iItem: 'label',
  iAddresses: 'country'
};
