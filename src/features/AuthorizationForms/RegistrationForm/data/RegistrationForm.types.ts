import { InputReactEvent } from '@/data/types/InputReactEvent';
import { AddressPrefix } from '@/features/AuthorizationForms/data/AuthorizationForms.enum';

type HandleOnChangeInput = (checkFunction: (value: string, pattern?: RegExp) => string) => (e: InputReactEvent) => void;

type PostalCodePattern = {
  [key in AddressPrefix]: RegExp | undefined;
};

export type { HandleOnChangeInput, PostalCodePattern };
