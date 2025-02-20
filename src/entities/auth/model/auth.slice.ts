import type { WithSlice, PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

import { rootReducer } from '@/app/store/config';

const INIT_AUTH = {
  isPending: true,
  isLogged: false
};

const authSliceLazy = createSlice({
  name: 'auth',
  initialState: INIT_AUTH,
  selectors: {
    selectIsPendingAuth: (state) => state.isPending,
    selectIsLoggedAuth: (state) => state.isLogged
  },
  reducers: {
    setIsLoggedAuthAction(state, action: PayloadAction<{ isLogged: boolean }>) {
      state.isLogged = action.payload.isLogged;
    },
    setIsPendingAuthAction(state, action: PayloadAction<{ isPending: boolean }>) {
      state.isPending = action.payload.isPending;
    }
  }
});

export const authSliceInjected = authSliceLazy.injectInto(rootReducer);

declare module '@/app/store/config' {
  export interface LazyLoadedSlices extends WithSlice<typeof authSliceLazy> {}
}
