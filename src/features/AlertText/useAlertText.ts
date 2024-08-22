import { useCallback } from 'react';
import { Severity } from '@/features/AlertText/AlertText.interface';
import { useAppDispatch } from '@/store/store';
import { showAlertAction } from '@/features/AlertText/alert.slice';

export interface IShowAlert {
  (message: string, severity: Severity): void;
}

export function useAlertText(): { showAlert: IShowAlert } {
  const dispatch = useAppDispatch();

  const showAlert = useCallback(
    (message: string, severity: Severity): void => {
      dispatch(showAlertAction({ message, severity }));
    },
    [dispatch]
  );

  return { showAlert };
}
