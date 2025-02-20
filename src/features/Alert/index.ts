import { alertSliceInjected } from '@/features/Alert/model/alert.slice';

export { Alert } from '@/features/Alert/Alert';
export { useAlert } from '@/features/Alert/model/useAlert';
export const { selectIsOpenAlert, selectMessageAlert, selectSeverityAlert, selectIsLoadingAlert } = alertSliceInjected.selectors;
export const { hideAlertAction, showLoadingAlertAction, showAlertAction } = alertSliceInjected.actions;
