import { useCallback } from 'react';
import { Severity } from '@/components/AlertText/AlertText.interface';
import { showAlertAction } from '@/store/actions/assetsAction';
import { useAppDispatch } from '@/store/store';

export interface IShowAlert {
  (message: string, severityType: Severity): void;
}

export function useAlertText(): { showAlert: IShowAlert } {
  const dispatch = useAppDispatch();

  const showAlert = useCallback(
    (message: string, severityType: Severity): void => {
      dispatch(showAlertAction(message, severityType));
    },
    [dispatch]
  );

  return { showAlert };
}
