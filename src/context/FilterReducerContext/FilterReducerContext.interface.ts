import { IAction, IFilterState } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.interface';

export interface IFilterReducer {
  filterState: IFilterState;
  dispatchFilterState: React.Dispatch<IAction>;
}
