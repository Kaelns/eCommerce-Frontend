import { useMemo } from 'react';
import { Autocomplete, InputLabel, TextField } from '@mui/material';
import { ValidationInput } from '@/features/AuthForms/components/ValidationInput';
import type { AddressPrefix } from '@/features/AuthForms/data/AuthForms.constants';
import { INPUTS, AddressProperty } from '@/features/AuthForms/data/AuthForms.constants';
import type { HandleChangeAutocomplete, HandleOnChangeInput, IInputsErrors, IInputsValues } from '@/features/AuthForms/data/AuthForms.types';
import { COUNTRY_LIST } from '@/shared/data/constants';
import checkGeneralRule from '@/shared/zod/%%%BADvalidation/generalValidation';
import checkPostalCode from '@/shared/zod/%%%BADvalidation/postalCodeValidation';
import streetValidation from '@/shared/zod/%%%BADvalidation/streetValidation';

const ADDRESS_INPUTS = {
  [AddressProperty.POSTAL_CODE]: checkPostalCode,
  [AddressProperty.CITY]: checkGeneralRule,
  [AddressProperty.STREET]: streetValidation
};

const ADDRESS_INPUTS_KEYS = Object.keys(ADDRESS_INPUTS) as Array<keyof typeof ADDRESS_INPUTS>;

interface IAddressSectionProps {
  onChangeFunction: HandleOnChangeInput;
  onChangeAutocomplete: HandleChangeAutocomplete;
  inputsErrors: IInputsErrors;
  inputsValues: IInputsValues;
  prefix: AddressPrefix;
}

export function AddressSection({
  onChangeFunction,
  onChangeAutocomplete,
  inputsErrors,
  inputsValues,
  prefix
}: IAddressSectionProps): React.ReactNode {
  const input = INPUTS[`${prefix}${AddressProperty.COUNTRY}`];

  const currentCountry = useMemo(
    () => COUNTRY_LIST.filter((value) => value.code === inputsValues[input.name])[0] ?? COUNTRY_LIST[0],
    [input.name, inputsValues]
  );

  return (
    <>
      <InputLabel>{input.label}: </InputLabel>
      <Autocomplete
        id={prefix}
        onChange={onChangeAutocomplete}
        options={COUNTRY_LIST}
        value={currentCountry || null}
        renderInput={(params) => <TextField {...params} name={input.name} />}
      />

      {ADDRESS_INPUTS_KEYS.map((inputName) => {
        const targetInput = INPUTS[`${prefix}${inputName}`];
        return (
          <ValidationInput
            key={inputName}
            label={targetInput.label}
            name={targetInput.name}
            value={inputsValues[targetInput.name] ?? ''}
            onChange={onChangeFunction(ADDRESS_INPUTS[inputName])}
          >
            {inputsErrors[targetInput.name] && inputsErrors[targetInput.name]}
          </ValidationInput>
        );
      })}
    </>
  );
}
