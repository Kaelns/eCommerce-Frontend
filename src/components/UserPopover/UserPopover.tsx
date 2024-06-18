import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Badge, Box, Button, IconButton, Popover } from '@mui/material';
import { useCallback, useState } from 'react';
import { eCommerceAPI } from '@/services/ECommerceAPI';
import { Navbar } from '@/layout/Navbar/Navbar';
import { Navbars } from '@/layout/Navbar/data/Navbar.enum';
import { useAuthContext } from '@/context/AuthContext/useAuthContext';

import styles from './UserPopover.module.scss';

export function UserPopover(): React.ReactNode {
  const { authUserToken, setAuthUserToken } = useAuthContext();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const isOpenPopover = Boolean(anchorEl);
  const id = isOpenPopover ? 'popover' : undefined;

  const showBadgeIfNonAuthorized = authUserToken ? 0 : 'Login';

  const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback((): void => {
    setAnchorEl(null);
  }, []);

  const logOut = async (): Promise<void> => {
    await eCommerceAPI.logoutCustomer();
    setAuthUserToken('');
  };

  return (
    <>
      <IconButton aria-describedby={id} onClick={handleClick}>
        <Badge
          badgeContent={showBadgeIfNonAuthorized}
          color="primary"
          className={styles.badge}
          slotProps={{ badge: { className: styles.badgeIcon } }}
        >
          <AccountCircleOutlinedIcon />
        </Badge>
      </IconButton>
      <Popover
        id={id}
        open={isOpenPopover}
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
        <Box className={styles.popover}>
          <Navbar navbarType={Navbars.POPOVER} />
          {authUserToken && (
            <Button variant="contained" size="small" onClick={logOut}>
              Log out
            </Button>
          )}
        </Box>
      </Popover>
    </>
  );
}
