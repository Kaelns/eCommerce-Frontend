import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Badge, Box, Button, IconButton, Popover } from '@mui/material';
import { useState } from 'react';
import { Navbar } from '@/layout/Navbar/Navbar';
import { useAuthContext } from '@/context/AuthContext/useAuthContext';
import { Navbars } from '@/layout/Navbar/data/Navbar.enum';

import * as styles from './UserPopover.mui';

export function UserPopover(): JSX.Element {
  const { authUserToken, setAuthUserToken } = useAuthContext();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton aria-describedby={id} onClick={handleClick}>
        <Badge badgeContent={authUserToken ? 0 : 'Login'} color="primary" sx={styles.badge}>
          <AccountCircleOutlinedIcon />
        </Badge>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <Box sx={styles.popover}>
          <Navbar navbarType={Navbars.POPOVER} />
          {authUserToken && (
            <Button variant="contained" size="small" onClick={() => setAuthUserToken('')}>
              Log out
            </Button>
          )}
        </Box>
      </Popover>
    </>
  );
}
