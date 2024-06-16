import { Alert, Box, Snackbar } from '@mui/material';
import { IAlertTextProps, Severity } from '@/components/AlertText/AlertText.interface';
import { TimingProgress } from '@/components/TimingProgress/TimingProgress';
import { alertStyles, anchorSnackBar, containerStyles, progressStyles } from '@/components/AlertText/AlertText.styles';

export function AlertText({
  text,
  isOpen,
  autoHideMs = 3000,
  severity = Severity.SUCCESS,
  handleClose
}: IAlertTextProps): React.ReactNode {
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
