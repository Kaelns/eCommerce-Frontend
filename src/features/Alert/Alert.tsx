import type { SxStylesMap } from '@/shared/model/types';

import { Stack, Snackbar, LinearProgress, Alert as MuiAlert } from '@mui/material';

import { alertSlice } from '@/features/Alert/model/alert.slice';

import { TimingProgress } from '@/shared/ui/components';
import { useAppDispatch, useAppSelector } from '@/shared/lib/redux';

const sxStyles: SxStylesMap = {
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
  const isOpen = useAppSelector(alertSlice.selectors.selectIsOpenAlert);
  const message = useAppSelector(alertSlice.selectors.selectMessageAlert);
  const severity = useAppSelector(alertSlice.selectors.selectSeverityAlert);
  const isLoading = useAppSelector(alertSlice.selectors.selectIsLoadingAlert);

  const autoHideSec = autoHideMs / 1000;

  const handleClose = (_?: Event | React.SyntheticEvent, reason?: string): void => {
    if (reason !== 'clickaway') {
      dispatch(alertSlice.actions.hideAlertAction());
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
