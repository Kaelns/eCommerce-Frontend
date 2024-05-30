import checkGeneralRule from '@/features/validation/generalValidation';
import streetValidation from '@/features/validation/streetValidation';
import checkPostalCode from '@/features/validation/postalCodeValidation';
import {
  AddressBlockInputs,
  Addresses
} from '@/features/AuthorizationForms/components/AddressSection/AddressSection.type';
import { AddressProperty } from '@/features/AuthorizationForms/data/AuthorizationForms.enum';

export const COUNTRY_LIST = [
  { label: 'United States', code: 'US', postalCodePattern: /^[0-9]{4,5}$/gm },
  { label: 'Russia', code: 'RU', postalCodePattern: /^[0-9]{6}$/gm },
  { label: 'Belarus', code: 'BY', postalCodePattern: /^[0-9]{6}$/gm }
];

export const ADDRESS_INPUTS: AddressBlockInputs = {
  [AddressProperty.POSTAL_CODE]: checkPostalCode,
  [AddressProperty.CITY]: checkGeneralRule,
  [AddressProperty.STREET]: streetValidation
};

export const ADDRESSES_INPUT_KEYS = Object.keys(ADDRESS_INPUTS) as Addresses[];
