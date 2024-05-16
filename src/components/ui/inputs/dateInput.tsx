import { useState, SetStateAction } from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { InputLabel } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import styles from '@/components/ui/inputs/inputs.module.scss';

export default function DateInput({
  label,
  name,
  validationChecks,
  defaultValue,
  maxDate,
  minDate,
  setInputs
}: {
  label: string;
  name: string;
  validationChecks: (value: string) => string;
  defaultValue: dayjs.Dayjs;
  maxDate: dayjs.Dayjs;
  minDate: dayjs.Dayjs;
  setInputs: React.Dispatch<SetStateAction<{ [key: string]: string }>>;
}): JSX.Element {
  const [valueMatch, setValueMatch] = useState('');

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <InputLabel className={styles.label}>{label}: </InputLabel>
      <DatePicker
        defaultValue={defaultValue}
        className={styles.input}
        format="DD/MM/YYYY"
        openTo="year"
        maxDate={maxDate}
        minDate={minDate}
        onChange={(date) => {
          if (date) {
            setValueMatch(validationChecks(date.toString()));
            setInputs((values) => ({ ...values, [name]: date.toString() }));
          }
        }}
      />
      {valueMatch && <p className={styles.error}>{valueMatch}</p>}
    </LocalizationProvider>
  );
}
