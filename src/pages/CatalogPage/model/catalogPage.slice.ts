import type { WithSlice, PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

import { rootReducer } from '@/app/store/config';

const INIT_CATALOG_PAGE = {
  isOpenFilterDrawer: false,
  isSearchInFocus: false
};

const catalogPageSliceLazy = createSlice({
  name: 'catalogPage',
  initialState: INIT_CATALOG_PAGE,
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

export const catalogPageSlice = catalogPageSliceLazy.injectInto(rootReducer);

declare module '@/app/store/config' {
  export interface LazyLoadedSlices extends WithSlice<typeof catalogPageSliceLazy> {}
}

export const { selectIsOpenFilterDrawer, selectIsSearchInFocus } = catalogPageSlice.selectors;
export const { setIsOpenFilterDrawerAction, setIsSearchInFocusAction } = catalogPageSlice.actions;
