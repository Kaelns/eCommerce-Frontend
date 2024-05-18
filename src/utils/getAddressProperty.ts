import { IAddresses } from '@/data/interface/IRegistration.interface';

export function getAddressProperty(prefix: string): IAddresses {
  const ADDRESSES = {
    country: { label: 'Country', name: `${prefix}Country` },
    city: { label: 'City', name: `${prefix}City` },
    street: { label: 'Street', name: `${prefix}Street` },
    postalCode: { label: 'Postal code', name: `${prefix}PostalCode` }
  } as const;
  return ADDRESSES;
}
