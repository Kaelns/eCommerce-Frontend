import { Box, Avatar, Typography } from '@mui/material';

import * as styles from './UserAvatarPopover.mui';

export function UserAvatarPopover(): JSX.Element {
  return (
    <Box sx={styles.userAvatarContainer}>
      <Avatar sx={styles.userAvatar}>U</Avatar>
      <Typography>User</Typography>
    </Box>
  );
}
