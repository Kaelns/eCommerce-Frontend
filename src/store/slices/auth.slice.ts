import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const INIT_AUTH = {
  authToken: '',
  refreshAuthToken: '',
  anonToken: ''
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: INIT_AUTH,
  selectors: {
    selectAuthToken: (state) => state.authToken,
    selectRefreshAuthToken: (state) => state.refreshAuthToken,
    selectAnonToken: (state) => state.anonToken
  },
  reducers: {
    loginAuthAction(state, action: PayloadAction<{ authToken: string; refreshAuthToken: string }>) {
      state.authToken = action.payload.authToken;
      state.refreshAuthToken = action.payload.refreshAuthToken;
    },
    logoutAuthAction(state, action: PayloadAction<{ anonToken: string }>) {
      state.authToken = '';
      state.refreshAuthToken = '';
      state.anonToken = action.payload.anonToken;
    },
    anonLoginAuthAction(state, action: PayloadAction<{ anonToken: string }>) {
      state.anonToken = action.payload.anonToken;
    }
  }
});

export const authSliceSelectors = authSlice.selectors;
export const authSliceActions = authSlice.actions;
