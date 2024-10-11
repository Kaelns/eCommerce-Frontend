import type { AlertsAPIText, AlertsText } from '@/shared/constants';
import { useCallback } from 'react';
import { useAppDispatch } from '@/store/redux';
import { Severity } from '@/shared/constants';
import { alertSliceActions } from '@/features/components/AlertText/alert.slice';

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
      dispatch(alertSliceActions.showAlertAction({ message, severity }));
    },
    [dispatch]
  );

  const showLoadingAlert = useCallback((): void => {
    dispatch(alertSliceActions.showLoadingAlertAction());
  }, [dispatch]);

  const hideAlert = useCallback((): void => {
    dispatch(alertSliceActions.hideAlertAction());
  }, [dispatch]);

  return { showAlert, showLoadingAlert, hideAlert };
}
