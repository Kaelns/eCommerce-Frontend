import { useMemo } from 'react';
import { FormHelperText } from '@mui/material';
import ComboBox from '@/features/AuthorizationForms/components/ComboBox/ComboBox';
import { ValidationInput } from '@/features/AuthorizationForms/components/ValidationInput/ValidationInput';
import {
  ADDRESSES_INPUT_KEYS,
  ADDRESS_INPUTS,
  COUNTRY_LIST
} from '@/features/AuthorizationForms/components/AddressSection/AddressSection.constants';
import { INPUTS } from '@/features/AuthorizationForms/data/AuthorizationForms.constants';
import { AddressProperty } from '@/features/AuthorizationForms/data/AuthorizationForms.enum';
import { IProps } from '@/features/AuthorizationForms/components/AddressSection/AddressSection.interface';

export default function AddressSection({
  onChangeFunction,
  onChangeComboBox,
  inputsErrors,
  inputsValues,
  prefix
}: IProps): React.ReactNode {
  const currentCountry = useMemo(
    () =>
      COUNTRY_LIST.filter(
        (value) => value.code === inputsValues[INPUTS[`${prefix}${AddressProperty.COUNTRY}`].name]
      )[0] ?? COUNTRY_LIST[0],
    [inputsValues, prefix]
  );
  return (
    <>
      <ComboBox
        label={INPUTS[`${prefix}${AddressProperty.COUNTRY}`].label}
        name={INPUTS[`${prefix}${AddressProperty.COUNTRY}`].name}
        id={prefix}
        options={COUNTRY_LIST}
        value={currentCountry}
        onChangeComboBox={onChangeComboBox}
      />

      {ADDRESSES_INPUT_KEYS.map((inputName) => (
        <ValidationInput
          key={inputName}
          label={INPUTS[`${prefix}${inputName}`].label}
          name={INPUTS[`${prefix}${inputName}`].name}
          value={inputsValues[INPUTS[`${prefix}${inputName}`].name] ?? ''}
          onChange={onChangeFunction(ADDRESS_INPUTS[inputName])}
        >
          <FormHelperText error>
            {inputsErrors[INPUTS[`${prefix}${inputName}`].name] && inputsErrors[INPUTS[`${prefix}${inputName}`].name]}
          </FormHelperText>
        </ValidationInput>
      ))}
    </>
  );
}
