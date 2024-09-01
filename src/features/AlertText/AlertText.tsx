import { Alert, LinearProgress, Snackbar, Stack } from '@mui/material';
import { TimingProgress } from '@/components/TimingProgress';
import { useAppDispatch, useAppSelector } from '@/store/store';
import {
  hideAlertAction,
  selectAlertIsLoading,
  selectAlertIsOpen,
  selectAlertMessage,
  selectAlertSeverity
} from '@/features/AlertText/alert.slice';
import { SxStyles } from '@/shared/types';

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
  const isOpen = useAppSelector(selectAlertIsOpen);
  const message = useAppSelector(selectAlertMessage);
  const severity = useAppSelector(selectAlertSeverity);
  const isLoading = useAppSelector(selectAlertIsLoading);

  const autoHideSec = autoHideMs / 1000;

  const handleClose = (_?: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason !== 'clickaway') {
      dispatch(hideAlertAction());
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
