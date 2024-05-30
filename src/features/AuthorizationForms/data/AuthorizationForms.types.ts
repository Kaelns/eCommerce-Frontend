import { INPUTS } from '@/features/AuthorizationForms/data/AuthorizationForms.constants';

type InputKeys = keyof typeof INPUTS;

type InputsNames = (typeof INPUTS)[InputKeys]['name'];

export type IInputsValues = Partial<{
  [key in InputsNames]: string;
}>;

export type IInputsErrors = Partial<{
  [key in InputsNames]: string;
}>;
