import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Severity } from '@/features/AlertText/AlertText.interface';

const INIT_MODAL = {
  isOpen: false,
  message: '',
  severity: Severity.ERROR
};

interface IShowAlertAction {
  message: string;
  severity: Severity;
}

export const alertSlice = createSlice({
  name: 'alert',
  initialState: INIT_MODAL,
  selectors: {
    selectAlertIsOpen: (state) => state.isOpen,
    selectAlertMessage: (state) => state.message,
    selectAlertSeverity: (state) => state.severity
  },
  reducers: {
    showAlertAction(state, action: PayloadAction<IShowAlertAction>) {
      state.isOpen = true;
      state.message = action.payload.message;
      state.severity = action.payload.severity;
    },
    hideAlertAction(state) {
      state.isOpen = false;
    }
  }
});

export const { selectAlertIsOpen, selectAlertMessage, selectAlertSeverity } = alertSlice.selectors;
export const { showAlertAction, hideAlertAction } = alertSlice.actions;
