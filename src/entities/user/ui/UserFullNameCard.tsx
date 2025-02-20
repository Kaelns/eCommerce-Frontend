import type { SxProps } from '@mui/material';

import { Avatar } from '@mui/material';

import { ElemWithTypography } from '@/shared/ui/elements/typography/ElemWithTypography';

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

  return <ElemWithTypography elem={<Avatar sx={sxAvatar}>{userInitials}</Avatar>}>{userName}</ElemWithTypography>;
}
