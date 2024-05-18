import { INPUTS, PROPERTY } from '@/features/forms/forms.constants';
import { IAddresses, IItem } from '@/data/interface/IRegistration.interface';

export function checkCredentialInputs(
  inputs: { [key: string]: string },
  inputsError: { [key: string]: string }
): boolean {
  const emailCheck = !!inputs[INPUTS.email.name] && !inputsError[INPUTS.email.name];
  const passwordCheck = !!inputs[INPUTS.password.name] && !inputsError[INPUTS.password.name];
  return emailCheck && passwordCheck;
}

function instanceOfIItem(object: IItem | IAddresses): object is IItem {
  return PROPERTY.iItem in object;
}
function instanceOfIAddresses(object: IItem | IAddresses): object is IAddresses {
  return PROPERTY.iAddresses in object;
}

export function checkAllInputs(inputs: { [key: string]: string }, inputsError: { [key: string]: string }): boolean {
  const values = Object.values(INPUTS);
  for (let i = 0; i < values.length; i += 1) {
    const currentValue = values[i];
    if (instanceOfIItem(currentValue)) {
      if (!inputs[values[i].name] || inputsError[values[i].name]) {
        return false;
      }
    }
    if (instanceOfIAddresses(currentValue)) {
      const addressValue = Object.values(currentValue);
      for (let j = 0; j < addressValue.length; j += 1) {
        if (!inputs[addressValue[j].name] || inputsError[addressValue[j].name]) {
          return false;
        }
      }
    }
  }
  return true;
}
