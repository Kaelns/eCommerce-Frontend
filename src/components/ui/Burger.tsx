import { ButtonProps, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface IProps extends ButtonProps {}

export function Burger({ ...props }: IProps): JSX.Element {
  return (
    <IconButton {...props}>
      <MenuIcon />
    </IconButton>
  );
}
