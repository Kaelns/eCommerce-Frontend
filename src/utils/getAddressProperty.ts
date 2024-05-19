import { IItem } from '@/features/AuthorizationForms/data/IRegistration.interface';
import { AddressProperty } from '@/features/AuthorizationForms/data/addressProperty.enum';

export function getAddressProperty(prefix: string): { [key: string]: IItem } {
  const ADDRESSES = {
    [`${prefix}${AddressProperty.COUNTRY}`]: { label: 'Country', name: `${prefix}Country` },
    [`${prefix}${AddressProperty.CITY}`]: { label: 'City', name: `${prefix}City` },
    [`${prefix}${AddressProperty.STREET}`]: { label: 'Street', name: `${prefix}Street` },
    [`${prefix}${AddressProperty.POSTAL_CODE}`]: { label: 'Postal code', name: `${prefix}PostalCode` }
  } as const;
  return ADDRESSES;
}
