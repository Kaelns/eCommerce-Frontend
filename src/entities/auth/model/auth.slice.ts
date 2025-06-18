import type { WithSlice, PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

import { rootReducer } from '@/shared/lib/redux';

const INIT_AUTH = {
  isPending: true,
  isLogged: false
};

const authSliceLazy = createSlice({
  name: 'auth',
  initialState: INIT_AUTH,
  selectors: {
    selectIsLoggedAuth: (state) => state.isLogged
  },
  reducers: {
    setIsLoggedAuthAction(state, action: PayloadAction<{ isLogged: boolean }>) {
      state.isLogged = action.payload.isLogged;
    }
  }
});

const authSlice = authSliceLazy.injectInto(rootReducer);

declare module '@/shared/lib/redux/redux.config' {
  export interface LazyLoadedSlices extends WithSlice<typeof authSliceLazy> {}
}

export const { selectIsLoggedAuth } = authSlice.selectors;
