import { INITIAL_FILTER_VALUE } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.constants';
import { IAction } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.interface';

export const INITIAL_FILTER_CONTEXT = {
  filterState: INITIAL_FILTER_VALUE,
  dispatchFilterState(value: IAction): void {}
};
