import { Typography } from '@mui/material';
import { PropsWithChildren } from '@/data/types/PropsWithChildren';

export function TextBold({ children }: PropsWithChildren): React.ReactNode {
  return <Typography sx={{ fontWeight: 'bold' }}>{children}</Typography>;
}
