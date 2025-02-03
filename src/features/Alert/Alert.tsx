import type { SxStyles } from '@/shared/types/types';

import { Stack, Snackbar, LinearProgress, Alert as MuiAlert } from '@mui/material';

import { alertSliceInjected } from '@/features/alert/alert.slice';

import { TimingProgress } from '@/components/TimingProgress';

import { useAppDispatch, useAppSelector } from '@/shared/redux/redux';

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

interface AlertTextProps {
  autoHideMs?: number;
}

export function Alert({ autoHideMs = 3000 }: AlertTextProps) {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(alertSliceInjected.selectors.selectIsOpenAlert);
  const message = useAppSelector(alertSliceInjected.selectors.selectMessageAlert);
  const severity = useAppSelector(alertSliceInjected.selectors.selectSeverityAlert);
  const isLoading = useAppSelector(alertSliceInjected.selectors.selectIsLoadingAlert);

  const autoHideSec = autoHideMs / 1000;

  const handleClose = (_?: Event | React.SyntheticEvent, reason?: string): void => {
    if (reason !== 'clickaway') {
      dispatch(alertSliceInjected.actions.hideAlertAction());
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
