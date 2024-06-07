import { Box, BoxProps } from '@mui/material';
import { PropsWithChildren } from '@/data/types/PropsWithChildren';

export function CustomBox({
  classes,
  children,
  sx = {}
}: PropsWithChildren<{ classes: string } & BoxProps>): React.ReactNode {
  return (
    <Box className={classes} sx={sx}>
      {children}
    </Box>
  );
}
