import { Alert, Box, Snackbar } from '@mui/material';
import { TimingProgress } from '@/components/TimingProgress/TimingProgress';
import { useAppDispatch, useAppSelector } from '@/store/store';
import {
  hideAlertAction,
  selectAlertIsOpen,
  selectAlertMessage,
  selectAlertSeverity
} from '@/features/AlertText/alert.slice';

interface IAlertTextProps {
  autoHideMs?: number;
}

export function AlertText({ autoHideMs = 3000 }: IAlertTextProps): React.ReactNode {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectAlertIsOpen);
  const message = useAppSelector(selectAlertMessage);
  const severity = useAppSelector(selectAlertSeverity);

  const autoHideSec = autoHideMs / 1000;

  const handleClose = (_?: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason !== 'clickaway') {
      dispatch(hideAlertAction());
    }
  };
  // TODO is styles like that
  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={autoHideMs}
      onClose={handleClose}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Alert severity={severity} sx={{ display: 'flex', alignItems: 'center' }}>
          {message}
        </Alert>
        {isOpen && (
          <TimingProgress
            color={severity}
            maxTimeSec={autoHideSec}
            sx={{ width: '80%', position: 'absolute', bottom: '0.7rem' }}
          />
        )}
      </Box>
    </Snackbar>
  );
}
