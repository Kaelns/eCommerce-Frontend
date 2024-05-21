import checkGeneralRule from '@/features/validation/generalValidation';
import streetValidation from '@/features/validation/streetValidation';
import checkPostalCode from '@/features/validation/postalCodeValidation';
import { AddressProperty } from '@/features/AuthorizationForms/data/addressProperty.enum';
import {
  AddressBlockInputs,
  Addresses
} from '@/features/AuthorizationForms/components/AddressSection/AddressSection.type';

export const COUNTRY_LIST = [
  { label: 'United States', code: 'US', postalCodePattern: /^[0-9]{4,5}$/gm },
  { label: 'Russia', code: 'RU', postalCodePattern: /^[0-9]{6}$/gm },
  { label: 'Belarus', code: 'BY', postalCodePattern: /^[0-9]{6}$/gm }
];

export const ADDRESS_INPUTS: AddressBlockInputs = {
  [AddressProperty.POSTAL_CODE]: checkPostalCode,
  [AddressProperty.CITY]: checkGeneralRule,
  [AddressProperty.STREET]: streetValidation
} as const;

export const ADDRESSES_INPUT_KEYS = Object.keys(ADDRESS_INPUTS) as Addresses[];
