import { useState } from 'react';
import { IUseAlertTextReturn, Severity } from '@/components/AlertText/AlertText.interface';

export function useAlertText(): IUseAlertTextReturn {
  const [text, setText] = useState('');
  const [severity, setSeverity] = useState(Severity.SUCCESS);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenAlert = (message: string, severityType: Severity): void => {
    setSeverity(severityType);
    setText(message);
    setIsOpen(true);
  };

  const handleClose = (_?: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason === 'clickaway') {
      return;
    }
    setIsOpen(false);
  };

  return { isOpen, text, severity, handleOpenAlert, handleClose };
}
