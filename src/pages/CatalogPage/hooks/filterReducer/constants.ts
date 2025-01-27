import { FILTER_COLORS_STATE } from '@/pages/CatalogPage/features/CatalogFilterForm/constants';
import { Sort } from '@/pages/CatalogPage/hooks/filterReducer/enums';
import type { IFilterFormState, IFilterState } from '@/pages/CatalogPage/hooks/filterReducer/types';

//  TODO fetch max price
export const MIN_MONEY = 0;
export const MAX_MONEY = 5000;
export const NO_CATEGORY = 'no-category';

export const INITIAL_FILTER_VALUE = {
  categoryKey: NO_CATEGORY,
  price: [MIN_MONEY, MAX_MONEY],
  color: FILTER_COLORS_STATE,
  search: '',
  sort: Sort.NO_SORT,
  page: 1
};

export const INITIAL_FORM_VALUE: IFilterFormState = {
  categoryKey: NO_CATEGORY,
  price: [MIN_MONEY, MAX_MONEY],
  color: FILTER_COLORS_STATE
};
