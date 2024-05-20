import { Box, Typography } from '@mui/material';
import { PropsWithChildren } from '@/data/types/PropsWithChildren';

interface IProps {
  icon: JSX.Element;
}

export function TextWithIcon({ icon, children }: PropsWithChildren<IProps>): JSX.Element {
  return (
    <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
      {icon}
      <Typography>{children}</Typography>
    </Box>
  );
}
