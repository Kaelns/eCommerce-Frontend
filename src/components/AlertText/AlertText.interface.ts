export enum Severity {
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
  INFO = 'info'
}

export interface IAlertTextProps {
  text: string;
  isOpen: boolean;
  severity: Severity;
  autoHideMs?: number;
  handleClose: (event?: React.SyntheticEvent | Event, reason?: string) => void;
}

export interface IUseAlertTextReturn {
  text: string;
  isOpen: boolean;
  severity: Severity;
  handleClose: (event?: React.SyntheticEvent | Event, reason?: string) => void;
  handleOpenAlert: (message: string, severity: Severity) => void;
}
