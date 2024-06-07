import { ColorsState } from '@/features/FilterForm/components/ColorFilter/ColorFilter.constants';
import { Sort } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.enum';
import { IFilterFormState, IFilterState } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.interface';

//  TODO fetch max price
export const MIN_MONEY = 0;
export const MAX_MONEY = 5000;
export const NO_CATEGORY = 'no-category';

export const INITIAL_FILTER_VALUE: IFilterState = {
  categoryKey: NO_CATEGORY,
  price: [MIN_MONEY, MAX_MONEY],
  color: ColorsState,
  search: '',
  sort: Sort.NO_SORT
};

export const INITIAL_FORM_VALUE: IFilterFormState = {
  categoryKey: NO_CATEGORY,
  price: [MIN_MONEY, MAX_MONEY],
  color: ColorsState
};
