import type { AppThunk } from '@/shared/redux/redux';

import { selectFilterState } from '@/pages/CatalogPage/features/CatalogFilterForm/catalogFilter.slice';

export const createProductQueryArgs =
  (categoryId: string): AppThunk =>
  (dispatch, getState) => {
    const filters = selectFilterState(getState());
  };
