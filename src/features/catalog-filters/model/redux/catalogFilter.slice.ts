import type { WithSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Colors, QueryProductsArgs } from '@/entities/product';
import type { FilterColorsState } from '@/features/catalog-filters/model/types';

import { isEqual } from 'lodash';
import { createSlice } from '@reduxjs/toolkit';

import { productApi, ProductConsts } from '@/entities/product';
import { NO_CATEGORY, NO_CATEGORY_NAME } from '@/entities/categories';
import { setLanguageAction, setCurrencyAction, USER_INIT_LANGUAGE, USER_INIT_CURRENCY } from '@/entities/user';

import { FiltersSort } from '@/features/catalog-filters/model/constants';
import { setCategoryIdAndNameActionHelper } from '@/features/catalog-filters/model/redux/helpers/setCategoryIdAndNameAction';
import { convertFilterToQueryArgs } from '@/features/catalog-filters/model/redux/helpers/convertFilterToQueryArgs/convertFilterToQueryArgs';

import { rootReducer } from '@/shared/lib/redux';

const INIT_FILTER = {
  filters: {
    categoryName: NO_CATEGORY_NAME as string,
    categoryId: NO_CATEGORY as string,
    colorObj: {} as FilterColorsState,
    price: [ProductConsts.MIN_MONEY, ProductConsts.MAX_MONEY] as number[],

    sort: FiltersSort.NO_SORT,
    page: 1,
    search: ''
  },

  form: {
    categoryName: NO_CATEGORY_NAME as string,
    categoryId: NO_CATEGORY as string,
    colorObj: {} as FilterColorsState,
    price: [ProductConsts.MIN_MONEY, ProductConsts.MAX_MONEY] as number[]
  },

  colors: {} as Colors,

  queryArgs: {
    limit: ProductConsts.LIMIT_ON_PAGE
  } as QueryProductsArgs,

  language: USER_INIT_LANGUAGE,
  currency: USER_INIT_CURRENCY
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
    toggleColorFormAction: (state, action: PayloadAction<{ colorKey: string }>) => {
      state.form.colorObj[action.payload.colorKey] = !state.form.colorObj[action.payload.colorKey];
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
    setPageAction: (state, action: PayloadAction<{ page: number }>) => {
      state.filters.page = action.payload.page;
      sharedApplyFiltersAction(state);
    },
    setSortAction: (state, action: PayloadAction<{ sort: FiltersSort }>) => {
      state.filters.sort = action.payload.sort;
      sharedApplyFiltersAction(state);
    },
    setSearchAction: (state, action: PayloadAction<string>) => {
      // * There is debounced thunk search
      state.filters.search = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(setLanguageAction, (state, action) => {
        state.language = action.payload;
      })
      .addCase(setCurrencyAction, (state, action) => {
        state.currency = action.payload;
      })
      .addMatcher(productApi.endpoints.getProductColors.matchFulfilled, (state, action) => {
        if (action.payload) {
          const newColorObjState = Object.fromEntries(Object.keys(action.payload).map((key) => [key, false]));
          state.form.colorObj = newColorObjState;
          state.filters.colorObj = newColorObjState;
          state.colors = action.payload;
        }
      });
  }
});

export const catalogFilterSlice = catalogFilterSliceLazy.injectInto(rootReducer);

export const {
  selectSort,
  selectPage,
  selectSearch,
  selectPriceForm,
  selectCategoryId,
  selectIsColorActiveForm,
  selectIsCurrentCategoryIdForm
} = catalogFilterSlice.selectors;

export const {
  setSortAction,
  setPageAction,
  resetFormAction,
  setSearchAction,
  setPriceFormAction,
  toggleColorFormAction,
  applyFormFiltersAction,
  setCategoryIdAndNameFormAction
} = catalogFilterSlice.actions;

declare module '@/shared/lib/redux/redux.config' {
  export interface LazyLoadedSlices extends WithSlice<typeof catalogFilterSliceLazy> {}
}
