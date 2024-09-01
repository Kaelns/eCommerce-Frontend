import { Avatar, Typography, Stack, SxProps } from '@mui/material';

const userInitials = 'UI';
const userName = 'User';

const sxAvatar: SxProps = {
  width: '3.7rem',
  height: '3.7rem',
  bgcolor: 'warning.light',
  fontSize: '2rem'
};

export function UserAvatarPopover(): React.ReactNode {
  // TODO Get user data

  return (
    <Stack direction="row" gap={1} alignItems="center">
      <Avatar sx={sxAvatar}>{userInitials}</Avatar>
      <Typography>{userName}</Typography>
    </Stack>
  );
}
