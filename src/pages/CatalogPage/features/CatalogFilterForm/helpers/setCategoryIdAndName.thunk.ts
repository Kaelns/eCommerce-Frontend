import type { AppThunk } from '@/shared/redux/redux';

import { selectGetCategories } from '@/services/ecommerce-api/rtk-query/model/productApi';

import { setCategoryIdAndNameAction } from '@/pages/CatalogPage/features/CatalogFilterForm/catalogFilter.slice';

//  FIXME delete if not used
export const setCategoryIdAndName =
  (categoryId: string): AppThunk =>
  (dispatch, getState) => {
    const categories = selectGetCategories(getState());
    const categoryName = 'Some';
    dispatch(setCategoryIdAndNameAction({ categoryId, categoryName }));
  };
