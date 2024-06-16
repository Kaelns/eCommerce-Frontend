import { SnackbarOrigin, SxProps } from '@mui/material';

export const containerStyles: SxProps = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

export const alertStyles: SxProps = {
  display: 'flex',
  alignItems: 'center'
};

export const progressStyles: SxProps = {
  width: '80%',
  position: 'absolute',
  bottom: '0.7rem'
};

export const anchorSnackBar: SnackbarOrigin = {
  horizontal: 'right',
  vertical: 'bottom'
};
