import type { AlertText, AlertAPIText } from '@/shared/model/data';

import { useCallback } from 'react';

import { alertSlice } from '@/features/Alert/model/alert.slice';

import { useAppDispatch } from '@/shared/lib/redux';
import { AlertSeverity } from '@/shared/model/data';

export type ShowAlertText = (message: string, severity: AlertSeverity) => void;

export interface IUseAlertTextReturn {
  hideAlert: () => void;
  showLoadingAlert: () => void;
  showAlert: (message: AlertAPIText | AlertText | string, severity?: AlertSeverity) => void;
}

// ??? Check is useCallback needed here

export function useAlert(): IUseAlertTextReturn {
  const dispatch = useAppDispatch();

  const showAlert = useCallback(
    (message: AlertAPIText | AlertText | string, severity: AlertSeverity = AlertSeverity.SUCCESS): void => {
      dispatch(alertSlice.actions.showAlertAction({ message, severity }));
    },
    [dispatch]
  );

  const showLoadingAlert = useCallback((): void => {
    dispatch(alertSlice.actions.showLoadingAlertAction());
  }, [dispatch]);

  const hideAlert = useCallback((): void => {
    dispatch(alertSlice.actions.hideAlertAction());
  }, [dispatch]);

  return { showAlert, showLoadingAlert, hideAlert };
}
