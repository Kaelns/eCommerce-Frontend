import { IUseSideDrawerReturn } from '@/components/SideDrawer/SideDrawer.interface';
import { IFilterState, IAction } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.interface';

export interface ICatalogMainProps {
  sideDriverHook: IUseSideDrawerReturn;
  filterReducerHook: [IFilterState, React.Dispatch<IAction>];
}
