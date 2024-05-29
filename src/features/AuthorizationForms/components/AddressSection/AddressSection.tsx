import { FormHelperText } from '@mui/material';
import ComboBox from '@/features/AuthorizationForms/components/ComboBox/ComboBox';
import { ValidationInput } from '@/features/AuthorizationForms/components/ValidationInput/ValidationInput';
import OnChangeComboBox from '@/features/AuthorizationForms/components/ComboBox/ComboBox.type';
import {
  ADDRESSES_INPUT_KEYS,
  ADDRESS_INPUTS,
  COUNTRY_LIST
} from '@/features/AuthorizationForms/components/AddressSection/AddressSection.constants';
import { AddressPrefix } from '@/features/AuthorizationForms/data/addressPrefix.enum';
import { AddressProperty } from '@/features/AuthorizationForms/data/addressProperty.enum';
import { IInputsErrors } from '@/features/AuthorizationForms/data/InputTypes';
import { INPUTS } from '@/features/AuthorizationForms/data/forms.constants';

interface IProps {
  onChangeFunction: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    checkFunction: (value: string) => string
  ) => void;
  onChangeComboBox: OnChangeComboBox;
  inputsErrors: IInputsErrors;
  prefix: AddressPrefix;
}

export default function AddressSection({
  onChangeFunction,
  onChangeComboBox,
  inputsErrors,
  prefix
}: IProps): React.ReactNode {
  return (
    <>
      <ComboBox
        label={INPUTS[`${prefix}${AddressProperty.COUNTRY}`].label}
        name={INPUTS[`${prefix}${AddressProperty.COUNTRY}`].name}
        id={prefix}
        options={COUNTRY_LIST}
        onChangeComboBox={onChangeComboBox}
      />

      {ADDRESSES_INPUT_KEYS.map((inputName) => (
        <ValidationInput
          key={inputName}
          label={INPUTS[`${prefix}${inputName}`].label}
          name={INPUTS[`${prefix}${inputName}`].name}
          onChange={(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
            onChangeFunction(event, ADDRESS_INPUTS[inputName])
          }
        >
          <FormHelperText error>
            {inputsErrors[INPUTS[`${prefix}${inputName}`].name] && inputsErrors[INPUTS[`${prefix}${inputName}`].name]}
          </FormHelperText>
        </ValidationInput>
      ))}
    </>
  );
}
