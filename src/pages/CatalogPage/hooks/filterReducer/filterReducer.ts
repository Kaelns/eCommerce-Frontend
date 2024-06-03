import { IColorsState } from '@/features/FilterForm/components/ColorFilter/ColorFilter.interface';
import { FilterState } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.enum';
import { IAction, IFilterState } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.interface';

export const filterReducer = (state: IFilterState, action: IAction): IFilterState => {
  switch (action.type) {
    case FilterState.CATEGORY:
      return {
        ...state,
        categoryKey: action.payload as string
      };
    case FilterState.CATEGORY_TOGGLE:
      return {
        ...state,
        categoryKey: (state.categoryKey === action.payload ? '' : action.payload) as string
      };
    case FilterState.PRICE:
      return {
        ...state,
        price: action.payload as number[]
      };
    case FilterState.COLOR:
      return {
        ...state,
        color: {
          ...state.color,
          [action.payload as keyof IColorsState]: !state.color[action.payload as keyof IColorsState]
        }
      };
    default:
  }
  return state;
};
