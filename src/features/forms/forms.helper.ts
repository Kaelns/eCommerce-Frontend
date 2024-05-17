import { INPUTS } from '@/features/forms/forms.constants';

export function checkCredentialInputs(
  inputs: { [key: string]: string },
  inputsError: { [key: string]: string }
): boolean {
  const emailCheck = !!inputs[INPUTS.email.name] && !inputsError[INPUTS.email.name];
  const passwordCheck = !!inputs[INPUTS.password.name] && !inputsError[INPUTS.password.name];
  return emailCheck && passwordCheck;
}
export function checkAllInputs(inputs: { [key: string]: string }, inputsError: { [key: string]: string }): boolean {
  const values = Object.values(INPUTS);
  for (let i = 0; i < values.length; i += 1) {
    if (!inputs[values[i].name] || inputsError[values[i].name]) {
      return false;
    }
  }
  return true;
}
