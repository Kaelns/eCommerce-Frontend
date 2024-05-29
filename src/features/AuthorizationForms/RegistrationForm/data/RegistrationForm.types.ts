import { AddressPrefix } from '@/features/AuthorizationForms/data/AuthorizationForms.enum';

type HandleOnChangeInput = (
  checkFunction: (value: string, pattern?: RegExp) => string
) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

type PostalCodePattern = {
  [key in AddressPrefix]: RegExp | undefined;
};

export type { HandleOnChangeInput, PostalCodePattern };
