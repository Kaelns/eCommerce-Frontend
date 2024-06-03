import { FormHelperText } from '@mui/material';
import ComboBox from '@/features/AuthorizationForms/components/ComboBox/ComboBox';
import { ValidationInput } from '@/features/AuthorizationForms/components/ValidationInput/ValidationInput';
import { OnChangeComboBox } from '@/features/AuthorizationForms/components/ComboBox/ComboBox.type';
import {
  ADDRESSES_INPUT_KEYS,
  ADDRESS_INPUTS,
  COUNTRY_LIST
} from '@/features/AuthorizationForms/components/AddressSection/AddressSection.constants';
import { IInputsErrors, IInputsValues } from '@/features/AuthorizationForms/data/AuthorizationForms.types';
import { INPUTS } from '@/features/AuthorizationForms/data/AuthorizationForms.constants';
import { HandleOnChangeInput } from '@/features/AuthorizationForms/RegistrationForm/data/RegistrationForm.types';
import { AddressPrefix, AddressProperty } from '@/features/AuthorizationForms/data/AuthorizationForms.enum';

interface IProps {
  onChangeFunction: HandleOnChangeInput;
  onChangeComboBox: OnChangeComboBox;
  inputsErrors: IInputsErrors;
  inputsValues: IInputsValues;
  prefix: AddressPrefix;
}

export default function AddressSection({
  onChangeFunction,
  onChangeComboBox,
  inputsErrors,
  inputsValues,
  prefix
}: IProps): React.ReactNode {
  return (
    <>
      <ComboBox
        label={INPUTS[`${prefix}${AddressProperty.COUNTRY}`].label}
        name={INPUTS[`${prefix}${AddressProperty.COUNTRY}`].name}
        id={prefix}
        options={COUNTRY_LIST}
        defaultValue="RU"
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
