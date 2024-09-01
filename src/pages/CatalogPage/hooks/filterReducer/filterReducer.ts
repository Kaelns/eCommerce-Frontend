import { IFilterColorsKeys } from '@/features/FilterForm/FilterForm.types';
import { INITIAL_FORM_VALUE, NO_CATEGORY } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.constants';
import { FilterState, Sort } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.enum';
import { IAction, IFilterState } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.interface';

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
          [action.payload as IFilterColorsKeys]: !state.color[action.payload as IFilterColorsKeys]
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
