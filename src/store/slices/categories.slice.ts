import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICategories } from '@/services/ECommerceInitApi.interface';

const INIT_CATEGORIES: ICategories = {
  categories: [],
  categoriesObj: {},
  categoriesTree: []
};

export const authSlice = createSlice({
  name: 'categories',
  initialState: INIT_CATEGORIES,
  selectors: {
    selectCategories: (state) => state.categories,
    selectCategoriesObj: (state) => state.categoriesObj,
    selectCategoriesTree: (state) => state.categoriesTree
  },
  reducers: {
    setCategories(state, action: PayloadAction<{ receivedCategories: ICategories }>) {
      state.categories = action.payload.receivedCategories.categories;
      state.categoriesObj = action.payload.receivedCategories.categoriesObj;
      state.categoriesTree = action.payload.receivedCategories.categoriesTree;
    }
  }
});

export const authSliceSelectors = authSlice.selectors;
export const authSliceActions = authSlice.actions;
