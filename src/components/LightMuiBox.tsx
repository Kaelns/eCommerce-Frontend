import { Box, BoxProps } from '@mui/material';
import { PropsWithChildren } from '@/shared/types';

interface ILightMuiBoxProps extends BoxProps {
  classes?: string;
}

// It is only needed to pass the necessary props

export function LightMuiBox({
  children,
  sx = {},
  onClick,
  classes = ''
}: PropsWithChildren<ILightMuiBoxProps>): React.ReactElement {
  return (
    <Box sx={sx} className={classes} onClick={onClick}>
      {children}
    </Box>
  );
}
