import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Box, IconButton, Popover } from '@mui/material';
import { useState } from 'react';
import { Navbar } from '@/layout/Navbar/Navbar';

import * as styles from './UserPopover.mui';

export function UserPopover(): JSX.Element {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <IconButton aria-describedby={id} onClick={handleClick}>
        <AccountCircleOutlinedIcon />
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
          <Navbar isUserPopover />
        </Box>
      </Popover>
    </>
  );
}
