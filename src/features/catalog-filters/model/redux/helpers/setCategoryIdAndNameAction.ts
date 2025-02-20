import type { PayloadAction } from '@reduxjs/toolkit';
import type { FilterState } from '@/features/catalog-filters/model/redux/catalogFilter.slice';

import { ProductConsts } from '@/entities/product';

export const setCategoryIdAndNameActionHelper = (
  state: FilterState,
  action: PayloadAction<{ categoryId: string; categoryName: string }>
) => {
  if (state.form.categoryId !== action.payload.categoryId) {
    state.form.categoryId = action.payload.categoryId;
    state.form.categoryName = action.payload.categoryName;
  } else {
    state.form.categoryId = ProductConsts.NO_CATEGORY;
    state.form.categoryName = ProductConsts.NO_CATEGORY_NAME;
  }
};
