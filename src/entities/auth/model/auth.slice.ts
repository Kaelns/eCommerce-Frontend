import type { WithSlice, PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

import { rootReducer } from '@/app/store/store';

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

export const authSlice = authSliceLazy.injectInto(rootReducer);

declare module '@/app/store/store' {
  export interface LazyLoadedSlices extends WithSlice<typeof authSliceLazy> {}
}
