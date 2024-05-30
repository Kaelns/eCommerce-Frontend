import { ButtonProps, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export function Burger({ ...props }: ButtonProps): React.ReactNode {
  return (
    <IconButton {...props}>
      <MenuIcon />
    </IconButton>
  );
}
