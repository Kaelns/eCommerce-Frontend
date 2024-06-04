import { IColorsState } from '@/features/FilterForm/components/ColorFilter/ColorFilter.interface';
import { FilterState, Sort } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.enum';

export interface IFilterState {
  categoryKey: string;
  price: number[];
  color: IColorsState;
  search: string;
  sort: Sort;
}

export interface IAction {
  type: FilterState;
  payload?: IFilterState[keyof IFilterState];
}
