import type { WithSlice, PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

import { LANGUAGE } from '@/services/ecommerce-api';

import { rootReducer } from '@/shared/redux/redux';

const INIT_GLOBAL = {
  language: LANGUAGE
};

const globalSliceLazy = createSlice({
  name: 'global',
  initialState: INIT_GLOBAL,
  selectors: {
    selectLanguage: (state) => state.language
  },
  reducers: {
    setLanguageAction(state, action: PayloadAction<string>) {
      state.language = action.payload;
    }
  }
});

export const authSliceInjected = globalSliceLazy.injectInto(rootReducer);
declare module '@/shared/redux/redux' {
  export interface LazyLoadedSlices extends WithSlice<typeof globalSliceLazy> {}
}

export const { selectLanguage } = authSliceInjected.selectors;
export const { setLanguageAction } = authSliceInjected.actions;
