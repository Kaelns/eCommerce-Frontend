import type { WithSlice, PayloadAction } from '@reduxjs/toolkit';
import type { FilterColorsKeys, QueryProductsArgs } from '@/shared/types/types';

import { isEqual } from 'lodash';
import { createSlice } from '@reduxjs/toolkit';

import { LIMIT_ON_PAGE, convertFilterToQueryArgs } from '@/services/ecommerce-api';

import { Sort, FILTER_COLORS_STATE } from '@/pages/CatalogPage/features/catalog-filters/data/constants';

import { rootReducer } from '@/shared/redux/redux';
import { MIN_MONEY, MAX_MONEY, NO_CATEGORY, NO_CATEGORY_NAME } from '@/shared/data/constants';

export const INIT_FILTER = {
  categoryName: NO_CATEGORY_NAME,

  filterQuery: {
    categoryId: NO_CATEGORY,
    colorObj: FILTER_COLORS_STATE,
    price: [MIN_MONEY, MAX_MONEY]
  },
  sort: Sort.NO_SORT,
  page: 1,
  search: '',

  queryArgs: {
    limit: LIMIT_ON_PAGE
  } as QueryProductsArgs
};

export type FilterState = typeof INIT_FILTER;

const sharedApplyFiltersAction = (state: FilterState) => {
  const queryArgs = convertFilterToQueryArgs(state);
  if (!isEqual(queryArgs, state.queryArgs)) {
    state.queryArgs = queryArgs;
  }
};
const catalogFilterSliceLazy = createSlice({
  name: 'catalogFilter',
  initialState: INIT_FILTER,
  selectors: {
    selectFilterState: (state) => state,
    selectQueryArgs: (state) => state.queryArgs,

    selectCategoryName: (state) => state.categoryName,

    selectCategoryId: (state) => state.filterQuery.categoryId,
    selectColor: (state, color: FilterColorsKeys) => state.filterQuery.colorObj[color],
    selectPrice: (state) => state.filterQuery.price,

    selectSort: (state) => state.sort,
    selectPage: (state) => state.page,
    selectSearch: (state) => state.search,

    selectIsCurrentCategoryId: (state, passedCategoryId) => state.filterQuery.categoryId === passedCategoryId
  },
  reducers: {
    setCategoryIdAndNameAction: (state, action: PayloadAction<{ categoryId: string; categoryName: string }>) => {
      state.filterQuery.categoryId = action.payload.categoryId;
      state.categoryName = action.payload.categoryName;
    },
    setColorAction: (state, action: PayloadAction<{ value: boolean; color: FilterColorsKeys }>) => {
      state.filterQuery.colorObj[action.payload.color] = action.payload.value;
    },
    setPageAction: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
      sharedApplyFiltersAction(state);
    },
    setSortAction: (state, action: PayloadAction<Sort>) => {
      state.sort = action.payload;
      sharedApplyFiltersAction(state);
    },
    setPriceAction: (state, action: PayloadAction<[number, number]>) => {
      state.filterQuery.price = action.payload;
      sharedApplyFiltersAction(state);
    },

    // * There is debounced thunk search
    setSearchAction: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },

    // * Apply filters by converting filter state to query args for products query

    applyFiltersAction: sharedApplyFiltersAction,

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

export const {
  setSortAction,
  setPageAction,
  setColorAction,
  setPriceAction,
  setSearchAction,
  resetFiltersAction,
  applyFiltersAction,
  setCategoryIdAndNameAction
} = catalogFilterSliceInjected.actions;

declare module '@/shared/redux/redux' {
  export interface LazyLoadedSlices extends WithSlice<typeof catalogFilterSliceLazy> {}
}
