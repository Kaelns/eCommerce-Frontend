import { ColorsState } from '@/features/FilterForm/components/ColorFilter/ColorFilter.constants';
import { IAction, IFilterState } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.interface';

export type IColorsState = typeof ColorsState;

export interface IColorFilterProps {
  filterReducerHook: [IFilterState, React.Dispatch<IAction>];
}
