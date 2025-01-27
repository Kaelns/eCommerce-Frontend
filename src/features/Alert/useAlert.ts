import type { AlertText, AlertAPIText } from '@/shared/data/enums';
import { showAlertAction, showLoadingAlertAction, hideAlertAction } from '@/features/alert';
import { AlertSeverity } from '@/shared/data/enums';
import { useAppDispatch } from '@/shared/redux/redux';
import { useCallback } from 'react';

export type ShowAlertText = (message: string, severity: AlertSeverity) => void;

export interface IUseAlertTextReturn {
  showAlert: (message: AlertText | AlertAPIText | string, severity?: AlertSeverity) => void;
  showLoadingAlert: () => void;
  hideAlert: () => void;
}

// ??? Check is useCallback needed here

export function useAlert(): IUseAlertTextReturn {
  const dispatch = useAppDispatch();

  const showAlert = useCallback(
    (message: AlertText | AlertAPIText | string, severity: AlertSeverity = AlertSeverity.SUCCESS): void => {
      dispatch(showAlertAction({ message, severity }));
    },
    [dispatch]
  );

  const showLoadingAlert = useCallback((): void => {
    dispatch(showLoadingAlertAction());
  }, [dispatch]);

  const hideAlert = useCallback((): void => {
    dispatch(hideAlertAction());
  }, [dispatch]);

  return { showAlert, showLoadingAlert, hideAlert };
}
