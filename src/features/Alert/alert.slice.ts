import type { AlertsAPIText } from '@/shared/data/constants';
import type { PayloadAction, WithSlice } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { rootReducer } from '@/shared/redux';
import { AlertsText, Severity } from '@/shared/data/constants';

const INIT_MODAL = {
  isOpen: false,
  message: '',
  severity: Severity.ERROR,
  isLoading: false
};

export const alertSliceLazy = createSlice({
  name: 'alert',
  initialState: INIT_MODAL,
  selectors: {
    selectIsOpenAlert: (state) => state.isOpen,
    selectMessageAlert: (state) => state.message,
    selectSeverityAlert: (state) => state.severity,
    selectIsLoadingAlert: (state) => state.isLoading
  },
  reducers: {
    // TODO Change string to enums below
    showAlertAction(state, action: PayloadAction<{ message: AlertsText | AlertsAPIText | string; severity?: Severity }>) {
      state.isOpen = true;
      state.isLoading = false;
      state.message = action.payload.message;
      state.severity = action.payload.severity ?? Severity.SUCCESS;
    },
    hideAlertAction(state) {
      state.isOpen = false;
      state.isLoading = false;
    },
    showLoadingAlertAction(state) {
      state.isOpen = true;
      state.isLoading = true;
      state.message = AlertsText.LOADING;
      state.severity = Severity.SUCCESS;
    }
  }
});

export const alertSliceInjected = alertSliceLazy.injectInto(rootReducer);

declare module '@/shared/redux' {
  export interface ILazyLoadedSlices extends WithSlice<typeof alertSliceLazy> {}
}

export const { selectIsOpenAlert, selectMessageAlert, selectSeverityAlert, selectIsLoadingAlert } = alertSliceInjected.selectors;

export const { hideAlertAction, showLoadingAlertAction, showAlertAction } = alertSliceInjected.actions;
