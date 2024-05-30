import OutlinedInput from '@mui/material/OutlinedInput';
import { InputLabel } from '@mui/material';
import { InputType } from '@/features/AuthorizationForms/components/ValidationInput/ValidationInput.enums';
import { PropsWithChildren } from '@/data/types/PropsWithChildren';
import { IValidationInputProps } from '@/features/AuthorizationForms/components/ValidationInput/ValidationInput.interface';

export function ValidationInput({
  label,
  children,
  type = InputType.TEXT,
  required = true,
  ...props
}: PropsWithChildren<IValidationInputProps>): React.ReactNode {
  return (
    <>
      <InputLabel required>{label}</InputLabel>
      <OutlinedInput type={type} required {...props} />
      {children}
    </>
  );
}
