import type dayjs from 'dayjs';
import type { SetStateAction } from 'react';
import type { DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import type { IInputsValues } from '@/features/AuthForms/data/AuthForms.types';

import { useState } from 'react';
import { InputLabel, FormHelperText } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { DATE_DASH_FORMAT } from '@/shared/data/constants';

const OPEN_TO = 'year';
const FORMAT = 'DD/MM/YYYY';

interface IDateInputProps extends DatePickerProps<dayjs.Dayjs> {
  name: string;
  label: string;
  validationChecks: (value: string) => string;
  setInputs: React.Dispatch<SetStateAction<IInputsValues>>;
}

export function DateInput({ label, name, validationChecks, setInputs, ...props }: IDateInputProps) {
  const [valueMatch, setValueMatch] = useState('');

  const handleDateChange = (date: dayjs.Dayjs | null): void => {
    if (!date) {
      return;
    }
    setValueMatch(validationChecks(date.toString()));
    setInputs((values) => ({ ...values, [name]: date.format(DATE_DASH_FORMAT) }));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <InputLabel>{label}: </InputLabel>
      <DatePicker format={FORMAT} openTo={OPEN_TO} onChange={handleDateChange} {...props} />
      <FormHelperText error>{valueMatch && valueMatch}</FormHelperText>
    </LocalizationProvider>
  );
}
