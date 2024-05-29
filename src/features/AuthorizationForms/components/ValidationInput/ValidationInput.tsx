import OutlinedInput, { OutlinedInputProps } from '@mui/material/OutlinedInput';
import { InputLabel } from '@mui/material';
import { PropsWithChildren } from '@/data/types/PropsWithChildren';
import { InputType } from '@/features/AuthorizationForms/components/ValidationInput/validationInput.enum';

interface IProps extends OutlinedInputProps {
  label: string;
}

export function ValidationInput({
  label,
  children,
  type = InputType.TEXT,
  required = true,
  ...props
}: PropsWithChildren<IProps>): React.ReactNode {
  return (
    <>
      <InputLabel required>{label}</InputLabel>
      <OutlinedInput type={type} required {...props} />
      {children}
    </>
  );
}
