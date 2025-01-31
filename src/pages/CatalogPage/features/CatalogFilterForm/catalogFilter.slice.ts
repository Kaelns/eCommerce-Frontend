import type { WithSlice } from '@reduxjs/toolkit';
import type { FilterColorsKeys } from '@/pages/CatalogPage/features/CatalogFilterForm/types';

import { createSlice, createSelector } from '@reduxjs/toolkit';

import { Sort, MAX_MONEY, MIN_MONEY, NO_CATEGORY, FILTER_COLORS_STATE } from '@/pages/CatalogPage/features/CatalogFilterForm/constants';

import { rootReducer } from '@/shared/redux/redux';

export const INIT_FILTER = {
  categoryKey: NO_CATEGORY,
  colorObj: FILTER_COLORS_STATE,
  sort: Sort.NO_SORT,
  price: [MIN_MONEY, MAX_MONEY],
  search: '',
  page: 1
};
const catalogFilterSliceLazy = createSlice({
  name: 'catalogFilter',
  initialState: INIT_FILTER,
  selectors: {
    selectCategoryKey: (state) => state.categoryKey,
    selectColor: (state, color: FilterColorsKeys) => state.colorObj[color],
    selectSort: (state) => state.sort,
    selectPrice: (state) => state.price,
    selectSearch: (state) => state.search,
    selectPage: (state) => state.page,

    selectIsCurrentCategoryKey: createSelector(
      [(state): string => state.categoryKey, (_, passedCategoryKey: string) => passedCategoryKey],
      (currentCategoryKey, passedCategoryKey) => currentCategoryKey === passedCategoryKey
    )
  },
  reducers: {
    // setCartAction(state, action: PayloadAction<Cart>) {
    // },
  }
});

export const catalogFilterSliceInjected = catalogFilterSliceLazy.injectInto(rootReducer);

declare module '@/shared/redux/redux' {
  export interface LazyLoadedSlices extends WithSlice<typeof catalogFilterSliceLazy> {}
}
