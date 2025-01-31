import type { Sort, FilterStateEnum } from '@/pages/CatalogPage/hooks/filterReducer/enums';
import type { FILTER_COLORS_STATE } from '@/pages/CatalogPage/features/CatalogFilterForm/constants';

export interface FilterState {
  sort: Sort;
  page: number;
  search: string;
  price: number[];
  categoryId: string;
  categoryKey: string;
  categoryName: string;
  color: typeof FILTER_COLORS_STATE;
}

export type FilterPayload = FilterState[keyof FilterState];

export interface IAction {
  type: FilterStateEnum;
  payload?: FilterPayload;
}

export type FilterFormState = Pick<FilterState, 'categoryKey' | 'color' | 'price'>;
