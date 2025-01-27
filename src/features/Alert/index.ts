import { alertSliceInjected } from '@/features/alert/alert.slice';

export { Alert } from '@/features/alert/Alert';
export { useAlert } from '@/features/alert/useAlert';
export const { selectIsOpenAlert, selectMessageAlert, selectSeverityAlert, selectIsLoadingAlert } = alertSliceInjected.selectors;
export const { hideAlertAction, showLoadingAlertAction, showAlertAction } = alertSliceInjected.actions;
