import type { FilterColorsKeys } from '@/shared/types/types';
import type { WithSlice, PayloadAction } from '@reduxjs/toolkit';

import { createSlice, createSelector } from '@reduxjs/toolkit';

import { Sort, FILTER_COLORS_STATE } from '@/pages/CatalogPage/features/CatalogFilterForm/data/constants';

import { rootReducer } from '@/shared/redux/redux';
import { MIN_MONEY, MAX_MONEY, NO_CATEGORY, NO_CATEGORY_NAME } from '@/shared/data/constants';

export const INIT_FILTER = {
  categoryId: NO_CATEGORY,
  categoryName: NO_CATEGORY_NAME,
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
    selectFilterState: (state) => state,

    selectCategoryId: (state) => state.categoryId,
    selectCategoryName: (state) => state.categoryName,
    selectColor: (state, color: FilterColorsKeys) => state.colorObj[color],
    selectSort: (state) => state.sort,
    selectPrice: (state) => state.price,
    selectSearch: (state) => state.search,
    selectPage: (state) => state.page,

    selectIsCurrentCategoryId: createSelector(
      [(state: typeof INIT_FILTER) => state.categoryId, (_, passedCategoryId: string) => passedCategoryId],
      (currentCategoryId, passedCategoryId) => currentCategoryId === passedCategoryId
    )
  },
  reducers: {
    setCategoryIdAndNameAction: (state, action: PayloadAction<{ categoryId: string; categoryName: string }>) => {
      state.categoryId = action.payload.categoryId;
      state.categoryName = action.payload.categoryName;
    },
    setColorAction: (state, action: PayloadAction<{ value: boolean; color: FilterColorsKeys }>) => {
      state.colorObj[action.payload.color] = action.payload.value;
    },
    setSortAction: (state, action: PayloadAction<Sort>) => {
      state.sort = action.payload;
    },
    setPriceAction: (state, action: PayloadAction<[number, number]>) => {
      state.price = action.payload;
    },
    setSearchAction: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setPageAction: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    resetFiltersAction: () => {
      return INIT_FILTER;
    }
  }
});

export const catalogFilterSliceInjected = catalogFilterSliceLazy.injectInto(rootReducer);

export const {
  selectSort,
  selectPage,
  selectColor,
  selectPrice,
  selectSearch,
  selectCategoryId,
  selectFilterState,
  selectCategoryName,
  selectIsCurrentCategoryId
} = catalogFilterSliceInjected.selectors;

export const { setSortAction, setPageAction, setColorAction, setPriceAction, setSearchAction, resetFiltersAction, setCategoryIdAndNameAction } =
  catalogFilterSliceInjected.actions;

declare module '@/shared/redux/redux' {
  export interface LazyLoadedSlices extends WithSlice<typeof catalogFilterSliceLazy> {}
}
