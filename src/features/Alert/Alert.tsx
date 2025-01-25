import type { SxStyles } from '@/shared/types/types';
import { TimingProgress } from '@/components/TimingProgress';
import { useAppDispatch, useAppSelector } from '@/shared/redux';
import { Alert as MuiAlert, LinearProgress, Snackbar, Stack } from '@mui/material';
import { hideAlertAction, selectIsOpenAlert, selectMessageAlert, selectSeverityAlert, selectIsLoadingAlert } from '@/features/alert/alert.slice';

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

export function Alert({ autoHideMs = 3000 }: IAlertTextProps): React.ReactNode {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectIsOpenAlert);
  const message = useAppSelector(selectMessageAlert);
  const severity = useAppSelector(selectSeverityAlert);
  const isLoading = useAppSelector(selectIsLoadingAlert);

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
        <MuiAlert severity={severity} sx={sxStyles.alert}>
          {message}
        </MuiAlert>
        {isLoading ? (
          <LinearProgress color={severity} />
        ) : (
          isOpen && <TimingProgress color={severity} maxTimeSec={autoHideSec} sx={sxStyles.progress} />
        )}
      </Stack>
    </Snackbar>
  );
}
