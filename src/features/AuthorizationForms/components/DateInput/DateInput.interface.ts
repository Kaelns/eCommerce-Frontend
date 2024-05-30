import dayjs from 'dayjs';
import { DatePickerProps } from '@mui/x-date-pickers';
import { SetStateAction } from 'react';
import { IInputsValues } from '@/features/AuthorizationForms/data/AuthorizationForms.types';

export interface IDateInputProps extends DatePickerProps<dayjs.Dayjs> {
  label: string;
  name: string;
  validationChecks: (value: string) => string;
  setInputs: React.Dispatch<SetStateAction<IInputsValues>>;
}
