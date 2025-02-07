import type { PropsWithChildren } from '@/shared/types/types';
import type { OutlinedInputProps } from '@mui/material/OutlinedInput';

import OutlinedInput from '@mui/material/OutlinedInput';
import { InputLabel, FormHelperText } from '@mui/material';

interface IValidationInputProps extends OutlinedInputProps {
  label: string;
}

export function ValidationInput({ label, children, type = 'text', required = true, ...props }: PropsWithChildren<IValidationInputProps>) {
  return (
    <>
      <InputLabel required>{label}</InputLabel>
      <OutlinedInput type={type} required {...props} />
      <FormHelperText error>{children}</FormHelperText>
    </>
  );
}
