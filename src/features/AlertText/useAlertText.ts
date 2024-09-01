import { useCallback } from 'react';
import { useAppDispatch } from '@/store/store';
import { hideAlertAction, showAlertAction, showLoadingAlertAction } from '@/features/AlertText/alert.slice';
import { AlertsAPIText, AlertsText, Severity } from '@/shared/constants';

export type ShowAlertText = (message: string, severity: Severity) => void;

export interface IUseAlertTextReturn {
  showAlert: (message: AlertsText | AlertsAPIText | string, severity?: Severity) => void;
  showLoadingAlert: () => void;
  hideAlert: () => void;
}

export function useAlertText(): IUseAlertTextReturn {
  const dispatch = useAppDispatch();

  const showAlert = useCallback(
    (message: AlertsText | AlertsAPIText | string, severity: Severity = Severity.SUCCESS): void => {
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
