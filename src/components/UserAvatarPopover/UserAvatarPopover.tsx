import { Box, Avatar, Typography } from '@mui/material';

import styles from './UserAvatarPopover.module.scss';

export function UserAvatarPopover(): JSX.Element {
  const userInitials = 'UI';

  return (
    <Box className={styles.userAvatarContainer}>
      <Avatar className={styles.userAvatar}>{userInitials}</Avatar>
      <Typography>User</Typography>
    </Box>
  );
}
