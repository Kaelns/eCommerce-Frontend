import { AddressPrefix, AddressProperty } from '@/features/AuthorizationForms/data/AuthorizationForms.enum';

export const INPUTS = {
  email: { label: 'Enter your email', name: 'email' },
  password: { label: 'Enter your password', name: 'password' },
  lastName: { label: 'Last name', name: 'lastName' },
  firstName: { label: 'First name', name: 'firstName' },
  birthday: { label: 'Birthday', name: 'birthday' },
  [`${AddressPrefix.BILLING}${AddressProperty.COUNTRY}`]: { label: 'Country', name: `${AddressPrefix.BILLING}Country` },
  [`${AddressPrefix.BILLING}${AddressProperty.CITY}`]: { label: 'City', name: `${AddressPrefix.BILLING}City` },
  [`${AddressPrefix.BILLING}${AddressProperty.STREET}`]: { label: 'Street', name: `${AddressPrefix.BILLING}Street` },
  [`${AddressPrefix.BILLING}${AddressProperty.POSTAL_CODE}`]: {
    label: 'Postal code',
    name: `${AddressPrefix.BILLING}PostalCode`
  },
  [`${AddressPrefix.SHIPPING}${AddressProperty.COUNTRY}`]: {
    label: 'Country',
    name: `${AddressPrefix.SHIPPING}Country`
  },
  [`${AddressPrefix.SHIPPING}${AddressProperty.CITY}`]: { label: 'City', name: `${AddressPrefix.SHIPPING}City` },
  [`${AddressPrefix.SHIPPING}${AddressProperty.STREET}`]: { label: 'Street', name: `${AddressPrefix.SHIPPING}Street` },
  [`${AddressPrefix.SHIPPING}${AddressProperty.POSTAL_CODE}`]: {
    label: 'Postal code',
    name: `${AddressPrefix.SHIPPING}PostalCode`
  }
};
