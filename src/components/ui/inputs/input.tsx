import OutlinedInput, { OutlinedInputProps } from '@mui/material/OutlinedInput';
import { InputLabel } from '@mui/material';
import { PropsWithChildren } from '@/data/types/PropsWithChildren';
import { InputType } from '@/data/enum/input.enum';

interface IProps extends OutlinedInputProps {
  label: string;
}

export default function Input({
  label,
  children,
  type = InputType.TEXT,
  required = true,
  ...props
}: PropsWithChildren<IProps>): JSX.Element {
  return (
    <>
      <InputLabel required>{label}</InputLabel>
      <OutlinedInput type={type} required {...props} />
      {children}
    </>
  );
}
