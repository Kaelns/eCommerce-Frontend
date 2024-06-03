import { ColorsState } from '@/features/FilterForm/components/ColorFilter/ColorFilter.constants';
import { Sort } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.enum';
import { IFilterState } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.interface';

//  TODO fetch max price
export const MIN_MONEY = 0;
export const MAX_MONEY = 10000;
export const NO_CATEGORY = 'no-category';

export const INITIAL_FILTER_VALUE: IFilterState = {
  categoryKey: NO_CATEGORY,
  price: [MIN_MONEY, MAX_MONEY],
  color: ColorsState,
  search: '',
  sort: Sort.ALPHABETICALLY
};
