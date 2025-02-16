import type { QueryProductsArgs } from '@/shared/types/types';
import type { WithSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Colors } from '@/services/ecommerce-api/rtk-query/types/types';
import type { FilterColorsState } from '@/features/catalog-filters/model/types';

import { isEqual } from 'lodash';
import { createSlice } from '@reduxjs/toolkit';

import { productApi, LIMIT_ON_PAGE, convertFilterToQueryArgs } from '@/services/ecommerce-api';

import { FiltersSort } from '@/features/catalog-filters/model/constants';
import { setCategoryIdAndNameActionHelper } from '@/features/catalog-filters/model/redux/helpers/setCategoryIdAndNameAction';

import { rootReducer } from '@/shared/redux/redux';
import { MIN_MONEY, MAX_MONEY, NO_CATEGORY, NO_CATEGORY_NAME } from '@/shared/data/constants';

export const INIT_FILTER = {
  filters: {
    categoryName: NO_CATEGORY_NAME,
    categoryId: NO_CATEGORY,
    colorObj: {} as FilterColorsState,
    price: [MIN_MONEY, MAX_MONEY],

    sort: FiltersSort.NO_SORT,
    page: 1,
    search: ''
  },

  form: {
    categoryName: NO_CATEGORY_NAME,
    categoryId: NO_CATEGORY,
    colorObj: {} as FilterColorsState,
    price: [MIN_MONEY, MAX_MONEY]
  },

  colors: {} as Colors,

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
    // * Filters form
    selectPriceForm: (state) => state.form.price,

    selectIsColorActiveForm: (state, color: string) => state.form.colorObj[color],
    selectIsCurrentCategoryIdForm: (state, passedCategoryId) => state.form.categoryId === passedCategoryId,

    // * Filters
    selectCategoryId: (state) => state.filters.categoryId,
    selectCategoryName: (state) => state.filters.categoryName,
    selectSort: (state) => state.filters.sort,
    selectPage: (state) => state.filters.page,
    selectSearch: (state) => state.filters.search,

    selectQueryArgs: (state) => state.queryArgs
  },
  reducers: {
    //  * Filters form
    setCategoryIdAndNameFormAction: setCategoryIdAndNameActionHelper,

    setPriceFormAction: (state, action: PayloadAction<number[]>) => {
      state.form.price = action.payload;
    },
    toggleColorFormAction: (state, action: PayloadAction<string>) => {
      state.form.colorObj[action.payload] = !state.form.colorObj[action.payload];
    },

    resetFormAction: (state) => {
      state.form = INIT_FILTER.form;
    },

    applyFormFiltersAction: (state) => {
      state.filters = { ...state.filters, ...state.form };
      sharedApplyFiltersAction(state);
    },

    // * Filters outside form
    setCategoryIdAndNameAction: (state, action: PayloadAction<{ categoryId: string; categoryName: string }>) => {
      setCategoryIdAndNameActionHelper(state, action);
      sharedApplyFiltersAction(state);
    },
    setPageAction: (state, action: PayloadAction<number>) => {
      state.filters.page = action.payload;
      sharedApplyFiltersAction(state);
    },
    setSortAction: (state, action: PayloadAction<FiltersSort>) => {
      state.filters.sort = action.payload;
      sharedApplyFiltersAction(state);
    },
    setSearchAction: (state, action: PayloadAction<string>) => {
      // * There is debounced thunk search
      state.filters.search = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder.addMatcher(productApi.endpoints.getProductColors.matchFulfilled, (state, action) => {
      if (action.payload) {
        const newColorObjState = Object.fromEntries(Object.keys(action.payload).map((key) => [key, false]));
        state.form.colorObj = newColorObjState;
        state.filters.colorObj = newColorObjState;
        state.colors = action.payload;
      }
    });
  }
});

export const catalogFilterSliceInjected = catalogFilterSliceLazy.injectInto(rootReducer);

export const {
  selectSort,
  selectPage,
  selectSearch,
  selectPriceForm,
  selectCategoryId,
  selectCategoryName,
  selectIsColorActiveForm,
  selectIsCurrentCategoryIdForm
} = catalogFilterSliceInjected.selectors;

export const {
  setSortAction,
  setPageAction,
  setSearchAction,
  resetFormAction,
  setPriceFormAction,
  toggleColorFormAction,
  applyFormFiltersAction,
  setCategoryIdAndNameAction,
  setCategoryIdAndNameFormAction
} = catalogFilterSliceInjected.actions;

declare module '@/shared/redux/redux' {
  export interface LazyLoadedSlices extends WithSlice<typeof catalogFilterSliceLazy> {}
}
