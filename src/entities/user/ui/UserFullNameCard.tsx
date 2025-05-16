import type { SxProps } from '@mui/material';

import { Avatar } from '@mui/material';

import { NodeWithText } from '@/shared/ui/elements';

const userInitials = 'UI';
const userName = 'User';

const sxAvatar: SxProps = {
  width: '3.7rem',
  height: '3.7rem',
  bgcolor: 'warning.light',
  fontSize: '2rem'
};

export function UserFullNameCard() {
  // TODO Get user data

  return <NodeWithText Node={<Avatar sx={sxAvatar}>{userInitials}</Avatar>}>{userName}</NodeWithText>;
}
