import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AlertsAPIText } from '@/shared/data/constants';
import { AlertsText, Severity } from '@/shared/data/constants';
import { rootReducer } from '@/shared/redux';

const INIT_MODAL = {
  isOpen: false,
  message: '',
  severity: Severity.ERROR,
  isLoading: false
};

export const alertSlice = createSlice({
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
    showAlertAction(
      state,
      action: PayloadAction<{ message: AlertsText | AlertsAPIText | string; severity?: Severity }>
    ) {
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
}).injectInto(rootReducer);

export const { selectIsOpenAlert, selectMessageAlert, selectSeverityAlert, selectIsLoadingAlert } =
  alertSlice.selectors;

export const { hideAlertAction, showLoadingAlertAction, showAlertAction } = alertSlice.actions;
