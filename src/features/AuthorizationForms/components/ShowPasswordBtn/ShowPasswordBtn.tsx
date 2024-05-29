import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { PropsWithChildren } from '@/data/types/PropsWithChildren';
import { IShowPasswordBtnProps } from '@/features/AuthorizationForms/components/ShowPasswordBtn/ShowPasswordBtn.interface';

export function ShowPasswordBtn({
  setShowPassword,
  children
}: PropsWithChildren<IShowPasswordBtnProps>): React.ReactNode {
  return (
    <InputAdornment position="end">
      <IconButton onClick={() => setShowPassword((value) => !value)} edge="end">
        {children}
      </IconButton>
    </InputAdornment>
  );
}
