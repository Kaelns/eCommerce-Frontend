import { HandleOnChangeInput } from '@/features/AuthorizationForms/RegistrationForm/data/RegistrationForm.types';
import { OnChangeComboBox } from '@/features/AuthorizationForms/components/ComboBox/ComboBox.type';
import { AddressPrefix } from '@/features/AuthorizationForms/data/AuthorizationForms.enum';
import { IInputsErrors, IInputsValues } from '@/features/AuthorizationForms/data/AuthorizationForms.types';

export interface IProps {
  onChangeFunction: HandleOnChangeInput;
  onChangeComboBox: OnChangeComboBox;
  inputsErrors: IInputsErrors;
  inputsValues: IInputsValues;
  prefix: AddressPrefix;
}
