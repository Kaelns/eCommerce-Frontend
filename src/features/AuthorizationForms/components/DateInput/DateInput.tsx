import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { FormHelperText, InputLabel } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useState, SetStateAction } from 'react';
import { IInputsValues } from '@/features/AuthorizationForms/data/InputTypes';
import { FORMAT, OPEN_TO } from '@/features/AuthorizationForms/components/DateInput/dateInput.constants';

interface IProps extends DatePickerProps<dayjs.Dayjs> {
  label: string;
  name: string;
  validationChecks: (value: string) => string;
  setInputs: React.Dispatch<SetStateAction<IInputsValues>>;
}

export function DateInput({ label, name, validationChecks, setInputs, ...props }: IProps): React.ReactNode {
  const [valueMatch, setValueMatch] = useState('');

  const onChange = (date: dayjs.Dayjs | null): void => {
    if (date) {
      setValueMatch(validationChecks(date.toString()));
      setInputs((values) => ({ ...values, [name]: date.format('YYYY-MM-DD') }));
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <InputLabel>{label}: </InputLabel>
      <DatePicker format={FORMAT} openTo={OPEN_TO} onChange={onChange} {...props} />
      <FormHelperText error>{valueMatch && valueMatch}</FormHelperText>
    </LocalizationProvider>
  );
}
