import { Box, Avatar, Typography } from '@mui/material';

import styles from './UserAvatarPopover.module.scss';

export function UserAvatarPopover(): React.ReactNode {
  // TODO Get user data
  const userInitials = 'UI';
  const userName = 'User';

  return (
    <Box className={styles.userAvatarContainer}>
      <Avatar className={styles.userAvatar}>{userInitials}</Avatar>
      <Typography>{userName}</Typography>
    </Box>
  );
}
