import type { Sort } from '@/pages/CatalogPage/hooks/filterReducer/enums';
import type { IAction, FilterState } from '@/pages/CatalogPage/hooks/filterReducer/types';
import type { FilterColorsKeys } from '@/pages/CatalogPage/features/CatalogFilterForm/data/types';

import { FilterStateEnum } from '@/pages/CatalogPage/hooks/filterReducer/enums';
import { NO_CATEGORY, INITIAL_FORM_VALUE } from '@/pages/CatalogPage/hooks/filterReducer/constants';

export const filterReducer = (state: FilterState, action: IAction): FilterState => {
  switch (action.type) {
    case FilterStateEnum.CATEGORY:
      return {
        ...state,
        page: 1,
        categoryKey: action.payload as string
      };
    case FilterStateEnum.CATEGORY_TOGGLE:
      return {
        ...state,
        page: 1,
        categoryKey: (state.categoryKey === action.payload ? NO_CATEGORY : action.payload) as string
      };
    case FilterStateEnum.CLEAR_FORM:
      return {
        ...state,
        ...INITIAL_FORM_VALUE
      };
    case FilterStateEnum.COLOR:
      return {
        ...state,
        page: 1,
        color: {
          ...state.color,
          [action.payload as FilterColorsKeys]: !state.color[action.payload as FilterColorsKeys]
        }
      };
    case FilterStateEnum.PAGE:
      return {
        ...state,
        page: action.payload as number
      };
    case FilterStateEnum.PRICE:
      return {
        ...state,
        page: 1,
        price: action.payload as number[]
      };
    case FilterStateEnum.SEARCH:
      return {
        ...state,
        page: 1,
        search: action.payload as string
      };
    case FilterStateEnum.SORT:
      return {
        ...state,
        sort: action.payload as Sort
      };
    default:
  }
  return state;
};
