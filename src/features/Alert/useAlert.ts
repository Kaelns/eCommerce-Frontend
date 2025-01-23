import type { AlertsAPIText, AlertsText } from '@/shared/data/constants';
import { Severity } from '@/shared/data/constants';
import { useCallback } from 'react';
import { useAppDispatch } from '@/shared/redux';
import { showAlertAction, showLoadingAlertAction, hideAlertAction } from '@/features/Alert/alert.slice';

export type ShowAlertText = (message: string, severity: Severity) => void;

export interface IUseAlertTextReturn {
  showAlert: (message: AlertsText | AlertsAPIText | string, severity?: Severity) => void;
  showLoadingAlert: () => void;
  hideAlert: () => void;
}

// ??? Check is useCallback needed here

export function useAlert(): IUseAlertTextReturn {
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
