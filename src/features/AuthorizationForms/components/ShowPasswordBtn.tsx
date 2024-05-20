import { SetStateAction } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { PropsWithChildren } from '@/data/types/PropsWithChildren';

interface IProps {
  setShowPassword: React.Dispatch<SetStateAction<boolean>>;
}

export function ShowPasswordBtn({ setShowPassword, children }: PropsWithChildren<IProps>): JSX.Element {
  return (
    <InputAdornment position="end">
      <IconButton onClick={() => setShowPassword((value) => !value)} edge="end">
        {children}
      </IconButton>
    </InputAdornment>
  );
}
