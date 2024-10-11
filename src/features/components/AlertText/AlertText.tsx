import type { SxStyles } from '@/shared/types';
import { TimingProgress } from '@/components/TimingProgress';
import { Alert, LinearProgress, Snackbar, Stack } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/store/redux';
import { alertSliceActions, alertSliceSelectors } from '@/features/components/AlertText/alert.slice';

const sxStyles: SxStyles = {
  alertContainer: {
    position: 'relative'
  },
  alert: {
    display: 'flex',
    alignItems: 'center'
  },
  progress: {
    width: 0.85,
    position: 'absolute',
    bottom: '0.6rem'
  }
};

interface IAlertTextProps {
  autoHideMs?: number;
}

export function AlertText({ autoHideMs = 3000 }: IAlertTextProps): React.ReactNode {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(alertSliceSelectors.selectAlertIsOpen);
  const message = useAppSelector(alertSliceSelectors.selectAlertMessage);
  const severity = useAppSelector(alertSliceSelectors.selectAlertSeverity);
  const isLoading = useAppSelector(alertSliceSelectors.selectAlertIsLoading);

  const autoHideSec = autoHideMs / 1000;

  const handleClose = (_?: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason !== 'clickaway') {
      dispatch(alertSliceActions.hideAlertAction());
    }
  };

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={isLoading ? null : autoHideMs}
      onClose={handleClose}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <Stack justifyContent="center" sx={sxStyles.alertContainer}>
        <Alert severity={severity} sx={sxStyles.alert}>
          {message}
        </Alert>
        {isLoading ? (
          <LinearProgress color={severity} />
        ) : (
          isOpen && <TimingProgress color={severity} maxTimeSec={autoHideSec} sx={sxStyles.progress} />
        )}
      </Stack>
    </Snackbar>
  );
}
