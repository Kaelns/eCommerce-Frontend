import { AddressProperty } from '@/features/AuthorizationForms/data/addressProperty.enum';

export type Addresses = Exclude<AddressProperty, AddressProperty.COUNTRY>;
export type AddressBlockInputs = Record<Addresses, (value: string, pattern?: RegExp) => string>;
