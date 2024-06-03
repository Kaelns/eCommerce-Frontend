import { IFilterState, IAction } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.interface';

export interface IFilterFormProps {
  className: string;
  filterReducerHook: [IFilterState, React.Dispatch<IAction>];
}
