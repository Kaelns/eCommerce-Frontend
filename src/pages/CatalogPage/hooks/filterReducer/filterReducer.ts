import type { FilterColorsKeys } from '@/pages/CatalogPage/features/CatalogFilterForm/types';
import { INITIAL_FORM_VALUE, NO_CATEGORY } from '@/pages/CatalogPage/hooks/filterReducer/constants';
import type { Sort } from '@/pages/CatalogPage/hooks/filterReducer/enums';
import { FilterState } from '@/pages/CatalogPage/hooks/filterReducer/enums';
import type { IAction, IFilterState } from '@/pages/CatalogPage/hooks/filterReducer/types';

export const filterReducer = (state: IFilterState, action: IAction): IFilterState => {
  switch (action.type) {
    case FilterState.PAGE:
      return {
        ...state,
        page: action.payload as number
      };
    case FilterState.CATEGORY:
      return {
        ...state,
        page: 1,
        categoryKey: action.payload as string
      };
    case FilterState.CATEGORY_TOGGLE:
      return {
        ...state,
        page: 1,
        categoryKey: (state.categoryKey === action.payload ? NO_CATEGORY : action.payload) as string
      };
    case FilterState.PRICE:
      return {
        ...state,
        page: 1,
        price: action.payload as number[]
      };
    case FilterState.COLOR:
      return {
        ...state,
        page: 1,
        color: {
          ...state.color,
          [action.payload as FilterColorsKeys]: !state.color[action.payload as FilterColorsKeys]
        }
      };
    case FilterState.SEARCH:
      return {
        ...state,
        page: 1,
        search: action.payload as string
      };
    case FilterState.SORT:
      return {
        ...state,
        sort: action.payload as Sort
      };
    case FilterState.CLEAR_FORM:
      return {
        ...state,
        ...INITIAL_FORM_VALUE
      };
    default:
  }
  return state;
};
