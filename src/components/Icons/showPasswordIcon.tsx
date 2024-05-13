import { SetStateAction } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function ShowPasswordIcon({
  showPassword,
  setShowPassword
}: {
  showPassword: boolean;
  setShowPassword: React.Dispatch<SetStateAction<boolean>>;
}): JSX.Element {
  return (
    <InputAdornment position="end">
      <IconButton
        // aria-label="toggle password visibility"
        onClick={() => setShowPassword((value) => !value)}
        onMouseDown={(e) => e.preventDefault()}
        edge="end"
      >
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  );
}
