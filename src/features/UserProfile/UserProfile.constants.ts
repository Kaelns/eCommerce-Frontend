import { AddressPrefix, AddressProperty } from '@/features/AuthorizationForms/data/AuthorizationForms.enum';
import { InputsNames } from '@/features/AuthorizationForms/data/AuthorizationForms.types.ts';

export const EMAIL_LABEL = 'Your email:';
export const CURRENT_PASSWORD = 'Your current password:';
export const NEW_PASSWORD = 'Enter new password:';

export const keysToCheck: InputsNames[] = [
  `${AddressPrefix.SHIPPING}${AddressProperty.COUNTRY}`,
  `${AddressPrefix.SHIPPING}${AddressProperty.CITY}`,
  `${AddressPrefix.SHIPPING}${AddressProperty.STREET}`,
  `${AddressPrefix.SHIPPING}${AddressProperty.POSTAL_CODE}`
];
