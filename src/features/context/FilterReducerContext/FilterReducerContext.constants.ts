import { INITIAL_FILTER_VALUE } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.constants';

export const INITIAL_FILTER_CONTEXT = {
  filterState: INITIAL_FILTER_VALUE,
  dispatchFilterState(): void {}
};
