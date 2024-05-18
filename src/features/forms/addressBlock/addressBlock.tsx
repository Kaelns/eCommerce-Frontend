import Input from '@/components/ui/inputs/input';
import styles from '@/features/forms/forms.module.scss';
import checkGeneralRule from '@/features/validation/generalValidation';
import streetValidation from '@/features/validation/streetValidation';
import { countryList } from '@/features/forms/addressBlock/addressBlock.constants';
import ComboBox from '@/components/ui/comboBox/comboBox';
import { INPUTS } from '@/features/forms/forms.constants';
import OnChangeComboBox from '@/data/types/ComboBoxFunction';
import { AddressPrefix } from '@/data/enum/addressPrefix.enum';
import checkPostalCode from '@/features/validation/postalCodeValidation';

interface IProps {
  onChangeFunction: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    checkFunction: (value: string) => string
  ) => void;
  onChangeComboBox: OnChangeComboBox;
  inputsError: { [key: string]: string };
  prefix: AddressPrefix;
}
export default function AddressBlock({ onChangeFunction, onChangeComboBox, inputsError, prefix }: IProps): JSX.Element {
  return (
    <>
      <ComboBox
        label={INPUTS[prefix].country.label}
        name={INPUTS[prefix].country.name}
        id={prefix}
        options={countryList}
        onChangeComboBox={onChangeComboBox}
      />

      <Input
        label={INPUTS[prefix].postalCode.label}
        name={INPUTS[prefix].postalCode.name}
        onChange={(event) => onChangeFunction(event, checkPostalCode)}
      >
        {inputsError[INPUTS[prefix].postalCode.name] && (
          <p className={styles.error}>{inputsError[INPUTS[prefix].postalCode.name]}</p>
        )}
      </Input>
      <Input
        label={INPUTS[prefix].city.label}
        name={INPUTS[prefix].city.name}
        onChange={(event) => onChangeFunction(event, checkGeneralRule)}
      >
        {inputsError[INPUTS[prefix].city.name] && (
          <p className={styles.error}>{inputsError[INPUTS[prefix].city.name]}</p>
        )}
      </Input>
      <Input
        label={INPUTS[prefix].street.label}
        name={INPUTS[prefix].street.name}
        onChange={(event) => onChangeFunction(event, streetValidation)}
      >
        {inputsError[INPUTS[prefix].street.name] && (
          <p className={styles.error}>{inputsError[INPUTS[prefix].street.name]}</p>
        )}
      </Input>
    </>
  );
}
