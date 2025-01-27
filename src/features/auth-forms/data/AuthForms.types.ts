import type { AddressPrefix, INPUTS } from '@/features/AuthForms/data/AuthForms.constants';
import type { AutocompleteOptions, InputReactEvent } from '@/shared/types/types';

type InputKeys = keyof typeof INPUTS;

export type InputsNames = (typeof INPUTS)[InputKeys]['name'];

export type IInputsValues = Partial<{
  [key in InputsNames]: string;
}>;

export type IInputsErrors = Partial<{
  [key in InputsNames]: string;
}>;

export type HandleOnChangeInput = (
  checkFunction: (value: string, pattern?: RegExp) => string
) => (e: InputReactEvent) => void;

export type PostalCodePattern = {
  [key in AddressPrefix]: RegExp | undefined;
};

export type HandleChangeAutocomplete = (
  event: React.SyntheticEvent<Element, Event>,
  value: AutocompleteOptions | null
) => void;
