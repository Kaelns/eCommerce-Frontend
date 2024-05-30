import { HandleOnChangeInput } from '@/features/AuthorizationForms/RegistrationForm/data/RegistrationForm.types';
import { IInputsErrors } from '@/features/AuthorizationForms/data/AuthorizationForms.types';

export default interface ICredentialBlock {
  onChangeFunction: HandleOnChangeInput;
  inputsErrors: IInputsErrors;
}
