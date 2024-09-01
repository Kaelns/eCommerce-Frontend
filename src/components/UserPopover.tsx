import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Badge, Button, IconButton, Popover, badgeClasses } from '@mui/material';
import { useState } from 'react';
import { Stack, SxProps } from '@mui/system';
import { eCommerceAPI } from '@/services/ECommerceAPI';
import { Navbar } from '@/layout/Navbar/Navbar';
import { useAuthContext } from '@/context/AuthContext/useAuthContext';
import { Navbars } from '@/layout/Navbar/Navbar.constants';

const BADGE_LOGIN_TEXT = 'Login';

const sxBadge: SxProps = {
  [`& .${badgeClasses.badge}`]: {
    height: '1.7rem',
    minWidth: '1.7rem',
    fontSize: '1.1rem'
  }
};

export function UserPopover(): React.ReactNode {
  const { authTokens, setAuthTokens } = useAuthContext();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const isOpenPopover = Boolean(anchorEl);
  const showBadgeIfNonAuthorized = authTokens.token ? 0 : BADGE_LOGIN_TEXT;

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const logOut = async (): Promise<void> => {
    const anonToken = await eCommerceAPI.logoutCustomer();
    setAuthTokens({ anonToken, token: '' });
  };

  return (
    <>
      <IconButton onClick={handleOpen}>
        <Badge badgeContent={showBadgeIfNonAuthorized} color="primary" sx={sxBadge}>
          <AccountCircleOutlinedIcon />
        </Badge>
      </IconButton>
      <Popover
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
        <Stack gap={1} padding={2}>
          <Navbar navbarType={Navbars.USER_POPOVER} />
          {authTokens.token && (
            <Button variant="contained" size="small" onClick={logOut}>
              Log out
            </Button>
          )}
        </Stack>
      </Popover>
    </>
  );
}
