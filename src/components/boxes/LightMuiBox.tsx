import type { BoxProps } from '@mui/material';
import { Box } from '@mui/material';
import type { PropsWithChildren } from '@/shared/types/types';

interface LightMuiBoxProps extends BoxProps {
  classes?: string;
}

/**
 * Box to pass only specific props
 */
export function LightMuiBox({ children, sx = {}, onClick, classes = '' }: PropsWithChildren<LightMuiBoxProps>): React.ReactElement {
  return (
    <Box sx={sx} className={classes} onClick={onClick}>
      {children}
    </Box>
  );
}
