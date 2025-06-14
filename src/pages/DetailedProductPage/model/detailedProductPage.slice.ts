import type { WithSlice, PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

import { rootReducer } from '@/shared/lib/redux';

const INIT_DETAILED_PRODUCT_PAGE = {
  isOpenScaledImageModal: false
};

const detailedProductPageSliceLazy = createSlice({
  name: 'detailedProductPage',
  initialState: INIT_DETAILED_PRODUCT_PAGE,
  selectors: {
    selectIsOpenScaledImageModal: (state) => state.isOpenScaledImageModal
  },
  reducers: {
    setIsOpenScaledImageModalAction(state, action: PayloadAction<boolean>) {
      state.isOpenScaledImageModal = action.payload;
    }
  }
});

const detailedProductPageSlice = detailedProductPageSliceLazy.injectInto(rootReducer);

declare module '@/shared/lib/redux/redux.config' {
  export interface LazyLoadedSlices extends WithSlice<typeof detailedProductPageSliceLazy> {}
}

export const { selectIsOpenScaledImageModal } = detailedProductPageSlice.selectors;
export const { setIsOpenScaledImageModalAction } = detailedProductPageSlice.actions;
