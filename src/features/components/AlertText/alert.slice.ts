import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AlertsAPIText } from '@/shared/constants';
import { AlertsText, Severity } from '@/shared/constants';

const INIT_MODAL = {
  isOpen: false,
  message: '',
  severity: Severity.ERROR,
  isLoading: false
};

interface IShowAlertAction {
  // TODO Change string to enums below
  message: AlertsText | AlertsAPIText | string;
  severity?: Severity;
}

export const alertSlice = createSlice({
  name: 'alert',
  initialState: INIT_MODAL,
  selectors: {
    selectAlertIsOpen: (state) => state.isOpen,
    selectAlertMessage: (state) => state.message,
    selectAlertSeverity: (state) => state.severity,
    selectAlertIsLoading: (state) => state.isLoading
  },
  reducers: {
    showAlertAction(state, action: PayloadAction<IShowAlertAction>) {
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

export const alertSliceSelectors = alertSlice.selectors;
export const alertSliceActions = alertSlice.actions;
