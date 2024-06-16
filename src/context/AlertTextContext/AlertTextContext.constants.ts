import { IUseAlertTextReturn, Severity } from '@/components/AlertText/AlertText.interface';

export const INITIAL_USE_ALERT_TEXT: IUseAlertTextReturn = {
  isOpen: false,
  text: '',
  severity: Severity.SUCCESS,
  handleClose(): void {},
  handleOpenAlert(): void {}
};
