import { Box, Typography } from '@mui/material';
import { PropsWithChildren } from '@/data/types/PropsWithChildren';

interface IProps {
  icon: JSX.Element;
  isAfter?: boolean;
}

export function TextWithIcon({ icon, children, isAfter = false }: PropsWithChildren<IProps>): JSX.Element {
  return (
    <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
      {!isAfter && icon}
      <Typography>{children}</Typography>
      {isAfter && icon}
    </Box>
  );
}
