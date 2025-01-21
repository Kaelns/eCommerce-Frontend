import type { FilterColorsState } from '@/features/CatalogFilterForm/CatalogFilterForm.constants';
import type { FilterState, Sort } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.enum';

export interface IFilterState {
  categoryKey: string;
  price: number[];
  color: typeof FilterColorsState;
  search: string;
  sort: Sort;
  page: number;
}

export type FilterPayload = IFilterState[keyof IFilterState];

export interface IAction {
  type: FilterState;
  payload?: FilterPayload;
}

export type IFilterFormState = Pick<IFilterState, 'categoryKey' | 'price' | 'color'>;
