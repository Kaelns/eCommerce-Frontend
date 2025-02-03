import type { WithSlice, PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

import { rootReducer } from '@/shared/redux/redux';

const INIT_AUTH = {
  isOpenFilterDrawer: false,
  isSearchInFocus: false
};

const catalogPageSliceLazy = createSlice({
  name: 'catalogPage',
  initialState: INIT_AUTH,
  selectors: {
    selectIsOpenFilterDrawer: (state) => state.isOpenFilterDrawer,
    selectIsSearchInFocus: (state) => state.isSearchInFocus
  },
  reducers: {
    setIsOpenFilterDrawerAction(state, action: PayloadAction<boolean>) {
      state.isOpenFilterDrawer = action.payload;
    },
    setIsSearchInFocusAction(state, action: PayloadAction<boolean>) {
      state.isSearchInFocus = action.payload;
    }
  }
});

export const authSliceInjected = catalogPageSliceLazy.injectInto(rootReducer);
declare module '@/shared/redux/redux' {
  export interface LazyLoadedSlices extends WithSlice<typeof catalogPageSliceLazy> {}
}

export const { selectIsOpenFilterDrawer, selectIsSearchInFocus } = authSliceInjected.selectors;
export const { setIsOpenFilterDrawerAction, setIsSearchInFocusAction } = authSliceInjected.actions;
