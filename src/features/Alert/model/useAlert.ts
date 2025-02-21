import type { AlertText, AlertAPIText } from '@/shared/model/data/enums';

import { useCallback } from 'react';

import { alertSliceInjected } from '@/features/Alert/model/alert.slice';

import { AlertSeverity } from '@/shared/model/data/enums';
import { useAppDispatch } from '@/shared/lib/redux/redux.hooks';

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
      dispatch(alertSliceInjected.actions.showAlertAction({ message, severity }));
    },
    [dispatch]
  );

  const showLoadingAlert = useCallback((): void => {
    dispatch(alertSliceInjected.actions.showLoadingAlertAction());
  }, [dispatch]);

  const hideAlert = useCallback((): void => {
    dispatch(alertSliceInjected.actions.hideAlertAction());
  }, [dispatch]);

  return { showAlert, showLoadingAlert, hideAlert };
}
