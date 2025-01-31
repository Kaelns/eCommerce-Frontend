import type { IconButtonProps } from '@mui/material';

import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export function BurgerBtn({ ...props }: IconButtonProps): React.ReactNode {
  return (
    <IconButton {...props}>
      <MenuIcon />
    </IconButton>
  );
}
