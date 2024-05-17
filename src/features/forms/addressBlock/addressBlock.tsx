import { SyntheticEvent, useCallback } from 'react';
import { TextField } from '@mui/material';
import Input from '@/components/ui/inputs/input';
import styles from '@/features/forms/forms.module.scss';
import checkGeneralRule from '@/features/validation/generalValidation';
import streetValidation from '@/features/validation/streetValidation';
import { countryList } from '@/features/forms/addressBlock/addressBlock.constants';
import ComboBox from '@/components/ui/comboBox/comboBox';
import { INPUTS } from '@/features/forms/forms.constants';
import { IOptions } from '@/data/interface/IComboBox.interface';
import OnChangeComboBox from '@/data/types/ComboBoxFunction';

interface IProps {
  onChangeFunction: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    checkFunction: (value: string) => string
  ) => void;
  onChangeComboBox: OnChangeComboBox;
  inputsError: { [key: string]: string };
}
export default function AddressBlock({ onChangeFunction, onChangeComboBox, inputsError }: IProps): JSX.Element {
  return (
    <>
      <ComboBox
        label={INPUTS.country.label}
        name={INPUTS.country.name}
        options={countryList}
        onChangeComboBox={onChangeComboBox}
      />

      <Input
        label={INPUTS.postalCode.label}
        name={INPUTS.postalCode.name}
        onChange={(event) => onChangeFunction(event, checkGeneralRule)}
      >
        {inputsError[INPUTS.postalCode.name] && <p className={styles.error}>{inputsError[INPUTS.postalCode.name]}</p>}
      </Input>
      <Input
        label={INPUTS.city.label}
        name={INPUTS.city.name}
        onChange={(event) => onChangeFunction(event, checkGeneralRule)}
      >
        {inputsError[INPUTS.city.name] && <p className={styles.error}>{inputsError[INPUTS.city.name]}</p>}
      </Input>
      <Input
        label={INPUTS.street.label}
        name={INPUTS.street.name}
        onChange={(event) => onChangeFunction(event, streetValidation)}
      >
        {inputsError[INPUTS.street.name] && <p className={styles.error}>{inputsError[INPUTS.street.name]}</p>}
      </Input>
    </>
  );
}
