import { Severity } from '@/components/AlertText/AlertText.interface';
import { StoreAction } from '@/store/store.interface';

export function showAlertAction(message: string, severity: Severity) {
  return {
    type: StoreAction.ASSETS_SHOW_MODAL,
    payload: {
      message,
      severity
    }
  };
}

export function hideAlertAction() {
  return {
    type: StoreAction.ASSETS_HIDE_MODAL,
    payload: undefined
  };
}

export type IShowAlertAction = ReturnType<typeof showAlertAction>;
export type IHideAlertAction = ReturnType<typeof hideAlertAction>;
export type IAssetsAction = IShowAlertAction | IHideAlertAction;
