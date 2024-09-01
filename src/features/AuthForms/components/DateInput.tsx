import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { FormHelperText, InputLabel } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { SetStateAction, useState } from 'react';
import { IInputsValues } from '@/features/AuthForms/data/AuthForms.types';
import { DATE_DASH } from '@/shared/constants';

const OPEN_TO = 'year';
const FORMAT = 'DD/MM/YYYY';

interface IDateInputProps extends DatePickerProps<dayjs.Dayjs> {
  label: string;
  name: string;
  validationChecks: (value: string) => string;
  setInputs: React.Dispatch<SetStateAction<IInputsValues>>;
}

export function DateInput({ label, name, validationChecks, setInputs, ...props }: IDateInputProps): React.ReactNode {
  const [valueMatch, setValueMatch] = useState('');

  const handleDateChange = (date: dayjs.Dayjs | null): void => {
    if (!date) {
      return;
    }
    setValueMatch(validationChecks(date.toString()));
    setInputs((values) => ({ ...values, [name]: date.format(DATE_DASH) }));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <InputLabel>{label}: </InputLabel>
      <DatePicker format={FORMAT} openTo={OPEN_TO} onChange={handleDateChange} {...props} />
      <FormHelperText error>{valueMatch && valueMatch}</FormHelperText>
    </LocalizationProvider>
  );
}
