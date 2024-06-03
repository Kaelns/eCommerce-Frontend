import { ColorsState } from '@/features/FilterForm/components/ColorFilter/ColorFilter.constants';
import { IFilterState } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.interface';

//  TODO fetch max price
export const MIN_MONEY = 0;
export const MAX_MONEY = 10000;

export const INITIAL_VALUE: IFilterState = {
  categoryKey: '',
  price: [MIN_MONEY, MAX_MONEY],
  color: ColorsState,
  search: ''
};
