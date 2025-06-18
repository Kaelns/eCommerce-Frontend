import type { SxProps } from '@mui/system';

import { useState } from 'react';
import { Stack } from '@mui/system';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Badge, Popover, Tooltip, IconButton, badgeClasses } from '@mui/material';

import { authorizedUserPaths, nonAuthorizedUserPaths } from '@/widgets/AppHeader/model/navbars';

import { selectIsLoggedAuth } from '@/entities/auth';

import { Navbar } from '@/features/Navbar';

import { ContainedBtn } from '@/shared/ui/elements';
import { useAppSelector } from '@/shared/lib/redux';
import { BADGE_FONT_SIZE } from '@/shared/model/data';

const BADGE_LOGIN_TEXT = 'Login';

const sxBadge: SxProps = {
  [`& .${badgeClasses.badge}`]: {
    height: '1.7rem',
    minWidth: '1.7rem',
    fontSize: BADGE_FONT_SIZE
  }
};

export function UserPopoverMenu() {
  // const dispatch = useAppDispatch();
  const isLogged = useAppSelector(selectIsLoggedAuth);

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const isOpenPopover = Boolean(anchorEl);
  const loginBadge = isLogged ? 0 : BADGE_LOGIN_TEXT;

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const handleLogOut = async (): Promise<void> => {
    // TODO Add logout logic
    // dispatch(logoutUserApi());
  };

  return (
    <>
      <Tooltip title="User menu">
        <IconButton onClick={handleOpen}>
          <Badge badgeContent={loginBadge} color="primary" sx={sxBadge}>
            <AccountCircleOutlinedIcon />
          </Badge>
        </IconButton>
      </Tooltip>

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
          <Navbar navPaths={isLogged ? authorizedUserPaths : nonAuthorizedUserPaths} orientation="vertical" />
          {isLogged && (
            <ContainedBtn size="small" onClick={handleLogOut}>
              Log out
            </ContainedBtn>
          )}
        </Stack>
      </Popover>
    </>
  );
}
