import type { FilterState, FilterFormState } from '@/pages/CatalogPage/hooks/filterReducer/types';

import { Sort } from '@/pages/CatalogPage/hooks/filterReducer/enums';
import { FILTER_COLORS_STATE } from '@/pages/CatalogPage/features/CatalogFilterForm/constants';

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

export const INITIAL_FORM_VALUE: FilterFormState = {
  categoryKey: NO_CATEGORY,
  price: [MIN_MONEY, MAX_MONEY],
  color: FILTER_COLORS_STATE
};
