import type { PayloadAction } from '@reduxjs/toolkit';
import type { FilterState } from '@/features/catalog-filters';

import { NO_CATEGORY, NO_CATEGORY_NAME } from '@/entities/categories';

export const setCategoryIdAndNameActionHelper = (
  state: FilterState,
  action: PayloadAction<{ categoryId: string; categoryName: string }>
) => {
  if (state.form.categoryId !== action.payload.categoryId) {
    state.form.categoryId = action.payload.categoryId;
    state.form.categoryName = action.payload.categoryName;
  } else {
    state.form.categoryId = NO_CATEGORY;
    state.form.categoryName = NO_CATEGORY_NAME;
  }
};
