import type { AlertAPIText } from '@/shared/model/data/enums';
import type { WithSlice, PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

import { rootReducer } from '@/app/store/config';

import { AlertText, AlertSeverity } from '@/shared/model/data/enums';

const INIT_MODAL = {
  isOpen: false,
  message: '',
  severity: AlertSeverity.ERROR,
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
    showAlertAction(state, action: PayloadAction<{ severity?: AlertSeverity; message: AlertAPIText | AlertText | string }>) {
      state.isOpen = true;
      state.isLoading = false;
      state.message = action.payload.message;
      state.severity = action.payload.severity ?? AlertSeverity.SUCCESS;
    },
    hideAlertAction(state) {
      state.isOpen = false;
      state.isLoading = false;
    },
    showLoadingAlertAction(state) {
      state.isOpen = true;
      state.isLoading = true;
      state.message = AlertText.LOADING;
      state.severity = AlertSeverity.SUCCESS;
    }
  }
});

export const alertSliceInjected = alertSliceLazy.injectInto(rootReducer);

declare module '@/app/store/config' {
  export interface LazyLoadedSlices extends WithSlice<typeof alertSliceLazy> {}
}
