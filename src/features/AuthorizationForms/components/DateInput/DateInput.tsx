import { useState, SetStateAction } from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { InputLabel } from '@mui/material';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';

import styles from '../../forms.module.scss';
import { FORMAT, OPEN_TO } from '@/features/AuthorizationForms/components/DateInput/dateInput.constants';
import { IInputsValues } from '@/features/AuthorizationForms/data/InputTypes';

interface IProps extends DatePickerProps<dayjs.Dayjs> {
  label: string;
  name: string;
  validationChecks: (value: string) => string;
  setInputs: React.Dispatch<SetStateAction<IInputsValues>>;
}

export default function DateInput({ label, name, validationChecks, setInputs, ...props }: IProps): JSX.Element {
  const [valueMatch, setValueMatch] = useState('');

  const onChange = (date: dayjs.Dayjs | null): void => {
    if (date) {
      setValueMatch(validationChecks(date.toString()));
      setInputs((values) => ({ ...values, [name]: date.toString() }));
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <InputLabel>{label}: </InputLabel>
      <DatePicker format={FORMAT} openTo={OPEN_TO} onChange={onChange} {...props} />
      {valueMatch && <p className={styles.error}>{valueMatch}</p>}
    </LocalizationProvider>
  );
}
