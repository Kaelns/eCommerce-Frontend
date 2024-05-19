import Input from '@/features/AuthorizationForms/components/ValidationInput/ValidationInput';
import styles from '../../forms.module.scss';
import {
  ADDRESSES_INPUT_KEYS,
  ADDRESS_INPUTS,
  COUNTRY_LIST
} from '@/features/AuthorizationForms/components/AddressBlock/addressBlock.constants';
import ComboBox from '@/features/AuthorizationForms/components/ComboBox/ComboBox';
import { INPUTS } from '@/features/AuthorizationForms/data/forms.constants';
import OnChangeComboBox from '@/features/AuthorizationForms/components/ComboBox/ComboBox.type';
import { AddressPrefix } from '@/features/AuthorizationForms/data/addressPrefix.enum';
import { IInputsErrors } from '@/features/AuthorizationForms/data/InputTypes';
import { AddressProperty } from '@/features/AuthorizationForms/data/addressProperty.enum';

interface IProps {
  onChangeFunction: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    checkFunction: (value: string) => string
  ) => void;
  onChangeComboBox: OnChangeComboBox;
  inputsErrors: IInputsErrors;
  prefix: AddressPrefix;
}

export default function AddressBlock({
  onChangeFunction,
  onChangeComboBox,
  inputsErrors,
  prefix
}: IProps): JSX.Element {
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
        <Input
          key={inputName}
          label={INPUTS[`${prefix}${inputName}`].label}
          name={INPUTS[`${prefix}${inputName}`].name}
          onChange={(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
            onChangeFunction(event, ADDRESS_INPUTS[inputName])
          }
        >
          {inputsErrors[INPUTS[`${prefix}${inputName}`].name] && (
            <p className={styles.error}>{inputsErrors[INPUTS[`${prefix}${inputName}`].name]}</p>
          )}
        </Input>
      ))}
    </>
  );
}
