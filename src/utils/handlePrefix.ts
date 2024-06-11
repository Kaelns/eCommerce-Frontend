import { AddressPrefix } from '@/features/AuthorizationForms/data/AuthorizationForms.enum';

export const handlePrefix = (name: string): AddressPrefix | null => {
  const prefix = name.match(AddressPrefix.BILLING) ?? name.match(AddressPrefix.SHIPPING);

  return prefix ? (prefix[0] as AddressPrefix) : null;
};
