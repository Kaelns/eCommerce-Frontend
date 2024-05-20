import { Box, Avatar, Typography } from '@mui/material';

import styles from './UserAvatarPopover.module.scss';

export function UserAvatarPopover(): JSX.Element {
  return (
    <Box className={styles.userAvatarContainer}>
      <Avatar className={styles.userAvatar}>U</Avatar>
      <Typography>User</Typography>
    </Box>
  );
}
