import { alertSlice } from '@/features/Alert/model/alert.slice';

export { Alert } from '@/features/Alert/Alert';
export { useAlert } from '@/features/Alert/model/useAlert';

export const { showAlertAction } = alertSlice.actions;
