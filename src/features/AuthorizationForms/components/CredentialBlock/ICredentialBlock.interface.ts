import { IInputsErrors } from '@/features/AuthorizationForms/data/InputTypes';

export default interface ICredentialBlock {
  onChangeFunction: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    checkFunction: (value: string) => string
  ) => void;
  inputsErrors: IInputsErrors;
}
