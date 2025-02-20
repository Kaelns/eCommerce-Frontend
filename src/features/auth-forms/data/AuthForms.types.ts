import type { InputReactEvent, AutocompleteOptions } from '@/shared/model/types/types';
import type { INPUTS, AddressPrefix } from '@/features/AuthForms/data/AuthForms.constants';

export type InputsNames = (typeof INPUTS)[InputKeys]['name'];

export type IInputsValues = Partial<{
  [key in InputsNames]: string;
}>;

export type IInputsErrors = Partial<{
  [key in InputsNames]: string;
}>;

export type PostalCodePattern = {
  [key in AddressPrefix]: RegExp | undefined;
};

export type HandleOnChangeInput = (
  checkFunction: (value: string, pattern?: RegExp) => string
) => (e: InputReactEvent) => void;

export type HandleChangeAutocomplete = (
  event: React.SyntheticEvent<Element, Event>,
  value: AutocompleteOptions | null
) => void;

type InputKeys = keyof typeof INPUTS;
