import { Alert, Box, Snackbar } from '@mui/material';
import { IAlertTextProps } from '@/components/AlertText/AlertText.interface';
import { TimingProgress } from '@/components/TimingProgress/TimingProgress';
import { alertStyles, anchorSnackBar, containerStyles, progressStyles } from '@/components/AlertText/AlertText.styles';
import { hideAlertAction } from '@/store/actions/assetsAction';
import { useAppDispatch, useAppSelector } from '@/store/store';

export function AlertText({ autoHideMs = 3000 }: IAlertTextProps): React.ReactNode {
  const dispatch = useAppDispatch();
  const text = useAppSelector((store) => store.assets.message);
  const isOpen = useAppSelector((store) => store.assets.isOpen);
  const severity = useAppSelector((store) => store.assets.severity);

  const handleClose = (_?: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(hideAlertAction());
  };

  return (
    <Snackbar open={isOpen} autoHideDuration={autoHideMs} onClose={handleClose} anchorOrigin={anchorSnackBar}>
      <Box sx={containerStyles}>
        <Alert severity={severity} sx={alertStyles}>
          {text}
        </Alert>
        {isOpen && <TimingProgress sx={progressStyles} color={severity} maxTimeSec={autoHideMs / 1000} />}
      </Box>
    </Snackbar>
  );
}
